import InteriorHero from "@/components/InteriorHero";
import NextSectionLink from "@/components/NextSectionLink";

const stories = [
  {
    name: "Kendra Baker & Zachary Davis",
    business: "The Penny Ice Creamery",
    center: "Santa Cruz SBDC",
    quote:
      "Our SBDC advisor helped us secure funding and gave us the confidence to expand into a second location.",
    challenge: "Needed capital to expand from a single storefront to two locations while maintaining product quality.",
    outcome: "Secured $350K in financing, opened second location, created 12 new jobs.",
    service: "Capital Access",
    industry: "Food & Beverage",
  },
  {
    name: "Jeremy & Aspen Logan",
    business: "The Color Mill",
    center: "Mendocino SBDC",
    quote:
      "The SBDC didn't just help us with a business plan — they helped us believe we could actually do this.",
    challenge: "First-time business owners with a creative vision but no experience navigating permits, financing, or operations.",
    outcome: "Launched successfully, built a loyal customer base, and became a local employer in their community.",
    service: "Business Planning",
    industry: "Creative Services",
  },
  {
    name: "Mayra Flores",
    business: "Flores Micheladas",
    center: "Sierra SBDC",
    quote:
      "My advisor understood my culture and my product. She helped me turn a family recipe into a real business.",
    challenge: "Transitioning from farmers market vendor to a licensed, scalable food production business.",
    outcome: "Obtained commercial licensing, expanded distribution, and tripled revenue within 18 months.",
    service: "Licensing & Compliance",
    industry: "Food & Beverage",
  },
  {
    name: "Sean Dewill",
    business: "Dirty Dog Daycare",
    center: "Mendocino SBDC",
    quote:
      "Mendocino SBDC and specifically Business Advisor Steve Lamb have been an important part in the growth and direction of my business.",
    challenge: "Needed guidance on business strategy, financial planning, and growth management for a pet services company.",
    outcome: "Sustained growth, improved financial management, and expanded service offerings.",
    service: "Business Strategy",
    industry: "Pet Services",
  },
  {
    name: "Henry Kalebjian",
    business: "Henry's House of Coffee",
    center: "San Francisco SBDC",
    quote:
      "Having an advisor who genuinely cared about our family business made all the difference during a tough time.",
    challenge: "Navigating pandemic-era challenges while maintaining a multi-generational family coffee business.",
    outcome: "Pivoted to online sales, secured emergency funding, and preserved all staff positions.",
    service: "Crisis Recovery",
    industry: "Food & Beverage",
  },
  {
    name: "Rory & Shala Cox",
    business: "Yubalance",
    center: "San Francisco SBDC",
    quote:
      "The SBDC connected us with resources we didn't even know existed. That access changed everything.",
    challenge: "Starting a wellness business with limited knowledge of available small business resources and funding options.",
    outcome: "Connected with grant opportunities, developed a sustainable business model, and built a growing client base.",
    service: "Resource Navigation",
    industry: "Health & Wellness",
  },
];

export default function StoriesPage() {
  return (
    <>
      <InteriorHero
        title="Stories"
        subtitle="In 300+ client success stories, nobody says 'the SBDC helped me.' They say 'Maria helped me' or 'David helped me.' The service is the person."
      />

      <div className="bg-white py-16 md:py-24">
        {/* Intro */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-20">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-6">
            Your Business People
          </h2>
          <p className="font-sans text-lg md:text-xl text-text-secondary font-500 leading-[1.7] max-w-[640px]">
            Every number in our impact report has a name behind it. These are
            real businesses, built by real people, supported by advisors who show
            up like it&rsquo;s personal &mdash; because it is.
          </p>
        </div>

        {/* Impact Stats Bar */}
        <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-black/[0.06]">
            {[
              { value: "$547M", label: "Capital raised last year" },
              { value: "42,000+", label: "Jobs created" },
              { value: "64,000+", label: "Clients served" },
              { value: "36", label: "Counties covered" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-8 px-6 text-center ${
                  i < 3 ? "border-r border-black/[0.06]" : ""
                }`}
              >
                <p className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.03em] mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-[11px] font-800 uppercase tracking-[0.12em] text-text-tertiary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Cards */}
        <div className="max-w-[960px] mx-auto px-8 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-12">
            Client Spotlights
          </h2>
          <div className="space-y-0">
            {stories.map((story, i) => (
              <div
                key={story.name}
                className={`py-10 md:py-14 ${
                  i < stories.length - 1
                    ? "border-b border-black/[0.06]"
                    : ""
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-navy tracking-[-0.01em]">
                      {story.business}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary font-500 mt-1">
                      {story.name}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1.5 border border-navy/[0.1] font-sans text-[10px] font-800 uppercase tracking-[0.1em] text-navy/50">
                      {story.center}
                    </span>
                    <span className="inline-block px-3 py-1.5 border border-royal/[0.15] font-sans text-[10px] font-800 uppercase tracking-[0.1em] text-royal/60">
                      {story.service}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-lg md:text-xl text-navy leading-snug tracking-[-0.01em] mb-8 max-w-2xl">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {/* Challenge → Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/30 block mb-2">
                      Challenge
                    </span>
                    <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-royal/50 block mb-2">
                      Outcome
                    </span>
                    <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed">
                      {story.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Template */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-6">
            Writing a Success Story
          </h2>
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
            When documenting client outcomes, use this structure to keep stories
            consistent, human, and impactful across all centers.
          </p>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "The Person",
                desc: "Lead with the client's name, their business, and one sentence about who they are. Make them the protagonist — not the SBDC.",
              },
              {
                step: "02",
                title: "The Challenge",
                desc: "What problem brought them to us? Be specific. 'Needed help with their business' says nothing. 'Needed $200K to open a second location' says everything.",
              },
              {
                step: "03",
                title: "The Advisor",
                desc: "Name the advisor. Describe what they did — not in abstract terms, but concretely. 'Helped restructure their P&L' beats 'provided comprehensive support.'",
              },
              {
                step: "04",
                title: "The Outcome",
                desc: "Quantify whenever possible. Revenue growth, jobs created, capital secured, time saved. End with a client quote — their words carry more weight than ours.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="font-mono text-sm text-navy/20 font-700 mt-0.5 shrink-0 w-8">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.06em] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextSectionLink title="Glossary" href="/glossary" />
    </>
  );
}
