"use client";

import { useRef, useState } from "react";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import ScrollFadeBackground from "@/components/ScrollFadeBackground";

/* ─────────────────────────  TOKENS  ───────────────────────── */
const T = {
  navy: "#0f1c2e",
  slate: "#2D3340",
  cream: "#f5f4f0",
  cloud: "#F2F4F7",
  cobalt: "#004290",   // "people"
  evergreen: "#00685E", // "funded"
  berry: "#A73B44",    // "connected"
  fog: "#85A3C8",
};

/* ─────────────────────────  COPY BLOCKS DATA  ───────────────────────── */

type CopyBlock = {
  num: string;
  title: string;
  type: string;
  meta: React.ReactNode;
  // Rendered preview (rich JSX with italics/strong)
  preview: React.ReactNode;
  // Plain text for clipboard
  copyText: string;
  // Layout span: 6 = half-width (top row), 4 = third-width (bottom row)
  span: 6 | 4;
  // Optional variant for preview styling
  variant?: "default" | "tagline" | "stat";
};

const copyBlocks: CopyBlock[] = [
  {
    num: "01",
    title: "Social bio",
    type: "160 chars · Social",
    meta: (
      <>
        Instagram, LinkedIn, <em>X bio</em>
      </>
    ),
    preview: (
      <>
        Free, confidential business advising for Northern California.{" "}
        <em>$2.8B raised. 42,000+ jobs created.</em> Your business, better.
      </>
    ),
    copyText:
      "Free, confidential business advising for Northern California. $2.8B raised. 42,000+ jobs created. Your business, better.",
    span: 6,
  },
  {
    num: "02",
    title: "Elevator pitch",
    type: "Long form · All channels",
    meta: (
      <>
        Board decks, <em>grant applications</em>
      </>
    ),
    preview: (
      <>
        NorCal SBDC provides free, expert business advising to entrepreneurs
        across Northern California. Since 1980, we&rsquo;ve helped our clients
        raise <em>$2.8 billion</em> in capital, create over <em>42,000 jobs</em>
        , and build businesses that matter.
      </>
    ),
    copyText:
      "NorCal SBDC provides free, expert business advising to entrepreneurs across Northern California. Since 1980, we've helped our clients raise $2.8 billion in capital, create over 42,000 jobs, and build businesses that matter.",
    span: 6,
  },
  {
    num: "03",
    title: "Impact stats",
    type: "Data · Slides",
    meta: (
      <>
        <em>Headline numbers</em>
      </>
    ),
    preview: (
      <>
        <strong>$2.8B</strong> capital raised
        <br />
        <strong>42K+</strong> jobs created
        <br />
        <strong>14</strong> centers
        <br />
        <strong>36</strong> counties served
      </>
    ),
    copyText:
      "$2.8B capital raised · 42,000+ jobs created · 14 centers · 36 counties served",
    span: 4,
    variant: "stat",
  },
  {
    num: "04",
    title: "Tagline",
    type: "Headline · Closer",
    meta: (
      <>
        Sign-off, <em>page closers</em>
      </>
    ),
    preview: (
      <>
        Your business, <em>better.</em>
      </>
    ),
    copyText: "Your business, better.",
    span: 4,
    variant: "tagline",
  },
  {
    num: "05",
    title: "Value prop",
    type: "Short · Web",
    meta: (
      <>
        <em>Hero sections</em>
      </>
    ),
    preview: (
      <>
        Advisors who show up, ask the right questions, and stay through the{" "}
        <em>messy middle.</em>
      </>
    ),
    copyText:
      "Advisors who show up, ask the right questions, and stay through the messy middle.",
    span: 4,
  },
];

/* ─────────────────────────  DESIGN TEMPLATES DATA  ───────────────────────── */

type TemplateCategory = "social" | "email" | "print" | "slides";
type TemplateAspect = "square" | "story" | "landscape" | "wide" | "letter" | "poster";
type TemplatePillar = "people" | "funded" | "connected" | "navy";

