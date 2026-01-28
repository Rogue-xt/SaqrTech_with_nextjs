"use client";
import Image from "next/image";
import React, { useState } from "react"; // Combined imports

export default function VanSales() {
  const [isTallyUser, setIsTallyUser] = useState(null);
  const [status, setStatus] = useState("");

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
    <div className="bg-black">
      <section className="max-w-6xl  mx-auto p-4 bg-black">
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
            {/* FIXED: Added onSubmit handler here */}
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
