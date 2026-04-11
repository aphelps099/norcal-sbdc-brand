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
          <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
          <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">Palette</p>
          <h2
            className="tracking-[-0.02em] mb-2 text-navy"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            }}
          >
            Recommended Refined Palette
          </h2>
          <p className="text-navy/45 text-[14px] leading-relaxed font-sans mb-14 max-w-[480px]">
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
          <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
          <h3
            className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-6"
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

      {/* Gradient — full-width A24 hero band */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #0f1c2e 0%, #1D5AA7 45%, #85A3C8 75%, #c8d8e8 100%)",
          minHeight: "clamp(320px, 38vw, 500px)",
        }}
      >
        {/* Coral keyline */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div>
              <p className="font-label text-[9px] uppercase tracking-[0.12em] text-white/30 mb-2">Brand Gradient</p>
              <p className="font-label text-[9px] uppercase tracking-[0.08em] text-white/20">Navy → Royal → Pool → Cloud</p>
            </div>
            <p className="font-label text-[9px] uppercase tracking-[0.1em] text-white/20">NorCal SBDC</p>
          </div>

          {/* Center headline */}
          <div className="max-w-[680px]">
            <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
            <h2
              className="tracking-[-0.03em] text-white/90 leading-[1.05]"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 400,
                fontSize: "clamp(32px, 5vw, 72px)",
              }}
            >
              Northern California&rsquo;s
              <br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>Small Business Network.</span>
            </h2>
          </div>

          {/* Bottom stats row */}
          <div className="flex items-end justify-between">
            <div className="flex gap-8 md:gap-14">
              {[
                { num: "42K", label: "Jobs Created" },
                { num: "$2.1B", label: "Capital Accessed" },
                { num: "1980", label: "Founded" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-sans text-white/80 leading-none mb-1" style={{ fontSize: "clamp(18px, 2.2vw, 28px)", fontWeight: 500 }}>{s.num}</p>
                  <p className="font-label text-[9px] uppercase tracking-[0.08em] text-white/30">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-white/10" />
            <p className="hidden md:block font-label text-[9px] uppercase tracking-[0.08em] text-white/20">Gradient applies across all digital surfaces</p>
          </div>
        </div>
      </div>

      {/* Colors in Use — cream bg */}
      <div className="py-16 md:py-24" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-10">
          <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
          <h3 className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">
            Colors in Use
          </h3>
          <h2
            className="tracking-[-0.02em] text-navy mb-3"
            style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
          >
            Palette in Context
          </h2>
          <p className="text-navy/45 text-[14px] leading-relaxed font-sans max-w-[480px]">
            Realistic previews showing how each color role works across content types.
          </p>
        </div>

        <div className="pl-8 md:pl-12">
          <ColorsInUseCarousel bgColor="#f5f4f0">

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
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Newsletter — Navy masthead, Cobalt accent strip, Steel eyebrow.
              </p>
            </div>

            {/* Card 4 — Stat / Impact tile (coral accent) */}
            <div className="flex-shrink-0 w-[300px] md:w-[340px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative overflow-hidden" style={{ backgroundColor: "#0f1c2e" }}>
                <div className="h-[2px] bg-[#c4543a]" />
                <div className="px-6 pt-7 pb-20">
                  <p
                    className="text-[9px] uppercase tracking-[0.14em] mb-6"
                    style={{ fontFamily: "var(--sans-label)", color: "rgba(196,84,58,0.7)" }}
                  >
                    2025 Annual Impact
                  </p>
                  {[
                    { num: "$847M", label: "Capital Facilitated" },
                    { num: "6,200", label: "Businesses Served" },
                    { num: "14,800", label: "Jobs Retained" },
                  ].map((stat, i) => (
                    <div key={stat.label} className={`${i < 2 ? "mb-5 pb-5 border-b" : ""}`} style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      <p
                        className="leading-none mb-1 tracking-[-0.03em]"
                        style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(22px, 3vw, 30px)", color: "rgba(255,255,255,0.9)" }}
                      >
                        {stat.num}
                      </p>
                      <p style={{ fontFamily: "var(--sans-label)", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent, #0f1c2e)" }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Impact stats — Coral keyline, Navy bg, white numerals.
              </p>
            </div>

            {/* Card 5 — Client quote / pull quote */}
            <div className="flex-shrink-0 w-[300px] md:w-[340px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative overflow-hidden" style={{ backgroundColor: "#F2F4F7" }}>
                <div
                  className="px-6 pt-7 pb-20 flex flex-col"
                  style={{ minHeight: 320 }}
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.14em] mb-6"
                    style={{ fontFamily: "var(--sans-label)", color: "rgba(15,28,46,0.3)" }}
                  >
                    Client Story
                  </p>
                  <p
                    className="tracking-[-0.01em] leading-[1.4] mb-5 flex-1"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#0f1c2e",
                    }}
                  >
                    &ldquo;I couldn&rsquo;t have accomplished my goal of starting a business and fulfilling my dream without the SBDC.&rdquo;
                  </p>
                  <div>
                    <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#c4543a" }} />
                    <p style={{ fontFamily: "var(--sans)", fontSize: "11px", fontWeight: 500, color: "#0f1c2e", marginBottom: 2 }}>David Cruz, CEO</p>
                    <p style={{ fontFamily: "var(--sans-label)", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(15,28,46,0.35)" }}>Rep It Out &middot; Solano-Napa SBDC</p>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent, #F2F4F7)" }}
                />
              </div>
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Pull quote — Cloud bg, Navy type, coral attribution rule.
              </p>
            </div>

            {/* Card 6 — Social post tile */}
            <div className="flex-shrink-0 w-[260px] md:w-[300px]" style={{ scrollSnapAlign: "start" }}>
              <div className="relative overflow-hidden aspect-square" style={{ backgroundColor: "#1D5AA7" }}>
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg, #0f1c2e 0%, #1D5AA7 60%, #85A3C8 100%)" }}
                />
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <p style={{ fontFamily: "var(--sans-label)", fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>@norcalsbdc</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c4543a]" />
                  </div>
                  <div>
                    <p
                      className="leading-[1.2] mb-3 tracking-[-0.02em]"
                      style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(18px, 2.5vw, 22px)", color: "rgba(255,255,255,0.92)" }}
                    >
                      $713K raised.
                      <br />
                      <span style={{ color: "rgba(255,255,255,0.45)" }}>One advisor call at a time.</span>
                    </p>
                    <div className="w-6 h-[2px] bg-[#c4543a] mb-3" />
                    <p style={{ fontFamily: "var(--sans-label)", fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Rep It Out &middot; Vallejo</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-navy/40 text-[13px] leading-relaxed font-sans italic">
                Social tile — Royal gradient, coral dot, ghost type.
              </p>
            </div>

          </ColorsInUseCarousel>
        </div>
      </div>


      {/* Accessibility — WCAG contrast ratios */}
      <div className="bg-[#0f1c2e] py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/25 mb-2">Standards</p>
          <h2
            className="tracking-[-0.02em] text-white/90 mb-3"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            }}
          >
            Accessibility
          </h2>
          <p className="text-white/40 text-[14px] leading-relaxed font-sans mb-12 max-w-[480px]">
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
