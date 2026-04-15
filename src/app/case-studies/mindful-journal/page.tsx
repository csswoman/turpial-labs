import { CaseStudy } from "@/components/sections/case-study";

const sections = [
  {
    heading: "The Context",
    content: `Most journaling apps treat writing like a productivity hack. But we knew better. Our client, a meditation teacher with a growing audience, wanted an app that felt less like a checklist and more like a conversation with yourself.

The problem was real: people loved the idea of journaling, but felt intimidated by blank pages. They'd download an app, write once, then forget it existed.`,
  },
  {
    heading: "The Problem",
    content: `We spent three weeks interviewing potential users. The insights were consistent:

• People felt pressure to write "meaningful" entries
• Apps with templates felt prescriptive and sterile
• Mobile-first meant writing was cramped and uncomfortable
• No one felt safe sharing their thoughts with cloud services

The real problem wasn't features. It was psychological friction.`,
  },
  {
    heading: "What We Did",
    content: (
      <div className="space-y-4">
        <p>
          We stripped everything back. No templates. No daily prompts. No
          community features. Just you and your thoughts.
        </p>
        <p>
          We designed for the experience of writing—not the finished product.
          Generous whitespace. Slow animations. Typography that felt like
          handwriting. We added soft haptic feedback on mobile to make writing
          feel tactile.
        </p>
        <p>
          The encryption was built in from day one. Everything stays on your
          device until you choose to back up. We made this visible in the design
          so users felt in control.
        </p>
        <p>
          For the web version, we added one feature: the ability to review
          patterns over time. Not tracking for productivity, but for reflection.
          "You write about this a lot." That was it.
        </p>
      </div>
    ),
  },
  {
    heading: "Results",
    content: `Six months after launch:

• 12,000 active users
• Average session: 18 minutes (vs. industry standard of 4)
• Users returning 5–6 days per week
• 94% retention at 30 days

But the real metric? Users started telling us their stories. One user kept a daily entry for 100 days straight—something that never happened with other apps she tried.`,
  },
  {
    heading: "What We Learned",
    content: `Restraint is a feature. Every button you don't add, every feature you don't build—that's a design decision that makes the product better.

We also learned that people care deeply about privacy, but only if you make it obvious. The moment we showed the lock icon and explained local storage, trust went up. Users needed to *see* that their data was safe.

Finally, we learned that journaling isn't about creating a perfect artifact. It's about the practice itself. The app is just the container. The real value is what happens in your head while you write.`,
  },
];

export default function MindfulJournal() {
  return (
    <CaseStudy
      title="Mindful Journal"
      subtitle="A reflection app that got people writing again by removing everything but the writing itself"
      year="2024"
      type="Mobile + Web"
      sections={sections}
      nextProject={{
        slug: "design-tokens",
        title: "Design System Overhaul",
      }}
    />
  );
}
