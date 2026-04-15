import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

export const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const fontBody = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const fontAccent = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turpial Labs — Digital Product Studio",
  description:
    "We design and build digital products that feel alive. Strategy, design, and engineering under one roof.",

  /* SEO + sharing */
  openGraph: {
    title: "Turpial Labs — Digital Product Studio",
    description:
      "We design and build digital products that feel alive.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Turpial Labs",
    description:
      "Design, strategy, and engineering with a human touch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontAccent.variable} antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {children}
        <svg
          className="noise-svg"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </body>
    </html>
  );
}
