import InteriorHero from "@/components/InteriorHero";
import FontSpecimen from "@/components/FontSpecimen";
import NextSectionLink from "@/components/NextSectionLink";
import { fonts } from "@/lib/brand-tokens";

export default function TypographyPage() {
  const fontEntries = Object.values(fonts);

  return (
    <>
      <InteriorHero
        title="Typography"
        subtitle="Our type system pairs Tiempos with Proxima Nova for editorial authority and clean readability."
      />
      <div className="bg-white py-16 md:py-24">
        {/* Type Specimens */}
        <div className="mb-20">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10">
              Type Specimens
            </h2>
            <div className="grid gap-3">
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
        </div>

        {/* Hierarchy */}
        <div className="mb-20">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10">
              Hierarchy
            </h2>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="space-y-4">
              <div className="p-7 rounded-lg border border-black/[0.04] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-700 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Display / Hero
                </p>
                <p className="font-serif text-4xl md:text-5xl text-navy leading-[1.1]">
                  Your Business, <em className="text-royal italic">Better.</em>
                </p>
              </div>

              <div className="p-7 rounded-lg border border-black/[0.04] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-700 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Headline / H1
                </p>
                <p className="font-serif text-2xl md:text-3xl text-navy">
                  Meet Your Business People
                </p>
              </div>

              <div className="p-7 rounded-lg border border-black/[0.04] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-700 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Section Title / H2
                </p>
                <p className="font-serif text-xl text-navy">
                  Real Clients. Real Results.
                </p>
              </div>

              <div className="p-7 rounded-lg border border-black/[0.04] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-700 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Body Text
                </p>
                <p className="text-base text-text-secondary leading-[1.7] max-w-prose font-sans font-500">
                  Since 1980, SBDC advisors have helped Northern California businesses
                  raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
                  ideas into million-dollar companies.
                </p>
              </div>

              <div className="p-7 rounded-lg border border-black/[0.04] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-700 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Label / Uppercase Sans
                </p>
                <p className="font-sans text-xs font-800 tracking-[0.2em] uppercase text-navy/35">
                  Since 1980 — Northern California
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-8">
            Rules
          </h2>
          <div className="space-y-4 text-text-secondary text-base leading-relaxed font-sans font-500 max-w-xl">
            <p>
              <strong className="font-800 text-navy">Headlines</strong> always use Tiempos.
              Italic emphasis words use Royal (#1D5AA7) color.
            </p>
            <p>
              <strong className="font-800 text-navy">Body text</strong> uses Proxima Nova
              at 500 weight. Line height is 1.6–1.7 for readability.
            </p>
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
      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
