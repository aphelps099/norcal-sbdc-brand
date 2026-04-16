
import BrandVideoPlayer from "@/components/BrandVideoPlayer";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

const weAreData = [
  { trait: "Direct", desc: "Lead with the point.", anti: "Bureaucratic", antiDesc: "No acronym-laden jargon." },
  { trait: "Human", desc: "Write like a person, not an institution.", anti: "Institutional", antiDesc: "Never sound like a press release." },
  { trait: "Knowing", desc: "We have the data and the experience.", anti: "Condescending", antiDesc: "Never talk down to a business owner." },
  { trait: "Optimistic", desc: "We believe in the businesses we serve.", anti: "Naive", antiDesc: "We're honest about the hard parts too." },
];

const pillars = [
  { name: "Your Business, People", sub: "Advisors, mentors, real humans", color: "#004290" },
  { name: "Your Business, Funded", sub: "Capital access, loans, grants", color: "#A73B44" },
  { name: "Your Business, Connected", sub: "Network, resources, community", color: "#5684BA" },
];

const headlinePatterns = [
  { text: "What\u2019s free advice worth? $547 million,", emphasis: "last year." },
  { text: "Your business deserves someone who", emphasis: "gets it." },
  { text: "Don\u2019t settle for", emphasis: "generic advice." },
  { text: "Real clients. Real", emphasis: "results." },
];

const proofPoints = [
  { number: "8,500+", label: "businesses served" },
  { number: "$240M+", label: "capital raised" },
  { number: "1,900+", label: "jobs created" },
];

