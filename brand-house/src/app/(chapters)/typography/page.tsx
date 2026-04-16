import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import CopyButton from "@/components/CopyButton";

const COBALT = "#004290";
const BERRY = "#A73B44";
const FOREST = "#2e8a55";

const embedLink = `<link rel="stylesheet" href="https://use.typekit.net/pkl5rjs.css">`;

const embedCss = `/* Workhorse — UI, body, display */
--font-sans: 'proxima-nova', -apple-system, Helvetica, sans-serif;

/* Display labels — 700, caps only */
--font-wide: 'proxima-nova-extra-wide', 'proxima-nova', sans-serif;

/* Editorial voice — 300 / 400 / 400i */
--font-serif: 'turnip', Georgia, 'Times New Roman', serif;`;

const cast = [
  {
    num: "01",
    role: "Workhorse",
    showpiece: "Aa",
    showpieceStyle: {
      fontFamily: "var(--sans)",
      fontWeight: 500,
      fontSize: "64px",
      letterSpacing: "-0.02em",
    } as const,
    name: (
      <>
        Proxima<br />Nova
      </>
    ),
    slug: "proxima-nova · Medium 500",
    blurb:
      "Headings, body copy, UI, navigation — the reliable voice across 90% of the system.",
  },
  {
    num: "02",
    role: "Display",
    showpiece: "NC",
    showpieceStyle: {
      fontFamily: "var(--font-wide)",
      fontWeight: 700,
      fontSize: "60px",
      letterSpacing: "0.02em",
      textTransform: "uppercase" as const,
    },
    name: (
      <>
        Proxima Nova<br />Extra Wide
      </>
    ),
    slug: "proxima-nova-extra-wide · Bold 700",
    blurb:
      "Eyebrows, kickers, category labels. Caps only — the typographic shoulder tap.",
  },
  {
    num: "03",
    role: "Editorial",
    showpiece: "better.",
    showpieceStyle: {
      fontFamily: "var(--serif)",
      fontWeight: 400,
      fontStyle: "italic" as const,
      fontSize: "64px",
      letterSpacing: "-0.01em",
    },
    name: <>Turnip</>,
    slug: "turnip · Book 300 / Regular 400 / Italic",
    blurb:
      "Pull quotes, manifesto prose, tagline closer. The warm, human counterweight.",
  },
];

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
    role: "Pull Quotes",
    spec: "Turnip 400 Italic · 32–56px",
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
    spec: "Turnip 400 · 40–64px",
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
    spec: "Turnip 400 Italic inside body",
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
    spec: "Turnip 300 Book · 22–28px",
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
    spec: "Proxima 500 + Turnip Italic on closer",
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

