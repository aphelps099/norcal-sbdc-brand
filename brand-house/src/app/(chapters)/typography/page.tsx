import InteriorHero from "@/components/InteriorHero";
import FontSpecimen from "@/components/FontSpecimen";
import { fonts } from "@/lib/brand-tokens";

export default function TypographyPage() {
  const fontEntries = Object.values(fonts);

  return (
    <>
      <InteriorHero
        title="Typography"
        subtitle="Our type system pairs Tiempos with Proxima Nova for editorial authority and clean readability."
      />
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Type Specimens */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">01</span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Type Specimens
          </h2>
          <div className="grid gap-4">
            {fontEntries.map((font) => (
              <FontSpecimen
                key={font.family}
                family={font.family}
                weights={font.weights}
                usage={font.usage}
              />
            ))}
          </div>
        </div>

        {/* Hierarchy */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">02</span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Hierarchy
          </h2>
          <div className="space-y-6">
            <div className="p-8 rounded-xl border border-black/[0.04] bg-white">
              <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-4">
                Display / Hero
              </p>
              <p className="font-serif text-5xl md:text-6xl text-navy leading-[1.1]">
                Your Business, <em className="text-royal italic">Better.</em>
              </p>
            </div>

            <div className="p-8 rounded-xl border border-black/[0.04] bg-white">
              <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-4">
                Headline / H1
              </p>
              <p className="font-serif text-3xl md:text-4xl text-navy">
                Meet Your Business People
              </p>
            </div>

            <div className="p-8 rounded-xl border border-black/[0.04] bg-white">
              <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-4">
                Section Title / H2
              </p>
              <p className="font-serif text-2xl text-navy">
                Real Clients. Real Results.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-black/[0.04] bg-white">
              <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-4">
                Body Text
              </p>
              <p className="text-base text-text-secondary leading-[1.7] max-w-prose font-sans font-500">
                Since 1980, SBDC advisors have helped Northern California businesses
                raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
                ideas into million-dollar companies.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-black/[0.04] bg-white">
              <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-4">
                Label / Uppercase Sans
              </p>
              <p className="font-sans text-xs font-800 tracking-[0.2em] uppercase text-navy/40">
                Since 1980 — Northern California
              </p>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">03</span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary text-sm leading-relaxed font-sans font-500">
            <div className="space-y-5">
              <p>
                <strong className="font-800 text-navy">Headlines</strong> always use Tiempos.
                Italic emphasis words use Royal (#1D5AA7) color.
              </p>
              <p>
                <strong className="font-800 text-navy">Body text</strong> uses Proxima Nova
                at 500 weight. Line height is 1.6–1.7 for readability.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                <strong className="font-800 text-navy">Labels</strong> use Proxima Nova at
                800 weight, all-caps, with 0.15–0.2em letter-spacing.
              </p>
              <p>
                <strong className="font-800 text-navy">Never</strong> mix more than two
                typefaces in a single composition. Serif + sans is the standard pairing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
