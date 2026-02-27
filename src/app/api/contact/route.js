import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactEnquiryMail } from "emails/ContactEnquiryMail";
import { UserContactReplyMail } from "emails/UserContactReplyMail";

// 1. DEFINE TEMPLATES OUTSIDE (Satisfies the JSX try/catch rule)
const getAdminEmail = (data) => <ContactEnquiryMail data={data} />;
const getUserEmail = (data) => <UserContactReplyMail name={data.name} />;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // 2. Transporter Setup
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Render HTML (Awaited)
    const adminHtml = await render(getAdminEmail(body));
    const userHtml = await render(getUserEmail(body));

    // 4. Send Mail (CRITICAL: Await this so Netlify doesn't kill the process)
    await Promise.all([
      // Admin Notification
      transporter.sendMail({
        from: `"Website Monitor" <${process.env.EMAIL_USER}>`,
        to: "info@saqrtech.com",
        replyTo: email,
        subject: `New Enquiry from ${name} | ${company || "Individual"}`,
        html: adminHtml,
      }),
      // User Confirmation
      transporter.sendMail({
        from: `"Al Saqr Technologies" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting Al Saqr Technologies",
        html: userHtml,
        attachments: [
          {
            filename: "Al-Saqr-Brochure.pdf",
            path: "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/Route-Sales-Management%20Software.pdf",
          },
        ],
      }),
    ]);

    console.log("Zoho emails successfully sent for:", name);

    return NextResponse.json(
      { message: "Success! Your message has been sent." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Zoho SMTP/API Failure:", error);
    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 },
    );
  }
}