type Template = {
  pillar: TemplatePillar;
  category: TemplateCategory;
  aspect: TemplateAspect;
  pillarLabel: string;
  duration: string;
  name: React.ReactNode;
  specs: string;
  footLeft: React.ReactNode;
  canvaUrl: string;
  mock: {
    bg: "navy" | "cream" | "cloud" | "people" | "funded" | "connected";
    eyebrow: string;
    eyebrowColor?: string;
    headline: React.ReactNode;
    footLeft: string;
    footRight: string;
    centerHeadline?: boolean;
    customHeadlineSize?: string;
    customMock?: React.ReactNode;
  };
};

const templates: Template[] = [
  {
    pillar: "connected",
    category: "social",
    aspect: "square",
    pillarLabel: "Connected · Instagram",
    duration: "~5 min",
    name: (
      <>
        Success story <em>carousel.</em>
      </>
    ),
    specs: "1080 × 1080 · 4 slides · Editable text",
    footLeft: (
      <>
        Feature a client&rsquo;s <em>win</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "navy",
      eyebrow: "Success Story",
      eyebrowColor: "#F2C9CD",
      headline: (
        <>
          Your business,
          <br />
          <em>better.</em>
        </>
      ),
      footLeft: "@NorCalSBDC",
      footRight: "01 / 04",
    },
  },
  {
    pillar: "funded",
    category: "social",
    aspect: "story",
    pillarLabel: "Funded · Story",
    duration: "~3 min",
    name: (
      <>
        Event <em>promo.</em>
      </>
    ),
    specs: "1080 × 1920 · 9:16 · Single frame",
    footLeft: (
      <>
        Drive <em>workshop sign-ups</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "funded",
      eyebrow: "New Workshop",
      headline: (
        <>
          Fund your
          <br />
          next <em>move.</em>
        </>
      ),
      footLeft: "Swipe up",
      footRight: "↑",
    },
  },
  {
    pillar: "navy",
    category: "slides",
    aspect: "landscape",
    pillarLabel: "Board · Presentation",
    duration: "~20 min",
    name: (
      <>
        Board deck <em>master.</em>
      </>
    ),
    specs: "16:9 · 18 slides · Proxima Sera + Nova",
    footLeft: (
      <>
        Quarterly reviews, <em>funder meetings</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "cream",
      eyebrow: "Chapter 01 · Introduction",
      eyebrowColor: T.slate,
      headline: (
        <>
          Building businesses
          <br />
          that <em>matter.</em>
        </>
      ),
      footLeft: "NorCal SBDC",
      footRight: "01 / 18",
    },
  },
  {
    pillar: "navy",
    category: "email",
    aspect: "wide",
    pillarLabel: "Newsletter · Header",
    duration: "~5 min",
    name: (
      <>
        Email header <em>banner.</em>
      </>
    ),
    specs: "1500 × 500 · Resend · Responsive",
    footLeft: (
      <>
        Top of <em>every newsletter</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "cloud",
      eyebrow: "Monthly Newsletter",
      eyebrowColor: T.cobalt,
      headline: (
        <>
          The <em>messy middle.</em>
        </>
      ),
      customHeadlineSize: "clamp(22px, 2.8vw, 36px)",
      footLeft: "Issue 14",
      footRight: "April 2026",
    },
  },
  {
    pillar: "people",
    category: "print",
    aspect: "letter",
    pillarLabel: "People · Print",
    duration: "~8 min",
    name: (
      <>
        Event <em>flyer.</em>
      </>
    ),
    specs: "8.5 × 11 in · Print-ready PDF",
    footLeft: (
      <>
        Workshops &amp; <em>info sessions</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "cream",
      eyebrow: "Free Workshop",
      eyebrowColor: T.cobalt,
      headline: (
        <>
          Start your
          <br />
          business <em>right.</em>
        </>
      ),
      centerHeadline: true,
      footLeft: "May 13 · 6pm",
      footRight: "RSVP",
    },
  },
  {
    pillar: "connected",
    category: "social",
    aspect: "square",
    pillarLabel: "Connected · Quote",
    duration: "~3 min",
    name: (
      <>
        Client quote <em>card.</em>
      </>
    ),
    specs: "1080 × 1080 · Testimonial layout",
    footLeft: (
      <>
        Share a <em>client&rsquo;s words</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "cream",
      eyebrow: "Client Voice",
      eyebrowColor: T.berry,
      headline: (
        <>
          &ldquo;They stayed through the <em>messy middle.</em>&rdquo;
        </>
      ),
      customHeadlineSize: "clamp(18px, 2.5vw, 28px)",
      footLeft: "Dick Taylor",
      footRight: "Arcata, CA",
    },
  },
  {
    pillar: "funded",
    category: "print",
    aspect: "poster",
    pillarLabel: "Funded · Poster",
    duration: "~10 min",
    name: (
      <>
        Impact <em>poster.</em>
      </>
    ),
    specs: "18 × 24 in · Event display",
    footLeft: (
      <>
        Conferences &amp; <em>events</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "navy",
      eyebrow: "2026 Impact",
      eyebrowColor: "#9EDDC9",
      headline: (
        <>
          <div style={{ fontSize: "clamp(44px, 6vw, 68px)", lineHeight: 0.88 }}>$2.8B</div>
          <div
            style={{
              fontFamily: "proxima-sera, var(--serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.4vw, 17px)",
              marginTop: 10,
              opacity: 0.85,
            }}
          >
            raised by our clients
          </div>
        </>
      ),
      centerHeadline: true,
      footLeft: "NorCal SBDC",
      footRight: "2026",
    },
  },
  {
    pillar: "people",
    category: "social",
    aspect: "wide",
    pillarLabel: "People · Profile",
    duration: "~4 min",
    name: (
      <>
        LinkedIn <em>banner.</em>
      </>
    ),
    specs: "1584 × 396 · Advisor profile",
    footLeft: (
      <>
        Every <em>advisor profile</em>
      </>
    ),
    canvaUrl: "https://www.canva.com/",
    mock: {
      bg: "people",
      eyebrow: "LinkedIn · Advisor",
      headline: (
        <>
          One business,
          <br />
          <em>one relationship at a time.</em>
        </>
      ),
      customHeadlineSize: "clamp(22px, 2.8vw, 36px)",
      footLeft: "NorCal SBDC Network",
      footRight: "norcalsbdc.org",
    },
  },
];

