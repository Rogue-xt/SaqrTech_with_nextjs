"use client";
import Margin from "@/components/Margin";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

const crisscross = [
  {
    title: "TallyPrime Implementation",
    description:
      "Grow your business up and running with a smooth and problem-free with TallyPrime. Our experts will ensure that TallyPrime is configured to meet the specific needs of your business, allowing you to focus on growth rather than administration.",
    image: "/tally/1.svg",
    reverse: false,
  },
  {
    title: "TallyPrime Customization",
    description:
      "Every business is unique, and so are its requirements. We offer modified customization services to ensure TallyPrime works exactly how you need it to. From custom invoices to specialized reports, our solutions are developed to improve your business operations.",
    image: "/tally/2.svg",
    reverse: true,
  },
  {
    title: "TallyPrime Training",
    description:
      "Power up your team with excellent TallyPrime training. Our hands-on training sessions are developed to equip your staff with the knowledge and skills they need to use TallyPrime efficiently, ensuring you get the most out of your investment.",
    image: "/tally/3.svg",
    reverse: false,
  },
  {
    title: "TallyPrime Support and Maintenance",
    description:
      "Keep your TallyPrime software running smoothly with our ongoing support and maintenance services. We offer round-the-clock support to resolve any issues promptly, ensuring minimal disruption to your business operations.",
    image: "/tally/4.webp",
    reverse: true,
  },
  {
    title: "TallyPrime Integration",
    description:
      "Easily integrate TallyPrime with other business systems and applications. Whether it's CRM, ERP, or other third-party software, our integration services ensure that all your systems work together for optimal performance.",
    image: "/tally/5.webp",
    reverse: false,
  },
  {
    title: "TallyPrime Data Migration",
    description:
      "Safely and efficiently migrate your existing data to TallyPrime. Our data migration services ensure that all your critical business information is transferred accurately and securely, without any loss or downtime.",
    image: "/tally/6.svg",
    reverse: true,
  },
];

const WhytallyFeatures = [
  {
    title: "Real-time Tracking ",
    description:
      "Track your sales reps' activities in real time with powered tracking features. Monitor visits, optimize routes, and ensure accountability with geo-tagged check-ins and time-stamped logs, all from a central dashboard. Stay in control and boost productivity.",

    image: "/images/blogs/field-sales1.webp",
  },
  {
    title: "Faster Order Processing",
    description:
      "Speed up your sales cycle with instant, on-the-spot order creation. Field agents can generate and submit orders directly from their mobile devices during customer visits—no paperwork, no delays.",
    image: "/images/blogs/field-sales2.webp",
  },
  {
    title: " Data-Driven Insights",
    description:
      "Turn your field data into powerful business intelligence. Our app captures every interaction—orders, visits, collections, and routes—and transforms them into meaningful insights through visual reports and smart analytics.",
    image: "/images/blogs/field-sales3.webp",
  },
];

