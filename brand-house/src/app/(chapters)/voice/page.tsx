
import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";

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
      <InteriorHero bg="#A73B44"
        title="Voice & Tone"
        subtitle="Our voice is the personality behind every word — confident, human, and always rooted in expertise."
      />
      {/* Brand Personality — dark navy bg */}
      <div className="bg-[#0f1c2e] py-12 md:py-16 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
        <div className="mb-16">
          <div className="max-w-[780px] mx-auto px-8 md:px-12">
            <h2
              className="tracking-[-0.02em] text-white/90 mb-6"
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 500,
                fontSize: "clamp(26px, 3.2vw, 36px)",
              }}
            >
              Brand Personality
            </h2>
            <p className="font-sans text-lg md:text-xl text-white/50 leading-[1.7] max-w-[640px] mb-12">
              We are <strong className="text-white/80">confident</strong> but never
              arrogant. <strong className="text-white/80">Expert</strong> but never
              condescending. <strong className="text-white/80">Warm</strong> but never
              unprofessional. We speak like the advisor you&rsquo;d actually want to have
              coffee with.
            </p>
          </div>
          <div className="max-w-[960px] mx-auto px-8 md:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
              {voiceAttributes.map((attr, i) => (
                <div
                  key={attr.trait}
                  className={`py-6 px-6 ${i < voiceAttributes.length - 1 ? "border-r border-white/[0.06]" : ""}`}
                >
                  <h3
                    className="text-white/90 mb-2 tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "clamp(20px, 2vw, 24px)",
                    }}
                  >
                    {attr.trait}
                  </h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 md:py-16">

        {/* Messaging Framework */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-16">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-10">
            Messaging Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <span className="font-label text-[12px] uppercase tracking-[0.2em] text-royal mb-3 block">
                Tagline
              </span>
              <p className="font-sans text-2xl text-navy">
                Your Business, <em className="text-royal italic">Better.</em>
              </p>
            </div>
            <div>
              <span className="font-label text-[12px] uppercase tracking-[0.2em] text-royal mb-3 block">
                Campaign Pillars
              </span>
              <div className="space-y-2.5">
                <p className="font-sans text-sm text-text-secondary">
                  <strong className="text-navy">Your Business, Connected</strong> — Network, resources, community
                </p>
                <p className="font-sans text-sm text-text-secondary">
                  <strong className="text-navy">Your Business, People</strong> — Advisors, mentors, real humans
                </p>
                <p className="font-sans text-sm text-text-secondary">
                  <strong className="text-navy">Your Business, Funded</strong> — Capital access, loans, grants
                </p>
              </div>
            </div>
          </div>

          <span className="font-label text-[12px] uppercase tracking-[0.2em] text-navy/30 mb-5 block">
            Headline Patterns
          </span>
          <div className="space-y-3">
            {headlineExamples.map((h, i) => (
              <p key={i} className="font-sans text-lg md:text-xl text-navy leading-snug">
                &ldquo;{h.text} <em className="text-royal italic">{h.emphasis}</em>&rdquo;
              </p>
            ))}
          </div>
        </div>

        {/* Tone by Context */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-6">
          <h2 className="font-sans text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-8">
            Tone by Context
          </h2>
        </div>
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <div className="border border-black/[0.08] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-[140px_1fr_2fr] md:grid-cols-[160px_1fr_2fr] bg-navy">
              <div className="font-label text-[10px] uppercase tracking-[0.18em] text-white/50 px-5 py-3.5">
                Context
              </div>
              <div className="font-label text-[10px] uppercase tracking-[0.18em] text-white/50 px-5 py-3.5 border-l border-white/[0.08]">
                Tone
              </div>
              <div className="font-label text-[10px] uppercase tracking-[0.18em] text-white/50 px-5 py-3.5 border-l border-white/[0.08]">
                Example
              </div>
            </div>
            {/* Table rows */}
            {toneTable.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[140px_1fr_2fr] md:grid-cols-[160px_1fr_2fr] items-center ${
                  i < toneTable.length - 1 ? "border-b border-black/[0.06]" : ""
                }`}
              >
                {/* Context — pill */}
                <div className="px-5 py-4">
                  <span className="inline-block px-3 py-1.5 border border-navy/[0.12] font-label text-[11px] uppercase tracking-[0.08em] text-navy/60">
                    {row.context}
                  </span>
                </div>
                {/* Tone */}
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <span className="font-sans text-[15px] text-text-secondary">
                    {row.tone}
                  </span>
                </div>
                {/* Example — large, confident, NOT italic */}
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <p className="font-sans text-lg md:text-xl text-navy leading-snug tracking-[-0.01em]">
                    &ldquo;{row.example}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextSectionLink title="Photography" href="/photography" />
    </>
  );
}
