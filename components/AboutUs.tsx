"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Small Heading */}
          <div className="flex items-center gap-2">
            <Image src="/about.svg" alt="icon" width={20} height={20} />
            <span className="uppercase tracking-wide text-sm font-semibold text-gray-600">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            We Building Everything <br /> That You Needed
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            We craft unique digital experiences. With more than 7 years of
            expertise we design and code clean websites.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-[#EA5501]">⭢</span>
              Providing Solutions For Construction, Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#EA5501]">⭢</span>
              Engineers design and build the structure
            </li>
          </ul>

          {/* Mission + Vision */}
          <div className="space-y-6 pt-6">
            <div className="flex items-start gap-4">
              <Image
                src="/mission.png"
                alt="mission"
                width={40}
                height={40}
                className="bg-gray-100 p-2 rounded"
              />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Our Mission</h4>
                <p className="text-gray-600 text-sm">
                  We craft unique digital experiences. With more years of
                  expertise we design
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                src="/mission.png"
                alt="vision"
                width={40}
                height={40}
                className="bg-gray-100 p-2 rounded"
              />
              <div>
                <h4 className="font-bold text-lg text-gray-900">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  We craft unique digital experiences. With more years of
                  expertise we design
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold uppercase flex items-center gap-2 hover:bg-[#EA5501] transition">
            Explore Our Company <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Content - Image with overlay */}
        <div className="relative">
          <Image
            src="/about.png"
            alt="About Us"
            width={450}
            height={420}
            className="object-cover"
          />

          {/* Overlay Box */}
          <div className="absolute bottom-0 left-0 bg-[#EA5501] text-white px-10 py-8 shadow-lg border border-white border-4  ">
            <div className="flex flex-col  gap-2 items-start">
              <Image
                src="/ex.png"
                alt="Award"
                width={30}
                height={30}
                className="mb-3"
              />
              <h3 className="text-5xl font-bold">40+</h3>
              <p className="max-w-34 opacity-80 text-3xl font-bold">
                Business Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
