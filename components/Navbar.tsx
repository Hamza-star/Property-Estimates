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
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [closing, setClosing] = useState(false); // 🔹 for modal animation
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [time, setTime] = useState("");

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
    "Our Projects", // no dropdown
    "Blogs",
  ];

  // handle modal close with animation
  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setClosing(false);
    }, 400); // animation duration
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white font-mono ">
        <div className="max-w-8xl mx-auto -mt-1 flex items-center justify-between px-6 md:px-12 relative">
          {/* Logo */}
          <div className="flex items-center  gap-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Bunny Estimates"
                width={120}
                height={20}
                priority
                className="ml-2"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-[15px] font-heading font-medium">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group cursor-pointer">
                <span className="flex items-center gap-1 text-gray-700 hover:text-[#EA5501] transition">
                  {link}
                  {link !== "Our Projects" && <ChevronDown size={14} />}
                </span>

                {/* Dropdown */}
                {link !== "Our Projects" && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                    <ul className="p-3 text-sm font-sans text-gray-600">
                      {link === "About Us"
                        ? ["Service Areas", "Testimonials"].map(
                            (item, i, arr) => (
                              <li key={i}>
                                <a
                                  href="#"
                                  className="block py-2 hover:text-[#EA5501]"
                                >
                                  {item}
                                </a>
                                {i < arr.length - 1 && (
                                  <hr className="border-gray-200 my-1" />
                                )}
                              </li>
                            )
                          )
                        : [
                            "Cost Estimating Service",
                            "Quantity Takeoff",
                            "Material & Labor Pricing",
                            "Bid Preparation",
                            "Project Scheduling",
                          ].map((item, i, arr) => (
                            <li key={i}>
                              <a
                                href="#"
                                className="block py-2 hover:text-[#EA5501]"
                              >
                                {item}
                              </a>
                              {i < arr.length - 1 && (
                                <hr className="border-gray-200 my-1" />
                              )}
                            </li>
                          ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button className="px-5 py-2 cursor-pointer bg-[#EA5501] text-white font-heading font-semibold rounded-full flex items-center gap-2 group text-sm shadow hover:shadow-lg transition">
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
              <Search
                size={22}
                className="text-gray-700 hover:text-[#EA5501]"
              />
            </button>

            <div className="hidden md:block w-px h-4 bg-gray-300" />

            {/* Grid */}
            <button
              onClick={() => setModalOpen(true)}
              className="hidden md:block"
            >
              <Grid size={22} className="text-gray-700 hover:text-[#EA5501]" />
            </button>

            {/* Hamburger */}
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
                <Menu size={26} />
              )}
            </button>

            <div className="hidden md:block w-px h-28 bg-gray-300" />

            {/* Call */}
            <Link href="/contact-us">
              <div className="hidden md:flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-[#EA5501] rounded-full">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs font-sans text-gray-500 uppercase tracking-wide">
                    Call Anytime
                  </p>
                  <p className="font-heading font-semibold text-gray-900">
                    (346) 215-1585
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg p-6 space-y-6 font-sans">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                <button
                  className="flex justify-between items-center w-full text-gray-700 font-medium"
                  onClick={() =>
                    setOpenDropdown(openDropdown === link ? null : link)
                  }
                >
                  {link}
                  {link !== "Our Projects" && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openDropdown === link ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {link !== "Our Projects" && openDropdown === link && (
                  <div className="mt-2 ml-4 space-y-0 text-sm text-gray-600 border-l pl-3">
                    {(link === "About Us"
                      ? ["Service Areas", "Testimonials"]
                      : [
                          "Cost Estimating Service",
                          "Quantity Takeoff",
                          "Material & Labor Pricing",
                          "Bid Preparation",
                          "Project Scheduling",
                        ]
                    ).map((item, i, arr) => (
                      <div key={i}>
                        <a href="#" className="block py-2 hover:text-[#EA5501]">
                          {item}
                        </a>
                        {i < arr.length - 1 && (
                          <hr className="border-gray-200 my-1" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button className="w-full px-5 py-3 bg-[#EA5501] text-white rounded-lg shadow font-semibold">
              Affordable Estimates (30% Off)
            </button>

            {/* Call Info (same as desktop) */}
            <Link href="/contact-us">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow">
                <div className="w-12 h-12 flex items-center justify-center bg-[#EA5501] rounded-full">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-xs font-sans text-gray-500 uppercase tracking-wide">
                    Call Anytime
                  </p>
                  <p className="font-heading font-semibold text-gray-900">
                    (346) 215-1585
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </header>

      {/* 🔹 Main Content (padding for fixed navbar) */}
      <main className="pt-40">{/* Page Content */}</main>

      {/* 🔹 Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl mx-auto p-24 rounded-xl shadow-lg relative">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white bg-[#EA5501]/90 hover:bg-[#EA5501] transition-all duration-300"
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

      {/* 🔹 Slide-in Modal with Animation */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-end z-50"
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white w-96 h-full shadow-lg p-8 relative overflow-y-auto transform transition-transform duration-500 ${
              closing ? "animate-slide-out" : "animate-slide-in"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-transform duration-300 hover:rotate-90"
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="mt-12 space-y-6 font-mono">
              <h2 className="text-2xl font-heading font-bold text-[#EA5501]">
                Bunny Estimates
              </h2>
              <p className="font-sans text-gray-600 text-sm">
                A small business can be better than a big business because of
                agility and adaptability due to their size and scale.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="text-[#EA5501]" size={18} />
                  <span className="font-heading font-medium">
                    (346) 215-1585
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-[#EA5501]" size={18} />
                  <span>5380 WALZEM RD, SAN ANTONIO, TEXAS, 78218, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-[#EA5501]" size={16} />
                  <span>support@gmail.com</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-[#EA5501]">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-[#EA5501]">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-[#EA5501]">
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Blog Section */}
              <div className="mt-8 space-y-6">
                {[
                  {
                    img: "/b1.png",
                    title: "Creation of industrial projects around the world",
                    author: "Bunny Estimates",
                    time: "1 year ago",
                  },
                  {
                    img: "/b2.png",
                    title: "Interactive technologies in factories and plants",
                    author: "Bunny Estimates",
                    time: "1 year ago",
                  },
                  {
                    img: "/b3.png",
                    title: "Cultural artifacts and new attitudes",
                    author: "Bunny Estimates",
                    time: "1 year ago",
                  },
                ].map((blog, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="text-sm">
                      <h4 className="font-medium text-gray-800 hover:text-[#EA5501] cursor-pointer">
                        {blog.title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">
                        By {blog.author} • {blog.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
