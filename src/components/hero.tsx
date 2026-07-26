"use client";

import NextImage from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { CommunityProof } from "./community-proof";
import { WaveTransition } from "./wave-transition";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[850px] w-full flex flex-col justify-center overflow-hidden">
      
      {/* Background radial wash behind image */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70vw] h-[90vh] bg-[radial-gradient(ellipse_at_center,rgba(253,251,247,0.7)_0%,rgba(249,246,240,0)_70%)] pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-between flex-1 z-10 relative pt-24 lg:pt-0 pb-32 lg:pb-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-[48%] flex flex-col items-start justify-center pt-8 lg:pt-0 z-20">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] text-foreground leading-[0.95] tracking-[-0.02em] mb-6 whitespace-normal"
          >
            Create.<br />
            <span className="italic text-terracotta pr-2">Connect.</span><br />
            Celebrate.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-base md:text-[17px] text-foreground/80 font-light max-w-[360px] leading-[1.7] mb-6"
          >
            Slow down, create something beautiful, and share meaningful moments through <span className="text-terracotta font-medium">thoughtfully curated experiences.</span>
          </motion.p>
          
          <CommunityProof />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Link
              href="#"
              className="group inline-flex items-center gap-4 text-[11px] font-semibold tracking-[0.2em] text-foreground hover:text-terracotta transition-colors duration-500 uppercase"
            >
              <div className="w-10 h-[1px] bg-terracotta transition-all duration-500" />
              <span>Explore Experiences</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="w-4 h-4 text-terracotta transform group-hover:translate-x-2 transition-transform duration-500"
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

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[52%] h-[40vh] min-h-[350px] lg:h-[85vh] flex items-end justify-center lg:justify-end relative z-10 lg:-ml-8"
        >
          <div className="relative w-full max-w-[760px] h-full flex items-end justify-center lg:justify-end">
            <NextImage
              src="/hero-image.png"
              alt="The Artisan House Artwork"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-bottom lg:object-right-bottom"
            />
          </div>
        </motion.div>
      </div>

      <WaveTransition />
    </section>
  );
}
