import { PatternGrid } from "@/components/BrandPattern";
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";

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
      <InteriorHero pattern={<PatternGrid className="w-full h-full" />}
        title="Templates"
        subtitle="Ready-to-use copy blocks for emails, presentations, and social channels."
      />
      <div className="bg-white max-w-[780px] mx-auto px-8 md:px-12 py-16 md:py-24">
        <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10">
          Copy Blocks
        </h2>
        <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
          Click the copy button to grab any block and paste directly into your
          communications.
        </p>

        <div className="space-y-5 max-w-2xl">
          {templates.map((tpl) => (
            <div
              key={tpl.title}
              className="p-8 rounded-xl border border-black/[0.04] bg-[#f7f7f5]"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.1em]">
                  {tpl.title}
                </h3>
                <CopyButton text={tpl.content} />
              </div>
              <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed whitespace-pre-wrap">
                {tpl.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <NextSectionLink title="Content" href="/content" />
    </>
  );
}
