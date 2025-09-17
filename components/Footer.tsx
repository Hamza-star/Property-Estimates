// app/components/Footer.tsx
"use client";

import {
  Mail,
  Phone,
  MapPin,
  Share2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#111] text-gray-300 font-mono">
      {/* Background world map + buildings */}
      <div className="absolute inset-0 opacity-10"></div>
      <div className="absolute bottom-0 right-0 opacity-20">
        <img src="/f3.png" alt="Buildings" className="w-[300px] h-auto" />
      </div>

      {/* Top Contact Section */}
      <div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <div className="flex items-center  mb-2 gap-2">
              <span>
                <img src="/c.svg" alt="Logo" className="h-2 mb-4" />
              </span>
              <span className="text-xs font-normal text-white uppercase mb-2">
                Contact Us
              </span>
            </div>
            <h2 className="text-3xl font-semibold font-mono text-white mb-4">
              HAVE A PROJECT IN MIND? <br /> Contact with us today
            </h2>
            <p className="text-gray-400 mb-10 max-w-sm text-sm">
              The successes of the construction projects lies behind accurate
              estimates.
            </p>

            {/* Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-6 text-orange-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">USA</h4>
                  <p className="text-sm mt-1.5">
                    5380 WALZEM RD, SAN ANTONIO, TEXAS, 78218
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-6 text-orange-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Phone Number</h4>
                  <p className="text-sm mt-1.5">(346) 215-1585</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <Mail className="w-4 h-6 text-orange-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Email Address</h4>
                  <p className="text-sm mt-1.5">Response within 2 hours</p>
                  <p className="text-sm mt-1.5">Info@bennyestimates.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <Share2 className="w-4 h-5 text-orange-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white">Get Connected</h4>
                  <div className="flex gap-4 mt-1.5">
                    <a href="#" className="hover:text-white">
                      <Twitter className="w-4 h-5" />
                    </a>
                    <a href="#" className="hover:text-white">
                      <Facebook className="w-4 h-5" />
                    </a>
                    <a href="#" className="hover:text-white">
                      <Instagram className="w-4 h-5" />
                    </a>
                    <a href="#" className="hover:text-white">
                      <Linkedin className="w-4 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Truck Image */}
          <div className="flex justify-center mr-28">
            <img
              src="/footer.png"
              alt="Truck"
              className="max-h-[400px] object-contain"
            />
          </div>
        </div>

        {/* Border full width */}
        <div className="w-full border-t border-gray-600"></div>
      </div>

      {/* Bottom Footer Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left - Logo */}
        <div>
          <h3 className="text-xl font-bold text-white">Benny Estimates</h3>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Essential for precise budgeting and efficient resource allocation in
            construction projects.
          </p>
          <p className="mt-4 text-orange-500 font-semibold">Since 2000</p>
        </div>

        {/* Middle - Links */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Useful Links</h4>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
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
      <div className="w-full border-t border-gray-600 py-6 text-center text-gray-400 text-sm">
        © 2024 Benny Estimates | All rights reserved
      </div>
    </footer>
  );
}
