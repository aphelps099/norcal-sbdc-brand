
import InteriorHero from "@/components/InteriorHero";
import BrandVideoPlayer from "@/components/BrandVideoPlayer";
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

      {/* Stats summary row — inspired by norcalsbdc.org/brand/messaging.html */}
      <div className="bg-[#0f1c2e] border-t border-white/[0.06]">
        <div className="max-w-[960px] mx-auto px-8 md:px-12 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1", label: "Primary Tagline" },
              { value: "3", label: "Campaign Pillars" },
              { value: "4", label: "Voice Attributes" },
              { value: "5", label: "Tone Contexts" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-white/70 leading-none mb-2"
                  style={{ fontFamily: "var(--sans)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500 }}
                >
                  {stat.value}
                </p>
                <p className="font-label text-[10px] uppercase tracking-[0.14em] text-white/30">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Personality — dark navy bg */}
      <div className="bg-[#0f1c2e] py-12 md:py-16 relative overflow-hidden">
        <SbdcWatermark className="absolute -right-[8%] top-[10%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none" opacity={0.035} />
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
            <p className="font-sans text-lg md:text-xl text-white/50 leading-[1.7] max-w-[640px] mb-10">
              We are <strong className="text-white/80">confident</strong> but never
              arrogant. <strong className="text-white/80">Expert</strong> but never
              condescending. <strong className="text-white/80">Warm</strong>{" "}but never
              unprofessional. We speak like the advisor you&rsquo;d actually want to have
              coffee with.
            </p>

            {/* Brand video — YBP 2025 */}
            <div className="overflow-hidden" style={{ borderRadius: "2px" }}>
              <BrandVideoPlayer videoId="5s8fBXxKaJc" />
            </div>
          </div>
      </div>

      {/* Voice Attributes — still navy, but visually separated below the video */}
      <div className="bg-[#0f1c2e] pb-12 md:pb-16">
        <div className="max-w-[960px] mx-auto px-8 md:px-12 pt-10">
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

      {/* Messaging Framework — cream bg */}
      <div className="py-14 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">Framework</p>
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>Messaging Framework</h2>
          </div>

          {/* Tagline + Pillars side by side */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-px border border-navy/[0.08] overflow-hidden mb-6">
            <div className="bg-white p-6 md:p-8">
              <p className="font-label text-[10px] uppercase tracking-[0.18em] text-royal mb-4">Primary Tagline</p>
              <p className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500 }}>
                Your Business, <em className="text-royal italic">Better.</em>
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 border-t md:border-t-0 md:border-l border-navy/[0.07]">
              <p className="font-label text-[10px] uppercase tracking-[0.18em] text-royal mb-4">Campaign Pillars</p>
              <div className="space-y-3">
                {[
                  { name: "Your Business, Connected", sub: "Network, resources, community" },
                  { name: "Your Business, People", sub: "Advisors, mentors, real humans" },
                  { name: "Your Business, Funded", sub: "Capital access, loans, grants" },
                ].map((p) => (
                  <div key={p.name} className="flex items-baseline gap-3">
                    <span className="font-sans text-[14px] text-navy" style={{ fontWeight: 500 }}>{p.name}</span>
                    <span className="font-sans text-[12px] text-navy/35 shrink-0">{p.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Headline patterns */}
          <div className="border border-navy/[0.08] overflow-hidden">
            <div className="bg-navy px-6 py-3">
              <p className="font-label text-[10px] uppercase tracking-[0.18em] text-white/40">Headline Patterns</p>
            </div>
            <div className="divide-y divide-navy/[0.06]">
              {headlineExamples.map((h, i) => (
                <div key={i} className="px-6 py-4 bg-white">
                  <p className="font-sans text-navy leading-snug tracking-[-0.01em]" style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
                    &ldquo;{h.text} <em className="text-royal italic">{h.emphasis}</em>&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tone by Context — white bg */}
      <div className="bg-white py-14 md:py-20">
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">Application</p>
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>Tone by Context</h2>
          </div>
          <div className="border border-black/[0.08] overflow-hidden">
            <div className="grid grid-cols-[140px_140px_1fr] md:grid-cols-[160px_160px_1fr] bg-navy">
              <div className="font-label text-[10px] uppercase tracking-[0.18em] text-white/40 px-5 py-3.5">Context</div>
              <div className="font-label text-[10px] uppercase tracking-[0.18em] text-white/40 px-5 py-3.5 border-l border-white/[0.08]">Tone</div>
              <div className="font-label text-[10px] uppercase tracking-[0.18em] text-white/40 px-5 py-3.5 border-l border-white/[0.08]">Example</div>
            </div>
            {toneTable.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[140px_140px_1fr] md:grid-cols-[160px_160px_1fr] items-center ${
                  i < toneTable.length - 1 ? "border-b border-black/[0.06]" : ""
                }`}
              >
                <div className="px-5 py-4">
                  <span className="inline-block px-2.5 py-1 border border-navy/[0.12] font-label text-[10px] uppercase tracking-[0.08em] text-navy/55">
                    {row.context}
                  </span>
                </div>
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <span className="font-sans text-[13px] text-navy/60">{row.tone}</span>
                </div>
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <p className="font-sans text-[15px] text-navy leading-snug tracking-[-0.01em]">
                    &ldquo;{row.example}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Campaign Strategy — cream bg */}
      <div className="py-14 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <SbdcWatermark
          className="absolute -right-[6%] top-[8%] w-[32vw] max-w-[380px] text-navy pointer-events-none select-none"
          opacity={0.03}
        />
        <div className="max-w-[960px] mx-auto px-8 md:px-12 relative z-10">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">Campaign Framework</p>
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>Strategy</h2>
          </div>

          <div className="border-t border-navy/[0.08]">
            {[
              { num: "01", title: "Reposition", desc: "Shift public perception from government program to trusted business growth partner. Every touchpoint reinforces that NorCal SBDC is the team behind the team." },
              { num: "02", title: "Unify", desc: "Give all 14 centers a shared vocabulary. People, Funded, Connected becomes the lens for every story, every post, every workshop invite." },
              { num: "03", title: "Convert", desc: "Turn brand awareness into consultation bookings. Every piece of content ladders to one CTA: talk to an advisor." },
            ].map((goal) => (
              <div key={goal.num} className="grid grid-cols-1 md:grid-cols-[80px_200px_1fr] gap-4 md:gap-8 py-7 border-b border-navy/[0.06] last:border-b-0 items-baseline">
                <p className="font-label text-[11px] uppercase tracking-[0.12em] text-[#c4543a]/60">{goal.num}</p>
                <h3 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 500 }}>{goal.title}</h3>
                <p className="font-sans text-navy/50 text-[14px] leading-relaxed max-w-[520px]">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Three Pillars — white bg */}
      <div className="bg-white py-14 md:py-20 relative overflow-hidden">
        <span
          className="material-symbols-outlined absolute -left-10 bottom-[-5%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(55vw, 560px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          hub
        </span>
        <div className="max-w-[960px] mx-auto px-8 md:px-12 relative z-10">
          <div className="border-t border-navy/10 pt-6 mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">Brand Architecture</p>
            <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>The Three Pillars</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px border border-navy/[0.06] overflow-hidden">
            {[
              {
                icon: "person",
                name: "People",
                sub: "Your Business People",
                desc: "The advisors, mentors, and specialists who show up for entrepreneurs every day. This pillar humanizes the network — it's not a program, it's people.",
                proof: "63 advisors across 14 centers. Industry specialists in manufacturing, tech, food & beverage. Bilingual advisors serving diverse communities.",
                color: "#004290",
              },
              {
                icon: "account_balance",
                name: "Funded",
                sub: "Your Business Funded",
                desc: "Capital access is the engine. Loan packaging, SBA lending guidance, grant readiness, and investor connections that turn plans into action.",
                proof: "$240M+ in capital accessed. Partnerships with 50+ lenders. SBA loan packaging with a strong approval rate.",
                color: "#A73B44",
              },
              {
                icon: "hub",
                name: "Connected",
                sub: "Your Business Connected",
                desc: "The network effect. Workshops, peer cohorts, lender introductions, and referral pathways that plug entrepreneurs into the ecosystem they need.",
                proof: "200+ workshops annually. Partnerships with chambers, cities, and economic development orgs. Referral network spanning 36 counties.",
                color: "#5684BA",
              },
            ].map((pillar) => (
              <div key={pillar.name} className="bg-white p-6 flex flex-col">
                <span
                  className="material-symbols-outlined text-navy mb-3"
                  style={{ fontSize: 28, fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >{pillar.icon}</span>
                <h3 className="font-sans text-navy text-xl tracking-[-0.01em] mb-0.5" style={{ fontWeight: 500 }}>{pillar.name}</h3>
                <p className="font-label text-[10px] uppercase tracking-[0.08em] text-navy/30 mb-3">{pillar.sub}</p>
                <p className="font-sans text-navy/50 text-[14px] leading-relaxed mb-4">{pillar.desc}</p>
                <div className="mt-auto pt-4 border-t border-navy/[0.06]">
                  <p className="font-label text-[9px] uppercase tracking-[0.08em] text-navy/30 mb-2">Proof Points</p>
                  <p className="font-sans text-navy/45 text-[13px] leading-relaxed">{pillar.proof}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Messages — navy bg */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <SbdcWatermark className="absolute -right-[8%] top-[15%] w-[35vw] max-w-[420px] text-white pointer-events-none select-none" opacity={0.03} />
        <div className="max-w-[960px] mx-auto px-8 md:px-12 py-14 md:py-20 relative z-10">
          <div className="border-t border-white/[0.08] pt-6 mb-12">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/30 mb-2">Messaging</p>
            <h2 className="font-sans text-white/90 tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>Key Messages</h2>
          </div>

          <div className="space-y-0 border-t border-white/[0.06] mb-12">
            {[
              { msg: "Behind every thriving small business is the right people, the right capital, and the right connections. NorCal SBDC delivers all three — at no fee.", num: "01" },
              { msg: "We don\u2019t just advise. We sit across the table, roll up our sleeves, and help you build something that lasts.", num: "02" },
              { msg: "8,500+ businesses. $240M+ in capital. 1,900+ jobs. That\u2019s the NorCal SBDC difference.", num: "03" },
            ].map((item) => (
              <div key={item.num} className="grid grid-cols-[48px_1fr] gap-6 md:gap-10 py-7 border-b border-white/[0.06] items-start">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-[#c4543a]/60 pt-1">{item.num}</p>
                <p
                  className="font-sans text-white/70 leading-[1.65] max-w-[640px]"
                  style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
                >
                  &ldquo;{item.msg}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {["#YourBusinessBetter", "#NorCalSBDC", "#PeopleFundedConnected", "#SmallBusinessGrowth"].map((tag) => (
              <span key={tag} className="font-label text-[10px] uppercase tracking-[0.08em] px-3 py-1.5 border border-white/[0.1] text-white/30">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <NextSectionLink title="Photography" href="/photography" />
    </>
  );
}
