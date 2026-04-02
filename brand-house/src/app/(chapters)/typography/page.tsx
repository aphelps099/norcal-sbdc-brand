import { gradientTypography } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

export default function TypographyPage() {
  return (
    <>
      <InteriorHero gradient={gradientTypography}
        title="Typography"
        subtitle="Three typefaces — Sofia Pro for authority, Sweet Sans Pro for precision, Andale Mono for data."
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Sofia Pro Medium */}
              <div className="border border-black/[0.06] p-7 md:p-9 md:col-span-2">
                <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-7">
                  Sofia Pro Medium
                </p>

                {/* Display — hero */}
                <p
                  className="text-navy tracking-[-0.03em] leading-[1.05] mb-5"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(36px, 4vw, 52px)",
                  }}
                >
                  Your Business, Better.
                </p>

                {/* Body copy */}
                <p
                  className="text-navy/80 text-lg leading-[1.7] mb-5"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                  }}
                >
                  Since 1980, SBDC advisors have helped Northern California businesses raise $2.8B in capital and turn kitchen-table ideas into million-dollar companies.
                </p>

                {/* Italic — editorial accent */}
                <p
                  className="text-navy/50 text-base leading-[1.7] italic"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;My advisor understood my culture and my product.&rdquo;
                </p>
              </div>

              {/* Sweet Sans Pro + Andale Mono — stacked right column */}
              <div className="flex flex-col gap-5">
                {/* Sweet Sans Pro */}
                <div className="border border-black/[0.06] p-7 md:p-9 flex-1">
                  <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-7">
                    Sweet Sans Pro
                  </p>
                  <p
                    className="text-xs uppercase tracking-[0.18em] text-royal mb-4"
                    style={{ fontFamily: "var(--sans-label)" }}
                  >
                    Since 1980 — Northern California
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.14em] text-navy/40"
                    style={{ fontFamily: "var(--sans-label)" }}
                  >
                    Labels &middot; Eyebrows &middot; Tags
                  </p>
                </div>

                {/* Andale Mono */}
                <div className="border border-black/[0.06] p-7 md:p-9 flex-1">
                  <p className="font-label text-[10px] uppercase tracking-[0.18em] text-navy/25 mb-7">
                    Andale Mono
                  </p>
                  <p className="font-mono text-sm text-navy/70 mb-3">
                    $2.8B raised
                  </p>
                  <p className="font-mono text-xs text-navy/40">
                    42,000+ jobs &middot; 44 years
                  </p>
                </div>
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
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Display / Hero — Sofia Pro Medium
                </p>
                <p
                  className="text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em]"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
                >
                  Your Business, <em className="text-royal italic" style={{ fontFamily: "var(--sans)", fontWeight: 500, fontStyle: "italic" }}>Better.</em>
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-navy/30 mb-3">
                  H1 – H4 — Sofia Pro Medium
                </p>
                <p
                  className="text-2xl md:text-3xl text-navy tracking-[-0.01em]"
                  style={{ fontFamily: "var(--sans)", fontWeight: 500 }}
                >
                  Meet Your Business People
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Label / Eyebrow — Sweet Sans Pro Regular
                </p>
                <p className="text-sm tracking-[0.14em] uppercase text-navy/60" style={{ fontFamily: "var(--sans-label)" }}>
                  Capital Access &middot; Business Planning &middot; Crisis Recovery
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Body Text — Sofia Pro Medium
                </p>
                <p className="text-base text-text-secondary leading-[1.7] max-w-prose font-sans">
                  Since 1980, SBDC advisors have helped Northern California businesses
                  raise $2.8B in capital, create 42,000+ jobs, and turn kitchen-table
                  ideas into million-dollar companies.
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Data / Technical — Andale Mono
                </p>
                <p className="font-mono text-sm text-navy/50 tracking-wide">
                  $2.8B raised &middot; 42,000+ jobs &middot; est. 1980
                </p>
              </div>

              <div className="p-6 border border-black/[0.06] bg-[#f7f7f5]">
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-navy/30 mb-3">
                  Tiny Label — Sweet Sans Pro Regular
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-navy/35" style={{ fontFamily: "var(--sans-label)" }}>
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
          <div className="space-y-3 text-white/50 text-base leading-relaxed font-sans max-w-xl">
            <p>
              <strong className="font-sans text-white/80">Sofia Pro Medium</strong> is
              the primary typeface — headings, body, navigation, and display text. Weight 500
              with tight letter-spacing (-0.01em) for a clean, confident presence.
            </p>
            <p>
              <strong className="font-sans text-white/80">Sweet Sans Pro Regular</strong> handles
              labels, eyebrows, tags, and UI micro-copy. Always uppercase
              with generous tracking (0.14–0.2em).
            </p>
            <p>
              <strong className="font-sans text-white/80">Andale Mono</strong> is reserved for
              data points, counters, and technical details — anywhere precision matters.
            </p>
            <p>
              <strong className="font-sans text-white/80">Never</strong> mix more than
              two typefaces in a single composition. Sofia Pro + one accent face is the standard pairing.
            </p>
          </div>
        </div>
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
