import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import CreamPaperBackdrop from "@/components/CreamPaperBackdrop";

/* ─────────────────────────────  TOKENS  ─────────────────────────────
   Quarter palette mapped to existing brand tokens from globals.css:
     Q1 (winter / intent)      → royal
     Q2 (growth / loudest)     → pool-deep (teal-leaning green from navy+pool)
     Q3 (course-correction)    → coral
     Q4 (impact / year-end)    → navy
   All four read as the same family — saturated, editorial, non-party.    */

const Q = {
  q1: "#1D5AA7", // --royal
  q2: "#00685E", // evergreen — complements the rest, matches the mockup's Q2
  q3: "#A73B44", // --coral
  q4: "#0f1c2e", // --navy
  navy: "#0f1c2e",
  slate: "#2D3340",
  cream: "#f5f4f0",
  rule: "rgba(15,28,46,0.15)",
  ruleSoft: "rgba(15,28,46,0.10)",
};

/* ─────────────────────────────  DATA  ───────────────────────────── */

type QuarterKey = "q1" | "q2" | "q3" | "q4";

type Campaign = {
  name: string;
  timing: string;
  message: string;
  // grid-column span on the 12-month spine (1-indexed month start / end+1)
  span: [number, number];
};

type Quarter = {
  key: QuarterKey;
  label: string;
  movement: string;       // "Movement I"
  months: string;         // "January – March"
  themeLine1: string;
  themeLine2: string;     // italic line
  intro: string;
  campaigns: Campaign[];
};

const quarters: Quarter[] = [
  {
    key: "q1",
    label: "Q1",
    movement: "Movement I",
    months: "January – March",
    themeLine1: "New year,",
    themeLine2: "new business.",
    intro:
      "Q1 opens every year on intent. Clients are making resolutions, the state is finalizing budgets, and every chamber is planning its calendar. Our job: meet that energy with one clear invitation.",
    campaigns: [
      {
        name: "New Year Resolution Campaign",
        timing: "January",
        message: "Start the business you've been thinking about. We'll show you how.",
        span: [1, 2],
      },
      {
        name: "Tax Season Prep",
        timing: "February – March",
        message: "Free workshops on small business tax planning and financial readiness.",
        span: [2, 4],
      },
      {
        name: "Women's History Month",
        timing: "March",
        message: "Spotlighting women-owned businesses across Northern California.",
        span: [3, 4],
      },
    ],
  },
  {
    key: "q2",
    label: "Q2",
    movement: "Movement II",
    months: "April – June",
    themeLine1: "Growth",
    themeLine2: "season.",
    intro:
      "Our loudest quarter. SBA National Small Business Week is the flagship, seasonal businesses are gearing up, capital is moving. Every center on the same drumbeat.",
    campaigns: [
      {
        name: "SBA National Small Business Week",
        timing: "Early May",
        message: "Celebrate small business. Free workshops, networking, and advisor meetups.",
        span: [5, 6],
      },
      {
        name: "Summer Prep for Seasonal Businesses",
        timing: "May – June",
        message: "Get your business ready for the summer rush. Free planning sessions available.",
        span: [5, 7],
      },
      {
        name: "Access to Capital Drive",
        timing: "April – June",
        message: "Need funding? Our advisors have helped clients raise $549M in the last year alone.",
        span: [4, 7],
      },
    ],
  },
  {
    key: "q3",
    label: "Q3",
    movement: "Movement III",
    months: "July – September",
    themeLine1: "Back to",
    themeLine2: "business.",
    intro:
      "The course-correction quarter. Clients are halfway through the year and asking what's working. We lean into mid-year reviews, fall strategic planning, and Hispanic Heritage spotlights.",
    campaigns: [
      {
        name: "Mid-Year Business Health Check",
        timing: "July",
        message: "Halfway through the year. Let's review your goals and course-correct.",
        span: [7, 8],
      },
      {
        name: "Back-to-Business Fall Push",
        timing: "August – September",
        message: "Set your business up for a strong Q4. Free strategic planning sessions.",
        span: [8, 10],
      },
      {
        name: "Hispanic Heritage Month Spotlights",
        timing: "Sep 15 – Oct 15",
        message: "Celebrating Hispanic and Latino-owned businesses and the advisors who serve them.",
        span: [9, 11],
      },
    ],
  },
  {
    key: "q4",
    label: "Q4",
    movement: "Movement IV",
    months: "October – December",
    themeLine1: "Impact &",
    themeLine2: "year-end.",
    intro:
      "Where the year's numbers become the story. Annual impact report lands in October. Small Business Saturday rallies the community. Less new — more evidence.",
    campaigns: [
      {
        name: "Annual Impact Report",
        timing: "October – November",
        message:
          "Our numbers tell the story. $549M in capital accessed. 3,723 jobs created. Here's the full picture.",
        span: [10, 12],
      },
      {
        name: "Small Business Saturday",
        timing: "Late November",
        message: "Shop local. Support the businesses that make our communities what they are.",
        span: [11, 12],
      },
      {
        name: "Year-End Planning Workshops",
        timing: "November – December",
        message: "Close the year strong. Tax prep, financial review, and next-year goal setting.",
        span: [11, 13],
      },
    ],
  },
];

