"use client";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";

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

  const services = [
    {
      id: "01",
      title: "Custom Software Development",
      desc: "We develop custom software solutions that are scalable, secure, and aligned with your business objectives. Our experts work closely with you to understand your challenges and create software that integrates into your processes.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: "02",
      title: "Mobile App Development",
      desc: "Stay ahead in the mobile-first world with our intuitive and user-friendly mobile apps. Whether for iOS, Android, or cross-platform development, we deliver apps that improve customer experience and drive business efficiency.",
      // image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      image: "/images/mobile-app.jpg",
    },
    {
      id: "03",
      title: "Enterprise Software Solutions",
      desc: "Our enterprise software solutions help increase operations efficiency, improve collaboration, and drive new ideas across your organization. From CRM systems to ERP solutions, we offer robust software that grows with your business.",
      image: "/images/software-installation.jpg",
    },
    {
      id: "04",
      title: "Tally Integrations",
      desc: "Tally Prime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organize, and display the information the way it suits your preferences and business needs.",
      image: "/images/tally-integration.jpg",
    },
    {
      id: "05",
      title: "Cloud Solutions & Integration",
      desc: "Enfold the power of cloud computing with our inclusive cloud solutions. We help businesses migrate to the cloud, integrate cloud services, and optimize their operations for increased scalability and reduced costs.",
      image: "/images/cloud.png",
    },
    {
      id: "06",
      title: "IT Consulting and Support",
      desc: "Hold our IT consulting expertise to make informed technology decisions. We provide ongoing support and maintenance services to ensure that your systems remain secure, up-to-date, and fully optimized.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ];
  return (
    <main className="relative">
      {/* 4-Second Appointment Modal */}
      <Modal />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center  text-white overflow-hidden">
        {/* Background Image using Next/Image for optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Software Development Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="relative z-10  px-4 max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Creative Software Development Services & IT Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Advanced IT and ITES solutions that are customized to address the
            distinct needs of clients throughout the UAE and the Middle East.
          </p>
          <Link
            href="/services"
            className="bg-black border border-white rounded-none text-white px-8 py-4 rounded-full text-lg font-light hover:bg-white hover:text-black border border-white  transition"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </section>

      {/* --- VAN SALES APP INTRO SECTION --- */}
      <section className=" text-center">
        <section className="min-h-screen flex items-center bg-white px-8 py-20">
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
                Tally Integrated <br />
                <span className="text-red-600">Van Sales</span> Management Software
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
                Request 7 Days Trial
              </Link>
            </motion.div>

            {/* RIGHT SIDE: Visual (Video or Animation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-square lg:aspect-video"
            >
              {/* PRO TIP: Use a video that has the van movement. 
            If you want a person getting down, a high-quality stock video 
            clipped into this rounded container looks amazing.
          */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/Mpos/MPOS-ROUTE-Video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Optional Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
            <div className="relative">
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
            </div>

            {/* RIGHT – Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
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

      {/* service section  */}
      <section className="bg-black text-white py-24">
        <motion.div variants={item} className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div variants={item} className="text-center mb-16">
            <span className="inline-block border border-white px-4 py-1 text-xs tracking-widest uppercase mb-6">
              Our Services
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
              Comprehensive Technology Solutions
            </h2>

            <div className="w-12 h-px bg-white mx-auto mt-6"></div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <motion.div
                variants={item}
                key={service.id}
                className="group border border-gray-700 hover:border-white transition p-6"
              >
                {/* Image */}
                <motion.div
                  variants={item}
                  className="relative w-full h-56 overflow-hidden mb-6"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={item}
                  className="flex items-start justify-between mb-3"
                >
                  <h3 className="text-lg font-medium">{service.title}</h3>
                  <span className="text-sm text-gray-400">{service.id}</span>
                </motion.div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- TRUST & CTA SECTION --- */}
      <section className="py-20 bg-white">
        <motion.div
          variants={item}
          className="container mx-auto px-4 text-center max-w-6xl"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-16 italic">
            <span>
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
            </span>
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
