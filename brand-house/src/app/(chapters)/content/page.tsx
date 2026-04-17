"use client";

import { useRef, useState } from "react";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import { SocialBrandRow } from "@/components/SocialIcons";
import NextSectionLink from "@/components/NextSectionLink";
import ColorsInUseCarousel from "@/components/ColorsInUseCarousel";
import Reveal from "@/components/Reveal";
import ScrollFadeBackground from "@/components/ScrollFadeBackground";
import Link from "next/link";

function SocialIcon({ name, size = 22, className }: { name: string; size?: number; className?: string }) {
  const cls = className ?? `text-navy/40`;
  const style = { width: size, height: size };
  switch (name) {
    case "linkedin":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case "facebook":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case "instagram":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>;
    case "x":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    default:
      return null;
  }
}

/* ─────────────────────────────  DATA  ───────────────────────────── */

const socialPrinciples = [
  {
    title: "Authentic",
    desc: "Use your real name. Never blog anonymously. Every post reflects who we are as people — not as an institution.",
  },
  {
    title: "Audience",
    desc: "A founder needs different content than a city councilmember. Tailor every message to the person on the other side of the screen.",
  },
  {
    title: "Privacy",
    desc: "Never disclose personal, confidential, or proprietary information about clients, advisors, partners, or lenders.",
  },
];

type PlatformGuide = {
  platform: string;
  icon: string;
  tone: string;
  frequency: string;
  focus: { headline: React.ReactNode; body: string };
  voice: { body: React.ReactNode; hook: string };
  cadence: { body: string };
  dos: string[];
  donts: string[];
};

const platformGuidance: PlatformGuide[] = [
  {
    platform: "LinkedIn",
    icon: "linkedin",
    tone: "Professional, data-driven",
    frequency: "2–3× / week",
    focus: {
      headline: (<>Impact, <em style={{ fontStyle: "italic" }}>proof, partnerships.</em></>),
      body: "Long-form posts on client milestones, capital raised, economic impact data. Thought leadership from advisors and directors. Lead with numbers.",
    },
    voice: {
      body: (<><em style={{ fontStyle: "italic" }}>Credible. Substantive. Never corporate.</em> Write like the smartest advisor in the room — one who has receipts.</>),
      hook: "A client raised $X this quarter. Here\u2019s how.",
    },
    cadence: {
      body: "2\u20133× per week. Tuesday & Thursday mornings. Mix: 60% client wins, 30% advisor insights, 10% network news.",
    },
    dos: ["Lead with a number", "Tag advisor by name", "Link to full case study"],
    donts: ["Corporate platitudes", "Long hashtag chains", "Stock imagery"],
  },
  {
    platform: "Facebook",
    icon: "facebook",
    tone: "Warm, community-focused",
    frequency: "3–5× / week",
    focus: {
      headline: (<>Neighbors, <em style={{ fontStyle: "italic" }}>events, stories.</em></>),
      body: "Local event promos, client spotlights, advisor features. Where our clients\u2019 friends and family see us. Community bulletin energy.",
    },
    voice: {
      body: (<><em style={{ fontStyle: "italic" }}>Warm. Specific. Genuinely local.</em> Like a neighbor sharing good news. First-name basis. No jargon.</>),
      hook: "Free workshop Tuesday in Redding \u2014 come say hi.",
    },
    cadence: {
      body: "3\u20135× per week. Spread across weekdays and Saturday mornings. Heavy on photos, short captions, local tags.",
    },
    dos: ["Tag local businesses", "Reply to every comment", "Use photos of real people"],
    donts: ["Repost LinkedIn verbatim", "Long-form reports", "Emoji overload"],
  },
  {
    platform: "Instagram",
    icon: "instagram",
    tone: "Visual, aspirational",
    frequency: "3–4× / week",
    focus: {
      headline: (<>Client photos, <em style={{ fontStyle: "italic" }}>moments, quote cards.</em></>),
      body: "Behind-the-counter shots. Event reels. Advisor-client conversations. Quote cards in brand type. Carousel stories with a clear arc.",
    },
    voice: {
      body: (<><em style={{ fontStyle: "italic" }}>Show the work, not the hype.</em> Aspirational but grounded. Every image is a real person doing real work.</>),
      hook: "One business, one relationship at a time.",
    },
    cadence: {
      body: "3\u20134× per week. Mix of feed posts, carousels, and reels. Stories daily for events and quick updates.",
    },
    dos: ["Natural light photos", "Reels under 30 sec", "Brand-type quote cards"],
    donts: ["Stock photos, ever", "Posed group shots", "AI-generated people"],
  },
  {
    platform: "X / Twitter",
    icon: "x",
    tone: "Punchy, topical",
    frequency: "Daily",
    focus: {
      headline: (<>Quick takes, <em style={{ fontStyle: "italic" }}>news, replies.</em></>),
      body: "Breaking grants, policy changes, deadlines. Replies to local entrepreneurs and partner orgs. Where we\u2019re responsive, not pre-produced.",
    },
    voice: {
      body: (<><em style={{ fontStyle: "italic" }}>Sharp. Brief. Never smug.</em> One idea per tweet. Skip the thread culture unless it’s earned.</>),
      hook: "New grant open. $50K. Deadline May 15. We can help you apply.",
    },
    cadence: {
      body: "Daily. Real-time replies to partners and entrepreneurs. Reshare advisor posts. Use for time-sensitive alerts.",
    },
    dos: ["Reply fast & human", "Boost partner content", "Share deadlines"],
    donts: ["Engagement bait", "Political pile-ons", "Cross-post unchanged"],
  },
];

