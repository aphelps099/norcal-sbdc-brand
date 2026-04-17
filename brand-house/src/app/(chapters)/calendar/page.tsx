
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import SocialWall from "@/components/SocialWall";

const quarters = [
  {
    label: "Q1",
    num: "01",
    months: "January – March",
    theme: "New Year,\nNew Business",
    themeShort: "New Year, New Business",
    campaigns: [
      {
        name: "New Year Resolution Campaign",
        timing: "January",
        message: "Start the business you've been thinking about. We'll show you how.",
        channels: "Social, email, web",
      },
      {
        name: "Tax Season Prep",
        timing: "Feb – Mar",
        message: "Free workshops on small business tax planning and financial readiness.",
        channels: "Email, workshops, partner outreach",
      },
      {
        name: "Women's History Month",
        timing: "March",
        message: "Spotlighting women-owned businesses across Northern California.",
        channels: "Social series, success stories, event",
      },
    ],
    awareness: [
      "National Mentoring Month — Jan",
      "Black History Month — Feb",
      "Women's History Month — Mar",
      "SBA Small Business Week prep",
    ],
    dark: true,
  },
  {
    label: "Q2",
    num: "02",
    months: "April – June",
    theme: "Growth\nSeason",
    themeShort: "Growth Season",
    campaigns: [
      {
        name: "SBA National Small Business Week",
        timing: "Early May",
        message: "Celebrate small business. Free workshops, networking, and advisor meetups.",
        channels: "All channels — flagship event",
      },
      {
        name: "Summer Prep for Seasonal Businesses",
        timing: "May – Jun",
        message: "Get your business ready for the summer rush. Free planning sessions available.",
        channels: "Email, social, local partnerships",
      },
      {
        name: "Access to Capital Drive",
        timing: "Apr – Jun",
        message: "Need funding? Our advisors have helped clients raise $547M last year alone.",
        channels: "Social, workshops, lender events",
      },
    ],
    awareness: [
      "SBA National Small Business Week — May",
      "AAPI Heritage Month — May",
      "LGBTQ+ Pride Month — Jun",
    ],
    dark: false,
  },
  {
    label: "Q3",
    num: "03",
    months: "July – September",
    theme: "Back to\nBusiness",
    themeShort: "Back to Business",
    campaigns: [
      {
        name: "Mid-Year Business Health Check",
        timing: "July",
        message: "Halfway through the year. Let's review your goals and course-correct.",
        channels: "Email, social, advisor outreach",
      },
      {
        name: "Back-to-Business Fall Push",
        timing: "Aug – Sep",
        message: "Set your business up for a strong Q4. Free strategic planning sessions.",
        channels: "Social, email, workshops",
      },
      {
        name: "Hispanic Heritage Month Spotlights",
        timing: "Sep 15 – Oct 15",
        message: "Celebrating Hispanic and Latino-owned businesses and the advisors who serve them.",
        channels: "Social series, success stories",
      },
    ],
    awareness: [
      "Hispanic Heritage Month — Sep 15",
      "National Preparedness Month — Sep",
    ],
    dark: true,
  },
  {
    label: "Q4",
    num: "04",
    months: "October – December",
    theme: "Impact &\nYear-End",
    themeShort: "Impact & Year-End",
    campaigns: [
      {
        name: "Annual Impact Report",
        timing: "Oct – Nov",
        message: "Our numbers tell the story. $547M raised. 42,000+ jobs. Here's the full picture.",
        channels: "Web, email, social, stakeholders",
      },
      {
        name: "Small Business Saturday",
        timing: "Late Nov",
        message: "Shop local. Support the businesses that make our communities what they are.",
        channels: "Social, partner posts, local media",
      },
      {
        name: "Year-End Planning Workshops",
        timing: "Nov – Dec",
        message: "Close the year strong. Tax prep, financial review, and 2027 goal setting.",
        channels: "Email, workshops",
      },
    ],
    awareness: [
      "Disability Employment Awareness Month — Oct",
      "Native American Heritage Month — Nov",
      "Small Business Saturday — Nov",
      "Giving Tuesday — Dec",
    ],
    dark: false,
  },
];

const recurringContent = [
  { title: "Client Spotlight", frequency: "Bi-weekly", desc: "Feature a client success story with photo, quote, and impact stats. Use the Success Story template." },
  { title: "Advisor Tip", frequency: "Weekly", desc: "Short, actionable business advice from an SBDC advisor. Keep it under 200 words. Include advisor name and headshot." },
  { title: "By the Numbers", frequency: "Monthly", desc: "One compelling stat with context. '$12M in capital accessed by NorCal businesses in March alone.'" },
  { title: "Event Promotion", frequency: "As needed", desc: "Start promoting 2 weeks before. Increase frequency in the final 3 days. Include date, time, registration link, and what attendees will learn." },
  { title: "Partner Shoutout", frequency: "Monthly", desc: "Acknowledge lending partners, host institutions, and community organizations. Strengthens relationships and extends reach." },
];

