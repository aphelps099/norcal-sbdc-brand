"use client";

/**
 * ANCHOR COLORS — the load-bearing three (+ secondary row).
 *
 *  ┌──────────────┬──────────────┬──────────────┐
 *  │   SBDC NAVY  │    COBALT    │     BERRY    │   large swatch + description
 *  └──────────────┴──────────────┴──────────────┘
 *  ┌────┬────┬────┬────┬────┬────┐
 *  │Sl..│Ev..│St..│Fo..│Si..│Wh..│                  compact row (6-up)
 *  └────┴────┴────┴────┴────┴────┘
 *
 * Replaces the previous "Primary / Accent / Neutral" ColorSwatchGrid layout.
 * White REPLACES Cloud in the secondary row per design direction.
 */

type AnchorDef = {
  name: string;
  hex: string;
  role: string;
  usage: string;
  italicName?: boolean;
};

const ANCHORS: AnchorDef[] = [
  {
    name: "SBDC Navy",
    hex: "#0f1c2e",
    role: "ANCHOR · DARK",
    usage:
      "Headlines, primary text, hero backgrounds, footers. The signature surface.",
  },
  {
    name: "Cobalt",
    hex: "#004290",
    role: "ANCHOR · ACTION",
    usage:
      "CTAs, buttons, links, interactive elements. Where the page wants you to act.",
  },
  {
    name: "Berry",
    hex: "#A73B44",
    role: "ANCHOR · EMPHASIS",
    usage:
      "Italic emphasis, pull quotes, accent details. The voice made visible.",
    italicName: true,
  },
];

type SecondaryDef = {
  name: string;
  hex: string;
  usage: string;
  lightFrame?: boolean;
};

const SECONDARY: SecondaryDef[] = [
  { name: "Slate",     hex: "#2D3340", usage: "SECONDARY DARK" },
  { name: "Evergreen", hex: "#00685E", usage: "SUCCESS · GROWTH" },
  { name: "Steel",     hex: "#5684BA", usage: "SECONDARY LINK" },
  { name: "Fog",       hex: "#85A3C8", usage: "SOFT SURFACE" },
  { name: "Silver",    hex: "#D9D9D9", usage: "DIVIDERS", lightFrame: true },
  { name: "White",     hex: "#FFFFFF", usage: "CARD SURFACE", lightFrame: true },
];

export default function AnchorColors() {
  return (
    <section className="bg-cream pt-16 md:pt-24 pb-8 md:pb-10">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Top rule + eyebrow / tagline */}
        <div className="flex items-center gap-6 mb-8 md:mb-10">
          <span className="font-label text-[10px] uppercase tracking-[0.22em] text-navy/50 whitespace-nowrap">
            Anchor Colors
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
            The load-bearing three
          </span>
        </div>

        {/* Hero row — big italic headline left, lede right */}
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
              anchors.
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
            Three colors carry the brand. Navy holds the dark. Cobalt does the work.
            Berry raises the flag.
          </p>
        </div>

        {/* Anchor row — 3 big cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12 md:mt-16">
          {ANCHORS.map((a) => (
            <div key={a.hex} className="flex flex-col">
              {/* Swatch */}
              <div
                className="w-full aspect-[4/3.1]"
                style={{
                  backgroundColor: a.hex,
                  boxShadow:
                    "0 1px 2px rgba(15,28,46,0.04), 0 12px 40px -12px rgba(15,28,46,0.18)",
                }}
              />
              {/* Meta block */}
              <div className="pt-5 md:pt-6 pb-5 border-b border-navy/10">
                <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/45 mb-3">
                  {a.role}
                </p>
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className="text-navy"
                    style={{
                      fontFamily: a.italicName
                        ? "proxima-sera, var(--serif)"
                        : "var(--sans)",
                      fontWeight: a.italicName ? 400 : 500,
                      fontStyle: a.italicName ? "italic" : "normal",
                      fontSize: "clamp(28px, 2.6vw, 34px)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {a.name}
                  </h3>
                  <span
                    className="font-mono text-navy/55"
                    style={{ fontSize: "13px", letterSpacing: "0.02em" }}
                  >
                    {a.hex.toUpperCase()}
                  </span>
                </div>
                <p
                  className="mt-4 text-navy/60"
                  style={{
                    fontFamily: "proxima-sera, var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "14.5px",
                    lineHeight: 1.55,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {a.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary row — 6-up compact */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5 mt-6 md:mt-7">
          {SECONDARY.map((s) => (
            <div key={s.hex} className="flex flex-col">
              <div
                className="w-full aspect-square"
                style={{
                  backgroundColor: s.hex,
                  boxShadow: s.lightFrame
                    ? "inset 0 0 0 1px rgba(15,28,46,0.08)"
                    : "0 1px 2px rgba(15,28,46,0.04), 0 8px 28px -12px rgba(15,28,46,0.18)",
                }}
              />
              <div className="pt-4">
                <h4
                  className="text-navy"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "18px",
                    letterSpacing: "-0.015em",
                    lineHeight: 1,
                  }}
                >
                  {s.name}
                </h4>
                <p
                  className="mt-2 font-mono text-navy/55"
                  style={{ fontSize: "12px", letterSpacing: "0.02em" }}
                >
                  {s.hex.toUpperCase()}
                </p>
                <p className="mt-3 font-label text-[10px] uppercase tracking-[0.14em] text-navy/40">
                  {s.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
