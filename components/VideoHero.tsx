"use client";

import { useEffect, useRef } from "react";
import MovingLine from "./MovingLine";
import MovingLine2 from "./MovingLine2";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Autoplay video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Some browsers block autoplay without mute
        videoRef.current!.muted = true;
        videoRef.current!.play();
      });
    }
  }, []);

  return (
    <>
      <section className="relative bg-white  w-full overflow-hidden py-16">
        {/* Static Video */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <video
            ref={videoRef}
            className="w-full h-72 md:h-1/2 object-cover"
            muted
            loop
            playsInline
            autoPlay
          >
            <source
              src="/hero-video.mp4" // replace with your local video in public folder
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            {/* <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg text-center">
            Welcome to Our Studio
          </h1>
          <p className="text-base md:text-xl max-w-lg text-center drop-shadow-md">
            Experience immersive videos with smooth scrolling text above a clean
            video layout.
          </p> */}
          </div>
        </div>
      </section>
      {/* <MovingLine2 /> */}
    </>
  );
}
