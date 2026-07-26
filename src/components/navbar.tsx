"use client";

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const NAV_LINKS = [
  { name: "ABOUT", href: "#" },
  { name: "EXPERIENCES", href: "#" },
  { name: "EVENTS", href: "#" },
  { name: "GALLERY", href: "#" },
  { name: "CONTACT", href: "#" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);

    // Hide on scroll down, show on scroll up
    if (latest > lastY && latest > 200) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastY(latest);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-b border-foreground/5 shadow-sm" 
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div 
        className={`max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-[64px]" : "h-[100px]"
        }`}
      >
        {/* Logo Area */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <NextImage
              src="/logo.png"
              alt="The Artisan House"
              width={160}
              height={55}
              priority
              unoptimized
              className={`w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 ${
                isScrolled ? "h-8" : "h-12"
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center shrink-0 transition-all duration-500">
          <div className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-8" : "gap-10 lg:gap-14"}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium tracking-[0.18em] text-foreground/70 hover:text-terracotta transition-colors duration-500 uppercase ${
                  isScrolled ? "text-[10px]" : "text-[11px]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="#"
            className={`inline-flex items-center justify-center border border-terracotta/30 text-terracotta font-semibold tracking-[0.2em] rounded-full hover:bg-terracotta hover:text-white transition-all duration-500 uppercase ${
              isScrolled ? "px-5 py-2 text-[9px]" : "px-7 py-3 text-[10px]"
            }`}
          >
            BOOK AN EXPERIENCE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          <button className="p-2 text-foreground/80 hover:text-terracotta transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className={`transition-all duration-500 ${isScrolled ? "w-6 h-6" : "w-7 h-7"}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
