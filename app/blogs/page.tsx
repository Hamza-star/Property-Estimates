"use client";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/s2.png",
      date: "Mar 16, 2020",
      author: "Michael Foster",
      title: "Boost your conversion rate",
      link: "/blogs/boost-your-conversion-rate",
    },
    {
      id: 2,
      image: "/s5.png",
      date: "Mar 10, 2020",
      author: "Lindsay Walton",
      title: "How to use search engine optimization to drive sales",
      link: "/blogs/seo-to-drive-sales",
    },
    {
      id: 3,
      image: "/b3.png",
      date: "Feb 12, 2020",
      author: "Tom Cook",
      title: "Improve your customer experience",
      link: "/blogs/customer-experience",
    },
    {
      id: 4,
      image: "/s3.png",
      date: "Jan 28, 2020",
      author: "Emily Carter",
      title: "The ultimate guide to social media strategy",
      link: "/blogs/social-media-strategy",
    },
    {
      id: 5,
      image: "/s4.png",
      date: "Jan 12, 2020",
      author: "James Parker",
      title: "Email marketing tactics that really work",
      link: "/blogs/email-marketing",
    },
    {
      id: 6,
      image: "/b7.jpg",
      date: "Dec 22, 2019",
      author: "Sophia Lee",
      title: "Building a brand that stands out in 2025",
      link: "/blogs/brand-building",
    },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="py-20 -mt-8 bg-white text-black">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-black">
            From the Blog
          </h2>
          <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
            Insights, tips, and strategies to help you grow your business
            effectively with expert guidance and industry best practices.
          </p>

          {/* Blog Grid with Framer Motion */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogs.map((blog) => (
              <motion.a
                key={blog.id}
                href={blog.link}
                className="relative group rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 block"
                variants={cardVariants}
              >
                {/* Blog Image */}
                <div className="w-full h-92 relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-6 text-left text-white">
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">·</span>
                    {/* <span className="font-medium">{blog.author}</span> */}
                  </div>
                  <h3 className="text-xl font-semibold leading-relaxed transition">
                    {blog.title}
                  </h3>
                  <span className="inline-block mt-3 text-sm font-medium text-[#EA5501] group-hover:underline">
                    Read More →
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <FaqSection />
      {/* <CtaSection /> */}
    </>
  );
};

export default BlogSection;
