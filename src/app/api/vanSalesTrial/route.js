import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EnquiryMail } from "emails/EnquiryMail";
import { PrismaClient } from "@prisma/client";
import { UserWelcomeMail } from "emails/UserWelcomeMail";

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

    // 2. Start the Email process in the background (DO NOT 'await' this)
    // This allows the function to move to the return statement immediately.
    (async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Render templates in parallel to save time
        const [adminHtml, userHtml] = await Promise.all([
          render(<EnquiryMail data={body} />),
          render(<UserWelcomeMail name={name} />),
        ]);

        // Send both emails in parallel
        await Promise.all([
          // Admin Notification
          transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "saqrtechinfo@gmail.com",
            subject: `🚀 New Lead: ${name}`,
            html: adminHtml,
          }),
          // User Confirmation
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