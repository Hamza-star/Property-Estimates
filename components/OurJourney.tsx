"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timeline = [
  {
    year: "2012",
    title: "Founded Company",
    description:
      "Started with a small but passionate team focused on delivering high-quality construction solutions.",
  },
  {
    year: "2015",
    title: "First Major Project",
    description:
      "Successfully delivered a large-scale commercial project that established our credibility.",
  },
  {
    year: "2018",
    title: "Expanding Horizons",
    description:
      "Expanded our expertise into engineering and sustainable construction practices.",
  },
  {
    year: "2022",
    title: "Global Recognition",
    description:
      "Recognized as one of the leading construction & engineering firms with happy global clients.",
  },
];

export default function OurJourney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-wide text-sm font-semibold text-[#EA5501]">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Milestones That Define Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            From humble beginnings to recognized achievements, our journey is
            fueled by innovation, trust, and excellence.
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={ref}
          className="relative border-l-4 border-[#EA5501] ml-6 space-y-16"
        >
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <span className="absolute left-[-26px] top-2 w-5 h-5 bg-[#EA5501] rounded-full border-4 border-white shadow-md"></span>

              {/* Content Card */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.year} — {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