const commentPolicy = `The [Center Name] SBDC has created this page with the intention of providing a format for discussion about news and events related to [subject matter]. [Center Name] SBDC reserves the right to remove any content that is deemed, in our sole view, commercial, harmful, inappropriate, erroneous, harassing, libelous, threatening, discriminatory, or wildly off-topic. [Center Name] SBDC reserves the right to remove you from the community/block you from posting after the second offense. [Center Name] SBDC is not responsible for the content posted by others on this page; please note that community-contributed content is the opinion of the specific author and does not necessarily represent the opinions of [Center Name] SBDC.\n\nThank you for your participation and for your role in creating a safe and dynamic environment for our online community.`;

/* ─────────────────────────────  SHARED  ─────────────────────────────
   Everything below sits on steel (#5684BA). Headlines = navy (anchor
   weight). Body/eyebrow/meta = white (airy). No boxy panels. */

/** SectionLabel — steel version. Navy title, white lead, white rule. */
function SectionLabel({ eyebrow, title, lead, noRule = false }: { eyebrow: string; title: string; lead?: string; noRule?: boolean }) {
  const wrapper = noRule ? "mb-10" : "border-t border-white/30 pt-6 mb-10";
  return (
    <div className={wrapper}>
      <p className="font-label text-[11px] uppercase tracking-[0.22em] text-white/80 mb-3">{eyebrow}</p>
      <h2 className="font-sans text-navy tracking-[-0.015em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>{title}</h2>
      {lead && (
        <p className="font-sans text-white/90 leading-[1.55] mt-5 max-w-[620px]" style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ───────── PLATFORM ROSTER ─────────
   Editorial inline accordion. Click a row to expand; detail panel slides
   open in place beneath the header row. Editorial typography throughout
   (proxima-sera for display + italic accents). Cream backdrop because this
   section sits inside the post-generator wash. */
function PlatformRoster() {
  // Instagram open by default (mirrors the mock's demo state).
  const [openIdx, setOpenIdx] = useState<number | null>(2);

  // Brand pillar colors, lightened slightly for cream context.
  const DO_COLOR = "#00685E"; // evergreen
  const DONT_COLOR = "#A73B44"; // berry

  const ruleStrong = "rgba(15,28,46,0.20)";
  const ruleMid = "rgba(15,28,46,0.12)";
  const ruleDashed = "rgba(15,28,46,0.15)";

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--sans)",
    fontSize: "9.5px",
    fontWeight: 600,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(45,51,64,0.7)",
  };

  return (
    <div
      className="mt-4"
      style={{
        borderTop: `1px solid ${ruleStrong}`,
        borderBottom: `1px solid ${ruleStrong}`,
      }}
    >
      {platformGuidance.map((p, idx) => {
        const isOpen = openIdx === idx;
        const isLast = idx === platformGuidance.length - 1;
        return (
          <div
            key={p.platform}
            style={{
              borderBottom: isLast ? "none" : `1px solid ${ruleMid}`,
            }}
          >
            {/* Row header — clickable */}
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full text-left grid items-center transition-colors"
              style={{
                gridTemplateColumns: "48px minmax(180px, 240px) 1fr 140px 24px",
                gap: "24px",
                padding: "28px 0",
                background: isOpen ? "rgba(15,28,46,0.02)" : "transparent",
                fontFamily: "inherit",
                color: "inherit",
                border: "none",
              }}
              onMouseEnter={(e) => {
                if (!isOpen) e.currentTarget.style.background = "rgba(15,28,46,0.02)";
              }}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "16px",
                  letterSpacing: "0.02em",
                  color: "rgba(15,28,46,0.35)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                0{idx + 1}
              </span>

              {/* Icon + name */}
              <span className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center shrink-0 text-navy" style={{ width: 32, height: 32 }}>
                  <SocialIcon name={p.icon} size={28} />
                </span>
                <span
                  style={{
                    fontFamily: "proxima-sera, var(--serif)",
                    fontWeight: 300,
                    fontSize: "26px",
                    letterSpacing: "-0.018em",
                    lineHeight: 1,
                    color: "#0f1c2e",
                  }}
                >
                  {p.platform}
                </span>
              </span>

              {/* Tone (hidden on small) */}
              <span
                className="hidden md:block"
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "18px",
                  lineHeight: 1.3,
                  letterSpacing: "-0.005em",
                  color: "rgba(45,51,64,0.85)",
                }}
              >
                {p.tone}.
              </span>

              {/* Cadence */}
              <span
                className="hidden md:inline-flex items-baseline gap-[10px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(45,51,64,0.85)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    display: "inline-block",
                    width: 20,
                    height: "1.5px",
                    background: "#0f1c2e",
                    opacity: 0.3,
                  }}
                />
                {p.frequency}
              </span>

              {/* Chevron */}
              <span
                aria-hidden
                className="material-symbols-outlined"
                style={{
                  fontSize: "22px",
                  fontVariationSettings: "'wght' 300",
                  color: "rgba(45,51,64,0.85)",
                  transition: "transform 0.3s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  justifySelf: "end",
                }}
              >
                expand_more
              </span>
            </button>

            {/* Detail panel — CSS grid-rows animation for open/close */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.35s cubic-bezier(0.2,0,0,1)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  className="grid grid-cols-1 md:grid-cols-3"
                  style={{
                    gap: 0,
                    padding: "12px 0 48px",
                    borderTop: `1px dashed ${ruleDashed}`,
                    marginTop: 0,
                  }}
                >
                  {/* FOCUS */}
                  <div
                    className="flex flex-col gap-[14px] md:pr-10"
                    style={{ paddingTop: "32px", borderRight: `1px solid ${ruleMid}` }}
                  >
                    <span style={labelStyle}>Focus</span>
                    <h4
                      style={{
                        fontFamily: "proxima-sera, var(--serif)",
                        fontWeight: 300,
                        fontSize: "22px",
                        lineHeight: 1.15,
                        letterSpacing: "-0.015em",
                        color: "#0f1c2e",
                      }}
                    >
                      {p.focus.headline}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgba(45,51,64,0.95)",
                      }}
                    >
                      {p.focus.body}
                    </p>
                  </div>

                  {/* VOICE */}
                  <div
                    className="flex flex-col gap-[14px] md:px-10"
                    style={{ paddingTop: "32px", borderRight: `1px solid ${ruleMid}` }}
                  >
                    <span style={labelStyle}>Voice</span>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgba(45,51,64,0.95)",
                      }}
                    >
                      {p.voice.body}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgba(45,51,64,0.95)",
                        marginTop: 8,
                      }}
                    >
                      <strong style={{ fontWeight: 500, color: "#0f1c2e" }}>Tagline hook:</strong>{" "}
                      &ldquo;{p.voice.hook}&rdquo;
                    </p>
                  </div>

                  {/* CADENCE & FORMAT + DO/DON'T */}
                  <div
                    className="flex flex-col gap-[14px] md:pl-10"
                    style={{ paddingTop: "32px" }}
                  >
                    <span style={labelStyle}>Cadence &amp; Format</span>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "rgba(45,51,64,0.95)",
                      }}
                    >
                      {p.cadence.body}
                    </p>

                    {/* DO / DON'T nested pair */}
                    <div
                      className="grid grid-cols-2"
                      style={{
                        paddingTop: 24,
                        marginTop: 8,
                        borderTop: `1px dashed ${ruleDashed}`,
                      }}
                    >
                      <div className="pr-5">
                        <div
                          style={{
                            ...labelStyle,
                            color: DO_COLOR,
                            opacity: 1,
                            marginBottom: 12,
                          }}
                        >
                          Do
                        </div>
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            fontFamily: "var(--sans)",
                            fontSize: "13px",
                            lineHeight: 1.65,
                            color: "rgba(45,51,64,0.95)",
                          }}
                        >
                          {p.dos.map((d) => (
                            <li
                              key={d}
                              style={{
                                paddingLeft: 18,
                                position: "relative",
                                marginBottom: 6,
                              }}
                            >
                              <span
                                aria-hidden
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  color: DO_COLOR,
                                  opacity: 0.6,
                                }}
                              >
                                &mdash;
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div
                        className="pl-5"
                        style={{ borderLeft: `1px solid ${ruleMid}` }}
                      >
                        <div
                          style={{
                            ...labelStyle,
                            color: DONT_COLOR,
                            opacity: 1,
                            marginBottom: 12,
                          }}
                        >
                          Don&rsquo;t
                        </div>
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            fontFamily: "var(--sans)",
                            fontSize: "13px",
                            lineHeight: 1.65,
                            color: "rgba(45,51,64,0.95)",
                          }}
                        >
                          {p.donts.map((d) => (
                            <li
                              key={d}
                              style={{
                                paddingLeft: 18,
                                position: "relative",
                                marginBottom: 6,
                              }}
                            >
                              <span
                                aria-hidden
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  color: DONT_COLOR,
                                  opacity: 0.6,
                                }}
                              >
                                &mdash;
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────  KIT CARD  ─────────────────────────────
   Each carousel tile in the Social Media Kit. Fixed width so the scroll
   behavior matches the /colors poster carousel. */
function KitCard({ caption, meta, children }: { caption: string; meta: string; children: React.ReactNode }) {
  return (
    <div className="shrink-0 flex flex-col" style={{ scrollSnapAlign: "start" }}>
      <div
        className="relative overflow-hidden kit-card-canvas"
        style={{ width: "clamp(280px, 34vw, 420px)", aspectRatio: "1 / 1" }}
      >
        {children}
      </div>
      <div className="mt-3" style={{ width: "clamp(280px, 34vw, 420px)" }}>
        <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>{caption}</p>
        <p className="font-label text-[11px] text-white/75 uppercase tracking-[0.12em] mt-1">{meta}</p>
      </div>
    </div>
  );
}

export default function ContentPage() {
  // Everything from Social Principles → Responding to Comments sits inside
  // this wrapper. The cream wash fades in as the wrapper enters the viewport
  // (i.e. as the user scrolls past the Content Generator) and holds to bottom.
  const postGeneratorRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      {/* ── FIXED BACKDROP — fog→steel gradient + layered film grain ──
         position:fixed keeps the bg still as the page scrolls. All sections
         below are transparent so this shows through.
         Grain strategy: 3 stacked fractal-noise layers at different frequencies
         to avoid the "digital noise" look and feel like real film/paper. */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: "linear-gradient(180deg, #85A3C8 0%, #5684BA 45%, #4d78a8 100%)",
        }}
      >
        {/* Layer 1 — fine grain, the "paper tooth". High frequency, soft-light blend. */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.22, mixBlendMode: "soft-light" }}
        >
          <filter id="grain-fine">
            <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="3" stitchTiles="stitch" seed="4" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.2" intercept="-0.1" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-fine)" />
        </svg>

        {/* Layer 2 — medium grain for body. Overlay blend gives highlight/shadow speckle. */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.12, mixBlendMode: "overlay" }}
        >
          <filter id="grain-mid">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" stitchTiles="stitch" seed="9" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-mid)" />
        </svg>

        {/* Layer 3 — coarse, low-frequency for organic unevenness (not flat digital). */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.08, mixBlendMode: "multiply" }}
        >
          <filter id="grain-coarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.22" numOctaves="1" stitchTiles="stitch" seed="17" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain-coarse)" />
        </svg>

        {/* Subtle vignette — corners darken slightly, adds depth without heaviness */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 55%, rgba(15,28,46,0.12) 100%)",
          }}
        />
      </div>

      {/* Content wrapper — sits above the fixed backdrop */}
      <div className="relative" style={{ zIndex: 1 }}>

      <InteriorHero
        chapterNumber="06"
        category="strategy"
        title="Content"
        subtitle="Guidelines for social media and newsletters — so SBDC consistently gets communicated with one unified voice."
        bgColor="transparent"
      />

      {/* ── CONTENT GENERATOR — editorial hero, steel bg ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>

        <span
          className="material-symbols-outlined absolute -right-12 -bottom-24 text-white/[0.09] pointer-events-none select-none"
          style={{ fontSize: "min(80vw, 820px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          auto_awesome
        </span>

        <Reveal className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28">
          <p className="font-label uppercase mb-6 text-white/85"
            style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
            Tool · AI-Powered
          </p>

          <h2
            className="italic tracking-[-0.04em] text-navy"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 6vw, 82px)",
              lineHeight: 0.95,
              fontWeight: 400,
            }}
          >
            Content
            <br />
            Generator.
          </h2>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <p
                className="font-sans text-white leading-[1.55] max-w-[620px]"
                style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400, letterSpacing: "-0.005em" }}
              >
                Write on-brand success stories, social posts, newsletters, and workshop recaps — all trained on NorCal SBDC&rsquo;s voice, pillars, and messaging framework.
              </p>

              <Link
                href="/generate"
                className="inline-flex items-center gap-3 mt-8 bg-navy hover:bg-[#1D5AA7] text-white font-sans px-6 py-3.5 transition-colors no-underline"
                style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  auto_awesome
                </span>
                Open Content Generator
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="md:col-span-5 md:pt-4">
              <p className="font-label uppercase mb-5 text-white/80"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                Formats
              </p>
              <ul className="space-y-0">
                {[
                  { label: "Client Success Stories" },
                  { label: "Social Posts", icons: true },
                  { label: "Newsletters" },
                  { label: "Workshop Recaps" },
                  { label: "Press Releases" },
                ].map((feat) => (
                  <li
                    key={feat.label}
                    className="font-sans text-white flex items-center gap-4 py-2 border-b border-white/25"
                    style={{ fontSize: "16px", fontWeight: 400 }}
                  >
                    <span className="font-label text-white/55 text-[11px] tracking-[0.22em]">·</span>
                    <span>{feat.label}</span>
                    {feat.icons && (
                      <SocialBrandRow
                        size={14}
                        gap={10}
                        className="ml-2 text-white/85"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Scroll-linked cream wash that fades in as the viewport enters the
         post-generator block and holds to the bottom of the page. ── */}
      <ScrollFadeBackground
        targetRef={postGeneratorRef}
        color="#f5f4f0"
        fadeInPx={600}
        zIndex={1}
      />

      {/* Scoped tint remap: as the cream wash fades in, white text would
         vanish. Remap the most common white tints inside this wrapper to
         navy tints so every section stays readable on cream. */}
      <style>{`
        .post-generator-wash .text-white { color: #0f1c2e; }
        .post-generator-wash .text-white\\/90 { color: rgba(15,28,46,0.85); }
        .post-generator-wash .text-white\\/85 { color: rgba(15,28,46,0.80); }
        .post-generator-wash .text-white\\/80 { color: rgba(15,28,46,0.70); }
        .post-generator-wash .text-white\\/75 { color: rgba(15,28,46,0.65); }
        .post-generator-wash .text-white\\/70 { color: rgba(15,28,46,0.60); }
        .post-generator-wash .text-white\\/65 { color: rgba(15,28,46,0.55); }
        .post-generator-wash .text-white\\/60 { color: rgba(15,28,46,0.55); }
        .post-generator-wash .text-white\\/55 { color: rgba(15,28,46,0.50); }
        .post-generator-wash .text-white\\/50 { color: rgba(15,28,46,0.45); }
        .post-generator-wash .text-white\\/40 { color: rgba(15,28,46,0.40); }
        .post-generator-wash .border-white\\/30 { border-color: rgba(15,28,46,0.15); }
        .post-generator-wash .border-white\\/25 { border-color: rgba(15,28,46,0.12); }
        .post-generator-wash .border-white\\/20 { border-color: rgba(15,28,46,0.10); }
        /* Oversized decorative icons — keep them as subtle ghosts */
        .post-generator-wash .material-symbols-outlined.text-white\\/\\[0\\.09\\],
        .post-generator-wash .material-symbols-outlined.text-white\\/\\[0\\.08\\],
        .post-generator-wash .material-symbols-outlined.text-white\\/\\[0\\.07\\] {
          color: rgba(15,28,46,0.06);
        }
        .post-generator-wash .text-white\\/\\[0\\.08\\],
        .post-generator-wash .text-white\\/\\[0\\.07\\] { color: rgba(15,28,46,0.06); }
        /* Kit cards live on saturated photo / berry / navy backgrounds — keep their
           native white text + borders. Higher-specificity overrides reset everything
           the wash remap touched. */
        .post-generator-wash .kit-card-canvas .text-white { color: #ffffff; }
        .post-generator-wash .kit-card-canvas .text-white\\/90 { color: rgba(255,255,255,0.90); }
        .post-generator-wash .kit-card-canvas .text-white\\/85 { color: rgba(255,255,255,0.85); }
        .post-generator-wash .kit-card-canvas .text-white\\/80 { color: rgba(255,255,255,0.80); }
        .post-generator-wash .kit-card-canvas .text-white\\/75 { color: rgba(255,255,255,0.75); }
        .post-generator-wash .kit-card-canvas .text-white\\/70 { color: rgba(255,255,255,0.70); }
        .post-generator-wash .kit-card-canvas .text-white\\/65 { color: rgba(255,255,255,0.65); }
        .post-generator-wash .kit-card-canvas .text-white\\/60 { color: rgba(255,255,255,0.60); }
        .post-generator-wash .kit-card-canvas .text-white\\/55 { color: rgba(255,255,255,0.55); }
        .post-generator-wash .kit-card-canvas .text-white\\/50 { color: rgba(255,255,255,0.50); }
        .post-generator-wash .kit-card-canvas .text-white\\/40 { color: rgba(255,255,255,0.40); }
        .post-generator-wash .kit-card-canvas .border-white\\/30 { border-color: rgba(255,255,255,0.30); }
        .post-generator-wash .kit-card-canvas .border-white\\/25 { border-color: rgba(255,255,255,0.25); }
        .post-generator-wash .kit-card-canvas .border-white\\/20 { border-color: rgba(255,255,255,0.20); }
        /* Carousel nav arrows sit on a dark filled pill — keep their white stroke. */
        .post-generator-wash .carousel-nav-icon.text-white { color: #ffffff; }
      `}</style>

      <div ref={postGeneratorRef} className="post-generator-wash">

      {/* ── SOCIAL PRINCIPLES — 3 big things ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <span
          className="material-symbols-outlined absolute -right-8 -top-6 text-white/[0.08] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          forum
        </span>
        <Reveal className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            eyebrow="Social Media · Principles"
            title="Three things, always."
            lead="We build our social media presence on content that's relevant and authentic. Every post reflects who we are."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-14">
            {socialPrinciples.map((p, i) => (
              <div key={p.title}>
                <p className="font-label uppercase text-white/75"
                  style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  0{i + 1}
                </p>
                <h3
                  className="mt-3 italic text-navy"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(36px, 4.5vw, 56px)",
                    letterSpacing: "-0.035em",
                    lineHeight: 0.98,
                    fontWeight: 400,
                  }}
                >
                  {p.title}.
                </h3>
                <p
                  className="mt-5 font-sans text-white leading-[1.55]"
                  style={{ fontSize: "clamp(15px, 1.1vw, 16px)", fontWeight: 400 }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── SOCIAL MEDIA KIT — carousel, steel bg ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <Reveal className="max-w-[1200px] mx-auto pl-8 md:pl-12 lg:pl-16 pr-0 py-20 md:py-28 relative z-10">
          <div className="pr-8 md:pr-12 lg:pr-16">
            <SectionLabel
              eyebrow="Ready-to-Post Templates"
              title="Social Media Kit"
              lead="Six template formats showing the brand's full typographic and color range — editorial serif, wide display, monospace labels, and real client imagery."
            />
          </div>

          <div className="pt-6">
            <ColorsInUseCarousel bgColor="#f5f4f0">
              {/* 1 — Client image BG with editorial serif overlay */}
              <KitCard caption="Client Testimonial · Serif" meta="IG / FB · Connected Pillar · Bi-Weekly">
                <div
                  className="absolute inset-0 text-white flex flex-col justify-between p-8 md:p-10"
                  style={{
                    backgroundImage: "linear-gradient(180deg, rgba(15,28,46,0.15) 0%, rgba(15,28,46,0.75) 100%), url('/photos/rejoule.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-label uppercase text-white/90"
                      style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                      NorCal SBDC
                    </p>
                    <p className="font-label uppercase text-white/60"
                      style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                      Client Story
                    </p>
                  </div>
                  <div>
                    <p
                      className="italic"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(22px, 2.6vw, 34px)",
                        fontWeight: 400,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.08,
                      }}
                    >
                      &ldquo;They helped me build something that lasts.&rdquo;
                    </p>
                    <p className="font-label uppercase mt-5 text-white/75"
                      style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                      ReJoule · Bay Area
                    </p>
                  </div>
                </div>
              </KitCard>

              {/* 2 — Wide display stat on berry */}
              <KitCard caption="Impact Stat · Wide Display" meta="LI / FB · Funded Pillar · Monthly">
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-10"
                  style={{ backgroundColor: "#A73B44", color: "#f5f4f0" }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-label uppercase"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.85)" }}>
                      NorCal SBDC
                    </p>
                    <p className="font-label uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,244,240,0.6)" }}>
                      Capital Impact
                    </p>
                  </div>
                  <div>
                    <p className="font-label uppercase mb-3"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.7)" }}>
                      Total Capital Accessed
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-wide)",
                        fontSize: "clamp(56px, 7.5vw, 96px)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 0.86,
                      }}
                    >
                      $549M
                    </p>
                    <p className="font-label uppercase mt-4"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.85)" }}>
                      #YourBusinessBetter
                    </p>
                  </div>
                </div>
              </KitCard>

              {/* 3 — Client image BG, wide + serif combo */}
              <KitCard caption="Advisor Spotlight · Mixed Type" meta="IG / LI · People Pillar · Weekly">
                <div
                  className="absolute inset-0 text-white flex flex-col justify-between p-8 md:p-10"
                  style={{
                    backgroundImage: "linear-gradient(180deg, rgba(15,28,46,0.25) 0%, rgba(15,28,46,0.85) 100%), url('/photos/marin-auto.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <p className="font-label uppercase text-white/90"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    NorCal SBDC
                  </p>
                  <div>
                    <p className="italic text-white/85"
                      style={{ fontFamily: "var(--serif)", fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.3 }}>
                      Meet your
                    </p>
                    <p
                      className="uppercase mt-2"
                      style={{
                        fontFamily: "var(--font-wide)",
                        fontSize: "clamp(32px, 3.8vw, 52px)",
                        fontWeight: 700,
                        letterSpacing: "0.005em",
                        lineHeight: 0.95,
                        color: "#f5f4f0",
                      }}
                    >
                      SBDC
                      <br />
                      Advisor.
                    </p>
                    <p className="font-label uppercase mt-5 text-white/70"
                      style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                      People Pillar · Weekly
                    </p>
                  </div>
                </div>
              </KitCard>

              {/* 4 — Navy, big italic serif headline */}
              <KitCard caption="Brand Anthem · Editorial Serif" meta="IG / LI / FB / X · Evergreen">
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-10"
                  style={{ backgroundColor: "#0f1c2e", color: "#f5f4f0" }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-label uppercase"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(133,163,200,0.7)" }}>
                      NorCal SBDC
                    </p>
                    <p className="font-label uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(133,163,200,0.5)" }}>
                      Brand Anthem
                    </p>
                  </div>
                  <div>
                    <p
                      className="italic"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(36px, 4.8vw, 64px)",
                        color: "#f5f4f0",
                        letterSpacing: "-0.04em",
                        lineHeight: 0.92,
                        fontWeight: 400,
                      }}
                    >
                      Your
                      <br />
                      Business,
                      <br />
                      <span style={{ color: "#85A3C8" }}>Better.</span>
                    </p>
                    <p className="font-label uppercase mt-6"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(133,163,200,0.6)" }}>
                      #PeopleFundedConnected
                    </p>
                  </div>
                </div>
              </KitCard>

              {/* 5 — Cream with berry italic, mono label stack */}
              <KitCard caption="Capital Readiness · Editorial" meta="LI / FB · Funded Pillar · Monthly">
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 border border-navy/[0.08]"
                  style={{ backgroundColor: "#f5f4f0", color: "#0f1c2e" }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-label uppercase"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)" }}>
                      NorCal SBDC
                    </p>
                    <p className="font-label uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(15,28,46,0.4)" }}>
                      Did You Know?
                    </p>
                  </div>
                  <div>
                    <p className="font-label uppercase mb-3"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#A73B44" }}>
                      Capital Readiness
                    </p>
                    <p
                      className="italic"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(22px, 2.6vw, 32px)",
                        color: "#0f1c2e",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.08,
                        fontWeight: 400,
                      }}
                    >
                      Every consultation is{" "}
                      <span style={{ color: "#A73B44" }}>no-fee</span>.
                      <br />
                      Today &amp; always.
                    </p>
                    <p className="font-sans mt-5 text-navy/65 max-w-[260px]"
                      style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.5 }}>
                      Your advisor helps you prepare loan packages, navigate SBA programs, and connect with the right lender.
                    </p>
                  </div>
                </div>
              </KitCard>

              {/* 6 — Jobs stat on navy, for variety */}
              <KitCard caption="Jobs Stat · Wide Display" meta="LI / X · People Pillar · Quarterly">
                <div
                  className="absolute inset-0 flex flex-col justify-between p-8 md:p-10"
                  style={{ backgroundColor: "#0f1c2e", color: "#f5f4f0" }}
                >
                  <div className="flex justify-between items-start">
                    <p className="font-label uppercase"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.9)" }}>
                      NorCal SBDC
                    </p>
                    <p className="font-label uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(133,163,200,0.7)" }}>
                      Jobs Created
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-wide)",
                        fontSize: "clamp(58px, 8vw, 108px)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 0.86,
                        color: "#85A3C8",
                      }}
                    >
                      3,723
                    </p>
                    <p className="font-sans mt-5 text-white max-w-[240px]"
                      style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.35 }}>
                      jobs created with NorCal SBDC support in 2025.
                    </p>
                    <p className="font-label uppercase mt-4"
                      style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.7)" }}>
                      #NorCalSBDC
                    </p>
                  </div>
                </div>
              </KitCard>
            </ColorsInUseCarousel>
          </div>
        </Reveal>
      </section>

      {/* ── SOCIAL MEDIA BEST PRACTICE — editorial inline accordion ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <Reveal className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          {/* Editorial section header — matches Principles/Templates register */}
          <header className="mb-12 md:mb-14 max-w-[720px]">
            <div
              className="inline-flex items-center gap-[10px] mb-5"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#2D3340",
              }}
            >
              <span
                aria-hidden
                style={{ width: 28, height: 2, background: "#0f1c2e" }}
              />
              <span>Platforms · Channels</span>
            </div>
            <h2
              style={{
                fontFamily: "proxima-sera, var(--serif)",
                fontWeight: 300,
                fontSize: "clamp(40px, 5.2vw, 68px)",
                lineHeight: 1,
                letterSpacing: "-0.028em",
                color: "#0f1c2e",
                marginBottom: "24px",
              }}
            >
              Social media,{" "}
              <em style={{ fontStyle: "italic" }}>by channel.</em>
            </h2>
            <p
              style={{
                fontFamily: "proxima-sera, var(--serif)",
                fontWeight: 300,
                fontSize: "19px",
                lineHeight: 1.55,
                color: "#2D3340",
                maxWidth: "56ch",
              }}
            >
              Four platforms. Four cadences. One voice. Open any row to see the
              tone, focus, and do&rsquo;s and don&rsquo;ts we use there.
            </p>
          </header>

          <PlatformRoster />
        </Reveal>
      </section>

      {/* ── POSTING RHYTHM ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <span
          className="material-symbols-outlined absolute -right-10 top-[2%] text-white/[0.07] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          calendar_month
        </span>
        <Reveal className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          {(() => {
            const PEOPLE = "#004290";
            const FUNDED = "#00685E";
            const CONNECTED = "#A73B44";
            const NAVY = "#0f1c2e";
            const SLATE = "#2D3340";
            const pillars = [
              { name: "People", color: PEOPLE },
              { name: "Funded", color: FUNDED },
              { name: "Connected", color: CONNECTED },
            ];
            const rows = [
              {
                freq: "Weekly",
                titleLead: "Social ",
                titleEm: "posts.",
                rule: "Rotate pillars weekly — never the same pillar twice in a row.",
                cells: [
                  { body: "Advisor spotlight or team moment.", note: "Feed post · Reel · Story" },
                  { body: "Capital stat, lending tip, or client win.", note: "Carousel · single image" },
                  { body: "Event promo, workshop recap, or partner shout-out.", note: "Story series · Reel" },
                ],
              },
              {
                freq: "Bi-weekly",
                titleLead: "News",
                titleEm: "letter.",
                rule: "One pillar leads the issue — the other two support in shorter reads.",
                cells: [
                  { body: "Lead story — client or advisor profile.", note: "~500 words · hero photo" },
                  { body: "Quick tip on capital access or SBA updates.", note: "Sidebar · link block" },
                  { body: "Program spotlight and upcoming events.", note: "Calendar strip · CTA" },
                ],
              },
              {
                freq: "Quarterly",
                titleLead: "Anchor ",
                titleEm: "content.",
                rule: "One signature piece per quarter, broken into 4–6 weeks of derivative posts.",
                cells: [
                  { body: "Signature client success story, long-form.", note: "Case study · video cut" },
                  { body: "Capital impact report or lender feature.", note: "Data report · infographics" },
                  { body: "Event recap video or regional snapshot.", note: "Highlight reel · recap post" },
                ],
              },
            ];

            return (
              <>
                {/* Editorial header */}
                <header className="mb-14">
                  <div className="flex items-center gap-4 mb-8">
                    <span aria-hidden style={{ display: "inline-block", width: 28, height: 2, background: SLATE, opacity: 0.55 }} />
                    <p className="font-label uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: SLATE }}>
                      Year-round rhythm
                    </p>
                  </div>
                  <h2 className="tracking-[-0.028em]"
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: "clamp(40px, 5.2vw, 68px)",
                      lineHeight: 1.02,
                      color: NAVY,
                    }}>
                    Posting <em style={{ fontStyle: "italic", fontWeight: 300 }}>rhythm.</em>
                  </h2>
                  <p className="mt-6 max-w-[56ch]"
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: "19px",
                      lineHeight: 1.55,
                      color: SLATE,
                    }}>
                    A 3×3 system — three cadences down, three pillars across. Every client sees every pillar, every quarter, on repeat.
                  </p>
                </header>

                {/* 3×3 matrix */}
                <div className="hidden md:block">
                  {/* Column headers */}
                  <div className="grid"
                    style={{ gridTemplateColumns: "200px 1fr 1fr 1fr", columnGap: "40px" }}>
                    <div />
                    {pillars.map((p) => (
                      <div key={p.name} className="flex items-center gap-3 pb-6"
                        style={{ borderBottom: `1px solid rgba(15,28,46,0.16)` }}>
                        <span aria-hidden style={{ display: "inline-block", width: 24, height: 2, background: p.color }} />
                        <span className="font-label uppercase"
                          style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: p.color }}>
                          {p.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Rows */}
                  {rows.map((row) => (
                    <div key={row.freq} className="grid py-10"
                      style={{
                        gridTemplateColumns: "200px 1fr 1fr 1fr",
                        columnGap: "40px",
                        borderBottom: "1px solid rgba(15,28,46,0.10)",
                      }}>
                      {/* Row label */}
                      <div className="pr-4">
                        <p className="font-label uppercase mb-3"
                          style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: SLATE }}>
                          {row.freq}
                        </p>
                        <h3 className="tracking-[-0.022em]"
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontWeight: 300,
                            fontSize: "clamp(28px, 2.8vw, 36px)",
                            lineHeight: 1.05,
                            color: NAVY,
                          }}>
                          {row.titleLead}<em style={{ fontStyle: "italic", fontWeight: 300 }}>{row.titleEm}</em>
                        </h3>
                        <p className="mt-4"
                          style={{
                            fontFamily: "var(--sans)",
                            fontSize: "13px",
                            lineHeight: 1.55,
                            color: "rgba(15,28,46,0.65)",
                          }}>
                          {row.rule}
                        </p>
                      </div>

                      {/* Cells */}
                      {row.cells.map((cell, ci) => {
                        const p = pillars[ci];
                        return (
                          <div key={ci} className="flex flex-col">
                            <span className="font-label uppercase mb-4"
                              style={{ fontSize: "9px", letterSpacing: "0.22em", fontWeight: 600, color: p.color }}>
                              {p.name}
                            </span>
                            <p style={{
                              fontFamily: "proxima-sera, var(--serif)",
                              fontWeight: 400,
                              fontSize: "19px",
                              lineHeight: 1.4,
                              letterSpacing: "-0.01em",
                              color: NAVY,
                            }}>
                              {cell.body}
                            </p>
                            <p className="mt-4"
                              style={{
                                fontFamily: "var(--sans)",
                                fontSize: "13px",
                                lineHeight: 1.5,
                                color: "rgba(15,28,46,0.55)",
                              }}>
                              {cell.note}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Mobile stack */}
                <div className="md:hidden space-y-10">
                  {rows.map((row) => (
                    <div key={row.freq} className="pb-8"
                      style={{ borderBottom: "1px solid rgba(15,28,46,0.10)" }}>
                      <p className="font-label uppercase mb-2"
                        style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: SLATE }}>
                        {row.freq}
                      </p>
                      <h3 style={{
                        fontFamily: "proxima-sera, var(--serif)",
                        fontWeight: 300,
                        fontSize: "30px",
                        lineHeight: 1.05,
                        letterSpacing: "-0.022em",
                        color: NAVY,
                      }}>
                        {row.titleLead}<em style={{ fontStyle: "italic", fontWeight: 300 }}>{row.titleEm}</em>
                      </h3>
                      <p className="mt-3 mb-6"
                        style={{ fontFamily: "var(--sans)", fontSize: "13px", lineHeight: 1.55, color: "rgba(15,28,46,0.65)" }}>
                        {row.rule}
                      </p>
                      <div className="space-y-5">
                        {row.cells.map((cell, ci) => {
                          const p = pillars[ci];
                          return (
                            <div key={ci} className="pl-4" style={{ borderLeft: `2px solid ${p.color}` }}>
                              <span className="font-label uppercase block mb-2"
                                style={{ fontSize: "9px", letterSpacing: "0.22em", fontWeight: 600, color: p.color }}>
                                {p.name}
                              </span>
                              <p style={{
                                fontFamily: "proxima-sera, var(--serif)",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: 1.4,
                                letterSpacing: "-0.01em",
                                color: NAVY,
                              }}>
                                {cell.body}
                              </p>
                              <p className="mt-2"
                                style={{ fontFamily: "var(--sans)", fontSize: "12px", lineHeight: 1.5, color: "rgba(15,28,46,0.55)" }}>
                                {cell.note}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dashed-top footer — three rhythm rules */}
                <div className="mt-16 pt-10"
                  style={{ borderTop: "1px dashed rgba(15,28,46,0.28)" }}>
                  <div className="flex items-center gap-4 mb-8">
                    <span aria-hidden style={{ display: "inline-block", width: 28, height: 2, background: SLATE, opacity: 0.55 }} />
                    <p className="font-label uppercase"
                      style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: SLATE }}>
                      Three rhythm rules
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                      { num: "01", label: "Weekly", lead: "Rotate.", body: "Never let the same pillar headline two weeks in a row. If People led this week, Funded or Connected leads next." },
                      { num: "02", label: "Bi-weekly", lead: "One leads.", body: "Pick a lead pillar for each newsletter. Supporting pillars appear as shorter sidebar reads or link blocks." },
                      { num: "03", label: "Quarterly", lead: "Make it anchor.", body: "One signature piece per quarter earns 4–6 weeks of derivative posts across every channel." },
                    ].map((r) => (
                      <div key={r.num}>
                        <div className="flex items-baseline gap-4 mb-3">
                          <span style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontSize: "28px",
                            color: "rgba(15,28,46,0.35)",
                            letterSpacing: "-0.02em",
                          }}>
                            {r.num}
                          </span>
                          <span className="font-label uppercase"
                            style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: SLATE }}>
                            {r.label}
                          </span>
                        </div>
                        <p className="mb-3" style={{
                          fontFamily: "proxima-sera, var(--serif)",
                          fontStyle: "italic",
                          fontWeight: 400,
                          fontSize: "22px",
                          lineHeight: 1.2,
                          letterSpacing: "-0.015em",
                          color: NAVY,
                        }}>
                          {r.lead}
                        </p>
                        <p style={{
                          fontFamily: "var(--sans)",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          color: "rgba(15,28,46,0.72)",
                        }}>
                          {r.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </Reveal>
      </section>

      {/* ── RESPONDING TO COMMENTS — steel bg ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        {/* Jumbo chat_bubble mark, bottom-left, fog/white wash */}
        <span
          className="material-symbols-outlined absolute pointer-events-none select-none"
          style={{
            fontSize: "min(72vw, 720px)",
            fontVariationSettings: "'FILL' 1, 'wght' 100, 'opsz' 48",
            lineHeight: 1,
            color: "rgba(133, 163, 200, 0.42)",
            left: "-6vw",
            bottom: "-8vw",
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          chat_bubble
        </span>
        <Reveal className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <SectionLabel
            eyebrow="Community"
            title="Responding to Comments"
            lead="Respond publicly to negative comments, then move the discussion to a private space as quickly as possible."
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 mt-14">
            <div>
              <p className="font-label uppercase text-white/75 mb-5"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                Template Response
              </p>
              <div className="border-l-2 border-navy pl-7">
                <p className="font-sans italic text-navy leading-[1.35]"
                  style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400, letterSpacing: "-0.015em" }}>
                  &ldquo;We are so sorry you&rsquo;ve had a negative experience. Please
                  private message us with your email address so we can help you
                  resolve the issue.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <p className="font-label uppercase text-white/75"
                  style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  Facebook Comments Policy
                </p>
                <CopyButton text={commentPolicy} />
              </div>
              <div className="max-h-[320px] overflow-y-auto pr-3">
                <p className="font-sans text-white leading-[1.65] whitespace-pre-wrap"
                  style={{ fontSize: "14px", fontWeight: 400 }}>
                  {commentPolicy}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      </div>
      {/* end .post-generator-wash */}

      {/* Lift the next-section CTA + site footer above the fixed cream wash
         (which has zIndex 1 and would otherwise tint these dark sections). */}
      <div className="relative z-[2]">
        <NextSectionLink title="Email" href="/email" />
      </div>

      </div>
    </>
  );
}