/* Cultural + business observances shown as thin ticks below the spine.
   Each tick is anchored to its start month (1-indexed, 1 = January).
   NOTE: LGBTQ+ Pride Month (June) was removed per federal recognition
   guidance. Replaced with Micro-, Small & Medium-sized Enterprises Day
   (UN-designated, June 27) — a mission-aligned June observance. */
const observances: { month: number; label: string }[] = [
  { month: 1, label: "National Mentoring Month" },
  { month: 2, label: "Black History Month" },
  { month: 5, label: "AAPI Heritage Month" },
  { month: 6, label: "MSME Day · Jun 27" },
  { month: 9, label: "National Preparedness Month" },
  { month: 10, label: "Native American Heritage" },
  { month: 11, label: "Giving Tuesday" },
];

const alwaysOn = [
  {
    cadence: "Bi-weekly",
    title: "Client Spotlight",
    desc: "A client success story with photo, quote, and one impact stat. Uses the Success Story template.",
  },
  {
    cadence: "Weekly",
    title: "Advisor Tip",
    desc: "A short, actionable piece of advice from an advisor. Under 200 words. Name and headshot included.",
  },
  {
    cadence: "Monthly",
    title: "By the Numbers",
    desc: "One compelling stat with context — $12M in capital accessed by NorCal businesses in March alone.",
  },
  {
    cadence: "Rolling",
    title: "Event Promotion",
    desc: "Starts two weeks before every event. Frequency steps up in the final three days. Date, time, registration.",
  },
  {
    cadence: "Monthly",
    title: "Partner Shoutout",
    desc: "A thank-you to lending partners, host institutions, and community organizations. Extends our reach.",
  },
];

