"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

export default function VanSales() {
  const [isTallyUser, setIsTallyUser] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Prepare data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.tallyUser = isTallyUser;

    // --- NEW VALIDATION SECTION ---
    // Simple regex for basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email || !emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address.");
      return; // Stop the function here so no API call is made
    }

    if (isTallyUser === null) {
      toast.error("Please select if you are a Tally user.");
      return; // Stop the function here
    }
    // -------------------------------

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
        // This will now catch the "Invalid email" error if it comes from the server too
        throw new Error(errorData.message || "Failed to send");
      }
      return res;
    });

    // 4. Fire the toast and handle the UI logic
    toast.promise(saveLeadRequest, {
      loading: "Processing your request...",
      success: "Success! Your trial is on its way.",
      error: (err) => `${err.message}`, // Cleaned up the "Error:" prefix for better toast UI
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
        <div className="mb-6 inline-block border border-red-600/50 px-4 py-1 text-[10px] font-bold tracking-[0.3em] text-red-500 uppercase">
            Mpos
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Best Van Sales Software UAE,
            <span className="text-red-600"> Mpos</span> Van Delivery Sales
            Application
          </h1>
        </motion.div>
        <section className="relative w-full overflow-hidden py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            {/* LEFT SIDE IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                loading="eager"
                src="/images/Device-view/Mpos-Tab.png"
                alt="consultation"
                width={900}
                height={700}
                className="w-full rounded-3xl shadow-2xl"
              />

              {/* subtle red glow */}
              <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]"></div>
            </motion.div>

            {/* RIGHT SIDE FORM */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:-ml-24"
            >
              <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 shadow-[0_0_60px_rgba(239,68,68,0.12)] backdrop-blur-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-xs tracking-widest text-red-400 uppercase">
                  Free Trial
                </span>

                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  Book Your First Consultation
                </h2>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                    />

                    <input
                      name="number"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                  />

                  {/* Tally User */}

                  <div>
                    <p className="mb-2 text-xs tracking-widest text-gray-400 uppercase">
                      Are you a Tally User?
                    </p>

                    <div className="flex gap-3">
                      {["Yes", "No"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setIsTallyUser(opt === "Yes")}
                          className={`flex-1 rounded-xl border py-3 text-sm font-semibold transition ${
                            (opt === "Yes" && isTallyUser === true) ||
                            (opt === "No" && isTallyUser === false)
                              ? "border-red-500 bg-red-500/20 text-white"
                              : "border-white/10 bg-black/40 text-gray-400 hover:border-red-500/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {isTallyUser && (
                    <input
                      name="tallynumber"
                      type="text"
                      required
                      placeholder="Tally Serial Number"
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                    />
                  )}

                  <textarea
                    name="info"
                    rows="3"
                    placeholder="Additional information..."
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-xl bg-gradient-to-r from-red-600 to-red-500 py-4 font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                  >
                    {status === "sending"
                      ? "Processing..."
                      : "Schedule Free Consultation"}
                  </button>
                </form>
              </div>

              {/* glow behind form */}

              <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-red-600/20 blur-[150px]"></div>
            </motion.div>
          </div>
        </section>

        <div className="description relative z-2 rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:backdrop-blur-2xl">
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
            // ref={imageContainerRef}
            className="banner relative h-[300px] overflow-hidden rounded-2xl md:h-[500px]"
          >
            <motion.img
              src="/images/integrationBanner.png"
              alt="Tally integration"
              // style={{
              //   scale: imageScale,
              //   y: imageY,
              //   opacity: imageOpacity,
              // }}
              className="relative z-2 h-full w-full object-cover"
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
          <div className="z-1 mb-6 inline-block rounded-full border border-red-500/20 bg-black px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-red-300/100 uppercase backdrop-blur-2xl">
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
            className="relative z-2 flex h-[350px] w-full justify-center md:h-[600px]"
          >
            <div>
              <div className="mb-6 inline-block rounded-full border border-red-500/20 bg-black px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-red-300/100 uppercase backdrop-blur-2xl">
                Tab View
              </div>
            </div>
            <Image
              src="/images/Device-view/Mpos-Tab.png"
              alt="Mpos Tablet View"
              fill
              className="relative z-2 object-contain" // Ensures the height is filled completely
            />
          </motion.div>

          {/* Right Image: Slides in from the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative z-2 flex h-[350px] w-full justify-center gap-10 md:h-[600px]"
          >
            <div>
              <div className="z-1 mb-6 inline-block rounded-full border border-red-500/20 bg-black px-4 py-1.5 text-[10px] font-medium tracking-[0.3em] text-red-300/100 uppercase backdrop-blur-2xl">
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

        <div className="z-2 relative mb-24 grid min-h-[500px] grid-cols-1 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] backdrop-blur-xl lg:grid-cols-4">
          {/* Left AREA (Video) - Span 1 column on LG */}
          <div className="relative flex w-full items-center justify-center bg-black/20 p-6 lg:col-span-2 lg:p-10">
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
          <div className="flex flex-col justify-center p-8 md:p-16 lg:col-span-2">
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
