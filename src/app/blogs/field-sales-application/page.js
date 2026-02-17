"use client";
import Margin from "@/components/Margin";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const stackContents = [
  {
    id: 1,
    btn: false,
    theme: "dark",
    title: "Benefits of Implementing a Field Sales App",
    desc: "Implementing a field sales app offers numerous benefits that can significantly enhance the overall efficiency and effectiveness of a sales team. One of the primary advantages is the ability to streamline and automate routine tasks. By reducing the time spent on administrative duties like data entry, scheduling, and reporting, sales representatives can focus more on engaging with customers and closing deals. Automation not only increases productivity but also minimizes the risk of human error, ensuring that data is accurate and up-to-date.Another significant benefit of using a field sales app is the improvement in communication and collaboration among team members. With real-time messaging, video calls, and file sharing capabilities, sales teams can easily stay connected and work together, regardless of their physical location. This enhanced communication ensures that everyone is aligned and informed, leading to more cohesive and effective sales strategies. Additionally, the app can integrate with existing tools and platforms, creating a seamless workflow that further boosts productivity and efficiency. Moreover, a field sales app provides valuable insights through advanced analytics and reporting features. These tools enable sales managers to track performance, identify trends, and make data-driven decisions. By having access to real-time data and customizable reports, sales teams can quickly identify areas for improvement and adjust their strategies accordingly. This level of visibility and control is crucial for optimizing sales processes and achieving better results. In conclusion, implementing a field sales app offers a range of benefits that can transform the way sales teams operate, leading to increased efficiency, improved communication, and better decision-making.",
  },
  {
    id: 2,
    btn: true,
    theme: "red",
    title: "Enhance your field sales with Mpos App",
    desc: "Boost your on-ground sales performance with the MPOS App – a smart mobile solution designed to simplify billing, manage inventory, and improve customer service, anytime, anywhere.",
  },
  {
    id: 3,
    btn: false,
    theme: "dark",
    title: "Choosing the Right Field Sales App for Your Team",
    desc: "Selecting the right field sales app for your team is a crucial decision that can significantly impact your sales success. One of the first considerations is to identify the specific needs and challenges of your sales team. This involves assessing the current sales processes, understanding the pain points, and determining the features that are most important for your team. For example, if communication and collaboration are key challenges, look for an app that offers robust messaging and video conferencing features. If data management is a priority, seek an app with advanced analytics and reporting capabilities. Another important factor is the ease of use and user experience of the app. A field sales app should be intuitive and easy to navigate, ensuring that your sales team can quickly adopt and effectively use the tool. Consider apps that offer user-friendly interfaces, customizable dashboards, and comprehensive support resources such as tutorials and customer service. Additionally, look for apps that offer mobile compatibility, allowing your sales team to access information and perform tasks on the go. A seamless and enjoyable user experience can significantly enhance productivity and adoption rates. Integration capabilities are also a crucial consideration when choosing a field sales app. The app should be able to integrate with your existing tools and systems, such as your ERP Softwares. This ensures a seamless workflow and reduces the need for manual data entry, minimizing the risk of errors and duplications. Additionally, consider the scalability and flexibility of the app. As your business grows and evolves, you want an app that can adapt to your changing needs and continue to support your sales efforts effectively. In conclusion, the right field sales app can transform your sales strategy and drive significant improvements in productivity, communication, and decision-making. By carefully assessing your team's needs, prioritizing user experience, and considering integration capabilities, you can select an app that will empower your sales team and unlock new opportunities for success. As businesses continue to navigate the complexities of the modern marketplace, leveraging technology through field sales apps is not just an advantage—it's a necessity for staying competitive and achieving long-term success.",
  },
  {
    id: 4,
    btn: false,
    theme: "red",
    title: "Enhancing Customer Relationship Management with Field Sales Apps",
    desc: "Customer Relationship Management (CRM) is a critical aspect of any sales strategy, and field sales apps can significantly enhance CRM efforts. One of the primary ways these apps improve CRM is by providing sales representatives with real-time access to customer data. This includes information such as purchase history, preferences, and past interactions, which can be invaluable for understanding customer needs and tailoring sales approaches. Having this data at their fingertips enables sales representatives to engage with customers more effectively and build stronger relationships. Field sales apps also facilitate better tracking and management of customer interactions. With features like automated logging of calls, emails, and meetings, sales teams can maintain a comprehensive record of all customer touchpoints. This ensures that no interaction is overlooked and provides a complete view of the customer journey. Additionally, the ability to set reminders and schedule follow-ups ensures that sales representatives stay on top of their tasks and never miss an opportunity to engage with a customer. This level of organization and visibility is crucial for maintaining consistent and proactive communication. Moreover, field sales apps often integrate with existing CRM systems, providing a seamless and unified platform for managing customer relationships. This integration ensures that all customer data is centralized and easily accessible, reducing the need for manual data entry and minimizing the risk of errors. It also enables sales teams to leverage the full capabilities of their CRM system, including advanced analytics, reporting, and automation features. By enhancing CRM efforts with a field sales app, businesses can improve customer satisfaction, increase retention rates, and ultimately drive more sales.",
  },
];

