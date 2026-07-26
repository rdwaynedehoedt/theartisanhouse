"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "motion/react";

export default function GalleryPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="relative min-h-screen bg-background flex flex-col pt-[120px]">
      <Navbar />
      
      <div className="flex-grow max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24 w-full text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 leading-[1.1] tracking-[-0.02em]"
        >
          Visual <br className="hidden md:block"/><span className="italic">Gallery</span>
        </motion.h1>

        <div className="space-y-16 text-[16px] md:text-[18px] text-foreground/80 font-light leading-[2.2] tracking-wide">
          
          <motion.section {...fadeIn}>
            <p className="italic text-terracotta text-xl mb-6">Curated visual spaces</p>
            <p>The website is designed to accommodate future experiences and events as the brand grows, making it easy to add new workshops, collaborations, wellness experiences, festivals, and community events.</p>
            <p className="mt-8 opacity-60">Visual gallery collection coming soon.</p>
          </motion.section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
