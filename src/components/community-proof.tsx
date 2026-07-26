"use client";

import { motion } from "motion/react";

const AVATARS = [
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=44",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=33",
];

export function CommunityProof() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-8"
    >
      <div className="flex -space-x-2.5">
        {AVATARS.map((src, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-[1.5px] border-background overflow-hidden bg-muted relative z-[1]"
            style={{ zIndex: 10 - i }}
          >
            <img
              src={src}
              alt="Community member"
              className="w-full h-full object-cover grayscale-[30%] opacity-90"
            />
          </div>
        ))}
        <div 
          className="w-8 h-8 rounded-full border-[1.5px] border-background bg-[#efece5] flex items-center justify-center text-terracotta text-[10px] font-medium relative"
          style={{ zIndex: 0 }}
        >
          +85
        </div>
      </div>
      <p className="text-xs text-foreground/75 leading-snug">
        85+ people creating,<br className="hidden sm:block" /> connecting and celebrating.
      </p>
    </motion.div>
  );
}
