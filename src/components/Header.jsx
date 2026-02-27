"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/5 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={150}
              height={40}
              className="brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-10 text-sm font-medium text-white md:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="group relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="relative transition-opacity duration-300 hover:opacity-70"
                >
                  {link.name}
                </Link>

                {/* Underline animation */}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-white transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                {/* Desktop Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-0 pt-2 w-64 overflow-hidden rounded-xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-6 py-3 text-sm text-white transition hover:bg-white/10"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="rounded-full border border-white px-5 py-2 text-sm text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white md:hidden"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-black/90 p-8 text-white backdrop-blur-xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-10 flex justify-end">
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div
                  className="flex items-center justify-between"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === link.name ? null : link.name,
                    )
                  }
                >
                  <Link
                    href={link.href}
                    className="hover:opacity-70"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <span className="text-sm">
                      {activeDropdown === link.name ? "−" : "+"}
                    </span>
                  )}
                </div>

                {link.dropdown && activeDropdown === link.name && (
                  <div className="mt-4 ml-4 flex flex-col space-y-4 text-base">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="hover:opacity-70"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Contact */}
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="mt-8 rounded-full border border-white py-3 text-center transition-all hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
