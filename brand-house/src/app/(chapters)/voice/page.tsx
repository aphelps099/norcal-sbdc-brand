"use client";

import { useEffect, useState } from "react";
import BrandVideoPlayer from "@/components/BrandVideoPlayer";
import NextSectionLink from "@/components/NextSectionLink";
import VoiceHero from "@/components/VoiceHero";

/* ─────────────────────────────  TOKENS  ───────────────────────────── */
const C = {
  navy: "#0f1c2e",
  cream: "#f5f4f0",
  berry: "#A73B44",
  fog: "#85A3C8",
  ruleSoft: "rgba(245,244,240,0.10)",
  ruleMed: "rgba(245,244,240,0.15)",
  ruleStrong: "rgba(245,244,240,0.20)",
};

/* ─────────────────────────────  DATA  ───────────────────────────── */
const traits = [
  { word: "Direct", gloss: "Lead with the point. Never the acronym. No corporate filler." },
  { word: "Human", gloss: "Write like a person, not an institution. Plain language, real voice." },
  { word: "Knowing", gloss: "We have the data and the experience. Say it plainly — we've done this." },
  { word: "Optimistic", gloss: "Realistic about the work. Unreasonable about what's possible." },
];

type TaglineSize = "lg" | "md" | "sm";
type Tagline = {
  size: TaglineSize;
  lines: Array<{ text: string; em?: boolean }>;
};

const taglines: Tagline[] = [
  {
    size: "lg",
    lines: [{ text: "Your Business," }, { text: "Better.", em: true }],
  },
  {
    size: "md",
    lines: [{ text: "People. Funded." }, { text: "Connected.", em: true }],
  },
  {
    size: "sm",
    lines: [
      { text: "Your business ", children: "deserves" },
      { text: "someone who gets it." },
    ] as unknown as Array<{ text: string; em?: boolean }>,
  },
];

const headlines = [
  { num: "01", text: "What's free advice worth? $547 million,", em: "last year.", use: "Data as punchline" },
  { num: "02", text: "Your business deserves someone who", em: "gets it.", use: "Direct address" },
  { num: "03", text: "Don't settle for", em: "generic advice.", use: "Positioning contrast" },
  { num: "04", text: "Real clients. Real", em: "results.", use: "Rhythmic repetition" },
];

const contexts = [
  { label: "Homepage Hero", tone: "Bold, aspirational", sample: "Your business deserves someone who ", em: "gets it." },
  { label: "Impact Stats", tone: "Confident, data-driven", sample: "Since 1980, we've helped raise ", em: "$2.8 billion", trail: " in capital." },
  { label: "Client Stories", tone: "Warm, authentic", sample: "When Maria came to us, she had a recipe and ", em: "a dream." },
  { label: "Social Media", tone: "Conversational, punchy", sample: "42,000 jobs created. ", em: "And counting." },
  { label: "Email Outreach", tone: "Professional, helpful", sample: "We noticed you haven't scheduled your ", em: "free consultation." },
  { label: "Annual Report", tone: "Evidence, pride", sample: "8,500 businesses. $240M accessed. ", em: "One network." },
];

const strategy = [
  { num: "01", verb: "Reposition.", body: "Shift public perception from government program to trusted business growth partner. Every touchpoint reinforces that NorCal SBDC is the team behind the team." },
  { num: "02", verb: "Unify.", body: "Give all 14 centers a shared vocabulary. People, Funded, Connected becomes the lens for every story, every post, every workshop invite." },
  { num: "03", verb: "Convert.", body: "Turn brand awareness into consultation bookings. Every piece of content ladders to one CTA: talk to an advisor." },
];

type Message = { num: string; before: string; em: string; after?: string };
const messages: Message[] = [
  {
    num: "I",
    before:
      "Behind every thriving small business is the right people, the right capital, and the right connections. NorCal SBDC delivers all three — ",
    em: "at no fee.",
  },
  {
    num: "II",
    before:
      "We don't just advise. We sit across the table, roll up our sleeves, and help you build something ",
    em: "that lasts.",
  },
  {
    num: "III",
    before: "8,500 businesses. $240M in capital. 1,900 jobs. That's the ",
    em: "NorCal SBDC difference.",
  },
];

const hashtags = [
  "#YourBusinessBetter",
  "#NorCalSBDC",
  "#PeopleFundedConnected",
  "#SmallBusinessGrowth",
];

