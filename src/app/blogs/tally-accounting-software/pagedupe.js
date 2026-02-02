"use client";
import Margin from "@/components/Margin";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const whatsNew = [
  {
    id: 1,
    title: "Graphical Dashboard",
    description: "Tally Prime brings you a powerful reports dashboard...",
    icon: "/icons/bar.svg",
  },
  {
    id: 2,
    title: "Customizable reports",
    description:
      "TallyPrime comes with a diverse set of readily available business reports...",
    icon: "/icons/export.svg",
  },
  {
    id: 3,
    title: "Excel Import Function",
    description: "Easily import the ledgers and transactions from Excel...",
    icon: "/icons/file.svg",
  },
  {
    id: 4,
    title: "Go To",
    description:
      "With the new 'Go To' feature, you can move from one screen to any other...",
    icon: "/icons/rightArrow.svg",
  },
];

const Services = [
  {
    id: 1,
    icon: "/icons/star.svg",
    title: "Other valuable features",
    items: [
      "Multiple companies",
      "Group companies Arabia",
      "Data backup and restore",
      "Split company data",
      "Secure remote access",
      "On-Demand Synchronization",
      "Tally vault",
      "Multiple security levels",
      "User management",
      "Audit trail (Edit log)",
      "Password policy management",
    ],
  },
  {
    id: 2,
    icon: "/icons/dollar.svg",
    title: "Payroll Management",
    items: [
      "Payroll accounting & salary processing",
      "Multiple employee groups",
      "Flexible attendance/production types",
      "Define and process fixed and flexible pay-outs",
      "Manage and Generate SIF file",
    ],
  },
  {
    id: 3,
    icon: "/icons/card.svg",
    title: "Banking",
    items: [
      "Auto bank reconciliation",
      "Cheque management",
      "PDC Management",
      "Cheque printing",
      "Security authorization for users",
    ],
  },
];

const tallyFeatures = [
  {
    title: "Purchase and sales management",
    desc: "TallyPrime is designed with complete flexibility to suit the different purchase and sales requirement of any kind of business. Be it purchases or sales orders, debit or credit notes, batch or goods other than the inventory; TallyPrime makes it easy and flexible for you.",
  },
  {
    title: "Multiple billing format with TAX compliant",
    desc: "TallyPrime supports different billing formats to suit your business needs. Whether it is Retail or Invoice or with Services, you can choose a suitable invoice format for future billing. You can also generate Delivery Note and POS Invoice in Arabic and English.",
  },
  {
    title: "Multi-currency support",
    desc: "With TallyPrime you can record invoice quotation orders, accept payment in multiple currencies. The currency list available in TallyPrime covers all the key currencies. The gains or losses in Forex that occur due to daily variations in exchange rate can be adjusted by simply recording a journal entry.",
  },
  {
    title: "Multiple stock valuation",
    desc: "TallyPrime lets you value your closing stock using different stock valuation methods. You can select one out of the following stock valuation Methods: Average Cost, LIFO Perpetual, FIFO Perpetual, Last Purchase Cost, Monthly Avg Cost, Avg Cost on Invoice Rate, Std. Cost or Actual Invoice Rate.",
  },
];

export default function TallySoftware() {
  return (
    <div className="relative bg-black" style={{ overflow: "visible" }}>
      <Margin />

      {/* SECTION 1: HERO */}
      <section className="relative w-full px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              Powerful Upgrades for Your Business with Integrated
              <span className="block text-red-600">
                Tally Accounting Software
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[300px] w-[300px] rounded-full bg-red-600/20 blur-[120px]" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[500px] w-[300px]"
            >
              <Image
                src="/tally-prime-white-logo.svg"
                alt="Tally"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHATS NEW & SERVICES (Grouped) */}
      <section className="mx-auto max-w-7xl border-t border-white/5 px-6 py-20">
        <h2 className="mb-6 text-center text-4xl font-light text-white md:text-6xl">
          What's <span className="text-red-600">New</span>
        </h2>

        {/* Whats New Grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whatsNew.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-3 rounded-2xl bg-white/5 p-6 text-white transition-all hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 shadow-lg">
                <Image alt="icon" src={item.icon} width={24} height={24} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* VAT Section */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-red-500/30">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
              <Image alt="icon" src="/icons/globe.svg" width={24} height={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              GCC VAT solution and reports
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Simplified VAT items here for code length */}
            <div className="space-y-2">
              <h4 className="font-bold text-red-600">VAT Solutions</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400">
                <li>UAE</li>
                <li>KSA</li>
                <li>Oman</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-600">VAT Returns</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400">
                <li>VAT 201 Audit</li>
                <li>KSA Returns</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-red-600">VAT Reports</h4>
              <ul className="list-disc pl-4 text-sm text-gray-400">
                <li>Advance Receipt</li>
                <li>Reverse Charge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- STACK CARDS SECTION --- */}
      <section
        className="relative w-full bg-black py-20"
        style={{ isolation: "isolate" }}
      >
        <h2 className="mb-20 text-center text-4xl font-bold text-white">
          Do More with <span className="text-red-600">Tally Prime</span>
        </h2>

        <div className="mx-auto max-w-4xl px-4" style={{ overflow: "visible" }}>
          <div className="flex flex-col gap-10">
            {tallyFeatures.map((feature, index) => (
              <div
                key={index}
                style={{
                  position: "-webkit-sticky",
                  position: "sticky",

                  top: `${100 + index * 40}px`,
                  zIndex: 10 + index, // Local z-index to stack cards on each other
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-l-4 border-red-600 border-white/5 bg-[#111111] p-10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]"
                >
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[50vh]" aria-hidden="true" />
      </section>
    </div>
  );
}
