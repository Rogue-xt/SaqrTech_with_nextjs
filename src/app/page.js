"use client";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";
import ServiceSlider from "@/components/ServicesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    transition: {
      delay: 4.5, // delay in seconds
      duration: 4.8, // how long the animation lasts
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // each child delayed by 0.3s
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="relative">
      <Modal />

      {/* --- HERO SECTION --- */}
      {/* Changed to h-screen (100vh) */}
      <section className="relative h-screen flex items-center text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Mpos/Mpos-Banner-Video.mp4" type="video/mp4" />
          </video>
          {/* Added a dark overlay so white text is readable on light video parts */}
          <div className="absolute inset-0 bg-black/30 z-[1]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="relative z-10 px-6 md:px-12 max-w-5xl"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Creative Software Development Services & IT Solutions
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl">
            Advanced IT and ITES solutions that are customized to address the
            distinct needs of clients throughout the UAE and the Middle East.
          </p>
          <Link
            href="/services"
            className="inline-block border border-white text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition duration-300"
          >
            Explore Our Services →
          </Link>
        </motion.div>
      </section>

      {/* --- VAN SALES APP INTRO SECTION --- */}
      <section className=" text-center">
        <section className="min-h-screen flex items-center bg-white px-8 ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="flex flex-col justify-center text-center"
            >
              <div className="mx-auto">
                <Image
                  src="/Mpos/Mpos Logo/mPos_logo.jpg"
                  alt="MPOS"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                {/* Tally Integrated <br /> */}
                <span className="text-red-600">Van Sales</span> Management
                Software <br />
                with Tally Integration
              </h2>

              <p className="text-[#525252] text-xl mb-2 font-medium">
                Android based business solutions.
              </p>
              <p className="text-[#737373] text-lg mb-10 max-w-full">
                Streamline your distribution with real-time Tally integration
                and Bluetooth printing.
              </p>

              <Link
                href="/van-sales-app"
                className="bg-black mx-auto border-2 border-black text-white px-10 py-4  text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              >
                Request 7 Days Trial →
              </Link>
            </motion.div>

            {/* RIGHT SIDE: Visual (Video or Animation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-none overflow-hidden shadow-2xl bg-gray-100 aspect-square lg:aspect-video"
            >
              
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Mpos/Mpos-Animated-Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

           
            </motion.div>
          </div>
        </section>

        {/* <div className="flex justify-center"> */}
        <section className="border-t border-b border-[#e5e5e5] bg-white py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
            className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* LEFT – Image / Card Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-white border border-gray-200 shadow-sm p-8 w-full max-w-md rotate-[-2deg]">
                {/* Top row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center font-semibold">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="h-3 bg-black w-32 mb-2"></div>
                    <div className="h-2 bg-gray-300 w-20"></div>
                  </div>
                </div>

                <hr className="my-6" />

                {/* Bottom row */}
                <div className="flex items-center gap-4">
                  <div className="text-xl font-bold">↗</div>
                  <div className="flex-1">
                    <div className="h-3 bg-black w-28 mb-2"></div>
                    <div className="h-2 bg-gray-300 w-24"></div>
                  </div>
                </div>
              </div>
              <div className="rotate-[-2deg] absolute"></div>
            </motion.div>

            {/* RIGHT – Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Tag */}
              <span className="inline-block border border-black px-4 py-1 text-xs tracking-widest uppercase mb-6">
                Professional Solution
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Van Sales App & Tally <br /> ERP Software
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                Improve your business operations with our Professional Van Sales
                management App and Tally ERP Software. Mpos van sales app is
                developed to improve efficiency in managing routes and
                inventory, while our Tally ERP solutions provide robust support
                for all your accounting and business management needs.
              </p>

              <p className="text-gray-600 mb-8">
                Experience hassle free integration and expert guidance to drive
                your sales and operational success.
              </p>

              {/* Button */}
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Discover more →
              </a>
            </motion.div>
          </motion.div>
        </section>
      </section>

      {/* slider */}

      <ServiceSlider />
      <hr style={{ backgroundColor: "#efefefe" }} />

      <WhyChooseUs />
      {/* --- TRUST & CTA SECTION --- */}
      <section className="py-20 bg-white">
        <motion.div
          variants={item}
          className="container mx-auto px-4 text-center max-w-6xl"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-16 italic">
            {/* <span>
              In the fast-paced digital era, the Gulf Cooperation Council (GCC)
              region has witnessed an exponential rise in technological
              advancements. As businesses and individuals strive to keep up with
              the ever-evolving landscape, one company has emerged as the
              frontrunner in the IT industry. With its innovative solutions and
              unparalleled expertise, Al Saqr Technologies has cemented its
              position as the go-to technology partner for businesses across the
              GCC.
            </span>
            <br />
            <br />
            <span>
              Al Saqr Technologies has built a strong reputation for its
              excellent services, fit to meet the unique needs and challenges
              faced by businesses in the region. With a team of highly skilled
              professionals, the company offers a comprehensive suite of IT
              services, ranging from software development, to cloud computing
              and data analytics.
            </span>
            <br />
            <br />
            <span>
              Drawing on their extensive industry knowledge and forward-thinking
              approach, Al Saqr Technologies takes pride in empowering their
              clients to harness the full potential of technology. Their
              commitment to delivering exceptional customer experiences and
              driving tangible business outcomes has earned them numerous
              accolades and a loyal clientele.
            </span> */}
            <br />
            <br />
            <span>
              "If you're looking for an IT partner that combines technological
              expertise with a deep understanding of the GCC market, Al Saqr
              Technologies is the clear choice. Stay ahead of the curve and
              unlock the power of technology with a company that is fully
              dedicated to transforming businesses in the GCC region."
            </span>
          </p>

          <h3 className="text-2xl md:text-4xl font-light text-gray-800 mb-4 leading-snug">
            Uphold the highest standards of quality in our IT services, ensuring
            the reliability and efficiency of our solutions.
          </h3>
          <p className="text-gray-500 mb-8">Feel Free To Contact Us</p>

          <Link
            href="/contact-us"
            className="bg-black border border-black text-white px-12 py-4 rounded-none text-xl font-bold hover:bg-white hover:text-black transition shadow-lg"
          >
            Contact us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
