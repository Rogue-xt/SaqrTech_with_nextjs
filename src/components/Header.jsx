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
    "/van-sales-app": 4000,
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
    : "bg-white md:bg-transparent md:backdrop-blur-none";

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
      href: "/blogs",
      dropdown: [
        { name: "Why Mpos", href: "/blogs/why-mpos-van-sales-software" },
        { name: "Tech Insights", href: "/blogs/tech" },
      ],
    },
  ];

  // Helper to check if link is active
  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex items-center justify-between px-6 md:px-8 py-4 ${headerBg}`}
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
        className={`hidden md:flex items-center space-x-8 font-medium transition-colors duration-500 ${textColor}`}
      >
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative group py-2"
            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={link.href}
              className={`transition-all flex items-center gap-1 relative ${
                isActive(link.href)
                  ? "text-red-600 font-bold"
                  : "hover:text-red-600"
              }`}
            >
              {link.name}
              {/* Active Underline Effect */}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full" />
              )}
              {link.dropdown && (
                <svg
                  className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
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
              <div className="absolute left-0 top-full pt-2 w-48 animate-in fade-in slide-in-from-top-2 duration-200">
                <div
                  className={`rounded-xl shadow-xl border overflow-hidden ${
                    isCurrentTransparent
                      ? "bg-zinc-900 border-white/10 text-white"
                      : "bg-white border-gray-100 text-gray-800"
                  }`}
                >
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className={`block px-5 py-3 text-sm transition ${
                        isActive(sub.href)
                          ? "text-red-500 bg-red-500/5"
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
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/contact-us"
          className={`px-6 py-2 border transition-all duration-500 ${
            isCurrentTransparent
              ? "border-white text-white hover:bg-white hover:text-black"
              : "bg-black border-black text-white hover:bg-white hover:text-black"
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className={`md:hidden p-2 transition-colors duration-500 ${isCurrentTransparent ? "text-black" : "text-black"}`}
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
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 z-[9998]"
            : "opacity-0 pointer-events-none -z-10"
        }`}
        style={{ height: "100vh", width: "100vw" }}
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar Panel Mobile */}
        <div
          className={`fixed top-0 right-0 w-72 shadow-2xl p-6 transition-transform duration-300 ease-in-out z-[9999] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: "white", // Forces white background
            height: "100vh", // Forces full screen height
            position: "fixed", // Ensures it stays pinned
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Area */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-gray-100 rounded-full text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
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
                <div className="flex justify-between items-center py-4">
                  <Link
                    href={link.href}
                    className={`text-lg transition-colors ${
                      isActive(link.href)
                        ? "text-red-600 font-bold"
                        : "text-gray-900"
                    }`}
                    onClick={() => !link.dropdown && setIsOpen(false)}
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
                        className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""}`}
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
                  <div className="flex flex-col pl-4 border-l-2 border-gray-100 mb-2 space-y-3">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`text-sm ${isActive(sub.href) ? "text-red-600 font-medium" : "text-gray-500"}`}
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
