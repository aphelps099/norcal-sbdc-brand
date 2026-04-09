import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

const signatureStories = [
  {
    biz: "ReJoule", owner: "Zora Chung, CFO", center: "Tech Futures Group",
    metric: "$27M", metricLabel: "Total Funding", accent: "#004290",
    tagline: "Fast, accurate battery health diagnostics enabling reuse, repurposing, and recycling at scale.",
    quote: "The advice we received from Pitch Global has been extremely valuable, and the exposure to their network is unmatched.",
    quoteAttr: "Zora Chung, CFO",
    chips: ["$27M Total Funding", "$25M Non-Dilutive Grants", "90% Cost Reduction", "2,000+ Service Centers"],
    url: "https://www.norcalsbdc.org/impact-2025/rejoule/",
  },
  {
    biz: "Marin Auto Works", owner: "Chris Aguirre, Owner", center: "Marin SBDC",
    metric: "$559K", metricLabel: "Capital Secured", accent: "#5684BA",
    tagline: "From technician to owner \u2014 navigating complex SBA financing to acquire a beloved community auto shop.",
    quote: "I thought getting a loan would be easy \u2014 like in the movies. After being rejected by the big banks, I was referred to the SBDC.",
    quoteAttr: "Chris Aguirre, Owner",
    chips: ["$559K Capital", "$503K SBA Loan", "4 Jobs Created", "$75K First Month Sales"],
    url: "https://www.norcalsbdc.org/impact-2025/marin-auto-works/",
  },
  {
    biz: "Seal Rock Dental Care", owner: "Dr. Joshua Sanchez, Owner", center: "San Francisco SBDC",
    metric: "21", metricLabel: "Jobs Retained & Created", accent: "#85A3C8",
    tagline: "Patient-centered dental practice with a special focus on serving those who experience dental anxiety.",
    quote: "The SBDC has guided every step of our journey. I feel more confident taking on new challenges knowing I have this organization to help me.",
    quoteAttr: "Dr. Joshua Sanchez, Owner",
    chips: ["21 Jobs", "$300K Sales Growth", "$115K SBA Loan", "70+ New Patients/Month"],
    url: "https://www.norcalsbdc.org/impact-2025/seal-rock-dental/",
  },
  {
    biz: "Rep It Out", owner: "David Cruz, CEO", center: "Solano-Napa SBDC",
    metric: "$713K", metricLabel: "Total Capital", accent: "#A73B44",
    tagline: "Vallejo\u2019s premier indoor baseball and softball training facility for athletes of all ages.",
    quote: "I could not have accomplished my goal of starting a business and fulfilling my dream without the SBDC.",
    quoteAttr: "David Cruz, CEO",
    chips: ["$713K Total Capital", "$230K SBA Loan", "$483K Private Funding", "2 Jobs Created"],
    url: "https://www.norcalsbdc.org/impact-2025/rep-it-out/",
  },
  {
    biz: "Circosphere", owner: "Kristen Parks, Founder & Owner", center: "East Bay SBDC",
    metric: "$469K", metricLabel: "Sales Growth", accent: "#004290",
    tagline: "Woman-owned cirque entertainment creating unforgettable performances for special events.",
    quote: "My SBDC advisor played a pivotal role in helping the business recover from COVID-19 and supporting its growth.",
    quoteAttr: "Kristen Parks, Founder & Owner",
    chips: ["$874K Annual Revenue", "$469K Sales Growth", "11 Employees", "WBE Certified"],
    url: "https://www.norcalsbdc.org/impact-2025/circosphere/",
  },
  {
    biz: "Scoot Science", owner: "Jonathan LaRiviere, Founder", center: "Tech Futures Group",
    metric: "$2M", metricLabel: "Capital Raised", accent: "#5684BA",
    tagline: "Ocean intelligence platform helping aquaculture producers make data-driven decisions.",
    quote: "I couldn\u2019t be happier with the support we\u2019ve gotten from Tech Futures Group. Without this help, we wouldn\u2019t have realized the successes that we have today.",
    quoteAttr: "Jonathan LaRiviere, Founder",
    chips: ["$2M Capital Raised", "1\u219211 Team Growth", "10\u00d7 Team Size", "Top 10 Salmon Producers as Clients"],
    url: "https://www.norcalsbdc.org/client-stories/scoot-science/",
  },
];

