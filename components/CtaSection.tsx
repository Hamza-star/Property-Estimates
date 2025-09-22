"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-16 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#EA5501] px-6 pt-12 sm:rounded-3xl sm:px-12 md:pt-16 lg:flex lg:gap-x-16 lg:px-20 lg:pt-0">
          {/* Background Gradient */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#cta-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#FF7A29" />
                <stop offset={1} stopColor="#EA5501" />
              </radialGradient>
            </defs>
          </svg>

          {/* Text Section */}
          <div className="mx-auto  max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Let's Discuss Your Construction Estimating Needs
            </h2>
            <p className="mt-4 text-base sm:text-lg text-orange-100">
              From residential to commercial projects, our platform gives you
              transparent cost breakdowns and faster planning with precision.
            </p>

            <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
              {/* Motion wrapper around Link */}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact-us"
                  className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#EA5501] shadow-sm transition inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>

              <Link
                href="/projects"
                className="text-sm font-semibold text-white hover:text-orange-100 transition"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-10 lg:mt-12 md:ml-20 flex-shrink-0 w-full max-w-xl">
            <div className="relative h-56 md:h-82 w-full">
              <Image
                alt="App screenshot"
                src="/p4.webp"
                fill
                className="object-cover  shadow-xl ring-1 ring-white/20"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
