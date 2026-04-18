import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import CreamPaperBackdrop from "@/components/CreamPaperBackdrop";

/* ─────────────────────────────  TOKENS  ─────────────────────────────
   Pillar colors mapped to brand tokens, matching the mockup:
     People    → cobalt  #004290
     Funded    → evergreen #00685E
     Connected → coral/berry #A73B44                                    */
const COLOR = {
  navy: "#0f1c2e",
  slate: "#2D3340",
  cream: "#f5f4f0",
  fog: "#85A3C8",
  people: "#004290",
  funded: "#00685E",
  connected: "#A73B44",
  rule: "rgba(15,28,46,0.15)",
  ruleSoft: "rgba(15,28,46,0.10)",
};

const rules = [
  {
    title: "One clear call to action.",
    desc: "Every email should have one primary goal. Don't split attention across five different asks.",
  },
  {
    title: "Mobile-first design.",
    desc: "Over 60% of emails are opened on mobile. Use single-column layouts, large tap targets, and concise copy.",
  },
  {
    title: "Required disclaimers.",
    desc: "Every client and partner-facing mass email must include the SBA and ADA disclaimer. No exceptions.",
  },
];

const sbaDisclaimer = `Funded in part through a cooperative agreement with the US Small Business Administration (SBA). Funded in part through a grant with the Governor's Office of Business and Economic Development. All opinions, conclusions, or recommendations expressed are those of the author(s) and do not necessarily reflect the view of the SBA, California Office of the Small Business Advocate or Cal Poly Humboldt sponsored programs.

Reasonable accommodations for persons with disabilities will be made if requested at least 72 hours in advance. Contact: [contact name] at [contact phone number] or email: [contact email].`;

type PillarKey = "people" | "funded" | "connected";

type DripEmail = {
  key: PillarKey;
  drip: string;
  pillar: string;
  day: string;
  dayName: string;
  read: string;
  subject: string;
  title: string;
  preview: string;
  points: string[];
  cta: string;
  signoff: string;
};

const drip: DripEmail[] = [
  {
    key: "people",
    drip: "Drip 01",
    pillar: "People",
    day: "Day 1",
    dayName: "People",
    read: "~90 seconds",
    subject: "Welcome to NorCal SBDC",
    title: "You just gained a team — here's who's in your corner.",
    preview: "A real advisor. Real expertise. No fees, today or ever.",
    points: [
      "Every consultation is no-fee",
      "Schedule follow-ups as often as needed",
      "Advisor connects you to specialists",
    ],
    cta: "Schedule Your Next Session",
    signoff: "Welcome to the team",
  },
  {
    key: "funded",
    drip: "Drip 02",
    pillar: "Funded",
    day: "Day 7",
    dayName: "Funded",
    read: "~90 seconds",
    subject: "Your Business, Funded",
    title: "Capital access is part of the deal — here's how it works.",
    preview: "$549M accessed across 36 counties. Your advisor helps you get ready.",
    points: [
      "Review financials and identify gaps",
      "Build loan packages lenders want",
      "Intro to right lender from 50+ partners",
      "Navigate SBA, grants, alternatives",
    ],
    cta: "Talk to Your Advisor About Capital",
    signoff: "Invested in your growth",
  },
  {
    key: "connected",
    drip: "Drip 03",
    pillar: "Connected",
    day: "Day 14",
    dayName: "Connected",
    read: "~90 seconds",
    subject: "Your Business, Connected",
    title: "You didn't just get an advisor — you got a network.",
    preview: "14 centers. 63 advisors. Hundreds of partners. You're part of it now.",
    points: [
      "200+ workshops every year, mostly no-fee",
      "Chamber, city & economic development partners",
      "Intros to lenders, industry collaborators",
      "Fellow entrepreneurs who've been where you are",
    ],
    cta: "Browse Upcoming Events",
    signoff: "Better together",
  },
];

