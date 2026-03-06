"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, ChevronRight } from "lucide-react";

const BLOGS = [
  {
    id: 1,
    title: "Why MPOS is the Ultimate Van Sales Software in 2026",
    excerpt:
      "Streamline your distribution network with real-time inventory tracking and automated invoicing.",
    category: "Solutions",
    date: "March 5, 2026",
    readTime: "6 min",
    image: "/images/blog/van-sales.jpg", // Replace with your paths
    slug: "why-mpos-van-sales-software",
  },
  {
    id: 2,
    title: "Tally Accounting Software: UAE Compliance Guide",
    excerpt:
      "Everything you need to know about integrating Tally with FTA-approved e-invoicing systems.",
    category: "Accounting",
    date: "Feb 28, 2026",
    readTime: "8 min",
    image: "/images/blog/tally.jpg",
    slug: "tally-accounting-software",
  },
  {
    id: 3,
    title: "Choosing the Best IT Company in Sharjah",
    excerpt:
      "How to identify a technology partner that understands the unique scale of GCC enterprises.",
    category: "Tech Strategy",
    date: "Feb 15, 2026",
    readTime: "5 min",
    image: "/images/blog/sharjah-it.jpg",
    slug: "best-it-company-in-sharjah",
  },
  {
    id: 4,
    title: "E-Invoicing & E-VAT Filing in the UAE",
    excerpt:
      "Navigating the new digital tax landscape without disrupting your daily business operations.",
    category: "Legal",
    date: "Jan 20, 2026",
    readTime: "10 min",
    image: "/images/blog/vat.jpg",
    slug: "e-invoicing-e-vat-filing-uae",
  },
  {
    id: 5,
    title: "The Future of Field Sales Applications",
    excerpt:
      "How AI and offline-first mobile apps are changing the way field agents close deals.",
    category: "Innovation",
    date: "Jan 12, 2026",
    readTime: "7 min",
    image: "/images/blog/field-sales.jpg",
    slug: "field-sales-application",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px]" />

      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-6xl leading-[0.9] font-black tracking-tighter md:text-7xl"
          >
            Insights & <br />
            <span className="text-red-600">Innovation</span>
          </motion.h1>
          <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
            Deep dives into enterprise mobility, accounting compliance, and the
            digital transformation of the GCC landscape.
          </p>
        </div>

        {/* Featured Post (The First Blog) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="group relative mb-24 overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50"
        >
          <div className="grid items-center lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden lg:h-[600px]">
              <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover:bg-transparent" />
              <div className="h-full w-full animate-pulse bg-zinc-800" />{" "}
              {/* Placeholder */}
              {/* <Image src={BLOGS[0].image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-110" /> */}
            </div>
            <div className="p-12 lg:p-20">
              <span className="mb-6 inline-block rounded-full border border-red-600/30 px-4 py-1 text-xs font-bold tracking-widest text-red-500 uppercase">
                Featured Article
              </span>
              <h2 className="mb-6 text-4xl leading-tight font-black transition-colors group-hover:text-red-500 md:text-5xl">
                {BLOGS[0].title}
              </h2>
              <p className="mb-10 line-clamp-3 text-lg text-gray-400">
                {BLOGS[0].excerpt}
              </p>
              <Link
                href={`/blogs/${BLOGS[0].slug}`}
                className="group/btn inline-flex items-center gap-3 text-lg font-bold"
              >
                Read Article
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all group-hover/btn:border-red-600 group-hover/btn:bg-red-600">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {BLOGS.slice(1).map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blogs/${blog.slug}`}>
                <div className="relative mb-8 h-80 w-full overflow-hidden rounded-[2rem] border border-white/5">
                  <div className="h-full w-full bg-zinc-900" />{" "}
                  {/* Placeholder */}
                  {/* <Image src={blog.image} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" /> */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="rounded-xl bg-black/60 px-4 py-1.5 text-[10px] font-black tracking-widest uppercase backdrop-blur-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-6 text-xs font-bold tracking-widest text-gray-500 uppercase">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-red-600" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-red-600" /> {blog.readTime}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl leading-snug font-black transition-colors group-hover:text-red-600">
                  {blog.title}
                </h3>
                <p className="mb-6 line-clamp-2 leading-relaxed font-medium text-gray-400">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-2 text-sm font-black tracking-wider text-red-500 uppercase transition-all group-hover:gap-4">
                  Explore Story <ChevronRight size={18} />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / CTA Section */}
        <div className="relative mt-32 overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12 text-center md:p-20">
          <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <h2 className="relative z-10 mb-6 text-4xl font-black md:text-5xl">
            Stay Ahead of the <span className="text-red-600">Curve</span>
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-xl text-gray-400">
            Subscribe to our newsletter for GCC tech insights, compliance
            updates, and enterprise solutions.
          </p>
          <form className="relative z-10 mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 transition-all outline-none focus:border-red-600"
            />
            <button className="rounded-2xl bg-red-600 px-8 py-4 text-sm font-black uppercase transition-all hover:bg-red-700">
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
