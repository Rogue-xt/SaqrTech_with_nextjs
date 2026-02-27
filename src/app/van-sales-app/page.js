"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

export default function VanSales() {
  const [isTallyUser, setIsTallyUser] = useState(null);
  const [status, setStatus] = useState("");

  // 1. Create a separate ref for just the image container
  const imageContainerRef = useRef(null);

  // 2. Adjust useScroll to track only that container
  const { scrollYProgress: imageScroll } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"], // Starts when top of image hits bottom of screen
  });

  // 3. Make the transformations more aggressive so you can see them
  const imageScale = useTransform(imageScroll, [0, 0.5], [0.2, 1]); // Scales up as it enters
  const imageOpacity = useTransform(imageScroll, [0, 0.3], [0, 1]); // Fades in
  const imageY = useTransform(imageScroll, [0, 1], [50, -50]); // Parallax movement

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Prepare data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // 2. Disable button immediately via state
    setStatus("sending");

    // 3. Define the fetch as a promise for the toast
    const saveLeadRequest = fetch("/api/vanSalesTrial", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to send");
      }
      return res;
    });

    // 4. Fire the toast and handle the UI logic
    toast.promise(saveLeadRequest, {
      loading: "Processing your request...",
      success: "Success! Your trial is on its way.",
      error: (err) => `Error: ${err.message}`,
    });

    try {
      await saveLeadRequest;

      // Cleanup UI on success
      e.target.reset();
      setIsTallyUser(null);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      // Allow re-submission after a short cooldown
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="bg-black">
      <section className="mx-auto max-w-6xl bg-black p-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-20 pt-32 pb-1 text-center"
        >
          <div className="mb-6 inline-block rounded-full border border-purple-500/20 px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-purple-300/60 uppercase backdrop-blur-md">
            Mpos
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Best Van Sales Software UAE,
            <span className="text-red-600"> Mpos</span> Van Delivery Sales
            Application
          </h1>
        </motion.div>
        <div className="mt-15 flex flex-col overflow-hidden rounded-3xl bg-black md:flex-row">
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            viewport={{ once: true }}
            className="relative min-h-[300px] w-full md:w-1/2"
          >
            <Image
              src="/images/Device-view/Mpos-Tab.png"
              alt="Consultation"
              fill
              className="object-contain"
              priority
            />
            {/* Floating Badge */}
            <div className="absolute right-6 bottom-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">
              <div className="rounded-full bg-black p-2">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg leading-none font-bold">10k+</p>
                <p className="text-xs text-gray-500">Downloads</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            // initial={{ opacity: 0, scale: 0.8, x: 50 }}
            // whileInView={{ opacity: 1, scale: 0.8, x: 0 }}
            // transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            // viewport={{ once: true }}
            className="form m-0 flex w-full flex-col justify-center rounded-[2.5rem] border border-2 border-white/10 bg-red-600 p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl md:m-10 md:w-1/2 md:p-12"
          >
            <div className="mb-6">
              <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-black px-4 py-2 text-sm font-light tracking-wider text-white uppercase invert">
                ♡ Free Trial
              </span>
              <h2 className="text-4xl leading-tight font-bold text-white">
                Book Your First <br />
                <span className="font-light">Consultation</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-[#E5E7EB] p-3 transition outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <input
                    name="number"
                    type="number"
                    required
                    placeholder="+971 00 000 0000"
                    className="w-full rounded-xl border border-[#E5E7EB] p-3 transition outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-[#E5E7EB] p-3 transition outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">
                  Are you a Tally User?
                </label>
                <div className="flex gap-4">
                  <RadioOption
                    label="Yes"
                    value="yes"
                    onChange={() => setIsTallyUser(true)}
                  />
                  <RadioOption
                    label="No"
                    value="no"
                    onChange={() => setIsTallyUser(false)}
                  />
                </div>
              </div>

              {isTallyUser === true && (
                <div className="animate-in fade-in slide-in-from-top-2 space-y-1 duration-300">
                  <label className="text-sm font-medium">Tally Number *</label>
                  <input
                    name="tallynumber"
                    type="text"
                    placeholder="Enter Serial Number"
                    className="w-full rounded-xl border border-[#E5E7EB] p-3 transition outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-sm font-medium">
                  Additional information
                </label>
                <textarea
                  name="info"
                  placeholder="How can we help?"
                  rows="3"
                  className="w-full rounded-xl border border-[#E5E7EB] p-3 text-white transition outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`flex w-full items-center justify-center gap-2 rounded-[2.5rem] border border-white py-4 font-bold invert transition duration-300 ${
                  status === "sending"
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {status === "sending"
                  ? "Processing..."
                  : "Schedule Free Consultation"}
                {status !== "sending" && (
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="description rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl">
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="mx-auto text-sm leading-relaxed text-white md:text-base"
          >
            In the fast-paced world of van sales, having the right software can
            make all the difference. The best van sales software is an essential
            tool for businesses looking to optimize their delivery and sales
            processes. In the UAE, where convenience and speed are key, mobile
            van sales apps are revolutionizing the way businesses manage their
            field operations. Whether you're in retail, food distribution, or
            courier services, a van sales solution that combines mobility, ease
            of use, and powerful features will set your business apart from the
            competition. Experience the best Mpos Van Sales Software system
            formulated to improve your Van sales process. Sales team can manage
            inventory, sales, orders and generate reports easily. Mpos Van
            Delivery Sales App offering features such as Offline and online
            transactions, Multi company invoicing, Ledger statement, Real time
            inventory tracking, Stock transfer management, Reporting and
            Analysis in web, Web Dashboard, Executive Tracking. This system
            increases sales by routine tasks, enhances accuracy with data
            handling and reduces costs through optimized routes and inventory
            management, and improves customer satisfaction with timely
            deliveries and accurate order processing. Now its time to change the
            Van Sales process to new way with Mpos App.
          </p>
          <div
            ref={imageContainerRef}
            className="banner relative h-[300px] overflow-hidden rounded-2xl md:h-[500px]"
          >
            <motion.img
              src="/images/integrationBanner.png"
              alt="Tally integration"
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="h-full w-full object-cover"
            />
          </div>
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="mx-auto text-sm leading-relaxed text-white md:text-base"
          >
            The integration of Mpos&nbsp;
            <strong>mobile van sales software</strong>&nbsp;revolutionizes the
            way businesses manage their&nbsp;
            <strong>van sales operations</strong>. This complete&nbsp;
            <strong>van sales system</strong>&nbsp;enable your sales teams with
            instant access to vital information, enabling them to take orders,
            check inventory, and provide quotes on the spot. With features like
            GPS tracking, your sales team can navigate more efficiently,
            reducing travel time and costs. The real time data synchronization
            ensures that everyone stays informed, minimizing errors and
            improving customer satisfaction. By utilizing our mobile van sales
            software, your business can adapt to changing market demands
            swiftly, foster stronger customer relationships, and ultimately
            drive increased sales and revenue. Change the future of van sales
            management and watch your business thrive!
          </p>
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="mx-auto text-sm leading-relaxed text-white md:text-base"
          >
            Mpos Van Sales Software is developed to improve your van sales
            operations, helping you to increase your van sales orders and drive
            business growth. By automating key aspects of the sales and delivery
            process, our software allows your van sales team to focus on more
            critical tasks, reducing van sales delivery times and improving
            overall efficiency. This enables businesses to handle a larger
            volume of orders while maintaining high service standards.
          </p>
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="mx-auto text-sm leading-relaxed text-white md:text-base"
          >
            Whether you operate a small or large-scale business, Mpos Van Sales
            Software is the perfect solution to elevate your performance and
            achieve growth at its peak. The intuitive interface and powerful
            features ensure that your sales teams can work smarter, not harder,
            making real-time updates and tracking simpler and more effective.
          </p>
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="mx-auto text-sm leading-relaxed text-white md:text-base"
          >
            Additionally, our van sales software integrates seamlessly with
            TallyPrime, a leading business management software, to improve your
            accounting and reporting processes. This integration allows for
            smooth data flow between the systems, ensuring that your sales,
            inventory, and financial records are always in sync and easily
            accessible. With Mpos Van Sales Software, you not only boost van
            sales efficiency but also ensure a holistic and integrated approach
            to managing your business operations.
          </p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-20 pt-32 pb-1 text-center"
        >
          <div className="mb-6 inline-block rounded-full border border-purple-500/20 px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-purple-300/60 uppercase backdrop-blur-md">
            Display Modes
          </div>
          <h3 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Classic Display Mode
          </h3>
        </motion.div>

        <div
          style={{ overflow: "hidden" }}
          className="mt-20 mb-20 grid grid-cols-1 gap-8 px-4 md:grid-cols-2"
        >
          {/* Left Image: Slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex h-[350px] w-full justify-center md:h-[600px]"
          >
            <div>
              <div className="mb-6 inline-block rounded-full border border-purple-500/20 px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-purple-300/60 uppercase backdrop-blur-md">
                Tab View
              </div>
            </div>
            <Image
              src="/images/Device-view/Mpos-Tab.png"
              alt="Mpos Tablet View"
              fill
              className="object-contain" // Ensures the height is filled completely
            />
          </motion.div>

          {/* Right Image: Slides in from the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex h-[350px] w-full justify-center gap-10 md:h-[600px]"
          >
            <div>
              <div className="mb-6 inline-block rounded-full border border-purple-500/20 px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-purple-300/60 uppercase backdrop-blur-md">
                Mobile View
              </div>
            </div>
            <Image
              src="https://nxtgcgexmtuubojcfztc.supabase.co/storage/v1/object/public/Public/services/Mpos-app-view.png"
              alt="Mpos App View"
              fill
              className="mt-5 mb-5 object-contain" // Matches the height of the first image
            />
          </motion.div>
        </div>

        <div className="mb-24 grid min-h-[500px] grid-cols-1 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111111] lg:grid-cols-4">
          {/* Left AREA (Video) - Span 1 column on LG */}
          <div className="relative flex w-full items-center justify-center bg-black/20 p-6 lg:col-span-1 lg:p-10">
            <div className="relative aspect-video w-full max-w-[400px] overflow-hidden rounded-2xl shadow-2xl lg:aspect-[9/16]">
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/H1t2Aa1tvvY?autoplay=1&mute=1&loop=1&playlist=H1t2Aa1tvvY"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right CONTENT AREA - Span 3 columns on LG */}
          <div className="flex flex-col justify-center p-8 md:p-16 lg:col-span-3">
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
              Innovation
            </span>
            <h2 className="mt-4 mb-6 text-3xl leading-tight font-bold text-white md:text-5xl">
              Let's Change the Van Sales Management Process.
            </h2>
            <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
              Mpos Van Sales Management Software is developed to boost your van
              sales management efficiency. With uncompromising sales management
              features, you can track sales in real-time, manage inventory,
              process orders, and maintain customer relationships
              effortlessly...
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-block rounded-none border border-white/30 px-8 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Small helper component to keep code clean
function RadioOption({ label, value, onChange }) {
  return (
    <label className="group flex flex-1 cursor-pointer items-center justify-center gap-4 rounded-xl border border-[#E5E7EB] py-3 font-medium">
      <span className="text-white-700">{label}</span>
      <div className="relative flex items-center rounded-full border border-white">
        <input
          type="radio"
          name="tallyUser"
          value={value}
          onChange={onChange}
          className="peer h-5 w-5 appearance-none rounded-full border-2 border-gray-300 transition-all checked:border-black checked:bg-black"
        />
        <svg
          className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </label>
  );
}
