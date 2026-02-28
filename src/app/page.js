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

import Modal from "@/components/Modal";
import ServiceSlider from "@/components/ServicesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ArrowRight, BarChart3, CheckCircle2, Layers, MapPin, RefreshCw, Settings, ShieldCheck, Smartphone, Star, Users, Zap } from "lucide-react";

/* ================= COUNTER ================= */

const Counter = ({ value, label, suffix = "+" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-end justify-center gap-1">
        <motion.span className="text-5xl font-extrabold text-white md:text-7xl">
          {rounded}
        </motion.span>
        <span className="text-2xl font-bold text-red-500">{suffix}</span>
      </div>
      <p className="mt-3 text-xs tracking-widest text-gray-400 uppercase">
        {label}
      </p>
    </div>
  );
};

/* ================= HOMEPAGE ================= */

export default function HomePage() {
    const features = [
      { icon: <RefreshCw size={18} />, text: "Real-time Tally ERP Sync" },
      { icon: <MapPin size={18} />, text: "Route Optimization & GPS" },
      { icon: <Smartphone size={18} />, text: "Instant PDF Invoicing" },
      { icon: <CheckCircle2 size={18} />, text: "Inventory Management" },
    ];

    const testimonials = [
      {
        author: "Haii Al Khaleel Trading LLC",
        rating: 5,
        review:
          "Really happy with their van sales software – super easy to use and works great for our business. Best in the GCC for sure!",
      },
      {
        author: "Abdul Raheem Annath",
        rating: 5,
        review:
          "Leading IT company with software experts in the UAE. Highly recommended for those looking for van sales management software and other IT services.",
      },
      {
        author: "Hasharudheen K",
        rating: 5,
        review:
          "Best IT company in UAE with uncompromising service quality. Van sales software and ERP software providers",
      },
    ];
  return (
    <main className="relative w-full overflow-x-hidden bg-black text-white">
      <Modal />

      {/* ================= HERO (Enhanced Contrast) ================= */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-1">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/Mpos/Mpos-Banner-Video.mp4" type="video/mp4" />
          </video>
          {/* Layered Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
                New: Cloud ERP Integration 2.0
              </span>
            </div>

            <h1 className="mb-8 text-6xl leading-[1.0] font-black tracking-tighter md:text-8xl lg:text-9xl">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                Software & IT
              </span>
            </h1>

            <p className="mb-12 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Tailored ERP ecosystems and custom software architecture
              engineered for the specific demands of the UAE market.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/services"
                className="group relative overflow-hidden rounded-full bg-red-600 px-10 py-4 font-bold transition-all hover:bg-red-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Solutions{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/contact-us"
                className="rounded-full border border-white/20 px-10 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white hover:text-black"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="border-t border-gray-800 bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 rounded-3xl border border-gray-800 bg-[#0a0a0a] px-10 py-16 lg:grid-cols-4">
            <Counter value={10} label="Years Experience" />{" "}
            <Counter value={2500} label="Enterprise Clients" />
            <Counter value={6} label="Products" />
            <Counter value={5} label="Countries Covered" />
          </div>
        </div>
      </section>
      {/* ================= INDUSTRIES (Glow Cards) ================= */}
      <section className="relative bg-black px-6 py-32">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[120px]" />
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-20 text-4xl font-black tracking-tight md:text-7xl">
            Verticals We <span className="text-red-600">Master</span>
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "FMCG", icon: <Layers className="h-5 w-5" /> },
              { name: "Retail", icon: <Zap className="h-5 w-5" /> },
              { name: "Wholesale", icon: <BarChart3 className="h-5 w-5" /> },
              { name: "Construction", icon: <Settings className="h-5 w-5" /> },
              { name: "Logistics", icon: <ShieldCheck className="h-5 w-5" /> },
              { name: "Manufacturing", icon: <Users className="h-5 w-5" /> },
            ].map((ind) => (
              <div
                key={ind.name}
                className="group z-1 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:bg-red-500/[0.05]"
              >
                <div className="text-gray-500 transition-colors group-hover:text-red-500">
                  {ind.icon}
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (Journey Flow) ================= */}
      {/* <section className="border-t border-white/5 bg-[#050505] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="mb-4 text-4xl font-black tracking-tight md:text-7xl">
              Precision Workflow
            </h2>
            <p className="mx-auto max-w-2xl text-xs tracking-[0.2em] text-gray-500 uppercase">
              From initial blueprint to hyper-scale optimization
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-5">

            <div className="absolute top-12 left-0 hidden h-[1px] w-full bg-gradient-to-r from-transparent via-red-900/50 to-transparent md:block" />

            {[
              "Consultation",
              "System Design",
              "Development",
              "Integration",
              "Support",
            ].map((step, i) => (
              <div
                key={step}
                className="group relative z-10 flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-black transition-all group-hover:border-red-600 group-hover:bg-red-600/10">
                  <span className="text-3xl font-black text-white/20 group-hover:text-red-600">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight uppercase">
                  {step}
                </h3>
                <div className="h-[2px] w-8 origin-center scale-x-0 bg-red-600 transition-transform group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* ================= TESTIMONIALS (Bento) ================= */}
      <section className="bg-black px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-20 text-center text-4xl font-black tracking-tight uppercase italic md:text-6xl">
            Client <span className="text-red-600">Vouches</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials?.map((item, idx) => (
              <div
                key={idx}
                className="group relative z-1 rounded-[2.5rem] border border-white/5 bg-[#0a0a0a] p-10 transition-all hover:border-red-600/20 hover:bg-[#0f0f0f]"
              >
                {/* Top Decorative Line */}
                <div className="absolute top-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-red-600 transition-all duration-500 group-hover:w-1/2" />

                {/* ⭐ STAR RATING LOGIC ⭐ */}
                <div className="mb-8 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`transition-all duration-300 ${
                        i < (item.rating || 5)
                          ? "fill-yellow-500 text-yellow-500 opacity-100"
                          : "fill-transparent text-gray-700 opacity-40"
                      } group-hover:scale-110`}
                    />
                  ))}
                </div>

                <p className="mb-10 text-xl leading-relaxed font-medium text-gray-300 italic">
                  {item?.review || ""}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-900">
                    <span className="text-lg font-black text-white/50">
                      {item.author[0]}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{item?.author}</div>
                    <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                      Verified Business Partner
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PRODUCT SECTION ================= */}

      <section className="relative overflow-hidden bg-black px-6 py-32">
        {/* Background Decorative Elements */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* --- Left Content --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2">
                <span className="text-[10px] font-black tracking-[0.2em] text-red-500 uppercase">
                  Flagship Product
                </span>
              </div>

              {/* <Image
                src="/Mpos/Mpos Logo/mPos_logo.jpg"
                alt="mPos Logo"
                width={140}
                height={50}
                className="mb-8 brightness-110"
              /> */}

              <h2 className="mb-6 text-5xl leading-[1.1] font-black tracking-tighter md:text-7xl">
                The Future of <br />
                <span className="font-outline text-red-600">Van Sales</span>
              </h2>

              <p className="mb-8 max-w-lg text-xl leading-relaxed font-light text-gray-400">
                Transform your mobile workforce with the UAE’s most powerful
                <span className="font-medium text-white">
                  {" "}
                  Tally-integrated
                </span>{" "}
                sales automation platform.
              </p>

              {/* Feature Grid */}
              <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="text-red-600">{feature.icon}</div>
                    <span className="text-sm font-semibold tracking-wide uppercase">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/van-sales-app"
                  className="group relative overflow-hidden rounded-full bg-red-600 px-10 py-5 text-lg font-bold transition-all hover:scale-105 hover:bg-red-700"
                >
                  Request 7-Day Free Trial
                </Link>
                <Link
                  href="/video"
                  className="rounded-full border border-white/10 px-10 py-5 text-lg font-bold transition-all hover:bg-white hover:text-black"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>

            {/* --- Right Visuals (The Composition) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex h-[500px] items-center justify-center md:h-[650px]"
            >
              {/* Tablet Mockup */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 aspect-[4/3] w-[85%] overflow-hidden rounded-[2rem]"
              >
                <Image
                  style={{ maxWidth: "67%" }}
                  src="/mpos-logo.png"
                  // src="/images/services/tab-homepage.png"
                  alt="mPos Tablet Interface"
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Mobile Mockup (Overlapping) */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 -bottom-10 z-2 aspect-[9/19.5] w-[40%] overflow-hidden rounded-[2.5rem]"
              >
                <Image
                  src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Mpos-app-view.png" // Add your mobile screenshot here
                  alt="mPos Mobile App"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Tally Connection Badge */}
              <div className="absolute top-10 md:top-10 md:-left-10 z-30 flex animate-pulse items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 font-black text-white">
                  T
                </div>
                <div>
                  <p className="text-[10px] leading-none font-bold tracking-tighter text-black uppercase">
                    Status
                  </p>
                  <p className="text-xs font-black text-green-600">
                    Tally Linked
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES & WHY ================= */}

      <ServiceSlider />
      <WhyChooseUs />

      {/* ================= FINAL CTA ================= */}

      <section className="border-t border-gray-800 bg-black px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h3 className="mb-10 text-3xl font-bold md:text-5xl">
            Ready to Transform Your Business?
          </h3>

          <Link
            href="/contact-us"
            className="rounded-full bg-red-600 px-14 py-5 text-xl font-semibold shadow-lg shadow-red-600/40 transition-all hover:scale-105 hover:bg-red-700"
          >
            Get in Touch →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
