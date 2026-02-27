"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
const services = [
  {
    id: 1,
    title: "M-POS Van Sales Software",
    description:
      "Integrated Android based business solutions with Tally Prime. Our latest development, the mobile application with Bluetooth printer for Route sales, instant payment and receipt and many more.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Mpos-app-view.png",
  },
  {
    id: 4,
    title: "Tally Web Reports",
    description:
      "A solution beyond Tally will be an integrated solution with web or mobile applications. We always prefer to do an accounts integration with Tally if our customers already have a third party application which meets their business requirements. Our years of experience in integrated solutions help us to bring to customers many ready-made apps and user portals for easy handling of many challenging areas like Order Processing, Executive Expenses/Collection Tracking, MIS reports through smart phone, Reporting/Approval Systems etc.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/TallyWebReports.png",
  },
  {
    id: 2,
    title: "Tally Integrations",
    description:
      "Tally Prime brings you a powerful reports dashboard, presenting your business information in intuitive visual formats. You can add tiles, hide, configure, organize, and display the information the way it suits your preferences and business needs.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Tally.png",
  },
  {
    id: 3,
    title: "Tally Customization",
    description:
      "We are always developing unique enhancements in default Tally to build suitable solutions to fit emerging business needs. Our years of experience in the Tally market equip us with excellent experience and exposure to advise customers to move forward confidently with IT solutions suitable to their financial budget. We have proved that the default Tally features can be extended to fit.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/TallyCustomization.png",
  },

  {
    id: 5,
    title: "Tally on Cloud",
    description:
      "Hybrid Infrastructure as a Service for Centralized Application & Data Management. All the necessary infrastructural aspects shall be planned based on the customer requirement. while retaining full control over your in-house and hosted infrastructure, They can manage all branch data in a single point coordination and easily generate MIS Reports. Highly Scalable Architecture enabling Client to start small and scale-up as needed when number of Users grows",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/TallyOnCloud.png",
  },
  {
    id: 6,
    title: "Device Integrations",
    description:
      "A solution beyond Tally will be an integrated solution with web or mobile applications. We always prefer to do an accounts integration with Tally if our customers already have a third party application which meets their business requirements.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Device-Integ.png",
  },
  {
    id: 7,
    title: "Third Party Software Integrations",
    description:
      "We are Authorized to integrate third party Software like Odoo, Oracle, ERP Next, SAP, Microsoft Dynamics, MySQL, Php/.net core, Excel and Various CRM & HRMS software to Tally prime.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/ThirdParty-integration.png",
  },
  {
    id: 8,
    title: "MVP Solutions & API Developments",
    description:
      "Transform your ideas into Minimum Viable Products (MVPs) with our specialized MVP solutions and API development services. Whether you are launching a new product or refining an existing one, we create scalable, user-friendly MVPs and robust APIs that lay the foundation for your digital success.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/MVP&API.png",
  },
  {
    id: 9,
    title: "Web & Mobile App Developments",
    description:
      "Stay ahead in the digital landscape with our innovative web and mobile app development services. From concept to deployment, our team of skilled developers’ crafts user-centric applications that are responsive, feature-rich, and aligned with the latest industry standards. We cater to diverse platforms, ensuring a seamless user experience.",
    image:
      "https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Web&App.png",
  },
];

export default function ServicesCursorGlow() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(services[0]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRefs = useRef({});
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const glowBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px at ${x}px ${y}px, rgba(0,120,255,0.15), transparent 60%)`,
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white" // Removed overflow-hidden here to allow scroll logic to work
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
    >
      {/* 1. Header Area - Added proper padding-top instead of mt-50 */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 px-5 pt-32 pb-12 text-center"
      >
        <div className="mb-6 inline-block rounded-full border border-purple-500/20 px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-purple-300/60 uppercase backdrop-blur-md">
          Excellence in IT Solutions
        </div>
        <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
          Services We Provide
        </h2>
        <p className="sub mx-auto max-w-xl text-center text-sm leading-relaxed text-gray-500 md:text-base">
          Experience the future of IT Solutions with cutting-edge technology and
          personalized care.
        </p>
      </motion.div>

      {/* Cursor Glow */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: glowBackground }}
        />
      )}

      {/* 2. Main Content Area */}
      <div className="flex min-h-screen items-center pb-24 lg:sticky lg:top-0">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          {/* LEFT – Services: Reduced space-y from 4 to 2 for tighter alignment */}
          <div className="tv relative z-20 order-2 space-y-2 lg:order-1">
            {services.map((service) => {
              const isActive = service.id === active.id;

              return (
                <button
                  ref={(el) => (cardRefs.current[service.id] = el)}
                  key={service.id}
                  onClick={() => {
                    setActive(service);

                    if (window.innerWidth < 1024) {
                      setTimeout(() => {
                        cardRefs.current[service.id]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 50);
                    }
                  }}
                  className={`group w-full rounded-2xl px-6 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 shadow-lg backdrop-blur-xl"
                      : "opacity-60 hover:bg-white/5 hover:opacity-100"
                  }`}
                >
                  {/* Smaller margin for titles */}
                  <h3
                    className={`text-xl font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-red-400"
                        : "text-white group-hover:text-red-300"
                    }`}
                  >
                    {`${service.title}`}
                  </h3>
                  {isActive && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3 space-y-4"
                    >
                      <p className="text-sm leading-relaxed opacity-70">
                        {service.description}
                      </p>

                      {/* Mobile Image */}
                      <motion.div
                        layout
                        className="overflow-hidden rounded-2xl lg:hidden"
                      >
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="w-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative order-1 hidden h-[500px] overflow-hidden shadow-2xl lg:order-2 lg:block lg:h-[550px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 h-full w-full ${
                  active.id === 4 ? "object-cover" : "object-contain"
                }`}
              />
            </AnimatePresence>
            {/* Soft UI Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* 3. Spacer/Buffer: This prevents the section below from jumping up too early */}
      <div className="h-[20vh]" />
    </section>
  );
}
