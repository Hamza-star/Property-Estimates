"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function BentoTestimonials() {
  const testimonials = [
    {
      name: "Ali Raza",
      role: "Project Manager",
      feedback:
        "Bunny Estimates transformed how we plan projects. Accurate, fast, and reliable support every step of the way!",
      avatar: "/t1.png",
    },
    {
      name: "Sara Khan",
      role: "Architect",
      feedback: "Professional team delivering beyond expectations.",
      avatar: "/t2.png",
    },
    {
      name: "Michael Smith",
      role: "Contractor",
      feedback:
        "They helped us save both time and money without compromising quality.",
      avatar: "/t3.png",
    },
    {
      name: "Jessica Lee",
      role: "Interior Designer",
      feedback:
        "The guidance throughout the project was outstanding. Highly recommend Bunny Estimates for accuracy and service.",
      avatar: "/t1.png",
    },
    {
      name: "David Johnson",
      role: "Engineer",
      feedback: "Accurate estimates helped us secure more bids.",
      avatar: "/t3.png",
    },
    {
      name: "Emily Davis",
      role: "Homeowner",
      feedback:
        "Very professional team. Explained everything clearly and delivered on time.",
      avatar: "/t2.png",
    },
    {
      name: "Ahmed Ali",
      role: "Civil Engineer",
      feedback: "Always deliver top-notch estimates with precision.",
      avatar: "/t1.png",
    },
    {
      name: "Sophia Williams",
      role: "Contractor",
      feedback:
        "Their accurate estimates saved me from unnecessary costs. Truly trustworthy!",
      avatar: "/t3.png",
    },
  ];

  const sizeClasses: Record<string, string> = {
    small: "h-48",
    medium: "h-60",
    large: "h-72",
  };

  // Randomize size for each testimonial
  const randomizedTestimonials = useMemo(
    () =>
      testimonials.map((t) => {
        const sizes = ["small", "medium", "large"];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        return { ...t, size };
      }),
    []
  );

  // Split into 3 columns
  const columns = [[], [], []] as (typeof randomizedTestimonials)[];
  randomizedTestimonials.forEach((t, i) => {
    columns[i % 3].push(t);
  });

  const ScrollColumn = ({
    items,
    duration,
  }: {
    items: typeof randomizedTestimonials;
    duration: number;
  }) => {
    const looped = [...items, ...items]; // infinite loop effect

    return (
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {looped.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative p-6 rounded-2xl border border-gray-200/50 backdrop-blur-lg bg-white/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition transform ${
              sizeClasses[t.size]
            }`}
          >
            {/* Avatar + Info */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-700 text-base leading-relaxed font-light line-clamp-4">
              “{t.feedback}”
            </p>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="py-24  overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h6 className="text-[#EA5501] text-sm font-semibold uppercase tracking-wide">
          Testimonials
        </h6>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-12">
          What Our Clients Say
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden">
          <ScrollColumn items={columns[0]} duration={25} />
          <ScrollColumn items={columns[1]} duration={30} />
          <ScrollColumn items={columns[2]} duration={35} />
        </div>
      </div>
    </section>
  );
}
