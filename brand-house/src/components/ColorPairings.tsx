"use client";

/**
 * COLOR PAIRINGS — "the brand-sanctioned combinations"
 *
 * 4 × 2 grid of editorial sample cards.  On default each tile shows ONLY the
 * sample phrase with italic emphasis.  Hovering the tile reveals:
 *   · corner role label (upper-left)
 *   · color-pair label  (upper-right)
 *   · contrast ratio    (lower-left)
 *   · WCAG grade badge  (lower-right)
 */

type Pairing = {
  role: string;
  pair: string;
  bg: string;
  fg: string;
  accent?: string;            // italic-emphasis color (defaults to Berry)
  sample: React.ReactNode;
  ratio: string;
  grade: "AAA" | "AA";
};

const BERRY = "#A73B44";
const NAVY = "#0f1c2e";
const COBALT = "#004290";
const CREAM = "#f5f4f0";
const FOG = "#85A3C8";
const EVERGREEN = "#00685E";

const PAIRINGS: Pairing[] = [
  {
    role: "BODY",
    pair: "CREAM · NAVY",
    bg: CREAM,
    fg: NAVY,
    accent: BERRY,
    sample: (
      <>
        Your Business,
        <br />
        <em>Better.</em>
      </>
    ),
    ratio: "13.2:1",
    grade: "AAA",
  },
  {
    role: "HERO",
    pair: "NAVY · CREAM",
    bg: NAVY,
    fg: CREAM,
    accent: BERRY,
    sample: (
      <>
        People,
        <br />
        <em>Funded.</em>
      </>
    ),
    ratio: "13.2:1",
    grade: "AAA",
  },
  {
    role: "CARD",
    pair: "WHITE · NAVY",
    bg: "#FFFFFF",
    fg: NAVY,
    accent: BERRY,
    sample: (
      <>
        Real clients.
        <br />
        Real <em>results.</em>
      </>
    ),
    ratio: "17.1:1",
    grade: "AAA",
  },
  {
    role: "CTA",
    pair: "CREAM · COBALT",
    bg: CREAM,
    fg: COBALT,
    accent: COBALT,
    sample: (
      <>
        Talk to an
        <br />
        advisor →
      </>
    ),
    ratio: "8.4:1",
    grade: "AAA",
  },
  {
    role: "BUTTON",
    pair: "COBALT · CREAM",
    bg: COBALT,
    fg: CREAM,
    accent: CREAM,
    sample: (
      <>
        Schedule
        <br />
        <em>session</em>
      </>
    ),
    ratio: "8.4:1",
    grade: "AAA",
  },
  {
    role: "ACCENT",
    pair: "CREAM · BERRY",
    bg: CREAM,
    fg: BERRY,
    accent: BERRY,
    sample: (
      <>
        Featured <em>this</em>
        <br />
        <em>quarter</em>
      </>
    ),
    ratio: "5.1:1",
    grade: "AA",
  },
  {
    role: "SUCCESS",
    pair: "CREAM · EVERGREEN",
    bg: CREAM,
    fg: EVERGREEN,
    accent: EVERGREEN,
    sample: (
      <>
        Small business,
        <br />
        <em>growing.</em>
      </>
    ),
    ratio: "6.7:1",
    grade: "AA",
  },
  {
    role: "META",
    pair: "NAVY · FOG",
    bg: NAVY,
    fg: FOG,
    accent: FOG,
    sample: (
      <>
        Caption &amp;
        <br />
        <em>metadata</em>
      </>
    ),
    ratio: "4.8:1",
    grade: "AA",
  },
];

function slug(s: string) {
  return s.replace(/\s+/g, "-").toLowerCase();
}

