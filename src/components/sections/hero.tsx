"use client";

import { motion } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6">
      {/* Decorative background blob — subtle, imperfect */}
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-yellow-light) 0%, var(--color-lilac-light) 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl pt-24">
        <motion.p
          className="mb-5 font-body text-sm tracking-widest text-brown-muted uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
          Digital Product Studio
        </motion.p>

        <motion.h1
          className="max-w-4xl font-heading text-5xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
        >
          We build things
          <br />
          people{" "}
          <span className="relative inline-block">
            actually
            {/* Underline decoration — hand-drawn feel */}
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.9 }}
            >
              <motion.path
                d="M2 8 C50 3, 100 10, 198 4"
                stroke="var(--color-yellow)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.2,
                  ease: EASE_OUT_EXPO,
                  delay: 0.9,
                }}
              />
            </motion.svg>
          </span>{" "}
          use.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-lg font-body text-lg leading-relaxed text-brown-light md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.45 }}
        >
          Strategy, design, and engineering — woven together to create digital
          products that feel alive.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.6 }}
        >
          <motion.a
            href="#work"
            className="group relative rounded-[16px] bg-ink px-8 py-4 font-heading text-base font-semibold text-cream"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            See our work
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </motion.a>

          <a
            href="#about"
            className="rounded-[16px] border border-brown-muted/30 px-8 py-4 font-heading text-base font-semibold text-brown transition-colors duration-200 hover:border-brown-muted/60 hover:bg-cream-dark"
          >
            Our philosophy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
