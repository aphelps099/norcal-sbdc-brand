
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import EmailSignatureSection from "@/components/EmailSignatureSection";

const socialBio = `Free, confidential business advising for Northern California.\n$2.8B raised. 42,000+ jobs created. Your business, better.`;

const elevatorPitch = `NorCal SBDC provides free, expert business advising to entrepreneurs across Northern California. Since 1980, we've helped our clients raise $2.8 billion in capital, create over 42,000 jobs, and build businesses that matter.`;

export default function TemplatesPage() {
  return (
    <>
      <InteriorHero
        chapterNumber="08"
        category="tools"
        title="Templates"
        subtitle="Ready-to-use copy blocks for emails, presentations, and social channels."
      />

      {/* ── Main dark panel ── */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        {/* Top coral keyline */}
        <div className="w-full h-[2px] bg-[#c4543a]" />

        <div className="max-w-[960px] mx-auto px-8 md:px-12 py-16 md:py-20">

          {/* ── Section header ── */}
          <div className="mb-14">
            <p
              className="font-label uppercase tracking-[0.1em] text-white/25 mb-3"
              style={{ fontSize: "10px" }}
            >
              Brand Copy
            </p>
            <h2
              className="text-white/90 mb-4"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Copy Blocks
            </h2>
            <p className="font-sans text-[14px] text-white/40 leading-relaxed max-w-md">
              Click the copy button to grab any block and paste directly into your
              communications.
            </p>
          </div>

          {/* ── 01 / Email Signature ── */}
          <div className="relative mb-16 overflow-hidden">
            {/* Coral rule + eyebrow */}
            <div className="w-8 h-[2px] bg-[#c4543a] mb-4" />
            <p
              className="font-label uppercase tracking-[0.1em] text-white/25 mb-2"
              style={{ fontSize: "10px" }}
            >
              01
            </p>
            <h3
              className="text-white/85 mb-8"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Email Signature
            </h3>
            <EmailSignatureSection />

            {/* Giant watermark number */}
            <span
              className="absolute right-0 bottom-0 pointer-events-none select-none font-sans text-white/[0.03] leading-none"
              style={{ fontSize: "200px", fontWeight: 700 }}
              aria-hidden="true"
            >
              01
            </span>
          </div>

          {/* ── Divider ── */}
          <div className="border-t border-white/[0.06] mb-16" />

          {/* ── 02 / Social Bio ── */}
          <div className="relative mb-16 overflow-hidden">
            <div className="w-8 h-[2px] bg-[#c4543a] mb-4" />
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <p
                  className="font-label uppercase tracking-[0.1em] text-white/25 mb-2"
                  style={{ fontSize: "10px" }}
                >
                  02
                </p>
                <h3
                  className="text-white/85"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Social Bio
                </h3>
              </div>
              <div className="pt-1 shrink-0">
                <CopyButton text={socialBio} />
              </div>
            </div>

            {/* Display-scale text treatment */}
            <p
              className="text-white/80 leading-snug font-sans max-w-2xl"
              style={{
                fontSize: "clamp(1.2rem, 2.4vw, 1.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Free, confidential business advising for Northern California.{" "}
              <span className="text-white/35">
                $2.8B raised. 42,000+ jobs created. Your business, better.
              </span>
            </p>

            <span
              className="absolute right-0 bottom-0 pointer-events-none select-none font-sans text-white/[0.03] leading-none"
              style={{ fontSize: "200px", fontWeight: 700 }}
              aria-hidden="true"
            >
              02
            </span>
          </div>

          {/* ── Divider ── */}
          <div className="border-t border-white/[0.06] mb-16" />

          {/* ── 03 / Elevator Pitch ── */}
          <div className="relative overflow-hidden">
            <div className="w-8 h-[2px] bg-[#c4543a] mb-4" />
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <p
                  className="font-label uppercase tracking-[0.1em] text-white/25 mb-2"
                  style={{ fontSize: "10px" }}
                >
                  03
                </p>
                <h3
                  className="text-white/85"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Elevator Pitch
                </h3>
              </div>
              <div className="pt-1 shrink-0">
                <CopyButton text={elevatorPitch} />
              </div>
            </div>

            {/* Display-scale text treatment */}
            <p
              className="text-white/80 leading-relaxed font-sans max-w-2xl"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}
            >
              NorCal SBDC provides free, expert business advising to entrepreneurs
              across Northern California.{" "}
              <span className="text-white/35">
                Since 1980, we've helped our clients raise $2.8 billion in capital,
                create over 42,000 jobs, and build businesses that matter.
              </span>
            </p>

            <span
              className="absolute right-0 bottom-0 pointer-events-none select-none font-sans text-white/[0.03] leading-none"
              style={{ fontSize: "200px", fontWeight: 700 }}
              aria-hidden="true"
            >
              03
            </span>
          </div>
        </div>

        {/* Bottom coral keyline */}
        <div className="w-full h-[2px] bg-[#c4543a]" />
      </div>

      <NextSectionLink title="Content" href="/content" />
    </>
  );
}
