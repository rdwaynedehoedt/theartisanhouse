"use client";

import NextImage from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[700px] w-full flex flex-col justify-center overflow-hidden">
      
      {/* Background radial wash behind image */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(253,251,247,0.6)_0%,rgba(249,246,240,0)_70%)] pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between flex-1 z-10 relative pt-32 lg:pt-0">
        
        {/* Left Content (47%) */}
        <div className="w-full lg:w-[47%] flex flex-col items-start justify-center pt-12 lg:pt-0 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-[clamp(3.5rem,7vw,5.75rem)] text-foreground leading-[1.0] tracking-[-0.02em] mb-10 whitespace-normal"
          >
            Create. Connect. <br className="hidden md:block" />
            Celebrate.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-base md:text-lg text-foreground/75 font-light max-w-[420px] leading-[1.85] mb-14"
          >
            Slow down, create something beautiful, and share meaningful moments through thoughtfully curated experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Link
              href="#"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-foreground hover:text-terracotta transition-colors duration-300 uppercase"
            >
              <div className="w-8 h-[1px] bg-terracotta/60" />
              <span>Explore Experiences</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 text-terracotta transform group-hover:translate-x-1.5 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Right Content - Hero Image (53%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="w-full lg:w-[53%] h-[45vh] lg:h-[80vh] flex items-end justify-center lg:justify-start mt-8 lg:mt-0 relative z-10 lg:-ml-8"
        >
          <div className="relative w-full max-w-[760px] h-full flex items-end justify-center lg:justify-start">
            <NextImage
              src="/Elegant%20minimalism%20with%20soft%20neutrals.png"
              alt="The Artisan House Artwork"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom lg:object-center drop-shadow-sm"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave (Two Layers) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
        {/* Back layer - Cream/Ivory */}
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[90px] lg:h-[130px] absolute bottom-0 left-0"
        >
          <path
            d="M0,80 C320,160 420,0 720,80 C1020,160 1120,0 1440,80 L1440,160 L0,160 Z"
            fill="#FDFBF7"
            fillOpacity="0.6"
          />
        </svg>
        {/* Front layer - Secondary/Accent match */}
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[45px] md:h-[70px] lg:h-[100px] relative mt-auto"
        >
          <path
            d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z"
            fill="#efece5"
          />
        </svg>
      </div>
    </section>
  );
}
