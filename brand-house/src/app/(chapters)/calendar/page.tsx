
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

type CardBg = "navy" | "cobalt" | "berry" | "white";

interface SocialCard {
  bg: CardBg;
  label: string;
  stat?: string;
  headline: string;
  body?: string;
  quote?: boolean;
  attribution?: string;
  cta?: string;
}

const BG_STYLES: Record<CardBg, { bg: string; text: string; muted: string; cta: string }> = {
  navy:   { bg: "#0f1c2e", text: "rgba(255,255,255,0.92)", muted: "rgba(255,255,255,0.4)", cta: "#8FC5D9" },
  cobalt: { bg: "#004290", text: "rgba(255,255,255,0.92)", muted: "rgba(255,255,255,0.45)", cta: "#8FC5D9" },
  berry:  { bg: "#A73B44", text: "rgba(255,255,255,0.92)", muted: "rgba(255,255,255,0.5)",  cta: "rgba(255,255,255,0.7)" },
  white:  { bg: "#ffffff", text: "#0f1c2e",                muted: "rgba(15,28,46,0.45)",     cta: "#004290" },
};

const socialRows: { label: string; cards: SocialCard[] }[] = [
  {
    label: "Value to Lenders",
    cards: [
      { bg: "navy", label: "ROI", stat: "$58", headline: "Return for every $1 invested in SBDC.", cta: "SBA verified →" },
      { bg: "white", label: "For Lenders", headline: "We don\u2019t compete with you.", body: "We make your pipeline stronger.", cta: "Partner with us →" },
      { bg: "cobalt", label: "Last Year", headline: "\u201CSBDC referrals close faster. The prep work is already done.\u201D", quote: true, attribution: "Community Bank Lender" },
      { bg: "berry", label: "Last Year", stat: "$547M", headline: "Capital accessed by our clients.", cta: "Be part of it →" },
    ],
  },
  {
    label: "What We Do (For Lenders)",
    cards: [
      { bg: "navy", label: "Before They Reach You", headline: "We prepare them.", body: "\u2022 Clean financial statements\n\u2022 Realistic loan amounts\n\u2022 Complete documentation\n\u2022 Solid business plans", cta: "norcalsbdc.org/partners" },
      { bg: "cobalt", label: "", headline: "Less back-and-forth. Faster closes. Better clients." },
      { bg: "white", label: "For Lenders", headline: "Your underwriters will thank you.", body: "Complete packages. Realistic asks. Prepared borrowers.", cta: "Learn more →" },
      { bg: "berry", label: "Free", stat: "Free", headline: "What we charge clients.", body: "They get expert prep. You get loan-ready referrals. Everyone wins.", cta: "Partner now →" },
    ],
  },
  {
    label: "CDFIs & Mission Lenders",
    cards: [
      { bg: "white", label: "For CDFIs", headline: "Same mission. Different tools.", body: "You lend. We advise. Together we build.", cta: "Let\u2019s partner →" },
      { bg: "navy", label: "Network", stat: "18", headline: "Centers across Northern California.", cta: "Find your local center →" },
      { bg: "cobalt", label: "", headline: "\u201CThey\u2019re an extension of our team. We couldn\u2019t serve this many small businesses without them.\u201D", quote: true, attribution: "CDFI Partner" },
      { bg: "berry", label: "", headline: "We reach the businesses you want to fund." },
    ],
  },
  {
    label: "Economic Development Partners",
    cards: [
      { bg: "navy", label: "Coverage", stat: "36", headline: "Counties across Northern California.", cta: "See our network →" },
      { bg: "white", label: "For Cities & Counties", headline: "Your constituents. Our advisors.", body: "Free small business support for your community.", cta: "Partner with us →" },
      { bg: "cobalt", label: "No Pricing", headline: "At no cost to you.", body: "\u2022 One-on-one advising\n\u2022 Workshops & training\n\u2022 Loan packaging\n\u2022 Disaster recovery support", cta: "norcalsbdc.org" },
      { bg: "berry", label: "Businesses", stat: "12.4K", headline: "Advised last year across the network.", cta: "Join us →" },
    ],
  },
];

