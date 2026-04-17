
import { Fragment } from "react";
import MasonryGallery from "@/components/MasonryGallery";
import MediaHero from "@/components/MediaHero";
import NextSectionLink from "@/components/NextSectionLink";

// Shared 2px container-width rule
function SectionRule() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      <div
        aria-hidden
        style={{
          height: 2,
          background: "rgba(15,28,46,0.18)",
        }}
      />
    </div>
  );
}

function Eyebrow({
  children,
  color = "rgba(15,28,46,0.45)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <p
      className="uppercase"
      style={{
        fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
        fontSize: "11px",
        letterSpacing: "0.22em",
        color,
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      <Eyebrow
        color={dark ? "rgba(133, 163, 200, 0.75)" : "rgba(15,28,46,0.45)"}
      >
        {eyebrow}
      </Eyebrow>
      <h2
        className="mt-4"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(28px, 3.2vw, 40px)",
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
          color: dark ? "#f5f4f0" : "#0f1c2e",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ──────── PRINCIPLES — paired Do / Don't grid, dark editorial ──────── */
function PrinciplesSection() {
  // Lightened accent colors for legibility on navy.
  const DO = "#4FB39E";   // lightened evergreen
  const DONT = "#E08A92"; // lightened berry
  const ruleStrong = "rgba(245,244,240,0.25)";
  const ruleMid = "rgba(245,244,240,0.15)";
  const ruleSoft = "rgba(245,244,240,0.12)";

  const headTagStyle: React.CSSProperties = {
    fontFamily: "var(--sans)",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
  };

  const numberStyle = (color: string): React.CSSProperties => ({
    fontFamily: "proxima-sera, var(--serif)",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "15px",
    letterSpacing: "0.02em",
    color,
    fontVariantNumeric: "tabular-nums",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
  });

  const titleStyle: React.CSSProperties = {
    fontFamily: "proxima-sera, var(--serif)",
    fontWeight: 300,
    fontSize: "clamp(24px, 2.6vw, 32px)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    color: "#f5f4f0",
  };

  const descStyle: React.CSSProperties = {
    fontFamily: "var(--sans)",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "rgba(245,244,240,0.72)",
    maxWidth: "44ch",
  };

  const Dash = ({ color, width = 32 }: { color: string; width?: number }) => (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width,
        height: "1.5px",
        background: color,
        opacity: 0.45,
      }}
    />
  );

  // Data pairs so rows align horizontally.
  const pairs = [
    {
      doTitle: (<>Real people, real work.</>),
      doDesc:
        "Photograph people doing their actual work \u2014 behind the counter, at the bench, on the floor. Never posed. Never stock.",
      dontTitle: (<>No suits shaking hands.</>),
      dontDesc:
        "Generic stock photography of business people in suits is the visual equivalent of jargon. Skip it.",
    },
    {
      doTitle: (<>Natural light, natural emotion.</>),
      doDesc:
        "Use available light whenever possible. Capture pride, focus, determination, laughter \u2014 the feelings that can't be faked.",
      dontTitle: (<>No posed group shots.</>),
      dontDesc:
        "Everyone staring at the camera reads as staged, because it is. Find the moment before or after instead.",
    },
    {
      doTitle: (<>Advisor and client, <em style={{ fontStyle: "italic" }}>together.</em></>),
      doDesc:
        "When telling an SBDC story, show the relationship. Two people in conversation tells the whole thesis in a single frame.",
      dontTitle: (<>No AI-generated people.</>),
      dontDesc:
        "Authenticity is non-negotiable. If a client is in the frame, it's the actual client \u2014 or it's not there at all.",
    },
  ];

  return (
    <section
      className="pt-20 md:pt-28 pb-24 md:pb-32"
      style={{ backgroundColor: "#0f1c2e" }}
    >
      <div className="max-w-[1320px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <header className="mb-14 md:mb-[72px]">
          <div
            className="inline-flex items-center gap-[10px] mb-5"
            style={{ ...headTagStyle, color: "#85A3C8" }}
          >
            <span
              aria-hidden
              style={{
                width: 28,
                height: 2,
                background: "#85A3C8",
                opacity: 0.5,
              }}
            />
            <span>03 · Principles</span>
          </div>
          <h2
            style={{
              fontFamily: "proxima-sera, var(--serif)",
              fontWeight: 300,
              fontSize: "clamp(40px, 5.2vw, 68px)",
              lineHeight: 1,
              letterSpacing: "-0.028em",
              color: "#f5f4f0",
              maxWidth: "20ch",
            }}
          >
            Three rules,{" "}
            <em style={{ fontStyle: "italic" }}>three anti-rules.</em>
          </h2>
        </header>

        {/* Paired grid — Do / Don't */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderTop: `1px solid ${ruleStrong}`,
            borderBottom: `1px solid ${ruleStrong}`,
          }}
        >
          {/* Column headers */}
          <div
            className="py-5 md:py-6"
            style={{
              ...headTagStyle,
              color: DO,
              borderBottom: `1px solid ${ruleMid}`,
            }}
          >
            <span className="inline-flex items-center gap-[10px]">
              <Dash color={DO} width={20} />
              <span>Do</span>
            </span>
          </div>
          <div
            className="py-5 md:py-6 md:pl-12"
            style={{
              ...headTagStyle,
              color: DONT,
              borderBottom: `1px solid ${ruleMid}`,
              borderLeft: `1px solid ${ruleMid}`,
            }}
          >
            <span className="inline-flex items-center gap-[10px]">
              <Dash color={DONT} width={20} />
              <span>Don&rsquo;t</span>
            </span>
          </div>

          {/* Pairs */}
          {pairs.map((p, i) => {
            const last = i === pairs.length - 1;
            return (
              <Fragment key={i}>
                {/* DO cell */}
                <div
                  className="flex flex-col gap-3 py-10 md:pr-12"
                  style={{
                    borderBottom: last ? "none" : `1px solid ${ruleSoft}`,
                  }}
                >
                  <div style={numberStyle(DO)}>
                    <span>0{i + 1}</span>
                    <Dash color={DO} />
                  </div>
                  <h3 style={titleStyle}>{p.doTitle}</h3>
                  <p style={descStyle}>{p.doDesc}</p>
                </div>
                {/* DON'T cell */}
                <div
                  className="flex flex-col gap-3 py-10 md:pl-12"
                  style={{
                    borderBottom: last ? "none" : `1px solid ${ruleSoft}`,
                    borderLeft: `1px solid ${ruleMid}`,
                  }}
                >
                  <div style={numberStyle(DONT)}>
                    <span>0{i + 1}</span>
                    <Dash color={DONT} />
                  </div>
                  <h3 style={titleStyle}>{p.dontTitle}</h3>
                  <p style={descStyle}>{p.dontDesc}</p>
                </div>
              </Fragment>
            );
          })}
        </div>

        {/* Editorial footer */}
        <div
          className="mt-10 pt-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-6"
          style={{
            borderTop: `1px dashed rgba(245,244,240,0.2)`,
            ...headTagStyle,
            color: "#85A3C8",
          }}
        >
          <span>The photography test</span>
          <em
            style={{
              fontFamily: "proxima-sera, var(--serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "16px",
              letterSpacing: "-0.005em",
              textTransform: "none",
              color: "rgba(245,244,240,0.85)",
            }}
          >
            If it could be anyone, anywhere, it&rsquo;s not us.
          </em>
          <span>03 / 03</span>
        </div>
      </div>
    </section>
  );
}

export default function PhotographyPage() {
  return (
    <>
      <MediaHero />

      {/* ── RULE OF THUMB ── */}
      <section
        className="pt-16 md:pt-24 pb-20 md:pb-28"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <SectionHeading
          eyebrow="01 · Rule of Thumb"
          title="People, not programs."
        />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mt-10 md:mt-14">
          <p
            className="italic max-w-[980px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(26px, 3.2vw, 44px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              color: "rgba(15,28,46,0.85)",
            }}
          >
            Faces, not buildings. Show{" "}
            <span style={{ color: "#1D5AA7" }}>connection</span> between people,
            and <span style={{ color: "#1D5AA7" }}>energy</span> in the work.
            A person&rsquo;s face communicates the spirit of the network better
            than any logo or statistic ever could.
          </p>
        </div>
      </section>

      <SectionRule />

      {/* ── PHOTO & VIDEO LIBRARY — crisp gallery ── */}
      <section
        className="pt-16 md:pt-24 pb-16 md:pb-20"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <SectionHeading
          eyebrow="02 · Library"
          title="Photo &amp; video library."
        />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <p
            className="mt-5 max-w-[640px]"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.55,
              color: "rgba(15,28,46,0.55)",
            }}
          >
            A working archive of client portraits, event coverage, and network
            film. Click any video tile to play.
          </p>
        </div>
      </section>

      <MasonryGallery />

      {/* ── DO / DON'T — paired grid on navy, with titles & editorial footer ── */}
      <PrinciplesSection />

      {/* ── PHOTO LIBRARY ACCESS LINK — crisp card ── */}
      <section
        className="pt-20 md:pt-28 pb-24 md:pb-32"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12 pt-10 md:pt-12"
          >
            <div className="max-w-[640px]">
              <Eyebrow>04 · Access</Eyebrow>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "clamp(28px, 3.2vw, 40px)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  color: "#0f1c2e",
                }}
              >
                Shared asset library.
              </h2>
              <p
                className="mt-5"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(15,28,46,0.55)",
                }}
              >
                Client portraits, event coverage, brand film, and approved
                stock.
                <br />
                Centralized, rights-cleared, ready to use.
              </p>
            </div>

            <a
              href="https://docs.google.com/document/d/1T7EDvFOQewsl_C_OowdFnfWjxIrBqQHvvg8Z2TZVuWo/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group shrink-0"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#1D5AA7",
                borderBottom: "2px solid rgba(29,90,167,0.25)",
                paddingBottom: 6,
                transition: "border-color 0.2s ease",
              }}
            >
              Open Library
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
                strokeLinejoin="miter"
                className="transition-transform duration-300 group-hover:rotate-90"
              >
                {/* plus-in-box */}
                <rect x="3" y="3" width="18" height="18" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <NextSectionLink title="Templates" href="/templates" />
    </>
  );
}
