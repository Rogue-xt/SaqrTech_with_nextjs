"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function ITCompanySharjah() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-red-600/30">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-20 md:px-16">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div {...fadeIn}>
            <span className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase">
              Premium IT Solutions
            </span>
            <h1 className="mt-4 text-5xl leading-tight font-bold md:text-7xl">
              Top IT Solution Provider in{" "}
              <span className="text-red-600">Sharjah</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Delivering expert IT services and support across the UAE. We
              transform your business challenges into competitive technological
              advantages.
            </p>
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
              src="/images/logo-white.png"
              alt="IT Services Sharjah"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US / INTRO SECTION */}
      <section className="bg-[#0d0d0d] px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/company.jpg"
                  width={600}
                  height={400}
                  alt="Our Expertise"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Are you curious to discover the top IT companies in Sharjah?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                With a booming economy and a rapidly evolving digital landscape,
                choosing the right IT partner is critical. Al Saqr Technologies
                stands at the forefront, providing reliable, scalable, and
                innovative solutions that help UAE businesses thrive.
              </p>
              <button className="flex items-center gap-2 font-bold text-red-600 transition-all hover:gap-4">
                Read Our Story <span>&rarr;</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE EXPERTISE GRID */}
      <section id="expertise" className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">Our Expertise</h2>
            <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-red-600" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Business Software Development",
                image: "/icons/software-engineer.png",
                desc: "We specialize in creating custom software solutions that are uniquely tailored to your business processes. By automating workflows and enhancing operational efficiency, our software helps streamline day-to-day operations and improves overall productivity.",
              },
              {
                title: "IT Infrastructure Management",
                image: "/icons/information-technology.png",
                desc: "Our team ensures your IT environment is built on a strong foundation. From initial setup to continuous monitoring and optimization, we manage your IT infrastructure to guarantee maximum reliability, scalability, and performance.",
              },
           
              {
                title: "Software Support",
                image: "/icons/support.png",
                desc: "We understand that keeping your software running seamlessly is essential for day-to-day business operations. Our software support services include troubleshooting, updates, and continuous monitoring to prevent any disruptions. Our team ensures your software solutions remain up-to-date and secure, minimizing the risk of system downtimes that could affect your productivity.",
              },
              {
                title: "Digital Marketing",
                image: "/icons/support.png",
                desc: "n today’s digital-first world, having a strong online presence is essential. Our digital marketing services are designed to elevate your brand, drive engagement, and convert leads into loyal customers using targeted, data-driven strategies.",
              },
              {
                title: "Cloud Services",
                image: "/icons/cloud-service.png",
                desc: "Transitioning to the cloud can revolutionize the way your business operates. We offer secure, reliable, and efficient cloud solutions that provide easy access to data, improve collaboration, and enhance business continuity.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group rounded-2xl border border-white/5 bg-[#111111] p-8 transition-all hover:border-red-600/40"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 transition-colors">
                  <Image src={item.image} width={32} height={32} alt="icon" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 transition-colors group-hover:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Tabbed Section) */}
      <section className="bg-[#080808] py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Why Choose Al Saqr?
          </h2>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-5xl rounded-[3rem] bg-gradient-to-r from-red-600 to-red-800 p-12 text-center shadow-[0_20px_50px_rgba(220,38,38,0.3)]">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Partner with the best IT company in Sharjah
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Experience exceptional IT services and support tailored to your
            unique business needs.
          </p>
          <button className="rounded-full bg-white px-10 py-4 font-black tracking-widest text-red-600 uppercase transition-all hover:bg-black hover:text-white">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
