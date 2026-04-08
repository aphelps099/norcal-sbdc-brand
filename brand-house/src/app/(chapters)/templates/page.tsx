import { gradientTemplates } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import EmailSignatureGenerator from "@/components/EmailSignatureGenerator";

const socialBio = `Free, confidential business advising for Northern California.
$2.8B raised. 42,000+ jobs created. Your business, better.`;

const elevatorPitch = `NorCal SBDC provides free, expert business advising to entrepreneurs across Northern California. Since 1980, we've helped our clients raise $2.8 billion in capital, create over 42,000 jobs, and build businesses that matter.`;

/* ── Oversized Material-style icon SVGs (used as cropped background accents) ── */
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const IconPerson = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const IconMic = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
  </svg>
);

export default function TemplatesPage() {
  return (
    <>
      <InteriorHero
        gradient={gradientTemplates}
        title="Templates"
        subtitle="Ready-to-use copy blocks for emails, presentations, and social channels."
      />

      <div className="bg-[#0f1c2e] py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-4"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Copy Blocks
          </h2>
          <p className="font-sans text-base text-white/50 leading-relaxed mb-12 max-w-xl">
            Click the copy button to grab any block and paste directly into your
            communications.
          </p>

          {/* ── Email Signature — Interactive Generator ── */}
          <div className="relative py-10 overflow-hidden">
            {/* Giant cropped icon */}
            <div className="absolute -right-8 -top-6 w-[220px] h-[220px] text-white/[0.03] pointer-events-none select-none">
              <IconEmail />
            </div>

            <div className="flex items-center justify-between mb-8">
              <h3 className="font-label text-sm text-white/90 uppercase tracking-[0.1em]">
                Email Signature
              </h3>
            </div>
            <EmailSignatureGenerator />
          </div>

          {/* ── Divider ── */}
          <div className="h-[2px] bg-gradient-to-r from-royal/40 via-royal/20 to-transparent" />

          {/* ── Social Bio ── */}
          <div className="relative py-10 overflow-hidden">
            {/* Giant cropped icon */}
            <div className="absolute -right-6 -bottom-4 w-[200px] h-[200px] text-white/[0.03] pointer-events-none select-none">
              <IconPerson />
            </div>

            <div className="flex items-center justify-between mb-5">
              <h3 className="font-label text-sm text-white/90 uppercase tracking-[0.1em]">
                Social Bio
              </h3>
              <CopyButton text={socialBio} />
            </div>
            <p className="font-sans text-[15px] text-white/50 leading-relaxed whitespace-pre-wrap max-w-2xl">
              {socialBio}
            </p>
          </div>

          {/* ── Divider ── */}
          <div className="h-[2px] bg-gradient-to-r from-royal/40 via-royal/20 to-transparent" />

          {/* ── Elevator Pitch ── */}
          <div className="relative py-10 overflow-hidden">
            {/* Giant cropped icon */}
            <div className="absolute -right-4 -bottom-6 w-[200px] h-[200px] text-white/[0.03] pointer-events-none select-none">
              <IconMic />
            </div>

            <div className="flex items-center justify-between mb-5">
              <h3 className="font-label text-sm text-white/90 uppercase tracking-[0.1em]">
                Elevator Pitch
              </h3>
              <CopyButton text={elevatorPitch} />
            </div>
            <p className="font-sans text-[15px] text-white/50 leading-relaxed whitespace-pre-wrap max-w-2xl">
              {elevatorPitch}
            </p>
          </div>
        </div>
      </div>

      <NextSectionLink title="Content" href="/content" />
    </>
  );
}
