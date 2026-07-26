"use client";

import NextImage from "next/image";
import { motion } from "motion/react";

export function ExperiencesIntro() {
  return (
    <section className="bg-[#efece5] w-full pt-16 pb-16 lg:pt-24 lg:pb-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center text-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full"
        >
          <NextImage
            src="/Creative wellness in mindful collaboration.png"
            alt="Creative Wellness in Mindful Collaboration"
            width={1536}
            height={1024}
            unoptimized
            className="w-full h-auto object-contain mx-auto"
          />
        </motion.div>



      </div>

      {/* Bottom Gradient Transition into next section (ivory background) */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-56 bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />
    </section>
  );
}
