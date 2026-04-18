import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import StoryStructureExplorer from "@/components/StoryStructureExplorer";
import CreamPaperBackdrop from "@/components/CreamPaperBackdrop";

/* ─────────────────────────────  DATA  ───────────────────────────── */

const signatureStories = [
  {
    biz: "ReJoule", owner: "Zora Chung, CFO", center: "Tech Futures Group",
    metric: "$27M", metricLabel: "Total Funding",
    tagline: "Fast, accurate battery health diagnostics enabling reuse, repurposing, and recycling at scale.",
    quote: "The advice we received from Pitch Global has been extremely valuable, and the exposure to their network is unmatched.",
    highlights: "$25M non-dilutive grants. 90% cost reduction. 2,000+ service centers.",
    url: "https://www.norcalsbdc.org/impact-2025/rejoule/",
  },
  {
    biz: "Marin Auto Works", owner: "Chris Aguirre, Owner", center: "Marin SBDC",
    metric: "$559K", metricLabel: "Capital Secured",
    tagline: "From technician to owner — navigating complex SBA financing to acquire a beloved community auto shop.",
    quote: "I thought getting a loan would be easy — like in the movies. After being rejected by the big banks, I was referred to the SBDC.",
    highlights: "$503K SBA loan. 4 jobs created. $75K first-month sales.",
    url: "https://www.norcalsbdc.org/impact-2025/marin-auto-works/",
  },
  {
    biz: "Seal Rock Dental Care", owner: "Dr. Joshua Sanchez, Owner", center: "San Francisco SBDC",
    metric: "21", metricLabel: "Jobs Retained & Created",
    tagline: "Patient-centered dental practice with a special focus on serving those who experience dental anxiety.",
    quote: "The SBDC has guided every step of our journey. I feel more confident taking on new challenges knowing I have this organization to help me.",
    highlights: "$300K sales growth. $115K SBA loan. 70+ new patients per month.",
    url: "https://www.norcalsbdc.org/impact-2025/seal-rock-dental/",
  },
  {
    biz: "Rep It Out", owner: "David Cruz, CEO", center: "Solano-Napa SBDC",
    metric: "$713K", metricLabel: "Total Capital",
    tagline: "Vallejo's premier indoor baseball and softball training facility for athletes of all ages.",
    quote: "I could not have accomplished my goal of starting a business and fulfilling my dream without the SBDC.",
    highlights: "$230K SBA loan. $483K private funding. 2 jobs created.",
    url: "https://www.norcalsbdc.org/impact-2025/rep-it-out/",
  },
  {
    biz: "Circosphere", owner: "Kristen Parks, Founder & Owner", center: "East Bay SBDC",
    metric: "$469K", metricLabel: "Sales Growth",
    tagline: "Woman-owned cirque entertainment creating unforgettable performances for special events.",
    quote: "My SBDC advisor played a pivotal role in helping the business recover from COVID-19 and supporting its growth.",
    highlights: "$874K annual revenue. 11 employees. WBE certified.",
    url: "https://www.norcalsbdc.org/impact-2025/circosphere/",
  },
  {
    biz: "Scoot Science", owner: "Jonathan LaRiviere, Founder", center: "Tech Futures Group",
    metric: "$2M", metricLabel: "Capital Raised",
    tagline: "Ocean intelligence platform helping aquaculture producers make data-driven decisions.",
    quote: "I couldn't be happier with the support we've gotten from Tech Futures Group. Without this help, we wouldn't have realized the successes that we have today.",
    highlights: "1→11 team growth. 10× team size. Top 10 salmon producers as clients.",
    url: "https://www.norcalsbdc.org/client-stories/scoot-science/",
  },
];

