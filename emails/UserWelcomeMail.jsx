// emails/UserWelcomeMail.jsx
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
  Img,
} from "@react-email/components";
import * as React from "react";

export const UserWelcomeMail = ({ name }) => (
  <Html>
    <Head />
    <Preview>Your Mpos Brochure is here!</Preview>
    <Body style={{ backgroundColor: "#f9f9f9", padding: "20px" }}>
      <Container
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "10px",
        }}
      >
        <Heading style={{ fontSize: "24px", color: "#333" }}>
          Hello {name},
        </Heading>
        <Text style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          Thank you for your interest in the
          <strong>Mpos Route Sales Application</strong>. We have received your
          request for a 7-day free trial.
        </Text>

        {/* --- EDITED SECTION START --- */}
        <Text style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          Attached to this email is our latest product brochure.
          <span>
            It details how Mpos helps businesses like yours achieve
            field-to-accounts automation through key features such as:
          </span>
        </Text>
        <ul style={{ fontSize: "16px", color: "#555", lineHeight: "1.8", marginLeft:"0px" }}>
          <li>
            <strong>Smart Sync:</strong> Instant data synchronization with
            <strong>TallyPrime</strong> and other major ERPs.
          </li>
          <li>
            <strong>Compliance:</strong> Fully integrated, automated
            <strong>tax-compliant e-invoicing</strong>.
          </li>
          <li>
            <strong>Inventory Control:</strong> Real-time visibility into
            <strong>livestock</strong> and vehicle stock reconciliation.
          </li>
          <li>
            <strong>Mobility:</strong> Seamless operation in both
            <strong>offline and online modes</strong>.
          </li>
        </ul>
        {/* --- EDITED SECTION END --- */}

        <Text style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          A member of our team will contact you soon to assist with your setup
          and ensure you have everything you need to begin your trial.
        </Text>
        <Section style={{ textAlign: "center", margin: "30px 0" }}>
          <Link
            href="https://www.saqrtech.com"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Visit Our Website
          </Link>
        </Section>
        <Text style={{ fontSize: "14px", color: "#999" }}>
          Best Regards,
          <br />
          Team Al Saqr Technologies
        </Text>
      </Container>
    </Body>
  </Html>
);
