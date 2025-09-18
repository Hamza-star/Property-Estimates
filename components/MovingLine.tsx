"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MovingLine() {
  return (
    <div className="w-full overflow-hidden bg-white -mt-11">
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
            src="/global-line-shape1.png" // apka global line image
            alt="moving line"
            width={1800}
            height={30}
            className="object-cover"
          />
        </div>

        {/* 🔹 Duplicate Row for seamless loop */}
        <div className="flex shrink-0">
          <Image
            src="/global-line-shape1.png"
            alt="moving line duplicate"
            width={1800}
            height={30}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
