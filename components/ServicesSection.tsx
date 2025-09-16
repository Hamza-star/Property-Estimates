// app/components/ServicesSection.tsx
"use client";

import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "GENERAL CONSTRUCTION",
    description: "There are many passages of lorem ipsum available",
    icon: "🧱",
  },
  {
    id: "02",
    title: "RENOVATION AND REMODELING",
    description: "There are many passages of lorem ipsum available",
    icon: "📐",
  },
  {
    id: "03",
    title: "COMMERCIAL CONSTRUCTION",
    description: "There are many passages of lorem ipsum available",
    icon: "🏢",
  },
  {
    id: "04",
    title: "VIRTUAL DESIGN & BUILDING",
    description: "There are many passages of lorem ipsum available",
    icon: "💻",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            What We Do
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Services <br /> That We Provide
          </h2>
          <button className="mt-6 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white p-6 rounded-lg shadow hover:shadow-lg transition border border-gray-200 flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="text-orange-600 text-4xl mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Read More */}
              <a
                href="#"
                className="mt-auto inline-flex items-center text-sm font-semibold text-gray-700 hover:text-orange-600"
              >
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </a>

              {/* Number top-right */}
              <span className="absolute top-4 right-4 text-sm font-bold text-gray-300">
                {service.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
