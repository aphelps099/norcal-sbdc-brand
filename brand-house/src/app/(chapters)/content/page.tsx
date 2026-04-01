import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";

const socialPrinciples = [
  {
    title: "Be Authentic",
    desc: "SBDC promotes authentic transparency. Do not blog anonymously or use pseudonyms when posting on behalf of SBDC. Your name builds trust.",
  },
  {
    title: "Know Your Audience",
    desc: "Who are you trying to reach? Tailor messages that add value and increase engagement. A startup founder needs different content than a city councilmember.",
  },
  {
    title: "Be Consistent, But Make It Count",
    desc: "The best way to grow your audience is by regularly updating with interesting, relevant information. Quality over volume — every post should earn attention.",
  },
  {
    title: "Think Before You Post",
    desc: "Consider content carefully. Anything you publish exists permanently, even if you delete it. Would this make sense on the front page of the local paper?",
  },
  {
    title: "Encourage Conversation",
    desc: "Leave the 'social' in social media. Don't block comments just because they're negative. Negative comments are sometimes an opportunity for meaningful discussion.",
  },
  {
    title: "Protect Privacy",
    desc: "Never disclose personal, confidential, or proprietary information about clients, advisors, or partners. Client information is subject to the SBA's Client Information Policy.",
  },
];

const platformGuidance = [
  {
    platform: "LinkedIn",
    tone: "Professional, data-driven",
    frequency: "2–3 posts per week",
    focus: "Impact stats, advisor spotlights, industry insights, success stories, event recaps",
    charLimit: "~1,300 characters for optimal engagement",
  },
  {
    platform: "Facebook",
    tone: "Warm, community-focused",
    frequency: "3–5 posts per week",
    focus: "Event promotion, client spotlights, behind-the-scenes, local business highlights",
    charLimit: "~80 characters for best click-through in link posts",
  },
  {
    platform: "Instagram",
    tone: "Visual, aspirational",
    frequency: "3–4 posts per week",
    focus: "Client photos, event moments, quote cards, reels with advisor tips",
    charLimit: "~125 characters before 'more' truncation",
  },
  {
    platform: "X / Twitter",
    tone: "Punchy, topical",
    frequency: "Daily acceptable",
    focus: "Quick stats, event live-tweeting, links to resources, industry news",
    charLimit: "280 characters max",
  },
];

const emailBestPractices = [
  {
    title: "Treat Access as a Privilege",
    desc: "Clients subscribed to your list — they gave you their attention willingly. Deliver a high-quality experience they can count on.",
  },
  {
    title: "Subject Lines Matter Most",
    desc: "Your subject line determines whether the email gets opened. Be specific and create urgency. 'Free Workshop: Access to Capital — Feb 15' beats 'February Newsletter.'",
  },
  {
    title: "One Clear Call to Action",
    desc: "Every email should have one primary goal. Don't split attention across five different asks.",
  },
  {
    title: "Mobile-First Design",
    desc: "Over 60% of emails are opened on mobile. Use single-column layouts, large tap targets, and keep body copy concise.",
  },
  {
    title: "Include Required Disclaimers",
    desc: "Every client and partner-facing mass email must include the SBA and ADA disclaimer in the footer. No exceptions.",
  },
];

const sbaDisclaimer = `Funded in part through a cooperative agreement with the US Small Business Administration (SBA). Funded in part through a grant with the Governor's Office of Business and Economic Development. All opinions, conclusions, or recommendations expressed are those of the author(s) and do not necessarily reflect the view of the SBA, California Office of the Small Business Advocate or Cal Poly Humboldt sponsored programs.

Reasonable accommodations for persons with disabilities will be made if requested at least 72 hours in advance. Contact: [contact name] at [contact phone number] or email: [contact email].`;

const commentPolicy = `The [Center Name] SBDC has created this page with the intention of providing a format for discussion about news and events related to [subject matter]. [Center Name] SBDC reserves the right to remove any content that is deemed, in our sole view, commercial, harmful, inappropriate, erroneous, harassing, libelous, threatening, discriminatory, or wildly off-topic. [Center Name] SBDC reserves the right to remove you from the community/block you from posting after the second offense. [Center Name] SBDC is not responsible for the content posted by others on this page; please note that community-contributed content is the opinion of the specific author and does not necessarily represent the opinions of [Center Name] SBDC.

Thank you for your participation and for your role in creating a safe and dynamic environment for our online community.`;

const webPublishingRules = [
  {
    title: "Link Text Describes the Destination",
    good: "Apply to the graduate program.",
    bad: "Click here to apply.",
  },
  {
    title: "Don't Bury Important Links",
    good: "Use landing pages with clearly visible lists of links.",
    bad: "Hiding key actions inside long paragraphs of text.",
  },
  {
    title: "Prioritize Information",
    good: "Put the most important information at the top of the page.",
    bad: "Forcing visitors to scroll through layers of content to find what they need.",
  },
];

