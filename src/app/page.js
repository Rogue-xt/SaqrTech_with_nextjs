"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

// Important: Ensure these components exist in your project or comment them out if they don't
import Modal from "@/components/Modal";
import ServiceSlider from "@/components/ServicesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";

// --- 1. STATS COUNTER COMPONENT ---
const Counter = ({ value, label, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 text-center"
    >
      <div className="flex items-baseline gap-1">
        <motion.span className="text-5xl font-black tracking-tighter text-black md:text-7xl">
          {rounded}
        </motion.span>
        <span className="text-2xl font-bold text-red-600">{suffix}</span>
      </div>
      <p className="mt-3 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
        {label}
      </p>
    </div>
  );
};

export default function HomePage() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="relative w-full overflow-x-hidden bg-white">
      <Modal />

      {/* --- HERO SECTION --- */}
      <section className="relative flex h-screen items-center overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/Mpos/Mpos-Banner-Video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-[1] bg-black/50" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 max-w-5xl px-6 md:px-12"
        >
          <h1 className="mb-6 text-5xl leading-[1.1] font-bold md:text-7xl">
            Creative Software <br /> & IT Solutions
          </h1>
          <p className="mb-8 max-w-2xl text-lg font-light text-gray-200 md:text-2xl">
            Advanced IT and ITES solutions customized to address the distinct
            needs of clients throughout the UAE.
          </p>
          <Link
            href="/services"
            className="inline-block rounded-full border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Explore Our Services →
          </Link>
        </motion.div>
      </section>

      {/* --- SECTION 1: MPOS LOGO & VIDEO --- */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="flex flex-col items-start"
          >
            <Image
              src="/Mpos/Mpos Logo/mPos_logo.jpg"
              alt="MPOS"
              width={160}
              height={60}
              className="mb-8"
            />
            <h2 className="mb-6 text-4xl leading-tight font-black text-black md:text-6xl">
              Tally Integrated <br />
              <span className="text-red-600">Van Sales</span> Software
            </h2>
            <p className="mb-8 text-xl text-gray-500">
              Android based business solutions. Streamline distribution with
              real-time Tally integration and Bluetooth printing.
            </p>
            <Link
              href="/van-sales-app"
              className="bg-black px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-red-600"
            >
              Request 7 Days Trial →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video overflow-hidden rounded-3xl bg-gray-100 shadow-2xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/Mpos/Mpos-Animated-Video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE MODERN REDESIGN & STATISTICS --- */}
      <section className="relative bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-32 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            {/* Left: Modern App Preview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="h-4 w-4 rounded-full bg-red-500" />
                    <div className="h-2 w-24 rounded-full bg-gray-200" />
                  </div>
                  <div className="space-y-6">
                    <div className="h-4 w-3/4 rounded-full bg-black" />
                    <div className="h-4 w-1/2 rounded-full bg-gray-200" />
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex h-24 flex-col justify-end rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="mb-2 h-2 w-1/2 bg-red-100" />
                        <div className="h-3 w-3/4 bg-red-500" />
                      </div>
                      <div className="flex h-24 flex-col justify-end rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="mb-2 h-2 w-1/2 bg-gray-100" />
                        <div className="h-3 w-3/4 bg-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 -bottom-8 hidden rounded-2xl bg-black p-6 text-white shadow-2xl md:block"
              >
                <p className="mb-1 text-[10px] font-bold tracking-widest uppercase opacity-60">
                  System Sync
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                  <span className="text-lg font-bold">Active Tally Link</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="mb-4 block text-xs font-bold tracking-[0.3em] text-red-600 uppercase">
                Enterprise Solution
              </span>
              <h2 className="mb-6 text-4xl leading-tight font-extrabold text-black md:text-5xl">
                Van Sales App & <br /> Tally ERP Software
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Empower your mobile workforce with the Mpos Van Sales management
                app. Specifically engineered to bridge the gap between field
                operations and back-office accounting.
              </p>
              <div className="mb-10 space-y-4">
                {[
                  "Automated Route Optimization",
                  "Instant Invoice Generation",
                  "Direct Tally ERP Sync",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-semibold text-gray-800"
                  >
                    <span className="text-red-600">✓</span> {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 border-2 border-black px-8 py-4 font-bold transition-all duration-300 hover:bg-black hover:text-white"
              >
                Discover More <span>→</span>
              </Link>
            </motion.div>
          </div>

          {/* --- THE STATISTICS BAR --- */}
          <div className="grid grid-cols-2 gap-4 rounded-[2rem] border border-slate-100 bg-white px-4 py-12 shadow-xl shadow-slate-200/50 md:gap-8 lg:grid-cols-4">
            <Counter value={100} label="Enterprise Clients" />
            <Counter value={15} label="Years Experience" />
            <Counter value={500} label="Active Users" />
            <Counter value={99} label="Sync Accuracy" suffix="%" />
          </div>
        </div>
      </section>

      {/* --- EXTERNAL COMPONENTS --- */}
      <ServiceSlider />
      <div className="h-px w-full bg-gray-100" />
      <WhyChooseUs />

      {/* --- FOOTER CTA --- */}
      <section className="bg-white px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-12 text-xl text-gray-500 italic md:text-2xl">
            "If you're looking for an IT partner that combines technological
            expertise with a deep understanding of the GCC market, Al Saqr
            Technologies is the clear choice."
          </p>
          <h3 className="mb-8 text-3xl font-bold">
            Ready to transform your business?
          </h3>
          <Link
            href="/contact-us"
            className="bg-black px-12 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:bg-red-600"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
