import Link from "next/link";

const projects = [
  {
    slug: "mindful-journal",
    title: "Mindful Journal",
    subtitle: "A reflection app that got people writing again",
    year: "2024",
    type: "Mobile + Web",
  },
  {
    slug: "design-tokens",
    title: "Design System Overhaul",
    subtitle: "Scaling design across a growing engineering team",
    year: "2023",
    type: "Design System",
  },
];

export default function CaseStudiesIndex() {
  return (
    <div className="container py-24 md:py-32">
      {/* Header */}
      <div className="mb-20 md:mb-32">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Case Studies
        </h1>
        <p className="text-lg text-color-text-secondary max-w-2xl">
          Stories of digital products we've designed and built. Each one taught
          us something new.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16 md:space-y-24">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/case-studies/${project.slug}`}
            className="group block"
          >
            <div className="pb-8 border-b border-color-border-subtle transition-all duration-300">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h2 className="font-heading text-3xl md:text-4xl font-bold group-hover:text-color-accent-strong transition-colors">
                  {project.title}
                </h2>
                <span className="text-sm font-medium text-color-text-secondary whitespace-nowrap">
                  {project.year}
                </span>
              </div>
              <p className="text-base text-color-text-secondary mb-3">
                {project.subtitle}
              </p>
              <div className="text-sm text-color-text-secondary">
                {project.type}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA at bottom */}
      <div className="mt-32 text-center">
        <p className="text-color-text-secondary mb-6">
          Interested in working together?
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-3 bg-color-cta text-color-ink font-medium rounded-sm hover:bg-color-cta-hover transition-colors"
        >
          Let's talk
        </Link>
      </div>
    </div>
  );
}
