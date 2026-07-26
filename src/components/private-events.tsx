"use client";

import { motion } from "motion/react";
import Link from "next/link";

const EVENTS_LIST = [
  "Birthday Parties",
  "Bridal Showers",
  "Baby Showers",
  "Anniversaries",
  "Family Gatherings",
  "Custom Experiences"
];

export function PrivateEvents() {
  return (
    <section className="bg-background w-full py-24 lg:py-40 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[540px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] bg-[#f5f2eb]">
              <img
                src="/ChatGPT Image Jul 26, 2026, 05_33_58 PM.png"
                alt="Private Events"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-[45%] flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="text-terracotta text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 block">
              PRIVATE EVENTS
            </span>
            
            <h2 className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] text-foreground leading-[1.1] tracking-[-0.02em] mb-8">
              Celebrate beautifully,<br />
              <span className="italic">your way.</span>
            </h2>
            
            <p className="text-[15px] md:text-base text-foreground/75 leading-[1.8] font-light max-w-[440px] mb-12">
              From intimate birthdays to meaningful family gatherings, we create personalised experiences that feel thoughtful, creative and entirely your own.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 mb-12 text-[15px] font-light text-foreground/80">
              {EVENTS_LIST.map((event) => (
                <li key={event} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta/40" />
                  {event}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="group/btn inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-terracotta hover:text-foreground transition-colors duration-500 uppercase"
            >
              <span>Explore Private Events</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-500"
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
      </div>
    </section>
  );
}
