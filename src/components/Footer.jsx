import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6"; // Recommended: npm install react-icons

const socialLinks = [
  { name: "Facebook", href: "#", icon: <FaFacebookF /> },
  { name: "Instagram", href: "#", icon: <FaInstagram /> },
  { name: "X", href: "#", icon: <FaXTwitter /> },
  { name: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  { name: "TikTok", href: "#", icon: <FaTiktok /> },
  { name: "YouTube", href: "#", icon: <FaYoutube /> },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Terms of Services", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 text-white z-10">
      {/* ================= FLOATING WHATSAPP ================= */}

      <Link
        href="https://wa.me/971545252469"
        target="_blank"
        className="fixed right-6 bottom-6 z-50 rounded-full bg-red-600 px-6 py-4 font-semibold text-white shadow-2xl transition-all hover:scale-110 hover:bg-red-700"
      >
        WhatsApp
      </Link>
      <div className="container mx-auto px-6 lg:px-12">
        {/* --- Top Section: Contact Grid --- */}
        <div className="mb-16 grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              How can we help?
            </h4>
            <p className="text-2xl font-light italic">Contact us anytime</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Call us
            </h4>
            <p className="text-xl transition-colors hover:text-gray-400">
              <a href="tel:+971589516916">+971 58 951 6916</a>
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              Send us a message
            </h4>
            <p className="text-xl transition-colors hover:text-gray-400">
              <a href="mailto:info@saqrtech.com">info@saqrtech.com</a>
            </p>
          </div>
        </div>

        {/* --- Middle Section: Brand, Nav, and Socials --- */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Al Saqr Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="tracking-wider uppercase transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-[11px] tracking-[0.2em] text-gray-600 uppercase">
          &copy; {new Date().getFullYear()} Al Saqr Technologies LLC. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