/* ─────────────────────────────  SHARED UI  ───────────────────────── */
function EyebrowRow({ tag, count }: { tag: string; count: string }) {
  return (
    <div
      className="flex items-center uppercase"
      style={{
        gap: 16,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.22em",
        marginBottom: 48,
      }}
    >
      <span style={{ color: C.berry }}>{tag}</span>
      <span
        aria-hidden
        style={{ flexGrow: 1, height: 1, background: C.ruleStrong }}
      />
      <span
        style={{
          color: C.fog,
          fontFamily: "proxima-sera, var(--serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 13,
          textTransform: "none",
          letterSpacing: "-0.005em",
        }}
      >
        {count}
      </span>
    </div>
  );
}

/* ─────────────────────────────  TAGLINE CAROUSEL  ───────────────── */
function TaglineCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % taglines.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const sizeFontSize: Record<TaglineSize, string> = {
    lg: "clamp(60px, 11vw, 160px)",
    md: "clamp(48px, 8vw, 112px)",
    sm: "clamp(40px, 6.5vw, 88px)",
  };

  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ padding: "80px 0 88px", gap: 32 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Small eyebrow */}
      <div
        className="flex items-center uppercase"
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.3em",
          color: C.fog,
        }}
      >
        <span>Say it once. Say it everywhere.</span>
      </div>

      {/* Fixed-height stage */}
      <div
        className="relative w-full"
        style={{
          minHeight: "calc(clamp(72px, 13vw, 200px) * 1.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-live="polite"
      >
        {taglines.map((t, idx) => {
          const active = idx === i;
          return (
            <div
              key={idx}
              aria-hidden={!active}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "proxima-sera, var(--serif)",
                fontWeight: 200,
                fontSize: sizeFontSize[t.size],
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: C.cream,
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(8px)",
                transition:
                  "opacity 0.9s cubic-bezier(0.2,0.7,0.2,1), transform 0.9s cubic-bezier(0.2,0.7,0.2,1)",
                pointerEvents: "none",
                padding: "0 24px",
                maxWidth: "100%",
                textAlign: "center",
                wordWrap: "break-word",
              }}
            >
              {/* Render the slide content — each slide has its own markup */}
              {idx === 0 && (
                <span>
                  Your Business,
                  <br />
                  <em style={{ fontStyle: "italic", color: C.berry, fontWeight: 200 }}>Better.</em>
                </span>
              )}
              {idx === 1 && (
                <span>
                  People. Funded.
                  <br />
                  <em style={{ fontStyle: "italic", color: C.berry, fontWeight: 200 }}>Connected.</em>
                </span>
              )}
              {idx === 2 && (
                <span>
                  Your business{" "}
                  <em style={{ fontStyle: "italic", color: C.berry, fontWeight: 200 }}>deserves</em>
                  <br />
                  someone who gets it.
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div
        className="flex"
        role="tablist"
        aria-label="Tagline variants"
        style={{ gap: 14, marginTop: 12 }}
      >
        {taglines.map((_, idx) => {
          const active = idx === i;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={active}
              aria-label={`Variant ${idx + 1}`}
              onClick={() => setI(idx)}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: active ? C.berry : C.fog,
                border: "none",
                padding: 0,
                cursor: "pointer",
                opacity: active ? 1 : 0.3,
                transform: active ? "scale(1.15)" : "scale(1)",
                transition:
                  "opacity 0.3s ease, background 0.3s ease, transform 0.3s ease",
              }}
            />
          );
        })}
      </div>

      <p
        className="max-w-[440px]"
        style={{
          fontFamily: "proxima-sera, var(--serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 17,
          color: C.fog,
          opacity: 0.85,
        }}
      >
        Every piece of NorCal SBDC communication ladders back here. The tagline,
        the pillars, and the promise behind every headline.
      </p>
    </div>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */
export default function VoicePage() {
  return (
    <div style={{ backgroundColor: C.navy, position: "relative" }}>
      {/* ═══ FIXED BACKDROP — dark-navy milky gradient + layered film grain ═══
         Mirrors the /content page pattern but shifted into the deep-navy range
         so the Voice chapter reads as its own atmospheric space.
         Grain strategy: 3 stacked fractal-noise layers at different frequencies
         to avoid the "digital noise" look and feel like real film/paper. */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "linear-gradient(180deg, #0f1c2e 0%, #152a44 45%, #0b1728 100%)",
        }}
      >
        {/* Layer 1 — fine grain, the "paper tooth". High frequency, soft-light blend. */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.22, mixBlendMode: "soft-light" }}
        >
          <filter id="voice-grain-fine">
            <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="3" stitchTiles="stitch" seed="4" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="1.2" intercept="-0.1" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#voice-grain-fine)" />
        </svg>

        {/* Layer 2 — medium grain for body. Overlay blend gives highlight/shadow speckle. */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.14, mixBlendMode: "overlay" }}
        >
          <filter id="voice-grain-mid">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" stitchTiles="stitch" seed="9" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#voice-grain-mid)" />
        </svg>

        {/* Layer 3 — coarse, low-frequency for organic unevenness (not flat digital). */}
        <svg
          aria-hidden
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.09, mixBlendMode: "multiply" }}
        >
          <filter id="voice-grain-coarse">
            <feTurbulence type="fractalNoise" baseFrequency="0.22" numOctaves="1" stitchTiles="stitch" seed="17" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#voice-grain-coarse)" />
        </svg>

        {/* Subtle vignette — corners deepen slightly, adds depth without heaviness */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(5,11,22,0.35) 100%)",
          }}
        />
      </div>

      {/* ── CONTENT — sits above fixed layers ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* ── HERO ── */}
        <VoiceHero />

        {/* ── BRAND FILM ── */}
        <section
          className="relative"
          style={{ paddingTop: 80, paddingBottom: 24 }}
        >
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <div
              className="flex items-center uppercase"
              style={{
                gap: 12,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: C.cream,
                marginBottom: 20,
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: C.berry,
                  display: "inline-block",
                }}
              />
              The brand film
            </div>
            <div
              className="overflow-hidden"
              style={{ border: `1px solid ${C.ruleMed}` }}
            >
              <BrandVideoPlayer videoId="5s8fBXxKaJc" />
            </div>
            <div
              className="flex items-baseline justify-between"
              style={{
                paddingTop: 16,
                marginTop: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "proxima-sera, var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: 15,
                  color: C.cream,
                }}
              >
                <em>Your Business, Better.</em> — the brand film.
              </span>
              <span
                className="uppercase"
                style={{
                  fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  color: C.fog,
                }}
              >
                2025 · 90 sec
              </span>
            </div>
          </div>
        </section>

        {/* ═══ FOUR TRAITS ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow tag="Brand Personality" count="Four traits, one voice" />
            <div className="flex flex-col" style={{ gap: 12 }}>
              {traits.map((t, i) => (
                <div
                  key={t.word}
                  className="trait-line grid items-baseline"
                  style={{
                    gridTemplateColumns: "80px minmax(0, 1fr) minmax(0, 520px)",
                    gap: 40,
                    padding: "20px 0",
                    borderBottom:
                      i < traits.length - 1 ? `1px solid ${C.ruleSoft}` : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: 20,
                      color: C.fog,
                      opacity: 0.6,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 200,
                      fontStyle: "italic",
                      fontSize: "clamp(60px, 9vw, 120px)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.03em",
                      color: C.cream,
                    }}
                  >
                    {t.word}
                  </div>
                  <div
                    className="text-right"
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: 18,
                      lineHeight: 1.45,
                      color: C.fog,
                      justifySelf: "end",
                      textWrap: "balance",
                    }}
                  >
                    {t.gloss}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TAGLINE BILLBOARD ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow
              tag="Primary Tagline"
              count="The voice at billboard scale"
            />
            <TaglineCarousel />
          </div>
        </section>

        {/* ═══ HEADLINE PATTERNS ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow
              tag="Headline Patterns"
              count="Four moves the voice makes"
            />
            <div className="flex flex-col">
              {headlines.map((h, i) => (
                <div
                  key={h.num}
                  className="grid items-baseline"
                  style={{
                    gridTemplateColumns: "80px 1fr 160px",
                    gap: 40,
                    padding: "44px 0",
                    borderBottom:
                      i < headlines.length - 1 ? `1px solid ${C.ruleSoft}` : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: 20,
                      color: C.fog,
                      opacity: 0.6,
                    }}
                  >
                    {h.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: "clamp(28px, 3.8vw, 48px)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      color: C.cream,
                    }}
                  >
                    {h.text}{" "}
                    <em
                      style={{
                        fontStyle: "italic",
                        color: C.berry,
                        fontWeight: 300,
                      }}
                    >
                      {h.em}
                    </em>
                  </div>
                  <div
                    className="text-right uppercase"
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      color: C.fog,
                      opacity: 0.65,
                      lineHeight: 1.6,
                    }}
                  >
                    Move ·
                    <br />
                    {h.use}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TONE BY CONTEXT ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow
              tag="Tone by Context"
              count="How the voice adjusts — without losing itself"
            />
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 1,
                background: C.ruleMed,
                border: `1px solid ${C.ruleMed}`,
              }}
            >
              {contexts.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col"
                  style={{
                    background: C.navy,
                    padding: "36px 32px 32px",
                    gap: 20,
                    minHeight: 260,
                  }}
                >
                  <div
                    className="flex items-baseline justify-between"
                    style={{
                      paddingBottom: 14,
                      borderBottom: `1px solid ${C.ruleSoft}`,
                    }}
                  >
                    <span
                      className="uppercase"
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        color: C.berry,
                      }}
                    >
                      {c.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "proxima-sera, var(--serif)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: 14,
                        color: C.fog,
                      }}
                    >
                      {c.tone}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: 24,
                      lineHeight: 1.3,
                      letterSpacing: "-0.012em",
                      color: C.cream,
                      flexGrow: 1,
                    }}
                  >
                    {c.sample}
                    <em style={{ fontStyle: "italic", color: C.berry }}>
                      {c.em}
                    </em>
                    {c.trail ?? ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CAMPAIGN STRATEGY ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow tag="Campaign Strategy" count="Three moves, repeated" />
            <div
              className="grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 56,
              }}
            >
              {strategy.map((m) => (
                <div key={m.num} className="flex flex-col" style={{ gap: 18 }}>
                  <div
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 200,
                      fontStyle: "italic",
                      fontSize: 72,
                      lineHeight: 1,
                      color: C.berry,
                      opacity: 0.5,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {m.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: 44,
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      color: C.cream,
                    }}
                  >
                    {m.verb}
                  </h3>
                  <p
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: C.fog,
                    }}
                  >
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ KEY MESSAGES ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow
              tag="Key Messages"
              count="Three sentences you can deploy anywhere"
            />
            <div className="flex flex-col" style={{ gap: 64 }}>
              {messages.map((m) => (
                <div
                  key={m.num}
                  className="grid items-baseline"
                  style={{ gridTemplateColumns: "100px 1fr", gap: 40 }}
                >
                  <div
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 200,
                      fontStyle: "italic",
                      fontSize: 64,
                      lineHeight: 1,
                      color: C.berry,
                      opacity: 0.7,
                    }}
                  >
                    {m.num}
                  </div>
                  <p
                    style={{
                      fontFamily: "proxima-sera, var(--serif)",
                      fontWeight: 300,
                      fontSize: "clamp(22px, 2.5vw, 32px)",
                      lineHeight: 1.35,
                      letterSpacing: "-0.012em",
                      color: C.cream,
                    }}
                  >
                    {m.before}
                    <em style={{ fontStyle: "italic", color: C.berry }}>
                      {m.em}
                    </em>
                    {m.after ?? ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HASHTAGS ═══ */}
        <section style={{ padding: "96px 0 120px" }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
            <EyebrowRow tag="Hashtags" count="The voice in the wild" />
            <div
              className="flex flex-wrap"
              style={{
                gap: 0,
                paddingTop: 32,
              }}
            >
              {hashtags.map((h, i) => (
                <span
                  key={h}
                  style={{
                    fontFamily: "proxima-sera, var(--serif)",
                    fontWeight: 300,
                    fontSize: 24,
                    letterSpacing: "-0.01em",
                    color: C.cream,
                    padding: "16px 32px 16px 0",
                    borderRight:
                      i < hashtags.length - 1
                        ? `1px solid ${C.ruleSoft}`
                        : "none",
                    marginRight: i < hashtags.length - 1 ? 32 : 0,
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </section>

        <NextSectionLink title="Media" href="/photography" />
      </div>
    </div>
  );
}
