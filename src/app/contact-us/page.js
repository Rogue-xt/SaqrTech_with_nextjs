"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ArrowRight,
  Globe2,
  Briefcase,
} from "lucide-react";
import Map from "@/components/Map";

export default function ContactUs() {
  const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // --- ADD VALIDATION ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    toast.error("Please enter a valid work email.");
    return;
  }
  // ----------------------

  setStatus("sending");

  const contactRequest = fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Failed");
    return result;
  });

  toast.promise(contactRequest, {
    loading: "Transmitting data...",
    success: "Inquiry received.",
    error: (err) => `Error: ${err.message}`,
  });

  try {
    await contactRequest;
    e.target.reset();
    setStatus("success");
  } catch (err) {
    setStatus("error");
  } finally {
    setTimeout(() => setStatus(""), 3000);
  }
};

  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-32 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.2),transparent_60%)]"></div>

      {/* Texture Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 pb-20">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter md:text-6xl">
            Contact
            <span className="ml-3 text-red-600">Us</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Got a question, a big idea, or just want to talk shop? We’re
            <span className="font-semibold text-red-600"> all ears </span>
            and ready to help you scale. Drop us a line and let’s make something
            great happen!
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 lg:col-span-2"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[#080808]/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-10 md:grid-cols-2">
                  {/* NAME */}
                  <div className="group relative">
                    <input
                      name="name"
                      required
                      className="peer w-full border-b border-white/10 bg-transparent py-3 outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Name"
                    />
                    <label className="absolute top-0 left-0 text-[10px] tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Full Name
                    </label>
                  </div>

                  {/* PHONE */}
                  <div className="group relative">
                    <input
                      name="phone"
                      required
                      className="peer w-full border-b border-white/10 bg-transparent py-3 outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Phone"
                    />
                    <label className="absolute top-0 left-0 text-[10px] tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                  {/* EMAIL */}
                  <div className="group relative">
                    <input
                      name="email"
                      type="email"
                      required
                      className="peer w-full border-b border-white/10 bg-transparent py-3 outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Email"
                    />
                    <label className="absolute top-0 left-0 text-[10px] tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Work Email
                    </label>
                  </div>

                  {/* COMPANY */}
                  <div className="group relative">
                    <input
                      name="company"
                      className="peer w-full border-b border-white/10 bg-transparent py-3 outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Company"
                    />
                    <label className="absolute top-0 left-0 text-[10px] tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Company Name
                    </label>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="group relative">
                  <textarea
                    name="subject"
                    rows="3"
                    required
                    className="peer w-full resize-none border-b border-white/10 bg-transparent py-3 outline-none placeholder:text-transparent focus:border-red-600"
                    placeholder="Message"
                  ></textarea>

                  <label className="absolute top-0 left-0 text-[10px] tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                    Project Brief
                  </label>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-red-600 py-6 text-sm font-black tracking-[0.3em] uppercase transition-all hover:bg-red-700"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    Send Message
                    <ArrowRight className="transition-transform group-hover:translate-x-2" />
                  </span>

                  {/* button shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* CONTACT CARD */}
          <div className="order-1 space-y-6 lg:order-2">
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-600 to-red-800 p-8 shadow-[0_30px_80px_rgba(220,38,38,0.5)]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_60%)] opacity-0 transition group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-2">
                  <div className="rounded-lg bg-white/20 p-2">
                    <Briefcase size={16} />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-red-100 uppercase">
                    Tech Division
                  </span>
                </div>

                <h2 className="mb-10 text-3xl font-black tracking-tight">
                  Al Saqr <br /> Technologies L.L.C
                </h2>

                <div className="space-y-5">
                  <a
                    href="tel:+971545252469"
                    className="group/item flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition group-hover/item:bg-white/20">
                      <Phone size={18} />
                    </div>
                    <span className="text-lg font-bold">+971 54 525 2469</span>
                  </a>

                  <a
                    href="mailto:info@saqrtech.com"
                    className="group/item flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition group-hover/item:bg-white/20">
                      <Mail size={18} />
                    </div>
                    <span className="font-medium opacity-90">
                      info@saqrtech.com
                    </span>
                  </a>
                </div>
              </div>

              <Building2 className="absolute -right-6 -bottom-6 h-48 w-48 text-white/10" />
            </div>
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
}
