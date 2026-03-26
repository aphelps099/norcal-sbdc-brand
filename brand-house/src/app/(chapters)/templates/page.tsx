import CopyButton from "@/components/CopyButton";

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
    <div>
      <h1 className="font-serif text-4xl text-navy mb-2 tracking-[-0.01em]">
        Templates
      </h1>
      <p className="text-text-secondary mb-12 max-w-lg font-sans font-500">
        Ready-to-use copy blocks. Click to copy and paste directly into your
        emails, presentations, and social channels.
      </p>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-black/[0.05]" />
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-tertiary">
          Copy Blocks
        </span>
        <div className="h-px flex-1 bg-black/[0.05]" />
      </div>

      <div className="space-y-5">
        {templates.map((tpl) => (
          <div
            key={tpl.title}
            className="p-6 rounded-xl border border-black/[0.04] bg-white"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-sm font-800 text-navy">
                {tpl.title}
              </h3>
              <CopyButton text={tpl.content} />
            </div>
            <pre className="font-mono text-xs text-text-secondary leading-relaxed whitespace-pre-wrap">
              {tpl.content}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
