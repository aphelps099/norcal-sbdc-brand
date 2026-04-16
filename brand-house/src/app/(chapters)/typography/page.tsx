import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";

const COBALT = "#004290";
const BERRY = "#A73B44";
const FOREST = "#2e8a55";

/* ------------------------------------------------------------------ */
/*  01 · The Cast — data                                              */
/* ------------------------------------------------------------------ */

const cast = [
  {
    num: "01",
    role: "Workhorse",
    name: "Proxima Nova",
    slug: "proxima-nova · Medium 500",
    nameStyle: {
      fontFamily: "var(--sans)",
      fontWeight: 500,
      fontSize: "clamp(64px, 10vw, 110px)",
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
    } as const,
    specimenStyle: {
      fontFamily: "var(--sans)",
      fontWeight: 500,
      fontSize: "clamp(18px, 2.4vw, 28px)",
      letterSpacing: "-0.01em",
      lineHeight: 1.45,
    } as const,
    lines: [
      "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm",
      "Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz",
      "0 1 2 3 4 5 6 7 8 9  !  ?  &  @  —",
    ],
  },
  {
    num: "02",
    role: "Display",
    name: "Extra Wide",
    slug: "proxima-nova-extra-wide · Bold 700",
    nameStyle: {
      fontFamily: "var(--font-wide)",
      fontWeight: 700,
      fontSize: "clamp(48px, 8vw, 96px)",
      letterSpacing: "0.06em",
      lineHeight: 0.95,
      textTransform: "uppercase" as const,
    },
    specimenStyle: {
      fontFamily: "var(--font-wide)",
      fontWeight: 700,
      fontSize: "clamp(14px, 1.8vw, 20px)",
      letterSpacing: "0.1em",
      lineHeight: 1.75,
      textTransform: "uppercase" as const,
    },
    lines: [
      "A B C D E F G H I J K L M",
      "N O P Q R S T U V W X Y Z",
      "0 1 2 3 4 5 6 7 8 9  ·  &",
    ],
  },
  {
    num: "03",
    role: "Editorial",
    name: "Proxima Sera",
    slug: "proxima-sera · 300 / 400 / 500 / 700 + italics",
    nameStyle: {
      fontFamily: "var(--serif)",
      fontWeight: 400,
      fontSize: "clamp(72px, 11vw, 120px)",
      letterSpacing: "-0.02em",
      lineHeight: 0.92,
    } as const,
    specimenStyle: {
      fontFamily: "var(--serif)",
      fontWeight: 400,
      fontSize: "clamp(18px, 2.4vw, 28px)",
      letterSpacing: "-0.005em",
      lineHeight: 1.45,
    } as const,
    lines: [
      "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm",
      "Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz",
      "0 1 2 3 4 5 6 7 8 9  ?  &  —",
    ],
    italicLine: "Aa Bb Cc · better. · across a table.",
    italicStyle: {
      fontFamily: "var(--serif)",
      fontWeight: 400,
      fontStyle: "italic" as const,
      fontSize: "clamp(18px, 2.4vw, 28px)",
      letterSpacing: "-0.005em",
      lineHeight: 1.45,
    },
  },
];

/* ------------------------------------------------------------------ */
/*  02 · Usage — data                                                 */
/* ------------------------------------------------------------------ */

