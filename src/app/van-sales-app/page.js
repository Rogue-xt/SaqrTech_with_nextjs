"use client"; 
import Image from "next/image";
import React from "react";

import { useState } from "react";
export default function VanSales() {
  const [isTallyUser, setIsTallyUser] = useState(null);
  return (
    <div>
      <section className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden ">
          {/* border border-gray-100 shadow-2xl */}
          {/* Left Side: Image Container */}
          <div className="relative w-full md:w-1/2 min-h-[300px]">
            <Image
              src="/Mpos/Van.png"
              alt="Consultation"
              fill
              className="object-contain"
              priority
            />
            {/* Floating Badge (Optional - matching the UI in the image) */}
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
          {/* Right Side: Form Container */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 text-s text-white font-light bg-black px-3 py-3 rounded-full uppercase tracking-wider mb-4">
                ♡ Free Trial
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Book Your First <br />{" "}
                <span className="font-light">Consultation</span>
              </h2>
              <p className="text-gray-500 mt-4">
                Experience the future of healthcare with our expert medical
                team.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#E5E7EB] outline-none transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <input
                    type="text"
                    placeholder="+971 00 000 0000"
                    className="w-full p-3 border border-[#E5E7EB]  rounded-xl focus:ring-2 focus:ring-black outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 border border-[#E5E7EB]  rounded-xl focus:ring-2 focus:ring-black outline-none transition"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">
                  Are you a Tally User?
                </label>

                <div className="flex gap-4">
                  <div className="flex gap-4 justify-center flex-1 py-3 border border-[#E5E7EB]  rounded-xl hover:bg-gray-50 font-medium">
                    <label className="flex items-center justify-center gap-4 flex-1  rounded-xl hover:bg-gray-50 font-medium cursor-pointer group">
                      <span className="text-gray-700">Yes</span>

                      {/* The Hidden Native Checkbox */}
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="tallyUser" // Same name for both ensures only one is selected
                          value="yes"
                          onChange={() => setIsTallyUser(true)}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-black checked:border-black transition-all duration-200"
                        />

                        {/* The Custom Checkmark Icon (Only shows when checked) */}
                        <svg
                          className="absolute w-3 h-3 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
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
                  </div>
                  <div className="flex gap-4 justify-center flex-1 py-3 border border-[#E5E7EB]  rounded-xl hover:bg-gray-50 font-medium">
                    <label className="flex items-center justify-center gap-4 flex-1  rounded-xl hover:bg-gray-50 font-medium cursor-pointer group">
                      <span className="text-gray-700">No</span>

                      {/* The Hidden Native Checkbox */}
                      <div className="relative flex items-center">
                        <input
                          type="radio"
                          name="tallyUser" // Same name for both ensures only one is selected
                          value="No"
                          onChange={() => setIsTallyUser(false)}
                          className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:bg-black checked:border-black transition-all duration-200"
                        />

                        {/* The Custom Checkmark Icon (Only shows when checked) */}
                        <svg
                          className="absolute w-3 h-3 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
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
                  </div>
                </div>
              </div>
              {/* 2. Conditional Rendering: Only show if isTallyUser is true */}
              {isTallyUser === true && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-sm font-medium">Tally Number *</label>
                  <input
                    type="text"
                    placeholder="Enter your Tally Serial Number"
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
                  placeholder="Tell us about your concerns..."
                  rows="3"
                  className="w-full p-3 border border-[#E5E7EB]  rounded-xl focus:ring-2 focus:ring-black outline-none transition"
                ></textarea>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                Schedule Free Consultation
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
              </button>

              <p className="text-[10px] text-center text-gray-400 mt-4">
                By submitting, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