/* ─────────────────────────  HELPERS  ───────────────────────── */

const PILLAR_COLOR: Record<TemplatePillar, string> = {
  people: T.cobalt,
  funded: T.evergreen,
  connected: T.berry,
  navy: T.navy,
};

const MOCK_BG: Record<NonNullable<Template["mock"]["bg"]>, { bg: string; color: string }> = {
  navy: { bg: T.navy, color: T.cream },
  cream: { bg: T.cream, color: T.navy },
  cloud: { bg: T.cloud, color: T.navy },
  people: { bg: T.cobalt, color: T.cream },
  funded: { bg: T.evergreen, color: T.cream },
  connected: { bg: T.berry, color: T.cream },
};

const ASPECT_STYLE: Record<TemplateAspect, { aspectRatio: string; spanClass: string }> = {
  square: { aspectRatio: "1 / 1", spanClass: "md:col-span-4" },
  story: { aspectRatio: "9 / 16", spanClass: "md:col-span-3" },
  landscape: { aspectRatio: "16 / 9", spanClass: "md:col-span-6" },
  wide: { aspectRatio: "3 / 1", spanClass: "md:col-span-8" },
  letter: { aspectRatio: "8.5 / 11", spanClass: "md:col-span-4" },
  poster: { aspectRatio: "2 / 3", spanClass: "md:col-span-4" },
};

