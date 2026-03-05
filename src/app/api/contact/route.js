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
    const { name, email, company, phone, subject } = body;

    // 1. Server-side Validation
    if (!name || !email || !subject) {
      return NextResponse.json(
        { message: "Missing required fields (Name, Email, or Message)" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Render HTML
    // Make sure 'body' contains everything ContactEnquiryMail needs
    const adminHtml = await render(getAdminEmail(body));
    const userHtml = await render(getUserEmail(body));

    await Promise.all([
      transporter.sendMail({
        from: `"Website Monitor" <${process.env.EMAIL_USER}>`,
        to: "info@saqrtech.com",
        replyTo: email,
        subject: `New Enquiry from ${name} | ${company || "Individual"}`,
        html: adminHtml,
      }),
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

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("DETAILED ERROR:", error); // Check your VS Code terminal for this!
    return NextResponse.json(
      { message: error.message || "Failed to process request" },
      { status: 500 },
    );
  }
}