const growthStories = [
  {
    biz: "Yarrow Goods", owner: "Oliver & Grace Estrada", center: "Marin SBDC",
    tagline: "Handmade screen-printed ethical t-shirts, pivoted from brick-and-mortar during COVID.",
    results: ["$138K total capital from 5 lenders", "20% sales increase"],
    quote: "We would have closed our business if it were not for the help we received from the Marin SBDC.",
    issue: "Results buried in text",
    url: "https://www.norcalsbdc.org/shared/client-stories/yarrow-goods/",
  },
  {
    biz: "The Early Rise", owner: "Laila O\u2019Boyle, Founder", center: "San Francisco SBDC",
    tagline: "From local sourdough bakery to global education hub with 500K+ followers.",
    results: ["500K social followers", "4,000 Substack subscribers", "3\u00d7 revenue growth"],
    quote: "The SBDC helped me early on to get into the dream fund and receive a grant!",
    issue: "Social metrics, not capital",
    url: "https://www.norcalsbdc.org/shared/client-stories/from-oven-to-online-local-baker-scales-to-global-reach/",
  },
  {
    biz: "Thistle & Tonic", owner: "Yvette Cotter", center: "San Mateo SBDC",
    tagline: "Non-toxic wellness bar and boutique in Pacifica, California.",
    results: ["$40K Working Solutions loan", "LLC formation", "Retail location secured"],
    quote: "I recommend the SBDC to everyone \u2014 I really do. I couldn\u2019t have done it without them.",
    issue: "Too much text, needs editing",
    url: "https://www.norcalsbdc.org/shared/client-stories/thistle-tonic/",
  },
  {
    biz: "Sweet Bean Coffee House", owner: "Ronda Moore-Gambone & Sarah Goings", center: "Butte College SBDC",
    tagline: "Mother-daughter Italian coffee-inspired caf\u00e9 in downtown Chico.",
    results: ["15 jobs created", "Launched with full staff from day one"],
    quote: "The SBDC\u2019s personalized consulting was absolutely crucial to turning our family dream into reality.",
    issue: "Needs more structure",
    url: "https://www.norcalsbdc.org/shared/client-stories/sweet-bean-coffee-house-mother-daughter-dream-brews-success-in-chico/",
  },
];

const spotlights = [
  { biz: "Cha-Cha Sweets", owner: "Angel Rodriguez", center: "Solano-Napa SBDC", desc: "18-year-old entrepreneur built a chamoy candy company from his bedroom to six-figure sales.", tags: ["Social Media", "Youth Entrepreneurship"], url: "https://www.norcalsbdc.org/shared/client-stories/cha-cha-sweets/" },
  { biz: "Glory Grove Organics", owner: "Linda Allivato", center: "Silicon Valley SBDC", desc: "Eco-conscious consumer products startup in patent and prototype phase.", tags: ["Newsletter", "Early-Stage"], url: "https://www.norcalsbdc.org/shared/client-stories/glory-grove-organics/" },
  { biz: "El Papalote Childcare Services", owner: "Carmen Jimenez Martinez", center: "San Francisco SBDC", desc: "Licensed in-home daycare in SF\u2019s Tenderloin, reached full capacity within months of launch.", tags: ["Social Media", "Community Impact"], url: "https://www.norcalsbdc.org/shared/client-stories/el-papalote-childcare-services/" },
];