export default function ContentPage() {
  return (
    <>
      <InteriorHero
        title="Content"
        subtitle="Guidelines for social media, newsletters, and web publishing — so every center shows up with one unified voice."
      />

      <div className="bg-white py-16 md:py-24">
        {/* Social Media Principles */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-24">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-4">
            Social Media Principles
          </h2>
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-12 max-w-xl">
            We build our social media presence on two basic principles:
            content that&rsquo;s relevant and compelling to our audiences, and
            being authentic. All of our posts reflect who we are as a network.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {socialPrinciples.map((p) => (
              <div key={p.title}>
                <h3 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.06em] mb-2">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Guidance Table */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-6">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-8">
            Platform Guidance
          </h2>
        </div>
        <div className="max-w-[960px] mx-auto px-8 md:px-12 mb-24">
          <div className="border border-black/[0.08] overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-[120px_1fr_1fr_1fr] min-w-[640px] bg-navy">
              {["Platform", "Tone & Frequency", "Content Focus", "Character Limit"].map(
                (h, i) => (
                  <div
                    key={h}
                    className={`font-sans text-[10px] font-800 uppercase tracking-[0.18em] text-white/50 px-5 py-3.5 ${
                      i > 0 ? "border-l border-white/[0.08]" : ""
                    }`}
                  >
                    {h}
                  </div>
                )
              )}
            </div>
            {/* Rows */}
            {platformGuidance.map((row, i) => (
              <div
                key={row.platform}
                className={`grid grid-cols-[120px_1fr_1fr_1fr] min-w-[640px] items-start ${
                  i < platformGuidance.length - 1
                    ? "border-b border-black/[0.06]"
                    : ""
                }`}
              >
                <div className="px-5 py-4">
                  <span className="font-sans text-sm font-800 text-navy">
                    {row.platform}
                  </span>
                  <p className="font-sans text-[11px] text-text-tertiary font-500 mt-0.5">
                    {row.frequency}
                  </p>
                </div>
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <span className="font-sans text-sm font-500 text-text-secondary">
                    {row.tone}
                  </span>
                </div>
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <span className="font-sans text-sm font-500 text-text-secondary">
                    {row.focus}
                  </span>
                </div>
                <div className="px-5 py-4 border-l border-black/[0.06]">
                  <code className="font-mono text-[11px] text-text-tertiary">
                    {row.charLimit}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responding to Comments */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-24">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-6">
            Responding to Comments
          </h2>
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-8 max-w-xl">
            It&rsquo;s best to respond publicly to negative comments, then move
            the discussion to a private space as quickly as possible.
          </p>
          <div className="p-8 bg-[#f7f7f5] border border-black/[0.04] rounded-xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.1em] text-navy">
                Template Response
              </span>
            </div>
            <p className="font-serif text-base text-navy italic leading-relaxed">
              &ldquo;We are so sorry you&rsquo;ve had a negative experience. Please
              private message us with your email address so we can help you
              resolve the issue.&rdquo;
            </p>
          </div>

          <div className="p-8 bg-[#f7f7f5] border border-black/[0.04] rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.1em] text-navy">
                Facebook Comments Policy
              </span>
              <CopyButton text={commentPolicy} />
            </div>
            <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed whitespace-pre-wrap">
              {commentPolicy}
            </p>
          </div>
        </div>

        {/* Email Best Practices */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12 mb-24">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-4">
            Email Communications
          </h2>
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
            Our email communication is the most direct point of digital
            connection with our clients. Treat it as a privilege.
          </p>

          <div className="space-y-6 mb-12">
            {emailBestPractices.map((item) => (
              <div key={item.title}>
                <h3 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.06em] mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Required Disclaimer */}
          <div className="p-8 bg-[#f7f7f5] border border-black/[0.04] rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-[11px] font-800 uppercase tracking-[0.1em] text-navy">
                Required SBA &amp; ADA Disclaimer
              </span>
              <CopyButton text={sbaDisclaimer} />
            </div>
            <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed whitespace-pre-wrap">
              {sbaDisclaimer}
            </p>
          </div>
        </div>

        {/* Web Publishing */}
        <div className="max-w-[780px] mx-auto px-8 md:px-12">
          <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em] mb-8">
            Web Publishing
          </h2>

          <div className="space-y-8">
            {webPublishingRules.map((rule) => (
              <div key={rule.title}>
                <h3 className="font-sans text-sm font-800 text-navy uppercase tracking-[0.06em] mb-3">
                  {rule.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2 items-start">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00685E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="font-sans text-sm text-text-secondary font-500">
                      {rule.good}
                    </span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#A73B44"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span className="font-sans text-sm text-text-secondary font-500">
                      {rule.bad}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextSectionLink title="Calendar" href="/calendar" />
    </>
  );
}
