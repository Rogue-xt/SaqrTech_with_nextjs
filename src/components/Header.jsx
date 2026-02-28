"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

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
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* --- MAIN HEADER --- */}
      <header
        className={`fixed inset-x-0 top-0 z-[110] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={35}
              className="brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 text-sm font-bold text-white md:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="group relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`transition-colors ${isActive(link.href) ? "text-red-500" : "hover:text-red-500"}`}
                >
                  {link.name}
                </Link>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 pt-4">
                    <div className="rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block rounded-xl px-4 py-3 text-xs hover:bg-red-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact-us"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 transition-all hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </nav>

          {/* Hamburger Button - High Z-Index to stay on top */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[120] p-2 text-white focus:outline-none md:hidden"
          >
            {isOpen ? (
              <X size={32} className="text-red-500" />
            ) : (
              <Menu size={32} />
            )}
          </button>
        </div>
      </header>

      {/* --- MOBILE DRAWER SYSTEM --- */}
      <div
        className={`fixed inset-0 z-[90] transition-all duration-500 md:hidden ${isOpen ? "visible" : "invisible"}`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar Sidebar - Added overflow-y-auto and h-screen */}
        <aside
          className={`absolute top-0 right-0 h-screen w-[85%] max-w-sm border-l border-white/5 bg-[#050505] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Scrollable Container inside Sidebar */}
          <div className="flex h-full flex-col overflow-y-auto px-8 pt-28 pb-10">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex flex-col border-b border-white/5 pb-2"
                >
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={link.href}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                      className={`text-2xl font-black tracking-tighter ${isActive(link.href) ? "text-red-600" : "text-white"}`}
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
                        className="rounded-lg bg-white/5 p-2 text-gray-400"
                      >
                        {activeDropdown === link.name ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Dropdown Items */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="mt-2 mb-4 flex flex-col space-y-4 border-l-2 border-red-600/40 pl-5">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-semibold text-gray-500 active:text-white"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom Section - Guaranteed to show because of overflow-y-auto */}
            <div className="mt-auto pt-10">
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-2xl bg-red-600 py-5 text-center text-sm font-black tracking-[0.2em] text-white uppercase shadow-xl shadow-red-600/20"
              >
                Start a Project
              </Link>
              <p className="mt-8 text-center text-[10px] font-bold tracking-widest text-gray-700 uppercase">
                mPos Enterprise • Sharjah, UAE
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
