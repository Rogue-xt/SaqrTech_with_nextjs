"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const coreValues = [
  {
    title: "Innovation",
    desc: "Embrace technological advancements and creative solutions to meet the evolving needs of our clients.",
    icon: "💡",
  },
  {
    title: "Quality",
    desc: "Ensure excellence in all our services, adhering to the highest standards of reliability and efficiency.",
    icon: "🏅",
  },
  {
    title: "Client-Centric Approach",
    desc: "Prioritize client satisfaction by understanding and addressing their unique requirements.",
    icon: "👥",
  },
  {
    title: "Collaboration",
    desc: "Foster a collaborative environment that encourages teamwork and growth of the clients.",
    icon: "🎯",
  },
];

const sliderImages = [
  "/images/gallery/IMG_01.jpg",
  "/images/gallery/IMG_02.jpg",
  // "/images/gallery/IMG_03.jpg",
  // "/images/gallery/IMG_04.jpg",
  "/images/gallery/IMG_05.jpg",
  "/images/gallery/IMG_06.jpg",
];

export default function AboutSection() {
  return (
    <section className="bg-black text-white pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
        viewport={{ once: true }}
        className="text-center pt-32 pb-12 relative z-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-purple-300/60 mb-6 backdrop-blur-md">
          Excellence in IT Solutions
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          About Us
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Experience the future of IT Solutions with cutting-edge technology and
          personalized care.
        </p>
      </motion.div>
      <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
                  viewport={{ once: true }} className="max-w-7xl mt-15 mx-auto">
        {/* --- ABOUT US SPLIT CARD --- */}
        <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch mb-24 min-h-[500px]">
          {/* LEFT CONTENT AREA */}
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Al Saqr Technologies LLC
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8">
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
                className="inline-block border border-white/30 px-8 py-3 rounded-none hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT SLIDER AREA */}
          <div className="lg:w-1/2 relative w-full h-[300px] md:h-[400px] lg:h-auto">
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
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={`Slide ${index}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw" // Helps Next.js optimize image size
                    />
                    {/* Blend overlay only on desktop */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/40 via-transparent to-transparent hidden lg:block" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* --- CORE VALUES SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Core Values</h2>
          <p className="text-gray-500">
            Our values define our culture and guide our actions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-red-500/30 transition-all duration-500"
            >
              {/* Decorative Circle pattern */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all" />

              <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }} className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
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
