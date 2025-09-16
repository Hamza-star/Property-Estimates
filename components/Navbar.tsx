"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Search,
  Grid,
  ArrowRight,
  Phone,
  X,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  // Live time (future use)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    "About Us",
    "Our Services",
    "Trades",
    "Our Projects",
    "Blogs",
  ];

  return (
    <header className="w-full bg-white ">
      {/* 🔹 Top Bar */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-1.5 text-sm font-sans bg-gray-100/50">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
              <div
                key={idx}
                className="w-6 h-6 flex items-center justify-center rounded-full text-[#EA5501] bg-[#EA5501]/10 cursor-pointer transition-colors duration-300 hover:bg-[#EA5501] hover:text-white"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>

          {/* Time + Location */}
          <div className="flex items-center gap-8 text-gray-600 mt-2 md:mt-0">
            <div className="flex items-center gap-2 mr-14">
              <MapPin size={14} className="text-[#EA5501]" />
              <span className="text-xs">
                5 Simcoe Street S #201 Oshawa ON L1H 8C1 Canada
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-12 -mt-8 relative">
        {/* Logo + Separator */}
        <div className="flex items-center gap-6">
          <Image
            src="/logo.png"
            alt="Bunny Estimates"
            width={120}
            height={45}
            priority
            className="ml-2"
          />
          {/* Vertical Separator */}
          <div className="hidden md:block w-px h-30 bg-gray-300" />
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex gap-6 items-center text-[15px] font-heading font-medium">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <span className="flex items-center gap-1 text-gray-700 hover:text-[#EA5501] transition">
                {link}
                <ChevronDown size={14} />
              </span>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                <ul className="p-3 space-y-2 text-sm font-sans text-gray-600">
                  {link === "About Us" ? (
                    <>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Service Areas
                      </li>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Testimonials
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Cost Estimating Service
                      </li>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Quantity Takeoff
                      </li>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Material & Labor Pricing
                      </li>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Bid Preparation
                      </li>
                      <li className="hover:text-[#EA5501] cursor-pointer">
                        Project Scheduling
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <button className="px-5 py-2 bg-[#EA5501] text-white font-heading font-semibold rounded-full flex items-center gap-2 group text-sm shadow hover:shadow-lg transition">
            <span>Affordable Estimates (30% Off)</span>
            <span className="p-1 rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} />
            </span>
          </button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button onClick={() => setSearchOpen(true)} className="md:mr-0">
            <Search size={22} className="text-gray-700 hover:text-[#EA5501]" />
          </button>

          <div className="hidden md:block w-px h-4 bg-gray-300" />
          {/* Grid Icon (Desktop only) */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block"
          >
            <Grid size={22} className="text-gray-700 hover:text-[#EA5501]" />
          </button>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#EA5501] transition"
          >
            {mobileMenuOpen ? (
              <X
                size={26}
                className="transition-transform duration-300 rotate-90"
              />
            ) : (
              <Menu
                size={26}
                className="transition-transform duration-300 rotate-0"
              />
            )}
          </button>

          {/* Separator (Desktop only) */}
          <div className="hidden md:block w-px h-28 bg-gray-300" />

          {/* Call Section (Desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#EA5501] rounded-full">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <p className="text-xs font-sans text-gray-500 uppercase tracking-wide">
                Call Anytime
              </p>
              <p className="font-heading font-semibold text-gray-900">
                (289) 801 7224
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4 font-heading">
            {navLinks.map((link, idx) => (
              <details key={idx} className="group">
                <summary className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-[#EA5501]">
                  {link}
                  <ChevronDown
                    size={16}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  {link === "About Us" ? (
                    <>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Service Areas
                      </a>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Testimonials
                      </a>
                    </>
                  ) : (
                    <>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Cost Estimating Service
                      </a>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Quantity Takeoff
                      </a>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Material & Labor Pricing
                      </a>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Bid Preparation
                      </a>
                      <a href="#" className="block hover:text-[#EA5501]">
                        Project Scheduling
                      </a>
                    </>
                  )}
                </div>
              </details>
            ))}
            <button className="w-full px-5 py-3 bg-[#EA5501] text-white font-heading font-semibold rounded-lg shadow hover:shadow-lg transition">
              Affordable Estimates (30% Off)
            </button>
          </nav>
        </div>
      )}

      {/* 🔹 Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl mx-auto p-24 rounded-xl shadow-lg relative">
            {/* Cross Button */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white bg-[#EA5501]/90 hover:bg-[#EA5501] hover:text-white transition-all duration-300"
            >
              <X size={22} />
            </button>

            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-5 py-4 bg-white border rounded-lg shadow text-lg font-sans text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA5501]"
            />
          </div>
        </div>
      )}

      {/* 🔹 Slide-in Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
          <div className="bg-white w-96 h-full shadow-lg p-8 relative overflow-y-auto animate-slide-in">
            {/* Close */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X size={28} />
            </button>

            {/* Modal Content */}
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-[#EA5501]">
                Bunny Estimates
              </h2>
              <p className="font-sans text-gray-600 text-sm">
                A small business can be better than a big business because of
                agility and adaptability due to their size and scale.
              </p>
              <div className="flex items-center gap-2">
                <Phone
                  className="bg-[#EA5501] text-white rounded-full p-1"
                  size={28}
                />
                <span className="font-heading font-medium">
                  +85 155 596 1658
                </span>
              </div>
              <p className="font-sans text-sm text-gray-600">
                Losangle, Street Road 24, New York, USA - 67452
              </p>
              <p className="font-sans text-sm text-gray-600">
                support@gmail.com
              </p>

              {/* Socials */}
              <div className="flex gap-3 text-gray-500 font-sans">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
