import InteriorHero from "@/components/InteriorHero";
import ColorSwatch from "@/components/ColorSwatch";
import ColorSwatchGrid from "@/components/ColorSwatchGrid";
import ColorsInUseCarousel from "@/components/ColorsInUseCarousel";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import { colors, colorGroups, colorUsageCards } from "@/lib/brand-tokens";

export default function ColorsPage() {
  return (
    <>
      <InteriorHero
        bg="#0f1c2e"
        title="Colors"
        subtitle="Our palette is built for contrast, accessibility, and editorial impact."
      />

      {/* Recommended Refined Palette — white bg */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] mb-2 text-navy"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Recommended Refined Palette
          </h2>
          <p className="text-navy/50 text-base md:text-[17px] leading-relaxed font-sans mb-14">
            Organized by role so each color has a clear purpose in the brand system.
          </p>

          {colorGroups.map((group) => (
            <div key={group.label} className="mb-16 last:mb-0">
              <h3
                className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-4"
              >
                {group.label}
              </h3>
              <ColorSwatchGrid>
                {group.keys.map((key) => {
                  const color = colors[key];
                  return (
                    <ColorSwatch
                      key={color.hex}
                      name={color.name}
                      hex={color.hex}
                      usage={color.usage}
                    />
                  );
                })}
              </ColorSwatchGrid>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Usage — cream bg */}
      <div className="pb-16 md:pb-24 py-16 md:py-24" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h3
            className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-6"
          >
            Suggested Usage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorUsageCards.map((card) => {
              const color = colors[card.key];
              const isLight =
                parseInt(color.hex.replace("#", ""), 16) > 0xaaaaaa;
              return (
                <div
                  key={card.key}
                  className="border border-black/[0.06] overflow-hidden"
                >
                  <div
                    className="px-5 py-5"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span
                      className="font-sans text-[18px] font-medium"
                      style={{
                        color: isLight ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)",
                      }}
                    >
                      {color.name}
                    </span>
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <p className="text-navy/60 text-[14px] leading-relaxed font-sans">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gradients — inline with palette grid */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h3 className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-4">
            Gradients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div
                className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
                style={{
                  background: "linear-gradient(120deg, #2D3340 0%, #004290 40%, #5684BA 100%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/NCN_Band_Logo_White.png"
                  alt="NorCal SBDC"
                  className="h-8 md:h-10 w-auto"
                  style={{ opacity: 0.85 }}
                />
              </div>
              <p className="mt-2.5 text-navy/35 text-[13px] leading-relaxed font-sans">
                Slate → Cobalt → Steel — reports, data, formal communications.
              </p>
            </div>
            <div>
              <div
                className="relative overflow-hidden aspect-[4/3] flex items-center justify-center"
                style={{
                  background: "linear-gradient(160deg, #0f1c2e 0%, #85A3C8 50%, #F2F4F7 100%)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/NCN_Band_Logo_White.png"
                  alt="NorCal SBDC"
                  className="h-8 md:h-10 w-auto"
                  style={{ opacity: 0.8 }}
                />
              </div>
              <p className="mt-2.5 text-navy/35 text-[13px] leading-relaxed font-sans">
                Navy → Fog → Cloud — social headers, email banners, softer applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Colors in Use — cream bg */}
      <div className="pb-16 md:pb-24 py-16 md:py-24" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h3 className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-2">
            Colors in Use
          </h3>
          <p className="text-navy/50 text-base md:text-[17px] leading-relaxed font-sans mb-12">
            Realistic previews showing how the palette works in context.
          </p>

          <ColorsInUseCarousel>

            {/* Card 1 — Light mode content block */}
            <div className="flex-shrink-0 w-[340px] md:w-[400px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative border border-black/[0.06] overflow-hidden">
                <div className="px-6 pt-8 pb-16" style={{ backgroundColor: "#F2F4F7" }}>
                  <p
                    className="text-[10px] uppercase tracking-[0.18em] mb-5"
                    style={{ fontFamily: "var(--sans-label)", color: "#5684BA" }}
                  >
                    About the Program
                  </p>
                  <h4
                    className="tracking-[-0.02em] mb-0 leading-[1.1]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "22px",
                      color: "#0f1c2e",
                    }}
                  >
                    Your Business, Better.
                  </h4>
                  <div
                    className="mt-3 mb-5"
                    style={{ width: 32, height: 2, backgroundColor: "#A73B44" }}
                  />
                  <p
                    className="text-[14px] leading-[1.75] mb-5"
                    style={{ fontFamily: "var(--sans)", fontWeight: 500, color: "#2D3340" }}
                  >
                    Since 1980, NorCal SBDC advisors have helped thousands of
                    entrepreneurs access capital, sharpen strategy, and grow with
                    confidence.
                  </p>
                  <div
                    className="inline-block px-5 py-2 rounded-sm text-[12px] tracking-[0.02em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      backgroundColor: "#004290",
                      color: "rgba(255,255,255,0.95)",
                    }}
                  >
                    Get Started
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(242,244,247,0), #F2F4F7)",
                  }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[14px] leading-relaxed font-sans italic">
                Light mode — Navy headlines on Cloud, Berry accent, Cobalt CTA.
              </p>
            </div>

            {/* Card 2 — Dark mode content block */}
            <div className="flex-shrink-0 w-[340px] md:w-[400px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative border border-white/[0.06] overflow-hidden">
                <div className="px-6 pt-8 pb-16" style={{ backgroundColor: "#0f1c2e" }}>
                  <p
                    className="text-[10px] uppercase tracking-[0.18em] mb-5"
                    style={{ fontFamily: "var(--sans-label)", color: "rgba(133,163,200,0.5)" }}
                  >
                    Impact Report
                  </p>
                  <h4
                    className="tracking-[-0.02em] mb-0 leading-[1.1]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "22px",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    42,000 Jobs Created
                  </h4>
                  <div
                    className="mt-3 mb-5"
                    style={{ width: 32, height: 2, backgroundColor: "#85A3C8" }}
                  />
                  <p
                    className="text-[14px] leading-[1.75] mb-5"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    Northern California&rsquo;s small businesses are the backbone of our
                    communities. Our advisors help them start, scale, and succeed.
                  </p>
                  <div
                    className="inline-block px-5 py-2 rounded-sm text-[12px] tracking-[0.02em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      backgroundColor: "#00685E",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    View Full Report
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(17,28,46,0), #0f1c2e)",
                  }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[14px] leading-relaxed font-sans italic">
                Dark mode — white on Navy, Fog accent, Evergreen CTA.
              </p>
            </div>

            {/* Card 3 — Newsletter header */}
            <div className="flex-shrink-0 w-[340px] md:w-[400px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative border border-black/[0.06] overflow-hidden">
                <div
                  className="px-6 pt-6 pb-5 flex items-center justify-between"
                  style={{ backgroundColor: "#0f1c2e" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/NCN_Band_Logo_White.png"
                    alt="NorCal SBDC"
                    className="h-6 w-auto"
                    style={{ opacity: 0.9 }}
                  />
                  <p
                    className="text-[10px] uppercase tracking-[0.14em]"
                    style={{
                      fontFamily: "var(--sans-label)",
                      color: "rgba(133,163,200,0.45)",
                    }}
                  >
                    April 2026
                  </p>
                </div>
                <div style={{ height: 3, backgroundColor: "#004290" }} />
                <div className="px-6 pt-6 pb-20" style={{ backgroundColor: "#FFFFFF" }}>
                  <p
                    className="text-[10px] uppercase tracking-[0.18em] mb-3"
                    style={{ fontFamily: "var(--sans-label)", color: "#5684BA" }}
                  >
                    The Business Advisor
                  </p>
                  <h4
                    className="tracking-[-0.02em] leading-[1.15] mb-3"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "19px",
                      color: "#0f1c2e",
                    }}
                  >
                    Spring Funding Roundup: New SBA Loan Programs for 2026
                  </h4>
                  <p
                    className="text-[13px] leading-[1.75]"
                    style={{ fontFamily: "var(--sans)", fontWeight: 500, color: "#2D3340" }}
                  >
                    This quarter, three new loan programs are available to NorCal small
                    businesses. Our advisors break down eligibility, timelines, and how
                    to get started.
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0), #FFFFFF)",
                  }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[14px] leading-relaxed font-sans italic">
                Newsletter — Navy masthead, Cobalt accent strip, Steel eyebrow.
              </p>
            </div>

          </ColorsInUseCarousel>
        </div>
      </div>

      {/* Accessibility — WCAG contrast ratios */}
      <div className="bg-[#0f1c2e] py-14 md:py-20 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-3"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Accessibility
          </h2>
          <p className="text-white/40 text-base leading-relaxed font-sans mb-12 max-w-xl">
            WCAG 2.1 contrast ratios for key brand color pairings. All primary text combinations meet AA or higher.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { fg: "Navy", bg: "White", fgHex: "#0f1c2e", bgHex: "#FFFFFF", ratio: "17.08", grade: "AAA" },
              { fg: "Navy", bg: "Cloud", fgHex: "#0f1c2e", bgHex: "#F2F4F7", ratio: "15.50", grade: "AAA" },
              { fg: "Cobalt", bg: "White", fgHex: "#004290", bgHex: "#FFFFFF", ratio: "9.62", grade: "AAA" },
              { fg: "Berry", bg: "White", fgHex: "#A73B44", bgHex: "#FFFFFF", ratio: "6.26", grade: "AA" },
              { fg: "Evergreen", bg: "White", fgHex: "#00685E", bgHex: "#FFFFFF", ratio: "6.68", grade: "AA" },
              { fg: "White", bg: "Navy", fgHex: "#FFFFFF", bgHex: "#0f1c2e", ratio: "17.08", grade: "AAA" },
              { fg: "White", bg: "Cobalt", fgHex: "#FFFFFF", bgHex: "#004290", ratio: "9.62", grade: "AAA" },
              { fg: "White", bg: "Evergreen", fgHex: "#FFFFFF", bgHex: "#00685E", ratio: "6.68", grade: "AA" },
              { fg: "Cloud", bg: "Navy", fgHex: "#F2F4F7", bgHex: "#0f1c2e", ratio: "15.50", grade: "AAA" },
              { fg: "Fog", bg: "White", fgHex: "#85A3C8", bgHex: "#FFFFFF", ratio: "2.60", grade: "Fail" },
            ].map((pair) => (
              <div key={`${pair.fg}-${pair.bg}`}>
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{
                    backgroundColor: pair.bgHex,
                    ...(pair.bgHex === "#0f1c2e" ? { border: "1px dotted rgba(255,255,255,0.25)" } : {}),
                  }}
                >
                  <span
                    className="font-sans text-[15px] tracking-[-0.01em]"
                    style={{ color: pair.fgHex, fontWeight: 500 }}
                  >
                    Aa
                  </span>
                  <span
                    className="font-label text-[11px] uppercase tracking-[0.1em]"
                    style={{ color: pair.fgHex, opacity: 0.5 }}
                  >
                    {pair.ratio}:1 {pair.grade}
                  </span>
                </div>
                <p className="px-1 pt-2 text-white/30 text-[12px] font-label uppercase tracking-[0.1em]">
                  {pair.fg} on {pair.bg}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <p className="text-white/40 text-[13px] leading-relaxed font-sans max-w-lg">
              <strong className="text-white/70 font-sans">Note:</strong> Fog (#85A3C8)
              does not meet WCAG contrast requirements for text on white backgrounds.
              Use Fog only for decorative fills, large background areas, or non-text elements.
            </p>
          </div>
        </div>
      </div>

      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