export default function VoicePage() {
  return (
    <>
      {/* ── SECTION 1 — Full-bleed Voice Statement ── */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#0f1c2e" }}
      >
        <SbdcWatermark
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          opacity={0.025}
        />
        <p
          className="absolute top-0 left-0 pt-8 pl-8 md:pt-10 md:pl-10 uppercase"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Voice &amp; Tone
        </p>
        <div className="text-center px-6 relative z-10">
          <h1
            className="italic"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(72px, 12vw, 140px)",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Your Business,
            <br />
            Better.
          </h1>
          <p
            className="mt-8"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "20px",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.01em",
            }}
          >
            This is how we speak.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — Brand Video ── */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "#0f1c2e" }}
      >
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <div className="overflow-hidden" style={{ borderRadius: "2px" }}>
            <BrandVideoPlayer videoId="5s8fBXxKaJc" />
          </div>
          <p
            className="mt-6 text-center italic"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Brand Video
          </p>
        </div>
      </section>

      {/* ── SECTION 3 — We Are / We Are Not ── */}
      <section
        className="pt-8 pb-20 md:pb-28"
        style={{ backgroundColor: "#0f1c2e" }}
      >
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          {/* Desktop: two-column grid */}
          <div className="hidden md:grid grid-cols-2 gap-0">
            {/* Left column — We Are */}
            <div>
              <p
                className="uppercase mb-8"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                We are
              </p>
              {weAreData.map((row, i) => (
                <div
                  key={row.trait}
                  className={`py-6 ${i < weAreData.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                >
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {row.trait}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Right column — We Are Not */}
            <div>
              <p
                className="uppercase mb-8"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  color: "rgba(167,59,68,0.4)",
                }}
              >
                We are not
              </p>
              {weAreData.map((row, i) => (
                <div
                  key={row.anti}
                  className={`py-6 ${i < weAreData.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                >
                  <p
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "20px",
                      color: "rgba(255,255,255,0.2)",
                    }}
                  >
                    {row.anti}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {row.antiDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked single column */}
          <div className="md:hidden">
            <p
              className="uppercase mb-8"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.3)",
              }}
            >
              We are
            </p>
            {weAreData.map((row, i) => (
              <div
                key={row.trait}
                className={`py-6 ${i < weAreData.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {row.trait}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {row.desc}
                </p>
              </div>
            ))}

            <p
              className="uppercase mt-12 mb-8"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                color: "rgba(167,59,68,0.4)",
              }}
            >
              We are not
            </p>
            {weAreData.map((row, i) => (
              <div
                key={row.anti}
                className={`py-6 ${i < weAreData.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "20px",
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  {row.anti}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.15)",
                  }}
                >
                  {row.antiDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Voice in Action (cream) ── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: "#f5f4f0" }}
      >
        <div className="max-w-[1060px] mx-auto px-8 md:px-12">
          <div className="border-t pt-6 mb-16" style={{ borderColor: "rgba(15,28,46,0.08)" }}>
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(15,28,46,0.25)",
              }}
            >
              01 &middot; Voice in Action
            </p>
          </div>

          {/* Specimen A — Hero Headline */}
          <div>
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(15,28,46,0.25)",
              }}
            >
              Homepage
            </p>
            <p
              className="uppercase"
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 700,
                fontSize: "clamp(28px, 4.5vw, 52px)",
                color: "#0f1c2e",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              What&rsquo;s free advice worth? $547 million,{" "}
              <span style={{ color: "#A73B44" }}>last year.</span>
            </p>
          </div>

          {/* Specimen B — Client Story Lede */}
          <div className="mt-16 md:mt-20">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(15,28,46,0.25)",
              }}
            >
              Client Story
            </p>
            <p
              className="italic max-w-[800px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#0f1c2e",
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}
            >
              &ldquo;When Maria came to us, she had a recipe and a dream.&rdquo;
            </p>
          </div>

          {/* Specimen C — Impact Stat */}
          <div className="mt-16 md:mt-20">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(15,28,46,0.25)",
              }}
            >
              Impact
            </p>
            <p
              style={{
                fontFamily: "var(--font-wide)",
                fontWeight: 700,
                fontSize: "clamp(56px, 10vw, 120px)",
                color: "#0f1c2e",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              $2.8B
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--sans)",
                fontSize: "16px",
                color: "rgba(15,28,46,0.4)",
              }}
            >
              in capital raised since 1980
            </p>
          </div>

          {/* Specimen D — Social Post */}
          <div className="mt-16 md:mt-20">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(15,28,46,0.25)",
              }}
            >
              Social
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(20px, 2.8vw, 32px)",
                color: "#0f1c2e",
                letterSpacing: "-0.01em",
              }}
            >
              42,000 jobs created. And counting.
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                color: "rgba(15,28,46,0.25)",
              }}
            >
              #YourBusinessBetter
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Messaging Framework (navy) ── */}
      <section style={{ backgroundColor: "#0f1c2e" }}>
        <div className="w-full h-[2px]" style={{ backgroundColor: "#c4543a" }} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12 py-24 md:py-32">
          {/* Tagline */}
          <h2
            className="italic"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
            }}
          >
            Your Business,
            <br />
            Better.
          </h2>
          <p
            className="mt-4 uppercase"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Primary Tagline
          </p>

          {/* Pillars */}
          <div className="mt-16 border-t border-white/[0.06]">
            {pillars.map((p) => (
              <div
                key={p.name}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] py-5 border-b border-white/[0.06] items-baseline gap-2 md:gap-0"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {p.name}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {p.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Headline Patterns */}
          <div className="mt-14 border-t border-white/[0.06] pt-6">
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              Headline Patterns
            </p>
            {headlinePatterns.map((h, i) => (
              <div key={i} className="py-4 border-b border-white/[0.06]">
                <p
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  &ldquo;{h.text}{" "}
                  <em className="italic" style={{ color: "#A73B44" }}>
                    {h.emphasis}
                  </em>
                  &rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — Closer (proof points + knockout quote) ── */}
      <section
        className="pt-8 pb-24 md:pb-32 relative overflow-hidden"
        style={{ backgroundColor: "#0f1c2e" }}
      >
        <SbdcWatermark
          className="absolute -right-[8%] top-[10%] w-[35vw] max-w-[420px] pointer-events-none select-none"
          opacity={0.025}
        />
        <div className="max-w-[960px] mx-auto px-8 md:px-12 relative z-10">
          {/* Proof points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {proofPoints.map((pt, i) => (
              <div
                key={pt.label}
                className={`text-center py-8 md:py-0 ${
                  i < proofPoints.length - 1
                    ? "border-b md:border-b-0 md:border-r border-white/[0.06]"
                    : ""
                }`}
              >
                <p
                  style={{
                    fontFamily: "var(--font-wide)",
                    fontWeight: 700,
                    fontSize: "clamp(36px, 5vw, 64px)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {pt.number}
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  {pt.label}
                </p>
              </div>
            ))}
          </div>

          {/* Knockout quote */}
          <div className="mt-16 border-t border-white/[0.06] pt-12">
            <p
              className="italic text-center mx-auto max-w-[720px]"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(22px, 3vw, 36px)",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "-0.01em",
                lineHeight: 1.4,
              }}
            >
              &ldquo;We don&rsquo;t just advise. We sit across the table, roll up
              our sleeves, and help you build something that lasts.&rdquo;
            </p>
          </div>

          {/* Hashtags */}
          <p
            className="mt-12 text-center"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            #YourBusinessBetter &nbsp;&middot;&nbsp; #NorCalSBDC &nbsp;&middot;&nbsp; #PeopleFundedConnected
          </p>
        </div>
      </section>

      <NextSectionLink title="Photography" href="/photography" />
    </>
  );
}
