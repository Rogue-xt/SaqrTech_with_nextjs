"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";

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
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/vanSalesTrial", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        // res.ok is safer than checking for 200 exactly
        setStatus("success");
        alert("Mail Sent Successfully");
        e.target.reset(); // Clear form on success
        setIsTallyUser(null); // Hide tally input again
      } else {
        setStatus("error");
        alert("Error sending email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      // Small delay before allowing resubmit to prevent spamming
      setTimeout(() => setStatus(""), 2000);
    }
  };

  return (
    <div className="bg-black ">
      <section className="max-w-6xl  mx-auto p-4 bg-black">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center pt-32 pb-1 relative z-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-purple-300/60 mb-6 backdrop-blur-md">
            Mpos
          </div>
          <h1 className="text-5xl text-white md:text-6xl font-bold tracking-tight mb-6">
            Best Van Sales Software UAE, Mpos Van Delivery Sales Application
          </h1>
        </motion.div>
        <div className="flex flex-col md:flex-row mt-15 bg-black rounded-3xl overflow-hidden ">
          {/* Left Side: Image */}
          <div className="relative w-full md:w-1/2 min-h-[300px]">
            <Image
              src="/images/Device-view/Mpos-Tab.png"
              alt="Consultation"
              fill
              className="object-contain"
              priority
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
              <div className="bg-black p-2 rounded-full">
                <svg
                  className="w-5 h-5 text-white"
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
                <p className="font-bold text-lg leading-none">10k+</p>
                <p className="text-xs text-gray-500">Consultations</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="form border border-white/10 transition-all duration-500  hover:bg-white/[0.07] hover:backdrop-blur-2xl  hover:border-red-500/50 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] bg-[#111111] border border-white/10 rounded-[2.5rem] w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center m-0 md:m-10 border-2  shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            <div className="mb-6">
              <span className="invert inline-flex items-center gap-1 text-sm text-white font-light bg-black px-4 py-2 rounded-full uppercase tracking-wider mb-4">
                ♡ Free Trial
              </span>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Book Your First <br />
                <span className="font-light">Consultation</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-black outline-none transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <input
                    name="number"
                    type="text"
                    required
                    placeholder="+971 00 000 0000"
                    className="w-full p-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-black outline-none transition"
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
                  className="w-full p-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-black outline-none transition"
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
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-sm font-medium">Tally Number *</label>
                  <input
                    name="tallynumber"
                    type="text"
                    placeholder="Enter Serial Number"
                    className="w-full p-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-black outline-none transition"
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
                  className="w-full p-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-black outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 border border-white invert rounded-none font-bold flex items-center justify-center gap-2 transition duration-300 ${
                  status === "sending"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-gray-800 text-white"
                }`}
              >
                {status === "sending"
                  ? "Processing..."
                  : "Schedule Free Consultation"}
                {status !== "sending" && (
                  <svg
                    className="w-4 h-4"
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
          </div>
        </div>

        <div
          className="description p-10  rounded-[2rem] bg-white/[0.03] border border-white/10 transition-all duration-500 
                         hover:bg-white/[0.07] hover:backdrop-blur-2xl 
                    hover:border-red-500/50 hover:-translate-y-3
                         hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
        >
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="text-white mx-auto text-sm md:text-base leading-relaxed"
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
            className="banner relative overflow-hidden rounded-2xl h-[300px] md:h-[500px] "
          >
            <motion.img
              src="/images/integrationBanner.png"
              alt="Tally integration"
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="w-full h-full object-cover"
            />
          </div>
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="text-white mx-auto text-sm md:text-base leading-relaxed"
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
            className="text-white mx-auto text-sm md:text-base leading-relaxed"
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
            className="text-white mx-auto text-sm md:text-base leading-relaxed"
          >
            Whether you operate a small or large-scale business, Mpos Van Sales
            Software is the perfect solution to elevate your performance and
            achieve growth at its peak. The intuitive interface and powerful
            features ensure that your sales teams can work smarter, not harder,
            making real-time updates and tracking simpler and more effective.
          </p>
          <p
            style={{ opacity: "0.7", lineHeight: "2rem" }}
            className="text-white mx-auto text-sm md:text-base leading-relaxed"
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
          className="text-center pt-32 pb-1 relative z-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-purple-300/60 mb-6 backdrop-blur-md">
            Display Modes
          </div>
          <h3 className="text-5xl text-white md:text-6xl font-bold tracking-tight mb-6">
            Classic Display Mode
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-20 px-4">
          {/* Left Image: Slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[350px] md:h-[600px] w-full flex justify-center"
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-purple-300/60 mb-6 backdrop-blur-md">
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
            className="relative h-[350px] md:h-[600px] w-full   flex justify-center gap-10"
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 text-[10px] uppercase tracking-[0.3em] font-medium text-purple-300/60 mb-6 backdrop-blur-md">
                Mobile View
              </div>
            </div>
            <Image
              src="/images/services/Mpos-app-view.png"
              alt="Mpos App View"
              fill
              className="object-contain mt-5 mb-5" // Matches the height of the first image
            />
          </motion.div>
        </div>

        <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-4 mb-24 min-h-[500px]">
          {/* Left AREA (Video) - Span 1 column on LG */}
          <div className="lg:col-span-1 relative w-full flex items-center justify-center p-6 lg:p-10 bg-black/20">
            <div className="relative w-full aspect-video lg:aspect-[9/16] max-w-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
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
          <div className="lg:col-span-3 p-8 md:p-16 flex flex-col justify-center">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs">
              Innovation
            </span>
            <h2 className="text-3xl md:text-5xl text-white font-bold mt-4 mb-6 leading-tight">
              Let's Change the Van Sales Management Process.
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8 max-w-3xl">
              Mpos Van Sales Management Software is developed to boost your van
              sales management efficiency. With uncompromising sales management
              features, you can track sales in real-time, manage inventory,
              process orders, and maintain customer relationships
              effortlessly...
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-block border border-white/30 text-white px-8 py-3 rounded-none hover:bg-white hover:text-black transition-all duration-300"
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
    <label className="flex items-center justify-center gap-4 flex-1 py-3 border border-[#E5E7EB] rounded-xl  font-medium cursor-pointer group">
      <span className="text-white-700">{label}</span>
      <div className="relative flex items-center border border-white rounded-full">
        <input
          type="radio"
          name="tallyUser"
          value={value}
          onChange={onChange}
          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-black checked:border-black transition-all"
        />
        <svg
          className="absolute w-3 h-3 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"
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