/* ─────────────────────────────  COMPONENTS  ───────────────────────────── */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function YearSpine() {
  // 12 month columns + leading label column
  const gridCols = "120px repeat(12, 1fr)";

  const eyebrow = {
    fontFamily: "var(--sans-label)",
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: Q.slate,
    opacity: 0.6,
  };

  // Flatten campaigns with quarter color so we can render one row each.
  const tracks = quarters.flatMap((q) =>
    q.campaigns.map((c) => ({ ...c, color: Q[q.key] }))
  );

  return (
    <section
      aria-label="Year at a glance"
      style={{ backgroundColor: Q.cream, padding: "64px 0 88px" }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 48px)",
        }}
      >
        <div style={{ overflowX: "auto", paddingBottom: 8 }}>
          <div style={{ minWidth: 1080 }}>
            {/* Month row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                alignItems: "end",
                borderBottom: `1px solid ${Q.navy}`,
                paddingBottom: 10,
                marginBottom: 14,
              }}
            >
              <div style={eyebrow}>The Year</div>
              {MONTHS.map((m) => (
                <div
                  key={m}
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: 14,
                    color: Q.navy,
                    textAlign: "center",
                  }}
                >
                  {m}
                </div>
              ))}
            </div>

            {/* Quarter color bands */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                gap: 2,
                marginBottom: 28,
              }}
            >
              <div style={eyebrow}>Quarters</div>
              {(["q1", "q2", "q3", "q4"] as QuarterKey[]).map((k) => (
                <div
                  key={k}
                  style={{
                    height: 4,
                    gridColumn: "span 3",
                    backgroundColor: Q[k],
                  }}
                />
              ))}
            </div>

            {/* Campaign tracks */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                rowGap: 10,
                alignItems: "center",
              }}
            >
              <div style={eyebrow}>Campaigns</div>
              {tracks.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  style={{
                    // shift by +1 because the first grid column is the label
                    gridColumn: `${t.span[0] + 1} / ${t.span[1] + 1}`,
                    height: 28,
                    borderRadius: 2,
                    backgroundColor: t.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    fontFamily: "var(--sans)",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {t.name}
                </div>
              ))}
            </div>

            {/* Observance tick row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: gridCols,
                marginTop: 20,
                paddingTop: 16,
                borderTop: `1px solid ${Q.ruleSoft}`,
                rowGap: 8,
                alignItems: "start",
              }}
            >
              <div style={eyebrow}>Also Observed</div>
              {observances.map((o) => (
                <div
                  key={o.label}
                  style={{
                    gridColumn: `${o.month + 1} / ${o.month + 2}`,
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: 12,
                    color: Q.slate,
                    lineHeight: 1.3,
                    padding: "0 8px",
                    borderLeft: `1px solid rgba(15,28,46,0.25)`,
                  }}
                >
                  {o.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Movement({ q }: { q: Quarter }) {
  const accent = Q[q.key];
  return (
    <section
      style={{
        backgroundColor: Q.cream,
        borderTop: `1px solid ${Q.rule}`,
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "64px clamp(24px, 5vw, 48px) 80px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 80,
        }}
        className="movement-grid"
      >
        {/* Left: meta */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 24,
              fontFamily: "var(--sans-label)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span style={{ width: 28, height: 2, backgroundColor: accent }} />
            <span style={{ color: accent }}>
              {q.label} · {q.movement}
            </span>
            <span style={{ color: Q.slate, opacity: 0.6 }}>{q.months}</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(44px, 5.5vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.028em",
              color: Q.navy,
              marginBottom: 28,
            }}
          >
            {q.themeLine1}
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: accent }}>
              {q.themeLine2}
            </em>
          </h2>

          <p
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.55,
              color: Q.slate,
              maxWidth: 440,
            }}
          >
            {q.intro}
          </p>
        </div>

        {/* Right: campaigns */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {q.campaigns.map((c, i) => (
            <article
              key={c.name}
              style={{
                display: "grid",
                gridTemplateColumns: "90px 1fr",
                gap: 24,
                paddingBottom: i === q.campaigns.length - 1 ? 0 : 24,
                borderBottom:
                  i === q.campaigns.length - 1
                    ? "none"
                    : `1px solid ${Q.ruleSoft}`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 32,
                  color: accent,
                  opacity: 0.75,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div
                  style={{
                    fontFamily: "var(--sans-label)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: Q.slate,
                    opacity: 0.6,
                  }}
                >
                  {c.timing}
                </div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "-0.005em",
                    color: Q.navy,
                    lineHeight: 1.3,
                  }}
                >
                  {c.name}
                </div>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: 17,
                    lineHeight: 1.45,
                    color: Q.slate,
                    marginTop: 6,
                    letterSpacing: "-0.005em",
                  }}
                >
                  &ldquo;{c.message}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlwaysOn() {
  return (
    <section style={{ backgroundColor: Q.cream }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "80px clamp(24px, 5vw, 48px) 120px",
          borderTop: `2px solid ${Q.navy}`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: 80,
            marginBottom: 56,
            alignItems: "end",
            paddingTop: 64,
          }}
          className="movement-grid"
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(44px, 5.5vw, 76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.028em",
              color: Q.navy,
            }}
          >
            Always-on <em style={{ fontStyle: "italic", fontWeight: 400 }}>rhythm.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.55,
              color: Q.slate,
              maxWidth: 440,
            }}
          >
            Between the quarterly campaigns, five series keep our channels alive and on-brand. The
            heartbeats — small, reliable, unmistakably us.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 1,
            backgroundColor: "rgba(15,28,46,0.12)",
            border: "1px solid rgba(15,28,46,0.12)",
          }}
          className="heartbeat-grid"
        >
          {alwaysOn.map((h) => (
            <article
              key={h.title}
              style={{
                backgroundColor: Q.cream,
                padding: "32px 24px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ width: 40, height: 2, backgroundColor: Q.navy }} />
              <div
                style={{
                  fontFamily: "var(--sans-label)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: Q.slate,
                  opacity: 0.6,
                }}
              >
                {h.cadence}
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: 24,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                  color: Q.navy,
                }}
              >
                {h.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: Q.slate,
                }}
              >
                {h.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PAGE  ───────────────────────────── */

export default function CalendarPage() {
  return (
    <>
      <CreamPaperBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
        <InteriorHero
          chapterNumber="12"
          category="tools"
          title="Calendar"
          subtitle="Campaign themes and key dates — a coordinated messaging framework so all sixteen centers move together. When we speak together, we're louder."
          showRule={false}
        />

        {/* Optional: meta strip like the mockup's masthead right column */}
        <section
          style={{
            backgroundColor: Q.cream,
          }}
        >
          <div
            style={{
              maxWidth: 1320,
              margin: "0 auto",
              padding: "28px clamp(24px, 5vw, 48px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              flexWrap: "wrap",
              gap: 16,
              color: Q.slate,
              fontFamily: "var(--sans-label)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span>Chapter 12 · Tools &amp; Resources</span>
            <span>
              <strong
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 22,
                  letterSpacing: "-0.01em",
                  textTransform: "none",
                  color: Q.navy,
                  marginRight: 12,
                }}
              >
                2026
              </strong>
              36 counties · One drumbeat
            </span>
          </div>
        </section>

        <YearSpine />

        {quarters.map((q) => (
          <Movement key={q.key} q={q} />
        ))}

        <AlwaysOn />

        <NextSectionLink title="Stories" href="/stories" />

        {/* Responsive fallback for narrow viewports — single column */}
        <style>{`
          @media (max-width: 980px) {
            .movement-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .heartbeat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          }
          @media (max-width: 540px) {
            .heartbeat-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  );
}
