"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MovingLine2 from "./MovingLine2";

export default function AboutUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <section className="py-24 relative bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-20 grid lg:grid-cols-2 grid-cols-1">
            {/* Images Section */}
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-20 flex justify-start sm:justify-end">
                <Image
                  className="rounded-xl object-cover shadow-lg"
                  src="/about1.png"
                  alt="About Us image"
                  width={300}
                  height={320}
                />
              </div>
              <Image
                className="rounded-xl object-cover shadow-lg"
                src="/about2.png"
                alt="About Us image"
                width={300}
                height={320}
              />
            </div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full flex-col justify-center lg:items-start items-center gap-12 inline-flex"
            >
              {/* Small Heading with Icon */}
              <div className="flex items-center gap-2">
                <Image
                  src="/about.svg"
                  alt="About icon"
                  width={22}
                  height={22}
                />
                <span className="uppercase tracking-wide text-sm font-semibold text-[#EA5501]">
                  About Us
                </span>
              </div>

              {/* Main Heading + Description */}
              <div className="flex flex-col gap-5 lg:items-start items-center text-center lg:text-left">
                <h2 className="text-gray-900 text-4xl md:text-5xl font-extrabold leading-tight">
                  Transform Your Projects <br /> into Profitable Realities
                </h2>
                <p className="text-gray-600 text-base leading-relaxed max-w-xl">
                  Construct Estimates is your trusted partner in construction
                  estimating and material takeoff services to make the bidding
                  process easier for contractors and builders. With our
                  comprehensive services, we specialize in providing accurate
                  local pricing estimates and taking off entire projects.
                </p>

                {/* <ul className="text-gray-700 space-y-2 text-base">
                <li className="flex items-center gap-2">
                  <span className="text-[#EA5501]">⭢</span> Innovative
                  Construction Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#EA5501]">⭢</span> Client-Centric
                  Approach
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#EA5501]">⭢</span> Sustainable &
                  Reliable Engineering
                </li>
              </ul> */}

                <p className="text-gray-600 -mt-2 text-base leading-relaxed max-w-xl">
                  Our goal is to transform contractors’ potential projects into
                  profitable realities, allowing them to focus on other aspects
                  of their business. With over 10 years of experience in the
                  construction industry, Construct Estimates has built a solid
                  reputation for delivering accurate material estimates.
                  Residential, commercial, civil, or industrial
                  projects—whatever the scope, our construction managers and
                  quality control specialists ensure that every project is
                  completed to the highest standards.
                </p>
              </div>

              {/* Counters Section with Borders */}
              <div
                ref={ref}
                className="grid sm:grid-cols-3 grid-cols-1 border rounded-lg divide-x divide-gray-200 text-center shadow-md"
              >
                <div className="flex flex-col items-center font-mono justify-center p-6">
                  <h3 className="text-[#EA5501] text-4xl font-bold">
                    {inView && <CountUp start={0} end={33} duration={3} />}+
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Years of Experience
                  </p>
                </div>
                <div className="flex flex-col items-center font-mono justify-center p-6">
                  <h3 className="text-[#EA5501] text-4xl font-bold">
                    {inView && <CountUp start={0} end={125} duration={3} />}+
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    Successful Projects
                  </p>
                </div>
                <div className="flex flex-col items-center font-mono justify-center p-6">
                  <h3 className="text-[#EA5501] text-4xl font-bold">
                    {inView && <CountUp start={0} end={52} duration={3} />}+
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">Happy Clients</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button className="sm:w-fit w-full px-8 py-4 bg-white border-2 border-[#EA5501] text-[#EA5501] hover:bg-[#EA5501] hover:text-white font-semibold uppercase flex items-center gap-2 rounded-md shadow-md transition-all duration-500 hover:scale-105">
                Read More <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <MovingLine2 />
    </>
  );
}
