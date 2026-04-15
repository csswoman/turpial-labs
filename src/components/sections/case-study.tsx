import Link from "next/link";
import React from "react";

interface CaseStudySection {
  heading: string;
  content: string | React.ReactNode;
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  year: string;
  type: string;
  sections: CaseStudySection[];
  nextProject?: {
    slug: string;
    title: string;
  };
}

export function CaseStudy({
  title,
  subtitle,
  year,
  type,
  sections,
  nextProject,
}: CaseStudyProps) {
  return (
    <article className="container py-16 md:py-24">
      {/* Back Link */}
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-sm text-color-text-secondary hover:text-color-text-primary transition-colors mb-12"
      >
        <span>←</span>
        <span>Back to projects</span>
      </Link>

      {/* Hero Section */}
      <header className="mb-20 md:mb-32 max-w-2xl">
        <div className="mb-6">
          <div className="flex flex-col gap-2 mb-6">
            <span className="text-sm font-medium text-color-text-secondary">
              {type} • {year}
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-color-text-secondary leading-relaxed">
            {subtitle}
          </p>
        </div>
      </header>

      {/* Content Sections */}
      <div className="max-w-2xl">
        <div className="space-y-16 md:space-y-20">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-color-text-primary">
                {section.heading}
              </h2>
              <div className="text-base text-color-text-secondary leading-relaxed space-y-4">
                {typeof section.content === "string" ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-24 md:my-32 max-w-2xl h-px bg-color-border-subtle" />

      {/* Footer CTA */}
      <div className="max-w-2xl">
        <div className="pb-8">
          <p className="text-base text-color-text-secondary mb-8">
            Every project shapes how we think about design and engineering.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-color-cta text-color-ink font-medium rounded-sm hover:bg-color-cta-hover transition-colors"
          >
            Let's build something together
          </Link>
        </div>
      </div>

      {/* Next Project */}
      {nextProject && (
        <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-color-border-subtle max-w-2xl">
          <p className="text-sm font-medium text-color-text-secondary mb-4">
            Next project
          </p>
          <Link
            href={`/case-studies/${nextProject.slug}`}
            className="group"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-color-accent-strong transition-colors">
              {nextProject.title}
            </h3>
          </Link>
        </div>
      )}
    </article>
  );
}