const HEADLINE_SIZE: Record<TemplateAspect, string> = {
  square: "clamp(22px, 3.4vw, 40px)",
  story: "clamp(18px, 2.4vw, 30px)",
  landscape: "clamp(24px, 4vw, 50px)",
  wide: "clamp(20px, 2.6vw, 34px)",
  letter: "clamp(22px, 3vw, 38px)",
  poster: "clamp(22px, 2.8vw, 36px)",
};

/* ─────────────────────────  PAGE  ───────────────────────── */

type FilterKey = "all" | TemplateCategory;
const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "social", label: "Social" },
  { key: "email", label: "Email" },
  { key: "print", label: "Print" },
  { key: "slides", label: "Slides" },
];

export default function TemplatesPage() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const designSectionRef = useRef<HTMLDivElement | null>(null);

  const visibleTemplates = templates.filter(
    (t) => filter === "all" || t.category === filter,
  );

  return (
    <>
      {/* ── FIXED BACKDROP — Evergreen gradient + film grain.
         Mirrors the Content page treatment, in the evergreen register. ── */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: "linear-gradient(180deg, #3E8A80 0%, #00685E 45%, #00453E 100%)",
        }}
      >
        {/* Layer 1 — fine paper tooth */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.22, mixBlendMode: "soft-light" }}
        >
          <filter id="tpl-grain-fine">
            <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="3" stitchTiles="stitch" seed="5" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.2" intercept="-0.1" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#tpl-grain-fine)" />
        </svg>
        {/* Layer 2 — mid grain */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.14, mixBlendMode: "overlay" }}
        >
          <filter id="tpl-grain-mid">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" stitchTiles="stitch" seed="11" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#tpl-grain-mid)" />
        </svg>
        {/* Layer 3 — coarse, organic unevenness */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.09, mixBlendMode: "multiply" }}
        >
          <filter id="tpl-grain-coarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.22" numOctaves="1" stitchTiles="stitch" seed="19" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#tpl-grain-coarse)" />
        </svg>
        {/* Vignette for richer edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,40,35,0.5) 100%)",
          }}
        />
      </div>

      {/* ── Scroll-linked cream wash — fades in as user enters the Design
         Templates grid so the card gallery reads against a neutral canvas. ── */}
      <ScrollFadeBackground
        targetRef={designSectionRef}
        color="#f5f4f0"
        fadeInPx={600}
        zIndex={1}
      />

      {/* ── Content wrapper above the fixed backdrop ── */}
      <div className="relative" style={{ zIndex: 2 }}>
        <InteriorHero
          chapterNumber="09"
          category="tools"
          title="Templates"
          subtitle="Everything you need to sound like us and look like us. Approved copy blocks to paste, design templates to open and make your own."
          bgColor="transparent"
          showRule={false}
        />

        {/* ═══ SECTION 01 · COPY BLOCKS ═══ */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 pt-10 pb-20 md:pb-28">
            {/* Section header */}
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end mb-10 md:mb-14">
              <div>
                <div className="inline-flex items-center gap-[10px] mb-5">
                  <span
                    aria-hidden
                    className="inline-block"
                    style={{ width: 28, height: 2, background: T.cream }}
                  />
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "var(--sans-label)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      color: T.cream,
                    }}
                  >
                    Copy Blocks
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "var(--sans-label)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      color: "rgba(245,244,240,0.6)",
                    }}
                  >
                    Paste &amp; Go
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "proxima-sera, var(--serif)",
                    fontWeight: 300,
                    fontSize: "clamp(40px, 5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.028em",
                    color: T.cream,
                  }}
                >
                  Words,{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 300, color: T.cream }}>
                    ready to paste.
                  </em>
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontWeight: 400,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "rgba(245,244,240,0.9)",
                  maxWidth: 440,
                }}
              >
                Short, approved language for bios, pitches, and outreach. Click
                copy, paste anywhere, customize to the moment.
              </p>
            </div>

            {/* Copy grid — cream panel containing the cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-12"
              style={{
                backgroundColor: T.cream,
                border: "1px solid rgba(15,28,46,0.12)",
              }}
            >
              {copyBlocks.map((block, i) => {
                const isSpan6 = block.span === 6;
                const span6Index = copyBlocks
                  .slice(0, i + 1)
                  .filter((b) => b.span === 6).length; // 1 or 2 for span-6 rows
                const isLastInRowSpan6 = isSpan6 && span6Index === 2;
                const span4Index = copyBlocks
                  .slice(0, i + 1)
                  .filter((b) => b.span === 4).length;
                const isLastInRowSpan4 = !isSpan6 && span4Index === 3;
                return (
                  <article
                    key={block.num}
                    className={`${isSpan6 ? "md:col-span-6" : "md:col-span-4"} flex flex-col p-8 md:p-10`}
                    style={{
                      borderRight:
                        !isLastInRowSpan6 && !isLastInRowSpan4
                          ? "1px solid rgba(15,28,46,0.12)"
                          : "none",
                      borderTop: isSpan6
                        ? "none"
                        : "1px solid rgba(15,28,46,0.12)",
                      minHeight: 300,
                    }}
                  >
                    <header
                      className="flex justify-between items-baseline mb-6 pb-4"
                      style={{ borderBottom: "1px solid rgba(15,28,46,0.1)" }}
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontSize: 22,
                            color: "rgba(15,28,46,0.3)",
                            letterSpacing: "-0.02em",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          {block.num}
                        </span>
                        <h3
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontWeight: 400,
                            fontSize: 22,
                            letterSpacing: "-0.018em",
                            color: T.navy,
                            lineHeight: 1.1,
                          }}
                        >
                          {block.title}
                        </h3>
                      </div>
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: "var(--sans-label)",
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: "0.22em",
                          color: "rgba(45,51,64,0.6)",
                        }}
                      >
                        {block.type}
                      </span>
                    </header>

                    <div className="flex-1 flex flex-col gap-4 mb-6">
                      <p
                        style={{
                          fontFamily: "proxima-sera, var(--serif)",
                          fontWeight: 400,
                          fontSize:
                            block.variant === "tagline"
                              ? 32
                              : block.variant === "stat"
                                ? 15
                                : 17,
                          lineHeight:
                            block.variant === "tagline"
                              ? 1
                              : block.variant === "stat"
                                ? 1.8
                                : 1.5,
                          letterSpacing:
                            block.variant === "tagline" ? "-0.02em" : "-0.005em",
                          color: T.navy,
                          flex: 1,
                        }}
                      >
                        {block.preview}
                      </p>
                    </div>

                    <footer
                      className="flex justify-between items-center gap-4 pt-4"
                      style={{ borderTop: "1px dashed rgba(15,28,46,0.15)" }}
                    >
                      <span
                        style={{
                          fontFamily: "proxima-sera, var(--serif)",
                          fontStyle: "italic",
                          fontWeight: 300,
                          fontSize: 13,
                          color: "rgba(45,51,64,0.8)",
                        }}
                      >
                        {block.meta}
                      </span>
                      <CopyButton text={block.copyText} />
                    </footer>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 02 · DESIGN TEMPLATES ═══ */}
        <section
          ref={designSectionRef}
          className="relative overflow-hidden"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28">
            {/* Section header */}
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-end mb-10 md:mb-12">
              <div>
                <div className="inline-flex items-center gap-[10px] mb-5">
                  <span
                    aria-hidden
                    className="inline-block"
                    style={{ width: 28, height: 2, background: T.cobalt }}
                  />
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "var(--sans-label)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      color: T.cobalt,
                    }}
                  >
                    Design Templates
                  </span>
                  <span
                    className="uppercase"
                    style={{
                      fontFamily: "var(--sans-label)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      color: "rgba(45,51,64,0.6)",
                    }}
                  >
                    Canva · Ready
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "proxima-sera, var(--serif)",
                    fontWeight: 300,
                    fontSize: "clamp(40px, 5vw, 64px)",
                    lineHeight: 1,
                    letterSpacing: "-0.028em",
                    color: T.navy,
                  }}
                >
                  Designs,{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 300, color: T.cobalt }}>
                    ready to open.
                  </em>
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontWeight: 400,
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: T.slate,
                  maxWidth: 440,
                }}
              >
                Pre-built Canva templates for social, email, print, and slides.
                Open, duplicate, customize — ship in minutes, not hours.
              </p>
            </div>

            {/* Filter row */}
            <div
              className="flex justify-between items-center gap-8 py-6 mb-6 flex-wrap"
              style={{ borderBottom: "1px solid rgba(15,28,46,0.15)" }}
            >
              <div className="flex gap-1 flex-wrap">
                {FILTERS.map((f) => {
                  const active = filter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setFilter(f.key)}
                      className="uppercase transition-all duration-200"
                      style={{
                        fontFamily: "var(--sans-label)",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        padding: "10px 18px",
                        background: active ? T.navy : "transparent",
                        border: `1px solid ${active ? T.navy : "rgba(15,28,46,0.2)"}`,
                        color: active ? T.cream : T.slate,
                        cursor: "pointer",
                      }}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
              <div
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: 17,
                  color: T.slate,
                }}
              >
                <strong
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: T.navy,
                    fontVariantNumeric: "tabular-nums",
                    marginRight: 6,
                  }}
                >
                  {visibleTemplates.length}
                </strong>
                templates <em>available</em>
              </div>
            </div>

            {/* Templates grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {visibleTemplates.map((t, i) => {
                const cardColor = PILLAR_COLOR[t.pillar];
                const aspectInfo = ASPECT_STYLE[t.aspect];
                const mockBg = MOCK_BG[t.mock.bg];
                const headlineSize =
                  t.mock.customHeadlineSize ?? HEADLINE_SIZE[t.aspect];
                return (
                  <a
                    key={`${t.name?.toString()}-${i}`}
                    href={t.canvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`tpl-card group col-span-1 ${aspectInfo.spanClass} relative flex flex-col no-underline overflow-hidden transition-all duration-300`}
                    style={{
                      backgroundColor: T.cream,
                      border: "1px solid rgba(15,28,46,0.12)",
                      color: "inherit",
                    }}
                  >
                    {/* Top color keyline */}
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 right-0"
                      style={{ height: 3, background: cardColor, zIndex: 2 }}
                    />

                    {/* Mock preview */}
                    <div
                      className="relative w-full overflow-hidden"
                      style={{
                        aspectRatio: aspectInfo.aspectRatio,
                        background: T.cloud,
                        borderBottom: "1px solid rgba(15,28,46,0.08)",
                      }}
                    >
                      <div
                        className="absolute inset-0 flex flex-col justify-between"
                        style={{
                          padding: "9%",
                          background: mockBg.bg,
                          color: mockBg.color,
                        }}
                      >
                        <div
                          className="uppercase inline-flex items-center gap-2"
                          style={{
                            fontFamily: "var(--sans-label)",
                            fontWeight: 600,
                            fontSize: "clamp(8px, 0.85vw, 10px)",
                            letterSpacing: "0.22em",
                            opacity: 0.85,
                            color: t.mock.eyebrowColor ?? mockBg.color,
                          }}
                        >
                          <span
                            aria-hidden
                            style={{
                              width: 18,
                              height: 1.5,
                              background: "currentColor",
                              opacity: 0.6,
                              display: "inline-block",
                            }}
                          />
                          {t.mock.eyebrow}
                        </div>
                        {t.mock.centerHeadline ? (
                          <div className="flex-1 flex items-center">
                            <div
                              style={{
                                fontFamily: "proxima-sera, var(--serif)",
                                fontWeight: 300,
                                letterSpacing: "-0.025em",
                                lineHeight: 0.95,
                                fontSize: headlineSize,
                              }}
                            >
                              {t.mock.headline}
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{
                              fontFamily: "proxima-sera, var(--serif)",
                              fontWeight: 300,
                              letterSpacing: "-0.025em",
                              lineHeight: 0.95,
                              fontSize: headlineSize,
                            }}
                          >
                            {t.mock.headline}
                          </div>
                        )}
                        <div
                          className="flex justify-between items-end uppercase"
                          style={{
                            fontFamily: "var(--sans-label)",
                            fontWeight: 600,
                            fontSize: "clamp(8px, 0.8vw, 10px)",
                            letterSpacing: "0.22em",
                            opacity: 0.75,
                          }}
                        >
                          <span>{t.mock.footLeft}</span>
                          <span>{t.mock.footRight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 flex flex-col gap-3 px-7 pt-6 pb-5">
                      <div
                        className="flex justify-between items-baseline gap-3 pb-3"
                        style={{ borderBottom: "1px solid rgba(15,28,46,0.1)" }}
                      >
                        <span
                          className="uppercase"
                          style={{
                            fontFamily: "var(--sans-label)",
                            fontSize: 9,
                            fontWeight: 600,
                            letterSpacing: "0.22em",
                            color: cardColor,
                          }}
                        >
                          {t.pillarLabel}
                        </span>
                        <span
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontSize: 13,
                            color: "rgba(45,51,64,0.7)",
                          }}
                        >
                          {t.duration}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "proxima-sera, var(--serif)",
                          fontWeight: 400,
                          fontSize: 24,
                          lineHeight: 1.1,
                          letterSpacing: "-0.015em",
                          color: T.navy,
                        }}
                      >
                        {t.name}
                      </h3>
                      <div
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: 12,
                          lineHeight: 1.6,
                          color: T.slate,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {t.specs}
                      </div>
                    </div>

                    {/* Foot */}
                    <div
                      className="flex justify-between items-center px-7 py-3.5"
                      style={{
                        borderTop: "1px solid rgba(15,28,46,0.08)",
                        fontFamily: "proxima-sera, var(--serif)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: 13,
                        color: "rgba(45,51,64,0.8)",
                      }}
                    >
                      <span>{t.footLeft}</span>
                      <span
                        className="uppercase"
                        style={{
                          fontFamily: "var(--sans-label)",
                          fontStyle: "normal",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.18em",
                          color: cardColor,
                        }}
                      >
                        Open in Canva{" "}
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          ↗
                        </span>
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Request banner */}
            <div
              className="mt-14 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-start px-8 md:px-12 py-10 md:py-11"
              style={{ backgroundColor: T.navy, color: T.cream }}
            >
              <div
                className="uppercase hidden md:flex items-center pr-3"
                style={{
                  fontFamily: "var(--sans-label)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  color: T.fog,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                  alignSelf: "stretch",
                }}
              >
                Request a template
              </div>
              <div
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontWeight: 400,
                  fontSize: 20,
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                  color: T.cream,
                  maxWidth: "56ch",
                }}
              >
                Don&rsquo;t see what you need? Request a custom template and
                we&rsquo;ll build it, approve it, and{" "}
                <em>add it to the kit.</em> Turnaround typically one to two weeks.
              </div>
              <a
                href="mailto:brand@norcalsbdc.org?subject=Template%20Request"
                className="inline-flex items-center gap-2.5 uppercase transition-all duration-200 hover:bg-[#f5f4f0] hover:text-[#0f1c2e]"
                style={{
                  fontFamily: "var(--sans-label)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  color: T.cream,
                  textDecoration: "none",
                  padding: "10px 20px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  alignSelf: "flex-start",
                  background: "transparent",
                }}
              >
                Submit request →
              </a>
            </div>
          </div>
        </section>

        <NextSectionLink title="Content" href="/content" />
      </div>
    </>
  );
}
