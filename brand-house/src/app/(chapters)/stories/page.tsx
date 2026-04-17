import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import StoryStructureExplorer from "@/components/StoryStructureExplorer";

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
      <InteriorHero
        showRule={false}
        chapterNumber="08"
        category="strategy"
        title="Stories"
        subtitle="Real businesses. Measurable impact. Organized by tier so you can find the right client narrative for any audience."
      />

      {/* ── SIGNATURE STORIES — Tier 01 ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            noRule
            eyebrow="Tier 01 · Signature"
            title="Signature stories."
            lead="Highest impact. Strong structure. Clear metrics and photography. Use these for annual reports, board presentations, lender pitches, and campaign hero stories."
          />

          {/* Editorial stack — row hairlines between cards */}
          <div className="mt-12 border-t border-navy/[0.12]">
            {signatureStories.map((s) => (
              <article
                key={s.biz}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-14 border-b border-navy/[0.12]"
              >
                <div className="md:col-span-3">
                  <p className="font-label uppercase text-[#A73B44]" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    {s.center}
                  </p>
                  <h3 className="font-sans text-navy tracking-[-0.02em] mt-3" style={{ fontSize: "clamp(22px, 2.1vw, 28px)", fontWeight: 500, lineHeight: 1.1 }}>
                    {s.biz}
                  </h3>
                  <p className="font-sans text-navy/60 mt-2" style={{ fontSize: "clamp(14px, 1.05vw, 15px)" }}>
                    {s.owner}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <p className="font-sans italic text-navy/85 leading-[1.4]" style={{ fontFamily: "var(--serif)", fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                    {s.tagline}
                  </p>
                  <p className="font-sans text-navy/70 leading-[1.6] mt-6" style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <p className="font-label uppercase text-navy/55 mt-5" style={{ fontSize: "11px", letterSpacing: "0.18em" }}>
                    Highlights · {s.highlights}
                  </p>
                </div>

                <div className="md:col-span-3 md:text-right">
                  <p className="font-sans text-navy leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(44px, 5vw, 68px)", fontWeight: 500 }}>
                    {s.metric}
                  </p>
                  <p className="font-label uppercase text-navy/55 mt-3" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    {s.metricLabel}
                  </p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-sans text-[#A73B44] hover:text-navy transition-colors no-underline"
                    style={{ fontSize: "14px", fontWeight: 500 }}>
                    Read full story
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── GROWTH STORIES — Tier 02 ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            eyebrow="Tier 02 · Growth"
            title="Growth stories."
            lead="Good narrative, developing structure. These stories show real progress but may need tighter metrics or editing before use in formal presentations."
          />

          <div className="mt-10 space-y-10 md:space-y-12">
            {growthStories.map((g) => (
              <article
                key={g.biz}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
              >
                <div className="md:col-span-4">
                  <p className="font-label uppercase text-[#A73B44]" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    {g.center}
                  </p>
                  <h3 className="font-sans text-navy tracking-[-0.015em] mt-2" style={{ fontSize: "clamp(19px, 1.7vw, 22px)", fontWeight: 500, lineHeight: 1.2 }}>
                    {g.biz}
                  </h3>
                  <p className="font-sans text-navy/60 mt-1" style={{ fontSize: "clamp(13px, 1vw, 14px)" }}>
                    {g.owner}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="font-sans text-navy/80 leading-[1.55]" style={{ fontSize: "clamp(15px, 1.1vw, 16px)", fontWeight: 400 }}>
                    {g.tagline}
                  </p>
                  <p className="font-sans italic text-navy/60 leading-[1.5] mt-3" style={{ fontFamily: "var(--serif)", fontSize: "clamp(14px, 1.05vw, 15px)" }}>
                    &ldquo;{g.quote}&rdquo;
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-col justify-between">
                  <p className="font-sans text-navy/75 leading-[1.55]" style={{ fontSize: "clamp(14px, 1.05vw, 15px)", fontWeight: 400 }}>
                    {g.results}
                  </p>
                  <a href={g.url} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-sans text-[#A73B44] hover:text-navy transition-colors no-underline self-start"
                    style={{ fontSize: "13px", fontWeight: 500 }}>
                    Read
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SPOTLIGHTS — Tier 03 ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel
            eyebrow="Tier 03 · Spotlights"
            title="Community spotlights."
            lead="Inspiring personal stories with lighter economic impact. Best for social media highlights, newsletter human-interest pieces, and community engagement."
          />

          <div className="mt-10 space-y-10 md:space-y-12">
            {spotlights.map((sp) => (
              <article
                key={sp.biz}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
              >
                <div className="md:col-span-4">
                  <p className="font-label uppercase text-[#A73B44]" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    {sp.center}
                  </p>
                  <h3 className="font-sans text-navy tracking-[-0.015em] mt-2" style={{ fontSize: "clamp(19px, 1.7vw, 22px)", fontWeight: 500, lineHeight: 1.2 }}>
                    {sp.biz}
                  </h3>
                  <p className="font-sans text-navy/60 mt-1" style={{ fontSize: "clamp(13px, 1vw, 14px)" }}>
                    {sp.owner}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="font-sans text-navy/80 leading-[1.6]" style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400 }}>
                    {sp.desc}
                  </p>
                </div>
                <div className="md:col-span-2 flex items-start md:justify-end">
                  <a href={sp.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-[#A73B44] hover:text-navy transition-colors no-underline"
                    style={{ fontSize: "13px", fontWeight: 500 }}>
                    Read
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
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
                    "Keep the total story under 400 words.",
                    "Use \u201cno-fee\u201d, never \u201cfree\u201d.",
                    "Name the specific NorCal SBDC center and advisor.",
                    "Include at least three quantified outcomes.",
                    "Get a direct, specific quote about business results.",
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
                    "Write more than three sentences per section.",
                    "Focus on feelings without tangible outcomes.",
                    "Use generic quotes (\u201cgreat experience\u201d).",
                    "Lead with the business backstory.",
                    "Forget photography — always capture a portrait.",
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

          {/* C. Metric Priority */}
          <div className="mt-20">
            <p className="font-label uppercase text-[#A73B44] mb-4" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              C · Metric Priority
            </p>
            <h3 className="font-sans text-navy tracking-[-0.015em] mb-10" style={{ fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 500, lineHeight: 1.15 }}>
              What to lead with.
            </h3>

            <div className="max-w-[780px] space-y-4">
              {[
                ["01", "Capital Accessed", "$ amount", true],
                ["02", "Jobs Created or Retained", "headcount", true],
                ["03", "Revenue / Sales Growth", "$ or %", true],
                ["04", "Loans Secured", "$ amount + lender", true],
                ["05", "Cost Reduction", "%", false],
                ["06", "Certifications Obtained", "WBE, MBE, etc.", false],
                ["07", "Clients / Customers Gained", "headcount", false],
                ["08", "Social / Digital Growth", "followers, traffic", false],
              ].map(([num, name, detail, primary]) => (
                <div key={name as string} className="grid grid-cols-[40px_1fr_auto] gap-4 md:gap-8 items-baseline">
                  <span className="font-label uppercase text-navy/45" style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    {num}
                  </span>
                  <span className={`font-sans tracking-[-0.01em] ${primary ? "text-navy" : "text-navy/55"}`}
                    style={{ fontSize: "clamp(16px, 1.3vw, 18px)", fontWeight: primary ? 500 : 400 }}>
                    {name}
                  </span>
                  <span className="font-label uppercase text-navy/45" style={{ fontSize: "11px", letterSpacing: "0.18em" }}>
                    {detail}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 font-sans italic text-navy/70 leading-[1.5] max-w-[680px]"
              style={{ fontFamily: "var(--serif)", fontSize: "clamp(17px, 1.5vw, 20px)", fontWeight: 400 }}>
              Stories with metrics one through four as primary are almost always Signature-quality.
              Stories led by five through eight need supporting capital or jobs data to reach the tier.
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
    </>
  );
}
