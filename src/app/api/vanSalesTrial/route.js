import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EnquiryMail } from "emails/EnquiryMail";
import { PrismaClient } from "@prisma/client";
import { UserWelcomeMail } from "emails/UserWelcomeMail";

const prisma = new PrismaClient();
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

  const adminHtml = await render(<EnquiryMail data={body} />);
  const userHtml = await render(<UserWelcomeMail name={name} />);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Send Admin Notification (Existing)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "teamaxon2024@gmail.com",
      subject: `🚀 New Lead: ${name}`,
      html: adminHtml,
    });

    // 3. Send User Confirmation + Attachment
    await transporter.sendMail({
      from: `"Al Saqr Technologies" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Mpos Van Sales App Trial & Feature Guide",
      html: userHtml,
      attachments: [
        {
          filename: "Mpos-Brochure.pdf",
          path: "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/Route-Sales-Management%20Software.pdf", // USE A PUBLIC URL
        },
      ],
    });

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
