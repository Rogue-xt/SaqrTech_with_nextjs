
import { Head,Html,Preview,Body,Container,Section,Text,Heading,Link,Hr, Img } from "@react-email/components";
import * as React from "react";


export const EnquiryMail = ({ data }) => (
  <Html>
    <Head />
    <Preview>New Trial Request from {data.name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            width="150"
            height="50"
            style={logo}
            src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/logo-white.png"
            alt="Al Saqr Technologies"
          />
          {/* <Heading style={heading}>Al Saqr Technologies</Heading> */}
        </Section>
        <Section style={content}>
          <Text style={paragraph}>Hello Admin,</Text>
          <Text style={paragraph}>
            You have a new consultation request for
            <strong> Mpos Van Sales</strong>:
          </Text>

          <Section style={box}>
            <Text style={boxText}>
              <strong>Name:</strong> {data.name}
            </Text>
            <Text style={boxText}>
              <strong>Phone:</strong> {data.number}
            </Text>
            <Text style={boxText}>
              <strong>Email:</strong> {data.email}
            </Text>
            <Text style={boxText}>
              <strong>Tally User:</strong> {data.tallynumber ? "Yes" : "No"}
            </Text>
            {data.tallynumber && (
              <Text style={boxText}>
                <strong>Tally Serial:</strong> {data.tallynumber}
              </Text>
            )}
          </Section>

          <Text style={paragraph}>
            <strong>Message:</strong>
          </Text>
          <Text style={messageBox}>{data.info || "No additional info."}</Text>

          <Link href={`tel:${data.number}`} style={button}>
            Call Client
          </Link>
          <Hr style={hr} />
          <Text style={footer}>Ajman, UAE • © 2026 Al Saqr Technologies</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Styles
const main = { backgroundColor: "#f6f9fc", padding: "40px 0" };
const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e1e1e1",
  borderRadius: "8px",
  overflow: "hidden",
};
const header = {
  backgroundColor: "#000000",
  padding: "30px",
  textAlign: "center",
};
const heading = { color: "#ffffff", margin: "0", fontSize: "24px" };
const content = { padding: "40px" };
const paragraph = { fontSize: "16px", color: "#3c4149" };
const box = {
  background: "#f9fafb",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
};
const boxText = { margin: "5px 0", fontSize: "14px" };
const messageBox = {
  fontStyle: "italic",
  color: "#555",
  background: "#fff8e1",
  padding: "10px",
  borderRadius: "5px",
};
const button = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  display: "inline-block",
  marginTop: "20px",
};
const logo = {
  margin: "0 auto",
};
const hr = { borderColor: "#e6ebf1", margin: "20px 0" };
const footer = { color: "#8898aa", fontSize: "12px", textAlign: "center" };
