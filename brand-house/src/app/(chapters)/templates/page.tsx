import { gradientTemplates } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import EmailSignatureGenerator from "@/components/EmailSignatureGenerator";

const socialBio = `Free, confidential business advising for Northern California.
$2.8B raised. 42,000+ jobs created. Your business, better.`;

const elevatorPitch = `NorCal SBDC provides free, expert business advising to entrepreneurs across Northern California. Since 1980, we've helped our clients raise $2.8 billion in capital, create over 42,000 jobs, and build businesses that matter.`;

/* ── Oversized Material Symbol as a cropped bg accent ── */
function GiantIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined absolute pointer-events-none select-none text-white/[0.03] ${className}`}
      style={{ fontSize: "280px", fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

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
            <GiantIcon name="mail" className="-right-10 -top-8" />

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
            <GiantIcon name="person" className="-right-8 -bottom-10" />

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
            <GiantIcon name="campaign" className="-right-6 -bottom-12" />

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
