import { gradientTypography } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

export default function TypographyPage() {
  return (
    <>
      <InteriorHero gradient={gradientTypography}
        title="Typography"
        subtitle="Our type system pairs PT Serif with Proxima Nova for editorial authority and clean readability."
      />
      <div className="bg-white py-12 md:py-16">
        {/* Our Typefaces */}
        <div className="mb-16">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10" style={{ fontWeight: 500 }}>
              Our Typefaces
            </h2>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* PT Serif */}
              <div className="border border-black/[0.06] p-7 md:p-9">
                <p className="font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-navy/25 mb-7">
                  PT Serif
                </p>

                {/* Regular 400 — body */}
                <p
                  className="text-navy/80 text-lg leading-[1.7] mb-5"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                  }}
                >
                  Since 1980, SBDC advisors have helped Northern California businesses raise $2.8B in capital and turn kitchen-table ideas into million-dollar companies.
                </p>

                {/* Bold 700 — emphasis */}
                <p
                  className="text-navy text-lg leading-[1.5] mb-5"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 700,
                  }}
                >
                  Real clients. Real results. Real impact.
                </p>

                {/* Italic — editorial */}
                <p
                  className="text-navy/50 text-base leading-[1.7] italic"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;My advisor understood my culture and my product.&rdquo;
                </p>
              </div>

              {/* Proxima Nova */}
              <div className="border border-black/[0.06] p-7 md:p-9">
                <p className="font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-navy/25 mb-7">
                  Proxima Nova
                </p>

                {/* Regular/Light — hero display */}
                <p className="font-sans text-navy tracking-[-0.03em] leading-[1.05] mb-5"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 500 }}
                >
                  Your Business, Better.
                </p>

                {/* Extrabold 800 — label */}
                <p className="font-sans font-800 text-[13px] uppercase tracking-[0.16em] text-royal mb-5">
                  Since 1980 — Northern California
                </p>

                {/* Medium 500 — UI text */}
                <p className="font-sans font-500 text-sm text-text-secondary leading-[1.6]">
                  Used for headings, navigation, labels, buttons, and all interface elements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hierarchy */}
        <div className="mb-16">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-8" style={{ fontWeight: 500 }}>
              Hierarchy
            </h2>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="space-y-3">
              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Display / Hero — Proxima Nova 500
                </p>
                <p
                  className="text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
                >
                  Your Business, <em className="text-royal italic" style={{ fontFamily: "var(--serif)", fontWeight: 400, fontStyle: "italic" }}>Better.</em>
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  H1 – H4 — Proxima Nova 500
                </p>
                <p
                  className="text-2xl md:text-3xl text-navy tracking-[-0.01em]"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
                >
                  Meet Your Business People
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  H5 – H6 / Label — Proxima Nova 800
                </p>
                <p className="font-sans text-sm font-800 tracking-[0.12em] uppercase text-navy/60">
                  Capital Access &middot; Business Planning &middot; Crisis Recovery
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Body Text — PT Serif 400
                </p>
                <p className="text-base text-text-secondary leading-[1.7] max-w-prose font-serif">
                  Since 1980, SBDC advisors have helped Northern California businesses
                  raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
                  ideas into million-dollar companies.
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Tiny Label — Proxima Nova 800
                </p>
                <p className="font-sans text-xs font-800 tracking-[0.2em] uppercase text-navy/35">
                  Since 1980 — Northern California
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Rules — dark navy bg */}
      <div className="bg-[#0f1c2e] py-14 md:py-20 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-7"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Rules
          </h2>
          <div className="space-y-3 text-white/50 text-base leading-relaxed font-serif max-w-xl">
            <p>
              <strong className="font-sans font-800 text-white/80">Headings H1–H4</strong> use Proxima Nova at 500 weight.
              Italic emphasis uses PT Serif with Royal (#1D5AA7) color.
            </p>
            <p>
              <strong className="font-sans font-800 text-white/80">Body text</strong> uses PT Serif
              at 400 weight. Line height is 1.6–1.7 for readability.
            </p>
            <p>
              <strong className="font-sans font-800 text-white/80">Labels &amp; H5–H6</strong> use Proxima Nova at
              800 weight, all-caps, with 0.15–0.2em letter-spacing.
            </p>
            <p>
              <strong className="font-sans font-800 text-white/80">Never</strong> mix more than two
              typefaces in a single composition. Serif + sans is the standard pairing.
            </p>
          </div>
        </div>
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
