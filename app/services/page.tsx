"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Swift Online Tasks",
    shortDescription:
      "Get quotes and coverage online in under 10 minutes with zero paperwork.",
    longDescription:
      "Our Swift Online Tasks service ensures you get accurate quotes and coverage quickly. You no longer need to wait in line or fill out piles of paperwork. Everything is managed online, securely and efficiently.",
    img: "/images/feature1.jpg",
  },
  {
    id: 2,
    title: "Tech-Driven Value",
    shortDescription:
      "Advanced technology delivers smarter decisions and better results.",
    longDescription:
      "With our Tech-Driven Value services, we leverage state-of-the-art technology to automate processes and deliver actionable insights, saving you time and increasing your business value.",
    img: "/images/feature2.jpg",
  },
  {
    id: 3,
    title: "Insurance Wealth",
    shortDescription:
      "Boost financial security with policies that include wealth bonuses.",
    longDescription:
      "Every insurance policy we offer includes a built-in wealth bonus. This ensures that not only are you covered, but your financial growth is supported over time.",
    img: "/images/feature3.jpg",
  },
  {
    id: 4,
    title: "Smart Investments",
    shortDescription:
      "Manage and grow your investments with online dashboards and insights.",
    longDescription:
      "Our Smart Investments service allows you to track, manage, and grow your investments using a modern online dashboard. Predictive insights help you make smarter decisions.",
    img: "/images/feature4.jpg",
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto leading-tight">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Explore our range of modern solutions designed to make finance
          smarter, faster, and more rewarding.
        </p>
        <Link
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-500"
        >
          Request a Quote
        </Link>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveService(service.id)}
              className={`relative bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-all duration-300`}
            >
              {service.img && (
                <div className="relative w-full h-40">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">
                  {service.shortDescription}
                </p>
                <Link
                  href="#details"
                  className="mt-4 text-indigo-600 font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section
        id="details"
        className="px-4 sm:px-6 lg:px-8 py-16 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {services
            .filter((service) => service.id === activeService)
            .map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 mb-16 items-center"
              >
                <div className="md:w-1/2 relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {service.longDescription}
                  </p>
                  <Link
                    href="#contact"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-500 w-max"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="bg-indigo-600 py-24 text-center text-white px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Contact us today to request a personalized quote and take the next
          step toward smarter finance.
        </p>
        <Link
          href="/contact-us"
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-500"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
