"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const coreValues = [
  {
    title: "Inventory & Outstanding management",
    desc: "Tell what's the value for the customer for this feature.",
    icon: "💡",
  },
  {
    title: "Real Time Integration",
    desc: "Write what the customer would like to know,not what you want to show.",
    icon: "🏅",
  },

  {
    title: "Online and Offline Functionality  ",
    desc: " A small explanation of this great feature, in clear words.",
    icon: "🎯",
  },
];
function WhyMpos() {
  const containerRef = useRef(null);

  // 1. Monitor the scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" = top of image hits bottom of screen
    // "end start" = bottom of image hits top of screen
    offset: ["start end", "end start"],
  });

  // 1. Horizontal Movement: Now starts at +400 (Right) and goes to -400 (Left)
  const x = useTransform(scrollYProgress, [0, 1], [400, -400]);

  // 2. Rotation: Since it's driving left, we flip the tilt logic
  // Starts tilted forward (5°), levels at center (0°), tilts back at end (-5°)
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  // 3. Scale: Keeps the focus in the center
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <main>
      <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden bg-[#0a0a0a] px-6 pt-20 md:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* LEFT SIDE: Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-10"
          >
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              Revolutionize Your <br />
              <span className="text-red-600">Van Sales Operations</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-gray-400 md:text-xl">
              Empower your sales team with our M-POS solution. Real-time
              tracking, instant invoicing, and seamless Tally integration all in
              one hand-held device.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/van-sales-app"
                className="rounded-md bg-red-600 px-8 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="rounded-md border border-white/20 px-8 py-3 text-white transition hover:bg-white/10"
              >
                View Features
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Subtle Glow Background behind the phone */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-red-600/20 blur-[120px]" />

            <motion.div
              animate={{ y: [0, -20, 0] }} // Floating effect
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[550px] w-[280px] md:h-[650px] md:w-[320px]"
            >
              <Image
                src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Mpos-app-view.png"
                alt="M-POS Mobile App"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* content section  */}
      <section className="border-t border-white/5 bg-[#0a0a0a] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Subtle Section Label */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 block text-sm font-bold tracking-widest text-red-600 uppercase"
          >
            Industry-Leading Solutions
          </motion.span>

          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-3xl leading-tight font-bold text-white md:text-5xl"
          >
            Are you looking to accelerate your sales and improve your van sales
            operations?
          </motion.h2>

          {/* The Long Paragraph Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-justify text-lg leading-relaxed text-gray-400"
          >
            <p>
              Look no further! Introducing the best van sales software solution
              that will maximize your business and boost your van sales like
              never before. With our excellent technology and user-friendly
              interface, this software is developed to meet the unique needs of
              van sales professionals. Whether you &apos; re a small business
              owner or managing a large fleet, our solution offers a range of
              powerful features to optimize your sales processes. Efficiently
              manage your inventory, track sales orders, generate insightful
              reports, and improve customer satisfaction. Our software
              integrates with TallyPrime and provides real-time updates,
              allowing you to stay in control of your van sales at all times.
            </p>

            <p>
              Stay ahead of the competition by gaining valuable insights into
              your sales performance, identifying trends, and implementing
              targeted marketing strategies. Increase your efficiency, maximize
              your sales potential, and watch your business grow exponentially.
              Don&apos;t settle for mediocre results. Upgrade to the best van
              sales software solution and experience the difference it can make
              to your bottom line. Get started today and drive your sales to new
              heights!
            </p>

            <p>
              With Mpos van sales software, you can say goodbye to manual order
              taking, inventory management, and paperwork. This powerful tool
              automates these tasks, allowing your sales team to focus on what
              they do best van based selling. It provides real-time access to
              customer information, order history, and inventory availability,
              empowering your team to make quick and informed decisions on the
              go.
            </p>

            <p>
              Maximizing sales is not just about efficiency it's also about
              customer satisfaction. Van sales software enables your team to
              provide personalized experiences for your customers, from tailored
              product recommendations to speedy fulfillment. With better
              customer service, you can build long-lasting relationships and
              increase customer loyalty.
            </p>
          </motion.div>
        </div>
        <section
          ref={containerRef}
          className="flex w-full items-center justify-center overflow-hidden bg-[#0a0a0a] py-32"
        >
          <motion.div
            style={{
              x,
              // rotate,
              scale,
              perspective: 1000,
            }}
            className="relative flex w-full justify-center"
          >
            <Image
              alt="mpos van driving left"
              src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/Mpos-van-bg.png"
              width={550}
              height={550}
              className="object-contain drop-shadow-[0_30px_60px_rgba(220,38,38,0.3)]"
              priority={false}
            />
          </motion.div>
        </section>
        <div
          id="features"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {coreValues.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="group relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl"
            >
              {/* Internal Reflection / Shine */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-red-500/10 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon Container with subtle glow */}
              <div className="relative z-10 mb-10 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                {item.icon}
              </div>

              {/* Background Numbering */}
              <span className="absolute top-8 right-10 text-5xl font-black text-white transition-colors duration-500 select-none group-hover:text-red-500/10">
                {item.id}
              </span>

              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-red-50">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 transition-colors duration-500 group-hover:text-gray-300">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-red-500 transition-all duration-500 group-hover:w-1/2 group-hover:shadow-[0_0_10px_#a855f7]" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WhyMpos;
