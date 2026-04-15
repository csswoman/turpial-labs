"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  priceInitial?: string;
  priceMonthly?: string;
  priceSingle?: string;
  time: string;
  includes?: string[];
  solves?: string[];
  note?: string;
  focus?: string;
  closing: string;
  accent: string;
};

const SERVICES: Service[] = [
  {
    number: "1",
    title: "Web lista",
    subtitle: "Web lista para empezar",
    description:
      "Una base sólida, bien pensada.\nLa adaptamos a tu negocio y puedes manejarla sin depender de nadie.\n\nPara cuando necesitas salir,\nno quedarte planificando.",
    priceInitial: "S/. 200",
    priceMonthly: "S/. 20/mes desde el segundo mes",
    time: "48–72 horas",
    includes: [
      "Estructura probada que ya funciona",
      "Adaptación a tu marca (colores, contenido, tono)",
      "Edición simple de textos e imágenes",
      "Integración con WhatsApp y formulario de contacto",
      "Dominio, hosting y SSL incluidos",
      "Detalle humano (tu diferencial)",
    ],
    note: "No es una plantilla que \"llenamos\".\nEs una base que ajustamos contigo.",
    closing:
      "En pocos días ya puedes compartirla,\nvalidar tu idea y empezar a moverte.",
    accent: "var(--color-yellow)",
  },
  {
    number: "2",
    title: "Desarrollo a medida",
    subtitle: "Hecho a tu forma",
    description:
      "Cuando lo que necesitas no existe todavía,\nlo construimos contigo.\n\nSin forzar tu negocio a adaptarse.\nLa herramienta se adapta a ti.",
    priceSingle: "Cotización según alcance",
    time: "Desde 2 semanas en adelante\n(según complejidad)",
    solves: [
      "Procesos manuales que te quitan tiempo",
      "Sistemas que no se integran entre sí",
      "Ideas que necesitan volverse producto",
    ],
    includes: [
      "Arquitectura pensada para crecer",
      "Desarrollo web o móvil",
      "Integraciones con APIs, pagos o sistemas existentes",
      "Documentación y soporte post-lanzamiento",
    ],
    focus:
      "Primero entendemos.\nDespués diseñamos.\nLuego construimos.\n\nEn ese orden.",
    closing:
      "No vendemos desarrollo por horas.\nConstruimos herramientas que te hacen avanzar.",
    accent: "var(--color-lilac)",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <Reveal>
          <p className="mb-3 font-body text-sm tracking-widest text-brown-muted uppercase">
            Servicios
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mb-8 max-w-[28ch] font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            No todos los proyectos empiezan igual.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-16 max-w-[55ch] space-y-3 font-body text-lg leading-relaxed text-brown-light md:text-xl">
            <p>Pero todos necesitan lo mismo:</p>
            <p className="font-semibold text-ink">
              claridad, intención y alguien que sepa lo que está haciendo.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT_EXPO,
                delay: index * 0.2,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-[24px] border border-brown-muted/10 bg-gradient-to-br from-cream-dark/50 to-cream-dark/30 p-8 md:p-12"
            >
              {/* Service Number */}
              <div className="mb-6 flex items-baseline gap-3">
                <span
                  className="font-heading text-5xl font-bold md:text-6xl"
                  style={{ color: service.accent }}
                >
                  {service.number}
                </span>
                <h3 className="font-heading text-2xl font-bold text-ink md:text-3xl">
                  {service.title}
                </h3>
              </div>

              {/* Service Subtitle */}
              <h4 className="mb-6 font-heading text-lg font-semibold text-brown">
                {service.subtitle}
              </h4>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Main Description */}
                <div className="md:col-span-2 space-y-6">
                  <p className="whitespace-pre-line font-body text-base leading-relaxed text-brown-light">
                    {service.description}
                  </p>

                  {/* What it includes or solves */}
                  <div>
                    <h5 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-brown-muted">
                      {service.solves ? "Qué resolvemos" : "Qué incluye"}
                    </h5>
                    <ul className="space-y-2">
                      {(service.solves || service.includes)?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-sm text-brown-light"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: service.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Special note or focus */}
                  {service.note && (
                    <div className="rounded-lg border-l-4 border-yellow bg-yellow/10 px-4 py-3">
                      <p className="whitespace-pre-line font-body text-sm text-brown-light">
                        {service.note}
                      </p>
                    </div>
                  )}

                  {service.focus && (
                    <div className="space-y-2 border-l-4 border-lilac pl-6 py-2">
                      <h5 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-brown-muted">
                        Enfoque (clave para diferenciarte)
                      </h5>
                      <p className="whitespace-pre-line font-body text-sm leading-relaxed text-brown-light">
                        {service.focus}
                      </p>
                    </div>
                  )}

                  {/* Closing message */}
                  <p className="whitespace-pre-line rounded-lg bg-ink/5 px-4 py-3 font-body text-sm text-brown-light">
                    {service.closing}
                  </p>
                </div>

                {/* Sidebar: Price & Time */}
                <div className="space-y-6 rounded-lg border border-brown-muted/10 bg-white p-6">
                  <div>
                    <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-brown-muted">
                      Precio
                    </p>
                    {service.priceInitial ? (
                      <>
                        <p className="font-heading text-lg font-bold text-ink">
                          {service.priceInitial}
                        </p>
                        <p className="font-body text-xs text-brown-light">
                          {service.priceMonthly}
                        </p>
                      </>
                    ) : (
                      <p className="font-heading text-base font-semibold text-ink">
                        {service.priceSingle}
                      </p>
                    )}
                  </div>

                  <div className="border-t border-brown-muted/10" />

                  <div>
                    <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-brown-muted">
                      Tiempo
                    </p>
                    <p className="whitespace-pre-line font-body text-sm text-brown-light">
                      {service.time}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 rounded-[24px] border border-brown-muted/20 bg-gradient-to-br from-cream-dark/70 to-cream-dark/50 p-8 text-center md:p-12"
        >
          <h3 className="mb-4 font-heading text-2xl font-bold text-ink md:text-3xl">
            No sabes cuál necesitas
          </h3>
          <p className="mb-6 font-body text-lg text-brown-light">
            Es normal.
          </p>
          <p className="mb-8 max-w-[50ch] mx-auto font-body text-base leading-relaxed text-brown-light">
            Algunas ideas empiezan simples y otras necesitan algo más profundo.
            <br />
            Lo vemos contigo.
          </p>
          <motion.a
            href="#contacto"
            className="group relative inline-flex rounded-full bg-ink px-9 py-4 font-heading text-base font-semibold text-cream shadow-[0_4px_0_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96, y: 2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Conversemos
            <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}