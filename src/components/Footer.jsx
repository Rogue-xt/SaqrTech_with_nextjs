import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-white-400 pb-10">
          <div>
            <h4 className="text-sm uppercase font-bold mb-2">
              How can we help?
            </h4>
            <p className="text-2xl font-semibold">Contact us anytime</p>
          </div>
          <div>
            <h4 className="text-sm uppercase font-bold mb-2">Call us</h4>
            <p className="text-xl">+971 58 951 6916</p>
          </div>
          <div>
            <h4 className="text-sm uppercase font-bold mb-2">
              Send us a message
            </h4>
            <p className="text-xl">info@saqrtech.com</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Image
            src="/images/logo-white.png"
            alt="Al Saqr Logo"
            width={180}
            height={60}
          />

          <div className="flex space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/services">Services</Link>
            <Link href="/terms">Terms of Services</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div className="text-center mt-10 text-sm opacity-80">
          Copyright © 2024 Al Saqr Technologies LLC. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