const growthStories = [
  {
    biz: "Yarrow Goods", owner: "Oliver & Grace Estrada", center: "Marin SBDC",
    tagline: "Handmade screen-printed ethical t-shirts, pivoted from brick-and-mortar during COVID.",
    results: "$138K total capital from 5 lenders. 20% sales increase.",
    quote: "We would have closed our business if it were not for the help we received from the Marin SBDC.",
    url: "https://www.norcalsbdc.org/shared/client-stories/yarrow-goods/",
  },
  {
    biz: "The Early Rise", owner: "Laila O'Boyle, Founder", center: "San Francisco SBDC",
    tagline: "From local sourdough bakery to global education hub with 500K+ followers.",
    results: "500K social followers. 4,000 Substack subscribers. 3× revenue growth.",
    quote: "The SBDC helped me early on to get into the dream fund and receive a grant.",
    url: "https://www.norcalsbdc.org/shared/client-stories/from-oven-to-online-local-baker-scales-to-global-reach/",
  },
  {
    biz: "Thistle & Tonic", owner: "Yvette Cotter", center: "San Mateo SBDC",
    tagline: "Non-toxic wellness bar and boutique in Pacifica, California.",
    results: "$40K Working Solutions loan. LLC formation. Retail location secured.",
    quote: "I recommend the SBDC to everyone — I really do. I couldn't have done it without them.",
    url: "https://www.norcalsbdc.org/shared/client-stories/thistle-tonic/",
  },
  {
    biz: "Sweet Bean Coffee House", owner: "Ronda Moore-Gambone & Sarah Goings", center: "Butte College SBDC",
    tagline: "Mother-daughter Italian coffee-inspired café in downtown Chico.",
    results: "15 jobs created. Launched with full staff from day one.",
    quote: "The SBDC's personalized consulting was absolutely crucial to turning our family dream into reality.",
    url: "https://www.norcalsbdc.org/shared/client-stories/sweet-bean-coffee-house-mother-daughter-dream-brews-success-in-chico/",
  },
];

const spotlights = [
  { biz: "Cha-Cha Sweets", owner: "Angel Rodriguez", center: "Solano-Napa SBDC", desc: "18-year-old entrepreneur built a chamoy candy company from his bedroom to six-figure sales.", url: "https://www.norcalsbdc.org/shared/client-stories/cha-cha-sweets/" },
  { biz: "Glory Grove Organics", owner: "Linda Allivato", center: "Silicon Valley SBDC", desc: "Eco-conscious consumer products startup in patent and prototype phase.", url: "https://www.norcalsbdc.org/shared/client-stories/glory-grove-organics/" },
  { biz: "El Papalote Childcare Services", owner: "Carmen Jimenez Martinez", center: "San Francisco SBDC", desc: "Licensed in-home daycare in SF's Tenderloin, reached full capacity within months of launch.", url: "https://www.norcalsbdc.org/shared/client-stories/el-papalote-childcare-services/" },
];

/* ─────────────────────────────  SHARED  ───────────────────────────── */

