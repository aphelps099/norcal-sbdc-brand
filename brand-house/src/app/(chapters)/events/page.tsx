import InteriorHero from "@/components/InteriorHero";
import SbdcWatermark from "@/components/SbdcWatermark";
import NextSectionLink from "@/components/NextSectionLink";

const templates = [
  {
    name: "Event Banner (Wide)",
    desc: "Full-width banner for event pages, email headers, and digital signage. Navy background with headline and four-color accent bar.",
    meta: "2400 \u00d7 600 px \u00b7 150 DPI \u00b7 PNG/PDF",
    tag: "Wide",
    tagColor: "steel",
    preview: "banner",
  },
  {
    name: "Workshop Flyer (Portrait)",
    desc: "Standard 8.5 \u00d7 11 flyer for workshops and classes. Navy header, title, event details, and Cobalt CTA button.",
    meta: "8.5 \u00d7 11 in \u00b7 300 DPI \u00b7 PDF",
    tag: "Portrait",
    tagColor: "cobalt",
    preview: "flyer",
  },
  {
    name: "Table Banner (Tall Vertical)",
    desc: "Retractable table banner for events and conferences. Star watermark, brand tagline, and four-color accent bar at base.",
    meta: "33 \u00d7 80 in \u00b7 150 DPI \u00b7 PDF",
    tag: "Print",
    tagColor: "steel",
    preview: "tallbanner",
  },
  {
    name: "Name Badge",
    desc: "Standard event name badge with navy header, name, light title, and Steel accent line. Print-ready at 4 \u00d7 3 inches.",
    meta: "4 \u00d7 3 in \u00b7 300 DPI \u00b7 PDF",
    tag: "Badge",
    tagColor: "default",
    preview: "badge",
  },
  {
    name: "Social Media Event Graphic",
    desc: "Square-format graphic for Instagram, LinkedIn, and Facebook event promotion. Abstract line pattern with title and date accent.",
    meta: "1080 \u00d7 1080 px \u00b7 72 DPI \u00b7 PNG",
    tag: "Social",
    tagColor: "steel",
    preview: "social",
  },
  {
    name: "Zoom Background",
    desc: "Virtual meeting background with gradient navy, semi-transparent star watermark, and tagline. Unobtrusive yet branded.",
    meta: "1920 \u00d7 1080 px \u00b7 72 DPI \u00b7 PNG",
    tag: "Virtual",
    tagColor: "default",
    preview: "zoom",
  },
  {
    name: "Email Invitation Header",
    desc: "600px-width email header with navy logo bar, Steel hero section, and white body with CTA button. Optimized for major email clients.",
    meta: "600 \u00d7 200 px \u00b7 72 DPI \u00b7 PNG",
    tag: "Email",
    tagColor: "cobalt",
    preview: "emailheader",
  },
  {
    name: "Pull-Up Banner",
    desc: "Tall retractable banner for conferences and expos. Large impact statistic, tagline, and four-color base bar for maximum visibility.",
    meta: "33 \u00d7 80 in \u00b7 150 DPI \u00b7 PDF",
    tag: "Print",
    tagColor: "steel",
    preview: "pullup",
  },
  {
    name: "Podium Sign",
    desc: "Square podium or table sign with cream background, centered navy logo, subtle star watermark, and URL in monospace.",
    meta: "12 \u00d7 12 in \u00b7 300 DPI \u00b7 PDF",
    tag: "Signage",
    tagColor: "default",
    preview: "podium",
  },
];

const sizeSpecs = [
  { format: "Event Banner", dimensions: "2400 \u00d7 600 px", resolution: "150 DPI", fileType: "PNG / PDF" },
  { format: "Workshop Flyer", dimensions: "8.5 \u00d7 11 in", resolution: "300 DPI", fileType: "PDF" },
  { format: "Social Graphic", dimensions: "1080 \u00d7 1080 px", resolution: "72 DPI", fileType: "PNG" },
  { format: "Zoom Background", dimensions: "1920 \u00d7 1080 px", resolution: "72 DPI", fileType: "PNG" },
  { format: "Table Banner", dimensions: "33 \u00d7 80 in", resolution: "150 DPI", fileType: "PDF" },
  { format: "Name Badge", dimensions: "4 \u00d7 3 in", resolution: "300 DPI", fileType: "PDF" },
  { format: "Pull-Up Banner", dimensions: "33 \u00d7 80 in", resolution: "150 DPI", fileType: "PDF" },
  { format: "Email Header", dimensions: "600 \u00d7 200 px", resolution: "72 DPI", fileType: "PNG" },
];

const checklist = [
  "Logo present and correctly placed",
  <>URL <strong style={{ fontWeight: 500 }}>norcalsbdc.org</strong> included on every piece</>,
  <><strong style={{ fontWeight: 500 }}>&ldquo;No-fee&rdquo;</strong> language used (never &ldquo;free&rdquo;)</>,
  <>Tagline present: <em>Your Business, Better.</em></>,
  "Correct fonts: Proxima Nova (headlines + body) + Roboto Mono (metadata)",
  "Color palette matches brand tokens (Navy, Cobalt, Steel, Berry, Cream)",
  <>Contact info included: <strong style={{ fontWeight: 500 }}>phelps@norcalsbdc.org</strong></>,
  "Print files exported at 300 DPI minimum",
];