const usageRows = [
  {
    role: "Page Titles · H1",
    spec: "Proxima 500 · 48–72px · −0.03em",
    sample: (
      <span
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "34px",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        Brand Components
      </span>
    ),
  },
  {
    role: "Section Headlines · H2",
    spec: "Proxima 500 · 32–48px · −0.02em",
    sample: (
      <span
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "26px",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        Your Business, Better.
      </span>
    ),
  },
  {
    role: "Body Copy",
    spec: "Proxima 500 · 15–18px · −0.01em",
    sample: (
      <span
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "14px",
          letterSpacing: "-0.01em",
          lineHeight: 1.55,
        }}
      >
        Advisors who show up, ask the right questions, and stay through the messy middle.
      </span>
    ),
  },
  {
    role: "Eyebrows · Kickers",
    spec: "Wide 700 · 11px CAPS · +0.14em",
    sample: (
      <span
        style={{
          fontFamily: "var(--font-wide)",
          fontWeight: 700,
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Our Manifesto
      </span>
    ),
  },
  {
    role: "Display Wordmark",
    spec: "Wide 700 · CAPS · 56–160px · tracking 0",
    sample: (
      <span
        style={{
          fontFamily: "var(--font-wide)",
          fontWeight: 700,
          fontSize: "44px",
          letterSpacing: "0",
          lineHeight: 0.92,
          textTransform: "uppercase",
        }}
      >
        Brand
      </span>
    ),
  },
  {
    role: "Pull Quotes",
    spec: "Proxima Sera 400 Italic · 32–56px",
    sample: (
      <span
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "24px",
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}
      >
        &ldquo;One business, one relationship at a time.&rdquo;
      </span>
    ),
  },
  {
    role: "Success Story Titles",
    spec: "Proxima Sera 400 · 40–64px",
    sample: (
      <span
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontSize: "30px",
          letterSpacing: "-0.01em",
          lineHeight: 1.1,
        }}
      >
        Dick Taylor Chocolates
      </span>
    ),
  },
  {
    role: "Inline Emphasis",
    spec: "Proxima Sera 400 Italic inside body",
    sample: (
      <span
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: 1.55,
        }}
      >
        …the real work happens{" "}
        <em
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          across a table
        </em>
        .
      </span>
    ),
  },
  {
    role: "Manifesto Prose",
    spec: "Proxima Sera 300 Light · 22–28px",
    sample: (
      <span
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 300,
          fontSize: "17px",
          letterSpacing: "-0.005em",
          lineHeight: 1.45,
        }}
      >
        We believe small business is the most honest form of work.
      </span>
    ),
  },
  {
    role: "Tagline Closer",
    spec: "Proxima 500 + Proxima Sera Italic on closer",
    sample: (
      <span
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "26px",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        Your business,{" "}
        <em
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          better.
        </em>
      </span>
    ),
  },
];



/* ------------------------------------------------------------------ */
/*  05 · Do / Don't — data                                            */
/* ------------------------------------------------------------------ */

const dos = [
  "Use Proxima 500 as the workhorse — headings, body, UI.",
  "Reserve Extra Wide 700 for short caps — eyebrows and kickers at 10–13px.",
  "Use Extra Wide 700 CAPS at 56–160px for single-word display wordmarks, tracking 0.",
  "Use Proxima Sera Italic on the final word of a tagline for warmth.",
  "Let Proxima Sera 300 carry manifesto prose at 22–28px.",
  "Keep mono (Roboto Mono) to code, hex values, and file paths.",
  "Set Proxima tracking at −0.02em for headings, −0.01em for body.",
];

const donts = [
  "Don\u2019t set Extra Wide in lowercase or long sentences.",
  "Don\u2019t use Proxima Sera for buttons, form labels, or navigation.",
  "Don\u2019t stack two italic words in a tagline — italicize one closer.",
  "Don\u2019t pair Proxima Medium with Proxima Regular for hierarchy.",
  "Don\u2019t introduce a fourth typeface.",
  "Don\u2019t use mono for body copy or decorative accents.",
];

