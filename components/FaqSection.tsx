"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import MovingLine2 from "./MovingLine2";

const faqs = [
  {
    question: "PREPARE A CONSTRUCTION PROJECT SCHEDULE?",
    answer:
      "Construction management ensures the planning, execution, and coordination of a project from start to finish with proper timelines and efficiency.",
  },
  {
    question: "PRODUCT DESIGN AND PLANNING!",
    answer:
      "We use structured design and planning methods to create innovative solutions tailored to client needs.",
  },
  {
    question: "WHAT IS COMMERCIAL IN CONSTRUCTION?",
    answer:
      "Commercial construction involves building projects for business purposes, including offices, retail, and large-scale facilities.",
  },
  {
    question: "START A CONSTRUCTION MANAGEMENT?",
    answer:
      "Our team helps clients initiate projects with strategic planning, risk assessment, and modern construction tools.",
  },
  {
    question: "HOW ARE PAYMENTS HANDLED AND DEALT WITH?",
    answer:
      "Payments are managed with transparency, milestone tracking, and secure processes to ensure smooth operations.",
  },
  {
    question: "MEASURE QUALITY IN CONSTRUCTION PROJECTS?",
    answer:
      "We follow strict quality assurance protocols, site inspections, and international standards to ensure project excellence.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - FAQs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-sm uppercase text-[#EA5501] font-semibold">
                FAQs
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 mt-3">
                Find quick answers to the most common questions about our
                services and processes.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-gray-900 text-base lg:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#EA5501]"
                    >
                      <ChevronDown size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Top-left corner cut, taller image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-start"
          >
            <div
              className="relative w-full max-w-md shadow-2xl"
              style={{
                height: "500px", // increased height
                clipPath:
                  "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)", // top-left corner cut
              }}
            >
              <img
                src="/faq.png"
                alt="FAQ Illustration"
                className="w-full h-full object-cover"
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