function TagBadge({ label, color }: { label: string; color: string }) {
  const colors: Record<string, string> = {
    steel: "border-steel/40 text-steel",
    cobalt: "border-cobalt/30 text-cobalt",
    default: "border-navy/10 text-navy/50",
  };
  return (
    <span className={`absolute top-2.5 right-2.5 font-sans text-[9px] font-medium uppercase tracking-[0.04em] px-2 py-0.5 border ${colors[color] || colors.default}`}>
      {label}
    </span>
  );
}

function ColorBar() {
  return (
    <div className="flex h-[3px]">
      <div className="flex-1 bg-steel" />
      <div className="flex-1 bg-cream" />
      <div className="flex-1 bg-fog" />
      <div className="flex-1 bg-[#A73B44]" />
    </div>
  );
}

/* ─── Mini CSS Mockup Previews ─── */
function TemplateMockup({ type }: { type: string }) {
  switch (type) {
    case "banner":
      return (
        <div className="w-[80%] h-[60%] bg-[#0f1c2e] border border-white/[0.08] flex flex-col justify-center items-center px-3 relative">
          <div className="w-9 h-1 bg-white/25 rounded-sm mb-2" />
          <p style={{ fontFamily: "var(--sans)", fontSize: 11, color: "#fff", letterSpacing: "-0.02em", textAlign: "center", marginBottom: 4 }}>SBDC Day 2026</p>
          <div className="flex gap-1.5 mb-1.5">
            <span style={{ fontFamily: "var(--sans-label)", fontSize: 5, color: "#5684BA" }}>June 14, 2026</span>
            <span style={{ fontFamily: "var(--sans-label)", fontSize: 5, color: "rgba(255,255,255,0.3)" }}>Sacramento, CA</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex h-[3px]">
            <div className="flex-1 bg-steel" /><div className="flex-1 bg-cream" /><div className="flex-1 bg-fog" /><div className="flex-1 bg-[#A73B44]" />
          </div>
        </div>
      );
    case "flyer":
      return (
        <div className="w-[42%] h-[76%] bg-white flex flex-col shadow-md">
          <div className="h-[18%] bg-[#0f1c2e] flex items-center px-1.5"><div className="w-[30px] h-[3px] bg-white/30 rounded-sm" /></div>
          <div className="flex-1 p-1.5 flex flex-col">
            <p style={{ fontFamily: "var(--sans)", fontSize: 7, color: "#0f1c2e", letterSpacing: "-0.02em", marginBottom: 2 }}>Cash Flow Masterclass</p>
            <div className="w-[60%] h-[2px] bg-black/[0.06] rounded-sm mb-0.5" />
            <div className="w-[80%] h-[2px] bg-black/[0.04] rounded-sm mb-0.5" />
            <div className="w-[70%] h-[2px] bg-black/[0.04] rounded-sm mb-0.5" />
            <div className="w-[85%] h-[2px] bg-black/[0.04] rounded-sm mb-1" />
            <div className="w-[60%] h-[8px] bg-[#004290] rounded-sm mt-auto mx-auto" />
          </div>
          <div className="h-[10%] bg-cream flex items-center justify-center"><div className="w-5 h-[3px] bg-navy/30 rounded-sm" /></div>
        </div>
      );
    case "tallbanner":
      return (
        <div className="w-[22%] h-[78%] bg-[#0f1c2e] border border-white/[0.08] flex flex-col items-center justify-between py-2 px-1">
          <div className="w-3.5 h-3.5 opacity-[0.08]"><div className="w-full h-full bg-white" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} /></div>
          <div className="text-center"><p style={{ fontFamily: "var(--sans)", fontSize: 6, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>Your Business,</p><p style={{ fontFamily: "var(--sans)", fontSize: 6, color: "#fff", letterSpacing: "-0.02em" }}>Better.</p></div>
          <div><p style={{ fontFamily: "var(--sans-label)", fontSize: 4, color: "rgba(255,255,255,0.3)", textAlign: "center", marginBottom: 4 }}>norcalsbdc.org</p><div className="flex h-[3px]"><div className="flex-1 bg-steel" /><div className="flex-1 bg-cream" /><div className="flex-1 bg-fog" /><div className="flex-1 bg-[#A73B44]" /></div></div>
        </div>
      );
    case "badge":
      return (
        <div className="w-[52%] h-[56%] bg-white flex flex-col shadow-sm">
          <div className="h-[26%] bg-[#0f1c2e] flex items-center justify-center"><span style={{ fontFamily: "var(--sans)", fontSize: 5, fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em", textTransform: "uppercase" as const }}>NorCal SBDC</span></div>
          <div className="flex-1 flex flex-col items-center justify-center p-1">
            <p style={{ fontFamily: "var(--sans)", fontSize: 9, color: "#0f1c2e", marginBottom: 1 }}>[Name]</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: 5, fontWeight: 500, color: "#4a4a4a" }}>[Title]</p>
            <div className="w-5 h-[2px] bg-steel rounded-sm mt-1" />
          </div>
        </div>
      );
    case "social":
      return (
        <div className="w-[50%] aspect-square bg-[#0f1c2e] border border-white/[0.08] flex flex-col items-center justify-center p-2 relative">
          <p style={{ fontFamily: "var(--sans)", fontSize: 8, color: "#fff", letterSpacing: "-0.02em", textAlign: "center", marginBottom: 3 }}>SBDC Day 2026</p>
          <span style={{ fontFamily: "var(--sans-label)", fontSize: 4, color: "#5684BA" }}>June 14, 2026</span>
          <div className="absolute bottom-3 w-5 h-[3px] bg-white/15 rounded-sm" />
        </div>
      );
    case "zoom":
      return (
        <div className="w-[68%] aspect-video bg-gradient-to-br from-[#0f1c2e] to-[#1a2d45] border border-white/[0.06] flex flex-col items-center justify-center p-2 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] aspect-square opacity-[0.04]"><div className="w-full h-full bg-white" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} /></div>
          <p style={{ fontFamily: "var(--sans)", fontSize: 7, color: "#fff", letterSpacing: "-0.02em", position: "relative", zIndex: 1 }}>Your Business, Better.</p>
          <span style={{ fontFamily: "var(--sans-label)", fontSize: 4, color: "rgba(255,255,255,0.2)", position: "absolute", bottom: 5, right: 8 }}>norcalsbdc.org</span>
        </div>
      );
    case "emailheader":
      return (
        <div className="w-[52%] h-[72%] bg-white flex flex-col shadow-sm">
          <div className="h-[12%] bg-[#0f1c2e] flex items-center px-1.5"><div className="w-6 h-[3px] bg-white/30 rounded-sm" /></div>
          <div className="h-[30%] bg-steel flex items-center justify-center p-1"><p style={{ fontFamily: "var(--sans)", fontSize: 6, color: "#0f1c2e", letterSpacing: "-0.02em" }}>Workshop Invite</p></div>
          <div className="flex-1 p-1.5">
            <div className="w-[90%] h-[2px] bg-black/[0.06] rounded-sm mb-0.5" />
            <div className="w-[75%] h-[2px] bg-black/[0.04] rounded-sm mb-0.5" />
            <div className="w-[85%] h-[2px] bg-black/[0.04] rounded-sm mb-1" />
            <div className="w-[50%] h-[6px] bg-[#004290] rounded-sm mx-auto" />
          </div>
        </div>
      );
    case "pullup":
      return (
        <div className="w-[22%] h-[78%] bg-[#0f1c2e] border border-white/[0.08] flex flex-col items-center justify-between py-2 px-1">
          <div className="w-5 h-[3px] bg-white/25 rounded-sm" />
          <div className="text-center">
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "#5684BA", lineHeight: 1, letterSpacing: "-0.02em" }}>$547M</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: 4, fontWeight: 500, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Capital Accessed by</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: 4, fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>NorCal Clients</p>
          </div>
          <div><p style={{ fontFamily: "var(--sans)", fontSize: 5, color: "#fff", textAlign: "center", marginBottom: 2 }}>Your Business, Better.</p><div className="flex h-[3px]"><div className="flex-1 bg-steel" /><div className="flex-1 bg-cream" /><div className="flex-1 bg-fog" /><div className="flex-1 bg-[#A73B44]" /></div></div>
        </div>
      );
    case "podium":
      return (
        <div className="w-[50%] aspect-square bg-cream flex flex-col items-center justify-center p-2 relative shadow-sm">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square opacity-[0.04]"><div className="w-full h-full bg-navy" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} /></div>
          <div className="w-9 h-2.5 bg-navy rounded-sm relative z-10 mb-1" />
          <span style={{ fontFamily: "var(--sans-label)", fontSize: 4, color: "#888", position: "relative", zIndex: 1 }}>norcalsbdc.org</span>
        </div>
      );
    default:
      return <div className="w-[60%] h-[60%] bg-navy/10 rounded-sm" />;
  }
}

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <InteriorHero
        chapterNumber="09"
        category="tools"
        title="events"
        subtitle="Templates, live samples, and guidelines for creating on-brand event collateral — from workshop flyers and banners to name badges and social graphics."
      />

      {/* Hero stats band */}
      <div className="bg-[#0f1c2e] pb-12 md:pb-16">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="flex gap-10 pt-6 border-t border-white/[0.08] flex-wrap">
            {[
              { num: "9", label: "Templates" },
              { num: "4", label: "Live Samples" },
              { num: "5", label: "Guidelines" },
              { num: "8", label: "Size Specs" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-sans text-steel leading-none mb-1" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500 }}>{s.num}</p>
                <p className="font-label text-[10px] uppercase tracking-[0.04em] text-white/30">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
           SECTION 1: TEMPLATE GALLERY
           ═══════════════════════════════════════════ */}
      <div className="bg-cream py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Template Gallery</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Mini CSS mockups of every standard event graphic template. Each follows the NorCal SBDC brand system precisely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {templates.map((t) => (
              <div key={t.name} className="bg-white flex flex-col hover:shadow-md transition-shadow duration-200">
                <div className={`aspect-[16/10] flex items-center justify-center relative overflow-hidden ${t.preview === "flyer" || t.preview === "badge" || t.preview === "emailheader" || t.preview === "podium" ? "bg-[#e8e7e3]" : "bg-[#0f1c2e]"}`}>
                  <TagBadge label={t.tag} color={t.tagColor} />
                  <TemplateMockup type={t.preview} />
                </div>
                <div className="px-5 py-4 flex-1 flex flex-col">
                  <p className="font-sans text-navy text-[11px] uppercase tracking-[0.04em] mb-1" style={{ fontWeight: 500 }}>{t.name}</p>
                  <p className="font-sans text-navy/50 text-[13px] leading-relaxed mb-3">{t.desc}</p>
                  <p className="font-label text-[10px] text-navy/30 mt-auto">{t.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
           SECTION 2: LIVE SAMPLES
           ═══════════════════════════════════════════ */}
      <div className="bg-cream py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Live Samples</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Detailed CSS renderings of completed event graphics. These show exactly how final production pieces should appear.</p>
          </div>

          {/* A: Workshop Flyer */}
          <div className="border-t border-navy/10 pt-6 mb-6">
            <h3 className="font-sans text-navy text-[15px] flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 18 }}>description</span>
              Workshop Flyer
            </h3>
            <p className="font-sans text-navy/50 text-[14px] mt-1">Full-detail rendering of a standard workshop flyer at production quality.</p>
          </div>
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <div className="max-w-[420px] mx-auto">
              <div className="border border-black/[0.06] overflow-hidden shadow-lg">
                <div className="bg-[#0f1c2e] px-5 py-4 flex items-center gap-3">
                  <div className="w-20 h-2.5 bg-white/30 rounded-sm" />
                </div>
                <div className="p-6">
                  <h4 className="font-sans text-navy tracking-[-0.02em] leading-tight mb-1" style={{ fontSize: "1.5rem", fontWeight: 500 }}>Cash Flow Masterclass</h4>
                  <p className="font-sans text-navy/50 text-[13px] mb-5">Building Financial Resilience for Small Business</p>
                  <div className="bg-[#004290]/[0.08] p-3.5 mb-5 space-y-1">
                    {[
                      ["calendar_today", "Thursday, March 19, 2026"],
                      ["schedule", "10:00 AM \u2013 12:30 PM PT"],
                      ["location_on", "NorCal SBDC \u2014 Sacramento Center"],
                    ].map(([icon, text]) => (
                      <div key={icon} className="flex items-center gap-2 font-sans text-navy text-[12px]">
                        <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 14 }}>{icon}</span>
                        {text}
                      </div>
                    ))}
                  </div>
                  <p className="font-sans text-navy/50 text-[13px] leading-relaxed mb-5">Join our no-fee workshop designed to help small business owners master the fundamentals of cash flow management. Learn proven strategies to forecast revenue, manage expenses, and build financial resilience.</p>
                  <p className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-2.5" style={{ fontWeight: 500 }}>What You&rsquo;ll Learn</p>
                  {[
                    "Cash flow forecasting and projection techniques",
                    "Strategies for managing accounts receivable",
                    "Building a 90-day cash reserve plan",
                    "Tools for tracking and automating cash flow",
                  ].map((b) => (
                    <p key={b} className="font-sans text-navy/50 text-[12px] leading-relaxed pl-4 mb-1.5 relative before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-steel">{b}</p>
                  ))}
                  <div className="flex gap-3.5 items-center py-4 my-4 border-t border-b border-black/[0.06]">
                    <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-navy/30" style={{ fontSize: 20 }}>person</span>
                    </div>
                    <div>
                      <p className="font-sans text-navy text-[13px]" style={{ fontWeight: 500 }}>Maria Gonzalez, CPA</p>
                      <p className="font-sans text-navy/40 text-[11px]">Senior Business Advisor, NorCal SBDC</p>
                    </div>
                  </div>
                  <div className="bg-[#004290] text-white text-center font-sans text-[13px] py-3 rounded-sm my-5" style={{ fontWeight: 500 }}>Register Now &mdash; It&rsquo;s No-Fee</div>
                </div>
                <div className="bg-cream px-5 py-3 flex items-center justify-between">
                  <span className="font-sans text-navy/40 text-[9px] uppercase tracking-[0.04em]" style={{ fontWeight: 500 }}>NorCal SBDC</span>
                  <span className="font-label text-[10px] text-[#004290]">norcalsbdc.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* B: Event Banner */}
          <div className="border-t border-navy/10 pt-6 mb-6 mt-10">
            <h3 className="font-sans text-navy text-[15px] flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 18 }}>image</span>
              Event Banner
            </h3>
            <p className="font-sans text-navy/50 text-[14px] mt-1">Full-width digital banner at 16:5 aspect ratio for event pages and signage.</p>
          </div>
          <div className="bg-white p-4 md:p-6 mb-0.5">
            <div className="aspect-[16/5] bg-[#0f1c2e] relative overflow-hidden flex flex-col justify-center px-6 md:px-10 shadow-lg">
              <SbdcWatermark className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[30%] text-white" opacity={0.04} />
              <div className="w-[90px] h-3 bg-white/25 rounded-sm mb-4" />
              <p className="font-sans text-white tracking-[-0.03em] leading-none mb-1 relative z-10" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 500 }}>SBDC Day 2026</p>
              <p className="font-sans text-white/50 text-sm mb-3 relative z-10" style={{ fontSize: "clamp(0.7rem, 1vw, 0.85rem)" }}>Celebrating 20 Years of Small Business Impact</p>
              <p className="font-label text-steel relative z-10" style={{ fontSize: "clamp(0.5rem, 0.8vw, 0.65rem)" }}>June 14, 2026 &nbsp;&middot;&nbsp; 9:00 AM &ndash; 4:00 PM &nbsp;&middot;&nbsp; Sacramento Convention Center</p>
              <p className="font-label text-white/30 mt-3 relative z-10" style={{ fontSize: "clamp(0.45rem, 0.7vw, 0.55rem)" }}>18 Centers &nbsp;&middot;&nbsp; 36 Counties &nbsp;&middot;&nbsp; $547M Impact</p>
              <div className="absolute bottom-0 left-0 right-0 flex h-1">
                <div className="flex-1 bg-steel" /><div className="flex-1 bg-cream" /><div className="flex-1 bg-fog" /><div className="flex-1 bg-[#A73B44]" />
              </div>
            </div>
          </div>

          {/* C: Name Badge Set */}
          <div className="border-t border-navy/10 pt-6 mb-6 mt-10">
            <h3 className="font-sans text-navy text-[15px] flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 18 }}>badge</span>
              Name Badge Set
            </h3>
            <p className="font-sans text-navy/50 text-[14px] mt-1">Standard attendee badge and VIP/Speaker badge variation side by side.</p>
          </div>
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[520px] mx-auto">
              {/* Standard */}
              <div className="aspect-[4/3] flex flex-col overflow-hidden shadow-md border border-black/[0.06]">
                <div className="bg-[#0f1c2e] px-3 py-2.5 flex items-center justify-center"><span className="font-sans text-white/70 text-[9px] uppercase tracking-[0.06em]" style={{ fontWeight: 500 }}>NorCal SBDC</span></div>
                <div className="flex-1 flex flex-col items-center justify-center p-4 bg-white">
                  <p className="font-sans text-navy text-lg tracking-[-0.02em]" style={{ fontWeight: 500 }}>Sarah Mitchell</p>
                  <p className="font-sans text-navy/50 text-[11px]">Owner, Blue Oak Bakery</p>
                  <div className="w-10 h-[2px] bg-steel rounded-sm mt-2 mb-1.5" />
                  <p className="font-label text-navy/30 text-[8px]">SBDC Day 2026 &middot; Attendee</p>
                </div>
              </div>
              {/* VIP */}
              <div className="aspect-[4/3] flex flex-col overflow-hidden shadow-md bg-[#0f1c2e]">
                <div className="bg-white/[0.05] border-b border-white/[0.08] px-3 py-2.5 flex items-center justify-center"><span className="font-sans text-steel text-[9px] uppercase tracking-[0.06em]" style={{ fontWeight: 500 }}>NorCal SBDC</span></div>
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  <p className="font-sans text-white text-lg tracking-[-0.02em]" style={{ fontWeight: 500 }}>James Ortega</p>
                  <p className="font-sans text-white/40 text-[11px]">Regional Director, NorCal SBDC</p>
                  <div className="w-10 h-[2px] bg-steel rounded-sm mt-2 mb-1.5" />
                  <span className="font-sans text-[8px] uppercase tracking-[0.06em] bg-steel text-navy px-2 py-0.5 rounded-sm" style={{ fontWeight: 500 }}>Speaker</span>
                </div>
              </div>
            </div>
          </div>

          {/* D: Social Series */}
          <div className="border-t border-navy/10 pt-6 mb-6 mt-10">
            <h3 className="font-sans text-navy text-[15px] flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 18 }}>share</span>
              Social Series
            </h3>
            <p className="font-sans text-navy/50 text-[14px] mt-1">Three coordinated square graphics for social media campaigns.</p>
          </div>
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[600px] mx-auto">
              {/* Announcement */}
              <div className="aspect-square bg-[#0f1c2e] flex flex-col items-center justify-center p-4 relative shadow-md overflow-hidden">
                <div className="absolute top-3 left-3 w-[30px] h-1 bg-white/15 rounded-sm" />
                <p className="font-sans text-white tracking-[-0.02em] leading-tight text-center relative z-10" style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)", fontWeight: 500 }}>SBDC Day</p>
                <p className="font-sans text-white tracking-[-0.02em] leading-tight relative z-10" style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)", fontWeight: 500 }}>2026</p>
                <p className="font-label text-steel text-[8px] mt-1.5 relative z-10">June 14 &middot; Sacramento</p>
                <div className="absolute bottom-2.5 w-6 h-[3px] bg-white/15 rounded-sm" />
              </div>
              {/* Client Spotlight */}
              <div className="aspect-square bg-white border border-black/[0.06] flex flex-col items-center justify-center p-4 relative shadow-md">
                <span className="absolute top-3 left-3 font-sans text-[7px] uppercase tracking-[0.06em] text-[#004290]" style={{ fontWeight: 500 }}>Client Spotlight</span>
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-navy/30" style={{ fontSize: 18 }}>person</span>
                </div>
                <p className="font-sans text-navy text-[13px] tracking-[-0.02em]" style={{ fontWeight: 500 }}>[Client Name]</p>
                <p className="font-sans text-navy/50 text-[9px] mt-0.5">[Business Name]</p>
                <div className="w-6 h-[2px] bg-steel rounded-sm mt-2" />
                <span className="absolute bottom-2.5 font-label text-navy/30 text-[7px]">norcalsbdc.org</span>
              </div>
              {/* Impact Stat */}
              <div className="aspect-square bg-[#0f1c2e] flex flex-col items-center justify-center p-4 relative shadow-md">
                <span className="absolute top-3 left-3 font-sans text-[7px] uppercase tracking-[0.06em] text-steel" style={{ fontWeight: 500 }}>Impact</span>
                <p className="font-sans text-steel tracking-[-0.03em] leading-none relative z-10" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 500 }}>$58</p>
                <p className="font-sans text-white/50 text-[10px] mt-1 text-center leading-snug relative z-10">return on every<br />$1 invested</p>
                <div className="absolute bottom-2.5 w-6 h-[3px] bg-white/15 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
           ACTIVATION STARTER KIT
           ═══════════════════════════════════════════ */}
      <div className="bg-white py-16 md:py-20 relative overflow-hidden">
        <span
          className="material-symbols-outlined absolute -right-10 top-[3%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          rocket_launch
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <div className="border-t border-navy/10 pt-6 mb-6">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">Year-Round Activations</p>
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Activation Starter Kit</h2>
          </div>
          <p className="font-sans text-navy/50 text-[15px] leading-relaxed mb-10 max-w-xl">
            Evergreen activation ideas that centers can deploy anytime. Each maps to a pillar. Pick 1&ndash;2 per quarter and execute well.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-navy/[0.06] overflow-hidden">
            {[
              { icon: "person", name: "Advisor Spotlight Series", desc: "Photograph each advisor. Record a 60-second intro video. Publish one per week across social. Let entrepreneurs see the person behind the consultation.", tags: ["People", "Content", "Ongoing"] },
              { icon: "account_balance", name: "Capital Access Workshop", desc: "90-minute session on SBA lending, loan packaging, and financial readiness. Invite a lender partner to co-present. End with 1-on-1 booking slots.", tags: ["Funded", "In-Person / Virtual", "Quarterly"] },
              { icon: "hub", name: "Entrepreneur Mixer", desc: "Casual networking event at a local venue. Pair current clients with prospective ones. No presentations \u2014 just conversations and connections.", tags: ["Connected", "In-Person", "Quarterly"] },
              { icon: "videocam", name: "Client Story Video", desc: "Record a 2\u20133 minute video with a client sharing their SBDC journey. Use the signature story template for structure. Authentic, unscripted, powerful.", tags: ["People", "Content", "Monthly"] },
              { icon: "payments", name: "Lender Lunch & Learn", desc: "Invite 2\u20133 lending partners for a roundtable with clients. Demystify the lending process. Build relationships between entrepreneurs and lenders face to face.", tags: ["Funded", "Connected", "Bi-Annual"] },
              { icon: "handshake", name: "Partner Co-Marketing", desc: "Cross-promote with a chamber, city, or economic development partner. Co-branded social post, newsletter swap, or joint workshop. Expand reach organically.", tags: ["Connected", "Digital", "Monthly"] },
            ].map((idea) => (
              <div key={idea.name} className="bg-white p-5">
                <span
                  className="material-symbols-outlined text-navy mb-2 block"
                  style={{ fontSize: 24, fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >{idea.icon}</span>
                <h3 className="font-sans text-navy text-[15px] tracking-[-0.01em] mb-1" style={{ fontWeight: 500 }}>{idea.name}</h3>
                <p className="font-sans text-navy/50 text-[13px] leading-relaxed mb-3">{idea.desc}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {idea.tags.map((tag) => (
                    <span key={tag} className="font-label text-[9px] px-2 py-0.5 bg-cream text-navy/40">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
           SECTION 3: USAGE GUIDELINES
           ═══════════════════════════════════════════ */}
      <div className="bg-cream py-16 md:py-20">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 500 }}>Usage Guidelines</h2>
            <p className="font-sans text-navy/50 text-[15px] leading-relaxed mt-2 max-w-xl">Sizing specifications, placement rules, color usage, typography standards, and the branding checklist for all event materials.</p>
          </div>

          {/* A: Size Reference Table */}
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <h3 className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 16 }}>straighten</span>
              Size Reference
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["Format", "Dimensions", "Resolution", "File Type"].map((h) => (
                    <th key={h} className="text-left font-sans text-navy/40 text-[10px] uppercase tracking-[0.04em] px-3 py-2.5 border-b border-navy/10" style={{ fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizeSpecs.map((row) => (
                  <tr key={row.format}>
                    <td className="font-sans text-navy text-[13px] px-3 py-2.5 border-b border-navy/[0.04]" style={{ fontWeight: 500 }}>{row.format}</td>
                    <td className="font-sans text-navy/50 text-[13px] px-3 py-2.5 border-b border-navy/[0.04]">{row.dimensions}</td>
                    <td className="font-sans text-navy/50 text-[13px] px-3 py-2.5 border-b border-navy/[0.04]">{row.resolution}</td>
                    <td className="font-sans text-navy/50 text-[13px] px-3 py-2.5 border-b border-navy/[0.04]">{row.fileType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* B: Logo Placement Rules */}
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <h3 className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 16 }}>branding_watermark</span>
              Logo Placement Rules
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* DO: Top-left */}
              <div className="flex flex-col gap-2.5">
                <div className="aspect-video bg-[#0f1c2e] relative flex items-center justify-center">
                  <div className="absolute top-3.5 left-4 w-[52px] h-2 bg-white/30 rounded-sm" />
                  <div className="absolute top-2.5 left-3 w-[68px] h-6 border border-dashed border-steel/30 rounded-sm" />
                </div>
                <div>
                  <p className="font-sans text-[#16a34a] text-[10px] uppercase tracking-[0.04em] flex items-center gap-1.5" style={{ fontWeight: 500 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span>
                    Do: Top-left with clear space
                  </p>
                  <p className="font-sans text-navy/50 text-[13px] mt-1">Position logo in top-left or centered with at least 1&times; logo-height of clear space on all sides.</p>
                </div>
              </div>
              {/* DO: Color contrast */}
              <div className="flex flex-col gap-2.5">
                <div className="aspect-video relative flex items-center justify-center" style={{ background: "linear-gradient(to right, #0f1c2e 50%, #f5f4f0 50%)" }}>
                  <div className="absolute left-[12%] top-1/2 -translate-y-1/2 w-11 h-[7px] bg-white/50 rounded-sm" />
                  <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-11 h-[7px] bg-[#004290]/60 rounded-sm" />
                </div>
                <div>
                  <p className="font-sans text-[#16a34a] text-[10px] uppercase tracking-[0.04em] flex items-center gap-1.5" style={{ fontWeight: 500 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span>
                    Do: Correct color contrast
                  </p>
                  <p className="font-sans text-navy/50 text-[13px] mt-1">Use white logo on dark backgrounds, blue logo on light backgrounds. Never reverse this pairing.</p>
                </div>
              </div>
              {/* DONT: Stretch */}
              <div className="flex flex-col gap-2.5">
                <div className="aspect-video bg-cream relative flex items-center justify-center">
                  <div className="w-14 h-3 bg-[#004290]/30 rounded-sm" style={{ transform: "skewX(-15deg) scaleY(1.4)" }} />
                  <div className="absolute top-2 right-2 w-5 h-5 border-2 border-[#A73B44] rounded-full flex items-center justify-center"><div className="w-5 h-[2px] bg-[#A73B44] rotate-45" /></div>
                </div>
                <div>
                  <p className="font-sans text-[#A73B44] text-[10px] uppercase tracking-[0.04em] flex items-center gap-1.5" style={{ fontWeight: 500 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>cancel</span>
                    Don&rsquo;t: Stretch, rotate, or recolor
                  </p>
                  <p className="font-sans text-navy/50 text-[13px] mt-1">Never distort the logo proportions, rotate it, or apply colors outside the approved palette.</p>
                </div>
              </div>
              {/* DONT: Busy bg */}
              <div className="flex flex-col gap-2.5">
                <div className="aspect-video relative flex items-center justify-center" style={{ background: "repeating-linear-gradient(45deg, #ddd, #ddd 4px, #ccc 4px, #ccc 8px)" }}>
                  <div className="w-11 h-[7px] bg-[#004290]/30 rounded-sm" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-2 border-[#A73B44] rounded-full flex items-center justify-center"><div className="w-5 h-[2px] bg-[#A73B44] rotate-45" /></div>
                </div>
                <div>
                  <p className="font-sans text-[#A73B44] text-[10px] uppercase tracking-[0.04em] flex items-center gap-1.5" style={{ fontWeight: 500 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>cancel</span>
                    Don&rsquo;t: Place on busy backgrounds
                  </p>
                  <p className="font-sans text-navy/50 text-[13px] mt-1">Avoid placing the logo on patterned, photographic, or low-contrast backgrounds without a solid backing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* C: Color Usage for Events */}
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <h3 className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 16 }}>palette</span>
              Color Usage for Events
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Navy", hex: "#0f1c2e", use: "Backgrounds, headers" },
                { name: "Steel", hex: "#5684BA", use: "Highlights, dates, CTAs" },
                { name: "Cobalt", hex: "#004290", use: "Buttons, links" },
                { name: "Berry", hex: "#A73B44", use: "Urgent notices only" },
                { name: "Cream", hex: "#f5f4f0", use: "Light layouts, backgrounds" },
                { name: "Fog", hex: "#85A3C8", use: "Supporting, accents" },
              ].map((c) => (
                <div key={c.name} className="flex items-center gap-3 p-3 bg-cream">
                  <div className="w-9 h-9 shrink-0 border border-black/[0.06]" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="font-sans text-navy text-[13px]" style={{ fontWeight: 500 }}>{c.name}</p>
                    <p className="font-label text-navy/30 text-[10px]">{c.hex}</p>
                    <p className="font-sans text-navy/50 text-[11px]">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* D: Typography for Print */}
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <h3 className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 16 }}>text_fields</span>
              Typography for Print
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
              <div className="bg-cream p-5">
                <p className="font-sans text-navy/40 text-[10px] uppercase tracking-[0.04em] mb-2" style={{ fontWeight: 500 }}>Headlines</p>
                <p className="font-sans text-navy tracking-[-0.02em] text-[22px] mb-1.5" style={{ fontWeight: 500 }}>Proxima Nova Medium</p>
                <p className="font-label text-navy/30 text-[10px]">Proxima Nova 500 &middot; Minimum 24pt &middot; Letter-spacing: -0.02em</p>
              </div>
              <div className="bg-cream p-5">
                <p className="font-sans text-navy/40 text-[10px] uppercase tracking-[0.04em] mb-2" style={{ fontWeight: 500 }}>Body Text</p>
                <p className="font-sans text-navy/60 text-[15px] mb-1.5" style={{ fontWeight: 500 }}>Proxima Nova Medium</p>
                <p className="font-label text-navy/30 text-[10px]">Proxima Nova 500 &middot; Minimum 10pt &middot; Line-height: 1.5</p>
              </div>
              <div className="bg-cream p-5">
                <p className="font-sans text-navy/40 text-[10px] uppercase tracking-[0.04em] mb-2" style={{ fontWeight: 500 }}>Metadata</p>
                <p className="font-label text-navy/50 text-[13px] mb-1.5">Roboto Mono Regular</p>
                <p className="font-label text-navy/30 text-[10px]">Roboto Mono 400 &middot; 7&ndash;8pt &middot; Dates, specs, URLs</p>
              </div>
              <div className="bg-cream p-5">
                <p className="font-sans text-navy/40 text-[10px] uppercase tracking-[0.04em] mb-2" style={{ fontWeight: 500 }}>Important</p>
                <p className="font-sans text-[#A73B44] text-[14px] mb-1.5" style={{ fontWeight: 500 }}>Only use medium weight</p>
                <p className="font-label text-navy/30 text-[10px]">Bold / Light weights are not available &middot; Use 500 weight only</p>
              </div>
            </div>
          </div>

          {/* E: Branding Checklist */}
          <div className="bg-white p-8 md:p-10 mb-0.5">
            <h3 className="font-sans text-navy text-[10px] uppercase tracking-[0.04em] mb-5 flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span className="material-symbols-outlined text-[#004290]" style={{ fontSize: 16 }}>task_alt</span>
              Branding Checklist
            </h3>
            <ul className="list-none p-0">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 py-2.5 border-b border-navy/[0.04] last:border-b-0 font-sans text-navy/60 text-[14px]">
                  <span className="material-symbols-outlined text-[#16a34a] shrink-0" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA Bar ── */}
      <div className="bg-[#0f1c2e] py-12">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="font-sans text-white/50 text-[15px]"><strong className="text-white" style={{ fontWeight: 500 }}>Your Business, Better.</strong> Need custom event graphics or have questions about brand compliance?</p>
          <a href="mailto:phelps@norcalsbdc.org" className="shrink-0 inline-flex items-center gap-2 font-sans text-steel text-[13px] px-5 py-2.5 border border-steel/30 rounded-sm hover:bg-steel/10 transition-colors no-underline">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>mail</span>
            phelps@norcalsbdc.org
          </a>
        </div>
      </div>

      <NextSectionLink title="Templates" href="/templates" />
    </>
  );
}