function PairCard({ p }: { p: Pairing }) {
  const id = `${slug(p.role)}-${slug(p.pair)}`;
  return (
    <div
      className="pair-card relative flex flex-col justify-between group"
      style={
        {
          backgroundColor: p.bg,
          color: p.fg,
          aspectRatio: "1 / 1.02",
          padding: "clamp(16px, 1.6vw, 22px)",
          boxShadow:
            "0 1px 2px rgba(15,28,46,0.04), 0 10px 32px -14px rgba(15,28,46,0.16)",
          ["--fg" as string]: p.fg,
        } as React.CSSProperties
      }
    >
      {/* top row: role + color pair (hover-only) */}
      <div className="pair-chrome flex items-start justify-between gap-3">
        <span
          className="font-label uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.16em",
            color: p.fg,
            opacity: 0.75,
          }}
        >
          {p.role}
        </span>
        <span
          className="font-label uppercase text-right"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: p.fg,
            opacity: 0.5,
          }}
        >
          {p.pair}
        </span>
      </div>

      {/* sample copy — italic emphasis auto-styled via `em` */}
      <div
        className="flex-1 flex items-center justify-center text-center"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(22px, 2.2vw, 32px)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          padding: "clamp(12px, 1.6vw, 22px) 0",
        }}
      >
        <div>
          <style>{`
            .pair-sample-${id} em {
              font-family: proxima-sera, var(--serif);
              font-style: italic;
              font-weight: 400;
              color: ${p.accent ?? BERRY};
            }
          `}</style>
          <span className={`pair-sample-${id}`}>{p.sample}</span>
        </div>
      </div>

      {/* bottom row: ratio + grade (hover-only) */}
      <div className="pair-chrome flex items-end justify-between gap-3">
        <span
          className="font-mono"
          style={{
            fontSize: "12px",
            color: p.fg,
            opacity: 0.7,
            letterSpacing: "0.01em",
          }}
        >
          {p.ratio}
        </span>
        <span
          className="font-label uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.08em",
            padding: "4px 8px",
            color: p.fg,
            border: `1px solid ${p.fg}33`,
          }}
        >
          {p.grade}
        </span>
      </div>
    </div>
  );
}

export default function ColorPairings() {
  return (
    <section className="bg-cream pt-16 md:pt-24 pb-8 md:pb-12">
      {/* Scoped hover rule — chrome (corner labels + ratio) fades in on hover.
         Kept inside the component so it doesn't leak to other sections. */}
      <style>{`
        .pair-card .pair-chrome {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .pair-card:hover .pair-chrome,
        .pair-card:focus-within .pair-chrome {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Top rule + eyebrow / tagline */}
        <div className="flex items-center gap-6 mb-8 md:mb-10">
          <span className="font-label text-[10px] uppercase tracking-[0.22em] text-navy/50 whitespace-nowrap">
            Pairings
          </span>
          <span className="flex-1 h-px bg-navy/15" />
          <span
            className="text-navy/55 whitespace-nowrap"
            style={{
              fontFamily: "proxima-sera, var(--serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "15px",
              letterSpacing: "-0.005em",
            }}
          >
            The brand-sanctioned combinations
          </span>
        </div>

        {/* Hero row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-8 md:gap-16 items-end">
          <h2
            className="text-navy"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(48px, 6.4vw, 88px)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            The{" "}
            <span
              style={{
                fontFamily: "proxima-sera, var(--serif)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              pairings.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "proxima-sera, var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(18px, 1.55vw, 23px)",
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              maxWidth: "480px",
              color: "rgba(15,28,46,0.85)",
            }}
          >
            Eight combinations cover 95% of real-world use. Each has been tested for
            legibility and on-brand feel.
          </p>
        </div>

        {/* Note */}
        <p
          className="mt-10 md:mt-12 max-w-[760px]"
          style={{
            fontFamily: "proxima-sera, var(--serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "17px",
            lineHeight: 1.5,
            letterSpacing: "-0.005em",
            color: "rgba(15,28,46,0.65)",
          }}
        >
          Italic emphasis always carries color. Berry on cream, Berry on navy, Fog on
          navy — these are the signature moves. Never mix an emphasis color with a
          non-anchor background.
        </p>

        {/* Grid — 8 cards in 4 × 2, tightened spacing */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2.5">
          {PAIRINGS.map((p) => (
            <PairCard key={`${p.role}-${p.pair}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
