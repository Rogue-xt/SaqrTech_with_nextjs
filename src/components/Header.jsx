"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname(); // 2. Get the current route
  const isHomePage = pathname === "/"; // Check if it's home

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Determine styles based on page and scroll position
  const headerBg = isHomePage
    ? scrolled
      ? "bg-white shadow-sm"
      : "bg-transparent"
    : "bg-white shadow-sm relative"; // Default white for other pages

  const textColor = isHomePage && !scrolled ? "text-white" : "text-gray-700";

  const logoInvert = isHomePage && !scrolled ? "brightness-0 invert" : "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Van Sales App", href: "/van-sales-app" },
    { name: "About Us", href: "/about-us" },
    { name: "Whats New!", href: "/whats-new" },
  ];

  return (
    <header
      className={`top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 flex items-center justify-between px-6 md:px-8 py-4 ${
        isHomePage ? "fixed" : "sticky"
      } ${headerBg}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Al Saqr Logo"
            width={140}
            height={40}
            className={logoInvert}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={`hidden md:flex space-x-6 font-medium ${textColor}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-red-600 transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right Side */}
      <div className="hidden md:flex items-center space-x-4">
        <span
          className={
            isHomePage && !scrolled
              ? "text-gray-200 text-sm"
              : "text-gray-500 text-sm"
          }
        >
          +971 58 951 6916
        </span>
        <Link
          href="/contact-us"
          className={`px-6 py-2 border transition ${
            isHomePage && !scrolled
              ? "border-white text-white hover:bg-white hover:text-black"
              : "bg-black border-black text-white hover:bg-white hover:text-black"
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className={`md:hidden p-2 ${isHomePage && !scrolled ? "text-white" : "text-black"}`}
        onClick={() => setIsOpen(true)}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar Panel */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-xl p-6 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
        >
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-6 text-lg font-medium text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact-us"
              className="bg-black text-white text-center py-3 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm font-bold">+971 58 951 6916</p>
          </div>
        </div>
      </div>
    </header>
  );
}
