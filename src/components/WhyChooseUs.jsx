"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
const features = [
  {
    id: "01",
    title: "Proven Expertise",
    description:
      "With years of experience in software development and IT solutions, we bring latest ideas and a strategic approach to every project",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Customer Centric Approach",
    description:
      "We prioritize your business needs and provide a positive experience and build long-term relationships to align perfectly with your goals.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Secure & Compliant Systems",
    description:
      "Security is our top priority. We follow industry standards and best practices to deliver software that is both secure and compliant with relevant regulations.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Flexible & Scalable Solutions",
    description:
      "Our software solutions are developed to grow with your business, providing flexibility and scalability as your company evolves.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const seededRandom = (seed) => {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
export default function WhyChooseUs() {
const [mounted, setMounted] = useState(false);

// 1. We wrap the dot creation in useMemo so it only calculates ONCE
const particles = useMemo(() => {
  const random = seededRandom(123);
  return [...Array(105)].map((_, i) => ({
    id: i,
    left: random() * 100,
    top: random() * 100,
    size: random() * 4,
    delay: random() * 4,
  }));
}, []);

  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">
      {/* --- ADDED DOTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {particles.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
      {/* --- ADDED DOTS END --- */}
      {/* Background Depth: One single light red glow behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-red-300/60 mb-6 backdrop-blur-md">
            Excellence in IT Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Why Al Saqr Technologies for IT Solutions?
            <span className="italic font-extralight text-gray-400"></span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Experience the future of IT Solutions with cutting-edge technology
            and personalized care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              key={item.id}
              className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 transition-all duration-500 
                         hover:bg-white/[0.07] hover:backdrop-blur-2xl 
                         hover:border-red-500/50 hover:-translate-y-1
                         hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            >
              {/* Internal Reflection / Shine */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-red-500/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container with subtle glow */}
              <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] relative z-10">
                {item.icon}
              </div>

              {/* Background Numbering */}
              <span className="absolute top-8 right-10 text-5xl font-black text-white/[0.03] transition-colors duration-500 group-hover:text-red-500/10 select-none">
                {item.id}
              </span>

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-red-50 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-500 transition-all duration-500 group-hover:w-1/2 group-hover:shadow-[0_0_10px_#a855f7]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
