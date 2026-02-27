"use client";
import { useState } from "react";
import toast from "react-hot-toast";


export default function ContactUs() {
  const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Prepare data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // 2. Disable button via state
  setStatus("sending");

  // 3. Define the fetch as a promise for the toast
  const contactRequest = fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to send message");
    }
    return res.json();
  });

  // 4. Fire the toast notification
  toast.promise(contactRequest, {
    loading: "Sending your message to our team...",
    success: "Message sent! We will contact you soon.",
    error: (err) => `${err.message}`,
  });

  try {
    await contactRequest;

    // 5. Cleanup UI on success
    e.target.reset();
    setStatus("success");
  } catch (err) {
    console.error("Submission Error:", err);
    setStatus("error");
  } finally {
    // 6. Reset status after cooldown to allow button re-entry
    setTimeout(() => setStatus(""), 3000);
  }
};
  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-32 pb-12 text-white">
      {/* Background Glows - Adjusted for higher visibility */}
      <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.08),transparent_50%)]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Let &apos;s
            <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">
              Connect
            </span>
          </h1>
          <p className="text-lg text-zinc-400">
            Have a project in mind? Fill out the form below and our team will
            get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {/* --- ENHANCED GLASS FORM CARD --- */}
          <div className="relative lg:col-span-2">
            <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-8 shadow-[0_0_50px_-12px_rgba(220,38,38,0.25)] backdrop-blur-2xl md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Field Wrapper */}
                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-bold tracking-widest text-red-500 uppercase">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-white transition-all outline-none placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-bold tracking-widest text-red-500 uppercase">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="text"
                      required
                      className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-white transition-all outline-none placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      placeholder="+971 -- --- ----"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-bold tracking-widest text-red-500 uppercase">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-white/20  p-4 text-white transition-all outline-none placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      placeholder="info@yourcompany.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-bold tracking-widest text-red-500 uppercase">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      className="w-full rounded-2xl border border-white/20  p-4 text-white transition-all outline-none placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                      placeholder="Business Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-bold tracking-widest text-red-500 uppercase">
                    Requirements
                  </label>
                  <textarea
                    name="subject"
                    required
                    rows="4"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-white transition-all outline-none placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-red-600 py-5 text-lg font-black tracking-wider text-white uppercase shadow-[0_20px_40px_-10px_rgba(220,38,38,0.5)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>

          {/* --- RIGHT SIDE INFO (High Contrast) --- */}
          <div className="lg:col-span-1">
            <div className="to-black-10 flex h-full flex-col justify-between rounded-[2.5rem] bg-gradient-to-br from-red-600 via-red-700 p-10 shadow-2xl">
              <div className="space-y-12">
                <h2 className="text-3xl leading-none font-black tracking-tighter uppercase">
                  Contact <br /> Details
                </h2>

                <div className="space-y-8">
                  <div className="group flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                      📍
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold tracking-widest text-red-200 uppercase">
                        Location
                      </p>
                      <p className="text-sm leading-relaxed font-medium">
                        Al Sajaa Industrial, Sharjah, UAE
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                      📞
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold tracking-widest text-red-200 uppercase">
                        Phone
                      </p>
                      <p className="text-xl font-bold">+971545252469</p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                      ✉️
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold tracking-widest text-red-200 uppercase">
                        Email
                      </p>
                      <p className="text-lg font-bold underline decoration-white/30 underline-offset-4">
                        info@saqrtech.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <p className="text-[10px] font-black tracking-[0.4em] text-white/70 uppercase">
                  Al Saqr Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
