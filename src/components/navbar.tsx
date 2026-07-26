"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion } from "motion/react";

const NAV_LINKS = [
  { name: "ABOUT", href: "#" },
  { name: "EXPERIENCES", href: "#" },
  { name: "EVENTS", href: "#" },
  { name: "GALLERY", href: "#" },
  { name: "CONTACT", href: "#" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[92px] flex items-center justify-between">
        
        {/* Logo Area - Left side */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <NextImage
              src="/logo.png"
              alt="The Artisan House"
              width={180}
              height={60}
              priority
              className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered (shifted slightly left naturally by the flex-1 distribution) */}
        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-12 shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.15em] text-foreground/80 hover:text-terracotta transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-terracotta hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Right side */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-terracotta/40 text-terracotta text-[10px] font-semibold tracking-[0.2em] rounded-full hover:bg-terracotta hover:text-white transition-all duration-300 uppercase"
          >
            BOOK AN EXPERIENCE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1 flex justify-end">
          <button className="p-2 text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
