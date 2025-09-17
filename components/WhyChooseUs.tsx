"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Trust in Accurate Estimates",
    answer:
      "At Construct Estimates, we deliver precise and dependable construction cost estimates. Our meticulous analysis and attention to detail ensure accurate projections, mitigating the risk of unexpected expenses and delays. Trust us for reliable estimates that provide a solid foundation for successful project planning and execution.",
  },
  {
    question: "Save Time and Money",
    answer:
      "Outsourcing your estimating needs to us saves you valuable time and reduces overhead costs by up to 50%. Our experienced team of construction price estimators, combined with cutting-edge software, guarantees fast turnaround times (24 to 48 hours) without compromising accuracy. Maximize efficiency and cost-effectiveness by relying on our expertise.",
  },
  {
    question: "Certified Estimators",
    answer:
      "Our certified construction estimators possess industry-leading qualifications and expertise. Collaborating closely with construction managers, quantity surveyors, architects, and contractors, our team ensures that our estimates adhere to the highest industry standards. With our certified professionals, you can trust in the accuracy and reliability of our estimates.",
  },
  {
    question: "Meet Your Deadlines",
    answer:
      "Count on us to meet your project deadlines. Our streamlined processes and dedicated team enable us to complete projects within agreed-upon timeframes, empowering you to make informed decisions and keep your projects on track. Rest easy knowing that our reliable estimates will help you meet your project milestones and deliver on time.",
  },
  {
    question: "Competitive Pricing",
    answer:
      "Our competitive market prices make our estimates and takeoffs accessible to many clients. We offer our services at affordable rates, tailored to fit your project’s scope and budget. While the average cost of our services is $200, our goal is to provide exceptional value for your investment. Benefit from accurate estimates without breaking the bank.",
  },
  {
    question: "Customized Solutions",
    answer:
      "We recognize that every construction project is unique. Our team takes the time to understand your specific requirements, tailoring our estimates to meet your needs precisely. With a collaborative approach, we provide personalized solutions that align with your goals, budget, and timeline. Experience the difference of customized estimates crafted just for you.",
  },
  {
    question: "Exceptional Customer Support",
    answer:
      "Your satisfaction is our top priority. Our dedicated support team is available 24/7 to address any questions or concerns you may have. We are committed to guiding you through the construction cost estimating process, helping you win bids, generate more leads, and providing unparalleled customer support. Trust us to be your reliable partner in construction estimation.",
  },
];

export const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left side */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Why Choose <br />{" "}
            <span className="text-[#EA5501]">Construct Estimates?</span>
          </h2>
          <p className="text-gray-600 max-w-md">
            We stand out from the competition regarding material takeoff and
            construction estimating services. Here’s why:
          </p>
          <div className="flex-1">
            <img
              src="/contact.jpg"
              alt="Construction"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right side - FAQs */}
        <motion.div
          className="flex-1 flex flex-col gap-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-semibold hover:bg-orange-50 transition"
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === idx ? "text-[#EA5501]" : "text-gray-500"
                    }`}
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-5 pb-4 text-gray-600 bg-orange-50/50"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
