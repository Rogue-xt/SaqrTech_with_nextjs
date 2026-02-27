import {
  Head,
  Html,
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

export const ContactEnquiryMail = ({ data }) => (
  <Html>
    <Head />
    <Preview>New Website Inquiry: {data.subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            width="140"
            height="40"
            style={logo}
            src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/logo-white.png"
            alt="Al Saqr Technologies"
          />
        </Section>
        <Section style={content}>
          <Heading style={h1}>
            New Business <span style={{ color: "#dc2626" }}>Inquiry</span>
          </Heading>
          <Text style={paragraph}>Hello Admin,</Text>
          <Text style={paragraph}>
            You have received a new message via the <strong>Contact Us</strong>{" "}
            form:
          </Text>

          <Section style={box}>
            <Text style={boxText}>
              <strong>Name:</strong> {data.name}
            </Text>
            <Text style={boxText}>
              <strong>Phone:</strong> {data.phone}
            </Text>
            <Text style={boxText}>
              <strong>Email:</strong> {data.email}
            </Text>
            <Text style={boxText}>
              <strong>Company:</strong> {data.company || "N/A"}
            </Text>
          </Section>

          <Text style={label}>Requirements / Message:</Text>
          <Section style={messageBox}>
            <Text style={messageText}>{data.requirements}</Text>
          </Section>

          {/* Action Buttons: Call and Email */}
          <Section style={{ textAlign: "center", marginTop: "30px" }}>
            <Link
              href={`tel:${data.phone.replace(/\s/g, "")}`}
              style={callButton}
            >
              📞 Call Client
            </Link>
            <span style={{ padding: "0 10px" }}></span>
            <Link href={`mailto:${data.email}`} style={emailButton}>
              ✉️ Reply via Email
            </Link>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            Sharjah, UAE • © 2026 Al Saqr Technologies L.L.C
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = {
  backgroundColor: "#f4f4f5",
  padding: "40px 0",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif",
};
const container = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  maxWidth: "600px",
  margin: "0 auto",
};
const header = {
  backgroundColor: "#000000",
  padding: "30px",
  textAlign: "center",
};
const content = { padding: "40px" };
const h1 = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};
const paragraph = { fontSize: "16px", color: "#333", lineHeight: "1.5" };
const label = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#dc2626",
  textTransform: "uppercase",
  marginTop: "20px",
};
const box = {
  background: "#f4f4f5",
  padding: "20px",
  borderRadius: "12px",
  margin: "20px 0",
};
const boxText = { margin: "8px 0", fontSize: "14px", color: "#333" };
const messageBox = {
  background: "#000000",
  padding: "20px",
  borderRadius: "12px",
  borderLeft: "4px solid #dc2626",
};
const messageText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
};

// Updated Button Styles
const callButton = {
  backgroundColor: "#16a34a", // Green for calling
  color: "#ffffff",
  padding: "12px 25px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  display: "inline-block",
};

const emailButton = {
  backgroundColor: "#dc2626", // Red for email
  color: "#ffffff",
  padding: "12px 25px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "14px",
  display: "inline-block",
};

const logo = { margin: "0 auto" };
const hr = { borderColor: "#e5e7eb", margin: "30px 0" };
const footer = {
  color: "#9ca3af",
  fontSize: "12px",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "1px",
};
