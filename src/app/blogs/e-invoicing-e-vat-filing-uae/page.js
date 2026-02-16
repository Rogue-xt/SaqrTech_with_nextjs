"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import AccordionGroup from "@/components/AccordionGroup";
export default function page() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };
  const crisscross = [
    {
      title: "FTA-Compliant Format ",
      description:
        "Invoices must follow the standards set by the Federal Tax Authority (FTA) in the UAE. A compliant invoice includes required fields such as supplier and buyer details, TRN (Tax Registration Number), item descriptions, VAT breakdown, and invoice totals. Some systems also allow exporting invoices in structured formats like XML or UBL for future digital regulations.",
      image: "/E-Invoicing/1.webp",
      reverse: false,
    },
    {
      title: "Automated Invoice Generation & Submission  ",
      description:
        "Automated invoice generation means that invoices are created using software systems—like Tally, SAP, Oracle, Odoo, Zoho, QuickBooks based on sales data, without manual data entry. These invoices can then be submitted directly to clients or integrated with tax platforms. This automation saves time, ensures consistency, and eliminates the chances of human error in tax calculations and invoice formatting. ",
      image: "/E-Invoicing/2.webp",
      reverse: true,
    },
    {
      title: "Reduces Manual Errors and Improves Tax Transparency",
      description:
        "Since invoice data is automatically generated from sales transactions, there's less risk of mistakes in amounts, tax rates, or item classification. This improves the accuracy of your financial records and enhances transparency in tax reporting—ensuring the FTA can easily verify your declared figures during audits or reviews. ",
      image: "/E-Invoicing/3.webp",
      reverse: false,
    },
  ];

  return (
    <section className="min-h-screen mt-10 md:mt-0 bg-black font-sans text-white">
      {/* hero section  */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-20 md:px-16">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeIn}>
            <span className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase">
              Premium IT Solutions
            </span>
            <h1 className="mt-4 text-5xl leading-tight font-bold md:text-7xl">
              E-Invoicing & E-VAT Filing in the
              <span className="text-red-600"> UAE</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl"></p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-md bg-red-600 px-8 py-4 font-bold text-white shadow-[0_10px_20px_rgba(220,38,38,0.2)] transition hover:bg-red-700"
              >
                Get Expert Support
              </Link>
              <Link
                href="#expertise"
                className="rounded-md border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[600px]"
          >
            <div className="" />
            <Image
              src="/images/vat-hero1.png"
              alt="IT Services Sharjah"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      <div className="group mx-auto flex max-w-7xl gap-4 rounded-2xl border border-l-4 border-red-600 border-white/5 bg-[#111111] p-10 py-20 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">
        <div className="mt-2 hidden h-12 w-5 rounded-full bg-red-900 transition-all duration-500 group-hover:h-24 group-hover:bg-red-600 md:block"></div>
        <p className="leading-relaxed text-gray-400">
          E-Invoicing and E-VAT Filing are digital processes that help
          businesses in the UAE streamline their tax compliance. E-Invoicing
          refers to the electronic generation, exchange, and storage of invoices
          in a structured digital format, replacing traditional paper-based or
          PDF invoices. It enhances accuracy, reduces manual errors, and
          prepares businesses for potential future mandates by the Federal Tax
          Authority (FTA). On the other hand, E-VAT Filing involves the
          electronic submission of Value Added Tax (VAT) returns through the FTA
          online portal. Registered businesses must report their taxable
          transactions, calculate net VAT payable, and submit returns on a
          quarterly or monthly basis. Together, these processes support
          efficient, transparent, and compliant financial reporting under the
          UAE VAT law.
        </p>
      </div>

      {/* Criss cross  */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-12">
          {crisscross.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Container */}
              <div className="relative z-10 h-64 w-64 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-black p-2 shadow-inner transition-transform duration-500 group-hover:scale-105">
                  <div className="h-full w-full overflow-hidden rounded-full border-4 border-red-600/40 bg-black transition-all duration-500 group-hover:border-red-600 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`mt-[-30px] flex-grow rounded-2xl border border-white/5 bg-[#111111] p-8 text-white shadow-[0_-20px_50px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-white/10 group-hover:bg-[#161616] md:mt-0 ${item.reverse ? "md:rounded-[40px_10px_10px_40px]" : "md:rounded-[10px_40px_40px_10px]"} md:p-12 ${item.reverse ? "md:mr-[-80px] md:pr-32" : "md:ml-[-80px] md:pl-32"} `}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2 hidden h-12 w-1.5 rounded-full bg-red-900 transition-all duration-500 group-hover:h-24 group-hover:bg-red-600 md:block"></div>

                  <div>
                    <h3 className="mb-4 text-2xl font-bold transition-colors duration-500 group-hover:text-red-500">
                      {item.title}
                    </h3>
                    <p className="max-w-xl leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion  */}
      <AccordionGroup/>
      
    </section>
  );
}
