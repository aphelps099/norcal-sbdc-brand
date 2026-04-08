
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";

const socialPrinciples = [
  {
    title: "Be Authentic",
    desc: "Don't blog anonymously or use pseudonyms. Your name builds trust. SBDC promotes authentic transparency.",
    icon: "verified",
  },
  {
    title: "Know Your Audience",
    desc: "A startup founder needs different content than a city councilmember. Tailor messages that add value.",
    icon: "groups",
  },
  {
    title: "Be Consistent",
    desc: "Grow your audience with regular, relevant updates. Quality over volume — every post should earn attention.",
    icon: "trending_up",
  },
  {
    title: "Think Before You Post",
    desc: "Anything you publish exists permanently. Would this make sense on the front page of the local paper?",
    icon: "psychology",
  },
  {
    title: "Encourage Conversation",
    desc: "Leave the 'social' in social media. Negative comments are sometimes an opportunity for meaningful discussion.",
    icon: "forum",
  },
  {
    title: "Protect Privacy",
    desc: "Never disclose personal, confidential, or proprietary information about clients, advisors, or partners.",
    icon: "shield",
  },
];

const platformGuidance = [
  {
    platform: "LinkedIn",
    tone: "Professional, data-driven",
    frequency: "2-3x / week",
    focus: "Impact stats, advisor spotlights, success stories, event recaps.",
    charLimit: "~1,300 chars",
  },
  {
    platform: "Facebook",
    tone: "Warm, community-focused",
    frequency: "3-5x / week",
    focus: "Event promotion, client spotlights, behind-the-scenes, local highlights.",
    charLimit: "~80 chars for links",
  },
  {
    platform: "Instagram",
    tone: "Visual, aspirational",
    frequency: "3-4x / week",
    focus: "Client photos, event moments, quote cards, reels with advisor tips.",
    charLimit: "~125 chars before truncation",
  },
  {
    platform: "X / Twitter",
    tone: "Punchy, topical",
    frequency: "Daily",
    focus: "Quick stats, event live-tweeting, resource links, industry news.",
    charLimit: "280 chars max",
  },
];

