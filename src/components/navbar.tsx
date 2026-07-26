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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-transparent"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[100px] flex items-center justify-between">
        
        {/* Logo Area - Left side */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <NextImage
              src="/logo.png"
              alt="The Artisan House"
              width={160}
              height={55}
              priority
              unoptimized
              className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-10 lg:gap-14 shrink-0">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.18em] text-foreground/70 hover:text-terracotta transition-colors duration-500 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Right side */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-7 py-3 border border-terracotta/30 text-terracotta text-[10px] font-semibold tracking-[0.2em] rounded-full hover:bg-terracotta hover:text-white transition-colors duration-500 uppercase"
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
              className="w-7 h-7"
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
