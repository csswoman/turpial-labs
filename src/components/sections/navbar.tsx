"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled
          ? "rgba(250, 247, 242, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-ink"
        >
          turpial<span className="text-yellow-dark">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-brown-light transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-[14px] bg-ink px-5 py-2.5 font-heading text-sm font-semibold text-cream transition-all duration-200 hover:bg-brown hover:shadow-lg hover:shadow-yellow/20"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