const emailBestPractices = [
  {
    title: "Treat Access as a Privilege",
    desc: "Clients gave you their attention willingly. Deliver a high-quality experience they can count on.",
  },
  {
    title: "Subject Lines Matter Most",
    desc: "Be specific and create urgency. 'Free Workshop: Access to Capital — Feb 15' beats 'February Newsletter.'",
  },
  {
    title: "One Clear Call to Action",
    desc: "Every email should have one primary goal. Don't split attention across five different asks.",
  },
  {
    title: "Mobile-First Design",
    desc: "Over 60% of emails are opened on mobile. Use single-column layouts, large tap targets, and concise copy.",
  },
  {
    title: "Include Required Disclaimers",
    desc: "Every client and partner-facing mass email must include the SBA and ADA disclaimer. No exceptions.",
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
      <InteriorHero bg="#00685E"
        title="Content"
        subtitle="Guidelines for social media, newsletters, and web publishing — so every center shows up with one unified voice."
      />

      {/* ── Content Generator Banner ── */}
      <div className="bg-[#0f1c2e]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <a
            href="/generate"
            className="group flex items-center justify-between gap-8 py-5 border-b border-white/[0.06] no-underline"
          >
            <div className="flex items-center gap-4">
              <span
                className="material-symbols-outlined text-royal/60 group-hover:text-royal transition-colors"
                style={{ fontSize: "24px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
              >
                auto_awesome
              </span>
              <div>
                <p className="font-sans text-white/90 text-[15px] group-hover:text-white transition-colors" style={{ fontWeight: 500 }}>
                  Content Generator
                </p>
                <p className="font-mono text-[11px] text-white/30">
                  Create on-brand content with AI — success stories, social posts, emails, and more.
                </p>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all shrink-0"
              style={{ fontSize: "20px" }}
            >
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* ── Social Media Principles ── */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            Social Media
          </p>
          <h2
            className="font-sans text-navy tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Principles
          </h2>
          <p className="font-sans text-base text-navy/50 leading-relaxed mb-14 max-w-2xl">
            We build our social media presence on two basics: content that&rsquo;s relevant
            and compelling to our audiences, and being authentic. Every post reflects who we are.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPrinciples.map((p) => (
              <div key={p.title} className="relative p-6 rounded-xl bg-cream overflow-hidden">
                <span
                  className="material-symbols-outlined absolute -right-3 -bottom-3 text-navy/[0.04] pointer-events-none select-none"
                  style={{ fontSize: "120px", fontVariationSettings: "'FILL' 1, 'wght' 200" }}
                  aria-hidden="true"
                >
                  {p.icon}
                </span>
                <div className="relative z-10">
                  <h3 className="font-sans text-navy text-[15px] mb-2" style={{ fontWeight: 500 }}>
                    {p.title}
                  </h3>
                  <p className="font-sans text-[13px] text-navy/50 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform Guidance ── */}
      <div className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            Platforms
          </p>
          <h2
            className="font-sans text-navy tracking-[-0.02em] mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Platform Guidance
          </h2>

          <div className="space-y-0">
            {platformGuidance.map((row, i) => (
              <div
                key={row.platform}
                className={`grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-8 ${
                  i < platformGuidance.length - 1 ? "border-b border-navy/8" : ""
                }`}
              >
                <div>
                  <p className="font-sans text-navy text-[17px]" style={{ fontWeight: 500 }}>
                    {row.platform}
                  </p>
                  <p className="font-mono text-[11px] text-navy/30 mt-0.5">{row.frequency}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30 mb-1">Tone</p>
                    <p className="font-sans text-[14px] text-navy/70">{row.tone}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30 mb-1">Focus</p>
                    <p className="font-sans text-[14px] text-navy/70">{row.focus}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30 mb-1">Limit</p>
                    <p className="font-mono text-[13px] text-navy/50">{row.charLimit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Responding to Comments ── */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
                Community
              </p>
              <h2
                className="font-sans text-navy tracking-[-0.02em] mb-4"
                style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 500 }}
              >
                Responding to Comments
              </h2>
              <p className="font-sans text-base text-navy/50 leading-relaxed mb-8">
                Respond publicly to negative comments, then move the
                discussion to a private space as quickly as possible.
              </p>

              <div className="p-6 rounded-xl bg-cream border-l-[3px] border-royal">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30 mb-3">
                  Template Response
                </p>
                <p className="font-sans text-[15px] text-navy/70 italic leading-relaxed">
                  &ldquo;We are so sorry you&rsquo;ve had a negative experience. Please
                  private message us with your email address so we can help you
                  resolve the issue.&rdquo;
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30">
                  Facebook Comments Policy
                </p>
                <CopyButton text={commentPolicy} />
              </div>
              <div className="p-6 rounded-xl bg-[#f7f7f5] max-h-[320px] overflow-y-auto">
                <p className="font-sans text-[13px] text-navy/50 leading-relaxed whitespace-pre-wrap">
                  {commentPolicy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Email Communications ── */}
      <div className="bg-[#0f1c2e] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/25 mb-3">
            Email
          </p>
          <h2
            className="font-sans text-white/90 tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Email Communications
          </h2>
          <p className="font-sans text-base text-white/40 leading-relaxed mb-14 max-w-2xl">
            Our email is the most direct point of digital connection with our clients.
            Treat it as a privilege.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden mb-14">
            {emailBestPractices.map((item, i) => (
              <div key={item.title} className={`p-6 bg-[#0f1c2e] ${i === emailBestPractices.length - 1 && emailBestPractices.length % 3 !== 0 ? "lg:col-span-1" : ""}`}>
                <p className="font-mono text-[10px] text-white/25 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-sans text-white/80 text-[15px] mb-2" style={{ fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Required Disclaimer */}
          <div className="flex items-center justify-between mb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/30">
              Required SBA &amp; ADA Disclaimer
            </p>
            <CopyButton text={sbaDisclaimer} />
          </div>
          <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <p className="font-sans text-[13px] text-white/40 leading-relaxed whitespace-pre-wrap">
              {sbaDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* ── Web Publishing ── */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            Web
          </p>
          <h2
            className="font-sans text-navy tracking-[-0.02em] mb-14"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Web Publishing
          </h2>

          <div className="space-y-10">
            {webPublishingRules.map((rule) => (
              <div key={rule.title} className="border-b border-navy/8 pb-10">
                <h3 className="font-sans text-navy text-[17px] mb-5" style={{ fontWeight: 500 }}>
                  {rule.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start p-4 rounded-lg bg-[#00685E]/[0.04]">
                    <span className="material-symbols-outlined text-[#00685E] shrink-0" style={{ fontSize: "18px" }}>check</span>
                    <span className="font-sans text-[14px] text-navy/70">{rule.good}</span>
                  </div>
                  <div className="flex gap-3 items-start p-4 rounded-lg bg-[#A73B44]/[0.04]">
                    <span className="material-symbols-outlined text-[#A73B44] shrink-0" style={{ fontSize: "18px" }}>close</span>
                    <span className="font-sans text-[14px] text-navy/70">{rule.bad}</span>
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
