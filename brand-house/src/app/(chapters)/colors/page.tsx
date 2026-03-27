import InteriorHero from "@/components/InteriorHero";
import ColorSwatch from "@/components/ColorSwatch";
import NextSectionLink from "@/components/NextSectionLink";
import { colors } from "@/lib/brand-tokens";

export default function ColorsPage() {
  const colorEntries = Object.values(colors);

  return (
    <>
      <InteriorHero
        title="Colors"
        subtitle="Our palette is built for contrast, accessibility, and editorial impact."
      />
      <div className="bg-white py-16 md:py-24">
        {/* Brand Palette */}
        <div className="mb-20">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10">
              Brand Palette
            </h2>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
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

        {/* Usage Guidelines */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-8">
            Usage
          </h2>
          <div className="space-y-5 text-text-secondary text-base leading-relaxed font-sans font-500 max-w-xl">
            <p>
              Use <strong className="font-800 text-navy">Midnight</strong> and{" "}
              <strong className="font-800 text-navy">Slate</strong> for typography and dark
              backgrounds. <strong className="font-800 text-navy">Cobalt</strong> is our
              primary action color — links, buttons, CTAs.
            </p>
            <p>
              <strong className="font-800 text-navy">Steel</strong> and{" "}
              <strong className="font-800 text-navy">Fog</strong> provide depth in
              charts, illustrations, and secondary UI.{" "}
              <strong className="font-800 text-navy">Berry</strong> adds warmth for
              editorial moments. <strong className="font-800 text-navy">Evergreen</strong>{" "}
              signals success and growth.
            </p>
            <p>
              All color pairings must meet WCAG AA contrast standards.
            </p>
          </div>
        </div>
      </div>
      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
