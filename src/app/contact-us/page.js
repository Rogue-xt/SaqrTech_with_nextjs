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

export default function ContactUs() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setStatus("sending");

    const contactRequest = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => {
      if (!res.ok) throw new Error("Failed");
      return res.json();
    });

    toast.promise(contactRequest, {
      loading: "Transmitting data...",
      success: "Inquiry received.",
      error: "Transmission failed.",
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
    <div className="relative min-h-screen overflow-hidden bg-black pt-32 pb-20 text-white">
      {/* Texture Layer */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl leading-[0.9] font-black tracking-tighter uppercase md:text-6xl">
            Enterprise <br />
            <span className="font-outline text-red-600">Enquiry</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
          {/* --- REFINED FORM STYLE --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1 lg:col-span-2"
          >
            <div className="rounded-[2rem] border border-white/5 bg-[#080808] p-8 shadow-2xl md:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div className="group relative">
                    <input
                      name="name"
                      required
                      className="peer w-full border-b border-white/10 bg-transparent py-3 transition-colors outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Name"
                    />
                    <label className="absolute top-0 left-0 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Full Name
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      name="phone"
                      required
                      className="peer w-full border-b border-white/10 bg-transparent py-3 transition-colors outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Phone"
                    />
                    <label className="absolute top-0 left-0 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div className="group relative">
                    <input
                      name="email"
                      type="email"
                      required
                      className="peer w-full border-b border-white/10 bg-transparent py-3 transition-colors outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Email"
                    />
                    <label className="absolute top-0 left-0 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Work Email
                    </label>
                  </div>
                  <div className="group relative">
                    <input
                      name="company"
                      className="peer w-full border-b border-white/10 bg-transparent py-3 transition-colors outline-none placeholder:text-transparent focus:border-red-600"
                      placeholder="Company"
                    />
                    <label className="absolute top-0 left-0 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                      Company Name
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <textarea
                    name="subject"
                    rows="3"
                    required
                    className="peer w-full resize-none border-b border-white/10 bg-transparent py-3 transition-colors outline-none placeholder:text-transparent focus:border-red-600"
                    placeholder="Message"
                  ></textarea>
                  <label className="absolute top-0 left-0 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-red-600">
                    Project Brief
                  </label>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-4 rounded-xl bg-red-600 py-6 text-sm font-black tracking-[0.3em] uppercase transition-all hover:bg-red-700"
                >
                  Send Message
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </button>
              </form>
            </div>
          </motion.div>

          {/* --- UNIFIED RED STACK --- */}
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-1">
            {/* Card 1: Technologies */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-600 to-red-800 p-8 shadow-2xl">
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
                  Al Saqr <br /> Technologies
                </h2>

                <div className="space-y-5">
                  <a
                    href="tel:+971545252469"
                    className="group/item flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition-colors group-hover/item:bg-white/20">
                      <Phone size={18} />
                    </div>
                    <span className="text-lg font-bold">+971 54 525 2469</span>
                  </a>
                  <a
                    href="mailto:info@saqrtech.com"
                    className="group/item flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition-colors group-hover/item:bg-white/20">
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

            {/* Card 2: Parent (Now matching the style) */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 shadow-2xl">
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-2 text-red-500">
                  <div className="rounded-lg bg-red-500/10 p-2">
                    <Globe2 size={16} />
                  </div>
                  <span className="text-[10px] font-black tracking-widest uppercase">
                    Parent Group
                  </span>
                </div>
                <h2 className="mb-10 text-3xl font-black tracking-tight text-white">
                  Al Saqr <br /> Industries
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                      <MapPin size={18} />
                    </div>
                    <p className="text-sm leading-relaxed font-medium text-zinc-400">
                      Industrial Area 13,
                      <br /> Sharjah, UAE
                    </p>
                  </div>
                  <div className="border-t border-white/5 pt-6">
                    <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                      Sectors
                    </p>
                    <p className="mt-2 text-xs text-zinc-300">
                      Manufacturing • Logistics • Trading
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
