"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Eye, Lightbulb, Merge, ShieldCheck, Star, Target, User } from "lucide-react";

const coreValues = [
  {
    title: "Innovation",
    desc: "Embrace technological advancements and creative solutions to meet the evolving needs of our clients.",
    icon: <Lightbulb></Lightbulb>,
  },
  {
    title: "Quality",
    desc: "Ensure excellence in all our services, adhering to the highest standards of reliability and efficiency.",
    icon: <ShieldCheck />,
  },
  {
    title: "Client-Centric Approach",
    desc: "Prioritize client satisfaction by understanding and addressing their unique requirements.",
    icon: <User />,
  },
  {
    title: "Collaboration",
    desc: "Foster a collaborative environment that encourages teamwork and growth of the clients.",
    icon: <Merge />,
  },
];

const sliderImages = [
  "/images/gallery/IMG_01.jpg",
  "/images/gallery/IMG_02.jpg",
  // "/images/gallery/IMG_03.jpg",
  // "/images/gallery/IMG_04.jpg",
  "/images/gallery/IMG_05.jpg",
  // "/images/gallery/IMG_06.jpg",
  "/images/gallery/IMG_08.jpeg"
];

export default function AboutSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const scaleY = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 20,
    });
  return (
    <section className="bg-black px-6 pb-20 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-20 pt-32 pb-16 text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block border border-red-600/50 px-4 py-1 text-[10px] font-bold tracking-[0.3em] text-red-500 uppercase"
        >
          Excellence in IT Solutions
        </motion.div>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="animate-gradient mb-6 bg-gradient-to-r from-white via-red-500 to-purple-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl"
        >
          About Us
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-sm leading-relaxed text-gray-400 md:text-base"
        >
          Experience the future of IT Solutions with cutting-edge technology and
          personalized care.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-15 max-w-7xl"
      >
        {/* --- ABOUT US SPLIT CARD --- */}
        <div className="mb-24 flex min-h-[500px] flex-col items-stretch overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111111] lg:flex-row">
          {/* LEFT CONTENT AREA */}
          <div className="z-1 flex flex-col justify-center bg-[#0a0a0a] p-8 backdrop-blur-2xl md:p-16 lg:w-1/2">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
              About Us
            </span>
            <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
              Al Saqr Technologies LLC
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-400 md:text-base">
              A dynamic and forward-thinking technology company specializing in
              providing comprehensive IT and IT ES solutions. We are dedicated
              to delivering high-quality, scalable, and customizable services to
              optimize business operations and drive strategic decision-making.
              With a commitment to innovation, quality, and client satisfaction,
              we excel in designing, implementing, and managing a diverse range
              of technology-driven solutions.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-block rounded-none border border-white/30 px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT SLIDER AREA */}
          <div className="relative h-[300px] w-full md:h-[400px] lg:h-auto lg:w-1/2">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              className="h-full w-full"
            >
              {sliderImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`Slide ${index}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js optimize image size
                    />
                    {/* Blend overlay only on desktop */}
                    <div className="absolute inset-0 hidden bg-gradient-to-r from-[#111111]/40 via-transparent to-transparent lg:block" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Vision & Mision  */}
        {/* Vision & Mission */}
        <section
          ref={ref}
          className="relative overflow-hidden bg-black px-6 py-32 text-white"
        >
          {/* grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-6xl">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-24 text-center"
            >
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Vision <span className="text-red-600">&</span> Mission
              </h2>
              <p className="mt-4 text-gray-400">
                Driving innovation and delivering transformative technology
                solutions
              </p>
            </motion.div>

            {/* timeline container */}
            <div className="relative">
              {/* animated scroll progress line */}
              <motion.div
                style={{ scaleY }}
                className="absolute top-0 left-1/2 hidden h-full w-[3px] origin-top -translate-x-1/2 bg-gradient-to-b from-red-500 via-red-600 to-red-700 shadow-[0_0_15px_rgba(239,68,68,0.7)] md:block"
              />

              <div className="space-y-28">
                {/* ---------------- VISION ---------------- */}
                <div className="grid items-center md:grid-cols-[1fr_90px_1fr]">
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 p-[2px]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 opacity-40 blur-md transition group-hover:opacity-80" />

                    <div className="relative rounded-2xl bg-gray-900 p-8">
                      <h3 className="mb-4 text-2xl font-bold text-red-500">
                        Vision
                      </h3>

                      <p className="leading-relaxed text-white-100">
                        To be a leading force in the technology industry,
                        recognized for delivering innovative IT and ITES
                        solutions that drive digital transformation.
                        <br />
                        <br />
                        We empower businesses through seamless ERP integrations,
                        advanced Tally customization, Odoo ERP implementation,
                        and fully customized ERP development tailored to
                        evolving needs.
                        <br />
                        <br />
                        By leveraging cloud technologies and scalable MVP
                        solutions, we enable organizations to operate smarter,
                        faster, and more efficiently in the digital economy.
                      </p>
                    </div>
                  </motion.div>

                  {/* Timeline Node */}
                  <div className="relative flex justify-center">
                    {/* pulse ring */}
                    <motion.span
                      className="absolute h-20 w-20 rounded-full bg-red-600/30"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />

                    {/* icon */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-[0_0_25px_rgba(239,68,68,0.8)]"
                    >
                      <Eye size={28} />
                    </motion.div>
                  </div>

                  <div></div>
                </div>

                {/* ---------------- MISSION ---------------- */}
                <div className="grid items-center md:grid-cols-[1fr_90px_1fr]">
                  <div></div>

                  {/* Timeline Node */}
                  <div className="relative flex justify-center">
                    <motion.span
                      className="absolute h-20 w-20 rounded-full bg-red-600/30"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    />

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-[0_0_25px_rgba(239,68,68,0.8)]"
                    >
                      <Target size={28} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 p-[2px]"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 opacity-40 blur-md transition group-hover:opacity-80" />

                    <div className="relative rounded-2xl bg-gray-900 p-8">
                      <h3 className="mb-4 text-2xl font-bold text-red-500">
                        Mission
                      </h3>

                      <p className="leading-relaxed text-white-100">
                        At{" "}
                        <span className="font-semibold text-white">
                          Al Saqr Technologies
                        </span>
                        , our mission is to deliver cutting-edge IT and ITES
                        solutions tailored to the unique needs of modern
                        businesses.
                        <br />
                        <br />
                        We focus on reliable ERP implementations, custom
                        enterprise applications, and scalable cloud solutions
                        that streamline operations and enhance productivity.
                        <br />
                        <br />
                        Through innovation, collaboration, and commitment to
                        excellence, we empower organizations to modernize their
                        digital infrastructure and achieve sustainable growth.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE VALUES SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold">
            Core <span className="text-red-600"> Values</span>
          </h2>
          <p className="text-gray-500">
            Our values define our culture and guide our actions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group relative z-1 overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] bg-[#111111] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-red-500/30"
            >
              {/* Decorative Circle pattern */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/5 blur-3xl transition-all group-hover:bg-red-500/10" />

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 flex items-start gap-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl transition-transform group-hover:scale-110">
                  {value.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-red-500">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {value.desc}
                  </p>
                </div>
              </motion.div>

              {/* Red line accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