/* ------------------------------------------------------------------ */
/*  SectionHeader                                                     */
/* ------------------------------------------------------------------ */

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <header className="mb-10 md:mb-14">
      <p
        className="text-navy/40 mb-3"
        style={{
          fontFamily: "var(--font-wide)",
          fontWeight: 700,
          fontSize: "10px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-navy"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(24px, 3vw, 34px)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          className="text-navy/55 mt-3 max-w-[560px]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "15px",
            letterSpacing: "-0.01em",
            lineHeight: 1.55,
          }}
        >
          {sub}
        </p>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function TypographyPage() {
  return (
    <>
      <InteriorHero
        chapterNumber="02"
        category="visual"
        title="Fonts"
        subtitle="Three typefaces, three jobs — Proxima Nova, Extra Wide, and Proxima Sera."
      />

      <div className="bg-cream">

        {/* ============================================================
            01 · THE CAST — full-width stacked rows, no cards
        ============================================================ */}
        <section style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "24px" }}>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="01 · The Cast"
                title="Three typefaces, three jobs."
                sub="Each face earns its place by doing one thing the other two can't."
              />
            </div>
          </div>

          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            {cast.map((c, i) => (
              <div
                key={c.num}
                className={i < cast.length - 1 ? "border-b border-navy/[0.12]" : ""}
                style={{ paddingTop: i === 0 ? 0 : "clamp(48px, 6vw, 72px)", paddingBottom: "clamp(48px, 6vw, 72px)" }}
              >
                {/* Role kicker */}
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: COBALT,
                  }}
                >
                  {c.num} · {c.role}
                </p>

                {/* Hero font name — oversized */}
                <p className="text-navy mb-4" style={c.nameStyle}>
                  {c.name}
                </p>

                {/* Slug metadata */}
                <p
                  className="text-navy/45 mb-10"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 400,
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.slug}
                </p>

                {/* Character specimen */}
                <div className="text-navy/80" style={c.specimenStyle}>
                  {c.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {c.italicLine && (
                    <p className="text-navy/80 pt-2" style={c.italicStyle}>
                      {c.italicLine}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            02 · USAGE
        ============================================================ */}
        <section style={{ paddingTop: "clamp(100px, 12vw, 160px)", paddingBottom: "24px" }}>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="02 · Usage"
                title="Which face for which job."
                sub="The reference sheet for advisors and developers. Samples render live in the actual face."
              />
            </div>

            <div>
              {usageRows.map((row, i) => (
                <div
                  key={row.role}
                  className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1.5fr] gap-4 md:gap-8 py-4 ${
                    i < usageRows.length - 1 ? "border-b border-navy/[0.08]" : ""
                  }`}
                >
                  <p
                    className="text-navy"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "13px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    {row.role}
                  </p>
                  <p
                    className="text-navy/50"
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontWeight: 400,
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      lineHeight: 1.6,
                    }}
                  >
                    {row.spec}
                  </p>
                  <div className="text-navy self-center">{row.sample}</div>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* ============================================================
            03 · IN ACTION — editorial asymmetric layout
        ============================================================ */}
        <section style={{ paddingTop: "clamp(100px, 12vw, 160px)", paddingBottom: "24px" }}>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="03 · In Action"
                title="Where the three faces go together."
                sub="Real artifacts — reports, social posts, fliers, stories — rendered with the system's three typefaces."
              />
            </div>
          </div>

          {/* Impact Report — full-width navy hero */}
          <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-5">
            <figure className="bg-navy text-cream p-10 md:p-14" style={{ minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <figcaption
                  className="mb-8"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,240,0.4)",
                  }}
                >
                  Impact Report Cover
                </figcaption>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,240,0.5)",
                  }}
                >
                  NorCal SBDC · 2025 Annual Report
                </p>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(32px, 5vw, 52px)",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.05,
                    color: "rgba(245,244,240,0.95)",
                  }}
                >
                  36 Counties. 14 Centers.
                  <br />
                  One Mission.
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(40px, 6vw, 64px)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: "rgba(245,244,240,0.92)",
                    }}
                  >
                    $412M
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "14px",
                      letterSpacing: "-0.01em",
                      color: "rgba(245,244,240,0.55)",
                    }}
                  >
                    in capital accessed
                  </p>
                </div>
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "13px",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.5,
                    color: "rgba(245,244,240,0.5)",
                    maxWidth: "320px",
                  }}
                >
                  Advisors who show up, ask the right questions, and stay through the messy middle.
                </p>
              </div>
            </figure>
          </div>

          {/* Row 2: Signature Story + Social Ad */}
          <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-5">
              {/* Signature Story PDF excerpt */}
              <figure className="bg-white border border-navy/[0.08] p-8 md:p-10 flex flex-col">
                <figcaption
                  className="mb-6 text-navy/40"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Signature Story PDF
                </figcaption>
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: FOREST,
                  }}
                >
                  Arcata, CA
                </p>
                <p
                  className="text-navy mb-5"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 4vw, 38px)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.05,
                  }}
                >
                  Dick Taylor Chocolates
                </p>
                <p
                  className="text-navy/70 mb-5"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "20px",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.35,
                  }}
                >
                  &ldquo;They walked us through the hardest year we&rsquo;ve had — and came back the next.&rdquo;
                </p>
                <p
                  className="text-navy/60"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.55,
                  }}
                >
                  When Adam Dick and Dustin Taylor decided to scale their bean-to-bar operation, they needed more than capital — they needed a plan.
                </p>
                <p
                  className="text-navy/40 mt-auto pt-6"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                  }}
                >
                  — Adam &amp; Dustin, co-founders
                </p>
              </figure>

              {/* Social Ad — square */}
              <figure className="bg-navy text-cream p-7 md:p-8 flex flex-col" style={{ aspectRatio: "1 / 1" }}>
                <figcaption
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,240,0.4)",
                  }}
                >
                  Social Ad
                </figcaption>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(245,244,240,0.55)",
                  }}
                >
                  For Small Business
                </p>
                <p
                  className="mt-auto"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(28px, 4vw, 40px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    color: "rgba(245,244,240,0.95)",
                  }}
                >
                  Your business,{" "}
                  <em
                    style={{
                      fontFamily: "var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    better.
                  </em>
                </p>
                <div className="pt-6">
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "12px",
                      letterSpacing: "-0.005em",
                      color: "rgba(245,244,240,0.55)",
                    }}
                  >
                    Free advising ·{" "}
                    <span style={{ fontFamily: "var(--mono)", fontSize: "11px" }}>
                      norcalsbdc.org
                    </span>
                  </p>
                </div>
              </figure>
            </div>
          </div>

          {/* Row 3: Workshop Flier + Success Story */}
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Workshop Flier — fixed subtitle size */}
              <figure className="bg-cream border border-navy/[0.08] p-7 md:p-8 flex flex-col">
                <figcaption
                  className="mb-5 text-navy/40"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Workshop Flier
                </figcaption>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: BERRY,
                  }}
                >
                  Workshop · March 12
                </p>
                <p
                  className="text-navy mb-2"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "30px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  Financing Your Next Move
                </p>
                <p
                  className="text-navy/65 mb-5"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "14px",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.35,
                  }}
                >
                  A conversation with lenders who fund local businesses.
                </p>
                <div className="mt-auto pt-4 border-t border-navy/[0.08] grid grid-cols-2 gap-3">
                  <div>
                    <p
                      className="text-navy/45 mb-0.5"
                      style={{
                        fontFamily: "var(--font-wide)",
                        fontWeight: 700,
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                      }}
                    >
                      When
                    </p>
                    <p
                      className="text-navy/80"
                      style={{ fontFamily: "var(--mono)", fontSize: "12px" }}
                    >
                      03.12 · 6–8 PM
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-navy/45 mb-0.5"
                      style={{
                        fontFamily: "var(--font-wide)",
                        fontWeight: 700,
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                      }}
                    >
                      Where
                    </p>
                    <p
                      className="text-navy/80"
                      style={{ fontFamily: "var(--mono)", fontSize: "12px" }}
                    >
                      Eureka · 1st St.
                    </p>
                  </div>
                </div>
              </figure>


              {/* Success Story */}
              <figure className="bg-white border border-navy/[0.08] p-7 md:p-8 flex flex-col">
                <figcaption
                  className="mb-5 text-navy/40"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                  }}
                >
                  Success Story
                </figcaption>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: FOREST,
                  }}
                >
                  Arcata, CA
                </p>
                <p
                  className="text-navy mb-4"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "34px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.05,
                  }}
                >
                  Dick Taylor Chocolates
                </p>
                <p
                  className="text-navy/75 mb-5"
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "18px",
                    letterSpacing: "-0.005em",
                    lineHeight: 1.4,
                  }}
                >
                  &ldquo;They walked us through the hardest year we&rsquo;ve had.&rdquo;
                </p>
                <p
                  className="text-navy/55 mt-auto"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "12px",
                    letterSpacing: "-0.005em",
                  }}
                >
                  — Adam &amp; Dustin, co-founders
                </p>
              </figure>
            </div>
          </div>
        </section>

        {/* ============================================================
            04 · RULES — lighter Do/Don't, no outer card
        ============================================================ */}
        <section style={{ paddingTop: "clamp(100px, 12vw, 160px)", paddingBottom: "24px" }}>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="04 · Rules"
                title="Do / Don't."
                sub="Six each. The short answer when you're unsure."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="pr-0 md:pr-10 pb-8 md:pb-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-6 h-px" style={{ background: FOREST }} />
                  <span
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: FOREST,
                    }}
                  >
                    Do
                  </span>
                </div>
                <ul>
                  {dos.map((d, i) => (
                    <li
                      key={d}
                      className={`py-2.5 text-navy/85 ${
                        i < dos.length - 1 ? "border-b border-navy/[0.08]" : ""
                      }`}
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "15px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.5,
                      }}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pl-0 md:pl-10 border-t md:border-t-0 md:border-l border-navy/[0.12] pt-8 md:pt-0">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block w-6 h-px" style={{ background: BERRY }} />
                  <span
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: BERRY,
                    }}
                  >
                    Don&rsquo;t
                  </span>
                </div>
                <ul>
                  {donts.map((d, i) => (
                    <li
                      key={d}
                      className={`py-2.5 text-navy/85 ${
                        i < donts.length - 1 ? "border-b border-navy/[0.08]" : ""
                      }`}
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "15px",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.5,
                      }}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: "clamp(80px, 10vw, 120px)" }} />
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
