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
      <h1 className="font-serif text-4xl font-bold text-cream mb-2">
        Templates
      </h1>
      <p className="text-cream/40 mb-12 max-w-lg">
        Ready-to-use copy blocks. Click to copy and paste directly into your
        emails, presentations, and social channels.
      </p>

      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-cream/10" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-cream/30">
          Copy Blocks
        </span>
        <div className="h-px flex-1 bg-cream/10" />
      </div>

      <div className="space-y-6">
        {templates.map((tpl) => (
          <div
            key={tpl.title}
            className="p-6 rounded-xl border border-cream/5 bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sans text-sm font-medium text-cream">
                {tpl.title}
              </h3>
              <CopyButton text={tpl.content} />
            </div>
            <pre className="font-mono text-xs text-cream/50 leading-relaxed whitespace-pre-wrap">
              {tpl.content}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
