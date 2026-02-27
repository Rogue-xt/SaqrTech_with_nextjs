import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";
import { VanSalesEnquiryMail } from "emails/VanSalesEnquiryMail";
import { UserVansalesReplyMail } from "emails/UserVansalesReplyMail";

const prisma = new PrismaClient();
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, number, email, tallyUser, tallynumber, info } = body;

    // 1. Create the Lead in the Database (Wait for this to ensure data safety)
    const newLead = await prisma.vanSalesTrial.create({
      data: {
        name,
        number,
        email,
        tallyUser,
        tallynumber: tallynumber || null,
        info,
      },
    });
    (async () => {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.zoho.com", // Zoho SMTP Host
          port: 465, // Secure SSL Port
          secure: true, // Use SSL
          auth: {
            user: process.env.EMAIL_USER, // e.g., info@saqrtech.com
            pass: process.env.EMAIL_PASS, // Your 16-character Zoho App Password
          },
        });
        // Render templates in parallel to save time
        const [adminHtml, userHtml] = await Promise.all([
          render(<VanSalesEnquiryMail data={body} />),
          render(<UserVansalesReplyMail name={name} />),
        ]);

        await Promise.all([
          // Admin Notification (Sent to your company)
          transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "info@saqrtech.com",
            replyTo: email, // Direct reply to customer
            subject: `🚚 Van Sales trial request from ${name}`,
            html: adminHtml,
          }),
          // User Confirmation (Sent to the customer)
          transporter.sendMail({
            from: `"Al Saqr Technologies" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Mpos Van Sales App Trial & Feature Guide",
            html: userHtml,
            attachments: [
              {
                filename: "Mpos-Brochure.pdf",
                path: "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/Route-Sales-Management%20Software.pdf",
              },
            ],
          }),
        ]);
        console.log("Background emails sent successfully for:", email);
      } catch (mailError) {
        // Since the response is already sent, we log errors to the server console
        console.error("Background Email Error:", mailError);
      }
    })();

    // 3. Send Immediate Feedback to UI
    return NextResponse.json(
      { message: "Lead captured successfully", id: newLead.id },
      { status: 200 },
    );
  } catch (error) {
    console.error("Request Error:", error);
    return NextResponse.json(
      { message: "Failed to process request", error: error.message },
      { status: 500 },
    );
  }
}
