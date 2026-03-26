import ColorSwatch from "@/components/ColorSwatch";
import { colors } from "@/lib/brand-tokens";

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-px flex-1 bg-black/[0.05]" />
      <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-tertiary">
        {label}
      </span>
      <div className="h-px flex-1 bg-black/[0.05]" />
    </div>
  );
}

export default function ColorsPage() {
  const colorEntries = Object.values(colors);

  return (
    <div>
      <h1 className="font-serif text-4xl text-navy mb-2 tracking-[-0.01em]">Colors</h1>
      <p className="text-text-secondary mb-12 max-w-lg font-sans font-500">
        The NorCal SBDC color palette is built for contrast, accessibility, and
        editorial impact. Click any swatch to copy its hex value.
      </p>

      <SectionLabel label="Brand Palette" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {colorEntries.map((color) => (
          <ColorSwatch
            key={color.hex}
            name={color.name}
            hex={color.hex}
            usage={color.usage}
          />
        ))}
      </div>

      <SectionLabel label="Usage Guidelines" />

      <div className="space-y-5 text-text-secondary text-sm leading-relaxed font-sans font-500">
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
      </div>
    </div>
  );
}
