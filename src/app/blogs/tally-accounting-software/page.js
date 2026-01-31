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
export default function TallySoftware() {
  return (
    <div className="bg-black">
      <Margin />
      <section>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE: Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
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
            className="relative flex justify-center items-center"
          >
            {/* Subtle Glow Background behind the phone */}
            <div className="absolute w-[300px] h-[300px] bg-red-600/20 blur-[120px] rounded-full" />

            <motion.div
              animate={{ y: [0, -20, 0] }} // Floating effect
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] h-[550px] md:w-[320px] md:h-[650px]"
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

        <div className="pt-10 mx-auto   py-20 px-6 md:px-16 border-t border-white/5">
          <h2 className="text-4xl text-center md:text-6xl font-light text-white leading-tight mb-6">
            What's
            <span className="text-red-600">New</span>
          </h2>
          <p className="text-white text-center">
            Discover the latest features in Tally Prime
          </p>

          <div className="mt-20 py20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whatsNew.map((item) => (
              <div
                key={item.id}
                className="cards p-5 border-transparent flex gap-3 flex-col text-white transition-all duration-300  px-6 pt-6 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl shadow-2xl  hover:bg-white/[0.07] hover:backdrop-blur-2xl 
                        hover:border hover:border-red-500/50 hover:-translate-y-3
                         hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
              >
                <div className="w-15 h-15 bg-gradient-to-br from-red-600 to-red-700 rounded-[10px] shadow-[0px_4px_6px_-4px_rgba(231,0,11,0.50)] shadow-[0px_10px_15px_-3px_rgba(231,0,11,0.50)] inline-flex justify-center items-center cards-hover:scale-310 cards-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  <Image alt="icon" src={item.icon} width={30} height={30} />
                </div>
                <h3 className="text-xl ">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
