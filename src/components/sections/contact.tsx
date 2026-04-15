"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    thinking: "web-lista",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          thinking: "web-lista",
          message: "",
        });
        // You can add a success message here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              Conversemos
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-brown-light">
              Si tienes algo en mente,
              <br />
              aunque no esté del todo claro,
              <br />
              podemos verlo juntos.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 font-body text-sm text-brown-muted">
              Respondemos en menos de 24 horas.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-16 md:grid-cols-12">
          {/* Contact Info - Left */}
          <div className="md:col-span-4">
            <Reveal delay={0.25}>
              <div className="mb-12">
                <p className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-brown-muted">
                  Contacto directo
                </p>
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={0.3}>
              <div className="mb-8">
                <p className="mb-2 font-heading text-sm font-bold text-ink">
                  Email
                </p>
                <a
                  href="mailto:karla.agraz@gmail.com"
                  className="font-body text-brown-light hover:text-lilac-dark transition-colors"
                >
                  karla.agraz@gmail.com
                </a>
              </div>
            </Reveal>

            {/* WhatsApp */}
            <Reveal delay={0.35}>
              <div className="mb-8">
                <p className="mb-2 font-heading text-sm font-bold text-ink">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/51935854287"
                  className="font-body text-brown-light hover:text-lilac-dark transition-colors"
                >
                  +51 935 854 287
                </a>
              </div>
            </Reveal>

            {/* Optional note */}
            <Reveal delay={0.4}>
              <div className="mt-12 border-t border-brown-light/20 pt-8">
                <p className="font-body text-sm italic leading-relaxed text-brown-light">
                  Preferimos trabajar con pocos proyectos a la vez,
                  <br />
                  para hacerlos bien.
                  <br />
                  <br />
                  Si encaja, avanzamos.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form - Right */}
          <div className="md:col-span-8">
            <Reveal delay={0.3}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-heading text-sm font-bold text-ink"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-brown-light/30 bg-white px-4 py-3 font-body text-sm text-ink placeholder-brown-muted/50 transition-colors focus:border-lilac-dark focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-heading text-sm font-bold text-ink"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-brown-light/30 bg-white px-4 py-3 font-body text-sm text-ink placeholder-brown-muted/50 transition-colors focus:border-lilac-dark focus:outline-none"
                  />
                </div>

                {/* WhatsApp - Opcional */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="mb-2 block font-heading text-sm font-bold text-ink"
                  >
                    WhatsApp <span className="text-brown-muted">(opcional)</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="+51 999 999 999"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-brown-light/30 bg-white px-4 py-3 font-body text-sm text-ink placeholder-brown-muted/50 transition-colors focus:border-lilac-dark focus:outline-none"
                  />
                </div>

                {/* ¿En qué estás pensando? */}
                <div>
                  <label
                    htmlFor="thinking"
                    className="mb-2 block font-heading text-sm font-bold text-ink"
                  >
                    ¿En qué estás pensando?
                  </label>
                  <select
                    id="thinking"
                    name="thinking"
                    value={formData.thinking}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-brown-light/30 bg-white px-4 py-3 font-body text-sm text-ink transition-colors focus:border-lilac-dark focus:outline-none"
                  >
                    <option value="web-lista">Web lista para empezar</option>
                    <option value="custom">Algo más a medida</option>
                    <option value="unsure">No estoy seguro todavía</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-heading text-sm font-bold text-ink"
                  >
                    Mensaje
                  </label>
                  <p className="mb-3 font-body text-xs text-brown-muted">
                    Cuéntame un poco sobre tu idea,
                    <br />
                    qué necesitas o qué problema estás tratando de resolver.
                  </p>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-brown-light/30 bg-white px-4 py-3 font-body text-sm text-ink placeholder-brown-muted/50 transition-colors focus:border-lilac-dark focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-lilac px-6 py-3 font-heading text-sm font-bold text-ink transition-all hover:bg-lilac-dark hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    <span>→</span>
                  </button>
                </div>

                {/* Microcopy */}
                <p className="pt-4 font-body text-sm italic text-brown-light">
                  No necesitas tener todo claro.
                  <br />
                  Para eso estamos.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
