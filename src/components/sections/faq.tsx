"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "¿Cómo funciona la web lista?",
    answer:
      "Partimos de una base que ya funciona. La adaptamos a tu marca, tu contenido y lo dejamos listo para usar. En pocos días ya puedes tener tu web online y tú mismo puedes editarla cuando quieras.",
  },
  {
    question: "¿Qué incluye la mensualidad?",
    answer:
      "Lo necesario para que tu web esté siempre activa y funcionando bien. Hosting, dominio, seguridad (SSL) y soporte cuando lo necesites. También incluye pequeños ajustes mensuales, por si algo cambia.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí. Sin contratos largos ni penalidades. Tu dominio sigue siendo tuyo y te llevas todo tu contenido.",
  },
  {
    question: "¿Me entregan el código?",
    answer:
      "No. Trabajamos sobre una base optimizada para que no tengas que preocuparte por lo técnico. Pero todo lo que es tuyo —textos, imágenes, contenido— te lo llevas sin problema.",
  },
  {
    question: "¿Puedo personalizar el diseño?",
    answer:
      "Sí. La estructura ya está pensada, pero todo lo demás se adapta a tu marca. No es una plantilla rígida. Es una base flexible.",
  },
  {
    question: "¿Cuánto tiempo toma?",
    answer:
      "Web lista: pocos días (48–72 horas). Desarrollo a medida: depende del proyecto y de lo que necesite construirse.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Lo básico: tu logo (si tienes), textos sobre tu negocio, imágenes o referencias. Y si no tienes todo claro, lo vemos contigo.",
  },
  {
    question: "¿Por qué trabajar con Turpial Labs?",
    answer:
      "Porque no hacemos webs por hacer. Pensamos lo que construimos y nos quedamos después de entregarlo. No trabajamos en volumen. Trabajamos en que funcione.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  delay,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <button
        onClick={onClick}
        className="w-full border-b border-brown-light/20 py-6 text-left transition-colors duration-200 hover:bg-brown-light/5"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="flex-1 font-heading text-base font-bold text-ink md:text-lg">
            {question}
          </h3>
          <ChevronDown
            size={20}
            className={`mt-1 flex-shrink-0 text-brown-light transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <p className="mt-4 max-w-3xl font-body leading-[1.75] text-brown-light">
            {answer}
          </p>
        )}
      </button>
    </Reveal>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        {/* Intro section */}
        <div className="mb-20">
          <Reveal>
            <p className="mb-4 font-body text-sm tracking-widest text-brown-muted uppercase">
              Dudas normales
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              Respuestas
              <br />
              <span className="text-brown-light">claras</span>
            </h2>
          </Reveal>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              delay={0.15 + index * 0.05}
            />
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 border-t border-brown-light/20 pt-16">
          <Reveal delay={0.55}>
            <p className="mb-8 max-w-2xl font-body leading-[1.75] text-brown-light">
              Si llegaste hasta aquí,
              <br />
              probablemente ya tienes una idea en mente.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-brown-light bg-brown-light/10 px-6 py-3 font-heading text-sm font-bold text-ink transition-all duration-200 hover:bg-brown-light/20"
            >
              → Conversemos
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
