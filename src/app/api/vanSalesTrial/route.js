import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";
import { VanSalesEnquiryMail } from "emails/VanSalesEnquiryMail";
import { UserVansalesReplyMail } from "emails/UserVansalesReplyMail";

const prisma = new PrismaClient();

// --- 1. DEFINE TEMPLATES OUTSIDE THE TRY/CATCH ---
// This satisfies the React compiler warning.
const getAdminEmail = (data) => <VanSalesEnquiryMail data={data} />;
const getUserEmail = (name) => <UserVansalesReplyMail name={name} />;

export async function POST(request) {
  const body = await request.json();
 const { name, email, number, tallyUser, tallynumber, info } = body;

 try {
   const newLead = await prisma.vanSalesTrial.create({
     data: {
       name: name,
       number: number,
       email: email,
       tallyUser: tallyUser === true ? "Yes" : "No",
       tallynumber: tallynumber || null,
       info: info || "",
     },
   });
   // 3. Email Logic
   // We wrap this in a nested try/catch so if email fails,
   // the user still gets the "Success" screen from the DB entry.
   try {
     const transporter = nodemailer.createTransport({
       host: "smtp.zoho.com",
       port: 465,
       secure: true,
       auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
       },
     });

     // --- 4. RENDER TEMPLATES ---
     // v2.0.4 render is async. We pass the function result here.
     const adminHtml = await render(getAdminEmail(body));
     const userHtml = await render(getUserEmail(name));

     // --- 5. SEND EMAILS (AWAITED for Netlify) ---
     await Promise.all([
       transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: "info@saqrtech.com",
         replyTo: email,
         subject: `🚚 Van Sales trial request from ${name}`,
         html: adminHtml,
       }),
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
   } catch (mailError) {
     console.error("Mail Delivery Error:", mailError);
   }

   return NextResponse.json({ success: true, id: newLead.id }, { status: 200 });
 } catch (error) {
   console.error("General API Error:", error);
   return NextResponse.json(
     { error: "Internal Server Error" },
     { status: 500 },
   );
 }
}
