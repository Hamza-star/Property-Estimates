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
import MovingLine from "./MovingLine";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // search states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // ✅ NavLinks with href + optional dropdown
  const navLinks = [
    {
      name: "About Us",
      href: "/about",
      dropdown: [
        { name: "Service Areas", href: "/about/service-areas" },
        { name: "Testimonials", href: "/about/testimonials" },
      ],
    },
    {
      name: "Our Services",
      href: "/services",
      dropdown: [
        { name: "Residential Service", href: "/services/ResidentialService" },
        {
          name: "Construction Consultant Service",
          href: "/services/ConstructionConsultant",
        },
        { name: "Industrial Service", href: "/services/IndustrialService" },
        { name: "Preliminary Service", href: "/services/PreliminaryService" },
        { name: "Virtual Bid", href: "/services/virtual-bid" },
      ],
    },
    { name: "Trades", href: "/trades" },
    { name: "Our Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
  ];

  // fake searchable content
  const searchableContent = [
    {
      title: "Modern Office Building",
      description:
        "Premium corporate office project with advanced design and efficient planning.",
    },
    {
      title: "Luxury Villa Project",
      description: "High-end villa designed for modern luxury living.",
    },
    {
      title: "Commercial Complex",
      description:
        "Large-scale commercial hub designed for multiple business setups.",
    },
    {
      title: "Private Residence",
      description: "Stylish family home with modern architecture.",
    },
    {
      title: "Blog: Creation of industrial projects around the world",
      description: "Exploring industrial design in various regions.",
    },
  ];

  // search logic
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const q = searchQuery.toLowerCase();
      const results = searchableContent.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
      setSearchResults(results);
    }
  }, [searchQuery]);

  // highlight function
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-orange-300 text-black rounded px-1">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // handle modal close with animation
  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setClosing(false);
    }, 400);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white font-mono ">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 md:px-12 h-20 relative">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
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
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-[#EA5501] transition"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <span className="flex items-center gap-1 text-gray-700 hover:text-[#EA5501] transition">
                      {link.name}
                      <ChevronDown size={14} />
                    </span>
                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-30">
                      <ul className="p-3 text-sm font-sans text-gray-600">
                        {link.dropdown.map((item, i, arr) => (
                          <li key={i}>
                            <Link
                              href={item.href}
                              className="block py-2 hover:text-[#EA5501]"
                            >
                              {item.name}
                            </Link>
                            {i < arr.length - 1 && (
                              <hr className="border-gray-200 my-1" />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
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
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-0 w-full bg-white border-t shadow-lg p-6 space-y-6 font-sans z-40">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {!link.dropdown ? (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-gray-700 font-medium hover:text-[#EA5501]"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="flex justify-between items-center w-full text-gray-700 font-medium"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openDropdown === link.name && (
                      <div className="mt-2 ml-4 space-y-0 text-sm text-gray-600 border-l pl-3">
                        {link.dropdown.map((item, i, arr) => (
                          <div key={i}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 hover:text-[#EA5501]"
                            >
                              {item.name}
                            </Link>
                            {i < arr.length - 1 && (
                              <hr className="border-gray-200 my-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-5 py-3 bg-[#EA5501] text-white rounded-lg shadow font-semibold"
            >
              Affordable Estimates (30% Off)
            </button>

            {/* Call Info */}
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
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

      {/* 🔹 Main Content Padding */}
      <main className="pt-24">{/* Page Content */}</main>

      {/* 🔹 Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm sm:max-w-md md:max-w-3xl mx-auto p-6 sm:p-10 md:p-18 rounded-xl shadow-lg relative">
            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchQuery("");
                setSearchResults([]);
              }}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-white bg-[#EA5501]/90 hover:bg-[#EA5501] transition-all duration-300"
            >
              <X size={22} />
            </button>

            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 bg-white border rounded-lg shadow text-lg font-sans text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EA5501]"
            />

            {/* Search Results */}
            <div className="mt-6 max-h-80 overflow-y-auto space-y-4">
              {searchResults.length > 0 ? (
                searchResults.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                  >
                    <h3 className="font-bold text-gray-900 text-lg">
                      {highlightText(res.title, searchQuery)}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {highlightText(res.description, searchQuery)}
                    </p>
                  </div>
                ))
              ) : searchQuery ? (
                <p className="text-gray-500 text-center">No results found.</p>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Slide-in Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-end z-50"
          onClick={handleCloseModal}
        >
          <div
            className={`bg-white w-96 h-full shadow-lg p-8 relative overflow-y-auto transform transition-transform duration-500 ${
              closing ? "translate-x-full" : "translate-x-0"
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
