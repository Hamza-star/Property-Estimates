"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MovingLine2() {
  return (
    <div className="w-full overflow-hidden bg-white -mt-7">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 60, // speed
          ease: "linear",
        }}
      >
        {/* 🔹 First Row */}
        <div className="flex shrink-0">
          <Image
            src="/global-line-shape2.png" // apka global line image
            alt="moving line"
            width={1900}
            height={40}
            className="object-cover"
          />
        </div>

        {/* 🔹 Duplicate Row for seamless loop */}
        <div className="flex shrink-0">
          <Image
            src="/global-line-shape2.png"
            alt="moving line duplicate"
            width={1900}
            height={40}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
