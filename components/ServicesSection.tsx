// app/components/ServicesSection.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "GENERAL CONSTRUCTION",
    description:
      "Delivering top-notch construction services with precision and innovation.",
    image: "/s5.png",
  },
  {
    id: "02",
    title: "RENOVATION AND REMODELING",
    description:
      "Transforming spaces with modern designs and sustainable solutions.",
    image: "/s2.png",
  },
  {
    id: "03",
    title: "COMMERCIAL CONSTRUCTION",
    description:
      "Building durable and efficient commercial projects that stand out.",
    image: "/s3.png",
  },
  {
    id: "04",
    title: "VIRTUAL DESIGN & BUILDING",
    description:
      "Leveraging technology to create virtual designs before construction.",
    image: "/s4.png",
  },
  {
    id: "05",
    title: "PROJECT MANAGEMENT",
    description:
      "Efficient planning, coordination, and supervision for successful delivery.",
    image: "/s5.png",
  },
  {
    id: "06",
    title: "INTERIOR DESIGN",
    description:
      "Creating elegant and functional interiors that inspire and impress.",
    image: "/s1.png",
  },
  {
    id: "07",
    title: "CONSULTANCY",
    description:
      "Providing expert advice for smart and cost-effective construction solutions.",
    image: "/s1.png",
  },
  {
    id: "08",
    title: "MAINTENANCE SERVICES",
    description:
      "Ensuring long-lasting structures with reliable maintenance solutions.",
    image: "/hero3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-[#EA5501] uppercase tracking-wider">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
            Our Services <br /> That We Provide
          </h2>
        </motion.div>

        {/* Horizontal Infinite Scroll */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Service Image */}
                <div className="w-full h-44 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Read More */}
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center text-sm font-semibold text-[#EA5501] hover:text-black transition"
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>

                {/* Badge Number */}
                <span className="absolute top-4 left-4 bg-[#EA5501] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                  {service.id}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="mt-12 inline-flex items-center gap-2 bg-[#EA5501] hover:bg-black text-white font-semibold px-8 py-4 rounded-md shadow-md transition-all duration-500 hover:scale-105">
            View All Services <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
