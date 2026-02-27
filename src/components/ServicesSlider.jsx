"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; // npm install lucide-react

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    id: "01",
    title: "Custom Software Development",
    description:
      "We develop custom software solutions that are scalable, secure, and aligned with your business objectives. Our experts create software that integrates into your processes.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: "02",
    title: "Mobile App Development",
    description:
      "Stay ahead with intuitive mobile apps. Whether for iOS, Android, or cross-platform, we deliver apps that improve customer experience and drive business efficiency.",
    image: "/images/mobile-app.jpg",
  },
  {
    id: "03",
    title: "Enterprise Software Solutions",
    description:
      "Our enterprise software solutions help increase operations efficiency and drive innovation. From CRM systems to ERP solutions, we offer robust software that grows with you.",
    image: "/images/software-installation.jpg",
  },
  {
    id: "04",
    title: "Tally Integrations",
    description:
      "Tally Prime brings you a powerful reports dashboard, presenting business info in intuitive visual formats. Organize and display information the way it suits your needs.",
    image: "/images/tally-integration.jpg",
  },
  {
    id: "05",
    title: "Cloud Solutions & Integration",
    description:
      "Embrace the power of cloud computing. We help businesses migrate, integrate, and optimize operations for increased scalability and reduced infrastructure costs.",
    image: "/images/cloud.png",
  },
  {
    id: "06",
    title: "IT Consulting and Support",
    description:
      "Leverage our IT consulting expertise to make informed technology decisions. We provide ongoing support to ensure your systems remain secure and fully optimized.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

export default function ServiceSlider() {
  return (
    <section className="overflow-hidden border-t border-white/5 bg-black py-32">
      {/* --- Section Header --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <span className="mb-6 inline-block border border-red-600/50 px-4 py-1 text-[10px] font-bold tracking-[0.3em] text-red-500 uppercase">
          Our Specializations
        </span>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
          Comprehensive <span className="text-red-600">Solutions</span>
        </h2>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6">
        {/* --- Modern Navigation Arrows --- */}
        <div className="pointer-events-none absolute top-1/2 right-4 left-4 z-20 flex -translate-y-1/2 justify-between">
          <button className="button-prev pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white shadow-2xl backdrop-blur-md transition-all hover:border-red-600 hover:bg-red-600">
            <ChevronLeft size={24} />
          </button>

          <button className="button-next pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white shadow-2xl backdrop-blur-md transition-all hover:border-red-600 hover:bg-red-600">
            <ChevronRight size={24} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="service-swiper !pb-20"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`group relative flex h-[550px] flex-col overflow-hidden rounded-3xl border bg-[#0a0a0a] transition-all duration-500 ${
                    isActive
                      ? "scale-100 border-red-600/50 shadow-[0_20px_60px_-15px_rgba(220,38,38,0.3)]"
                      : "scale-90 border-white/5 opacity-30 grayscale"
                  }`}
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-grow flex-col p-10">
                    <span className="mb-4 text-4xl font-black text-red-600 opacity-20">
                      {service.id}
                    </span>
                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-red-500">
                      {service.title}
                    </h3>
                    <p className="mb-8 flex-grow text-sm leading-relaxed font-light text-gray-400">
                      {service.description}
                    </p>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors hover:text-red-500"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-2"
                      />
                    </Link>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- View All CTA --- */}
        <div className="-mt-4 flex justify-center">
          <Link href="/services">
            <button className="group relative overflow-hidden rounded-full bg-red-600 px-12 py-5 font-bold text-white shadow-xl shadow-red-600/20 transition-all hover:scale-105 hover:bg-red-700">
              <span className="relative z-10 flex items-center gap-3">
                VIEW ALL SERVICES
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </Link>
        </div>

        {/* --- Footer Text --- */}
        <div className="mx-auto mt-32 max-w-4xl text-center">
          <p className="text-sm leading-relaxed font-light tracking-wide text-gray-500 italic md:text-base">
            "In the fast-paced digital era, Al Saqr Technologies stands as the
            bridge between legacy systems and the future of enterprise
            automation in the GCC."
          </p>
        </div>
      </div>

      <style jsx global>{`
        /* Swiper Fixes */
        .swiper {
          overflow: visible !important;
        }
        .service-swiper {
          padding-left: 2% !important;
          padding-right: 2% !important;
        }
      `}</style>
    </section>
  );
}