const weights = [
  {
    family: "Proxima Nova",
    slug: "var(--sans)",
    rows: [
      {
        num: "500",
        label: "Medium",
        sample: "Everything the system leans on.",
        style: { fontFamily: "var(--sans)", fontWeight: 500, fontSize: "22px", letterSpacing: "-0.02em" } as const,
      },
    ],
  },
  {
    family: "Proxima Nova Extra Wide",
    slug: "var(--font-wide)",
    rows: [
      {
        num: "700",
        label: "Bold · CAPS",
        sample: "EYEBROWS · KICKERS · CHAPTER MARKS",
        style: {
          fontFamily: "var(--font-wide)",
          fontWeight: 700,
          fontSize: "13px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        } as const,
      },
      {
        num: "400",
        label: "Regular · CAPS",
        sample: "METADATA ROWS · SMALL TAGS",
        style: {
          fontFamily: "var(--font-wide)",
          fontWeight: 400,
          fontSize: "12px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        } as const,
      },
    ],
  },
  {
    family: "Turnip",
    slug: "var(--serif)",
    rows: [
      {
        num: "300",
        label: "Book",
        sample: "Manifesto prose, long-form editorial belief.",
        style: { fontFamily: "var(--serif)", fontWeight: 300, fontSize: "20px", lineHeight: 1.4 } as const,
      },
      {
        num: "400",
        label: "Regular",
        sample: "Success story titles and display serif headings.",
        style: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: "20px", lineHeight: 1.3 } as const,
      },
      {
        num: "400i",
        label: "Italic",
        sample: "Pull quotes and the tagline closer.",
        style: {
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "20px",
          lineHeight: 1.3,
        } as const,
      },
    ],
  },
];

const dos = [
  "Use Proxima 500 as the workhorse — headings, body, UI.",
  "Reserve Extra Wide 700 for short, caps eyebrows and kickers.",
  "Use Turnip Italic on the final word of a tagline for warmth.",
  "Let Turnip 300 carry manifesto prose at 22–28px.",
  "Keep mono (Roboto Mono) to code, hex values, and file paths.",
  "Set Proxima tracking at −0.02em for headings, −0.01em for body.",
];

const donts = [
  "Don\u2019t set Extra Wide in lowercase or long sentences.",
  "Don\u2019t use Turnip for buttons, form labels, or navigation.",
  "Don\u2019t stack two italic words in a tagline — italicize one closer.",
  "Don\u2019t pair Proxima Medium with Proxima Regular for hierarchy.",
  "Don\u2019t introduce a fourth typeface.",
  "Don\u2019t use mono for body copy or decorative accents.",
];

const monoExamples = [
  { label: "Hex", value: "#0F1C2E" },
  { label: "Token", value: "--color-navy" },
  { label: "Path", value: "/brand/typography" },
  { label: "Code", value: "font-family: var(--sans)" },
];

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
    <header className="mb-10 md:mb-12">
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

export default function TypographyPage() {
  return (
    <>
      <InteriorHero
        bg="#0f1c2e"
        title="Typography"
        subtitle="Three typefaces, three jobs — Proxima Nova, Extra Wide, and Turnip."
      />

      <div className="bg-cream">
        {/* 01 · The Cast */}
        <section className="pt-20 md:pt-24 pb-6">
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="01 · The Cast"
                title="Three typefaces, three jobs."
                sub="Each face earns its place by doing one thing the other two can’t."
              />
            </div>
          </div>

          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/[0.16] border border-navy/[0.16]">
              {cast.map((c) => (
                <div key={c.num} className="bg-white p-8 md:p-9 flex flex-col">
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
                  <div
                    className="text-navy leading-none mb-7"
                    style={c.showpieceStyle}
                  >
                    {c.showpiece}
                  </div>
                  <p
                    className="text-navy mb-2"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "26px",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.1,
                    }}
                  >
                    {c.name}
                  </p>
                  <p
                    className="text-navy/50 mb-5"
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
                  <p
                    className="text-navy/75"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "14px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.55,
                    }}
                  >
                    {c.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 · Usage */}
        <section className="pt-20 md:pt-24 pb-6">
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

        {/* 03 · Weights */}
        <section className="pt-20 md:pt-24 pb-6">
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="03 · Weights"
                title="Only the weights we use."
                sub="Six weights total across three families. If it isn’t listed, don’t ship it."
              />
            </div>

            <div className="space-y-10">
              {weights.map((family) => (
                <div key={family.family}>
                  <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-navy/[0.12]">
                    <p
                      className="text-navy"
                      style={{
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "16px",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {family.family}
                    </p>
                    <code
                      className="text-navy/40"
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        letterSpacing: "0",
                      }}
                    >
                      {family.slug}
                    </code>
                  </div>
                  {family.rows.map((r) => (
                    <div
                      key={r.num}
                      className="grid grid-cols-[60px_180px_1fr] gap-4 items-center py-3 border-b border-navy/[0.06] last:border-b-0"
                    >
                      <p
                        className="text-navy/40"
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "12px",
                        }}
                      >
                        {r.num}
                      </p>
                      <p
                        className="text-navy/65"
                        style={{
                          fontFamily: "var(--font-wide)",
                          fontWeight: 400,
                          fontSize: "11px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                        }}
                      >
                        {r.label}
                      </p>
                      <p className="text-navy" style={r.style}>
                        {r.sample}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 · Embed */}
        <section className="pt-20 md:pt-24 pb-6">
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="04 · Embed"
                title="Drop-in code."
                sub="Link the Typekit sheet, then wire three CSS variables."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <p
                  className="mb-2 text-navy/50"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  1 · Typekit
                </p>
                <pre
                  className="bg-navy text-cream p-5 md:p-6 rounded-md overflow-x-auto"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  <code>{embedLink}</code>
                </pre>
                <div className="absolute top-7 right-2">
                  <CopyButton text={embedLink} />
                </div>
              </div>

              <div className="relative">
                <p
                  className="mb-2 text-navy/50"
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                  }}
                >
                  2 · CSS Variables
                </p>
                <pre
                  className="bg-navy text-cream p-5 md:p-6 rounded-md overflow-x-auto"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  <code>{embedCss}</code>
                </pre>
                <div className="absolute top-7 right-2">
                  <CopyButton text={embedCss} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 · Rules */}
        <section className="pt-20 md:pt-24 pb-6">
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="border-t border-navy/[0.16] pt-6">
              <SectionHeader
                eyebrow="05 · Rules"
                title="Do / Don’t."
                sub="Six each. The short answer when you’re unsure."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-navy/[0.16]">
              <div className="p-7 md:p-8 border-b md:border-b-0 md:border-r border-navy/[0.12]">
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

              <div className="p-7 md:p-8">
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

        {/* 06 · Monospace strip */}
        <section className="pt-20 md:pt-24 pb-6">
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="bg-navy text-cream px-7 md:px-10 py-8 md:py-9">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 items-center">
                <div>
                  <p
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "rgba(245,244,240,0.55)",
                    }}
                  >
                    06 · Utility Only
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "18px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    Mono shows up{" "}
                    <em
                      style={{
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontWeight: 400,
                      }}
                    >
                      only
                    </em>{" "}
                    when you’re displaying code, values, or paths.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {monoExamples.map((ex) => (
                    <div key={ex.label}>
                      <p
                        style={{
                          fontFamily: "var(--font-wide)",
                          fontWeight: 700,
                          fontSize: "9px",
                          letterSpacing: "0.24em",
                          textTransform: "uppercase",
                          color: "rgba(245,244,240,0.45)",
                        }}
                      >
                        {ex.label}
                      </p>
                      <p
                        className="mt-1"
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "13px",
                          color: "rgba(245,244,240,0.92)",
                        }}
                      >
                        {ex.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p
              className="text-navy/60 mt-4"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "-0.005em",
              }}
            >
              Stack: <code style={{ fontFamily: "var(--mono)" }}>&apos;Roboto Mono&apos;, &apos;SF Mono&apos;, &apos;Fira Code&apos;, monospace</code>.
            </p>
          </div>
        </section>

        <div className="h-20 md:h-24" />
      </div>

      <NextSectionLink title="Logos" href="/logos" />
    </>
  );
}
