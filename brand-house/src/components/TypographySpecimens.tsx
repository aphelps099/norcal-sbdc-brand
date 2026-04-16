"use client";

/**
 * Typography Specimens — two centered rows, each a full-bleed ruled block.
 *
 * Row 01 · Sans / Display Caps  → Proxima Nova (workhorse) paired with
 *                                  Proxima Nova Extra Wide (display caps)
 *                                  in one centered row to show how they
 *                                  work together.
 * Row 02 · Serif                → Editorial serif (Proxima Sera), centered.
 *
 * Each row mirrors the Colors-page "section" rhythm: heading + full-bleed
 * hairline rule + generous padding. No card treatment, all on cream.
 */

const COBALT = "#004290";

export default function TypographySpecimens() {
  return (
    <section style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "24px" }}>
      {/* Section heading — matches Colors "Brand Colors" heading rhythm */}
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
          Brand Fonts
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
          Two families, three jobs. Each face earns its place by doing one thing the others can&rsquo;t.
        </p>
      </div>

      {/* Container-width 2px rule under heading */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div aria-hidden style={{ height: 2, background: "rgba(15,28,46,0.18)" }} />
      </div>

      {/* Row 01 · Sans / Display Caps — centered two-column pairing */}
      <div
        className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 text-center"
        style={{ paddingTop: "clamp(72px, 9vw, 128px)", paddingBottom: "clamp(72px, 9vw, 128px)" }}
      >
        <p
          className="mb-10"
          style={{
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: COBALT,
          }}
        >
          01 · Sans / Display Caps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">
          {/* --- Proxima Nova (Workhorse) --- */}
          <div className="flex flex-col items-center">
            <p
              className="text-navy mb-5"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(44px, 5.2vw, 76px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                whiteSpace: "nowrap",
              }}
            >
              Proxima Nova
            </p>
            <p
              className="text-navy/45 mb-10"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Workhorse · Medium 500
            </p>
            <div
              className="text-navy/85"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(17px, 1.8vw, 22px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.55,
              }}
            >
              <p>A B C D E F G H I J K L M</p>
              <p>N O P Q R S T U V W X Y Z</p>
              <p>0 1 2 3 4 5 6 7 8 9 · &amp;</p>
            </div>
          </div>

          {/* --- Extra Wide (Display) --- */}
          <div className="flex flex-col items-center">
            <p
              className="text-navy mb-5"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.2vw, 60px)",
                letterSpacing: "0.04em",
                lineHeight: 0.95,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Extra Wide
            </p>
            <p
              className="text-navy/45 mb-10"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Display · Bold 700
            </p>
            <div
              className="text-navy/85"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 700,
                fontSize: "clamp(15px, 1.6vw, 19px)",
                letterSpacing: "0.1em",
                lineHeight: 1.7,
                textTransform: "uppercase",
              }}
            >
              <p>A B C D E F G H I J K L M</p>
              <p>N O P Q R S T U V W X Y Z</p>
              <p>0 1 2 3 4 5 6 7 8 9 · &amp;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Container-width 2px rule between rows */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
        <div aria-hidden style={{ height: 2, background: "rgba(15,28,46,0.12)" }} />
      </div>

      {/* Row 02 · Serif — centered single column */}
      <div
        className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 text-center"
        style={{ paddingTop: "clamp(72px, 9vw, 128px)", paddingBottom: "clamp(72px, 9vw, 128px)" }}
      >
        <p
          className="mb-10"
          style={{
            fontFamily: "var(--font-wide)",
            fontWeight: 700,
            fontSize: "10px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: COBALT,
          }}
        >
          02 · Serif
        </p>

        <div className="flex flex-col items-center">
          <p
            className="text-navy mb-5"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(84px, 12vw, 156px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            Serif
          </p>
          <p
            className="text-navy/45 mb-10"
            style={{
              fontFamily: "var(--font-wide)",
              fontWeight: 400,
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Editorial · 300 / 400 / 400 italic
          </p>
          <div
            className="text-navy/85"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(20px, 2.3vw, 30px)",
              letterSpacing: "-0.005em",
              lineHeight: 1.45,
            }}
          >
            <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
            <p>Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
            <p>0 1 2 3 4 5 6 7 8 9 ? &amp; —</p>
            <p
              className="pt-2"
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.3vw, 30px)",
                letterSpacing: "-0.005em",
                lineHeight: 1.45,
              }}
            >
              Aa Bb Cc · better. · across a table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
