import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  FileText,
  BarChart3,
  ShieldCheck,
  ClipboardList,
  Zap,
} from "lucide-react";
import Image from "next/image";

const VATInformationAccordion = () => {
  const [openSections, setOpenSections] = useState({ section1: true });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // --- CONTENT RENDERERS (Your Exact Text) ---

  const Section1Content = () => (
    <div className="space-y-4">
      <p className="leading-relaxed text-white-300">
        <span className="font-bold text-red-500">E-Invoicing</span> is the
        digital creation and exchange of structured tax invoices between
        suppliers and buyers. It replaces traditional paper or PDF invoices with
        machine-readable formats like{" "}
        <span className="font-mono text-red-400">XML</span> or{" "}
        <span className="font-mono text-red-400">JSON</span>.
      </p>

      <div className="mt-4">
        <h4 className="mb-3 flex items-center gap-2 font-bold text-white">
          Key Features:
        </h4>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            "Automated invoice generation & submission",
            "FTA-compliant format",
            "Reduces manual errors and improves tax transparency",
            "Enables faster audits and digital tracking",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-white-400"
            >
              <span className="mt-1 text-red-600">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-xl border border-red-500/20 bg-red-900/10 p-4">
        <h4 className="mb-2 font-bold text-red-500">UAE Status:</h4>
        <p className="text-sm text-white-400 italic">
          While mandatory e-invoicing is not yet enforced in the UAE (as of
          now), businesses are encouraged to digitize their invoicing processes
          in preparation for future mandates and for easier VAT filing.
        </p>
      </div>

      <div className="mt-4">
        <h4 className="mb-3 font-bold text-white">Benefits for Businesses:</h4>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            "Accurate Tax Reporting",
            "Time-Saving Automation",
            "Better Security & Compliance",
            "Enhanced Business Transparency",
            "Easier Financial Forecasting",
          ].map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-2 text-xs text-white-300"
            >
              <Zap className="h-3 w-3 text-red-500" /> {benefit}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Section3Content = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        {[
          "Data from e-invoices is used directly for VAT calculations",
          "Reduces risks of misreporting",
          "Simplifies audits and recordkeeping",
          "Enables real-time VAT monitoring",
        ].map((item, i) => (
          <div
            key={i}
            className="text-white-300 flex items-center gap-3 rounded-xl bg-white/5 p-3 text-sm"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_10px_red]" />{" "}
            {item}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="mb-4 text-center font-bold text-white">
          Best Tools for E-Invoicing & VAT Filing
        </h4>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {["/tally-prime-white-logo.svg", "/logos/oracle.png","/logos/sap.png"].map((num) => (
            <div
              key={num}
              className="flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-red-500"
            >
              {/* <p className="text-[10px] font-bold tracking-widest text-white-500 uppercase">
                Logo Space {num}
              </p> */}
              <Image
                src={num}
                alt={`Tool Logo ${num}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const Section4Content = () => (
    <div className="space-y-6">
      <p className="text-sm text-white-300">
        VAT (Value Added Tax) in the UAE was introduced on{" "}
        <span className="font-bold text-white">1st January 2018</span> at a
        standard rate of <span className="font-bold text-red-500">5%</span>.
        Businesses registered under VAT must:
      </p>
      <ul className="ml-4 space-y-2">
        {[
          "Charge VAT on taxable goods and services",
          "Maintain proper records",
          "File VAT returns and pay due taxes to the Federal Tax Authority (FTA)",
        ].map((point, i) => (
          <li
            key={i}
            className="list-disc text-sm text-white-400 decoration-red-600 marker:text-red-600"
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="rounded-xl border border-white/10 bg-gradient-to-r from-red-900/20 to-transparent p-4">
        <h4 className="mb-3 flex items-center gap-2 font-bold text-white">
          ✅ Who Must Register for VAT?
        </h4>
        <div className="space-y-2 text-sm">
          <p className="text-white-300">
            Businesses with taxable supplies over{" "}
            <span className="font-bold text-white">AED 375,000/year</span>{" "}
            (mandatory)
          </p>
          <p className="text-white-300">
            <span className="font-bold text-white">AED 187,500/year</span>{" "}
            (voluntary threshold)
          </p>
        </div>
      </div>
    </div>
  );

  const Section5Content = () => (
    <div className="space-y-4">
      <p className="text-sm text-white-300">
        A VAT Return (Form VAT201) is a summary of the value of the:
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {[
          "Supplies and purchases",
          "Output VAT (collected from customers)",
          "Input VAT (paid to suppliers)",
          "Net VAT payable or refundable",
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  const Section6Content = () => (
    <div className="space-y-4">
      <p className="mb-4 text-sm text-white-300">
        An e-invoice is{" "}
        <span className="text-red-500 italic">not just a PDF</span>. It's a
        machine-readable invoice (usually in XML/UBL format) with the following
        fields:
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          "Seller & buyer TRN (Tax Registration Number)",
          "Invoice type (Tax Invoice, Simplified Invoice)",
          "Date & Time of supply",
          "Description of goods or services",
          "VAT rate & amount",
          "Invoice total incl. VAT",
        ].map((field, i) => (
          <div
            key={i}
            className="rounded-r-lg border-l-2 border-red-600 bg-white/5 p-3 text-xs text-white-400"
          >
            {field}
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-lg border border-dashed border-white/10 bg-white/5 p-3 text-xs text-white-500">
        <span className="mr-2 text-[10px] font-bold text-red-500 uppercase">
          Optional:
        </span>{" "}
        QR Code, UUID, or digital signature (mandatory in KSA, not yet in UAE)
      </p>
    </div>
  );

  const sections = [
    {
      id: "section1",
      q: "What is E-Invoicing?",
      icon: <HelpCircle />,
      component: <Section1Content />,
    },
    {
      id: "section3",
      q: "How E-Invoicing Supports VAT Filing",
      icon: <BarChart3 />,
      component: <Section3Content />,
    },
    {
      id: "section4",
      q: "UAE VAT Overview",
      icon: <ShieldCheck />,
      component: <Section4Content />,
    },
    {
      id: "section5",
      q: "What is a VAT Return in the UAE?",
      icon: <ClipboardList />,
      component: <Section5Content />,
    },
    {
      id: "section6",
      q: "What Does an E-Invoice Contain?",
      icon: <FileText />,
      component: <Section6Content />,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-4  p-6">
      {sections.map((sec) => {
        const isOpen = openSections[sec.id];
        return (
          <div
            key={sec.id}
            className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
              isOpen ? "border-red-500/50 bg-white/5" : "border-white/10"
            }`}
          >
            <button
              onClick={() => toggleSection(sec.id)}
              className="flex w-full items-center justify-between p-6 transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`rounded-xl p-2.5 transition-all ${
                    isOpen
                      ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                      : "bg-white/10 text-red-500"
                  }`}
                >
                  {sec.icon}
                </div>
                <h3
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    isOpen ? "text-white" : "font-medium text-white-400"
                  }`}
                >
                  {sec.q}
                </h3>
              </div>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-500" : "text-white-600"}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="mt-4 border-t border-white/5 p-8 pt-0">
                  {sec.component}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VATInformationAccordion;
