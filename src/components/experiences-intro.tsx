"use client";

import { motion } from "motion/react";
import { Palette, Sprout, MessageCircleHeart, Gift } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Sip & Paint",
    description: "Unleash your creativity one brushstroke at a time.",
    icon: Palette,
  },
  {
    title: "Creative Wellness",
    description: "Nourish your mind and body through mindful experiences.",
    icon: Sprout,
  },
  {
    title: "Mindful Conversations",
    description: "Connect deeply, share openly, and grow together.",
    icon: MessageCircleHeart,
  },
  {
    title: "Creative Memories",
    description: "Take home more than just art, take home memories.",
    icon: Gift,
  },
];

export function ExperiencesIntro() {
  return (
    <section className="bg-[#efece5] w-full pt-16 pb-32 lg:pt-24 lg:pb-40 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-terracotta text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 block"
          >
            ART • WELLNESS • COMMUNITY • MEMORIES
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[clamp(2.25rem,4vw,3.25rem)] text-foreground leading-[1.15] tracking-[-0.01em] max-w-[650px]"
          >
            Thoughtfully curated experiences designed to bring people together.
          </motion.h2>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          {EXPERIENCES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center group lg:border-r border-terracotta/15 last:border-r-0 px-4"
            >
              <div className="text-terracotta mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <item.icon strokeWidth={1} className="w-10 h-10" />
              </div>
              <h3 className="text-sm md:text-base font-medium tracking-wide text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-[13px] text-foreground/70 leading-relaxed max-w-[220px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
