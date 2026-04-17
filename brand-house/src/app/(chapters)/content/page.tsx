"use client";

import { useRef, useState } from "react";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
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

const platformGuidance = [
  {
    platform: "LinkedIn",
    icon: "linkedin",
    tone: "Professional, data-driven",
    frequency: "2–3× / week",
    focus: "Impact stats, advisor spotlights, success stories, event recaps.",
  },
  {
    platform: "Facebook",
    icon: "facebook",
    tone: "Warm, community-focused",
    frequency: "3–5× / week",
    focus: "Event promotion, client spotlights, behind-the-scenes, local highlights.",
  },
  {
    platform: "Instagram",
    icon: "instagram",
    tone: "Visual, aspirational",
    frequency: "3–4× / week",
    focus: "Client photos, event moments, quote cards, reels with advisor tips.",
  },
  {
    platform: "X / Twitter",
    icon: "x",
    tone: "Punchy, topical",
    frequency: "Daily",
    focus: "Quick stats, event live-tweeting, resource links, industry news.",
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
   Editorial rows instead of 4 boxy tiles. Click a row to expand.
   Hero row on top (active platform, big) — smaller rows below. */
function PlatformRoster() {
  const [active, setActive] = useState<string>("LinkedIn");
  const current = platformGuidance.find((p) => p.platform === active) ?? platformGuidance[0];

  return (
    <div className="mt-4">
      {/* Active platform — featured editorial card, NO box outline */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-14">
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <p className="font-label uppercase text-white/70 mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              Now viewing
            </p>
            <div className="flex items-center gap-5">
              <SocialIcon name={current.icon} size={56} className="text-white" />
              <h3 className="font-sans text-navy tracking-[-0.02em]"
                style={{ fontSize: "clamp(36px, 4.4vw, 60px)", fontWeight: 500, lineHeight: 0.95 }}>
                {current.platform}
              </h3>
            </div>
            <p className="italic text-navy/85 mt-8 max-w-[420px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(22px, 2.2vw, 30px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                fontWeight: 400,
              }}>
              {current.tone}.
            </p>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="font-label uppercase text-white/70 mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
            Focus
          </p>
          <p className="font-sans text-white leading-[1.55]"
            style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
            {current.focus}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-label uppercase text-white/70 mb-3"
            style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
            Cadence
          </p>
          <p className="font-sans text-navy tracking-[-0.01em]"
            style={{ fontSize: "clamp(24px, 2.4vw, 32px)", fontWeight: 500, lineHeight: 1.05 }}>
            {current.frequency}
          </p>
        </div>
      </div>

      {/* Inactive rows — sparse list, navy numerals, quiet labels */}
      <div className="border-t border-white/25">
        {platformGuidance.map((p, idx) => {
          const isActive = p.platform === active;
          return (
            <button
              key={p.platform}
              onClick={() => setActive(p.platform)}
              aria-pressed={isActive}
              className={`w-full grid grid-cols-[44px_1fr_auto_40px] md:grid-cols-[64px_1fr_2fr_1fr_40px] gap-4 md:gap-8 items-center text-left py-5 md:py-6 border-b border-white/25 transition-colors duration-200 ${isActive ? "opacity-100" : "opacity-75 hover:opacity-100"}`}
            >
              <span className="font-label uppercase text-white/60"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                0{idx + 1}
              </span>
              <span className="flex items-center gap-4">
                <SocialIcon name={p.icon} size={20} className="text-white/85" />
                <span className={`font-sans tracking-[-0.01em] ${isActive ? "text-navy" : "text-white"}`}
                  style={{ fontSize: "clamp(17px, 1.6vw, 22px)", fontWeight: 500 }}>
                  {p.platform}
                </span>
              </span>
              <span className="hidden md:block italic text-white/80"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(14px, 1.2vw, 17px)" }}>
                {p.tone}.
              </span>
              <span className="font-label uppercase text-white/75"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                {p.frequency}
              </span>
              <span className={`material-symbols-outlined transition-transform ${isActive ? "text-navy" : "text-white/60"}`}
                style={{ fontSize: "20px", transform: isActive ? "rotate(90deg)" : "rotate(0)" }}
                aria-hidden="true">
                arrow_forward
              </span>
            </button>
          );
        })}
      </div>
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
        subtitle="Guidelines for social media and newsletters — so every center shows up with one unified voice."
        bgColor="transparent"
        showRule={false}
      />

      {/* ── CONTENT GENERATOR — editorial hero, steel bg ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>

        <SbdcWatermark
          className="absolute -right-[6%] top-[10%] w-[38vw] max-w-[460px] text-white pointer-events-none select-none"
          opacity={0.08}
        />
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
                  "Client Success Stories",
                  "Social Posts · IG / LI / FB / X",
                  "Newsletters",
                  "Workshop Recaps",
                  "Press Releases",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="font-sans text-white flex items-baseline gap-4 py-2 border-b border-white/25"
                    style={{ fontSize: "16px", fontWeight: 400 }}
                  >
                    <span className="font-label text-white/55 text-[11px] tracking-[0.22em]">·</span>
                    {feat}
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
              <KitCard caption="Capital Education · Editorial" meta="LI / FB · Funded Pillar · Monthly">
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
                      Capital Education
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

      {/* ── SOCIAL MEDIA BEST PRACTICE — editorial roster, steel bg ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <Reveal className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            eyebrow="Platforms · Channels"
            title="Social Media Best Practice"
            lead="Four platforms, four cadences, one voice. Select a platform below to see the tone, focus, and cadence we use there."
          />

          <PlatformRoster />
        </Reveal>
      </section>

      {/* ── POSTING RHYTHM ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <SbdcWatermark
          className="absolute -right-[8%] top-[5%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none"
          opacity={0.07}
        />
        <span
          className="material-symbols-outlined absolute -right-10 top-[2%] text-white/[0.07] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          calendar_month
        </span>
        <Reveal className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          {/* Custom label — uses navy tints so it reads on both the steel bg
             and the cream wash that fades in on scroll. */}
          <div className="mb-10">
            <p className="font-label uppercase text-navy/55 mb-3"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              Year-Round Rhythm
            </p>
            <h2 className="font-sans text-navy tracking-[-0.015em]"
              style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>
              Posting Rhythm
            </h2>
            <p className="font-sans text-navy/75 leading-[1.55] mt-5 max-w-[620px]"
              style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
              Weekly, bi-weekly, and quarterly anchors — rotating our three pillars so every client sees the full story.
            </p>
          </div>

          {/* Cadence × Pillar grid — each cadence is a row, pillars sit in a 3-up card grid */}
          <div className="mt-14">
            {(() => {
              const PEOPLE = "#004290";
              const FUNDED = "#00685E";
              const CONNECTED = "#A73B44";
              const rows = [
                {
                  freq: "Weekly",
                  title: "Social posts",
                  desc: "Rotate pillars weekly — never the same pillar twice in a row.",
                  cards: [
                    { name: "People", num: "01", color: PEOPLE, body: "Advisor spotlight or team moment." },
                    { name: "Funded", num: "02", color: FUNDED, body: "Capital stat, lending tip, or client win." },
                    { name: "Connected", num: "03", color: CONNECTED, body: "Event promo, workshop recap, or partner shout-out." },
                  ],
                },
                {
                  freq: "Bi-Weekly",
                  title: "Newsletter",
                  desc: "One pillar leads the issue. The other two support in shorter reads.",
                  cards: [
                    { name: "People", num: "01", color: PEOPLE, body: "Lead story — client or advisor profile." },
                    { name: "Funded", num: "02", color: FUNDED, body: "Quick tip on capital access or SBA updates." },
                    { name: "Connected", num: "03", color: CONNECTED, body: "Program spotlight and upcoming events." },
                  ],
                },
                {
                  freq: "Quarterly",
                  title: "Anchor content",
                  desc: "One signature piece, broken into 4–6 weeks of derivative posts.",
                  cards: [
                    { name: "People", num: "01", color: PEOPLE, body: "Signature client success story, long-form." },
                    { name: "Funded", num: "02", color: FUNDED, body: "Capital impact report or lender feature." },
                    { name: "Connected", num: "03", color: CONNECTED, body: "Event recap video or regional snapshot." },
                  ],
                },
              ];
              return rows.map((row, rowIdx) => (
                <div
                  key={row.freq}
                  className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-14 py-10 md:py-12"
                  style={rowIdx > 0 ? { borderTop: "1px solid rgba(15,28,46,0.12)" } : undefined}
                >
                  {/* Cadence label */}
                  <div className="flex flex-col gap-3">
                    <p className="font-label uppercase text-navy/55"
                      style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600 }}>
                      {row.freq}
                    </p>
                    <h3 className="text-navy tracking-[-0.01em]"
                      style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(26px, 2.4vw, 32px)", lineHeight: 1.05 }}>
                      {row.title}
                    </h3>
                    <p className="text-navy/75 leading-[1.55]"
                      style={{ fontSize: "14px" }}>
                      {row.desc}
                    </p>
                  </div>

                  {/* Pillar cards — no borders, no dividers, just airy columns */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
                    {row.cards.map((c) => (
                      <article
                        key={c.name}
                        className="group relative"
                        style={{ padding: "4px 0 0" }}
                      >
                        <header className="flex items-baseline justify-between mb-5">
                          <span className="relative inline-block font-label uppercase"
                            style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600, color: c.color, paddingBottom: 6 }}>
                            {c.name}
                            {/* Horizontal underline grows from left on hover */}
                            <span
                              aria-hidden
                              className="absolute left-0 bottom-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
                              style={{ height: 2, width: "100%", background: c.color }}
                            />
                          </span>
                          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: "22px", color: c.color, opacity: 0.7 }}>
                            {c.num}
                          </span>
                        </header>
                        <p className="text-navy"
                          style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "17px", lineHeight: 1.45, letterSpacing: "-0.005em" }}>
                          {c.body}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* Rotation rule — paired with month chips */}
          <div className="mt-16 pt-10 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-14 items-start"
            style={{ borderTop: "1px solid rgba(15,28,46,0.12)" }}>
            <p className="font-label uppercase text-navy/55 mt-1"
              style={{ fontSize: "10px", letterSpacing: "0.22em", fontWeight: 600 }}>
              Pillar Rotation
            </p>
            <div>
              <p className="text-navy/85 max-w-[620px]"
                style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.55 }}>
                Each month one pillar leads, the other two support. Then repeat.
              </p>
              <div className="mt-5 inline-flex flex-wrap font-label uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.16em", fontWeight: 500 }}>
                <span className="pr-3.5" style={{ color: "#004290" }}>Jan · People</span>
                <span className="px-3.5" style={{ color: "#00685E", borderLeft: "1px solid rgba(15,28,46,0.20)" }}>Feb · Funded</span>
                <span className="px-3.5" style={{ color: "#A73B44", borderLeft: "1px solid rgba(15,28,46,0.20)" }}>Mar · Connected</span>
                <span className="pl-3.5 text-navy/60" style={{ borderLeft: "1px solid rgba(15,28,46,0.20)" }}>→ Repeat</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── RESPONDING TO COMMENTS — steel bg ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "transparent" }}>
        <span
          className="material-symbols-outlined absolute -left-6 bottom-[-4%] pointer-events-none select-none"
          style={{ fontSize: "min(40vw, 380px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1, color: "rgba(86,132,186,0.18)" }}
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
