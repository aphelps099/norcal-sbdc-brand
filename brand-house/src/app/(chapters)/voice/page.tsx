import InteriorHero from "@/components/InteriorHero";

const voiceAttributes = [
  { trait: "Direct", description: "Lead with the point. No corporate filler." },
  { trait: "Human", description: "Write like a person, not an institution." },
  { trait: "Knowing", description: "We have the data and the experience to back it up." },
  { trait: "Optimistic", description: "We believe in the businesses we serve." },
];

const headlineExamples = [
  { text: "What's free advice worth? $547 million,", emphasis: "last year." },
  { text: "Your business deserves someone who", emphasis: "gets it." },
  { text: "Don't settle for", emphasis: "generic advice." },
  { text: "Real clients. Real", emphasis: "results." },
];

const toneTable = [
  { context: "Homepage hero", tone: "Bold, aspirational", example: "Your business deserves someone who gets it." },
  { context: "Impact stats", tone: "Confident, data-driven", example: "Since 1980, we've helped raise $2.8B in capital." },
  { context: "Client stories", tone: "Warm, authentic", example: "When Maria came to us, she had a recipe and a dream." },
  { context: "Social media", tone: "Conversational, punchy", example: "42,000 jobs created. And counting." },
  { context: "Email outreach", tone: "Professional, helpful", example: "We noticed you haven't scheduled your free consultation." },
];

export default function VoicePage() {
  return (
    <>
      <InteriorHero
        title="Voice & Tone"
        subtitle="Our voice is the personality behind every word — confident, human, and always rooted in expertise."
      />
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Brand Personality */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">01</span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-6">
            Brand Personality
          </h2>
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed max-w-2xl mb-10">
            We are <strong className="font-800 text-navy">confident</strong> but never arrogant.{" "}
            <strong className="font-800 text-navy">Expert</strong> but never condescending.{" "}
            <strong className="font-800 text-navy">Warm</strong> but never unprofessional. We speak
            like the advisor you&rsquo;d actually want to have coffee with — someone who&rsquo;s been
            there, done that, and genuinely wants to help.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {voiceAttributes.map((attr) => (
              <div
                key={attr.trait}
                className="p-6 rounded-xl border border-black/[0.04] bg-white"
              >
                <h3 className="font-serif text-xl text-navy mb-2">{attr.trait}</h3>
                <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed">
                  {attr.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Messaging Framework */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">02</span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Messaging Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-royal mb-4 block">
                Tagline
              </span>
              <p className="font-serif text-3xl text-navy">
                Your Business, <em className="text-royal italic">Better.</em>
              </p>
            </div>
            <div>
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-royal mb-4 block">
                Campaign Pillars
              </span>
              <div className="space-y-3">
                <p className="font-sans text-sm font-500 text-text-secondary">
                  <strong className="font-800 text-navy">Your Business, Connected</strong> — Network, resources, community
                </p>
                <p className="font-sans text-sm font-500 text-text-secondary">
                  <strong className="font-800 text-navy">Your Business, People</strong> — Advisors, mentors, real humans
                </p>
                <p className="font-sans text-sm font-500 text-text-secondary">
                  <strong className="font-800 text-navy">Your Business, Funded</strong> — Capital access, loans, grants
                </p>
              </div>
            </div>
          </div>

          {/* Headline patterns */}
          <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30 mb-6 block">
            Headline Patterns
          </span>
          <div className="space-y-4 max-w-2xl">
            {headlineExamples.map((h, i) => (
              <p key={i} className="font-serif text-xl md:text-2xl text-navy leading-snug">
                &ldquo;{h.text} <em className="text-royal italic">{h.emphasis}</em>&rdquo;
              </p>
            ))}
          </div>
        </div>

        {/* Tone by Context */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">03</span>
            <div className="h-[1px] flex-1 bg-navy/8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em] mb-10">
            Tone by Context
          </h2>
          <div className="rounded-xl border border-black/[0.04] bg-white overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_2fr] gap-0 text-sm">
              {/* Header row */}
              <div className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/40 p-5 border-b border-black/[0.04]">
                Context
              </div>
              <div className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/40 p-5 border-b border-black/[0.04]">
                Tone
              </div>
              <div className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/40 p-5 border-b border-black/[0.04]">
                Example
              </div>
              {toneTable.map((row, i) => (
                <>
                  <div key={`ctx-${i}`} className={`font-sans font-800 text-navy p-5 ${i < toneTable.length - 1 ? "border-b border-black/[0.04]" : ""}`}>
                    {row.context}
                  </div>
                  <div key={`tone-${i}`} className={`font-sans font-500 text-text-secondary p-5 ${i < toneTable.length - 1 ? "border-b border-black/[0.04]" : ""}`}>
                    {row.tone}
                  </div>
                  <div key={`ex-${i}`} className={`font-serif text-navy/70 italic p-5 ${i < toneTable.length - 1 ? "border-b border-black/[0.04]" : ""}`}>
                    &ldquo;{row.example}&rdquo;
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
