// app/components/Footer.tsx
"use client";

import { Mail, Phone, MapPin, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#111] text-gray-300">
      {/* Background world map + buildings */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/w.jpg" // world background
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-0 opacity-20">
        <img
          src="/h1.png" // building outlines
          alt="Buildings"
          className="w-[300px] h-auto"
        />
      </div>

      {/* Top Contact Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-gray-800">
        {/* Contact Info */}
        <div>
          <p className="text-sm font-semibold text-orange-500 uppercase mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            Have a project in mind? <br /> Contact with us today
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl">
            The successes of the construction projects lies behind
            accurate estimates.
          </p>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-bold text-white">Canda</h4>
                <p className="text-sm">
                  5 Simcoe Street S #201 Oshawa ON L1H 8C1
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-bold text-white">Phone Number</h4>
                <p className="text-sm">(289) 801 7224</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-bold text-white">Email Address</h4>
                {/* <p className="text-sm">Response within 2 hours</p> */}
                <p className="text-sm">support@bennyestimates.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Share2 className="w-6 h-6 text-orange-500" />
              <div>
                <h4 className="font-bold text-white">Get Connected</h4>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="hover:text-white">
                    X
                  </a>
                  <a href="#" className="hover:text-white">
                    Fb
                  </a>
                  <a href="#" className="hover:text-white">
                    Insta
                  </a>
                  <a href="#" className="hover:text-white">
                    Ln
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Truck Image */}
        <div className="flex justify-center">
          <img
            src="/footer.png"
            alt="Truck"
            className="max-h-[300px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left - Logo */}
        <div>
          <h3 className="text-xl font-bold text-white">Benny Estimates</h3>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            The successes of the construction projects lies behind
            accurate estimates
          </p>
          <p className="mt-4 text-orange-500 font-semibold">Since 2000</p>
        </div>

        {/* Middle - Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                What We Do
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                News & Article
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Success Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                FAQ’s
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms of use
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Newsletter */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe for the latest news. Stay updated on the latest trends.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email Address..."
              className="px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © 2024 Construz | All rights reserved
      </div>
    </footer>
  );
}
