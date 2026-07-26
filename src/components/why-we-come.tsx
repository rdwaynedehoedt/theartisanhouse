"use client";

import { motion } from "motion/react";

const REASONS = [
  {
    title: "Feel Present",
    description: "Leave feeling lighter than when you arrived.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-terracotta">
        {/* Horizon */}
        <path d="M5 30C15 26 25 26 35 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sun */}
        <path d="M20 27V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="12" r="5" stroke="#8A9A86" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Make Real Connections",
    description: "Meet people through creativity instead of screens.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-terracotta">
        {/* Abstract faces profile connected */}
        <path d="M12 15C12 12 15 10 18 12C18 12 20 15 18 18C16 21 12 25 12 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28 15C28 12 25 10 22 12C22 12 20 15 22 18C24 21 28 25 28 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 24C20 28 24 24 24 24" stroke="#8A9A86" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Express Yourself",
    description: "No experience required. Just curiosity.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-terracotta">
        {/* Brush stroke */}
        <path d="M8 32C15 25 20 15 30 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Spark */}
        <path d="M25 8L28 11M33 12L30 15" stroke="#8A9A86" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="10" r="1.5" fill="#8A9A86" />
      </svg>
    ),
  },
  {
    title: "Take Something Home",
    description: "Artwork. Memories. A new perspective.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-terracotta">
        {/* Box */}
        <path d="M10 20L20 15L30 20L20 25L10 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20V28L20 33L30 28V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {/* Leaf */}
        <path d="M20 20C20 15 25 10 25 10C25 10 28 15 25 18C22 21 20 20 20 20Z" stroke="#8A9A86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyWeCome() {
  return (
    <section className="bg-background w-full py-24 lg:py-40 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-20 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-terracotta text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 block"
          >
            WHY PEOPLE COME HERE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-foreground leading-[1.1] tracking-[-0.02em]"
          >
            More than an event.<br className="hidden sm:block" />
            <span className="italic">A place to slow down.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-[900px] mx-auto">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
              className={`flex flex-col items-center text-center p-8 group hover:-translate-y-2 transition-transform duration-500 rounded-3xl border border-terracotta/10 bg-white/30 backdrop-blur-sm ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-[15px] text-foreground/75 leading-[1.8] font-light max-w-[280px]">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
