import FontSpecimen from "@/components/FontSpecimen";
import { fonts } from "@/lib/brand-tokens";

export default function TypographyPage() {
  const fontEntries = Object.values(fonts);

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold text-cream mb-2">
        Typography
      </h1>
      <p className="text-cream/40 mb-12 max-w-lg">
        Our type system pairs GT Era Display (serif headlines) with GT America
        (sans-serif body) and GT America Mono (labels, stats, UI).
      </p>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-cream/10" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/30">
          Type Specimens
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </div>

      <div className="grid gap-4 mb-16">
        {fontEntries.map((font) => (
          <FontSpecimen
            key={font.family}
            family={font.family}
            weights={font.weights}
            usage={font.usage}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-cream/10" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/30">
          Hierarchy
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </div>

      <div className="space-y-8 mb-16">
        <div className="p-6 rounded-xl border border-cream/5 bg-white/[0.02]">
          <p className="font-mono text-[10px] text-cream/30 mb-2 uppercase tracking-wider">
            Display / Hero
          </p>
          <p className="font-serif text-5xl md:text-6xl font-bold text-cream leading-[1.1]">
            Your Business, <em className="text-pool italic">Better.</em>
          </p>
        </div>

        <div className="p-6 rounded-xl border border-cream/5 bg-white/[0.02]">
          <p className="font-mono text-[10px] text-cream/30 mb-2 uppercase tracking-wider">
            Headline / H1
          </p>
          <p className="font-serif text-3xl md:text-4xl font-bold text-cream">
            Meet Your Business People
          </p>
        </div>

        <div className="p-6 rounded-xl border border-cream/5 bg-white/[0.02]">
          <p className="font-mono text-[10px] text-cream/30 mb-2 uppercase tracking-wider">
            Section Title / H2
          </p>
          <p className="font-serif text-2xl font-bold text-cream">
            Real Clients. Real Results.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-cream/5 bg-white/[0.02]">
          <p className="font-mono text-[10px] text-cream/30 mb-2 uppercase tracking-wider">
            Body Text
          </p>
          <p className="text-base text-cream/70 leading-relaxed max-w-prose">
            Since 1980, SBDC advisors have helped Northern California businesses
            raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
            ideas into million-dollar companies.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-cream/5 bg-white/[0.02]">
          <p className="font-mono text-[10px] text-cream/30 mb-2 uppercase tracking-wider">
            Label / Mono
          </p>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-cream/50">
            Since 1980 &mdash; Northern California
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-cream/10" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/30">
          Rules
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </div>

      <div className="space-y-4 text-cream/60 text-sm leading-relaxed">
        <p>
          <strong className="text-cream">Headlines</strong> always use GT Era
          Display Bold. Italic emphasis words use Pool (#8FC5D9) color.
        </p>
        <p>
          <strong className="text-cream">Body text</strong> uses GT America at
          400 weight. Line height is 1.5&ndash;1.7 for readability.
        </p>
        <p>
          <strong className="text-cream">Labels and metadata</strong> use GT
          America Mono, all-caps, with 0.15em letter-spacing.
        </p>
        <p>
          <strong className="text-cream">Never</strong> mix more than two
          typefaces in a single composition. Serif + sans is the standard
          pairing.
        </p>
      </div>
    </div>
  );
}
