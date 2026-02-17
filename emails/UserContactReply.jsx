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

export const UserContactReply = ({ name }) => (
  <Html>
    <Head />
    <Preview>Thanks for reaching out to Al Saqr Technologies</Preview>
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
            Thank you for contacting <strong>Al Saqr Technologies</strong>.
            We've received your inquiry and our technical team is currently
            reviewing your requirements.
          </Text>

          <Section style={infoBox}>
            <Text style={infoText}>
              <strong>What's Next?</strong>
              <br />
              One of our consultants will contact you shortly via phone or email
              to discuss your project in detail.
            </Text>
          </Section>

          <Text style={paragraph}>
            In the meantime, feel free to explore our latest solutions or reach
            out to us directly via WhatsApp for urgent matters.
          </Text>

          <Section style={{ textAlign: "center", margin: "30px 0" }}>
            <Link href="https://wa.me/971545252469" style={button}>
              Chat via WhatsApp
            </Link>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            Al Sajaa Industrial, Sharjah, UAE <br />© 2026 Al Saqr Technologies
            L.L.C
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles (Matching your EnquiryMail for consistency)
const main = {
  backgroundColor: "#000000",
  padding: "40px 0",
  fontFamily: "Helvetica, Arial, sans-serif",
};
const container = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  maxWidth: "600px",
};
const header = {
  backgroundColor: "#000000",
  padding: "30px",
  textAlign: "center",
};
const content = { padding: "40px" };
const h1 = { fontSize: "22px", fontWeight: "bold", color: "#333" };
const paragraph = { fontSize: "16px", color: "#555", lineHeight: "1.6" };
const infoBox = {
  background: "#fef2f2",
  padding: "20px",
  borderRadius: "12px",
  borderLeft: "4px solid #dc2626",
};
const infoText = { color: "#991b1b", fontSize: "14px", margin: "0" };
const button = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  padding: "14px 30px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  display: "inline-block",
};
const hr = { borderColor: "#eee", margin: "30px 0" };
const footer = { color: "#aaa", fontSize: "12px", textAlign: "center" };
