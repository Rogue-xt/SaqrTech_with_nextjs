import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EnquiryMail } from "emails/EnquiryMail";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, subject, requirements } = body;

    // 1. Background Email Process
    // We do NOT 'await' this wrapper to provide immediate UI feedback
    (async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Render the React Email template to HTML
        const emailHtml = await render(<EnquiryMail data={body} />);

        await transporter.sendMail({
          from: `"Website Monitor" <${process.env.EMAIL_USER}>`,
          to: "saqrtechinfo@gmail.com",
          subject: `🚀 New Inquiry: from ${name}`,
          html: emailHtml,
        });

        console.log("Background email sent for inquiry:", subject);
      } catch (mailError) {
        console.error("Background Email Failure:", mailError);
      }
    })();

    // 2. Immediate Response to UI
    return NextResponse.json(
      { message: "Success! Your message has been sent." },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 },
    );
  }
}
