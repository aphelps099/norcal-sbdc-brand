import InteriorHero from "@/components/InteriorHero";
import ColorSwatch from "@/components/ColorSwatch";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
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

      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