const crisscross = [
  {
    title: "Collect Orders and Manage Inventory",
    description:
      "Enable your field sales reps to place orders in real-time during customer visits using a mobile device. The system checks product availability and syncs with live inventory data—reducing order errors, stockouts, and delays.",
    image: "/images/blogs/grocery-store.png",
    reverse: false,
  },
  {
    title: "Analyze Performance & Reports",
    description:
      "Gain full visibility into your field team’s performance with built-in dashboards and custom reports. Track sales trends, order volume, visit efficiency, and target achievement to make data-driven decisions.",
    image: "/images/blogs/report.png",
    reverse: true,
  },
  {
    title: "Instant Receipt Collection",
    description:
      "Let your sales reps collect payments on the spot and issue digital receipts instantly. Customers receive proof of payment via SMS, email, or on-screen.",
    image: "/images/blogs/shopping.png",
    reverse: false,
  },
  {
    title: "Invoice PDF File Sharing",
    description:
      "Automatically generate invoices in PDF format after an order is placed and share them with the customer on the spot via email, WhatsApp, or Bluetooth print.",
    image: "/images/blogs/file.png",
    reverse: true,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Control what different users can see or do within the app. Assign permissions based on roles to secure sensitive business data and improve workflow structure.",
    image: "/images/blogs/face-lock.png",
    reverse: false,
  },
  {
    title: "Tally Integration",
    description:
      "Sync orders, invoices, payments, and customer details directly into Tally ERP to streamline accounting and back-office operations. Avoid manual data entry and reduce human error.",
    image: "/images/blogs/count.png",
    reverse: true,
  },
];

const WhytallyFeatures = [
  {
    title: "Real-time Tracking ",
    description:
      "Track your sales reps' activities in real time with powered tracking features. Monitor visits, optimize routes, and ensure accountability with geo-tagged check-ins and time-stamped logs, all from a central dashboard. Stay in control and boost productivity.",

    image: "/images/blogs/field-sales1.webp",
  },
  {
    title: "Faster Order Processing",
    description:
      "Speed up your sales cycle with instant, on-the-spot order creation. Field agents can generate and submit orders directly from their mobile devices during customer visits—no paperwork, no delays.",
    image: "/images/blogs/field-sales2.webp",
  },
  {
    title: " Data-Driven Insights",
    description:
      "Turn your field data into powerful business intelligence. Our app captures every interaction—orders, visits, collections, and routes—and transforms them into meaningful insights through visual reports and smart analytics.",
    image: "/images/blogs/field-sales3.webp",
  },
];

