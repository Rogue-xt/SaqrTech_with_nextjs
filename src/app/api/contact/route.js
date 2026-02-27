import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ContactEnquiryMail } from "emails/ContactEnquiryMail";
import { UserContactReplyMail } from "emails/UserContactReplyMail";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject } = body;

    (async () => {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.zoho.com", // Changed to Zoho
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER, // Ensure this is info@saqrtech.com
            pass: process.env.EMAIL_PASS, // Your 16-character Zoho App Password
          },
        });

        const [emailHtml, userHtml] = await Promise.all([
          render(<ContactEnquiryMail data={body} />),
          render(<UserContactReplyMail data={body} />),
        ]);

        await Promise.all([
          // 1. Admin Notification (To Yourself)
          transporter.sendMail({
            // Setting 'from' as your company email address
            from: `"Website Monitor" <${process.env.EMAIL_USER}>`,
            to: "info@saqrtech.com",
            replyTo: email, // Click 'Reply' to email the customer directly
            subject: `🚀 New Inquiry: ${subject || "General"} from ${name}`,
            html: emailHtml,
          }),
          // 2. User Confirmation (To Customer)
          transporter.sendMail({
            from: `"Al Saqr Technologies" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thank You for Contacting Al Saqr Technologies",
            html: userHtml,
            attachments: [
              {
                filename: "Mpos-Brochure.pdf",
                path: "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/Route-Sales-Management%20Software.pdf",
              },
            ],
          }),
        ]);

        console.log("Zoho background emails sent for:", name);
      } catch (mailError) {
        console.error("Zoho SMTP Failure:", mailError);
      }
    })();

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
