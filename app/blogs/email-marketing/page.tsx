"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BlogDetail = () => {
  const blog = {
    title: "Boost your conversion rate",
    author: "Michael Foster",
    date: "Mar 16, 2020",
    image: "/s5.jpg",
    content: [
      {
        id: "p1",
        type: "paragraph",
        text: "Increasing your conversion rate is essential for business growth...",
      },
      { id: "h1", type: "heading", text: "Why Conversion Rate Matters" },
      {
        id: "p2",
        type: "paragraph",
        text: "Conversion rate measures the percentage of visitors who complete a desired action...",
      },
      {
        id: "p3",
        type: "paragraph",
        text: "Focus on testing landing pages, call-to-action buttons, and messaging to improve results...",
      },
      {
        id: "q1",
        type: "quote",
        text: "“A small increase in conversion rate can have a massive impact on revenue.”",
      },
      { id: "h2", type: "heading", text: "Steps to Improve Conversion Rate" },
      {
        id: "list1",
        type: "list",
        items: [
          "Analyze your funnel and identify drop-off points.",
          "Optimize page load speed and mobile experience.",
          "Simplify forms and checkout process.",
          "Use clear, persuasive call-to-actions.",
          "Leverage social proof and testimonials.",
        ],
      },
      {
        id: "p4",
        type: "paragraph",
        text: "By systematically applying these strategies, you can see measurable improvements in your conversions.",
      },
    ],
  };

  const relatedBlogs = [
    {
      id: 1,
      title: "How to use search engine optimization to drive sales",
      image: "/s5.png",
      link: "#",
      author: "Lindsay Walton",
      date: "Mar 10, 2020",
    },
    {
      id: 2,
      title: "Improve your customer experience",
      image: "/b3.png",
      link: "#",
      author: "Tom Cook",
      date: "Feb 12, 2020",
    },
    {
      id: 3,
      title: "Email marketing tactics that really work",
      image: "/s4.png",
      link: "#",
      author: "James Parker",
      date: "Jan 12, 2020",
    },
  ];

  const [activeSection, setActiveSection] = useState(blog.content[0].id);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      setShowTopBtn(window.scrollY > 300);

      for (let i = blog.content.length - 1; i >= 0; i--) {
        const el = document.getElementById(blog.content[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(blog.content[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const renderContent = (block) => {
    const animation = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };
    switch (block.type) {
      case "paragraph":
        return (
          <motion.p
            key={block.id}
            id={block.id}
            className="mb-6 text-gray-800 text-lg leading-relaxed font-sans"
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {block.text}
          </motion.p>
        );
      case "heading":
        return (
          <motion.h2
            key={block.id}
            id={block.id}
            className="text-3xl font-bold mt-10 mb-4 text-gray-900 font-sans"
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {block.text}
          </motion.h2>
        );
      case "quote":
        return (
          <motion.blockquote
            key={block.id}
            id={block.id}
            className="border-l-4 border-[#EA5501] pl-4 italic text-gray-700 my-6 font-serif text-lg"
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {block.text}
          </motion.blockquote>
        );
      case "list":
        return (
          <motion.ul
            key={block.id}
            id={block.id}
            className="list-disc list-inside text-gray-800 mb-6 text-lg font-sans"
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {block.items.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </motion.ul>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 -mt-28 bg-gray-50 font-sans">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Image */}
          <motion.div
            className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-xl mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover object-center"
            />
          </motion.div>

          {/* Title & Meta */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-6xl underline font-extrabold text-gray-800 mb-4">
              {blog.title}
            </h1>
            <div className="text-gray-500 text-sm sm:text-base">
              {/* <span>{blog.date}</span> */}
              {/* <span className="mx-2">·</span> */}
              {/* <span>{blog.author}</span> */}
            </div>
          </motion.div>

          {/* Blog Content */}
          <div className="text-left">{blog.content.map(renderContent)}</div>

          {/* Related Blogs */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              More Blogs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((b) => (
                <a
                  key={b.id}
                  href={b.link}
                  className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <div className="relative w-full h-56 sm:h-64">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover object-center transform group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-left text-white">
                    <h4 className="text-lg font-semibold  transition">
                      {b.title}
                    </h4>
                    <div className="text-sm">
                      {b.date} · {b.author}
                    </div>
                    <span className="text-sm text-[#EA5501] group-hover:underline mt-2 inline-block">
                      Read More →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Table of Contents */}
        <div className="hidden lg:block w-64 sticky top-32 h-max self-start">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">Contents</h4>
            <ul className="space-y-2 text-gray-700">
              {blog.content
                .filter((c) => c.type === "heading")
                .map((h) => (
                  <li key={h.id}>
                    <button
                      onClick={() => scrollToSection(h.id)}
                      className={`w-full text-left cursor-pointer hover:text-[#EA5501] transition ${
                        activeSection === h.id
                          ? "font-semibold text-[#EA5501]"
                          : ""
                      }`}
                    >
                      {h.text}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#EA5501] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-orange-600 transition"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogDetail;
