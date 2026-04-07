import InteriorHero from "@/components/InteriorHero";
import ColorSwatch from "@/components/ColorSwatch";
import NextSectionLink from "@/components/NextSectionLink";
import { colors, colorGroups, colorUsageCards } from "@/lib/brand-tokens";
import { gradientColors } from "@/lib/page-gradients";

export default function ColorsPage() {
  return (
    <>
      <InteriorHero
        gradient={gradientColors}
        title="Colors"
        subtitle="Our palette is built for contrast, accessibility, and editorial impact."
      />

      {/* Recommended Refined Palette — white bg */}
      <div className="bg-white py-12 md:py-16">
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
          <p className="text-navy/50 text-base md:text-[17px] leading-relaxed font-sans mb-12">
            Organized by role so each color has a clear purpose in the brand system.
          </p>

          {colorGroups.map((group) => (
            <div key={group.label} className="mb-10 last:mb-0">
              <h3
                className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-4"
              >
                {group.label}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Usage — white bg */}
      <div className="bg-white pb-12 md:pb-16">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h3
            className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-6"
          >
            Suggested Usage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {colorUsageCards.map((card) => {
              const color = colors[card.key];
              const isLight =
                parseInt(color.hex.replace("#", ""), 16) > 0xaaaaaa;
              return (
                <div
                  key={card.key}
                  className="border border-black/[0.06] rounded-md overflow-hidden"
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

      {/* Colors in Use — demo previews */}
      <div className="bg-white pb-16 md:pb-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h3 className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40 mb-2">
            Colors in Use
          </h3>
          <p className="text-navy/50 text-base md:text-[17px] leading-relaxed font-sans mb-12">
            Realistic previews showing how the palette works in context.
          </p>

          <div className="max-w-[820px] mx-auto space-y-10">

            {/* Card 1 — Light mode content block */}
            <div>
              <div className="relative rounded-md border border-black/[0.06] overflow-hidden">
                <div className="px-8 md:px-12 pt-10 pb-20" style={{ backgroundColor: "#F2F4F7" }}>
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
                      fontSize: "clamp(24px, 3vw, 34px)",
                      color: "#111C2E",
                    }}
                  >
                    Your Business, Better.
                  </h4>
                  <div
                    className="mt-3 mb-6"
                    style={{ width: 40, height: 2, backgroundColor: "#A73B44" }}
                  />
                  <p
                    className="text-[15px] md:text-base leading-[1.75] mb-6 max-w-md"
                    style={{ fontFamily: "var(--sans)", fontWeight: 500, color: "#2D3340" }}
                  >
                    Since 1980, NorCal SBDC advisors have helped thousands of
                    entrepreneurs access capital, sharpen strategy, and grow with
                    confidence.
                  </p>
                  <div
                    className="inline-block px-6 py-2.5 rounded-sm text-[13px] tracking-[0.02em]"
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
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(242,244,247,0), #F2F4F7)",
                  }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Light mode — SBDC Navy headlines on Cloud, Slate body text, Berry accent rule, Cobalt CTA.
              </p>
            </div>

            {/* Card 2 — Dark mode content block */}
            <div>
              <div className="relative rounded-md border border-white/[0.06] overflow-hidden">
                <div className="px-8 md:px-12 pt-10 pb-20" style={{ backgroundColor: "#111C2E" }}>
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
                      fontSize: "clamp(24px, 3vw, 34px)",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    42,000 Jobs Created
                  </h4>
                  <div
                    className="mt-3 mb-6"
                    style={{ width: 40, height: 2, backgroundColor: "#85A3C8" }}
                  />
                  <p
                    className="text-[15px] md:text-base leading-[1.75] mb-6 max-w-md"
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
                    className="inline-block px-6 py-2.5 rounded-sm text-[13px] tracking-[0.02em]"
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
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(17,28,46,0), #111C2E)",
                  }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Dark mode — white text on Navy, Fog accent rule, Evergreen CTA for growth-themed content.
              </p>
            </div>

            {/* Card 3 — Newsletter header */}
            <div>
              <div className="relative rounded-md border border-black/[0.06] overflow-hidden">
                <div
                  className="px-8 md:px-10 pt-8 pb-6 flex items-center justify-between"
                  style={{ backgroundColor: "#111C2E" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/NCN_Band_Logo_White.png"
                    alt="NorCal SBDC"
                    className="h-7 md:h-8 w-auto"
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
                <div className="px-8 md:px-10 pt-7 pb-24" style={{ backgroundColor: "#FFFFFF" }}>
                  <p
                    className="text-[10px] uppercase tracking-[0.18em] mb-4"
                    style={{ fontFamily: "var(--sans-label)", color: "#5684BA" }}
                  >
                    The Business Advisor
                  </p>
                  <h4
                    className="tracking-[-0.02em] leading-[1.15] mb-4"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      color: "#111C2E",
                    }}
                  >
                    Spring Funding Roundup: New SBA Loan Programs for 2026
                  </h4>
                  <p
                    className="text-[14px] md:text-[15px] leading-[1.75] max-w-lg"
                    style={{ fontFamily: "var(--sans)", fontWeight: 500, color: "#2D3340" }}
                  >
                    This quarter, three new loan programs are available to NorCal small
                    businesses. Our advisors break down eligibility, timelines, and how
                    to get started.
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, rgba(255,255,255,0), #FFFFFF)",
                  }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Newsletter header — Navy masthead with white logo, Cobalt accent strip, Steel eyebrow, clean body layout.
              </p>
            </div>

          </div>
        </div>
      </div>

      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
