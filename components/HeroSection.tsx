"use client";

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const slides = [
    {
      title: "INDUSTRY SOLUTION",
      year: "2024",
      desc: "We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.",
      img: "/hero1.png",
    },
    {
      title: "CONSTRUCTION POWER",
      year: "2024",
      desc: "Strong foundations for a better tomorrow. We bring innovation in every project we build.",
      img: "/hero2.png",
    },
    {
      title: "MODERN ENGINEERING",
      year: "2024",
      desc: "Building trust with quality engineering and future-proof solutions for industry growth.",
      img: "/hero3.png",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white font-serif">
      {/* Decorative Corners */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2"
      >
        <Image src="/h2.png" alt="Corner Left" width={30} height={30} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <Image src="/h1.png" alt="Corner Right" width={320} height={180} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute right-0 top-1/8 -translate-y-1/2"
      >
        <Image src="/h4.png" alt="Corner Right" width={30} height={30} />
      </motion.div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000 }}
        loop
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Title Center */}
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 text-center mt-10 mb-6">
              {slide.title}
            </h1>

            {/* Content Row */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between h-full max-w-6xl mx-auto px-6 md:px-12 gap-8">
              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-lg space-y-6 text-center md:text-left order-2 md:order-1"
              >
                <p className="text-gray-700 text-sm  -mt-82 mr-36 leading-relaxed">
                  {slide.desc}
                </p>

                {/* Rotating Circular Button */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="relative w-28 h-28 flex items-center justify-center mx-auto md:mx-0"
                >
                  {/* Circle Text Outside */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute w-full h-full text-gray-500"
                  >
                    <path
                      id={`circlePath-${i}`}
                      d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text fontSize="8" className="uppercase tracking-widest">
                      <textPath
                        href={`#circlePath-${i}`}
                        startOffset="0"
                        className="fill-gray-500"
                      >
                        • Explore More • Explore More • Explore More
                      </textPath>
                    </text>
                  </svg>

                  {/* Button Center */}
                  <button className="absolute w-14 h-14 rounded-full bg-[#EA5501] flex items-center justify-center text-white shadow hover:scale-110 transition">
                    <ArrowUpRight size={22} />
                  </button>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="order-1 md:order-2"
              >
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={800} // ✅ image size barhaya
                  height={600}
                  className="object-contain mb-60"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
