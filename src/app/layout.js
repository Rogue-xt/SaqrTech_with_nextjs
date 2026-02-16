import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Map from "@/components/Map";
import GlobalCursorGlow from "@/components/GlobalCursorGlow";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Al Saqr Technologies",
  description:
    "Mpos is a cutting-edge multi POS solution designed to streamline your business operations. With seamless integration, real-time analytics, and user-friendly interfaces, Mpos empowers businesses to manage sales, inventory, and customer relationships efficiently across multiple locations. Experience the future of retail management with Mpos.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <GlobalCursorGlow />
        <Header />
       
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              zIndex: 9999, // Force it to the front
            },
          }}
        />
      </body>
    </html>
  );
}
