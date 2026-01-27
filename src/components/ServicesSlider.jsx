"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Custom Software Development",
    description: "We develop custom software solutions that are scalable, secure, and aligned with your business objectives. Our experts work closely with you to understand your challenges and create software that integrates into your processes.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: "02",
    title: "Mobile App Development",
    description: "Stay ahead in the mobile-first world with our intuitive and user-friendly mobile apps. Whether for iOS, Android, or cross-platform development, we deliver apps that improve customer experience and drive business efficiency.",
    // image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    image: "/images/mobile-app.jpg",
  },
  {
    id: "03",
    title: "Enterprise Software Solutions",
    description: "Our enterprise software solutions help increase operations efficiency, improve collaboration, and drive new ideas across your organization. From CRM systems to ERP solutions, we offer robust software that grows with your business.",
    image: "/images/software-installation.jpg",
  },
  {
    id: "04",
    title: "Tally Integrations",
    description: "Tally Prime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organize, and display the information the way it suits your preferences and business needs.",
    image: "/images/tally-integration.jpg",
  },
  {
    id: "05",
    title: "Cloud Solutions & Integration",
    description: "Enfold the power of cloud computing with our inclusive cloud solutions. We help businesses migrate to the cloud, integrate cloud services, and optimize their operations for increased scalability and reduced costs.",
    image: "/images/cloud.png",
  },
  {
    id: "06",
    title: "IT Consulting and Support",
    description: "Hold our IT consulting expertise to make informed technology decisions. We provide ongoing support and maintenance services to ensure that your systems remain secure, up-to-date, and fully optimized.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];
export default function ServiceSlider() {
  return (
    <section className="py-20 bg-white overflow-hidden ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <span className="inline-block border border-black px-4 py-1 text-xs tracking-widest uppercase mb-6">
          Our Services
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
          Comprehensive Technology Solutions
        </h2>

        <div className="w-12 h-px bg-white mx-auto mt-6"></div>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Navigation Arrows Container - Positioned Absolutely over the Slider */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 md:-px-4">
          <button className="button-prev w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition pointer-events-auto cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <button className="button-next w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition pointer-events-auto cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2000, // Time between transitions in ms (3 seconds)
            disableOnInteraction: false, // Keeps autoplay running even after user swipes
            pauseOnMouseEnter: true,
          }}
          className="service-swiper !py-10" // Padding ensures shadow isn't clipped
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-700 rounded-none overflow-hidden bg-white border border-gray-100 flex flex-col h-[500px]
                    ${isActive ? "shadow-[0_20px_50px_rgba(0,0,0,0.15)] scale-105 z-10 border border-black" : "shadow-sm scale-90 opacity-40 grayscale-[0.5]"}`}
                >
                  <div className="relative  h-56 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-4 leading-tight text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <Link href="/services">
                      <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group hover:text-purple-600 transition">
                        Read more
                        <span className="group-hover:translate-x-2 transition-transform">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Center CTA Button */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <button className="bg-black text-white px-10 py-4 rounded-none text-sm font-bold flex items-center gap-3 hover:bg-gray-800 transition shadow-lg">
              View more services
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
        </div>

        {/* Footer Text */}
        <div className="mt-20 max-w-5xl mx-auto text-center px-4">
          <p className="text-gray-400 text-sm md:text-base leading-loose font-light">
            In the fast-paced digital era, the Gulf Cooperation Council (GCC)
            region has witnessed an exponential rise in technological
            advancements. As businesses and individuals strive to keep up with
            the ever-evolving landscape, one company has emerged as the
            frontrunner in the IT industry. With its innovative solutions and
            unparalleled expertise.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .service-swiper {
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        /* Prevents clipping of the right/left scaled slides */
        .swiper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
}