function SectionLabel({ eyebrow, title, lead, dark = false, noRule = false }: { eyebrow: string; title: string; lead?: string; dark?: boolean; noRule?: boolean }) {
  const ruleColor = dark ? "border-white/20" : "border-navy/20";
  const eyebrowColor = dark ? "text-white/70" : "text-navy/65";
  const titleColor = dark ? "text-white" : "text-navy";
  const leadColor = dark ? "text-white/75" : "text-navy/70";
  const wrapper = noRule ? "mb-10" : `border-t ${ruleColor} pt-6 mb-10`;
  return (
    <div className={wrapper}>
      <p className={`font-label text-[11px] uppercase tracking-[0.22em] ${eyebrowColor} mb-3`}>{eyebrow}</p>
      <h2 className={`font-sans ${titleColor} tracking-[-0.015em]`} style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>{title}</h2>
      {lead && (
        <p className={`font-sans ${leadColor} leading-[1.55] mt-5 max-w-[620px]`} style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */

export default function StoriesPage() {
  return (
    <>
      <CreamPaperBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
      <InteriorHero
        showRule={false}
        chapterNumber="08"
        category="strategy"
        title="Stories"
        subtitle="Real businesses. Measurable impact. Organized by tier so you can find the right client narrative for any audience."
      />

      {/* ═══ TIER 01 · SIGNATURE — featured navy card + compact 5-up ═══ */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-24 relative z-10">
          {/* Tier header — tag + title + desc, mockup's two-column header */}
          <div className="tier-header grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mb-10 md:mb-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-[10px] mb-5">
                <span aria-hidden className="inline-block" style={{ width: 28, height: 2, background: "#0f1c2e" }} />
                <span className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "#0f1c2e" }}>Tier 01</span>
                <span className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "rgba(45,51,64,0.6)" }}>Signature Stories</span>
              </div>
              <h2 className="text-navy" style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.028em" }}>
                Signature <em style={{ fontStyle: "italic", fontWeight: 300 }}>stories.</em>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 400, fontSize: 17, lineHeight: 1.55, color: "#2D3340", maxWidth: 440 }}>
                Highest impact. Strong structure. Clear metrics and photography. Annual reports, board presentations, lender pitches.
              </p>
            </div>
          </div>

          {/* Featured card — navy, split two columns */}
          {(() => {
            const f = signatureStories[0];
            return (
              <article
                className="featured-card relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14"
                style={{ background: "#0f1c2e", color: "#f5f4f0", padding: "56px clamp(28px, 4vw, 56px) 52px" }}
              >
                <div className="absolute" style={{ top: 24, right: 28, display: "flex", alignItems: "center", gap: 10, fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 13, color: "#85A3C8" }}>
                  <span aria-hidden className="feat-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#A73B44", display: "inline-block" }} />
                  Featured this quarter
                </div>

                <div className="flex flex-col gap-4">
                  <div className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "#85A3C8" }}>
                    {f.center}
                  </div>
                  <h3 style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: "clamp(40px, 5vw, 60px)", lineHeight: 0.98, letterSpacing: "-0.025em", color: "#f5f4f0" }}>
                    {f.biz}
                  </h3>
                  <div style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 17, color: "#85A3C8" }}>
                    {f.owner}
                  </div>
                  <p className="mt-2" style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: 19, lineHeight: 1.45, color: "#85A3C8", maxWidth: 460 }}>
                    {f.tagline}
                  </p>
                </div>

                <div className="feat-right flex flex-col gap-6 md:border-l md:border-white/15 md:pl-10 lg:pl-14">
                  <p style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 18, lineHeight: 1.5, color: "rgba(245,244,240,0.9)", paddingLeft: 20, borderLeft: "2px solid #A73B44" }}>
                    &ldquo;{f.quote}&rdquo;
                  </p>
                  <p style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(133,163,200,0.85)", letterSpacing: "0.02em" }}>
                    {f.highlights}
                  </p>
                  <div className="flex items-baseline justify-between gap-4 mt-3">
                    <span style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: "clamp(48px, 5.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.025em", color: "#f5f4f0" }}>
                      {f.metric}
                    </span>
                    <span className="font-label uppercase text-right" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "#85A3C8", lineHeight: 1.4 }}>
                      {f.metricLabel.split(" ").map((w, i, arr) => (
                        <span key={i}>{w}{i < arr.length - 1 ? <br /> : null}</span>
                      ))}
                    </span>
                  </div>
                  <a href={f.url} target="_blank" rel="noopener noreferrer"
                    className="feat-cta inline-flex items-center gap-[10px] no-underline self-start mt-2"
                    style={{ fontFamily: "var(--sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#f5f4f0" }}>
                    Read full story
                    <span aria-hidden style={{ fontFamily: "proxima-sera, var(--serif)", fontSize: 14 }}>→</span>
                  </a>
                </div>
              </article>
            );
          })()}

          {/* Compact 5-up row — remaining signature stories */}
          <div className="sig-compact-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mt-10 md:mt-12">
            {signatureStories.slice(1, 6).map((s, i, arr) => (
              <a
                key={s.biz}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sig-compact flex flex-col gap-3 no-underline"
                style={{
                  padding: i === 0 ? "4px 20px 4px 0" : i === arr.length - 1 ? "4px 0 4px 20px" : "4px 20px 4px 20px",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(15,28,46,0.1)" : "none",
                  color: "inherit",
                }}
              >
                <div className="font-label uppercase" style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.22em", color: "rgba(45,51,64,0.65)" }}>
                  {s.center}
                </div>
                <h4 style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: 22, lineHeight: 1.08, letterSpacing: "-0.012em", color: "#0f1c2e" }}>
                  {s.biz}
                </h4>
                <div style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 12, color: "rgba(45,51,64,0.75)", marginTop: -4 }}>
                  {s.owner.split(",")[0]}
                </div>
                <div className="flex items-baseline justify-between gap-2 mt-4">
                  <span style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: 26, lineHeight: 1, letterSpacing: "-0.015em", color: "#0f1c2e" }}>
                    {s.metric}
                  </span>
                  <span className="font-label uppercase text-right" style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.18em", color: "rgba(45,51,64,0.75)", lineHeight: 1.4 }}>
                    {s.metricLabel.split(" ").map((w, j, wa) => (
                      <span key={j}>{w}{j < wa.length - 1 ? <br /> : null}</span>
                    ))}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Signature footer */}
          <div className="sig-foot flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-12">
            <div style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 17, color: "#2D3340" }}>
              {signatureStories.length} signature stories in the 2026 library.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIER 02 · GROWTH — line-item list ═══ */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-24 relative z-10 border-t border-navy/[0.15]">
          <div className="tier-header grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mt-14 mb-10 md:mb-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-[10px] mb-5">
                <span aria-hidden className="inline-block" style={{ width: 28, height: 2, background: "#00685E" }} />
                <span className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "#00685E" }}>Tier 02</span>
                <span className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "rgba(45,51,64,0.6)" }}>Growth Stories</span>
              </div>
              <h2 className="text-navy" style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.028em" }}>
                Growth <em style={{ fontStyle: "italic", fontWeight: 300, color: "#00685E" }}>stories.</em>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 400, fontSize: 17, lineHeight: 1.55, color: "#2D3340", maxWidth: 440 }}>
                Good narratives with real results. A working library that fuels regular content across social, newsletters, and partner updates.
              </p>
            </div>
          </div>

          <div className="gr-list">
            {growthStories.map((g, i) => (
              <a
                key={g.biz}
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gr-item grid items-baseline no-underline"
                style={{
                  gridTemplateColumns: "60px 180px 1fr 180px 40px",
                  gap: 24,
                  padding: "28px 8px",
                  borderBottom:
                    i === growthStories.length - 1
                      ? "none"
                      : "1px solid rgba(15,28,46,0.08)",
                  color: "inherit",
                }}
              >
                <div style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 22, color: "#00685E", opacity: 0.7 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", color: "rgba(45,51,64,0.7)" }}>
                  {g.center}
                </div>
                <div className="flex flex-col gap-1.5">
                  <div style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: 24, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#0f1c2e" }}>
                    {g.biz}
                  </div>
                  <div style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 14, color: "rgba(45,51,64,0.8)", lineHeight: 1.45 }}>
                    {g.owner} — {g.tagline}
                  </div>
                </div>
                <div className="text-right" style={{ fontSize: 12, lineHeight: 1.5, color: "#2D3340" }}>
                  <strong style={{ color: "#00685E", fontWeight: 600, fontSize: 14, display: "block", marginBottom: 2 }}>
                    {g.results.split(".")[0]}
                  </strong>
                  {g.results.split(".").slice(1).join(".").trim()}
                </div>
                <div className="gr-arrow text-right" aria-hidden style={{ fontFamily: "proxima-sera, var(--serif)", fontSize: 18, color: "rgba(45,51,64,0.4)" }}>
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIER 03 · SPOTLIGHTS — quote wall ═══ */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-24 relative z-10 border-t border-navy/[0.15]">
          <div className="tier-header grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mt-14 mb-10 md:mb-12">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-[10px] mb-5">
                <span aria-hidden className="inline-block" style={{ width: 28, height: 2, background: "#A73B44" }} />
                <span className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "#A73B44" }}>Tier 03</span>
                <span className="font-label uppercase" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", color: "rgba(45,51,64,0.6)" }}>Community Spotlights</span>
              </div>
              <h2 className="text-navy" style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1, letterSpacing: "-0.028em" }}>
                Community <em style={{ fontStyle: "italic", fontWeight: 300, color: "#A73B44" }}>spotlights.</em>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 400, fontSize: 17, lineHeight: 1.55, color: "#2D3340", maxWidth: 440 }}>
                Human-interest stories that keep feeds warm and relatable. Not metrics-driven — about connection, community, and the human side of entrepreneurship.
              </p>
            </div>
          </div>

          <div className="spot-wall grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ columnGap: 56, rowGap: 64 }}>
            {spotlights.map((sp) => (
              <a
                key={sp.biz}
                href={sp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="spot-item flex flex-col gap-5 no-underline"
                style={{ color: "inherit" }}
              >
                <div aria-hidden style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 300, fontSize: 72, lineHeight: 0.5, color: "#A73B44", opacity: 0.85, marginBottom: -4, marginLeft: -4 }}>
                  &ldquo;
                </div>
                <p style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 22, lineHeight: 1.35, color: "#0f1c2e", letterSpacing: "-0.012em" }}>
                  {sp.desc}
                </p>
                <div className="spot-attr flex flex-col gap-1 mt-auto relative" style={{ paddingTop: 16 }}>
                  <span aria-hidden style={{ position: "absolute", top: 0, left: 0, width: 40, height: 1, background: "#A73B44", opacity: 0.6 }} />
                  <div style={{ fontFamily: "proxima-sera, var(--serif)", fontWeight: 400, fontSize: 15, color: "#0f1c2e", letterSpacing: "-0.005em" }}>
                    {sp.owner}
                  </div>
                  <div style={{ fontFamily: "proxima-sera, var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: 13, color: "rgba(45,51,64,0.8)" }}>
                    {sp.biz}
                  </div>
                  <div className="font-label uppercase mt-1" style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.22em", color: "rgba(45,51,64,0.55)" }}>
                    {sp.center}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* scoped styles — pulse animation + hover niceties */}
        <style>{`
          @keyframes storyPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
          .feat-pulse { animation: storyPulse 2s ease-in-out infinite; }
          .feat-cta { transition: gap 0.25s ease, color 0.2s ease; }
          .feat-cta:hover { color: #85A3C8; gap: 14px; }
          .sig-compact { transition: opacity 0.3s ease; }
          .sig-compact:hover { opacity: 0.72; }
          .gr-item { transition: background 0.2s ease; }
          .gr-item:hover { background: rgba(0,104,94,0.03); }
          .gr-item:hover .gr-arrow { opacity: 1; transform: translateX(4px); color: #00685E; }
          .gr-arrow { transition: all 0.25s ease; }
          .spot-item { transition: transform 0.4s cubic-bezier(0.2,0.7,0.2,1); }
          .spot-item:hover { transform: translateY(-3px); }
          @media (max-width: 980px) {
            .gr-item { grid-template-columns: 30px 1fr 30px !important; grid-template-areas: "num center arrow" "num main main" "num metric metric" !important; gap: 6px 16px !important; }
            .gr-item > :nth-child(1) { grid-area: num; }
            .gr-item > :nth-child(2) { grid-area: center; }
            .gr-item > :nth-child(3) { grid-area: main; }
            .gr-item > :nth-child(4) { grid-area: metric; text-align: left !important; }
            .gr-item > :nth-child(5) { grid-area: arrow; }
            .sig-compact { border-right: none !important; border-bottom: 1px solid rgba(15,28,46,0.1); padding: 0 0 20px 0 !important; }
            .sig-compact:last-child { border-bottom: none; }
          }
        `}</style>
      </section>

      {/* ── DISTRIBUTION — navy hero moment ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0f1c2e" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="h-[2px] bg-[#5684BA]" />
        </div>
        <SbdcWatermark
          className="absolute -right-[6%] top-[10%] w-[32vw] max-w-[380px] text-white pointer-events-none select-none"
          opacity={0.04}
        />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            dark
            eyebrow="Distribution"
            title="How each tier travels."
            lead="Signature stories are strategic assets. Growth stories fuel everyday content. Spotlights keep social feeds human."
          />

          <div className="mt-10 space-y-10 md:space-y-12">
            {[
              {
                tier: "Signature",
                cadence: "~15 per year",
                body: "The highest-impact narratives — capital, expansion, innovation, and underserved communities. Strategic tools for fundraising, stakeholder engagement, PR, and special events.",
                channels: "PDF one-pagers. Website feature pages. Press & media. Event talking points. Stakeholder emails.",
              },
              {
                tier: "Growth",
                cadence: "Ongoing library",
                body: "Strong narratives with real results, but not trophy level. A portfolio of \u201clook at this growth\u201d moments that fuel regular content. No PDFs, no dedicated web pages.",
                channels: "Social posts. Newsletter snippets. Blog & partner updates. Internal library for center teams.",
              },
              {
                tier: "Spotlights",
                cadence: "Mostly social",
                body: "Human-interest stories that keep feeds warm and relatable. Not metrics-driven — about connection, community, and the human side of entrepreneurship.",
                channels: "Instagram. Facebook. Community engagement moments.",
              },
            ].map((row) => (
              <div key={row.tier} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3">
                  <p className="font-label uppercase text-[#85A3C8]" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    {row.cadence}
                  </p>
                  <h3 className="font-sans text-white tracking-[-0.015em] mt-2" style={{ fontSize: "clamp(22px, 2vw, 26px)", fontWeight: 500, lineHeight: 1.15 }}>
                    {row.tier}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="font-sans text-white/85 leading-[1.6]" style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
                    {row.body}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="font-label uppercase text-white/55 mb-2" style={{ fontSize: "11px", letterSpacing: "0.18em" }}>
                    Channels
                  </p>
                  <p className="font-sans text-white/75 leading-[1.55]" style={{ fontSize: "clamp(14px, 1.05vw, 15px)", fontWeight: 400 }}>
                    {row.channels}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 font-sans italic text-white/75 leading-[1.5] max-w-[680px]"
            style={{ fontFamily: "var(--serif)", fontSize: "clamp(17px, 1.5vw, 20px)", fontWeight: 400 }}>
            Signature stories should span capital access, business expansion, and innovation — and occasionally
            spotlight rural and underserved communities to reflect the full reach of the network.
          </p>
        </div>
      </section>

      {/* ── SCORING RUBRIC ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            eyebrow="Evaluation"
            title="Scoring rubric."
            lead="Score every story across five criteria before publishing. Totals map to the three tiers."
          />

          {/* Color-blocked rubric — tier as vertical color density */}
          <div className="mt-12 overflow-hidden">
            {/* Column headers — tier bands */}
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-12 md:col-span-3" />
              <div className="col-span-4 md:col-span-3 px-5 py-4" style={{ backgroundColor: "#0f1c2e" }}>
                <p className="font-label uppercase text-white" style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  Signature
                </p>
                <p className="font-label uppercase text-white/60 mt-1" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
                  4–5 pts
                </p>
              </div>
              <div className="col-span-4 md:col-span-3 px-5 py-4" style={{ backgroundColor: "#A73B44" }}>
                <p className="font-label uppercase text-white" style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  Growth
                </p>
                <p className="font-label uppercase text-white/65 mt-1" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
                  2–3 pts
                </p>
              </div>
              <div className="col-span-4 md:col-span-3 px-5 py-4" style={{ backgroundColor: "#85A3C8" }}>
                <p className="font-label uppercase text-navy" style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  Spotlight
                </p>
                <p className="font-label uppercase text-navy/60 mt-1" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>
                  0–1 pts
                </p>
              </div>
            </div>

            {/* Criteria rows */}
            {[
              {
                criteria: "Economic Impact",
                signature: "$100K+ capital accessed, 5+ jobs created, or major revenue growth.",
                growth: "$10K–$100K capital, 1–4 jobs, or moderate growth.",
                spotlight: "Under $10K, or no quantified impact.",
              },
              {
                criteria: "Structure",
                signature: "Clear Challenge → Solution → Results arc with metrics front and center.",
                growth: "Has the arc but results are buried or text is too long.",
                spotlight: "Missing structure, feelings-heavy, or no clear arc.",
              },
              {
                criteria: "Quote Quality",
                signature: "Specific, attributable, mentions SBDC by name, speaks to a measurable outcome.",
                growth: "Positive but generic (\u201ccouldn't have done it without them\u201d).",
                spotlight: "Only emotional, no business substance.",
              },
              {
                criteria: "Photography",
                signature: "Professional headshot or business photography available.",
                growth: "Has some imagery but not professional.",
                spotlight: "No photography available.",
              },
              {
                criteria: "Reusability",
                signature: "Can headline an annual report, board presentation, or lender pitch.",
                growth: "Works for newsletters, blog posts, partner updates with light editing.",
                spotlight: "Best for social media posts and community engagement.",
              },
            ].map((row, idx) => (
              <div key={row.criteria} className="grid grid-cols-12 gap-0 border-t border-navy/10">
                <div className="col-span-12 md:col-span-3 px-0 md:pr-6 py-5 md:py-6">
                  <p className="font-label uppercase text-navy/50" style={{ fontSize: "10px", letterSpacing: "0.22em" }}>
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-sans text-navy tracking-[-0.015em] mt-1" style={{ fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: 500, lineHeight: 1.2 }}>
                    {row.criteria}
                  </h3>
                </div>
                <div className="col-span-4 md:col-span-3 px-5 py-5 md:py-6" style={{ backgroundColor: "rgba(15,28,46,0.92)" }}>
                  <p className="font-sans text-white leading-[1.55]" style={{ fontSize: "clamp(13px, 1vw, 15px)", fontWeight: 400 }}>
                    {row.signature}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-3 px-5 py-5 md:py-6" style={{ backgroundColor: "rgba(167,59,68,0.10)" }}>
                  <p className="font-sans text-navy/85 leading-[1.55]" style={{ fontSize: "clamp(13px, 1vw, 15px)", fontWeight: 400 }}>
                    {row.growth}
                  </p>
                </div>
                <div className="col-span-4 md:col-span-3 px-5 py-5 md:py-6" style={{ backgroundColor: "rgba(133,163,200,0.14)" }}>
                  <p className="font-sans text-navy/70 leading-[1.55]" style={{ fontSize: "clamp(13px, 1vw, 15px)", fontWeight: 400 }}>
                    {row.spotlight}
                  </p>
                </div>
              </div>
            ))}

            {/* Totals footer */}
            <div className="grid grid-cols-12 gap-0 border-t-2 border-navy/30">
              <div className="col-span-12 md:col-span-3 px-0 md:pr-6 py-5 md:py-6">
                <p className="font-label uppercase text-[#A73B44]" style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  Total → Tier
                </p>
              </div>
              <div className="col-span-4 md:col-span-3 px-5 py-5 md:py-6" style={{ backgroundColor: "#0f1c2e" }}>
                <p className="font-sans text-white tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 2.6vw, 36px)", fontWeight: 500, lineHeight: 1 }}>
                  20–25
                </p>
                <p className="font-sans text-white/70 leading-[1.4] mt-2" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
                  Ready for prime time.
                </p>
              </div>
              <div className="col-span-4 md:col-span-3 px-5 py-5 md:py-6" style={{ backgroundColor: "#A73B44" }}>
                <p className="font-sans text-white tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 2.6vw, 36px)", fontWeight: 500, lineHeight: 1 }}>
                  12–19
                </p>
                <p className="font-sans text-white/80 leading-[1.4] mt-2" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
                  Tighten before formal use.
                </p>
              </div>
              <div className="col-span-4 md:col-span-3 px-5 py-5 md:py-6" style={{ backgroundColor: "#85A3C8" }}>
                <p className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 2.6vw, 36px)", fontWeight: 500, lineHeight: 1 }}>
                  0–11
                </p>
                <p className="font-sans text-navy/75 leading-[1.4] mt-2" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
                  Social and community content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY TOOLKIT ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            eyebrow="Templates"
            title="Story toolkit."
            lead="Structure, rules, and metric priorities for writing new success stories to the Signature standard."
          />

          {/* A. Structure — interactive label↔card explorer */}
          <div className="mt-12">
            <p className="font-label uppercase text-[#A73B44] mb-4" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              A · Structure
            </p>
            <h3 className="font-sans text-navy tracking-[-0.015em] mb-4" style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 500, lineHeight: 1.15 }}>
              Every signature story, top to bottom.
            </h3>
            <p className="font-sans text-navy/55 mb-10" style={{ fontSize: "13px", letterSpacing: "0.02em" }}>
              Hover any label or card element to highlight its match. Click + to expand writing rules and examples.
            </p>

            <StoryStructureExplorer />
          </div>

          {/* B. Writing Rules */}
          <div className="mt-20">
            <p className="font-label uppercase text-[#A73B44] mb-4" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              B · Writing Rules
            </p>
            <h3 className="font-sans text-navy tracking-[-0.015em] mb-10" style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 500, lineHeight: 1.15 }}>
              Do this. Not that.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <p className="font-label uppercase text-navy/65 mb-5" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  Do
                </p>
                <ul className="space-y-3">
                  {[
                    "Lead with the most impressive metric.",
                    "Name the specific NorCal SBDC center and advisor.",
                    "Use Challenge → Solution → Results structure.",
                  ].map((d) => (
                    <li key={d} className="font-sans text-navy/80 leading-[1.55]" style={{ fontSize: "clamp(15px, 1.2vw, 16px)" }}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-label uppercase text-navy/65 mb-5" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  Don&rsquo;t
                </p>
                <ul className="space-y-3">
                  {[
                    "Bury results at the bottom.",
                    "Use generic quotes (\u201cgreat experience\u201d).",
                    "Use \u201cSBDC\u201d without the \u201cNorCal\u201d prefix.",
                  ].map((d) => (
                    <li key={d} className="font-sans text-navy/55 leading-[1.55]" style={{ fontSize: "clamp(15px, 1.2vw, 16px)" }}>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* C. Metric Priority — rule of thumb */}
          <div className="mt-20">
            <p className="font-label uppercase text-[#A73B44] mb-4" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              C · Metric Priority
            </p>
            <h3 className="font-sans text-navy tracking-[-0.015em] mb-6" style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 500, lineHeight: 1.15 }}>
              What to lead with.
            </h3>

            <p className="font-sans text-navy/80 leading-[1.6] max-w-[720px]"
              style={{ fontSize: "clamp(16px, 1.25vw, 18px)", fontWeight: 400 }}>
              Lead with capital accessed, jobs created or retained, or revenue growth — in that order.
              Loans secured, cost reduction, certifications, and social or digital growth make strong
              supporting numbers, but rarely carry a Signature story on their own.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA — navy sliver ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0f1c2e" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
            <div className="md:col-span-8">
              <p className="font-label uppercase text-[#85A3C8] mb-3" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                Submit
              </p>
              <h3 className="font-sans text-white tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 500, lineHeight: 1.1 }}>
                Have a client story to share?
              </h3>
              <p className="font-sans text-white/75 leading-[1.6] mt-4 max-w-[560px]"
                style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
                Submit it for review and scoring against the rubric. We&rsquo;ll confirm the tier and route it
                to the right channel.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a href="mailto:marketing@norcalsbdc.org"
                className="inline-flex items-center gap-3 font-sans text-white hover:text-[#85A3C8] transition-colors no-underline"
                style={{ fontSize: "clamp(15px, 1.3vw, 18px)", fontWeight: 500 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
                marketing@norcalsbdc.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <NextSectionLink title="Glossary" href="/glossary" />
      </div>
    </>
  );
}