export default function TallySoftware() {
  return (
    <div className="w-full bg-black">
      <Margin />

      <section className="relative w-full">
        <div className="mx-auto max-w-6xl bg-black p-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="z-10 p-5"
          >
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-6xl">
              {/* Revolutionize Your <br /> */}
              Empower Your <span className="text-red-600"> Mpos</span> Field
              Sales Team with Smart Mobility​
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-justify text-lg leading-relaxed text-gray-400"
          >
            <p>
              In today’s fast-paced business landscape, staying ahead of the
              competition is paramount, and traditional field sales methods are
              no longer enough to drive success. Enter the field sales app—a
              powerful tool that can transform your sales strategy and propel
              your team to new heights. Imagine having real-time data at your
              fingertips, streamlined communication, and enhanced customer
              insights all in one convenient platform. This digital evolution
              not only boosts productivity but also empowers your sales force to
              engage with customers more effectively, making every interaction
              count. As we delve into the world of field sales apps, you'll
              discover how leveraging technology can unlock new opportunities,
              streamline your processes, and ultimately revolutionize your
              approach to sales. Get ready to redefine what success looks like
              in your organization!
            </p>

            <p>
              Track performance, manage orders, and boost productivity from
              anywhere. Equip your field sales representatives with the tools
              they need to close more deals, streamline reporting, and stay
              connected with the back office in real-time. Whether you're
              managing a small team or a nationwide sales force, our powerful
              Field Sales App keeps everyone aligned and efficient.
            </p>
          </motion.div>
        </div>

        {/* 3 card Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-20 md:grid-cols-3">
          {WhytallyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col items-center rounded-3xl border border-white/5 bg-[#111111] p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:border-red-600/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
            >
              {/* Image Container with Glow */}
              <div className="relative mb-8 aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-red-600/5 blur-[60px] transition-colors group-hover:bg-red-600/10" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Text Content */}
              <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-red-500">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                {feature.description}
              </p>

              {/* Decorative Bottom Line */}
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-red-600 transition-all duration-500 group-hover:w-1/3" />
            </motion.div>
          ))}
        </div>

        {/* Criss cross section  */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-20 pt-32 pb-1 text-center"
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            How it Works
          </h1>
        </motion.div>

        <section className="py-20 md:px-6">
          <div className="mx-auto max-w-6xl space-y-24 md:space-y-12">
            {crisscross.map((item, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image Container */}
                <div className="relative z-10 h-64 w-64 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-black p-2 shadow-inner transition-transform duration-500 group-hover:scale-105">
                    <div className="mx-auto flex h-full w-full justify-center overflow-hidden rounded-full border-4 border-red-600/40 bg-red-600 transition-all duration-500 group-hover:border-white group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="h-full rounded-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`mt-[-30px] flex-grow rounded-2xl border border-white/5 bg-[#111111] p-8 text-white shadow-[0_-20px_50px_rgba(0,0,0,0.9)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-white/10 group-hover:bg-[#161616] md:mt-0 ${item.reverse ? "md:rounded-[40px_10px_10px_40px]" : "md:rounded-[10px_40px_40px_10px]"} md:p-12 ${item.reverse ? "md:mr-[-80px] md:pr-32" : "md:ml-[-80px] md:pl-32"} `}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-2 hidden h-12 w-1.5 rounded-full bg-red-900 transition-all duration-500 group-hover:h-24 group-hover:bg-red-600 md:block"></div>

                    <div>
                      <h3 className="mb-4 text-2xl font-bold transition-colors duration-500 group-hover:text-red-500">
                        {item.title}
                      </h3>
                      <p className="max-w-xl leading-relaxed text-gray-400 transition-colors duration-500 group-hover:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* stack  */}
        <section className="relative bg-black px-6 py-24 md:px-16">
          <div className="max-w-8xl mx-auto">
            {stackContents.map((item, index) => (
              <div
                key={item.id}
                className="relative mb-12 w-full md:sticky lg:sticky"
                style={{ top: `${80 + index * 10}px` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex h-auto min-h-[350px] flex-col items-center justify-center rounded-[2.5rem] border border-white/5 p-8 text-center shadow-2xl transition-all duration-500 md:sticky md:min-h-[400px] md:min-h-[500] md:p-16 ${
                    item.theme === "red"
                      ? "bg-gradient-to-br from-red-600 to-red-800 text-white"
                      : "border border-white/10 bg-[#161616] text-white"
                  } `}
                >
                  {/* Depth Shadow Effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]" />

                  <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                    {item.title}
                  </h2>
                  <p
                    className={`text-md md:text-md mb-10 max-w-6xl ${item.theme === "red" ? "text-white/80" : "text-gray-400"}`}
                  >
                    {item.desc}
                  </p>

                  {item.btn && (
                    <Link href="/van-sales-app">
                      <button
                        className={`rounded-full px-10 py-4 font-black tracking-widest uppercase transition-all ${
                          item.theme === "red"
                            ? "bg-white text-red-600 hover:bg-black hover:text-white"
                            : "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:bg-white hover:text-red-600"
                        } `}
                      >
                        Get Started Now
                      </button>
                    </Link>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
