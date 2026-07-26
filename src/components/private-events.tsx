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

const EventIllustration = () => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[500px]">
    {/* Abstract background blobs / shapes */}
    <path d="M450 250C450 380 380 480 250 480C120 480 50 380 50 250C50 120 120 50 250 50C380 50 450 120 450 250Z" fill="#FAF8F5" />
    <path d="M400 300C400 420 320 450 250 450C180 450 100 420 100 300C100 180 180 80 250 80C320 80 400 180 400 300Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-terracotta/20" />
    
    {/* Table */}
    <path d="M120 350C220 330 320 330 400 350" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/40" />
    <path d="M150 350V450M370 350V450" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-foreground/40" />
    
    {/* Abstract People */}
    {/* Person 1 */}
    <circle cx="180" cy="230" r="25" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60" />
    <path d="M150 330C160 270 200 270 210 330" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/60" />
    
    {/* Person 2 */}
    <circle cx="340" cy="220" r="22" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60" />
    <path d="M310 330C320 280 360 280 370 330" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-foreground/60" />
    
    {/* Cake */}
    <path d="M230 330V300H290V330" fill="#f4ece1" stroke="currentColor" strokeWidth="1.5" className="text-terracotta" />
    <path d="M245 300V280M275 300V280" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-terracotta" />
    <circle cx="245" cy="275" r="3" fill="#8A9A86" />
    <circle cx="275" cy="275" r="3" fill="#8A9A86" />
    
    {/* Flowers / Plant */}
    <path d="M260 330C260 330 250 250 260 200" stroke="#8A9A86" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M260 230C240 220 240 240 260 240" stroke="#8A9A86" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M260 210C280 200 280 220 260 220" stroke="#8A9A86" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Paint brushes on table */}
    <path d="M190 330L170 340M195 332L175 342" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-terracotta" />
    <circle cx="170" cy="340" r="2" fill="#8A9A86" />
    
    {/* Balloons */}
    <circle cx="100" cy="130" r="30" stroke="currentColor" strokeWidth="1.5" className="text-terracotta/60" />
    <path d="M100 160C90 200 120 250 130 350" stroke="currentColor" strokeWidth="1" className="text-terracotta/40" />
    
    <circle cx="420" cy="150" r="25" stroke="#8A9A86" strokeWidth="1.5" />
    <path d="M420 175C430 210 390 260 380 350" stroke="#8A9A86" strokeWidth="1" />
    
    {/* Confetti & Decorative lines */}
    <circle cx="150" cy="90" r="4" fill="#E8B4B8" />
    <circle cx="350" cy="60" r="3" fill="#8A9A86" />
    <circle cx="450" cy="230" r="5" fill="#E8B4B8" />
    <circle cx="70" cy="280" r="3" fill="#E8B4B8" />
    <path d="M200 80C220 60 250 100 280 70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-terracotta/50" />
    <path d="M350 120C370 110 380 140 400 120" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-terracotta/50" />
  </svg>
);

export function PrivateEvents() {
  return (
    <section className="bg-background w-full py-24 lg:py-40 relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[55%] flex justify-center lg:justify-start"
          >
            <EventIllustration />
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
