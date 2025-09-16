"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "PREPARE A CONSTRUCTION PROJECT SCHEDULE?",
    answer:
      "The point of using lorem ipsum is that it has more-or-less packages normal commercial management in construction ensures the planning, execution and coordination of a construction project finish these specific projects.",
  },
  {
    question: "PRODUCT DESIGN AND PLANNING!",
    answer:
      "The point of using lorem ipsum is that it has more-or-less packages normal commercial management in construction ensures the planning, execution and coordination of a construction project finish these specific projects.",
  },
  {
    question: "WHAT IS COMMERCIAL IN CONSTRUCTION?",
    answer:
      "The point of using lorem ipsum is that it has more-or-less packages normal commercial management in construction ensures the planning, execution and coordination of a construction project finish these specific projects.",
  },
  {
    question: "START A CONSTRUCTION MANAGEMENT?",
    answer:
      "The point of using lorem ipsum is that it has more-or-less packages normal commercial management in construction ensures the planning, execution and coordination of a construction project finish these specific projects.",
  },
  {
    question: "HOW ARE PAYMENTS HANDLED AND DEALT WITH?",
    answer:
      "The point of using lorem ipsum is that it has more-or-less packages normal commercial management in construction ensures the planning, execution and coordination of a construction project finish these specific projects.",
  },
  {
    question: "MEASURE QUALITY IN CONSTRUCTION PROJECTS?",
    answer:
      "The point of using lorem ipsum is that it has more-or-less packages normal commercial management in construction ensures the planning, execution and coordination of a construction project finish these specific projects.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // default open third FAQ

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-orange-500 font-semibold">
            FAQs
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-44 items-start">
          {/* Left - Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border bg-gray-50 px-4 py-4 cursor-pointer transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                    {faq.question}
                  </h3>
                  <span className="text-xl font-bold text-orange-500">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>
                {openIndex === i && (
                  <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right - Image with overlapping card */}
          <div className="relative">
            <img
              src="/faq.png" // replace with your image
              alt="Person"
              className="rounded-md w-full object-cover"
            />

            {/* Overlapping Form Card */}
            <div className="absolute top-0 right-92 bg-orange-600 text-white p-6 lg:p-8 rounded-md shadow-lg max-w-md w-[50%] h-[100%]">
              <h3 className="text-xl font-bold mb-4">ASK US A QUESTION ?</h3>
              <p className="text-sm mb-6">
                The point of using lorem ipsum is that it has more-or-less
                packages normal
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-white/40 placeholder-white/80 focus:outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-white/40 placeholder-white/80 focus:outline-none py-2"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-white/40 placeholder-white/80 focus:outline-none py-2"
                />
                <textarea
                  placeholder="Question or Message?"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/40 placeholder-white/80 focus:outline-none py-2"
                />
                <button
                  type="submit"
                  className="mt-4 flex items-center gap-2 text-sm font-semibold"
                >
                  GET START NOW <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
