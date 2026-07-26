"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "motion/react";

export default function EventsPage() {
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
          Host an <br className="hidden md:block"/><span className="italic">Event</span>
        </motion.h1>

        <div className="space-y-16 text-[16px] md:text-[18px] text-foreground/80 font-light leading-[2.2] tracking-wide">
          
          <motion.section {...fadeIn}>
            <h2 className="font-serif text-2xl text-foreground mb-6">Private Events</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Birthday Celebrations</li>
              <li>Bridal Showers</li>
              <li>Baby Showers</li>
              <li>Anniversary Celebrations</li>
              <li>Family Gatherings</li>
            </ul>
          </motion.section>

          <motion.section {...fadeIn}>
            <h2 className="font-serif text-2xl text-foreground mb-6">Corporate Experiences</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Team Building Activities</li>
              <li>Employee Wellness Sessions</li>
              <li>Corporate Creative Workshops</li>
            </ul>
          </motion.section>

          <motion.section {...fadeIn}>
            <h2 className="font-serif text-2xl text-foreground mb-6">Community Events</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Seasonal Creative Events</li>
              <li>Pop-up Art Experiences</li>
              <li>Creative Networking Events</li>
              <li>Lifestyle &amp; Wellness Gatherings</li>
              <li>Collaborative Community Events</li>
            </ul>
          </motion.section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