const quarters = [
  {
    label: "Q1",
    months: "January – March",
    theme: "New Year, New Business",
    campaigns: [
      {
        name: "New Year Resolution Campaign",
        timing: "January",
        message: "Start the business you've been thinking about. We'll show you how.",
        channels: "Social, email, web",
      },
      {
        name: "Tax Season Prep",
        timing: "February – March",
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
      "National Mentoring Month (Jan)",
      "Black History Month (Feb)",
      "Women's History Month (Mar)",
      "SBA National Small Business Week prep",
    ],
  },
  {
    label: "Q2",
    months: "April – June",
    theme: "Growth Season",
    campaigns: [
      {
        name: "SBA National Small Business Week",
        timing: "Early May",
        message: "Celebrate small business. Join us for free workshops, networking, and advisor meetups.",
        channels: "All channels — flagship event",
      },
      {
        name: "Summer Prep for Seasonal Businesses",
        timing: "May – June",
        message: "Get your business ready for the summer rush. Free planning sessions available.",
        channels: "Email, social, local partnerships",
      },
      {
        name: "Access to Capital Drive",
        timing: "April – June",
        message: "Need funding? Our advisors have helped clients raise $547M last year alone.",
        channels: "Social, workshops, lender events",
      },
    ],
    awareness: [
      "SBA National Small Business Week (May)",
      "Asian American & Pacific Islander Heritage Month (May)",
      "LGBTQ+ Pride Month (Jun)",
    ],
  },
  {
    label: "Q3",
    months: "July – September",
    theme: "Back to Business",
    campaigns: [
      {
        name: "Mid-Year Business Health Check",
        timing: "July",
        message: "Halfway through the year. Let's review your goals and course-correct.",
        channels: "Email, social, advisor outreach",
      },
      {
        name: "Back-to-Business Fall Push",
        timing: "August – September",
        message: "Set your business up for a strong Q4. Free strategic planning sessions.",
        channels: "Social, email, workshops",
      },
      {
        name: "Hispanic Heritage Month Spotlights",
        timing: "Sept 15 – Oct 15",
        message: "Celebrating Hispanic and Latino-owned businesses and the advisors who serve them.",
        channels: "Social series, success stories",
      },
    ],
    awareness: [
      "Hispanic Heritage Month (Sep 15 – Oct 15)",
      "National Preparedness Month (Sep)",
    ],
  },
  {
    label: "Q4",
    months: "October – December",
    theme: "Impact & Year-End",
    campaigns: [
      {
        name: "Annual Impact Report",
        timing: "October – November",
        message: "Our numbers tell the story. $547M raised. 42,000+ jobs. Here's the full picture.",
        channels: "Web, email, social, stakeholders",
      },
      {
        name: "Small Business Saturday",
        timing: "Late November",
        message: "Shop local. Support the businesses that make our communities what they are.",
        channels: "Social, partner posts, local media",
      },
      {
        name: "Year-End Planning Workshops",
        timing: "November – December",
        message: "Close the year strong. Tax prep, financial review, and 2027 goal setting.",
        channels: "Email, workshops",
      },
    ],
    awareness: [
      "National Disability Employment Awareness Month (Oct)",
      "Native American Heritage Month (Nov)",
      "Small Business Saturday (Nov)",
      "Giving Tuesday (Dec)",
    ],
  },
];

const recurringContent = [
  {
    title: "Client Spotlight",
    frequency: "Bi-weekly",
    desc: "Feature a client success story with photo, quote, and impact stats. Use the Success Story template.",
  },
  {
    title: "Advisor Tip",
    frequency: "Weekly",
    desc: "Short, actionable business advice from an SBDC advisor. Keep it under 200 words. Include advisor name and headshot.",
  },
  {
    title: "By the Numbers",
    frequency: "Monthly",
    desc: "One compelling stat with context. '$12M in capital accessed by NorCal businesses in March alone.'",
  },
  {
    title: "Event Promotion",
    frequency: "As needed",
    desc: "Start promoting 2 weeks before. Increase frequency in the final 3 days. Include date, time, registration link, and what attendees will learn.",
  },
  {
    title: "Partner Shoutout",
    frequency: "Monthly",
    desc: "Acknowledge lending partners, host institutions, and community organizations. Strengthens relationships and extends reach.",
  },
];

export default function CalendarPage() {
  return (
    <>
      <InteriorHero bg="#A73B44"
        title="Calendar"
        subtitle="Campaign themes, key dates, and a coordinated messaging framework so all 16 centers move together."
      />

      <div className="bg-white py-12 md:py-16">
        {/* Intro */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-14">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-6">
            Annual Campaign Framework
          </h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-[1.7] max-w-[640px]">
            Every quarter has a theme. Every theme drives coordinated messaging
            across all centers. When we speak together, we&rsquo;re louder. This
            calendar gives every center the what, when, and how — while leaving
            room for local flavor.
          </p>
        </div>

        {/* Quarterly Sections */}
        <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-16">
          <div className="space-y-0">
            {quarters.map((q, qi) => (
              <div
                key={q.label}
                className={`py-12 md:py-16 ${
                  qi < quarters.length - 1
                    ? "border-b border-black/[0.06]"
                    : ""
                }`}
              >
                {/* Quarter header */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 mb-8">
                  <span className="font-mono text-sm text-navy/20 font-700">
                    {q.label}
                  </span>
                  <div>
                    <h3 className="font-sans text-xl md:text-2xl text-navy tracking-[-0.01em]">
                      {q.theme}
                    </h3>
                    <p className="font-sans text-sm text-text-tertiary mt-0.5">
                      {q.months}
                    </p>
                  </div>
                </div>

                {/* Campaigns */}
                <div className="space-y-6 mb-8">
                  {q.campaigns.map((c) => (
                    <div
                      key={c.name}
                      className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-6"
                    >
                      <div>
                        <h4 className="font-label text-sm text-navy">
                          {c.name}
                        </h4>
                        <p className="font-sans text-[11px] text-text-tertiary mt-0.5">
                          {c.timing}
                        </p>
                      </div>
                      <div>
                        <p className="font-sans text-sm md:text-base text-navy/80 leading-relaxed italic mb-1.5">
                          &ldquo;{c.message}&rdquo;
                        </p>
                        <p className="font-sans text-[11px] text-text-tertiary">
                          Channels: {c.channels}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Awareness dates */}
                <div className="flex flex-wrap gap-2">
                  {q.awareness.map((a) => (
                    <span
                      key={a}
                      className="inline-block px-3 py-1.5 border border-navy/[0.08] font-label text-[10px] uppercase tracking-[0.06em] text-navy/40"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Social Wall ── */}
      <div className="py-14 md:py-20" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="max-w-[780px] mb-12">
            <h2
              className="font-sans text-navy tracking-[-0.02em] mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
            >
              Sample Social Content
            </h2>
            <p className="font-sans text-base text-text-secondary leading-relaxed max-w-xl">
              Ready-to-adapt branded posts for partner outreach, impact storytelling, and network awareness.
              Customize for your center and audience.
            </p>
          </div>

          <div className="space-y-8">
            {socialRows.map((row) => (
              <div key={row.label}>
                <p className="font-label text-[10px] uppercase tracking-[0.14em] text-navy/30 mb-3">
                  {row.label}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {row.cards.map((card, i) => {
                    const s = BG_STYLES[card.bg];
                    return (
                      <div
                        key={i}
                        className="relative p-5 md:p-6 flex flex-col justify-between rounded-lg"
                        style={{
                          backgroundColor: s.bg,
                          aspectRatio: "1 / 1",
                          border: card.bg === "white" ? "1px solid rgba(0,0,0,0.06)" : "none",
                        }}
                      >
                        {/* Label */}
                        {card.label && (
                          <p
                            className="font-label text-[9px] uppercase tracking-[0.12em] mb-auto"
                            style={{ color: s.muted }}
                          >
                            {card.label}
                          </p>
                        )}

                        {/* Content */}
                        <div className={card.label ? "mt-auto" : ""}>
                          {card.stat && (
                            <p
                              className="font-sans leading-none mb-1"
                              style={{ color: s.text, fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500 }}
                            >
                              {card.stat}
                            </p>
                          )}
                          <p
                            className="font-sans leading-snug"
                            style={{
                              color: s.text,
                              fontSize: card.quote ? "clamp(13px, 1.4vw, 16px)" : "clamp(14px, 1.6vw, 18px)",
                              fontWeight: card.quote ? 400 : 500,
                              fontStyle: card.quote ? "italic" : "normal",
                            }}
                          >
                            {card.headline}
                          </p>
                          {card.attribution && (
                            <p className="font-sans text-[11px] mt-2" style={{ color: s.muted }}>
                              — {card.attribution}
                            </p>
                          )}
                          {card.body && (
                            <p
                              className="font-sans text-[12px] leading-relaxed mt-2 whitespace-pre-line"
                              style={{ color: s.muted }}
                            >
                              {card.body}
                            </p>
                          )}
                        </div>

                        {/* CTA */}
                        {card.cta && (
                          <p
                            className="font-sans text-[11px] mt-3"
                            style={{ color: s.cta, fontWeight: 500 }}
                          >
                            {card.cta}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recurring Content — dark navy bg */}
      <div className="bg-[#0f1c2e] py-14 md:py-20 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-4"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Recurring Content Series
          </h2>
          <p className="font-sans text-base text-white/50 leading-relaxed mb-10 max-w-xl">
            In addition to campaign-specific content, these recurring series
            keep your channels active and on-brand between pushes.
          </p>

          <div className="space-y-0">
            {recurringContent.map((item, i) => (
              <div
                key={item.title}
                className={`py-6 flex flex-col md:flex-row md:items-start gap-3 md:gap-8 ${
                  i < recurringContent.length - 1
                    ? "border-b border-white/[0.06]"
                    : ""
                }`}
              >
                <div className="md:w-48 shrink-0">
                  <h4 className="font-label text-sm text-white/90">
                    {item.title}
                  </h4>
                  <span className="font-sans text-[11px] text-[#8FC5D9] font-label uppercase tracking-[0.1em]">
                    {item.frequency}
                  </span>
                </div>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextSectionLink title="Stories" href="/stories" />
    </>
  );
}
