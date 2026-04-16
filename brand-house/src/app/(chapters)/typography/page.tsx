import NextSectionLink from "@/components/NextSectionLink";
import TypographyHero from "@/components/TypographyHero";
import TypographySpecimens from "@/components/TypographySpecimens";

const COBALT = "#004290";
const BERRY = "#A73B44";
const FOREST = "#2e8a55";

/* ------------------------------------------------------------------ */
/*  Usage — data                                                      */
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
          fontSize: "15px",
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
    spec: "Serif 400 Italic · 32–56px",
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
    spec: "Serif 400 · 40–64px",
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
    spec: "Serif 400 Italic inside body",
    sample: (
      <span
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "15px",
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
    spec: "Serif 300 Book · 22–28px",
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
    spec: "Proxima 500 + Serif Italic on closer",
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
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function TypographyPage() {
  return (
    <>
      <TypographyHero />

      <div className="bg-cream">
        {/* ============================================================
            Brand Fonts — 2 centered rows (matches Colors page section rhythm)
        ============================================================ */}
        <TypographySpecimens />

        {/* ============================================================
            Type in Use — editorial asymmetric layout
            (Uses the same full-bleed rule + section heading rhythm as Colors)
        ============================================================ */}
        <TypeInUse />

        {/* ============================================================
            Usage Reference
        ============================================================ */}
        <UsageReference rows={usageRows} />

        <div style={{ height: "clamp(80px, 10vw, 120px)" }} />
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Type in Use                                                       */
/* ------------------------------------------------------------------ */

function TypeInUse() {
  return (
    <section style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "24px" }}>
      {/* Section heading — same pattern as ApplicationsHeader on Colors page */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mb-10 md:mb-14">
        <h2
          className="text-navy"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(28px, 3.2vw, 40px)",
            letterSpacing: "-0.015em",
            lineHeight: 1.05,
          }}
        >
          Type in Use
        </h2>
        <p
          className="text-navy/55 mt-4 max-w-[560px]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(15px, 1.1vw, 16px)",
            letterSpacing: "-0.005em",
            lineHeight: 1.55,
          }}
        >
          Real artifacts — reports, social posts, fliers, stories — rendered with the system&rsquo;s typefaces.
        </p>
      </div>

      {/* Full-bleed hairline rule */}
      <div className="w-full mb-12 md:mb-16">
        <div
          aria-hidden
          style={{
            height: 1,
            background: "rgba(15,28,46,0.18)",
          }}
        />
      </div>

      {/* Impact Report — full-width navy hero */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mb-5">
        <figure
          className="bg-navy text-cream p-10 md:p-14"
          style={{ minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
        >
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
                  fontSize: "15px",
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
                fontSize: "15px",
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
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-5">
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
                fontSize: "15px",
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
                  fontSize: "15px",
                  letterSpacing: "-0.005em",
                  color: "rgba(245,244,240,0.55)",
                }}
              >
                Free advising ·{" "}
                <span style={{ fontFamily: "var(--mono)", fontSize: "12px" }}>
                  norcalsbdc.org
                </span>
              </p>
            </div>
          </figure>
        </div>
      </div>

      {/* Row 3: Workshop Flier + Success Story */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                fontSize: "15px",
                letterSpacing: "-0.005em",
                lineHeight: 1.4,
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
                  style={{ fontFamily: "var(--mono)", fontSize: "13px" }}
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
                  style={{ fontFamily: "var(--mono)", fontSize: "13px" }}
                >
                  Eureka · 1st St.
                </p>
              </div>
            </div>
          </figure>

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
                fontSize: "15px",
                letterSpacing: "-0.005em",
              }}
            >
              — Adam &amp; Dustin, co-founders
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Usage Reference                                                   */
/* ------------------------------------------------------------------ */

type UsageRow = { role: string; spec: string; sample: React.ReactNode };

function UsageReference({ rows }: { rows: UsageRow[] }) {
  return (
    <section style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "24px" }}>
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mb-10 md:mb-14">
        <h2
          className="text-navy"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(28px, 3.2vw, 40px)",
            letterSpacing: "-0.015em",
            lineHeight: 1.05,
          }}
        >
          Usage Reference
        </h2>
        <p
          className="text-navy/55 mt-4 max-w-[560px]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(15px, 1.1vw, 16px)",
            letterSpacing: "-0.005em",
            lineHeight: 1.55,
          }}
        >
          Which face for which job. The short answer when you&rsquo;re unsure.
        </p>
      </div>

      <div className="w-full mb-12 md:mb-16">
        <div aria-hidden style={{ height: 1, background: "rgba(15,28,46,0.18)" }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        {rows.map((row, i) => (
          <div
            key={row.role}
            className={`grid grid-cols-1 md:grid-cols-[200px_1fr_1.5fr] gap-4 md:gap-8 py-5 ${
              i < rows.length - 1 ? "border-b border-navy/[0.08]" : ""
            }`}
          >
            <p
              className="text-navy"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "15px",
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
    </section>
  );
}
