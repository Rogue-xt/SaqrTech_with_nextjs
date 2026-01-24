import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EnquiryMail } from "emails/EnquiryMail";
import { PrismaClient } from "@prisma/client";


export async function POST(request) {
  // 1. Get the data from the request body
  const body = await request.json();
  const { name, number, email, tallyUser, tallynumber, info } = body;

const newLead = await prisma.VanSalesTrial.create({
  data: {
    name,
    number,
    email,
    tallyUser,
    tallynumber: tallynumber || null,
    info,
  },
});
  const emailHtml = await render(<EnquiryMail data={body} />);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "teamaxon2024@gmail.com",
      subject: `Mpos Trial Enquiry: ${name}`, // Fixed: changed 'subject' to 'name'
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Nodemailer Error Details:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 },
    );
  }
}
