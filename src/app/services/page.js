"use client";

import { useRef, useState } from "react";
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  // const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
        className="text-center pt-32 pb-12 relative z-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-purple-300/60 mb-6 backdrop-blur-md">
          Excellence in IT Solutions
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Services We Provide
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Experience the future of IT Solutions with cutting-edge technology and
          personalized care.
        </p>
      </motion.div>

      {/* Cursor Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(600px at ${x}px ${y}px, rgba(0,120,255,0.15), transparent 60%)`,
          ),
        }}
      />

      {/* 2. Main Content Area */}
      {/* Changed h-screen to a fixed height or min-h to prevent cutting off footer/next section */}
      <div className="sticky top-0 min-h-screen flex items-center pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT – Services: Reduced space-y from 4 to 2 for tighter alignment */}
          <div className="tv space-y-2 relative z-20">
            {services.map((service) => {
              const isActive = service.id === active.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActive(service)}
                  className={`w-full text-left rounded-2xl px-6 py-4 transition-all duration-300
                ${isActive ? "bg-white/10 translate-x-2" : "hover:bg-white/5 opacity-50 hover:opacity-100"}
              `}
                >
                  {/* Smaller margin for titles */}
                  <h3
                    className={`text-xl font-semibold transition-colors ${isActive ? "text-red-400" : "text-white"}`}
                  >
                    {`${service.title}`}
                  </h3>

                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 0.7 }}
                      className="mt-2 text-sm leading-relaxed overflow-hidden"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT – Visual: Centered relative to the button block */}
          <div className="relative h-[500px] lg:h-[550px]  overflow-hidden shadow-2xl">
            <motion.img
              key={active.image}
              src={active.image}
              alt={active.title}
              style={{
                scale: imageScale,
                // y: imageY,
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // className="real absolute inset-0 w-full h-full object-contain"
              className={`absolute inset-0 w-full h-full ${
                active.id === 4 ? "object-cover" : "object-contain"
              }`}
            />
            {/* Soft UI Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Spacer/Buffer: This prevents the section below from jumping up too early */}
      <div className="h-[20vh]" />
    </section>
  );
}
