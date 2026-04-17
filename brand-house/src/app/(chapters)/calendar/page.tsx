import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import GrainBackdrop from "@/components/GrainBackdrop";

/* ─────────────────────────────  DATA  ───────────────────────────── */

type Quarter = {
  label: string;        // Q1
  months: string;       // January – March
  themeLine1: string;   // "New Year,"
  themeLine2: string;   // "New Business."   ← italic serif, second line gets coral on one word
  themeAccent?: string; // which word in themeLine2 to paint coral (optional)
  intro: string;        // narrative 2–3 sentences
  campaigns: { name: string; timing: string; message: string }[];
  awarenessLine: string; // prose sentence, not chips
  dark: boolean;
};

const quarters: Quarter[] = [
  {
    label: "Q1",
    months: "January – March",
    themeLine1: "New year,",
    themeLine2: "new business.",
    themeAccent: "new",
    intro:
      "Q1 opens every year on intent. Clients are making resolutions, the state is finalizing budgets, and every chamber is planning its calendar. Our job is to meet that energy with one clear invitation: if you've been thinking about starting, scaling, or planning — start here.",
    campaigns: [
      {
        name: "New Year Resolution Campaign",
        timing: "January",
        message: "Start the business you've been thinking about. We'll show you how.",
      },
      {
        name: "Tax Season Prep",
        timing: "February – March",
        message: "Free workshops on small business tax planning and financial readiness.",
      },
      {
        name: "Women's History Month",
        timing: "March",
        message: "Spotlighting women-owned businesses across Northern California.",
      },
    ],
    awarenessLine:
      "National Mentoring Month in January, Black History Month in February, Women's History Month in March, and prep for SBA Small Business Week begins.",
    dark: false,
  },
  {
    label: "Q2",
    months: "April – June",
    themeLine1: "Growth",
    themeLine2: "season.",
    themeAccent: "season",
    intro:
      "Q2 is our loudest quarter. SBA National Small Business Week is the flagship, seasonal businesses are gearing up, and clients are actively shopping for capital. Messaging goes outward — workshops, partner events, lender showcases — and every center is on the same drumbeat.",
    campaigns: [
      {
        name: "SBA National Small Business Week",
        timing: "Early May",
        message: "Celebrate small business. Free workshops, networking, and advisor meetups.",
      },
      {
        name: "Summer Prep for Seasonal Businesses",
        timing: "May – June",
        message: "Get your business ready for the summer rush. Free planning sessions available.",
      },
      {
        name: "Access to Capital Drive",
        timing: "April – June",
        message: "Need funding? Our advisors have helped clients raise $549M in the last year alone.",
      },
    ],
    awarenessLine:
      "SBA National Small Business Week in early May, AAPI Heritage Month through May, and Micro-, Small & Medium-sized Enterprises Day on June 27.",
    dark: true,
  },
  {
    label: "Q3",
    months: "July – September",
    themeLine1: "Back to",
    themeLine2: "business.",
    themeAccent: "business",
    intro:
      "Q3 is the course-correction quarter. Clients are halfway through the year and looking at what's working, what's not, and how to finish strong. We lean into mid-year reviews, fall strategic planning, and the Hispanic Heritage Month spotlight that bridges September and October.",
    campaigns: [
      {
        name: "Mid-Year Business Health Check",
        timing: "July",
        message: "Halfway through the year. Let's review your goals and course-correct.",
      },
      {
        name: "Back-to-Business Fall Push",
        timing: "August – September",
        message: "Set your business up for a strong Q4. Free strategic planning sessions.",
      },
      {
        name: "Hispanic Heritage Month Spotlights",
        timing: "Sep 15 – Oct 15",
        message: "Celebrating Hispanic and Latino-owned businesses and the advisors who serve them.",
      },
    ],
    awarenessLine:
      "Hispanic Heritage Month opens September 15, and National Preparedness Month runs all of September.",
    dark: false,
  },
  {
    label: "Q4",
    months: "October – December",
    themeLine1: "Impact &",
    themeLine2: "year-end.",
    themeAccent: "year-end",
    intro:
      "Q4 is where the year's numbers become the story. The annual impact report lands in October and November, Small Business Saturday rallies the community, and year-end planning workshops help clients set up for the year ahead. Less new — more evidence.",
    campaigns: [
      {
        name: "Annual Impact Report",
        timing: "October – November",
        message:
          "Our numbers tell the story. $549M in capital accessed. 3,723 jobs created. Here's the full picture.",
      },
      {
        name: "Small Business Saturday",
        timing: "Late November",
        message: "Shop local. Support the businesses that make our communities what they are.",
      },
      {
        name: "Year-End Planning Workshops",
        timing: "November – December",
        message: "Close the year strong. Tax prep, financial review, and next-year goal setting.",
      },
    ],
    awarenessLine:
      "Disability Employment Awareness Month in October, Native American Heritage Month in November, Small Business Saturday the Saturday after Thanksgiving, and Giving Tuesday after that.",
    dark: true,
  },
];

