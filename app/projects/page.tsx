"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

const projects = [
  {
    id: 1,
    title: "Modern Office Building",
    description:
      "Premium corporate office project with advanced design and efficient planning.",
    image: "/p1.webp",
    details: {
      budget: "$2.5M",
      location: "Downtown, New York",
      timeline: "18 Months",
      extra:
        "This project involves designing and estimating a modern office space tailored for corporate needs. From high-quality materials to sustainable designs, every aspect ensures maximum efficiency. Includes modern HVAC systems, energy-saving glass, and cutting-edge safety compliance.",
    },
  },
  {
    id: 2,
    title: "Luxury Villa Project",
    description: "High-end villa designed for modern luxury living.",
    image: "/p2.webp",
    details: {
      budget: "$1.2M",
      location: "Beverly Hills, LA",
      timeline: "12 Months",
      extra:
        "The villa project is designed to reflect luxury at its finest, incorporating smart-home systems, private pools, and landscape architecture. Premium marble flooring, imported wood, and designer interiors are included in the estimate.",
    },
  },
  {
    id: 3,
    title: "Commercial Complex",
    description:
      "Large-scale commercial hub designed for multiple business setups.",
    image: "/p3.webp",
    details: {
      budget: "$5.8M",
      location: "Chicago Business District",
      timeline: "24 Months",
      extra:
        "A commercial complex designed to accommodate diverse business requirements, including retail, food courts, and office spaces. The estimate includes parking systems, elevators, and modern security solutions for tenants.",
    },
  },
  {
    id: 4,
    title: "Private Residence",
    description: "Stylish family home with modern architecture.",
    image: "/p5.webp",
    details: {
      budget: "$850K",
      location: "Austin, Texas",
      timeline: "10 Months",
      extra:
        "A private home project focusing on both comfort and style. Includes open floor plans, modular kitchens, premium fittings, and energy-efficient solutions. Designed for families who want a mix of luxury and practicality.",
    },
  },
  {
    id: 5,
    title: "Private Residence",
    description: "Stylish family home with modern architecture.",
    image: "/s1.png",
    details: {
      budget: "$850K",
      location: "Austin, Texas",
      timeline: "10 Months",
      extra:
        "A private home project focusing on both comfort and style. Includes open floor plans, modular kitchens, premium fittings, and energy-efficient solutions. Designed for families who want a mix of luxury and practicality.",
    },
  },
  {
    id: 6,
    title: "Private Residence",
    description: "Stylish family home with modern architecture.",
    image: "/s4.png",
    details: {
      budget: "$850K",
      location: "Austin, Texas",
      timeline: "10 Months",
      extra:
        "A private home project focusing on both comfort and style. Includes open floor plans, modular kitchens, premium fittings, and energy-efficient solutions. Designed for families who want a mix of luxury and practicality.",
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <main className="min-h-screen py-20  -mt-12 px-6 md:px-16">
        {/* Main Heading */}
        <motion.h1
          className="text-5xl font-bold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Projects
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore our portfolio of residential and commercial projects,
          showcasing transparent cost estimates and modern design approaches.
        </motion.p>

        {/* Parallax Hero Section */}
        <motion.div
          className="h-80 bg-fixed bg-center bg-cover rounded-3xl mb-20"
          style={{ backgroundImage: "url('/p4.webp')" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="bg-black/50 h-full w-full flex flex-col items-center justify-center rounded-3xl text-center px-6">
            <motion.h2
              className="text-4xl md:text-5xl text-white font-extrabold mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Building Dreams, Estimating Excellence
            </motion.h2>
            <motion.p
              className="text-lg text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Our work combines precision, transparency, and design innovation
              to bring projects to life from vision to reality.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 font-mono"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative rounded-3xl overflow-hidden cursor-pointer shadow-xl group"
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover brightness-90 rounded-3xl transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with "View Details" */}
              <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500">
                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                <span className="px-4 py-2 bg-white text-gray-900 rounded-md text-sm font-medium shadow">
                  View Details
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white rounded-md max-w-xl w-full shadow-2xl relative flex flex-col max-h-[90vh]"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Icon */}
                <button
                  className="absolute top-4 right-4 bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-300"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} className="text-gray-800" />
                </button>

                {/* Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover"
                />

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base mb-5">
                    {selectedProject.details.extra}
                  </p>

                  {/* Budget / Location / Timeline */}
                  <div className="space-y-3 text-gray-800 mb-6">
                    <div>
                      <h3 className="font-medium">Budget</h3>
                      <p className="text-gray-600 text-sm">
                        {selectedProject.details.budget}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600 text-sm">
                        {selectedProject.details.location}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Timeline</h3>
                      <p className="text-gray-600 text-sm">
                        {selectedProject.details.timeline}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-end">
                    <Link href="/contact">
                      <motion.button
                        className="px-6 py-2 font-mono bg-gray-900 text-white rounded-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        Request Estimate
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <CtaSection />
    </>
  );
}
