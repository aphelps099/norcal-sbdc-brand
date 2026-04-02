import InteriorHero from "@/components/InteriorHero";
import ColorSwatch from "@/components/ColorSwatch";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import { colors } from "@/lib/brand-tokens";
import { gradientColors } from "@/lib/page-gradients";

export default function ColorsPage() {
  const colorEntries = Object.values(colors);

  return (
    <>
      <InteriorHero
        gradient={gradientColors}
        title="Colors"
        subtitle="Our palette is built for contrast, accessibility, and editorial impact."
      />

      {/* Brand Palette — white bg */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] mb-10 text-navy"
            style={{
              fontFamily: "'Tiempos Fine', 'Tiempos', Georgia, serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Brand Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {colorEntries.map((color) => (
              <ColorSwatch
                key={color.hex}
                name={color.name}
                hex={color.hex}
                usage={color.usage}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Usage Guidelines — dark navy bg */}
      <div className="bg-[#0f1c2e] py-16 md:py-24 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="md:w-1/3">
              <h2
                className="tracking-[-0.02em] text-white/90"
                style={{
                  fontFamily: "'Tiempos Fine', 'Tiempos', Georgia, serif",
                  fontWeight: 300,
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                }}
              >
                Usage
              </h2>
            </div>
            <div className="md:w-2/3 space-y-5 text-white/50 text-base md:text-[17px] leading-relaxed font-sans font-500">
              <p>
                Use <strong className="font-800 text-white/80">Midnight</strong> and{" "}
                <strong className="font-800 text-white/80">Slate</strong> for typography and dark
                backgrounds. <strong className="font-800 text-white/80">Cobalt</strong> is our
                primary action color — links, buttons, CTAs.
              </p>
              <p>
                <strong className="font-800 text-white/80">Steel</strong> and{" "}
                <strong className="font-800 text-white/80">Fog</strong> provide depth in
                charts, illustrations, and secondary UI.{" "}
                <strong className="font-800 text-white/80">Berry</strong> adds warmth for
                editorial moments. <strong className="font-800 text-white/80">Evergreen</strong>{" "}
                signals success and growth.
              </p>
              <p>
                All color pairings must meet WCAG AA contrast standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
