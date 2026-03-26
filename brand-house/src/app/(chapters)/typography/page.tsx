import FontSpecimen from "@/components/FontSpecimen";
import { fonts } from "@/lib/brand-tokens";

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

export default function TypographyPage() {
  const fontEntries = Object.values(fonts);

  return (
    <div>
      <h1 className="font-serif text-4xl text-navy mb-2 tracking-[-0.01em]">
        Typography
      </h1>
      <p className="text-text-secondary mb-12 max-w-lg font-sans font-500">
        Our type system pairs Tiempos (serif headlines) with Proxima Nova
        (sans-serif body) and GT America Mono (labels, stats, UI).
      </p>

      <SectionLabel label="Type Specimens" />

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

      <SectionLabel label="Hierarchy" />

      <div className="space-y-6 mb-16">
        <div className="p-6 rounded-xl border border-black/[0.04] bg-white">
          <p className="font-mono text-[0.6rem] text-text-tertiary mb-3 uppercase tracking-[0.15em]">
            Display / Hero
          </p>
          <p className="font-serif text-5xl md:text-6xl text-navy leading-[1.1]">
            Your Business, <em className="text-royal italic">Better.</em>
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/[0.04] bg-white">
          <p className="font-mono text-[0.6rem] text-text-tertiary mb-3 uppercase tracking-[0.15em]">
            Headline / H1
          </p>
          <p className="font-serif text-3xl md:text-4xl text-navy">
            Meet Your Business People
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/[0.04] bg-white">
          <p className="font-mono text-[0.6rem] text-text-tertiary mb-3 uppercase tracking-[0.15em]">
            Section Title / H2
          </p>
          <p className="font-serif text-2xl text-navy">
            Real Clients. Real Results.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/[0.04] bg-white">
          <p className="font-mono text-[0.6rem] text-text-tertiary mb-3 uppercase tracking-[0.15em]">
            Body Text
          </p>
          <p className="text-base text-text-secondary leading-[1.7] max-w-prose font-sans font-500">
            Since 1980, SBDC advisors have helped Northern California businesses
            raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
            ideas into million-dollar companies.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-black/[0.04] bg-white">
          <p className="font-mono text-[0.6rem] text-text-tertiary mb-3 uppercase tracking-[0.15em]">
            Label / Mono
          </p>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-text-tertiary">
            Since 1980 &mdash; Northern California
          </p>
        </div>
      </div>

      <SectionLabel label="Rules" />

      <div className="space-y-4 text-text-secondary text-sm leading-relaxed font-sans font-500">
        <p>
          <strong className="font-800 text-navy">Headlines</strong> always use Tiempos.
          Italic emphasis words use Royal (#1D5AA7) color.
        </p>
        <p>
          <strong className="font-800 text-navy">Body text</strong> uses Proxima Nova
          at 500 weight. Line height is 1.6&ndash;1.7 for readability.
        </p>
        <p>
          <strong className="font-800 text-navy">Labels and metadata</strong> use GT
          America Mono, all-caps, with 0.15em letter-spacing.
        </p>
        <p>
          <strong className="font-800 text-navy">Never</strong> mix more than two
          typefaces in a single composition. Serif + sans is the standard pairing.
        </p>
      </div>
    </div>
  );
}
