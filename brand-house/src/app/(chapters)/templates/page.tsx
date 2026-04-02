import { gradientTemplates } from "@/lib/page-gradients";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

const emailSignature = `[Name] | [Title]
NorCal Small Business Development Center
[phone] | [email]
norcalsbdc.org`;

const socialBio = `Free, confidential business advising for Northern California.
$2.8B raised. 42,000+ jobs created. Your business, better.`;

const elevatorPitch = `NorCal SBDC provides free, expert business advising to entrepreneurs across Northern California. Since 1980, we've helped our clients raise $2.8 billion in capital, create over 42,000 jobs, and build businesses that matter.`;

const templates = [
  { title: "Email Signature", content: emailSignature },
  { title: "Social Bio", content: socialBio },
  { title: "Elevator Pitch", content: elevatorPitch },
];

export default function TemplatesPage() {
  return (
    <>
      <InteriorHero gradient={gradientTemplates}
        title="Templates"
        subtitle="Ready-to-use copy blocks for emails, presentations, and social channels."
      />
      <div className="bg-[#0f1c2e] py-12 md:py-16 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-10"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Copy Blocks
          </h2>
          <p className="font-serif text-base text-white/50 leading-relaxed mb-10 max-w-xl">
            Click the copy button to grab any block and paste directly into your
            communications.
          </p>

          <div className="space-y-5 max-w-2xl">
            {templates.map((tpl) => (
              <div
                key={tpl.title}
                className="p-8 rounded-xl border border-white/[0.06] bg-white/[0.04]"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-sans text-sm font-800 text-white/90 uppercase tracking-[0.1em]">
                    {tpl.title}
                  </h3>
                  <CopyButton text={tpl.content} />
                </div>
                <p className="font-serif text-sm text-white/50 leading-relaxed whitespace-pre-wrap">
                  {tpl.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextSectionLink title="Content" href="/content" />
    </>
  );
}
