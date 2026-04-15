"use client";

import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Editorial left column */}
          <div className="md:col-span-5">
            <Reveal>
              <p className="mb-3 font-body text-sm tracking-widest text-brown-muted uppercase">
                Philosophy
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                Craft over
                <br />
                convention.
              </h2>
            </Reveal>
          </div>

          {/* Right column — editorial body text */}
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <p className="font-body text-lg leading-[1.75] text-brown-light">
                We're a small, intentional team. No account managers, no
                handoff walls, no decks that nobody reads. The people who think
                about the problem are the same people who solve it.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 font-body text-lg leading-[1.75] text-brown-light">
                Every project starts with listening — really listening — then
                moves through strategy, design, and code in tight,
                overlapping loops. We don't believe in phases. We believe in
                momentum.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex gap-12">
                <div>
                  <p className="font-heading text-3xl font-bold text-ink">4y</p>
                  <p className="mt-1 font-body text-sm text-brown-muted">
                    Building products
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-ink">
                    30+
                  </p>
                  <p className="mt-1 font-body text-sm text-brown-muted">
                    Products shipped
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-ink">
                    ∞
                  </p>
                  <p className="mt-1 font-body text-sm text-brown-muted">
                    Curiosity
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