const tabData = [
  {
    id: "expertise",
    label: "Expertise",
    title: "Expertise and Experience",
    content:
      "Our team of financial experts brings years of experience to help you manage your finances efficiently with deep industry knowledge.",
  },
  {
    id: "support",
    label: "Support",
    title: "Comprehensive Support",
    content:
      "We offer dedicated, 24/7 customer support to assist you with any queries, ensuring your operations never skip a beat.",
  },
  {
    id: "scalable",
    label: "Scalable",
    title: "Scalable Solutions",
    content:
      "Whether you're an individual, a small business, or a large corporation, our solutions scale dynamically to meet your growth requirements.",
  },
  {
    id: "innovation",
    label: "Innovation",
    title: "Innovation and Technology",
    content:
      "We leverage the latest cloud-native technology and AI-driven insights to provide innovative financial management solutions.",
  },
];
export default function TallySoftware() {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  return (
    <div className="w-full bg-black">
      <Margin />
      <section className="relative w-full">
        <div className="mx-auto max-w-6xl bg-black p-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-10 p-5"
          >
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              {/* Revolutionize Your <br /> */}
              Empower Your <span className="text-red-600"> Mpos</span> Field
              Sales Team with Smart Mobility​
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-justify text-lg leading-relaxed text-gray-400"
          >
            <p>
              In today’s fast-paced business landscape, staying ahead of the
              competition is paramount, and traditional field sales methods are
              no longer enough to drive success. Enter the field sales app—a
              powerful tool that can transform your sales strategy and propel
              your team to new heights. Imagine having real-time data at your
              fingertips, streamlined communication, and enhanced customer
              insights all in one convenient platform. This digital evolution
              not only boosts productivity but also empowers your sales force to
              engage with customers more effectively, making every interaction
              count. As we delve into the world of field sales apps, you'll
              discover how leveraging technology can unlock new opportunities,
              streamline your processes, and ultimately revolutionize your
              approach to sales. Get ready to redefine what success looks like
              in your organization!
            </p>

            <p>
              Track performance, manage orders, and boost productivity from
              anywhere. Equip your field sales representatives with the tools
              they need to close more deals, streamline reporting, and stay
              connected with the back office in real-time. Whether you're
              managing a small team or a nationwide sales force, our powerful
              Field Sales App keeps everyone aligned and efficient.
            </p>
          </motion.div>
        </div>
        {/* Features Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-20 md:grid-cols-3">
          {WhytallyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col items-center rounded-3xl border border-white/5 bg-[#111111] p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:border-red-600/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            >
              {/* Image Container with Glow */}
              <div className="relative mb-8 aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-red-600/5 blur-[60px] transition-colors group-hover:bg-red-600/10" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Text Content */}
              <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-red-500">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                {feature.description}
              </p>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-red-600 transition-all duration-500 group-hover:w-1/3" />
            </motion.div>
          ))}
        </div>
        {/* whats new section  */}

        <div className="mx-auto border-t border-white/5 px-6 py-20 pt-10 md:px-16">
          {/* <h2 className="mb-6 text-center text-4xl leading-tight font-light text-white md:text-6xl">
            What's
            <span className="text-red-600">New</span>
          </h2>
          <p className="text-center text-white">
            Discover the latest features in Tally Prime
          </p> */}

          {/* VAT Section  */}
          {/* <div className="py20 mt-20">
            <div className="group flex flex-col gap-3 rounded-2xl border-transparent bg-[#111111] p-5 px-6 pt-6 text-white shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:border hover:border-red-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl">
              <div className="card-head flex items-center gap-4">
                <div className="inline-flex h-15 w-15 items-center justify-center rounded-[10px] bg-gradient-to-br from-red-600 to-red-700 shadow-[0px_4px_6px_-4px_rgba(231,0,11,0.50)] shadow-[0px_10px_15px_-3px_rgba(231,0,11,0.50)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  <Image
                    className="transition-transform duration-500 group-hover:scale-110"
                    alt="icon"
                    src="/icons/globe.svg"
                    width={30}
                    height={30}
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-red-500">
                  GCC VAT solution and reports
                </h3>
              </div>
              <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl">
                  <h3 className="mb-3 text-xl font-bold text-red-600">
                    VAT solution
                  </h3>
                  <hr />
                  <ul className="mt-4 list-inside list-disc list-image-[url(/icons/tick.svg)]">
                    <li>UAE</li>
                    <li>Saudi Arabia</li>
                    <li>Oman</li>
                    <li>Bahrain</li>
                  </ul>
                </div>
                <div className="rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl">
                  <h3 className="mb-3 text-xl font-bold text-red-600">
                    VAT Returns
                  </h3>
                  <hr />
                  <ul className="mt-4 list-inside list-disc list-image-[url(/icons/tick.svg)]">
                    <li>VAT 201 and Audit file for UAE</li>
                    <li>VAT return for KSA, Oman and Bahrain</li>
                  </ul>
                </div>
                <div className="rounded-2xl border-transparent p-5 px-6 pt-6 text-white shadow-2xl">
                  <h3 className="mb-3 text-xl font-bold text-red-600">
                    VAT reports
                  </h3>
                  <hr />
                  <ul className="mt-4 list-inside list-disc list-image-[url(/icons/tick.svg)]">
                    <li>Advance receipt report</li>
                    <li>Reverse charge report</li>
                    <li>VAT paid to customs report</li>
                    <li>Return transaction book</li>
                    <li>Tax payment reconciliation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* another section of card  */}
          {/* <div className="py20 mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Services.map((s) => (
              <div
                key={s.id}
                className="group relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#111111] p-6 text-white shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:to-[#111111] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              >
             
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                  <Image
                    alt="icon"
                    src={s.icon}
                    width={28}
                    height={28}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-red-500">
                  {s.title}
                </h3>

                <div className="space-y-2">
                  {s.items.map((l, index) => (
                    <ul
                      key={index}
                      className="list-inside text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200"
                    >
                      <li className="flex items-start gap-2">
                       
                        <span className="mt-1 text-red-500">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {l}
                      </li>
                    </ul>
                  ))}
                </div>

            
                <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-red-600 transition-all duration-500 group-hover:w-1/3" />
              </div>
            ))}
          </div> */}

          {/* stack cards  */}

          {/* <div className="relative mx-auto max-w-6xl py-20 md:px-6">
            <h2 className="mb-20 text-center text-4xl font-bold text-white">
              Do More with <span className="text-red-600">Tally Prime</span>
            </h2>

            <div className="mx-auto flex flex-col gap-10">
              {tallyFeatures.map((feature, index) => (
                <div
                  key={index}
                  // 'sticky' makes it stay. 'top' value creates the stacking offset.
                  // Adjust the multiplier (index * 20) to change how much of the previous card stays visible.
                  style={{ top: `${100 + index * 20}px` }}
                  className="sticky flex gap-4 rounded-2xl border border-l-4 border-red-600 border-white/5 bg-[#111111] p-7 py-7 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] md:p-10 md:py-20"
                >
                  <div className="mt-2 hidden h-12 w-1.5 rounded-full bg-red-600 md:block"></div>

                  <div>
                    <h3 className="mb-4 text-2xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-400">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

       
            <div className="h-[10vh]"></div>
          </div> */}

          {/* new section  */}

          <section className="py-20 md:px-6">
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

          {/* why tally section  */}

          <section className="overflow-hidden py-24 md:px-6 md:px-16">
            <div className="mx-auto max-w-7xl">
              {/* Header Section */}
              <div className="mb-20 text-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-sm font-bold tracking-widest text-red-600 uppercase"
                >
                  Efficiency at Scale
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 mb-6 text-4xl font-bold text-white md:text-5xl"
                >
                  Why Choose Tally Accounting Software?
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  className="mx-auto h-1.5 rounded-full bg-red-600"
                />
              </div>

              {/* why choose tab section  */}
              <section className="flex flex-col items-center py-20 md:px-6">
                {/* 1. THE RESPONSIVE TAB BAR */}
                <div className="mx-auto w-full max-w-2xl">
                  <div
                    className={`/* Mobile: 2-column with corners */ /* Desktop: Single row with full pill */ relative grid grid-cols-2 gap-2 rounded rounded-2xl border border-red-600/30 bg-black p-2 shadow-[0_0_30px_rgba(220,38,38,0.2)] md:flex md:items-center md:gap-1 md:rounded-full`}
                  >
                    {/* "Style:" label - only visible on desktop */}
                    <span className="mr-4 ml-6 hidden font-medium text-white opacity-70 md:block">
                      Why Tally ?
                    </span>

                    {tabData.map((tab) => (
                      <button
                        key={tab.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab(tab)}
                        className={`relative z-10 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 md:rounded-full md:text-base ${activeTab.id === tab.id ? "text-white" : "text-gray-400 hover:text-gray-200"} `}
                      >
                        {tab.label}

                        {activeTab.id === tab.id && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 -z-10 rounded-xl bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)] md:rounded-full"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. TAB CONTENT DISPLAY */}
                <div className="mt-12 w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border border-white/5 p-8 text-center shadow-2xl md:p-12"
                    >
                      <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                        {activeTab.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-400">
                        {activeTab.content}
                      </p>

                      {/* Optional Red Accent under text */}
                      <div className="mx-auto mt-8 h-1 w-12 rounded-full bg-red-600" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
