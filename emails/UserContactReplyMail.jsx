import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";

export const UserContactReplyMail = ({ name }) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting Al Saqr Technologies</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            width="140"
            src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/logo-white.png"
            alt="Al Saqr Technologies"
          />
        </Section>

        <Section style={content}>
          <Heading style={h1}>Hello {name},</Heading>
          <Text style={paragraph}>
            Thank you for reaching out to <strong>Al Saqr Technologies</strong>.
            We have received your inquiry from our website, and our team is
            already reviewing your requirements.
          </Text>

          <Text style={paragraph}>
            In the meantime, we have attached our{" "}
            <strong>Corporate Brochure</strong> to this email for you to explore
            our full range of IT and software solutions.
          </Text>

          {/* --- ACTION BUTTONS --- */}
          <Section style={{ textAlign: "center", margin: "30px 0" }}>
            <Link
              href="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/Route-Sales-Management%20Software.pdf"
              style={primaryButton}
            >
              📄 View Brochure Online
            </Link>

            <div style={{ margin: "15px 0" }} />

            <Link href="https://wa.me/971589516916" style={whatsappButton}>
              💬 Chat on WhatsApp
            </Link>
          </Section>

          <Section style={infoBox}>
            <Text style={infoText}>
              <strong>What&apos;s Next?</strong>
              <br />
              One of our consultants will contact you shortly via phone or email
              to discuss how we can assist your business.
            </Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            <strong>Al Saqr Technologies L.L.C</strong>
            <br />
            Emirates Industrial City, Sharjah, UAE
            <br />© 2026 All Rights Reserved
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// --- STYLES ---
const main = {
  backgroundColor: "#f4f4f5",
  padding: "40px 0",
  fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
  maxWidth: "600px",
  margin: "0 auto",
  border: "1px solid #e5e7eb",
};

const header = {
  backgroundColor: "#000000",
  padding: "30px",
  textAlign: "center",
};

const content = { padding: "40px" };

const h1 = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#18181b",
  margin: "0 0 20px 0",
};

const paragraph = {
  fontSize: "16px",
  color: "#4b5563",
  lineHeight: "1.6",
  margin: "10px 0",
};

const primaryButton = {
  backgroundColor: "#dc2626", // Red from your logo
  color: "#ffffff",
  padding: "14px 30px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "15px",
  display: "inline-block",
};

const whatsappButton = {
  backgroundColor: "#25D366", // WhatsApp Green
  color: "#ffffff",
  padding: "14px 30px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "15px",
  display: "inline-block",
};

const infoBox = {
  background: "#fef2f2",
  padding: "20px",
  borderRadius: "12px",
  borderLeft: "4px solid #dc2626",
  marginTop: "20px",
};

const infoText = {
  color: "#991b1b",
  fontSize: "14px",
  margin: "0",
  lineHeight: "1.5",
};

const hr = { borderColor: "#e5e7eb", margin: "30px 0" };

const footer = {
  color: "#9ca3af",
  fontSize: "12px",
  textAlign: "center",
  lineHeight: "1.5",
};
