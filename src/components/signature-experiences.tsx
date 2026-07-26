"use client";

import NextImage from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const EXPERIENCES = [
  {
    title: "Sip & Paint",
    description:
      "Relax, paint and enjoy meaningful conversations in a calm and inspiring environment.",
    image: "/hero-image.png",
    reverse: false,
  },
  {
    title: "Creative Wellness",
    description:
      "Slow down through mindful creative sessions designed to restore focus, reduce stress and encourage self-expression.",
    image: "/hero-image.png",
    reverse: true,
  },
  {
    title: "Mindful Conversations",
    description:
      "Thoughtfully guided experiences that encourage authentic conversations, reflection and genuine human connection.",
    image: "/hero-image.png",
    reverse: false,
  },
  {
    title: "Creative Memories",
    description:
      "Celebrate birthdays, bridal showers, anniversaries and meaningful milestones with beautifully curated creative experiences.",
    image: "/hero-image.png",
    reverse: true,
  },
];

// A delicate, hand-drawn style curved line SVG for dividers
const OrganicDivider = () => (
  <div className="flex justify-center py-20 lg:py-32 w-full opacity-40">
    <svg
      width="120"
      height="12"
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-terracotta"
    >
      <path
        d="M1 5.5C30.5 12 80 -4 119 5.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export function SignatureExperiences() {
  return (
    <section className="bg-background w-full pt-24 pb-32 lg:pt-40 lg:pb-48 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 lg:mb-40 mx-auto max-w-[700px]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-terracotta text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 block"
          >
            SIGNATURE EXPERIENCES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.05] tracking-[-0.02em] mb-8"
          >
            Every experience is <br className="hidden sm:block" />
            <span className="italic">designed with intention.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[15px] md:text-[17px] text-foreground/75 leading-[1.8] font-light"
          >
            Whether you&apos;re joining friends for a relaxing Sip & Paint evening,
            reconnecting through mindful conversations, or celebrating life&apos;s special
            moments, every experience is carefully crafted to inspire creativity,
            genuine connection and lasting memories.
          </motion.p>
        </div>

        {/* Editorial Rows */}
        <div className="flex flex-col">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.title}>
              <div
                className={`flex flex-col ${
                  exp.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between gap-12 lg:gap-24`}
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: exp.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full lg:w-[55%] flex justify-center lg:justify-start group"
                >
                  <div className="relative w-full max-w-[540px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] bg-[#f5f2eb]">
                    <NextImage
                      src={exp.image}
                      alt={exp.title}
                      fill
                      unoptimized
                      className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    />
                  </div>
                </motion.div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: exp.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className={`w-full lg:w-[40%] flex flex-col items-center text-center lg:items-start lg:text-left ${
                    exp.reverse ? "lg:pl-8" : "lg:pr-8"
                  }`}
                >
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-foreground/75 leading-[1.8] font-light max-w-[420px] mb-10">
                    {exp.description}
                  </p>

                  <Link
                    href="#"
                    className="group/btn inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-terracotta hover:text-foreground transition-colors duration-500 uppercase"
                  >
                    <span>Learn More</span>
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

              {/* Add organic divider between rows, but not after the last one */}
              {index < EXPERIENCES.length - 1 && <OrganicDivider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
