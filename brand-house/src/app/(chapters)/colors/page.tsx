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
            Usage Guidelines
          </h2>
          <div className="space-y-5 text-text-secondary text-base leading-relaxed font-sans font-500 max-w-xl">
            <p>
              <strong className="font-800 text-navy">Navy (#0f1c2e)</strong> is our primary
              brand color. Use for headlines, hero sections, and high-impact moments.
            </p>
            <p>
              <strong className="font-800 text-navy">Royal (#1D5AA7)</strong> is our
              signature blue — used for links, active states, and primary accents.
            </p>
            <p>
              <strong className="font-800 text-navy">Pool (#8FC5D9)</strong> adds editorial
              flair. Use for emphasis text, pull quotes, and accent elements.
            </p>
            <p>
              <strong className="font-800 text-navy">Strawberry (#F7024D)</strong> is
              reserved exclusively for CTAs and critical alerts. Use sparingly.
            </p>
            <p>
              <strong className="font-800 text-navy">Cream (#f5f4f0)</strong> is our primary
              background. It provides warmth without the sterility of pure white.
            </p>
            <p>
              <strong className="font-800 text-navy">Contrast ratios</strong> must meet
              WCAG AA standards. Navy on cream passes at all sizes. Royal on white
              passes for large text only.
            </p>
          </div>
        </div>
      </div>
      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
