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
    description:
      "Tally Prime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organise, and display the information the way it suits your preferences and business needs.",
    icon: "/icons/bar.svg",
  },
  {
    id: 2,
    title: "Customizable reports",
    description:
      "TallyPrime comes with a diverse set of readily available business reports with powerful and actionable insights, helping you make informed decisions for your business growth. Be it business relationships, cash or inventory, these reports will help you manage all these aspects better with extremely easy discovery and navigation.",
    icon: "/icons/export.svg",
  },
  {
    id: 3,
    title: "Excel Import Function",
    description:
      "Easily import the ledgers and transactions from Excel to TallyPrime in a few simple steps. It is so flexible that you can import your data to Tally regardless of how your data is organised or structured in Excel.",
    icon: "/icons/file.svg",
  },
  {
    id: 4,
    title: "Go To",
    description:
      "With the new 'Go To' feature, you can move from one screen to any other creation screen in any report, and come back to where you started - without losing data or progress.",
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
    desc: "TTallyPrime lets you value your closing stock using different stock valuation methods. You can select one out of the following stock valuation Methods: Average Cost, LIFO Perpetual, FIFO Perpetual, Last Purchase Cost, Monthly Avg Cost, Avg Cost on Invoice Rate, Std. Cost or Actual Invoice Rate.",
  },
  {
    title: "Multiple price level",
    desc: "With TallyPrime, businesses can easily manage multiple price list for products. You can create different price lists based on Retail, Wholesale, Dealers, Wholesale, or delivered price lists regardless based frame, etc. TallyPrime offers Price flexibility based on purchase and sales side. This feature with auto-capturing the relevant prices and discount rules in respective transactions.",
  },
  {
    title: "Flexible units of measure",
    desc: "Handling real-time complexities like the requirement to buy is one unit and  sell in another Stock Items and Units. TallyPrime allows you to maintain multiple units to measure stock items with floating conversions etc. Is the need is multiple price with Compound units. That allows to manage and quantify the stock like combined format.",
  },
  {
    title: "Bill of material (BOM)",
    desc: "The comprehensive Bill of Material (BOM) feature in TallyPrime allows you to define the two raw materials you require to produce a finished product and can also define the quantity of by-product and scrap or finished products.",
  },
  {
    title: "Flexible to configure the reports",
    desc: "The display of information in a report right from MIS reports to the Final reports can be configured by the user at the time of generating the report. Which provides you with additional information for better business decisions.",
  },

];
export default function TallySoftware() {
  return (
    <div className="w-full bg-black">
      <Margin />
      <section className="relative w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE: Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              {/* Revolutionize Your <br /> */}
              Powerful Upgrades and Connected Services for Your Growing Business
              with Integrated
              <span className="text-red-600">Tally Accounting Software</span>
            </h1>
          </motion.div>

          {/* RIGHT SIDE: Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Subtle Glow Background behind the phone */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-red-600/20 blur-[120px]" />

            <motion.div
              animate={{ y: [0, -20, 0] }} // Floating effect
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[550px] w-[280px] md:h-[650px] md:w-[320px]"
            >
              <Image
                src="/tally-prime-white-logo.svg"
                alt="M-POS Mobile App"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* whats new section  */}

        <div className="mx-auto border-t border-white/5 px-6 py-20 pt-10 md:px-16">
          <h2 className="mb-6 text-center text-4xl leading-tight font-light text-white md:text-6xl">
            What's
            <span className="text-red-600">New</span>
          </h2>
          <p className="text-center text-white">
            Discover the latest features in Tally Prime
          </p>

          <div className="py20 mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whatsNew.map((item) => (
              <div
                key={item.id}
                className="cards flex flex-col gap-3 rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border hover:border-red-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl"
              >
                <div className="cards-hover:scale-310 cards-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-flex h-15 w-15 items-center justify-center rounded-[10px] bg-gradient-to-br from-red-600 to-red-700 shadow-[0px_4px_6px_-4px_rgba(231,0,11,0.50)] shadow-[0px_10px_15px_-3px_rgba(231,0,11,0.50)]">
                  <Image alt="icon" src={item.icon} width={30} height={30} />
                </div>
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
          {/* VAT Section  */}
          <div className="py20 mt-20">
            <div className="cards flex flex-col gap-3 rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border hover:border-red-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl">
              <div className="card-head flex items-center gap-4">
                <div className="cards-hover:scale-310 cards-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-flex h-15 w-15 items-center justify-center rounded-[10px] bg-gradient-to-br from-red-600 to-red-700 shadow-[0px_4px_6px_-4px_rgba(231,0,11,0.50)] shadow-[0px_10px_15px_-3px_rgba(231,0,11,0.50)]">
                  <Image
                    alt="icon"
                    src="/icons/globe.svg"
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-xl">GCC VAT solution and reports</h3>
              </div>
              <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl">
                  <h3 className="text-red-600">VAT solution</h3>
                  <ul className="list-inside list-disc list-image-[url(/icons/tick.svg)]">
                    <li>UAE</li>
                    <li>Saudi Arabia</li>
                    <li>Oman</li>
                    <li>Bahrain</li>
                  </ul>
                </div>
                <div className="rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl">
                  <h3 className="text-red-600">VAT Returns</h3>
                  <ul className="list-inside list-disc list-image-[url(/icons/tick.svg)]">
                    <li>VAT 201 and Audit file for UAE</li>
                    <li>VAT return for KSA, Oman and Bahrain</li>
                  </ul>
                </div>
                <div className="rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl">
                  <h3 className="text-red-600">VAT reports</h3>
                  <ul className="list-inside list-disc list-image-[url(/icons/tick.svg)]">
                    <li>Advance receipt report</li>
                    <li>Reverse charge report</li>
                    <li>VAT paid to customs report</li>
                    <li>Return transaction book</li>
                    <li>Tax payment reconciliation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* another section of card  */}
          <div className="py20 mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Services.map((s) => (
              <div
                key={s.id}
                className="cards flex flex-col gap-3 rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border hover:border-red-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl"
              >
                <div className="cards-hover:scale-310 cards-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] inline-flex h-15 w-15 items-center justify-center rounded-[10px] bg-gradient-to-br from-red-600 to-red-700 shadow-[0px_4px_6px_-4px_rgba(231,0,11,0.50)] shadow-[0px_10px_15px_-3px_rgba(231,0,11,0.50)]">
                  <Image alt="icon" src={s.icon} width={30} height={30} />
                </div>
                <h3 className="text-xl">{s.title}</h3>
                {s.items.map((l) => (
                  <ul
                    key={l}
                    className="list-inside list-disc list-image-[url(/icons/tick.svg)]"
                  >
                    <li>{l}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>

          {/* stack cards  */}

          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-20 text-center text-4xl font-bold text-white">
              Do More with <span className="text-red-600">Tally Prime</span>
            </h2>

            <div className="mx-auto flex flex-col gap-10">
              {tallyFeatures.map((feature, index) => (
                <div
                  key={index}
                  // 'sticky' makes it stay. 'top' value creates the stacking offset.
                  // Adjust the multiplier (index * 20) to change how much of the previous card stays visible.
                  style={{ top: `${150 + index * 20}px` }}
                  className="sticky rounded-2xl border border-l-4 border-red-600 border-white/5 bg-[#111111] p-10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]"
                >
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Spacer to allow the last card to actually scroll into a sticky position */}
            <div className="h-[10vh]"></div>
          </div>
          <div
            className="grid justify-items-center  max-w-6xl "
          >
            <Image
              src="/images/Device-view/tally.png"
              alt="M-POS Mobile App"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
