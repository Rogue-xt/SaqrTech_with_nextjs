"use client";
import { useState } from "react";

export default function ContactUs() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) setStatus("success");
    else setStatus("error");
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-gray-800 text-lg mb-2">
            Contact us about anything related to our company or services.
          </h1>
          <p className="text-gray-600">
            We&apos;ll do our best to get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* --- CONTACT FORM --- */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="w-full md:w-1/4 text-sm font-semibold text-gray-700">
                  Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="w-full md:w-1/4 text-sm font-semibold text-gray-700">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="text"
                  required
                  className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="w-full md:w-1/4 text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="w-full md:w-1/4 text-sm font-semibold text-gray-700">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <label className="w-full md:w-1/4 text-sm font-semibold text-gray-700">
                  Subject *
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start">
                <label className="w-full md:w-1/4 text-sm font-semibold text-gray-700 pt-2">
                  Your Requirements *
                </label>
                <textarea
                  name="requirements"
                  required
                  rows="4"
                  className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:ring-1 focus:ring-red-500 outline-none"
                ></textarea>
              </div>

              <div className="flex md:justify-start justify-center md:pl-[25%]">
                <button
                  type="submit"
                  className="bg-black text-white px-10 py-3 rounded-none font-bold hover:bg-red-700 transition"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* --- CONTACT INFO --- */}
          <div className="space-y-6 text-gray-800">
            <h2 className="font-bold text-lg">Al Saqr Technologies L.L.C</h2>

            <div className="flex gap-4">
              <span className="text-red-500">📍</span>
              <p className="text-sm">
                Near Thasheel Roundabout - Al Sajaa Industrial - Emirates
                Industrial City - Sharjah - United Arab Emirates.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-red-500">📞</span>
              <p className="text-sm font-semibold">+971 58 951 6916</p>
            </div>

            <div className="flex gap-4">
              <span className="text-red-500">✉️</span>
              <p className="text-sm font-semibold">info@saqrtech.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- GOOGLE MAP SECTION --- */}
      {/* <div className="w-full h-[450px] mt-12 grayscale-[0.2]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.992152817491!2d55.46452757544114!3d25.371579477599173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f591406aef377%3A0x5547b567e474cd72!2sAl%20Saqr%20Technologies%20L.L.C!5e0!3m2!1sen!2sae!4v1769080328226!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
 
      </div> */}
    </div>
  );
}
