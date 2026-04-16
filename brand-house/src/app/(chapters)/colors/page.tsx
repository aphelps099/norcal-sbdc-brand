import InteriorHero from "@/components/InteriorHero";
import ColorsTabs from "@/components/ColorsTabs";
import ApplicationsHeader from "@/components/ApplicationsHeader";
import ColorsInUseCarousel from "@/components/ColorsInUseCarousel";
import NextSectionLink from "@/components/NextSectionLink";
import { STAR_PATH } from "@/lib/brand-tokens";

/** Shared poster card frame — fixed aspect, subtle shadow, refined border */
function PosterFrame({
  children,
  caption,
  widthClass = "w-[320px] md:w-[380px]",
  aspect = "aspect-[3/4]",
}: {
  children: React.ReactNode;
  caption: string;
  widthClass?: string;
  aspect?: string;
}) {
  return (
    <div className={`flex-shrink-0 ${widthClass}`} style={{ scrollSnapAlign: "start" }}>
      <div
        className={`relative ${aspect} overflow-hidden`}
        style={{
          boxShadow:
            "0 1px 2px rgba(15,28,46,0.04), 0 12px 40px -12px rgba(15,28,46,0.18)",
        }}
      >
        {children}
      </div>
      <p className="mt-4 font-label text-[10px] uppercase tracking-[0.14em] text-navy/40">
        {caption}
      </p>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <>
      <InteriorHero
        chapterNumber="01"
        category="visual"
        title="Colors"
        subtitle="Our palette is built for contrast, accessibility, and editorial impact."
      />

      {/* ───────────── 01 · BRAND COLORS (tabs) ───────────── */}
      <div className="bg-cream pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-10">
          <div className="w-8 h-[2px] bg-[#c4543a] mb-5" />
          <p className="font-label text-[10px] uppercase tracking-[0.16em] text-navy/35">
            01
          </p>
        </div>

        <ColorsTabs />
      </div>

      {/* ───────────── 02 · APPLICATIONS (trophy gallery) ───────────── */}
      <div className="bg-cream pb-24 md:pb-32">
        <ApplicationsHeader
          eyebrow="02"
          title="Applications."
          lead="Northern California’s small business network. From navy to light — used across digital surfaces, reports, and campaign headers to convey depth and trust."
        />

        <div className="pl-8 md:pl-12">
          <ColorsInUseCarousel bgColor="#f5f4f0">
            {/* ─── Poster 1 · THE BRAND GRADIENT ─── */}
            <PosterFrame
              caption="01 · The Brand Gradient"
              widthClass="w-[360px] md:w-[440px]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(155deg, #0f1c2e 0%, #1D5AA7 45%, #85A3C8 75%, #c8d8e8 100%)",
                }}
              />
              {/* Grain */}
              <div
                className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                }}
              />
              {/* Coral keyline */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
              {/* Star watermark */}
              <div className="absolute -right-10 -bottom-10 w-[60%] opacity-[0.09] pointer-events-none">
                <svg viewBox="0 0 2107 2003" aria-hidden="true">
                  <path d={STAR_PATH} fill="white" />
                </svg>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-7">
                <div className="flex items-start justify-between">
                  <span
                    className="font-label text-[9px] uppercase tracking-[0.14em] text-white/70 inline-block px-2 py-1 border border-white/25"
                  >
                    Brand Gradient
                  </span>
                  <span className="font-label text-[9px] uppercase tracking-[0.1em] text-white/35">
                    Navy → Cloud
                  </span>
                </div>
                <div>
                  <div className="w-8 h-[2px] bg-[#c4543a] mb-4" />
                  <h3
                    className="text-white/95 leading-[1.0] tracking-[-0.03em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(28px, 3.4vw, 38px)",
                    }}
                  >
                    Northern
                    <br />
                    California&rsquo;s
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.55)" }}>
                      Small Business
                      <br />
                      Network.
                    </span>
                  </h3>
                </div>
              </div>
            </PosterFrame>

            {/* ─── Poster 2 · TURNIP EDITORIAL (uses Turnip) ─── */}
            <PosterFrame caption="02 · Editorial — Turnip on Cream">
              <div className="absolute inset-0" style={{ backgroundColor: "#f5f4f0" }} />
              {/* Coral rule */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
              <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p
                    className="font-label text-[9px] uppercase tracking-[0.18em] text-navy/40"
                  >
                    Client Story · 02
                  </p>
                </div>
                <div>
                  <p
                    className="text-navy leading-[1.05] tracking-[-0.01em] mb-5"
                    style={{
                      fontFamily: "var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(30px, 3.6vw, 44px)",
                    }}
                  >
                    &ldquo;I couldn&rsquo;t have started this business without
                    <span style={{ color: "#A73B44" }}> the SBDC</span>.&rdquo;
                  </p>
                  <div className="w-8 h-[2px] bg-[#c4543a] mb-3" />
                  <p
                    className="font-sans text-navy text-[12px]"
                    style={{ fontWeight: 500 }}
                  >
                    David Cruz, CEO
                  </p>
                  <p className="font-label text-[9px] uppercase tracking-[0.1em] text-navy/45 mt-1">
                    Rep It Out · Solano-Napa SBDC
                  </p>
                </div>
              </div>
            </PosterFrame>

            {/* ─── Poster 3 · IMPACT STAT (Navy / Coral) ─── */}
            <PosterFrame caption="03 · Impact Report — Navy anchor">
              <div className="absolute inset-0" style={{ backgroundColor: "#0f1c2e" }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
              {/* Star watermark */}
              <div className="absolute -left-16 -bottom-16 w-[70%] opacity-[0.05] pointer-events-none">
                <svg viewBox="0 0 2107 2003" aria-hidden="true">
                  <path d={STAR_PATH} fill="white" />
                </svg>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-7">
                <p className="font-label text-[9px] uppercase tracking-[0.14em] text-white/45">
                  2025 Annual Impact
                </p>
                <div>
                  <p
                    className="leading-none tracking-[-0.04em] text-white mb-2"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(56px, 7vw, 96px)",
                    }}
                  >
                    $847M
                  </p>
                  <div className="w-8 h-[2px] bg-[#c4543a] my-4" />
                  <p
                    className="font-label text-[10px] uppercase tracking-[0.14em] text-white/60"
                  >
                    Capital Facilitated
                  </p>
                  <p className="mt-10 text-white/70 text-[13px] leading-[1.6] font-sans max-w-[260px]">
                    Northern California&rsquo;s small businesses are the backbone of
                    our communities.
                  </p>
                </div>
              </div>
            </PosterFrame>

            {/* ─── Poster 4 · SOCIAL TILE (Royal gradient) ─── */}
            <PosterFrame caption="04 · Social — Royal gradient" aspect="aspect-square">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #0f1c2e 0%, #1D5AA7 55%, #5684BA 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <p className="font-label text-[9px] uppercase tracking-[0.14em] text-white/50">
                    @norcalsbdc
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c4543a]" />
                </div>
                <div>
                  <p
                    className="leading-[1.05] mb-3 tracking-[-0.02em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(22px, 3vw, 30px)",
                      color: "rgba(255,255,255,0.95)",
                    }}
                  >
                    $713K raised.
                    <br />
                    <span style={{ color: "rgba(255,255,255,0.55)" }}>
                      One advisor call at a time.
                    </span>
                  </p>
                  <div className="w-6 h-[2px] bg-[#c4543a] mb-3" />
                  <p className="font-label text-[9px] uppercase tracking-[0.12em] text-white/40">
                    Rep It Out · Vallejo
                  </p>
                </div>
              </div>
            </PosterFrame>

            {/* ─── Poster 5 · NEWSLETTER MASTHEAD (Cloud / Cobalt) ─── */}
            <PosterFrame caption="05 · Newsletter masthead">
              <div className="absolute inset-0" style={{ backgroundColor: "#FFFFFF" }} />
              <div className="relative h-full flex flex-col">
                {/* Navy masthead */}
                <div
                  className="flex items-center justify-between px-6 py-5"
                  style={{ backgroundColor: "#0f1c2e" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/NCN_Band_Logo_White.png"
                    alt="NorCal SBDC"
                    className="h-6 w-auto"
                    style={{ opacity: 0.95 }}
                  />
                  <p className="font-label text-[9px] uppercase tracking-[0.14em] text-white/45">
                    April 2026
                  </p>
                </div>
                {/* Cobalt strip */}
                <div style={{ height: 3, backgroundColor: "#004290" }} />
                {/* Body */}
                <div className="flex-1 px-6 pt-7 pb-8 flex flex-col justify-between">
                  <div>
                    <p className="font-label text-[9px] uppercase tracking-[0.18em] text-[#5684BA] mb-3">
                      The Business Advisor
                    </p>
                    <h4
                      className="text-navy leading-[1.12] tracking-[-0.01em]"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "clamp(19px, 2.2vw, 24px)",
                      }}
                    >
                      Spring Funding Roundup: New SBA Loan Programs for 2026.
                    </h4>
                  </div>
                  <div>
                    <div className="w-6 h-[2px] bg-[#c4543a] mb-3" />
                    <p className="font-label text-[9px] uppercase tracking-[0.12em] text-navy/45">
                      Issue 04 · Quarterly
                    </p>
                  </div>
                </div>
              </div>
            </PosterFrame>

            {/* ─── Poster 6 · TAGLINE KNOCKOUT (Navy + Turnip italic) ─── */}
            <PosterFrame caption="06 · Tagline — Turnip italic closer">
              <div className="absolute inset-0" style={{ backgroundColor: "#0f1c2e" }} />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c4543a]" />
              <div className="absolute -right-12 -top-12 w-[70%] opacity-[0.06] pointer-events-none">
                <svg viewBox="0 0 2107 2003" aria-hidden="true">
                  <path d={STAR_PATH} fill="white" />
                </svg>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <p className="font-label text-[9px] uppercase tracking-[0.14em] text-white/45">
                  Tagline
                </p>
                <div>
                  <h3
                    className="leading-[0.98] text-white tracking-[-0.02em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(34px, 4.4vw, 56px)",
                    }}
                  >
                    Your Business,
                    <br />
                    <span
                      style={{
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontWeight: 400,
                        color: "#85A3C8",
                      }}
                    >
                      Better.
                    </span>
                  </h3>
                  <div className="w-8 h-[2px] bg-[#c4543a] mt-6 mb-3" />
                  <p className="font-label text-[9px] uppercase tracking-[0.14em] text-white/45">
                    Navy anchor · Fog emphasis
                  </p>
                </div>
              </div>
            </PosterFrame>
          </ColorsInUseCarousel>
        </div>
      </div>

      <NextSectionLink title="Typography" href="/typography" />
    </>
  );
}
