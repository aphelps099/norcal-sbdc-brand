import InteriorHero from "@/components/InteriorHero";
import ColorSwatch from "@/components/ColorSwatch";
import { colors } from "@/lib/brand-tokens";

export default function ColorsPage() {
  const colorEntries = Object.values(colors);

  return (
    <>
      <InteriorHero
        title="Colors"
        subtitle="Our palette is built for contrast, accessibility, and editorial impact."
      />
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Brand Palette */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">
              01
            </span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Brand Palette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

        {/* Usage Guidelines */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">
              02
            </span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Usage Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6 text-text-secondary text-sm leading-relaxed font-sans font-500">
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
            </div>
            <div className="space-y-6 text-text-secondary text-sm leading-relaxed font-sans font-500">
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
      </div>
    </>
  );
}
