// app/components/WorkProcess.tsx
"use client";

import { motion } from "framer-motion";
import { Beaker, Lightbulb, Users, Wrench } from "lucide-react"; // icons for timeline
import { useInView } from "react-intersection-observer";
import MovingLine2 from "./MovingLine2";

const steps = [
  {
    id: "01",
    title: "PRODUCT RESEARCH",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
    image: "/s5.png",
    icon: Wrench,
  },
  {
    id: "02",
    title: "DESIGN IDEA",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
    image: "/s2.png",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "PROFESSIONAL TEAMS",
    description:
      "We craft unique digital experiences. With more years of expertise we design",
    image: "/s3.png",
    icon: Users,
  },
  {
    id: "04",
    title: "STYLISTIC FORMULA METHOD",
    description: "We craft unique digital experiences.",
    image: "/s4.png",
    icon: Beaker,
  },
];

export default function WorkProcess() {
  return (
    <>
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Work Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              WORK PROCESS
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-20">
              {steps.map((step, idx) => (
                <StepCard
                  key={step.id}
                  step={step}
                  isLeft={idx % 2 === 0}
                  delay={idx * 0.3} // 👈 delay grows with index
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <MovingLine2 />
    </>
  );
}

/* Step Card Component */
function StepCard({
  step,
  isLeft,
  delay,
}: {
  step: any;
  isLeft: boolean;
  delay: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={`relative flex items-center ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Timeline Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
        <motion.div
          animate={inView ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="w-12 h-12 flex items-center justify-center rounded-full border-4 shadow-md bg-white border-gray-300"
        >
          <Icon
            className={`w-6 h-6 transition-colors duration-300 ${
              inView ? "text-[#EA5501]" : "text-black"
            }`}
          />
        </motion.div>
      </div>

      {/* Step Card */}
      <motion.div
        className={`w-4/12 p-6 rounded-2xl shadow-md bg-white transition transform duration-300 text-left`} // 👈 always left-align text
        whileHover={{ scale: 1.05 }}
      >
        {/* Image */}
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />

        {/* Step Number */}
        <span className="block text-6xl font-mono font-extrabold text-orange-500 mb-2">
          {step.id}
        </span>

        <h3
          className={`text-lg font-bold font-mono mb-2 ${
            inView ? "text-black" : "text-gray-900"
          }`}
        >
          {step.title}
        </h3>
        <p className="text-gray-600 font-mono text-sm">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}
