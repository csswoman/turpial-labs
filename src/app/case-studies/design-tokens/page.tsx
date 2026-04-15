import { CaseStudy } from "@/components/sections/case-study";

const sections = [
  {
    heading: "The Context",
    content: `Our client was a FinTech startup that had grown from 15 to 75 engineers in 18 months. They had incredible product momentum, but their design system was crumbling.

Design decisions lived in Figma. Implementation decisions lived in code. And they never talked to each other. A button built in March didn't match a button built in September. Colors drifted. Spacing was inconsistent. Every feature took longer than it should.`,
  },
  {
    heading: "The Problem",
    content: `We audited the codebase. Here's what we found:

• 47 different button variants across the product
• Text sizes that ranged from 12px to 18px for the same semantic role
• Three separate color palettes
• 12 different border-radius values
• No shared vocabulary between design and engineering

The chaos wasn't malicious. The company was moving fast. But now they were moving *slowly* because of fragmentation.`,
  },
  {
    heading: "What We Did",
    content: (
      <div className="space-y-4">
        <p>
          We didn't build a component library first. We built a token system.
        </p>
        <p>
          We spent two weeks interviewing designers and engineers. What did they
          actually care about? What caused the most friction? The answer: they
          needed to speak the same language.
        </p>
        <p>
          We created three layers:
        </p>
        <div className="pl-4 space-y-2 text-color-text-secondary">
          <p>
            <strong>Primitive tokens</strong> — raw values (colors, sizes,
            spacing)
          </p>
          <p>
            <strong>Semantic tokens</strong> — intent-based abstractions ("text
            on dark," "interactive hover state")
          </p>
          <p>
            <strong>Component tokens</strong> — specific implementations (button
            states, form input styles)
          </p>
        </div>
        <p>
          Then we built the tooling. Design tokens exported from Figma straight
          into code. One source of truth. No copy-paste. No drift.
        </p>
        <p>
          The migration was methodical. We created a conversion guide for
          engineers. We didn't force adoption—we made adoption easier than
          staying on the old system.
        </p>
      </div>
    ),
  },
  {
    heading: "Results",
    content: `After three months of work:

• All 75 engineers using the token system
• 40% reduction in design QA cycles
• New features shipped 35% faster on average
• Consistency improved from 62% to 98%

But the real win? Designers and engineers could finally collaborate without friction. A designer could change a color in Figma, and it would automatically update everywhere in code.`,
  },
  {
    heading: "What We Learned",
    content: `Systems work when you align around semantics, not just aesthetics. A color name like "primary-blue" is useless. A color named "interactive-hover-dark" solves real problems.

We also learned that tooling matters. The best system in the world fails if getting the values into code is a pain. Automation isn't optional—it's foundational.

Finally, we learned that adoption happens through education and empathy. We didn't tell engineers "use this new system." We showed them how it would make their work easier. That mattered more than any mandate.`,
  },
];

export default function DesignTokens() {
  return (
    <CaseStudy
      title="Design System Overhaul"
      subtitle="Scaling design across a growing engineering team by building a shared vocabulary"
      year="2023"
      type="Design System"
      sections={sections}
      nextProject={{
        slug: "mindful-journal",
        title: "Mindful Journal",
      }}
    />
  );
}
