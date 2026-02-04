"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CursorGlowWrapper from "@/components/CursorGlowWrapper";

export default function ITCompanySharjah() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const stackContents = [
    {
      id: 1,
      theme: "dark",
      title:
        "Partner with the best IT company in Sharjah, UAE, for exceptional IT services and support.",
      desc: "In the thriving business landscape of Sharjah, UAE, there is one IT company that stands out among the rest, capturing the imagination of businesses far and wide. This rising star has garnered a reputation for delivering unmatched technological solutions and stellar customer service, making it the top choice for companies seeking innovative IT services. With a team of highly skilled professionals and cutting-edge technologies, this IT company has revolutionized the way businesses in Sharjah operate. From implementing customized software solutions to providing robust cybersecurity measures, they have become the go-to partner for organizations looking to stay ahead in the digital age.",
    },
    {
      id: 2,
      theme: "red",
      title:
        "Discover the true force behind Sharjah's technological transformation",
      desc: "With a team of highly skilled professionals, the company combines technical prowess and creative thinking to deliver exceptional results. Their commitment to staying on top of the latest industry trends ensures that clients receive the most up-to-date solutions that drive growth and enhance their competitive advantage. What sets this company apart is their unwavering dedication to customer satisfaction. They go above and beyond to understand their clients' goals and objectives, working closely with them to develop customized strategies that yield tangible results. scription",
    },
    {
      id: 3,
      theme: "dark",
      title: "",
      desc: "Whether it's website development, software solutions, or digital marketing services, the top IT company in Sharjah, UAE, is the go-to choice for businesses looking to stay ahead in today's digital world. Embark on a transformative journey with this leading IT firm and unlock the full potential of your business today.Not only does this company excel in providing top-notch IT solutions, but their commitment to customer satisfaction sets them apart from their competitors. They prioritize building long-term relationships with their clients, consistently surpassing expectations and delivering outstanding results. As the demand for reliable and efficient IT services grows in Sharjah, this leading IT company continues to make remarkable strides in shaping the city's technological landscape. With their unparalleled expertise and unwavering dedication, it is no wonder they have become the undisputed champion in the IT industry. Discover the true force behind Sharjah's technological transformation and embrace the future with the top IT company in town.",
    },
    {
      id: 4,
      theme: "red",
      title: "Are you looking for the top IT company in Sharjah, UAE?​ ",
      desc: "Are you looking for the top IT company in Sharjah, UAE? Look no further! In this article, we will unveil the rising stars that have been making waves in the IT industry in Sharjah. With their cutting-edge technology solutions and unparalleled expertise, these companies have positioned themselves as game-changers in the field. In today's digital age, having a reliable and innovative IT partner is essential for businesses to thrive. Whether you need software development, web design, cybersecurity, or IT consulting services, the top IT company in Sharjah can provide you with tailored solutions to meet your specific needs. This article will not only introduce you to the top IT company in Sharjah but also shed light on their achievements, services, and customer satisfaction. Through this comprehensive guide, you will gain insights into the IT landscape in Sharjah and make an informed decision when choosing your IT partner. So, get ready to discover the rising stars in the IT industry in Sharjah, UAE, and prepare to take your business to new heights with their exceptional IT solutions.",
    },
    {
      id: 5,
      theme: "dark",
      title: "Tailored IT Solutions for Businesses",
      desc: " Every business has its own set of challenges and objectives when it comes to technology, which is why a one-size-fits-all approach to IT services doesn’t work. At Al Saqr Technologies, we believe that a personalized strategy is key to solving unique business problems. We take the time to understand your company’s specific needs, goals, and processes. This enables us to design and implement IT solutions that are not only effective but also aligned with your overall business objectives. Whether you are a start-up looking for a scalable infrastructure or a large enterprise aiming to optimize your existing systems, we provide custom IT solutions that focus on efficiency. Our goal is to help you achieve tangible results, such as: Saving Time: Automating tasks, optimizing workflows, and minimizing downtime so your team can focus on what they do best. Reducing Costs: Streamlining your IT resources and systems to ensure you’re getting the most value while minimizing unnecessary expenditures. Improving Performance: Implementing high-performance technologies that enhance your productivity, ensure security, and give you a competitive edge in the market. ",
    },
    {
      id: 6,
      theme: "red",
      title: "Why Choose Us for IT Services in the UAE?",
      desc: "At Al Saqr Technologies, we’ve earned the trust of our clients by consistently delivering reliable, high-quality IT support backed by unmatched professionalism. Our strong presence in Sharjah and across the UAE enables us to understand and address the unique challenges businesses face in both local and regional markets. We pride ourselves on a customer-focused approach, which means we don’t just offer services—we build long-lasting partnerships that add value to your business. Our team goes above and beyond to ensure that your IT needs are not only met but exceeded, with tailored solutions designed to enhance productivity, security, and growth. By choosing us, you're not just hiring an IT service provider; you're gaining a dedicated partner committed to helping your business succeed in the ever-evolving digital landscape.",
    },
    // {
    //   id: 7,
    //   theme: "dark",
    //   title: "",
    //   desc: "",
    // },
  ];

  const itSolutionsList = [
    {
      title: "Enhanced Productivity Tools",
      desc: "Implementation of productivity-enhancing software and systems, helping your team work more efficiently.",
    },
    {
      title: "Consultative Approach",
      desc: "Expert IT consulting to assess your current setup and provide strategic advice for future improvements.",
    },
    {
      title: "Green IT Solutions",
      desc: "Environmentally friendly IT practices to reduce carbon footprint and contribute to sustainable operations.",
    },
    {
      title: "Rapid Deployment and Implementation",
      desc: "Swift setup and integration of IT systems to minimize disruption and maximize operational speed.",
    },
    {
      title: "Compliance & Regulatory Support",
      desc: "Assistance in meeting industry standards and regulatory requirements for data protection and IT practices.",
    },
    {
      title: "Training & Development for Your Team",
      desc: "Ongoing support and training to ensure your staff is fully equipped to leverage new technologies effectively.",
    },
    {
      title: "Proactive IT Maintenance",
      desc: "Regular system checks, updates, and optimizations to prevent issues before they arise, ensuring uninterrupted business operations.",
    },
    {
      title: "Remote & On-Site Support Options",
      desc: "Flexible support models that offer remote troubleshooting and on-site assistance as needed for timely resolution.",
    },
    {
      title: "Virtualization Solutions",
      desc: "Advanced virtualization services to optimize resource utilization, improve scalability, and reduce IT infrastructure costs.",
    },
    {
      title: "Data Analytics & Business Intelligence",
      desc: "Tools and solutions that leverage data analytics to provide valuable insights, aiding in informed decision-making.",
    },
    {
      title: "Software Development & Integration",
      desc: "Custom software solutions and integration services to streamline workflows and enhance productivity.",
    },
    {
      title: "Compliance with UAE Cybersecurity Standards",
      desc: "Adherence to local cybersecurity laws and standards to ensure your business stays compliant and secure.",
    },
    {
      title: "User Experience (UX) Optimization for IT Systems",
      desc: "Ensuring your systems are user-friendly to enhance efficiency and reduce the learning curve for employees.",
    },
    {
      title: "IT Asset Management",
      desc: "Tracking and managing IT assets to optimize usage, reduce costs, and plan for future upgrades effectively.",
    },
    {
      title: "Digital Transformation Consulting",
      desc: "Guidance on digital transformation strategies to help your business embrace new technologies and stay competitive.",
    },
    {
      title: "Robust IT Documentation",
      desc: "Detailed documentation for all IT services and systems, ensuring transparency, continuity, and ease of management.",
    },
    {
      title: "High Availability & Redundancy Solutions",
      desc: "Designing IT systems with built-in redundancy to minimize downtime and ensure high availability.",
    },
    {
      title: "ERP System Implementation and Support",
      desc: "Expertise in deploying Enterprise Resource Planning systems to integrate and manage key business processes.",
    },
  ];
  return (
      <div className="min-h-screen bg-[#0a0a0a] font-sans text-white selection:bg-red-600/30">
        {/* 1. HERO SECTION */}
        <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-20 md:px-16">
          {/* Abstract Background Glow */}
          <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <span className="text-sm font-bold tracking-[0.2em] text-red-600 uppercase">
                Premium IT Solutions
              </span>
              <h1 className="mt-4 text-5xl leading-tight font-bold md:text-7xl">
                Top IT Solution Provider in{" "}
                <span className="text-red-600">Sharjah</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
                Delivering expert IT services and support across the UAE. We
                transform your business challenges into competitive
                technological advantages.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="rounded-md bg-red-600 px-8 py-4 font-bold text-white shadow-[0_10px_20px_rgba(220,38,38,0.2)] transition hover:bg-red-700"
                >
                  Get Expert Support
                </Link>
                <Link
                  href="#expertise"
                  className="rounded-md border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[400px] md:h-[600px]"
            >
              <div className="" />
              <Image
                src="/images/logo-white.png"
                alt="IT Services Sharjah"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 2. ABOUT US / INTRO SECTION */}
        <section className="bg-[#0d0d0d] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div {...fadeIn} className="order-2 lg:order-1">
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src="/images/company.jpg"
                    width={600}
                    height={400}
                    alt="Our Expertise"
                    className="transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeIn} className="order-1 lg:order-2">
                <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                  Are you curious to discover the top IT companies in Sharjah?
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-400">
                  With a booming economy and a rapidly evolving digital
                  landscape, choosing the right IT partner is critical. Al Saqr
                  Technologies stands at the forefront, providing reliable,
                  scalable, and innovative solutions that help UAE businesses
                  thrive.
                </p>
                <button className="flex items-center gap-2 font-bold text-red-600 transition-all hover:gap-4">
                  Read Our Story <span>&rarr;</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. CORE EXPERTISE GRID */}
        <section id="expertise" className="px-6 py-24 md:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold md:text-5xl">Our Expertise</h2>
              <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-red-600" />
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Business Software Development",
                  image: "/icons/software-engineer.png",
                  desc: "We specialize in creating custom software solutions that are uniquely tailored to your business processes. By automating workflows and enhancing operational efficiency, our software helps streamline day-to-day operations and improves overall productivity.",
                },
                {
                  title: "IT Infrastructure Management",
                  image: "/icons/information-technology.png",
                  desc: "Our team ensures your IT environment is built on a strong foundation. From initial setup to continuous monitoring and optimization, we manage your IT infrastructure to guarantee maximum reliability, scalability, and performance.",
                },

                {
                  title: "Software Support",
                  image: "/icons/support.png",
                  desc: "We understand that keeping your software running seamlessly is essential for day-to-day business operations. Our software support services include troubleshooting, updates, and continuous monitoring to prevent any disruptions. Our team ensures your software solutions remain up-to-date and secure, minimizing the risk of system downtimes that could affect your productivity.",
                },
                {
                  title: "Digital Marketing",
                  image: "/icons/support.png",
                  desc: "n today’s digital-first world, having a strong online presence is essential. Our digital marketing services are designed to elevate your brand, drive engagement, and convert leads into loyal customers using targeted, data-driven strategies.",
                },
                {
                  title: "Cloud Services",
                  image: "/icons/cloud-service.png",
                  desc: "Transitioning to the cloud can revolutionize the way your business operates. We offer secure, reliable, and efficient cloud solutions that provide easy access to data, improve collaboration, and enhance business continuity.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl border border-white/5 bg-[#111111] p-8 transition-all hover:border-red-600/40"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 transition-colors">
                    <Image src={item.image} width={32} height={32} alt="icon" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500 transition-colors group-hover:text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALL TO ACTION */}
        <section className="relative bg-[#0a0a0a] px-6 py-24 md:px-16">
          <div className="mx-auto max-w-5xl">
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
                  className={`relative border border-white/5 flex h-auto min-h-[350px] flex-col items-center justify-center rounded-[2.5rem] p-8 text-center shadow-2xl transition-all duration-500 md:sticky md:min-h-[400px] md:p-16 ${
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
                    className={`mb-10 max-w-6xl text-lg md:text-xl ${item.theme === "red" ? "text-white/80" : "text-gray-400"}`}
                  >
                    {item.desc}
                  </p>

                  <Link href="/contact-us">
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
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* New Section  */}

        <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-20 md:px-16">
          {/* Abstract Background Glow */}
          <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeIn}>
              <h2 className="mt-4 text-4xl leading-tight font-bold md:text-6xl">
                Customized
                <span className="text-red-600"> IT Solutions </span>
                for Diverse Industries
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
                Tailored strategies to meet the specific needs of various
                sectors, including healthcare, finance, retail, and
                manufacturing. IT infrastructure designed to grow alongside your
                business, accommodating expanding requirements seamlessly.
                Around-the-clock assistance to resolve issues quickly and keep
                your operations running smoothly. A skilled team dedicated to
                delivering customized solutions that align with your goals.
              </p>
              {/* <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-md bg-red-600 px-8 py-4 font-bold text-white shadow-[0_10px_20px_rgba(220,38,38,0.2)] transition hover:bg-red-700"
              >
                Contact Us
              </Link>
              <Link
                href="#expertise"
                className="rounded-md border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
              >
                Our Services
              </Link>
            </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[400px] md:h-[600px]"
            >
              <div className="" />
              <Image
                src="/images/custom-it.png"
                alt="IT Services Sharjah"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </section>

        <section className="bg-[#0a0a0a] px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/5 bg-[#111111] p-8 shadow-2xl md:p-12">
            <h2 className="mb-10 border-l-4 border-red-600 pl-6 text-3xl font-bold text-white">
              What Our IT Solutions Entail:
            </h2>

            <ul className="space-y-8">
              {itSolutionsList.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-start gap-6"
                >
                  {/* Numbered Indicator */}
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-red-500">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
        {/* last section  */}
        <section>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Overview of the top IT companies in
              <span className="text-red-600"> Sharjah </span>
            </h2>
            <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-red-600" />
          </div>
          <div className="mx-auto mb-10 max-w-6xl px-10 pb-20 text-center text-lg leading-relaxed text-gray-400 md:text-xl">
            <p>
              In the heart of the United Arab Emirates lies Sharjah, a city that
              is undergoing a rapid digital transformation. With the rise of
              technology and the increasing demand for digital solutions, there
              has been a surge in IT companies in Sharjah, propelling the city
              into the forefront of the digital landscape. In this article, we
              will highlight the top 10 IT companies in Sharjah that are leading
              the charge in transforming the way businesses operate in the
              region.&nbsp;While Dubai often steals the limelight, Sharjah has
              quietly emerged as a hotbed for technology innovation, with a
              range of IT companies revolutionizing the landscape.
            </p>
            <br />
            <p>
              These hidden gems in Sharjah are at the forefront of technological
              advancements, leveraging cutting-edge solutions to drive digital
              transformation across industries. From software development and
              cloud services to cybersecurity and artificial intelligence, these
              companies are making their mark in the regional and global
              markets.
            </p>
            <br />
            <p>
              Their commitment to excellence, customer-centric approach, and
              dedication to solving complex challenges have earned them
              recognition and trust from clients worldwide. With a talented pool
              of skilled professionals and state-of-the-art infrastructure,
              these IT companies in Sharjah are setting new benchmarks for the
              industry.
            </p>
            <br />
            <p>
              In this article, we will unveil the top IT companies in Sharjah
              that are at the forefront of technology innovation. Join us as we
              explore their unique offerings, success stories, and the impact
              they are making on the digital landscape. Discover the hidden gems
              that are driving the technology revolution in Sharjah.
            </p>
            <p>
              These companies are at the cutting edge of technology, offering a
              wide range of services including software development, web design,
              mobile app development, cloud computing, and cybersecurity. They
              are known for their innovative solutions, exceptional customer
              service, and ability to tailor their services to meet the unique
              needs of businesses in Sharjah.
            </p>
            <br />
            <p>
              Whether you are a startup looking to establish your online
              presence, or an established business seeking to optimize your IT
              infrastructure, these companies have the expertise and experience
              to exceed your expectations. Join us as we explore the top IT
              companies in Sharjah and discover how they are revolutionizing the
              digital landscape in the heart of the UAE.
            </p>
          </div>
        </section>
      </div>

  );
}
