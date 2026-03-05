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
