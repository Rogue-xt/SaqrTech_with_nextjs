"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pageConfigs = {
    "/": 50,
    "/services": 1000,
    "/about-us": 1400,
    "/blogs/why-mpos-van-sales-software": 1400,
    "/van-sales-app": 4000,
    "/blogs/tally-accounting-software": 8400,
    "/blogs/best-it-company-in-sharjah": 8400,
    "/blogs/e-invoicing-e-vat-filing-uae": 8400,
  };

  const isTransparentInitial = pathname in pageConfigs;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = pageConfigs[pathname] || 50;
      setScrolled(window.scrollY > threshold);
    };

    if (isTransparentInitial) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setScrolled(false);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isTransparentInitial]);

  const isCurrentTransparent = isTransparentInitial && !scrolled;

  // --- Header style ---
  const headerBg =
    !isTransparentInitial || scrolled
      ? "bg-white shadow-sm backdrop-blur-md"
      : "bg-white md:bg-transparent md:backdrop-blur-none ";

  // Ensure the text and icons are always dark on mobile
  const textColor = isCurrentTransparent
    ? "text-gray-900 md:text-white"
    : "text-gray-700";
  const logoInvert = isCurrentTransparent ? "md:brightness-0 md:invert" : "";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Van Sales App", href: "/van-sales-app" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Blogs",
      href: "#",
      dropdown: [
        { name: "Why Mpos", href: "/blogs/why-mpos-van-sales-software" },
        {
          name: "Tally Accounting Software",
          href: "/blogs/tally-accounting-software",
        },
        {
          name: "Best IT Company in Sharjah",
          href: "/blogs/best-it-company-in-sharjah",
        },
        {
          name: "E-Invoicing & E-VAT Filing",
          href: "/blogs/e-invoicing-e-vat-filing-uae",
        },
        {
          name: "Field Sales Application",
          href: "/blogs/field-sales-application",
        },
      ],
    },
  ];

  // Helper to check if link is active
  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 md:px-8 ${headerBg}`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Al Saqr Logo"
            width={140}
            height={40}
            className={`transition-all duration-500 ${logoInvert}`}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`hidden items-center space-x-8 font-medium transition-colors duration-500 md:flex ${textColor}`}
      >
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="group relative py-2"
            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={link.href}
              className={`relative flex items-center gap-1 transition-all ${
                isActive(link.href)
                  ? "font-bold text-red-600"
                  : "hover:text-red-600"
              }`}
            >
              {link.name}
              {/* Active Underline Effect */}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-red-600" />
              )}
              {link.dropdown && (
                <svg
                  className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {/* Dropdown Menu */}
            {link.dropdown && activeDropdown === link.name && (
              <div className="animate-in fade-in slide-in-from-top-2 absolute top-full left-0 w-48 pt-2 duration-200">
                <div
                  className={`overflow-hidden rounded-xl border shadow-xl ${
                    isCurrentTransparent
                      ? "border-white/10 bg-zinc-900 text-white"
                      : "border-gray-100 bg-white text-gray-800"
                  }`}
                >
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`block px-5 py-3 text-sm transition ${
                        isActive(sub.href)
                          ? "bg-red-500/5 text-red-500"
                          : "hover:bg-red-500/10 hover:text-red-600"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Right Side */}
      <div className="hidden items-center space-x-4 md:flex">
        <Link
          href="/contact-us"
          className={`border px-6 py-2 transition-all duration-500 ${
            isCurrentTransparent
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className={`p-2 transition-colors duration-500 md:hidden ${isCurrentTransparent ? "text-black" : "text-black"}`}
        onClick={() => setIsOpen(true)}
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-8 w-8"
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
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen
            ? "z-[9998] opacity-100"
            : "pointer-events-none -z-10 opacity-0"
        }`}
        style={{ height: "100vh", width: "100vw" }}
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar Panel Mobile */}
        <div
          className={`fixed top-0 right-0 z-[9999] w-72 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: "black", // Forces white background
            height: "100vh", // Forces full screen height
            position: "fixed", // Ensures it stays pinned
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Area */}
          <div className="mb-8 flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gray-100 p-2 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation - Items will now be on a solid white background */}
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="border-b border-gray-50 last:border-0"
              >
                <div
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.name ? null : link.name,
                    )
                  }
                  className="flex items-center justify-between py-4"
                >
                  <Link
                    href={link.href}
                    className={`text-lg transition-colors ${
                      isActive(link.href)
                        ? "font-bold text-red-600"
                        : "text-white"
                    }`}
                    // onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        )
                      }
                    >
                      <svg
                        className={`h-5 w-5 invert transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="mb-2 flex flex-col space-y-3 border-l-2 border-gray-100 pl-4">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`text-sm ${isActive(sub.href) ? "font-medium text-red-600" : "text-white"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
