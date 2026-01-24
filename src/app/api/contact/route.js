import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, phone, email, company, subject, requirements } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use a Google App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "teamaxon2024@gmail.com", // Your company email
      subject: `Website Inquiry: ${subject}`,
      text: `
        New Inquiry Details:
        --------------------
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Company: ${company || "N/A"}
        Subject: ${subject}
        Requirements: ${requirements}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 },
    );
  }
}
