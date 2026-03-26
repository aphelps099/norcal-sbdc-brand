import ColorSwatch from "@/components/ColorSwatch";
import { colors } from "@/lib/brand-tokens";

export default function ColorsPage() {
  const colorEntries = Object.values(colors);

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold text-cream mb-2">Colors</h1>
      <p className="text-cream/40 mb-12 max-w-lg">
        The NorCal SBDC color palette is built for contrast, accessibility, and
        editorial impact. Click any swatch to copy its hex value.
      </p>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-cream/10" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/30">
          Brand Palette
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </div>

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

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-cream/10" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/30">
          Usage Guidelines
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </div>

      <div className="space-y-6 text-cream/60 text-sm leading-relaxed">
        <p>
          <strong className="text-cream">Navy (#0f1c2e)</strong> is our primary
          background. It provides the depth and gravitas that anchors the brand.
        </p>
        <p>
          <strong className="text-cream">Royal (#1D5AA7)</strong> is our
          signature blue — used for links, active states, and primary accents.
        </p>
        <p>
          <strong className="text-cream">Pool (#8FC5D9)</strong> adds editorial
          flair. Use it for emphasis text, pull quotes, and accent elements.
        </p>
        <p>
          <strong className="text-cream">Strawberry (#F7024D)</strong> is
          reserved exclusively for CTAs and critical alerts. Use sparingly.
        </p>
        <p>
          <strong className="text-cream">Cream (#f0efeb)</strong> is our primary
          text color on dark backgrounds. Never use pure white (#fff) for body
          text — cream provides a warmer, more editorial feel.
        </p>
      </div>
    </div>
  );
}
