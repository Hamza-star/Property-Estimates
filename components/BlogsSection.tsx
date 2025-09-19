// app/components/BlogsSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Build a Modern Web App",
    description:
      "Learn best practices and tools to build scalable, modern web applications.",
    image: "/s5.png",
    date: "Sep 12, 2025",
    author: "Ali Hamza",
  },
  {
    id: 2,
    title: "Design Systems That Scale",
    description:
      "A deep dive into creating consistent, reusable design systems for teams.",
    image: "/s2.png",
    date: "Sep 10, 2025",
    author: "Sarah Khan",
  },
  {
    id: 3,
    title: "Framer Motion Tips & Tricks",
    description:
      "Supercharge your animations with these powerful Framer Motion techniques.",
    image: "/s1.png",
    date: "Sep 5, 2025",
    author: "David Lee",
  },
];

export default function BlogsSection() {
  return (
    <>
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#EA5501] uppercase mb-2">
              Our Blog
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Latest Insights & Articles
            </h2>
            <p className="text-gray-500 mt-2">
              Stay updated with our latest tips, tutorials, and industry news.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500"
              >
                {/* Blog Image */}
                <div className="overflow-hidden">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 font-mono">
                    {blog.date} • {blog.author}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-[#EA5501] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {blog.description}
                  </p>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="inline-block mt-4 font-mono text-[#EA5501] font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