export default function StoriesPage() {
  return (
    <>
      <InteriorHero bg="#0f1c2e"
        title="Success Stories"
        subtitle="Real businesses. Measurable impact. Organized by story tier to help you find the right client narrative for any audience."
      />

      {/* Stats band */}
      <div className="bg-[#0f1c2e] pb-12 md:pb-16">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="flex gap-10 pt-6 border-t border-white/[0.08] flex-wrap">
            {[
              { num: "6", label: "Signature Stories" },
              { num: "4", label: "Growth Stories" },
              { num: "3", label: "Community Spotlights" },
              { num: "13", label: "Total Stories" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-sans text-steel leading-none mb-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>{s.num}</p>
                <p className="font-label text-[10px] uppercase tracking-[0.04em] text-white/30">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SIGNATURE STORIES ═══ */}
      <div className="bg-cream py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Signature Stories</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Highest impact. Strong structure. Clear metrics and photography. Use for annual reports, board presentations, lender pitches, and campaign hero stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {signatureStories.map((s) => (
              <div key={s.biz} className="bg-white flex flex-col hover:shadow-md transition-shadow duration-200">
                <div className="h-[3px] w-full" style={{ backgroundColor: s.accent }} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-5">
                    <div className="min-w-0">
                      <p className="font-sans text-navy text-[11px] uppercase tracking-[0.04em] mb-0.5" style={{ fontWeight: 500 }}>{s.biz}</p>
                      <p className="font-sans text-navy/50 text-[13px]">{s.owner}</p>
                      <p className="font-label text-[9px] text-navy/30 uppercase tracking-[0.03em] mt-1">{s.center}</p>
                    </div>
                    <div className="text-right shrink-0 pl-5">
                      <p className="font-sans text-navy leading-none tracking-[-0.02em]" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 500 }}>{s.metric}</p>
                      <p className="font-label text-[8px] text-navy/30 uppercase tracking-[0.03em] mt-1">{s.metricLabel}</p>
                    </div>
                  </div>

                  <p className="font-sans text-navy/70 text-[14px] italic leading-snug mb-4">{s.tagline}</p>

                  <div className="border-l-2 border-navy/[0.06] pl-4 mb-5">
                    <p className="font-sans text-navy/45 text-[13px] italic leading-relaxed">
                      <span className="font-sans text-steel text-lg leading-none mr-0.5">&ldquo;</span>
                      {s.quote}&rdquo;
                    </p>
                    <p className="font-label text-[8px] text-navy/25 uppercase tracking-[0.03em] mt-2">&mdash; {s.quoteAttr}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.chips.map((c) => (
                      <span key={c} className="font-label text-[9px] text-navy/40 px-2.5 py-1 bg-cream">{c}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 border-t border-navy/[0.04] flex justify-end">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-sans text-[12px] text-[#004290] inline-flex items-center gap-1 no-underline hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                      View Full Story
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ GROWTH STORIES ═══ */}
      <div className="bg-cream py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Growth Stories</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Good narrative, developing structure. These stories show real progress but may need tighter metrics or editing before use in formal presentations.</p>
          </div>

          <div className="flex flex-col gap-0.5">
            {growthStories.map((g) => (
              <div key={g.biz} className="bg-white p-6 grid grid-cols-1 md:grid-cols-[1fr_1.2fr_auto] gap-6 md:gap-8 items-center hover:shadow-sm transition-shadow duration-200">
                <div className="min-w-0">
                  <p className="font-sans text-navy text-[11px] uppercase tracking-[0.04em] mb-1" style={{ fontWeight: 500 }}>{g.biz}</p>
                  <p className="font-sans text-navy/50 text-[12px] mb-0.5">{g.owner}</p>
                  <p className="font-label text-[9px] text-navy/30 uppercase tracking-[0.03em] mb-2.5">{g.center}</p>
                  <p className="font-sans text-navy/60 text-[14px] italic leading-snug">{g.tagline}</p>
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-navy/30 text-[10px] uppercase tracking-[0.04em] mb-2" style={{ fontWeight: 500 }}>Key Results</p>
                  {g.results.map((r) => (
                    <p key={r} className="font-sans text-navy/55 text-[13px] leading-snug pl-3.5 relative mb-1 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-steel">{r}</p>
                  ))}
                  <p className="font-sans text-navy/30 text-[12px] italic mt-3 pt-2.5 border-t border-navy/[0.04]">&ldquo;{g.quote}&rdquo;</p>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <span className="inline-flex items-center gap-1 font-label text-[9px] text-[#A73B44] px-2.5 py-1 border border-[#A73B44]/20 bg-[#A73B44]/[0.04]">
                    <span className="material-symbols-outlined" style={{ fontSize: 10 }}>warning</span>
                    {g.issue}
                  </span>
                  <a href={g.url} target="_blank" rel="noopener noreferrer" className="font-sans text-[12px] text-[#004290] inline-flex items-center gap-1 no-underline hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                    View Story
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ COMMUNITY SPOTLIGHTS ═══ */}
      <div className="bg-cream py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Community Spotlights</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Inspiring personal stories with lighter economic impact. Best for social media highlights, newsletter human-interest pieces, and community engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {spotlights.map((sp) => (
              <div key={sp.biz} className="bg-white p-6 flex flex-col hover:shadow-sm transition-shadow duration-200">
                <p className="font-sans text-navy text-[11px] uppercase tracking-[0.04em] mb-0.5" style={{ fontWeight: 500 }}>{sp.biz}</p>
                <p className="font-sans text-navy/50 text-[12px] mb-0.5">{sp.owner}</p>
                <p className="font-label text-[9px] text-navy/30 uppercase tracking-[0.03em] mb-3.5">{sp.center}</p>
                <p className="font-sans text-navy/55 text-[14px] leading-relaxed mb-4 flex-1">{sp.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sp.tags.map((t) => (
                    <span key={t} className="font-label text-[8px] text-steel px-2 py-0.5 border border-steel/25 uppercase tracking-[0.03em]">{t}</span>
                  ))}
                </div>
                <div className="pt-3 border-t border-navy/[0.04]">
                  <a href={sp.url} target="_blank" rel="noopener noreferrer" className="font-sans text-[12px] text-[#004290] inline-flex items-center gap-1 no-underline hover:gap-2 transition-all" style={{ fontWeight: 500 }}>
                    View Story
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ STORY SCORING RUBRIC ═══ */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Story Scoring Rubric</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Use this rubric to evaluate and classify new client stories. Every story should be scored before publishing.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-left font-sans text-navy/40 text-[10px] uppercase tracking-[0.04em] px-5 py-3.5 border-b border-navy/10 bg-cream" style={{ fontWeight: 500, width: "16%" }}>Criteria</th>
                  <th className="text-left font-sans text-[#004290] text-[10px] uppercase tracking-[0.04em] px-5 py-3.5 border-b border-navy/10 bg-cream" style={{ fontWeight: 500 }}>Signature (4–5 pts)</th>
                  <th className="text-left font-sans text-steel text-[10px] uppercase tracking-[0.04em] px-5 py-3.5 border-b border-navy/10 bg-cream" style={{ fontWeight: 500 }}>Growth (2–3 pts)</th>
                  <th className="text-left font-sans text-navy/35 text-[10px] uppercase tracking-[0.04em] px-5 py-3.5 border-b border-navy/10 bg-cream" style={{ fontWeight: 500 }}>Spotlight (0–1 pts)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Economic Impact", "$100K+ capital accessed, OR 5+ jobs, OR major revenue growth", "$10K\u2013$100K capital, OR 1\u20134 jobs, OR moderate growth", "Under $10K, or no quantified impact"],
                  ["Structure", "Clear Challenge \u2192 Solution \u2192 Results arc with metrics front and center", "Has the arc but results are buried or text is too long", "Missing structure, feelings-heavy, or no clear arc"],
                  ["Quote Quality", "Specific, attributable, mentions SBDC by name, speaks to measurable outcome", "Positive but generic (\u201ccouldn\u2019t have done it without them\u201d)", "Only emotional / no business substance"],
                  ["Photography", "Professional headshot or business photography available", "Has some imagery but not professional", "No photography available"],
                  ["Reusability", "Can headline an annual report, board presentation, or lender pitch", "Works for newsletters, blog posts, partner updates with light editing", "Best for social media posts and community engagement"],
                ].map(([criteria, sig, growth, spot]) => (
                  <tr key={criteria}>
                    <td className="font-sans text-navy text-[11px] uppercase tracking-[0.04em] px-5 py-4 border-b border-navy/[0.04] align-top" style={{ fontWeight: 500 }}>{criteria}</td>
                    <td className="font-sans text-navy/50 text-[13px] leading-snug px-5 py-4 border-b border-navy/[0.04] align-top">{sig}</td>
                    <td className="font-sans text-navy/50 text-[13px] leading-snug px-5 py-4 border-b border-navy/[0.04] align-top">{growth}</td>
                    <td className="font-sans text-navy/50 text-[13px] leading-snug px-5 py-4 border-b border-navy/[0.04] align-top">{spot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Score guide */}
          <div className="bg-white mt-0.5 pt-6">
            <p className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-4 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 14 }}>speed</span>
              Quick Score Guide
            </p>
            <div className="space-y-2.5">
              {[
                { range: "20\u201325", label: "Signature Story", sublabel: "ready for prime time", color: "bg-[#004290]" },
                { range: "12\u201319", label: "Growth Story", sublabel: "needs tightening before formal use", color: "bg-steel" },
                { range: "0\u201311", label: "Community Spotlight", sublabel: "use for social media and community content", color: "bg-navy/40" },
              ].map((s) => (
                <div key={s.range} className="flex items-baseline gap-3">
                  <span className={`${s.color} text-white font-label text-[10px] px-2.5 py-1 text-center min-w-[72px]`}>{s.range}</span>
                  <span className="font-sans text-navy/70 text-[14px]"><strong style={{ fontWeight: 500 }}>{s.label}</strong> &mdash; {s.sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STORY TOOLKIT ═══ */}
      <div className="bg-cream py-16 md:py-20 relative overflow-hidden">
        <span
          className="material-symbols-outlined absolute -right-8 top-[5%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          article
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Story Toolkit</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Templates and guidelines for writing new success stories to the Signature standard.</p>
          </div>

          {/* A. Story Structure Template */}
          <div className="bg-white p-6 md:p-8 mb-0.5">
            <p className="font-sans text-[#004290] text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>description</span>
              A. Story Structure Template
            </p>
            {[
              ["Kicker", "NorCal SBDC Success Story \u2014 appears above the headline, establishes context"],
              ["Business Name", "Large, bold headline \u2014 the business name displayed prominently"],
              ["Tagline", "One sentence describing what the business does \u2014 clear and concise"],
              ["Hero Metric", "The single most impressive number, displayed large \u2014 this is the anchor of the story"],
              ["Quote", "Direct quote from the business owner \u2014 specific and mentioning SBDC"],
              ["The Challenge", "2\u20133 sentences max. What was the obstacle?"],
              ["The Solution", "2\u20133 sentences max. What did SBDC do specifically?"],
              ["The Results", "Lead with numbers. 3\u20134 metric boxes displayed prominently."],
              ["Partner CTA", "Link to the NorCal SBDC center that helped \u2014 drives visitors back to the network"],
            ].map(([label, desc]) => (
              <div key={label} className="flex items-start gap-4 py-2.5 border-b border-navy/[0.04] last:border-b-0">
                <span className="font-label text-[9px] text-navy/30 uppercase tracking-[0.03em] min-w-[100px] shrink-0 pt-0.5">{label}</span>
                <span className="font-sans text-navy/55 text-[13px] leading-snug">{desc}</span>
              </div>
            ))}
          </div>

          {/* B. Writing Rules */}
          <div className="bg-white p-6 md:p-8 mb-0.5">
            <p className="font-sans text-[#004290] text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>edit_note</span>
              B. Writing Rules
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-sans text-[#16a34a] text-[10px] uppercase tracking-[0.04em] mb-3 flex items-center gap-1.5" style={{ fontWeight: 500 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span> Do
                </p>
                {["Lead with the most impressive metric", "Keep the total story under 400 words", "Use \u201cno-fee\u201d never \u201cfree\u201d", "Name the specific NorCal SBDC center and advisor", "Include at least 3 quantified outcomes", "Get a direct, specific quote about business results", "Use Challenge \u2192 Solution \u2192 Results structure"].map((d) => (
                  <p key={d} className="font-sans text-navy/55 text-[13px] leading-snug pl-4 mb-1.5 relative before:content-['+'] before:absolute before:left-0 before:text-[#16a34a] before:font-label before:text-[10px]">{d}</p>
                ))}
              </div>
              <div>
                <p className="font-sans text-[#A73B44] text-[10px] uppercase tracking-[0.04em] mb-3 flex items-center gap-1.5" style={{ fontWeight: 500 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>cancel</span> Don&rsquo;t
                </p>
                {["Bury results at the bottom", "Write more than 3 sentences per section", "Focus on feelings without tangible outcomes", "Use generic quotes (\u201cgreat experience\u201d)", "Lead with the business backstory", "Forget photography \u2014 always capture a portrait", "Use \u201cSBDC\u201d without \u201cNorCal\u201d prefix"].map((d) => (
                  <p key={d} className="font-sans text-navy/55 text-[13px] leading-snug pl-4 mb-1.5 relative before:content-['\u2013'] before:absolute before:left-0 before:text-[#A73B44] before:font-label before:text-[10px]">{d}</p>
                ))}
              </div>
            </div>
          </div>

          {/* C. Metric Priority Guide */}
          <div className="bg-white p-6 md:p-8 mb-0.5">
            <p className="font-sans text-[#004290] text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>bar_chart</span>
              C. Metric Priority Guide
            </p>
            <ol className="list-none p-0 counter-reset-none">
              {[
                ["Capital Accessed", "$ amount"],
                ["Jobs Created or Retained", "headcount"],
                ["Revenue / Sales Growth", "$ or %"],
                ["Loans Secured", "$ amount + lender"],
                ["Cost Reduction", "%"],
                ["Certifications Obtained", "WBE, MBE, etc."],
                ["Clients / Customers Gained", "headcount"],
                ["Social / Digital Growth", "followers, traffic"],
              ].map(([name, detail], i) => (
                <li key={name} className="flex items-baseline gap-3.5 py-2 border-b border-navy/[0.04] last:border-b-0">
                  <span className="font-sans text-[#004290] text-lg min-w-[20px] text-right" style={{ fontWeight: 500 }}>{i + 1}</span>
                  <span className="font-sans text-navy/70 text-[14px]">{name}</span>
                  <span className="font-sans text-navy/30 text-[12px] ml-auto">{detail}</span>
                </li>
              ))}
            </ol>
            <p className="font-sans text-navy/50 text-[13px] leading-relaxed mt-5 pt-4 border-t border-navy/10">
              <strong className="text-navy" style={{ fontWeight: 500 }}>Stories with metrics ranked 1–4 as primary are almost always Signature-quality.</strong> Stories led by metrics 5–8 need supporting capital/jobs data to reach Signature tier.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-[#0f1c2e] py-12">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-sans text-white/50 text-[15px]"><strong className="text-white" style={{ fontWeight: 500 }}>Have a client story to share?</strong> Submit your story for review and scoring against the rubric.</p>
          <a href="mailto:phelps@norcalsbdc.org" className="shrink-0 inline-flex items-center gap-2 font-sans text-steel text-[13px] px-5 py-2.5 border border-steel/30 rounded-sm hover:bg-steel/10 transition-colors no-underline">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
            phelps@norcalsbdc.org
          </a>
        </div>
      </div>

      <NextSectionLink title="Glossary" href="/glossary" />
    </>
  );
}