const alwaysOn = [
  {
    title: "Client Spotlight",
    cadence: "Bi-weekly",
    desc: "A client success story with photo, quote, and one impact stat. Uses the Success Story template.",
  },
  {
    title: "Advisor Tip",
    cadence: "Weekly",
    desc: "A short, actionable piece of advice from an advisor. Under 200 words. Name and headshot included.",
  },
  {
    title: "By the Numbers",
    cadence: "Monthly",
    desc: "One compelling stat with context — $12M in capital accessed by NorCal businesses in March alone.",
  },
  {
    title: "Event Promotion",
    cadence: "Rolling",
    desc: "Starts two weeks before every event. Frequency steps up in the final three days. Includes date, time, registration, and what attendees will leave with.",
  },
  {
    title: "Partner Shoutout",
    cadence: "Monthly",
    desc: "A thank-you to lending partners, host institutions, and community organizations. Strengthens relationships and extends our reach.",
  },
];

/* ─────────────────────────────  COMPONENTS  ───────────────────────────── */

function ThemeTitle({
  line1,
  line2,
  accent,
  dark,
}: {
  line1: string;
  line2: string;
  accent?: string;
  dark: boolean;
}) {
  const base = dark ? "#f5f4f0" : "#0f1c2e";
  const accentColor = dark ? "#85A3C8" : "#A73B44";
  // replace the accent word (case-insensitive) with a tinted span
  const parts = accent
    ? line2.split(new RegExp(`(${accent})`, "i"))
    : [line2];
  return (
    <h2
      className="italic"
      style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(40px, 5vw, 68px)",
        letterSpacing: "-0.04em",
        lineHeight: 0.96,
        fontWeight: 400,
        color: base,
      }}
    >
      {line1}
      <br />
      {parts.map((p, i) =>
        p.toLowerCase() === (accent ?? "").toLowerCase() ? (
          <span key={i} style={{ color: accentColor }}>
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </h2>
  );
}

function QuarterSection({ q, reverse }: { q: Quarter; reverse: boolean }) {
  const bg = q.dark ? "#0f1c2e" : "#f5f4f0";
  const primary = q.dark ? "text-white" : "text-navy";
  const soft = q.dark ? "text-white/70" : "text-navy/70";
  const mono = q.dark ? "text-[#85A3C8]" : "text-[#A73B44]";
  const ruleClr = q.dark ? "rgba(86,132,186,0.35)" : "rgba(15,28,46,0.18)";

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: bg }}
      aria-label={`${q.label} — ${q.themeLine1} ${q.themeLine2}`}
    >
      {q.dark && (
        <SbdcWatermark
          className="absolute -left-[6%] bottom-[8%] w-[32vw] max-w-[380px] text-white pointer-events-none select-none"
          opacity={0.025}
        />
      )}

      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24 relative z-10">
        {/* Quarter eyebrow */}
        <p
          className={`font-label uppercase mb-6 ${mono}`}
          style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}
        >
          {q.label} · {q.months}
        </p>

        {/* 5/7 asymmetric essay — reverse alternates direction for rhythm */}
        <div
          className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="md:col-span-6">
            <ThemeTitle
              line1={q.themeLine1}
              line2={q.themeLine2}
              accent={q.themeAccent}
              dark={q.dark}
            />
          </div>

          <div className="md:col-span-6">
            <p
              className={`font-sans leading-[1.6] ${primary}`}
              style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400, letterSpacing: "-0.005em" }}
            >
              {q.intro}
            </p>
          </div>
        </div>

        {/* Single container-width rule before the campaign list */}
        <div
          className="mt-12 md:mt-16 mb-10"
          style={{ height: "2px", backgroundColor: ruleClr }}
        />

        {/* Stacked campaign rows — no boxes, no chip chrome */}
        <div className="space-y-8 md:space-y-10">
          {q.campaigns.map((c) => (
            <div key={c.name} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8">
              <div className="md:col-span-4">
                <p
                  className={`font-sans ${primary}`}
                  style={{ fontSize: "clamp(17px, 1.5vw, 19px)", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.25 }}
                >
                  {c.name}
                </p>
                <p
                  className={`font-label uppercase mt-2 ${soft}`}
                  style={{ fontSize: "11px", letterSpacing: "0.22em" }}
                >
                  {c.timing}
                </p>
              </div>

              <div className="md:col-span-8">
                <p
                  className={`italic ${primary}`}
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(18px, 1.8vw, 22px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.28,
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{c.message}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Awareness — prose, not chips */}
        <p
          className={`mt-12 md:mt-16 font-sans leading-[1.65] max-w-[780px] ${soft}`}
          style={{ fontSize: "clamp(14px, 1.1vw, 16px)", fontWeight: 400 }}
        >
          <span
            className={`font-label uppercase mr-3 ${mono}`}
            style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}
          >
            Also this quarter
          </span>
          {q.awarenessLine}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */

export default function CalendarPage() {
  return (
    <>
      <GrainBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
      <InteriorHero
        chapterNumber="12"
        category="tools"
        title="Calendar"
        subtitle="Campaign themes and key dates — a coordinated messaging framework so all sixteen centers move together."
        showRule={false}
      />

      {/* ── EDITORIAL HERO MOMENT — navy ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0f1c2e" }}>
        <div className="w-full h-[2px] bg-[#85A3C8]" />
        <SbdcWatermark
          className="absolute -right-[6%] top-[8%] w-[32vw] max-w-[380px] text-white pointer-events-none select-none"
          opacity={0.03}
        />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <p
            className="font-label uppercase mb-6 text-[#85A3C8]"
            style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}
          >
            The Year, in Four Beats
          </p>

          <h2
            className="italic text-white"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 6vw, 82px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              fontWeight: 400,
            }}
          >
            Four quarters.
            <br />
            One <span style={{ color: "#85A3C8" }}>voice</span>.
          </h2>

          <p
            className="mt-10 font-sans text-white/80 leading-[1.6] max-w-[640px]"
            style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400, letterSpacing: "-0.005em" }}
          >
            Every quarter has a theme. Every theme drives coordinated messaging across
            all sixteen centers. When we speak together, we&rsquo;re louder — while leaving
            room for local flavor.
          </p>
        </div>
      </section>

      {/* ── FOUR QUARTERS — alternating bg, alternating direction ── */}
      {quarters.map((q, i) => (
        <QuarterSection key={q.label} q={q} reverse={i % 2 === 1} />
      ))}

      {/* ── ALWAYS-ON RHYTHM — cream, stacked rows ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24 relative z-10">
          <p
            className="font-label uppercase mb-6 text-[#A73B44]"
            style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}
          >
            Between the Beats
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <h2
                className="italic text-navy"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(40px, 5vw, 68px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.96,
                  fontWeight: 400,
                }}
              >
                Always-on
                <br />
                rhythm.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p
                className="font-sans text-navy leading-[1.6]"
                style={{ fontSize: "clamp(15px, 1.2vw, 17px)", fontWeight: 400, letterSpacing: "-0.005em" }}
              >
                Between the quarterly campaigns, five series keep our channels alive and
                on-brand. These are the heartbeats — small, reliable, unmistakably us.
              </p>
            </div>
          </div>

          <div
            className="mt-12 md:mt-16 mb-2"
            style={{ height: "2px", backgroundColor: "rgba(15,28,46,0.18)" }}
          />

          <div className="divide-y divide-navy/[0.12]">
            {alwaysOn.map((s) => (
              <div
                key={s.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 md:py-8"
              >
                <div className="md:col-span-4">
                  <p
                    className="font-sans text-navy"
                    style={{ fontSize: "clamp(17px, 1.5vw, 19px)", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.25 }}
                  >
                    {s.title}
                  </p>
                  <p
                    className="font-label uppercase mt-2 text-[#A73B44]"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}
                  >
                    {s.cadence}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p
                    className="font-sans text-navy/75 leading-[1.6]"
                    style={{ fontSize: "clamp(15px, 1.2vw, 16px)", fontWeight: 400 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextSectionLink title="Stories" href="/stories" />
      </div>
    </>
  );
}
