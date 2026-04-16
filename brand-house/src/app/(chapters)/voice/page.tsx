
import BrandVideoPlayer from "@/components/BrandVideoPlayer";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import VoiceHero from "@/components/VoiceHero";

const pillars = [
  { name: "Your Business, People", sub: "Advisors, mentors, real humans." },
  { name: "Your Business, Funded", sub: "Capital access, loans, grants." },
  { name: "Your Business, Connected", sub: "Network, resources, community." },
];

const proofPoints = [
  { number: "8,500+", label: "businesses served" },
  { number: "$240M+", label: "capital raised" },
  { number: "1,900+", label: "jobs created" },
];

// Shared 2px container-width steel rule
function SectionRule() {
  return (
    <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      <div
        aria-hidden
        style={{
          height: 2,
          background: "#5684BA",
          opacity: 0.85,
        }}
      />
    </div>
  );
}

// Shared section heading — Proxima 500, per design spec
function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
      <p
        className="uppercase"
        style={{
          fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
          fontSize: "11px",
          letterSpacing: "0.22em",
          color: "rgba(133, 163, 200, 0.75)",
        }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-4"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(28px, 3.2vw, 40px)",
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
          color: "#f5f4f0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export default function VoicePage() {
  return (
    <div style={{ backgroundColor: "#0f1c2e" }}>
      {/* ── HERO ── */}
      <VoiceHero />

      {/* ── VIDEO ── */}
      <section className="pt-20 md:pt-28 pb-6 relative">
        <SbdcWatermark
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          opacity={0.02}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
          <p
            className="uppercase mb-6"
            style={{
              fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
              fontSize: "11px",
              letterSpacing: "0.22em",
              color: "rgba(133, 163, 200, 0.75)",
            }}
          >
            01 · Brand Film
          </p>
          <div
            className="overflow-hidden"
            style={{
              borderRadius: 2,
              border: "1px solid rgba(133,163,200,0.15)",
            }}
          >
            <BrandVideoPlayer videoId="5s8fBXxKaJc" />
          </div>
          <p
            className="mt-5 italic"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "15px",
              color: "rgba(133,163,200,0.55)",
            }}
          >
            The tone of voice, in motion.
          </p>
        </div>
      </section>

      <div className="pt-16 md:pt-24">
        <SectionRule />
      </div>

      {/* ── PERSONALITY — short serif paragraph ── */}
      <section className="pt-14 md:pt-20 pb-24 md:pb-32">
        <SectionHeading eyebrow="02 · Personality" title="Four traits, one voice." />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mt-12 md:mt-14">
          <p
            className="italic max-w-[980px]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(26px, 3.2vw, 44px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              color: "rgba(245, 244, 240, 0.92)",
            }}
          >
            We are{" "}
            <span style={{ color: "#85A3C8" }}>direct</span> — leading with the
            point, never with the acronym. We are{" "}
            <span style={{ color: "#85A3C8" }}>human</span>, writing like a
            person and not an institution. We are{" "}
            <span style={{ color: "#85A3C8" }}>knowing</span>, because the data
            and the experience are ours. And we are{" "}
            <span style={{ color: "#85A3C8" }}>optimistic</span> — honest about
            the hard parts, and still convinced a small business can change a
            town.
          </p>
        </div>
      </section>

      <SectionRule />

      {/* ── VOICE IN ACTION — billboard gallery ── */}
      <section className="pt-14 md:pt-20 pb-24 md:pb-32">
        <SectionHeading
          eyebrow="03 · Voice in Action"
          title="The voice at billboard scale."
        />

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mt-16 md:mt-20">
          {/* Specimen 1 — Homepage wide display */}
          <figure className="py-14 md:py-20 border-t border-white/[0.08]">
            <figcaption
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Homepage
            </figcaption>
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 700,
                fontSize: "clamp(40px, 6.2vw, 92px)",
                color: "#f5f4f0",
                letterSpacing: "0.01em",
                lineHeight: 1.02,
              }}
            >
              What&rsquo;s free advice worth? $547 million,{" "}
              <span style={{ color: "#A73B44" }}>last year.</span>
            </p>
          </figure>

          {/* Specimen 2 — Client story serif */}
          <figure className="py-14 md:py-20 border-t border-white/[0.08]">
            <figcaption
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Client Story
            </figcaption>
            <p
              className="italic"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(36px, 5.6vw, 84px)",
                color: "#f5f4f0",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              &ldquo;When Maria came to us, she had a recipe and{" "}
              <span style={{ color: "#85A3C8" }}>a dream.</span>&rdquo;
            </p>
          </figure>

          {/* Specimen 3 — Impact stat */}
          <figure className="py-14 md:py-20 border-t border-white/[0.08]">
            <figcaption
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Impact
            </figcaption>
            <div className="flex flex-col md:flex-row md:items-end md:gap-10">
              <p
                style={{
                  fontFamily: "var(--font-wide)",
                  fontWeight: 700,
                  fontSize: "clamp(96px, 16vw, 220px)",
                  color: "#f5f4f0",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.88,
                }}
              >
                $2.8B
              </p>
              <p
                className="mt-4 md:mt-0 md:pb-4 max-w-[320px]"
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "rgba(133,163,200,0.75)",
                }}
              >
                in capital raised since 1980. Real dollars into real
                businesses.
              </p>
            </div>
          </figure>

          {/* Specimen 4 — Social */}
          <figure className="py-14 md:py-20 border-t border-b border-white/[0.08]">
            <figcaption
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Social
            </figcaption>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(32px, 4.5vw, 64px)",
                color: "#f5f4f0",
                letterSpacing: "-0.015em",
                lineHeight: 1.08,
              }}
            >
              42,000 jobs created.{" "}
              <span style={{ color: "rgba(245,244,240,0.5)" }}>
                And counting.
              </span>
            </p>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              #YourBusinessBetter
            </p>
          </figure>
        </div>
      </section>

      <SectionRule />

      {/* ── MESSAGING PILLARS ── */}
      <section className="pt-14 md:pt-20 pb-28 md:pb-36">
        <SectionHeading
          eyebrow="04 · Messaging Pillars"
          title="Taglines, metrics, and the mantra."
        />

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 mt-14 md:mt-20">
          {/* Primary tagline */}
          <div className="border-t border-white/[0.08] pt-10 md:pt-12">
            <p
              className="uppercase mb-5"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Primary Tagline
            </p>
            <h3
              className="italic"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(56px, 9vw, 128px)",
                color: "#f5f4f0",
                letterSpacing: "-0.03em",
                lineHeight: 0.96,
              }}
            >
              Your Business,
              <br />
              Better.
            </h3>
          </div>

          {/* Three pillars */}
          <div className="mt-20 md:mt-28">
            <p
              className="uppercase mb-10"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Three Pillars
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {pillars.map((p) => (
                <div
                  key={p.name}
                  className="py-8 md:py-2 md:pl-6 md:border-l border-t md:border-t-0 border-white/[0.08]"
                >
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 500,
                      fontSize: "clamp(22px, 2.2vw, 28px)",
                      color: "#f5f4f0",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: 1.55,
                      color: "rgba(133,163,200,0.75)",
                    }}
                  >
                    {p.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics / proof points */}
          <div className="mt-20 md:mt-28 pt-10 md:pt-12 border-t border-white/[0.08]">
            <p
              className="uppercase mb-10"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              By the Numbers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {proofPoints.map((pt) => (
                <div
                  key={pt.label}
                  className="py-8 md:py-0 md:pl-6 md:border-l border-t md:border-t-0 border-white/[0.08]"
                  style={{ minWidth: 0 }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontWeight: 700,
                      fontSize: "clamp(44px, 4.6vw, 68px)",
                      color: "#f5f4f0",
                      letterSpacing: "-0.02em",
                      lineHeight: 0.95,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {pt.number}
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "15px",
                      color: "rgba(133,163,200,0.75)",
                    }}
                  >
                    {pt.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Manifesto / boilerplate */}
          <div className="mt-20 md:mt-28 pt-10 md:pt-12 border-t border-white/[0.08]">
            <p
              className="uppercase mb-8"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "11px",
                letterSpacing: "0.22em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              Sample Boilerplate · Manifesto
            </p>
            <p
              className="italic max-w-[960px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(24px, 2.9vw, 40px)",
                color: "rgba(245,244,240,0.92)",
                letterSpacing: "-0.015em",
                lineHeight: 1.3,
              }}
            >
              &ldquo;We don&rsquo;t just advise. We sit across the table, roll
              up our sleeves, and help you build something that lasts. That&rsquo;s
              how 8,500 businesses became{" "}
              <span style={{ color: "#85A3C8" }}>8,500 stories</span> — and
              counting.&rdquo;
            </p>
            <p
              className="mt-8"
              style={{
                fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
                fontSize: "12px",
                letterSpacing: "0.18em",
                color: "rgba(133,163,200,0.55)",
              }}
            >
              #YourBusinessBetter · #NorCalSBDC · #PeopleFundedConnected
            </p>
          </div>
        </div>
      </section>

      <NextSectionLink title="Media" href="/photography" />
    </div>
  );
}