const pillarColor: Record<PillarKey, string> = {
  people: COLOR.people,
  funded: COLOR.funded,
  connected: COLOR.connected,
};

/* ───── SHARED SECTION HEADER — mirrors the mockup's two-column header ───── */
function SectionHeader({
  eyebrow,
  meta,
  title,
  titleEm,
  desc,
  color = COLOR.navy,
}: {
  eyebrow: string;
  meta: string;
  title: string;
  titleEm: string;
  desc: string;
  color?: string;
}) {
  return (
    <header
      className="grid gap-10 md:gap-20 items-end mb-12 md:mb-14"
      style={{ gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)" }}
    >
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span aria-hidden style={{ width: 28, height: 2, background: color, display: "inline-block" }} />
          <span
            className="uppercase"
            style={{
              fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color,
            }}
          >
            {eyebrow}
          </span>
          <span
            className="uppercase"
            style={{
              fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "rgba(45,51,64,0.55)",
            }}
          >
            {meta}
          </span>
        </div>
        <h2
          style={{
            fontFamily: "proxima-sera, var(--serif)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.028em",
            color: COLOR.navy,
          }}
        >
          {title}{" "}
          <em style={{ fontStyle: "italic", color }}>{titleEm}</em>
        </h2>
      </div>
      <p
        className="max-w-[440px]"
        style={{
          fontFamily: "proxima-sera, var(--serif)",
          fontWeight: 300,
          fontSize: 17,
          lineHeight: 1.55,
          color: COLOR.slate,
        }}
      >
        {desc}
      </p>
    </header>
  );
}

export default function EmailPage() {
  return (
    <>
      <CreamPaperBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
        <InteriorHero
          chapterNumber="07"
          category="strategy"
          title="Email"
          subtitle="Email is our most direct digital connection with clients. Treat it as a privilege. Keep it focused, make it mobile, and stay compliant."
          showRule={false}
        />

        {/* ═══ THREE RULES + DISCLAIMER ═══ */}
        <section className="relative" style={{ backgroundColor: COLOR.cream }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16 pt-14 md:pt-16 pb-20 md:pb-24">
            <div style={{ borderTop: `1px solid ${COLOR.rule}`, paddingTop: 56 }}>
              <SectionHeader
                eyebrow="Principles"
                meta="Every Send"
                title="Three rules,"
                titleEm="every send."
                desc="Every email representing NorCal SBDC follows these three rules. No exceptions."
              />

              {/* Three-column rules row — vertical dividers */}
              <div className="grid grid-cols-1 md:grid-cols-3">
                {rules.map((r, i) => (
                  <div
                    key={r.title}
                    className="flex flex-col gap-3.5"
                    style={{
                      padding: "8px 32px 8px 0",
                      paddingLeft: i === 0 ? 0 : 32,
                      borderRight:
                        i < rules.length - 1 ? `1px solid ${COLOR.ruleSoft}` : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "proxima-sera, var(--serif)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: 44,
                        lineHeight: 1,
                        color: COLOR.navy,
                        opacity: 0.3,
                        letterSpacing: "-0.02em",
                        marginBottom: 4,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3
                      style={{
                        fontFamily: "proxima-sera, var(--serif)",
                        fontWeight: 300,
                        fontSize: 26,
                        lineHeight: 1.12,
                        letterSpacing: "-0.018em",
                        color: COLOR.navy,
                      }}
                    >
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: COLOR.slate,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* SBA & ADA disclaimer — navy utility card w/ vertical label + copy button */}
              <div
                className="grid gap-8 md:gap-12 mt-16 md:mt-20"
                style={{
                  gridTemplateColumns: "auto minmax(0,1fr) auto",
                  backgroundColor: COLOR.navy,
                  color: COLOR.cream,
                  padding: "40px 44px 44px",
                  alignItems: "start",
                }}
              >
                {/* Vertical label rail */}
                <div
                  className="hidden md:flex"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    alignSelf: "stretch",
                    alignItems: "center",
                    paddingRight: 8,
                    borderRight: "1px solid rgba(255,255,255,0.15)",
                    fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: COLOR.fog,
                  }}
                >
                  SBA &amp; ADA Disclaimer
                </div>

                {/* Horizontal label on mobile */}
                <div
                  className="md:hidden"
                  style={{
                    fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: COLOR.fog,
                    paddingBottom: 12,
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    gridColumn: "1 / -1",
                  }}
                >
                  SBA &amp; ADA Disclaimer
                </div>

                <div
                  style={{
                    fontFamily: "proxima-sera, var(--serif)",
                    fontWeight: 300,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: COLOR.cream,
                    opacity: 0.92,
                  }}
                >
                  <p>
                    Funded in part through a cooperative agreement with the US Small
                    Business Administration (SBA). Funded in part through a grant with
                    the Governor's Office of Business and Economic Development. All
                    opinions, conclusions, or recommendations expressed are those of the
                    author(s) and do not necessarily reflect the view of the SBA,
                    California Office of the Small Business Advocate or Cal Poly
                    Humboldt sponsored programs.
                  </p>
                  <p style={{ marginTop: 14 }}>
                    Reasonable accommodations for persons with disabilities will be made
                    if requested at least 72 hours in advance. Contact: [contact name]
                    at [contact phone number] or email: [contact email].
                  </p>
                </div>

                <div className="self-start">
                  <CopyButton text={sbaDisclaimer} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WELCOME DRIP — timeline + three pillar cards ═══ */}
        <section className="relative" style={{ backgroundColor: COLOR.cream }}>
          <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16 pt-14 md:pt-16 pb-24 md:pb-28">
            <div style={{ borderTop: `1px solid ${COLOR.rule}`, paddingTop: 56 }}>
              <SectionHeader
                eyebrow="New Client Onboarding"
                meta="3-Email Sequence"
                title="Welcome"
                titleEm="drip."
                desc="Automated after first consultation. Each email introduces one pillar — People, then Funded, then Connected — so new clients understand the full scope."
              />

              {/* TIMELINE SPINE */}
              <div className="relative" style={{ padding: "0 40px" }}>
                <div
                  className="relative grid"
                  style={{
                    gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                    gap: 32,
                  }}
                >
                  {/* Dashed spine — desktop only */}
                  <div
                    aria-hidden
                    className="hidden md:block"
                    style={{
                      position: "absolute",
                      top: 11,
                      left: "10%",
                      right: "10%",
                      height: 1,
                      backgroundImage:
                        "repeating-linear-gradient(to right, rgba(15,28,46,0.25) 0 3px, transparent 3px 8px)",
                      zIndex: 0,
                    }}
                  />

                  {drip.map((d) => {
                    const c = pillarColor[d.key];
                    return (
                      <div
                        key={d.key}
                        className="relative flex flex-col items-center text-center"
                        style={{ zIndex: 1 }}
                      >
                        {/* Dot */}
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: 22,
                            height: 22,
                            background: COLOR.cream,
                            border: `2px solid ${c}`,
                            borderRadius: "50%",
                            marginBottom: 14,
                          }}
                        >
                          <span
                            aria-hidden
                            style={{
                              width: 8,
                              height: 8,
                              background: c,
                              borderRadius: "50%",
                              display: "block",
                            }}
                          />
                        </div>
                        <div
                          className="uppercase"
                          style={{
                            fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.22em",
                            color: c,
                            marginBottom: 6,
                          }}
                        >
                          {d.day}
                        </div>
                        <div
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontWeight: 300,
                            fontSize: 22,
                            lineHeight: 1.1,
                            letterSpacing: "-0.015em",
                            color: COLOR.navy,
                          }}
                        >
                          {d.dayName}{" "}
                          <em style={{ fontStyle: "italic" }}>pillar</em>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CARDS */}
              <div
                className="grid mt-14 md:mt-14"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                }}
              >
                {drip.map((d) => {
                  const c = pillarColor[d.key];
                  return (
                    <article
                      key={d.key}
                      className="relative flex flex-col"
                      style={{
                        background: COLOR.cream,
                        border: `1px solid ${COLOR.rule}`,
                        overflow: "hidden",
                      }}
                    >
                      {/* Pillar stripe */}
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          background: c,
                        }}
                      />

                      {/* Card header */}
                      <header
                        className="flex items-baseline justify-between"
                        style={{
                          padding: "24px 24px 20px",
                          borderBottom: `1px solid ${COLOR.ruleSoft}`,
                        }}
                      >
                        <span
                          className="uppercase"
                          style={{
                            fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                            fontSize: 9,
                            fontWeight: 600,
                            letterSpacing: "0.22em",
                            color: c,
                          }}
                        >
                          {d.drip} · {d.pillar}
                        </span>
                        <span
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontSize: 13,
                            color: COLOR.slate,
                            opacity: 0.7,
                          }}
                        >
                          {d.read}
                        </span>
                      </header>

                      {/* Card body */}
                      <div
                        className="flex-grow flex flex-col"
                        style={{ padding: "24px 24px 28px", gap: 14 }}
                      >
                        <div
                          className="uppercase"
                          style={{
                            fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.18em",
                            color: COLOR.slate,
                            opacity: 0.65,
                          }}
                        >
                          <span style={{ opacity: 0.7 }}>Subject: </span>
                          {d.subject}
                        </div>
                        <h3
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontWeight: 300,
                            fontSize: 26,
                            lineHeight: 1.1,
                            letterSpacing: "-0.015em",
                            color: COLOR.navy,
                          }}
                        >
                          {d.title}
                        </h3>
                        <p
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontWeight: 300,
                            fontStyle: "italic",
                            fontSize: 15,
                            lineHeight: 1.45,
                            color: COLOR.slate,
                            paddingBottom: 4,
                          }}
                        >
                          {d.preview}
                        </p>
                        <ul style={{ marginTop: 4, listStyle: "none", padding: 0 }}>
                          {d.points.map((p) => (
                            <li
                              key={p}
                              style={{
                                position: "relative",
                                paddingLeft: 16,
                                marginBottom: 4,
                                fontSize: 12,
                                lineHeight: 1.6,
                                color: COLOR.slate,
                              }}
                            >
                              <span
                                aria-hidden
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  color: c,
                                  fontWeight: 500,
                                }}
                              >
                                —
                              </span>
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div
                          className="flex items-center uppercase"
                          style={{
                            marginTop: 8,
                            paddingTop: 12,
                            borderTop: `1px dashed ${COLOR.ruleSoft}`,
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            color: c,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "proxima-sera, var(--serif)",
                              fontStyle: "italic",
                              fontWeight: 300,
                              textTransform: "none",
                              letterSpacing: 0,
                              color: COLOR.slate,
                              opacity: 0.6,
                              fontSize: 13,
                              paddingRight: 10,
                              marginRight: 10,
                              borderRight: `1px solid ${COLOR.ruleSoft}`,
                            }}
                          >
                            CTA
                          </span>
                          {d.cta}
                        </div>
                      </div>

                      {/* Card footer */}
                      <footer
                        className="flex items-center justify-between"
                        style={{
                          padding: "16px 24px",
                          borderTop: `1px solid rgba(15,28,46,0.08)`,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "proxima-sera, var(--serif)",
                            fontStyle: "italic",
                            fontWeight: 300,
                            fontSize: 13,
                            color: COLOR.slate,
                            opacity: 0.75,
                          }}
                        >
                          Sign-off —{" "}
                          <em style={{ fontStyle: "italic" }}>{d.signoff}</em>
                        </span>
                      </footer>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <NextSectionLink title="Calendar" href="/calendar" />
      </div>
    </>
  );
}
