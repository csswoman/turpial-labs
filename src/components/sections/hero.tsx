"use client";

import { motion } from "motion/react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-6">
      {/* Blob orgánico */}
      <div
        className="pointer-events-none absolute right-[-12%] top-[8%] h-[520px] w-[520px] opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-yellow-light), var(--color-lilac-light) 60%, transparent 100%)",
          borderRadius: "58% 42% 63% 37% / 42% 58% 39% 61%",
        }}
      />

      {/* Nota humana */}
      <motion.div
        className="absolute left-6 top-10 hidden rotate-[-2deg] rounded-[12px] bg-yellow px-4 py-2 text-sm font-accent text-brown shadow-soft md:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hecho en Venezuela ✳︎
      </motion.div>

      <div className="mx-auto w-full max-w-6xl pt-28">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 max-w-[24ch] font-body text-xs tracking-[0.2em] text-brown-muted uppercase"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
          Estudio de producto digital
        </motion.p>

        {/* Heading principal */}
        <motion.h1
          className="max-w-[20ch] font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.2 }}
        >
          Tecnología que nace
          <br />
          de lo que{" "}
          <span className="relative inline-block">
            somos
            {/* Subrayado artesanal */}
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 14"
              fill="none"
              preserveAspectRatio="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.9 }}
            >
              <motion.path
                d="M3 9 C40 2, 110 12, 197 5"
                stroke="var(--color-yellow)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
          .
        </motion.h1>

        {/* Subcopy */}
        <motion.div
          className="mt-8 max-w-[60ch] space-y-6 font-body text-lg leading-relaxed text-brown-light md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.45 }}
        >
          <p>
            No hacemos productos para &quot;usuarios&quot;.
            <br />
            Hacemos cosas que la gente entiende, usa
            <br />
            y quiere volver a usar.
          </p>

          <div className="space-y-2 border-l-2 border-yellow-light pl-6">
            <p>Pensamos antes de diseñar.</p>
            <p>Diseñamos antes de desarrollar.</p>
            <p>Desarrollamos solo lo que hace falta.</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.6 }}
        >
          <motion.a
            href="#contacto"
            className="group relative rounded-full bg-ink px-9 py-4 font-heading text-base font-semibold text-cream shadow-[0_4px_0_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96, y: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Conversemos
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </motion.a>

          <a
            href="#proyectos"
            className="rotate-[0.5deg] rounded-[14px] border border-brown-muted/30 px-8 py-4 font-heading text-base font-semibold text-brown transition-all duration-200 hover:-rotate-[0.5deg] hover:border-brown-muted/60 hover:bg-cream-dark"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>

      {/* Doodle decorativo */}
      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 hidden opacity-70 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path
            d="M10 40 Q40 10 70 40 Q40 70 10 40Z"
            stroke="var(--color-brown-muted)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}