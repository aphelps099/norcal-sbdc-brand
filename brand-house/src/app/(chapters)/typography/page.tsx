import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";

export default function TypographyPage() {
  return (
    <>
      <InteriorHero
        title="Typography"
        subtitle="Our type system pairs Tiempos with Proxima Nova for editorial authority and clean readability."
      />
      <div className="bg-white py-16 md:py-24">
        {/* Our Typefaces */}
        <div className="mb-24">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-12">
              Our Typefaces
            </h2>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Tiempos */}
              <div className="border border-black/[0.06] p-8 md:p-10">
                <p className="font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-navy/25 mb-8">
                  Tiempos
                </p>

                {/* Headline Black — hero display */}
                <p
                  className="text-navy leading-[1.05] tracking-[-0.03em] mb-6"
                  style={{
                    fontFamily: "'Tiempos Headline', 'Tiempos', Georgia, serif",
                    fontWeight: 900,
                    fontSize: "clamp(36px, 4vw, 52px)",
                  }}
                >
                  Your Business, Better.
                </p>

                {/* Headline Medium — section heading */}
                <p
                  className="text-navy/60 text-xl md:text-2xl leading-snug tracking-[-0.01em] mb-6"
                  style={{
                    fontFamily: "'Tiempos Headline', 'Tiempos', Georgia, serif",
                    fontWeight: 500,
                  }}
                >
                  Meet Your Business People
                </p>

                {/* Text Regular — body serif */}
                <p
                  className="text-navy/40 text-base leading-[1.7]"
                  style={{
                    fontFamily: "'Tiempos', Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  Since 1980, SBDC advisors have helped Northern California businesses raise $2.8B in capital and turn kitchen-table ideas into million-dollar companies.
                </p>
              </div>

              {/* Proxima Nova */}
              <div className="border border-black/[0.06] p-8 md:p-10">
                <p className="font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-navy/25 mb-8">
                  Proxima Nova
                </p>

                {/* Black 900 — impact stat */}
                <p className="font-sans font-900 text-navy tracking-[-0.02em] leading-[1.1] mb-6"
                  style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}
                >
                  42,000+ JOBS CREATED
                </p>

                {/* Extrabold 800 — label */}
                <p className="font-sans font-800 text-[13px] uppercase tracking-[0.16em] text-royal mb-6">
                  Since 1980 — Northern California
                </p>

                {/* Medium 500 — body */}
                <p className="font-sans font-500 text-base text-text-secondary leading-[1.7]">
                  SBDC advisors have helped Northern California businesses raise $2.8B in capital and turn kitchen-table ideas into million-dollar companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hierarchy */}
        <div className="mb-24">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10">
              Hierarchy
            </h2>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="space-y-4">
              <div className="p-7 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Display / Hero
                </p>
                <p
                  className="text-4xl md:text-5xl text-navy leading-[1.1]"
                  style={{ fontFamily: "'Tiempos Headline', 'Tiempos', Georgia, serif", fontWeight: 900 }}
                >
                  Your Business, <em className="text-royal" style={{ fontFamily: "'Tiempos', Georgia, serif", fontWeight: 500, fontStyle: "italic" }}>Better.</em>
                </p>
              </div>

              <div className="p-7 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Headline / H1
                </p>
                <p
                  className="text-2xl md:text-3xl text-navy"
                  style={{ fontFamily: "'Tiempos Headline', 'Tiempos', Georgia, serif", fontWeight: 500 }}
                >
                  Meet Your Business People
                </p>
              </div>

              <div className="p-7 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Section Title / H2
                </p>
                <p className="font-serif text-xl text-navy">
                  Real Clients. Real Results.
                </p>
              </div>

              <div className="p-7 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Body Text
                </p>
                <p className="text-base text-text-secondary leading-[1.7] max-w-prose font-sans font-500">
                  Since 1980, SBDC advisors have helped Northern California businesses
                  raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
                  ideas into million-dollar companies.
                </p>
              </div>

              <div className="p-7 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
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
