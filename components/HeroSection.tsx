"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import MovingLine from "./MovingLine";

export default function HeroSection() {
  const slides = [
    {
      title: "INDUSTRY SOLUTION",
      shortTitle: "Industry",
      desc: "We craft unique digital experiences. With more than 7 years of expertise we design and code clean websites.",
      img: "/hero1.png",
    },
    {
      title: "CONSTRUCTION POWER",
      shortTitle: "Construction",
      desc: "Strong foundations for a better tomorrow. We bring innovation in every project we build.",
      img: "/hero2.png",
    },
    {
      title: "MODERN ENGINEERING",
      shortTitle: "Engineering",
      desc: "Building trust with quality engineering and future-proof solutions for industry growth.",
      img: "/hero3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="relative w-full min-h-screen  overflow-hidden font-sans bg-white">
        {/* 🔹 Corner Images */}
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
          className="absolute right-0 top-1/2 -translate-y-1/2 md:block hidden"
        >
          <Image src="/h1.png" alt="Corner Right" width={300} height={100} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="absolute right-0 top-1/6 -translate-y-1/2"
        >
          <Image src="/h4.png" alt="Corner Right" width={30} height={30} />
        </motion.div>

        {/* 🔹 Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000 }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center justify-start h-full max-w-7xl mx-auto px-6 md:px-12 gap-12 py-18">
                {/* Heading Centered */}
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-5xl md:text-7xl font-bold font-mono text-gray-900 text-center"
                >
                  {slide.title}
                </motion.h1>

                {/* Content Row */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                  {/* Left Side: Description + Circle Button */}

                  {/* Right Side: Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center md:justify-start"
                  >
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      width={700}
                      height={500}
                      className="object-contain"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex flex-col px-6 items-center md:items-start text-center md:text-left space-y-6"
                  >
                    <p className="text-gray-700 max-w-xs  leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* Circular Button Below Description */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 10,
                        ease: "linear",
                      }}
                      className="relative w-28 h-28 flex items-center justify-center mt-6"
                    >
                      <svg
                        viewBox="0 0 100 100"
                        className="absolute w-full h-full text-gray-500"
                      >
                        <path
                          id={`circlePath-${i}`}
                          d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                          fill="none"
                        />
                        <text
                          fontSize="8"
                          className="uppercase tracking-widest"
                        >
                          <textPath
                            href={`#circlePath-${i}`}
                            startOffset="0"
                            className="fill-gray-500"
                          >
                            • Explore More • Explore More • Explore More
                          </textPath>
                        </text>
                      </svg>
                      <button className="absolute w-14 h-14 rounded-full bg-[#EA5501] flex items-center justify-center text-white shadow hover:scale-110 transition">
                        <ArrowUpRight size={22} />
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Short Titles Row */}
        <div className="absolute md:bottom-40 left-1/2 -translate-x-1/2 flex gap-6 z-50">
          {slides.map((slide, idx) => (
            <span
              key={idx}
              className={`text-sm font-semibold cursor-pointer transition-colors ${
                activeIndex === idx ? "text-[#EA5501]" : "text-gray-400"
              }`}
            >
              {slide.shortTitle}
            </span>
          ))}
        </div>
      </section>
      <MovingLine />
    </>
  );
}
