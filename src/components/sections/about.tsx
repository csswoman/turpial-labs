"use client";

import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Intro section */}
        <div className="mb-20">
          <Reveal>
            <p className="mb-4 font-body text-sm tracking-widest text-brown-muted uppercase">
              ¿Quién está detrás?
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              Turpial Labs no es una agencia.
              <br />
              <span className="text-brown-light">
                Es una forma de construir productos digitales
                <br />
                con más intención y menos ruido.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Main content grid */}
        <div className="grid gap-16 md:grid-cols-12">
          {/* Bloque personal */}
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <div className="border-l-2 border-brown-light pl-6">
                <p className="mb-3 font-heading text-lg font-bold text-ink">
                  Detrás de esto estoy yo,
                  <br />
                  <span className="text-brown-light">Karla.</span>
                </p>
                <p className="font-body text-sm text-brown-muted">
                  UX Engineer.
                  <br />
                  Pero más que eso, alguien que diseña y también construye.
                </p>
              </div>
            </Reveal>

            {/* Qué te diferencia */}
            <Reveal delay={0.3}>
              <div className="mt-10">
                <p className="mb-4 font-heading text-base font-bold text-ink">
                  Qué te diferencia
                </p>
                <p className="max-w-sm font-body leading-[1.75] text-brown-light">
                  Trabajo entre dos mundos: el diseño y el código.
                  <br />
                  <br />
                  Eso significa que lo que se piensa sí se puede construir bien.
                  <br />
                  <br />
                  Y lo que se construye sí se siente bien al usarlo.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Columna derecha */}
          <div className="md:col-span-6 md:col-start-7">
            {/* Experiencia */}
            <Reveal delay={0.25}>
              <div className="mb-10">
                <p className="mb-3 font-heading text-base font-bold text-ink">
                  Experiencia
                </p>
                <p className="max-w-sm font-body leading-[1.75] text-brown-light">
                  He trabajado desarrollando interfaces reales, no solo prototipos.
                  <br />
                  <br />
                  Sistemas que necesitan ser rápidos, claros y funcionar sin fricción.
                  <br />
                  <br />
                  Con equipos donde la precisión es importante: interfaces pixel-perfect, sistemas escalables y experiencias centradas en el usuario.
                </p>
              </div>
            </Reveal>

            {/* Forma de trabajar */}
            <Reveal delay={0.35}>
              <div className="mb-10 rounded-lg border border-brown-light/20 bg-brown-light/5 p-6">
                <p className="mb-4 font-heading text-base font-bold text-ink">
                  Forma de trabajar
                </p>
                <p className="font-body text-sm leading-[1.75] text-brown-light">
                  Me importa que las cosas:
                  <br />
                  • se entiendan
                  <br />
                  • se sientan bien
                  <br />
                  • y funcionen sin esfuerzo
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.45}>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="font-heading text-3xl font-bold text-ink">
                    4+
                  </p>
                  <p className="mt-1 font-body text-xs text-brown-muted">
                    años construyendo
                  </p>
                </div>

                <div>
                  <p className="font-heading text-3xl font-bold text-ink">
                    ∞
                  </p>
                  <p className="mt-1 font-body text-xs text-brown-muted">
                    productos que importan
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-sm font-body italic leading-[1.75] text-brown-light">
                No trabajo por volumen.
                <br />
                Trabajo para que cada proyecto tenga sentido.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}