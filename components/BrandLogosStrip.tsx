// app/components/BrandLogosStrip.tsx
"use client";

import Image from "next/image";

const logos = [
  { alt: "Brand 1", src: "/c4.svg" },
  { alt: "Brand 2", src: "/c4.svg" },
  { alt: "Brand 3", src: "/c4.svg" },
  { alt: "Brand 4", src: "/c4.svg" },
  { alt: "Brand 5", src: "/c4.svg" },
];

export default function BrandLogosStrip() {
  return (
    <section aria-label="Trusted brands" className="bg-[#15161C] py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid with lighter vertical separators */}
        <div
          className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-gray-500/30"
          role="list"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              role="listitem"
              className="flex items-center justify-center px-4 py-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="filter grayscale hover:grayscale-0 hover:brightness-125 transition duration-300 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
