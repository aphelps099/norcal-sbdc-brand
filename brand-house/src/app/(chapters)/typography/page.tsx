import NextSectionLink from "@/components/NextSectionLink";
import TypographyHero from "@/components/TypographyHero";
import TypographySpecimens from "@/components/TypographySpecimens";
import GrainBackdrop from "@/components/GrainBackdrop";

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
      <GrainBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
      <TypographyHero />

      <div className="bg-cream">
        {/* ============================================================
            Brand Fonts — 2 centered rows (matches Colors page section rhythm)
        ============================================================ */}
        <TypographySpecimens />

        {/* ============================================================
            Fonts in Practice — editorial asymmetric layout + mosaic
            (Uses the same full-bleed rule + section heading rhythm as Colors)
        ============================================================ */}
        <TypeInUse />
        <UsageReference rows={usageRows} />

        <div style={{ height: "clamp(80px, 10vw, 120px)" }} />
      </div>

      <NextSectionLink title="Logos" href="/logos" />
      </div>
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
          Fonts in Practice
        </h2>
        <p
          className="text-navy/55 mt-4 max-w-[640px]"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(15px, 1.1vw, 16px)",
            letterSpacing: "-0.005em",
            lineHeight: 1.55,
          }}
        >
          Real artifacts — reports, social posts, fliers, stories — rendered with the system&rsquo;s typefaces. Below, a reference mosaic where tile size equals speaking volume.
        </p>
      </div>

      {/* Container-width 2px rule under heading */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mb-12 md:mb-16">
        <div
          aria-hidden
          style={{
            height: 2,
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

          {/* Social Ad — fog blue background, navy copy, white tagline closer */}
          <figure
            className="p-7 md:p-8 flex flex-col"
            style={{ aspectRatio: "1 / 1", backgroundColor: "#85A3C8", color: "#0f1c2e" }}
          >
            <figcaption
              className="mb-5"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 700,
                fontSize: "10px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(15,28,46,0.5)",
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
                color: "rgba(15,28,46,0.7)",
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
                color: "#ffffff",
              }}
            >
              Your business,{" "}
              <em
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#0f1c2e",
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
                  color: "rgba(15,28,46,0.65)",
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

/* Mosaic: tile size = speaking volume. Loudest voices get the biggest rooms.
   All colors are brand tokens — navy, cream, sand, berry (coral accent), pool (soft accent). */
function UsageReference({ rows: _rows }: { rows: UsageRow[] }) {
  /* Brand color tokens local to this mosaic */
  const NAVY = "#0f1c2e";
  const CREAM = "#f5f4f0";
  const SAND = "#ece7d9"; /* warmer off-cream for contrast between tiles */
  const BERRY = "#A73B44";
  const POOL = "#8FC5D9";
  const INK_SOFT = "#1a2d4d";

  type Tile = {
    label: string;
    num: string;
    spec: string;
    tone: "cream" | "sand" | "ink" | "inkSoft" | "berry" | "pool";
    gridClass: string;
    body: React.ReactNode;
    decorativeQuote?: boolean;
  };

  const tiles: Tile[] = [
    {
      label: "Page Title / H1",
      num: "01",
      spec: "Proxima 500 · 48–72px · −0.03em",
      tone: "cream",
      gridClass: "col-span-8 row-span-3",
      body: (
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(36px, 5.5vw, 72px)",
            letterSpacing: "-0.035em",
            lineHeight: 0.92,
            color: NAVY,
          }}
        >
          Brand Components
        </div>
      ),
    },
    {
      label: "Display Wordmark",
      num: "05",
      spec: "Wide 700 caps · 56–160px",
      tone: "berry",
      gridClass: "col-span-4 row-span-6",
      body: (
        <div
          style={{
            fontFamily: "var(--font-wide), var(--sans)",
            fontWeight: 700,
            fontSize: "clamp(28px, 4.2vw, 58px)",
            letterSpacing: "-0.01em",
            lineHeight: 0.9,
            textTransform: "uppercase",
            color: CREAM,
            wordBreak: "break-word",
          }}
        >
          <div>NorCal</div>
          <div>SBDC</div>
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: "0.55em",
              height: "0.1em",
              background: POOL,
              marginTop: "0.22em",
            }}
          />
        </div>
      ),
    },
    {
      label: "Section Headline / H2",
      num: "02",
      spec: "Proxima 500 · 32–48px · −0.02em",
      tone: "cream",
      gridClass: "col-span-5 row-span-2",
      body: (
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(22px, 2.6vw, 34px)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: NAVY,
          }}
        >
          Your business,{" "}
          <em
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: BERRY,
            }}
          >
            better.
          </em>
        </div>
      ),
    },
    {
      label: "Eyebrow / Kicker",
      num: "04",
      spec: "Wide 700 · 11px caps · +0.14em",
      tone: "ink",
      gridClass: "col-span-3 row-span-2",
      body: (
        <div
          style={{
            fontFamily: "var(--font-wide), var(--sans)",
            fontWeight: 700,
            fontSize: "clamp(12px, 1.4vw, 16px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            lineHeight: 1.3,
            color: CREAM,
          }}
        >
          Our Manifesto
        </div>
      ),
    },
    {
      label: "Pull Quote",
      num: "06",
      spec: "Serif 400 italic · 32–56px",
      tone: "sand",
      gridClass: "col-span-6 row-span-3",
      decorativeQuote: true,
      body: (
        <div
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(20px, 2.4vw, 30px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.18,
            color: NAVY,
            position: "relative",
            zIndex: 2,
          }}
        >
          <span style={{ color: BERRY }}>&ldquo;</span>
          One business, one relationship at a time.
          <span style={{ color: BERRY }}>&rdquo;</span>
        </div>
      ),
    },
    {
      label: "Success Story Title",
      num: "07",
      spec: "Serif 400 · 40–64px",
      tone: "cream",
      gridClass: "col-span-6 row-span-3",
      body: (
        <div
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(24px, 3.2vw, 40px)",
            letterSpacing: "-0.012em",
            lineHeight: 1,
            color: NAVY,
          }}
        >
          Dick Taylor Chocolates
        </div>
      ),
    },
    {
      label: "Body Copy",
      num: "03",
      spec: "Proxima 500 · 15–18px · −0.01em",
      tone: "cream",
      gridClass: "col-span-7 row-span-3",
      body: (
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 400,
            fontSize: "15px",
            letterSpacing: "-0.005em",
            lineHeight: 1.55,
            maxWidth: "42ch",
            color: NAVY,
          }}
        >
          Advisors who show up, ask the right questions, and stay through the messy middle. The real work happens one table at a time, not on a slide.
        </div>
      ),
    },
    {
      label: "Inline Emphasis",
      num: "08",
      spec: "Serif 400 italic · inside body",
      tone: "pool",
      gridClass: "col-span-5 row-span-3",
      body: (
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 22px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.32,
            color: NAVY,
          }}
        >
          The real work happens{" "}
          <em
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 400,
              color: BERRY,
            }}
          >
            across a table
          </em>
          .
        </div>
      ),
    },
    {
      label: "Manifesto Prose",
      num: "09",
      spec: "Serif 300 book · 22–28px",
      tone: "inkSoft",
      gridClass: "col-span-8 row-span-3",
      body: (
        <div
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 300,
            fontSize: "clamp(20px, 2.4vw, 30px)",
            letterSpacing: "-0.005em",
            lineHeight: 1.3,
            maxWidth: "24ch",
            color: CREAM,
          }}
        >
          We believe small business is the most{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: POOL }}>
            honest
          </em>{" "}
          form of work.
        </div>
      ),
    },
    {
      label: "Tagline Closer",
      num: "10",
      spec: "Proxima 500 + Serif italic",
      tone: "sand",
      gridClass: "col-span-4 row-span-3",
      body: (
        <div
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "clamp(22px, 2.8vw, 36px)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
            color: NAVY,
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
        </div>
      ),
    },
  ];

  const toneStyles: Record<Tile["tone"], { bg: string; fg: string; meta: string }> = {
    cream: { bg: CREAM, fg: NAVY, meta: "rgba(15,28,46,0.55)" },
    sand: { bg: SAND, fg: NAVY, meta: "rgba(15,28,46,0.55)" },
    ink: { bg: NAVY, fg: CREAM, meta: "rgba(245,244,240,0.55)" },
    inkSoft: { bg: INK_SOFT, fg: CREAM, meta: "rgba(245,244,240,0.55)" },
    berry: { bg: BERRY, fg: CREAM, meta: "rgba(245,244,240,0.65)" },
    pool: { bg: POOL, fg: NAVY, meta: "rgba(15,28,46,0.6)" },
  };

  return (
    <section style={{ paddingTop: "clamp(40px, 6vw, 72px)", paddingBottom: "24px" }}>
      {/* Inline eyebrow for the mosaic — integrated into Fonts in Practice */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mb-6 md:mb-8">
        <p
          style={{
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "rgba(15,28,46,0.45)",
          }}
        >
          Reference Mosaic · Tile Size = Speaking Volume
        </p>
      </div>

      {/* Mosaic grid — matches editorial container width (1200) */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div
          className="mosaic-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gridAutoRows: "104px",
            gap: 8,
          }}
        >
          {tiles.map((t) => {
            const c = toneStyles[t.tone];
            return (
              <div
                key={t.num}
                className={`mosaic-tile ${t.gridClass}`}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  padding: "18px 22px",
                  background: c.bg,
                  color: c.fg,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s cubic-bezier(0.2, 0, 0, 1)",
                }}
              >
                {/* Decorative giant quote mark on pull-quote tile */}
                {t.decorativeQuote && (
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: "-0.12em",
                      right: "-0.05em",
                      fontFamily: "var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "clamp(200px, 30vw, 360px)",
                      lineHeight: 0.8,
                      color: BERRY,
                      opacity: 0.1,
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  >
                    &ldquo;
                  </span>
                )}

                {/* Meta row */}
                <div
                  className="flex items-start justify-between gap-3"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-wide), var(--sans)",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                      color: c.meta,
                    }}
                  >
                    {t.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: 14,
                      color: c.meta,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {t.num}
                  </span>
                </div>

                {/* Sample body */}
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    padding: "14px 0",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {t.body}
                </div>

                {/* Spec row */}
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: 9.5,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    lineHeight: 1.6,
                    fontVariantNumeric: "tabular-nums",
                    color: c.meta,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {t.spec}
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsive collapse for narrower viewports — plain <style> (this is a server component) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media (max-width: 900px) {
                .mosaic-grid .col-span-8,
                .mosaic-grid .col-span-7,
                .mosaic-grid .col-span-6,
                .mosaic-grid .col-span-5,
                .mosaic-grid .col-span-4,
                .mosaic-grid .col-span-3 {
                  grid-column: span 12 !important;
                }
              }
              .mosaic-tile {
                transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1);
              }
              .mosaic-tile:hover {
                transform: translateY(-2px);
              }
            `,
          }}
        />
      </div>
    </section>
  );
}