export default function CalendarPage() {
  return (
    <>
      <InteriorHero
        chapterNumber="12"
        category="tools"
        title="Calendar"
        subtitle="Campaign themes, key dates, and a coordinated messaging framework so all 16 centers move together."
      />

      {/* ── Intro stat bar ── */}
      <div className="bg-[#0f1c2e] border-t border-white/[0.06]">
        <div className="max-w-[960px] mx-auto px-8 md:px-12 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { value: "4", label: "Campaign Quarters" },
              { value: "12", label: "Campaigns" },
              { value: "14", label: "Awareness Moments" },
              { value: "16", label: "Centers, One Voice" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-white/70 leading-none mb-2"
                  style={{ fontFamily: "var(--sans)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500 }}
                >
                  {s.value}
                </p>
                <p className="font-label text-[10px] uppercase tracking-[0.14em] text-white/30">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-white/35 leading-[1.7] max-w-[560px]" style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
            Every quarter has a theme. Every theme drives coordinated messaging across all centers.
            When we speak together, we&rsquo;re louder — while leaving room for local flavor.
          </p>
        </div>
      </div>

      {/* ── Quarter panels ── */}
      {quarters.map((q) => {
        const bg      = q.dark ? "#0f1c2e" : "#f5f4f0";
        const textPri = q.dark ? "text-white/90" : "text-navy";
        const textSec = q.dark ? "text-white/45" : "text-navy/50";
        const textTer = q.dark ? "text-white/25" : "text-navy/30";
        const border  = q.dark ? "border-white/[0.06]" : "border-navy/[0.07]";
        const chipBg  = q.dark ? "border-white/[0.10] text-white/30" : "border-navy/[0.12] text-navy/35";

        return (
          <div key={q.label} style={{ backgroundColor: bg }} className="relative overflow-hidden">
            {/* Coral keyline at top */}
            <div className="w-full h-[2px] bg-[#c4543a]" />

            {/* Giant quarter watermark */}
            <div
              className="absolute right-0 top-0 leading-none select-none pointer-events-none"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 600,
                fontSize: "clamp(180px, 28vw, 380px)",
                color: q.dark ? "rgba(255,255,255,0.025)" : "rgba(15,28,46,0.04)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                transform: "translateX(8%)",
              }}
              aria-hidden="true"
            >
              {q.num}
            </div>

            {q.dark && (
              <SbdcWatermark
                className="absolute -left-[6%] bottom-[5%] w-[30vw] max-w-[360px] text-white pointer-events-none select-none"
                opacity={0.025}
              />
            )}

            <div className="max-w-[960px] mx-auto px-8 md:px-12 py-14 md:py-20 relative z-10">

              {/* Quarter header */}
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10 mb-12 md:mb-16">
                <div className="shrink-0">
                  <p className={`font-label text-[10px] uppercase tracking-[0.2em] mb-3 ${textTer}`}>
                    {q.label} · {q.months}
                  </p>
                  <h2
                    className={`tracking-[-0.03em] leading-[0.95] whitespace-pre-line ${textPri}`}
                    style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(36px, 5vw, 64px)" }}
                  >
                    {q.theme}
                  </h2>
                </div>
              </div>

              {/* Campaign rows */}
              <div className={`border-t ${border}`}>
                {q.campaigns.map((c, ci) => (
                  <div
                    key={c.name}
                    className={`grid grid-cols-1 md:grid-cols-[160px_1fr_180px] gap-4 md:gap-8 py-6 md:py-7 border-b ${border}`}
                  >
                    {/* Left: name + timing */}
                    <div className="pt-0.5">
                      <p className={`font-sans text-[13px] leading-snug mb-1 ${textPri}`} style={{ fontWeight: 500 }}>
                        {c.name}
                      </p>
                      <p className={`font-label text-[10px] uppercase tracking-[0.1em] ${textTer}`}>
                        {c.timing}
                      </p>
                    </div>

                    {/* Center: message */}
                    <div>
                      <p className={`font-sans leading-[1.65] ${textSec}`}
                        style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
                        &ldquo;{c.message}&rdquo;
                      </p>
                    </div>

                    {/* Right: channels */}
                    <div className="pt-0.5">
                      <p className={`font-label text-[9px] uppercase tracking-[0.12em] mb-1.5 ${textTer}`}>Channels</p>
                      <p className={`font-sans text-[12px] leading-snug ${textSec}`}>{c.channels}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Awareness strip */}
              <div className="mt-6 flex flex-wrap gap-2">
                {q.awareness.map((a) => (
                  <span
                    key={a}
                    className={`inline-block px-3 py-1.5 border font-label text-[9px] uppercase tracking-[0.08em] ${chipBg}`}
                  >
                    {a}
                  </span>
                ))}
              </div>

            </div>
          </div>
        );
      })}

      <SocialWall />

      {/* ── Recurring Content Series ── */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <SbdcWatermark
          className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none"
          opacity={0.03}
        />
        <div className="max-w-[960px] mx-auto px-8 md:px-12 py-14 md:py-20 relative z-10">
          <div className="border-t border-white/[0.08] pt-6 mb-10">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/30 mb-2">Always-On</p>
            <h2
              className="text-white/90 tracking-[-0.02em]"
              style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(28px, 3.2vw, 40px)" }}
            >
              Recurring Content Series
            </h2>
          </div>
          <p className="font-sans text-white/35 leading-[1.7] mb-10 max-w-[520px]"
            style={{ fontSize: "clamp(13px, 1.3vw, 15px)" }}>
            In addition to campaign-specific content, these series keep your channels active and on-brand between pushes.
          </p>

          <div className="border-t border-white/[0.06]">
            {recurringContent.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-6 border-b border-white/[0.06]"
              >
                <div className="pt-0.5">
                  <p className="font-sans text-white/80 text-[14px] mb-1" style={{ fontWeight: 500 }}>
                    {item.title}
                  </p>
                  <span className="font-label text-[10px] uppercase tracking-[0.12em] text-[#c4543a]/70">
                    {item.frequency}
                  </span>
                </div>
                <p className="font-sans text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NextSectionLink title="Stories" href="/stories" />
    </>
  );
}
