"use client";

import { motion } from "motion/react";
import {
  StaggerContainer,
  staggerChildVariants,
  Reveal,
} from "@/components/ui/reveal";

const SERVICES = [
  {
    title: "Product Strategy",
    description:
      "We dig into the why before touching the what. Research, positioning, and roadmap — so you build the right thing.",
    icon: "◆",
    accent: "var(--color-yellow)",
  },
  {
    title: "Interface Design",
    description:
      "Layouts that breathe, typography that speaks, interactions that feel intentional. No templates, ever.",
    icon: "○",
    accent: "var(--color-lilac)",
  },
  {
    title: "Engineering",
    description:
      "Clean, fast, maintainable code. We build with the frameworks you'll actually want to maintain in two years.",
    icon: "△",
    accent: "var(--color-yellow-dark)",
  },
  {
    title: "Brand Systems",
    description:
      "From naming to visual identity — a cohesive system that grows with you, not against you.",
    icon: "□",
    accent: "var(--color-lilac-dark)",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-body text-sm tracking-widest text-brown-muted uppercase">
            What we do
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Fewer things,
            <br />
            done exceptionally.
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid gap-5 sm:grid-cols-2" stagger={0.12}>
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerChildVariants}
              className="group relative overflow-hidden rounded-[20px] border border-brown-muted/10 bg-cream-dark/50 p-8 transition-colors duration-300 hover:bg-cream-dark md:p-10"
            >
              {/* Hover accent glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundColor: service.accent }}
              />

              <span
                className="mb-5 inline-block text-2xl"
                style={{ color: service.accent }}
              >
                {service.icon}
              </span>

              <h3 className="mb-3 font-heading text-xl font-bold text-ink">
                {service.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-brown-light">
                {service.description}
              </p>

              {/* Subtle bottom border accent on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: service.accent }}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
