import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Map from "@/components/Map";

export const metadata = {
  title: "Al Saqr Technologies",
  description:
    "Mpos is a cutting-edge multi POS solution designed to streamline your business operations. With seamless integration, real-time analytics, and user-friendly interfaces, Mpos empowers businesses to manage sales, inventory, and customer relationships efficiently across multiple locations. Experience the future of retail management with Mpos.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Added overflow-x-hidden to prevent the horizontal scrollbar */}
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        {/* The main content area */}
        <main className="flex-grow">{children}</main>
        <Map/>
        <Footer />
      </body>
    </html>
  );
}
