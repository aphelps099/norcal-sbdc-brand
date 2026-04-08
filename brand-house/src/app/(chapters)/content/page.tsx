
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
    icon: "work",
    tone: "Professional, data-driven",
    frequency: "2–3× / week",
    focus: "Impact stats, advisor spotlights, success stories, event recaps.",
    charLimit: "~1,300 chars",
  },
  {
    platform: "Facebook",
    icon: "diversity_3",
    tone: "Warm, community-focused",
    frequency: "3–5× / week",
    focus: "Event promotion, client spotlights, behind-the-scenes, local highlights.",
    charLimit: "~80 chars for links",
  },
  {
    platform: "Instagram",
    icon: "photo_camera",
    tone: "Visual, aspirational",
    frequency: "3–4× / week",
    focus: "Client photos, event moments, quote cards, reels with advisor tips.",
    charLimit: "~125 chars before truncation",
  },
  {
    platform: "X / Twitter",
    icon: "tag",
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
      <div className="bg-white py-16 md:py-24 relative overflow-hidden">
        {/* Oversized accent icon */}
        <span
          className="material-symbols-outlined absolute -right-8 -top-6 text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          forum
        </span>

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-2 border-steel/20 overflow-hidden">
            {socialPrinciples.map((p) => (
              <div key={p.title} className="p-5 bg-white">
                <div className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-steel/50 shrink-0 mt-0.5"
                    style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-sans text-navy text-[14px] mb-1" style={{ fontWeight: 500 }}>
                      {p.title}
                    </h3>
                    <p className="font-sans text-[13px] text-navy/50 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform Guidance ── */}
      <div className="bg-cream py-16 md:py-24 relative overflow-hidden">
        {/* Oversized accent icon */}
        <span
          className="material-symbols-outlined absolute -left-12 bottom-[-4%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(55vw, 560px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          share
        </span>

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            Platforms
          </p>
          <h2
            className="font-sans text-navy tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Platform Guidance
          </h2>

          {/* Table-style header */}
          <div className="hidden md:grid grid-cols-[48px_1fr_1fr_1fr_120px] gap-4 pb-3 border-b-2 border-navy/10 mb-0">
            <div />
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30">Tone</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30">Focus</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30">Frequency</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-navy/30">Limit</p>
          </div>

          {platformGuidance.map((row, i) => (
            <div
              key={row.platform}
              className={`grid grid-cols-1 md:grid-cols-[48px_1fr_1fr_1fr_120px] gap-4 py-4 items-center ${
                i < platformGuidance.length - 1 ? "border-b border-navy/6" : ""
              }`}
            >
              <div className="flex items-center gap-3 md:block">
                <span
                  className="material-symbols-outlined text-navy/40"
                  style={{ fontSize: "22px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                  title={row.platform}
                >
                  {row.icon}
                </span>
                <span className="font-sans text-navy text-[15px] md:hidden" style={{ fontWeight: 500 }}>
                  {row.platform}
                </span>
              </div>
              <p className="font-sans text-[14px] text-navy/70">{row.tone}</p>
              <p className="font-sans text-[13px] text-navy/55 leading-snug">{row.focus}</p>
              <p className="font-mono text-[12px] text-navy/40">{row.frequency}</p>
              <p className="font-mono text-[12px] text-navy/40">{row.charLimit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Responding to Comments ── */}
      <div className="bg-white py-16 md:py-24 relative overflow-hidden">
        {/* Oversized accent icon */}
        <span
          className="material-symbols-outlined absolute -right-6 top-[8%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(40vw, 400px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          chat_bubble
        </span>

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 relative z-10">
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

              <div className="border-l-2 border-steel pl-5">
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
      <div className="bg-[#0f1c2e] py-16 md:py-24 relative overflow-hidden">
        {/* Oversized accent icon */}
        <span
          className="material-symbols-outlined absolute -right-10 top-[5%] text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          mail
        </span>

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border-2 border-fog/20 overflow-hidden mb-14">
            {emailBestPractices.map((item, i) => (
              <div key={item.title} className="p-5 bg-[#0f1c2e]">
                <p className="font-mono text-[10px] text-white/20 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-sans text-white/80 text-[14px] mb-1.5" style={{ fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] text-white/40 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Required Disclaimer — tighter, no boring container */}
          <div className="max-w-3xl">
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/30">
                Required SBA &amp; ADA Disclaimer
              </p>
              <CopyButton text={sbaDisclaimer} />
            </div>
            <div className="border-l-2 border-fog/30 pl-6">
              <p className="font-sans text-[13px] text-white/35 leading-relaxed whitespace-pre-wrap">
                {sbaDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Web Publishing ── */}
      <div className="bg-white py-16 md:py-24 relative overflow-hidden">
        {/* Oversized accent icon */}
        <span
          className="material-symbols-outlined absolute -right-10 top-[-5%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(55vw, 560px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          language
        </span>

        <div className="max-w-[1200px] mx-auto px-8 md:px-12 relative z-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-navy/30 mb-3">
            Web
          </p>
          <h2
            className="font-sans text-navy tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500 }}
          >
            Web Publishing
          </h2>

          {/* Table-style layout */}
          <div className="border-2 border-steel/15 overflow-hidden">
            {webPublishingRules.map((rule, i) => (
              <div
                key={rule.title}
                className={`grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] items-center ${
                  i < webPublishingRules.length - 1 ? "border-b border-navy/6" : ""
                }`}
              >
                <div className="px-5 py-4 md:border-r border-navy/6">
                  <h3 className="font-sans text-navy text-[14px]" style={{ fontWeight: 500 }}>
                    {rule.title}
                  </h3>
                </div>
                <div className="flex gap-2 items-center px-5 py-4 md:border-r border-navy/6">
                  <span className="material-symbols-outlined text-[#00685E] shrink-0" style={{ fontSize: "16px" }}>check</span>
                  <span className="font-sans text-[13px] text-navy/65">{rule.good}</span>
                </div>
                <div className="flex gap-2 items-center px-5 py-4">
                  <span className="material-symbols-outlined text-[#A73B44] shrink-0" style={{ fontSize: "16px" }}>close</span>
                  <span className="font-sans text-[13px] text-navy/50">{rule.bad}</span>
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
