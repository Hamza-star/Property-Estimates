// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Play } from "lucide-react";
// import Image from "next/image";

// export default function AboutUs() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const stats = [
//     { label: "Years of Experience", value: "12+" },
//     { label: "Completed Projects", value: "350+" },
//     { label: "Happy Clients", value: "200+" },
//     { label: "Awards Won", value: "15+" },
//   ];

//   return (
//     <section className="py-20 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-white to-gray-50">
//       {/* Heading + Short Description */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-center max-w-2xl mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//           About Us
//         </h2>
//         <p className="text-gray-600 text-lg">
//           We deliver accurate cost estimating and takeoff services to help
//           builders, contractors, and homeowners save time and money.
//         </p>
//       </motion.div>

//       {/* Local Video with Play Button */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="mt-14 flex justify-center"
//       >
//         <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-xl border">
//           {!isPlaying ? (
//             <>
//               <video
//                 className="w-full h-full object-cover"
//                 muted
//                 loop
//                 playsInline
//               >
//                 <source
//                   src="https://www.pexels.com/download/video/5738910/"
//                   type="video/mp4"
//                 />
//               </video>
//               <button
//                 onClick={() => setIsPlaying(true)}
//                 className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
//               >
//                 <div className="w-20 h-20 flex items-center justify-center bg-[#EA5501] rounded-full shadow-lg hover:scale-110 transition">
//                   <Play size={40} className="text-white ml-1" />
//                 </div>
//               </button>
//             </>
//           ) : (
//             <video className="w-full h-full object-cover" controls autoPlay>
//               <source src="/about-video.mp4" type="video/mp4" />
//             </video>
//           )}
//         </div>
//       </motion.div>

//       {/* Stats Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
//       >
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8"
//           >
//             <h3 className="text-4xl font-extrabold text-[#EA5501]">
//               {stat.value}
//             </h3>
//             <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
//           </div>
//         ))}
//       </motion.div>

//       {/* 🔹 About Content + Image */}
//       <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-12 gap-14">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="flex flex-col gap-8 text-center lg:text-left"
//         >
//           <h6 className="text-gray-400 text-base font-medium">About Us</h6>
//           <h2 className="text-[#EA5501] text-4xl md:text-5xl font-extrabold leading-tight">
//             The Tale of Our Achievement Story
//           </h2>
//           <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
//             Our journey is built on teamwork, persistence, and innovation. From
//             challenges to victories, every step reflects our passion for
//             creating progress and success together.
//           </p>
//           <button className="sm:w-fit w-full group px-6 py-3 bg-[#EA5501] hover:bg-[#EA5501]/80 rounded-lg shadow-md transition duration-500 flex items-center justify-center gap-2">
//             <span className="text-white text-sm font-semibold">Read More</span>
//             <svg
//               className="group-hover:translate-x-1 transition-transform"
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="18"
//               fill="none"
//               viewBox="0 0 18 18"
//             >
//               <path
//                 d="M6.75 4.5L11.25 9l-4.5 4.5"
//                 stroke="#fff"
//                 strokeWidth="1.6"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="flex justify-center lg:justify-end"
//         >
//           <div className="relative sm:w-[520px] w-full sm:h-[600px] h-[400px] bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden">
//             <Image
//               src="/about-us.jpg"
//               alt="About Us"
//               fill
//               className="object-cover rounded-3xl"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import AboutUs from "@/components/AboutUs";
import FaqSection from "@/components/FaqSection";
import React from "react";

const page = () => {
  return (
    <>
      <AboutUs />
      <FaqSection />
    </>
  );
};

export default page;
