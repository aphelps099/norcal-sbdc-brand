
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import Link from "next/link";

function SocialIcon({ name }: { name: string }) {
  const cls = "w-[22px] h-[22px] text-navy/40";
  switch (name) {
    case "linkedin":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case "facebook":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case "instagram":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>;
    case "x":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    default:
      return null;
  }
}

const socialPrinciples = [
  { title: "Be Authentic", desc: "Don't blog anonymously or use pseudonyms. Your name builds trust. SBDC promotes authentic transparency.", icon: "verified" },
  { title: "Know Your Audience", desc: "A startup founder needs different content than a city councilmember. Tailor messages that add value.", icon: "groups" },
  { title: "Be Consistent", desc: "Grow your audience with regular, relevant updates. Quality over volume — every post should earn attention.", icon: "trending_up" },
  { title: "Think Before You Post", desc: "Anything you publish exists permanently. Would this make sense on the front page of the local paper?", icon: "psychology" },
  { title: "Encourage Conversation", desc: "Leave the 'social' in social media. Negative comments are sometimes an opportunity for meaningful discussion.", icon: "forum" },
  { title: "Protect Privacy", desc: "Never disclose personal, confidential, or proprietary information about clients, advisors, or partners.", icon: "shield" },
];

const platformGuidance = [
  { platform: "LinkedIn", icon: "linkedin", tone: "Professional, data-driven", frequency: "2–3× / week", focus: "Impact stats, advisor spotlights, success stories, event recaps.", charLimit: "~1,300 chars" },
  { platform: "Facebook", icon: "facebook", tone: "Warm, community-focused", frequency: "3–5× / week", focus: "Event promotion, client spotlights, behind-the-scenes, local highlights.", charLimit: "~80 chars for links" },
  { platform: "Instagram", icon: "instagram", tone: "Visual, aspirational", frequency: "3–4× / week", focus: "Client photos, event moments, quote cards, reels with advisor tips.", charLimit: "~125 chars before truncation" },
  { platform: "X / Twitter", icon: "x", tone: "Punchy, topical", frequency: "Daily", focus: "Quick stats, event live-tweeting, resource links, industry news.", charLimit: "280 chars max" },
];

const emailBestPractices = [
  { title: "Treat Access as a Privilege", desc: "Clients gave you their attention willingly. Deliver a high-quality experience they can count on." },
  { title: "Subject Lines Matter Most", desc: "Be specific and create urgency. 'Free Workshop: Access to Capital — Feb 15' beats 'February Newsletter.'" },
  { title: "One Clear Call to Action", desc: "Every email should have one primary goal. Don't split attention across five different asks." },
  { title: "Mobile-First Design", desc: "Over 60% of emails are opened on mobile. Use single-column layouts, large tap targets, and concise copy." },
  { title: "Include Required Disclaimers", desc: "Every client and partner-facing mass email must include the SBA and ADA disclaimer. No exceptions." },
];

const sbaDisclaimer = `Funded in part through a cooperative agreement with the US Small Business Administration (SBA). Funded in part through a grant with the Governor's Office of Business and Economic Development. All opinions, conclusions, or recommendations expressed are those of the author(s) and do not necessarily reflect the view of the SBA, California Office of the Small Business Advocate or Cal Poly Humboldt sponsored programs.\n\nReasonable accommodations for persons with disabilities will be made if requested at least 72 hours in advance. Contact: [contact name] at [contact phone number] or email: [contact email].`;

const commentPolicy = `The [Center Name] SBDC has created this page with the intention of providing a format for discussion about news and events related to [subject matter]. [Center Name] SBDC reserves the right to remove any content that is deemed, in our sole view, commercial, harmful, inappropriate, erroneous, harassing, libelous, threatening, discriminatory, or wildly off-topic. [Center Name] SBDC reserves the right to remove you from the community/block you from posting after the second offense. [Center Name] SBDC is not responsible for the content posted by others on this page; please note that community-contributed content is the opinion of the specific author and does not necessarily represent the opinions of [Center Name] SBDC.\n\nThank you for your participation and for your role in creating a safe and dynamic environment for our online community.`;

const webPublishingRules = [
  { title: "Link Text Describes the Destination", good: "Apply to the graduate program.", bad: "Click here to apply." },
  { title: "Don't Bury Important Links", good: "Use landing pages with clearly visible lists of links.", bad: "Hiding key actions inside long paragraphs of text." },
  { title: "Prioritize Information", good: "Put the most important information at the top of the page.", bad: "Forcing visitors to scroll through layers of content to find what they need." },
];

/** Shared section heading style — consistent scale throughout */
function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-t border-navy/10 pt-6 mb-12">
      <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">{eyebrow}</p>
      <h2 className="font-sans text-navy tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>{title}</h2>
    </div>
  );
}

function SectionLabelLight({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-t border-white/[0.08] pt-6 mb-12">
      <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/30 mb-2">{eyebrow}</p>
      <h2 className="font-sans text-white/90 tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>{title}</h2>
    </div>
  );
}

export default function ContentPage() {
  return (
    <>
      <InteriorHero
        gradient={{
          angle: 150,
          stops: ["#0f1c2e", "#0f1c2e", "#1D5AA7", "#8FC5D9", "#0f1c2e"],
        }}
        title="Content"
        subtitle="Guidelines for social media, newsletters, and web publishing — so every center shows up with one unified voice."
      />

      {/* ── Content Generator — full-bleed feature section ── */}
      {/* Coral keyline signals a major brand moment */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <SbdcWatermark
          className="absolute -right-[6%] top-[10%] w-[38vw] max-w-[460px] text-white pointer-events-none select-none"
          opacity={0.03}
        />
        {/* Giant background icon */}
        <span
          className="material-symbols-outlined absolute -left-8 -bottom-8 text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(60vw, 560px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          auto_awesome
        </span>

        <div className="relative z-10 max-w-[960px] mx-auto px-8 md:px-12 py-16 md:py-20">
          <p className="font-label text-[10px] uppercase tracking-[0.18em] text-[#c4543a] mb-5">
            AI-Powered Tool
          </p>
          <h2
            className="text-white/90 tracking-[-0.03em] leading-[1.05] mb-5"
            style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Content Generator
          </h2>
          <p className="font-sans text-white/45 leading-[1.7] max-w-[540px] mb-10"
            style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}>
            Write on-brand success stories, social posts, email campaigns, and more — all trained on NorCal SBDC's voice, pillars, and messaging framework.
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Client Success Stories", "Social Posts", "Email Campaigns", "Workshop Recaps", "Press Releases"].map((feat) => (
              <span
                key={feat}
                className="font-label text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-white/[0.12] text-white/40"
              >
                {feat}
              </span>
            ))}
          </div>

          <Link
            href="/generate"
            className="inline-flex items-center gap-3 bg-[#c4543a] hover:bg-[#b84a31] text-white font-sans px-6 py-3.5 transition-colors no-underline"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
            >
              auto_awesome
            </span>
            Open Content Generator
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {/* ── Social Media Principles — navy bg for visual weight ── */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <span
          className="material-symbols-outlined absolute -right-8 -top-6 text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          forum
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 py-16 md:py-20 relative z-10">
          <div className="border-t border-white/[0.08] pt-6 mb-8">
            <p className="font-label text-[10px] uppercase tracking-[0.1em] text-white/30 mb-2">Social Media</p>
            <h2 className="font-sans text-white/90 tracking-[-0.02em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500 }}>Principles</h2>
          </div>
          <p className="font-sans text-white/40 leading-[1.7] mb-10 max-w-[600px]"
            style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
            We build our social media presence on two basics: content that&rsquo;s relevant
            and compelling to our audiences, and being authentic. Every post reflects who we are.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/[0.06] overflow-hidden">
            {socialPrinciples.map((p) => (
              <div key={p.title} className="p-6 bg-[#0f1c2e] hover:bg-white/[0.02] transition-colors">
                <div className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#c4543a]/60 shrink-0 mt-0.5"
                    style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-sans text-white/80 text-[14px] mb-1.5" style={{ fontWeight: 500 }}>
                      {p.title}
                    </h3>
                    <p className="font-sans text-[13px] text-white/35 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Social Media Kit ── */}
      <div className="bg-cream py-16 md:py-20 relative overflow-hidden">
        <span
          className="material-symbols-outlined absolute -left-8 top-[8%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          grid_view
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <SectionLabel eyebrow="Ready-to-Post Content" title="Social Media Kit" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { bg: "bg-[#0f1c2e]", text: "text-white", icon: "person", headline: "Meet Your\nSBDC Advisor", sub: "The people behind your business growth.", pillar: "People", tag: "#YourBusinessBetter", plaque: "Advisor Spotlight", detail: "IG / LI · People Pillar · Weekly" },
              { bg: "bg-[#A73B44]", text: "text-white", icon: "account_balance", headline: "$240M+", isStat: true, sub: "Capital accessed by NorCal small businesses", pillar: "Funded", tag: "#YourBusinessBetter", plaque: "Capital Impact", detail: "LI / FB · Funded Pillar · Monthly" },
              { bg: "bg-cream border border-navy/[0.08]", text: "text-navy", icon: "format_quote", headline: null, quote: "\u201cMy advisor connected me with the right lender at the right time. That loan changed everything.\u201d", sub: "\u2014 NorCal SBDC Client", pillar: "Connected", tag: "#PeopleFundedConnected", plaque: "Client Testimonial", detail: "IG / FB · Connected Pillar · Bi-Weekly" },
              { bg: "bg-gradient-to-br from-[#4a8da6] to-steel", text: "text-white", icon: "groups", headline: "1,900+", isStat: true, sub: "Jobs created with SBDC support", pillar: "People", tag: "#NorCalSBDC", plaque: "Jobs Created", detail: "LI / X · People Pillar · Quarterly" },
              { bg: "bg-white border border-navy/[0.08]", text: "text-navy", icon: "lightbulb", headline: "Did You Know?", headlineColor: "text-[#A73B44]", sub: "NorCal SBDC advisors help you prepare loan packages, navigate SBA programs, and connect with the right lender \u2014 all at no fee.", pillar: "Funded", tag: "#SmallBusinessGrowth", plaque: "Capital Education", detail: "LI / FB · Funded Pillar · Monthly" },
              { bg: "bg-[#004290]", text: "text-white", icon: "hub", headline: "People.\nFunded.\nConnected.", sub: "That\u2019s what we do.", pillar: "Brand", tag: "#YourBusinessBetter", plaque: "Brand Anthem", detail: "IG / LI / FB / X · Evergreen" },
            ].map((post) => (
              <div key={post.plaque} className="flex flex-col">
                <div className={`aspect-square ${post.bg} ${post.text} relative overflow-hidden flex flex-col items-center justify-center text-center p-6 shadow-sm`}>
                  <span
                    className="material-symbols-outlined absolute top-[-15%] right-[-15%] opacity-[0.04] pointer-events-none"
                    style={{ fontSize: 180, fontVariationSettings: "'FILL' 1, 'wght' 200" }}
                    aria-hidden="true"
                  >{post.icon}</span>
                  <p className="absolute top-3.5 left-4 font-sans text-[11px] opacity-70 tracking-[0.02em] z-10" style={{ fontWeight: 500 }}>NorCal SBDC</p>
                  {post.quote ? (
                    <p className="font-sans text-lg italic leading-snug mb-2 relative z-10" style={{ fontWeight: 500 }}>{post.quote}</p>
                  ) : post.isStat ? (
                    <p className="font-sans leading-none mb-1 relative z-10" style={{ fontSize: "3rem", fontWeight: 500 }}>{post.headline}</p>
                  ) : (
                    <p className={`font-sans text-[1.75rem] leading-tight mb-2 relative z-10 whitespace-pre-line ${post.headlineColor || ""}`} style={{ fontWeight: 500 }}>{post.headline}</p>
                  )}
                  <p className={`text-[13px] opacity-80 leading-snug relative z-10 ${post.quote ? "text-navy/50" : ""}`}>{post.sub}</p>
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between font-label text-[9px] uppercase tracking-[0.06em] opacity-40 z-10">
                    <span>{post.pillar}</span>
                    <span>{post.tag}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-sans text-navy text-[13px]" style={{ fontWeight: 500 }}>{post.plaque}</p>
                  <p className="font-label text-[10px] text-navy/30 uppercase tracking-[0.05em]">{post.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Platform Guidance ── */}
      <div className="bg-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <SectionLabel eyebrow="Platforms" title="Platform Guidance" />

          {/* Desktop table */}
          <div className="hidden md:block border border-navy/[0.08] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[180px_1fr_1.6fr_110px_130px] bg-navy">
              <div className="px-5 py-3">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Platform</p>
              </div>
              <div className="px-5 py-3 border-l border-white/[0.06]">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Tone</p>
              </div>
              <div className="px-5 py-3 border-l border-white/[0.06]">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Focus</p>
              </div>
              <div className="px-5 py-3 border-l border-white/[0.06]">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Frequency</p>
              </div>
              <div className="px-5 py-3 border-l border-white/[0.06]">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Char limit</p>
              </div>
            </div>
            {/* Rows */}
            {platformGuidance.map((row, i) => (
              <div
                key={row.platform}
                className={`grid grid-cols-[180px_1fr_1.6fr_110px_130px] items-center ${
                  i < platformGuidance.length - 1 ? "border-b border-navy/[0.06]" : ""
                }`}
              >
                <div className="flex items-center gap-3 px-5 py-4 border-r border-navy/[0.06]">
                  <SocialIcon name={row.icon} />
                  <span className="font-sans text-navy text-[14px]" style={{ fontWeight: 500 }}>{row.platform}</span>
                </div>
                <div className="px-5 py-4 border-r border-navy/[0.06]">
                  <p className="font-sans text-[13px] text-navy/65">{row.tone}</p>
                </div>
                <div className="px-5 py-4 border-r border-navy/[0.06]">
                  <p className="font-sans text-[13px] text-navy/50 leading-snug">{row.focus}</p>
                </div>
                <div className="px-5 py-4 border-r border-navy/[0.06]">
                  <p className="font-sans text-[13px] text-navy/50">{row.frequency}</p>
                </div>
                <div className="px-5 py-4">
                  <p className="font-sans text-[13px] text-navy/40">{row.charLimit}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stack */}
          <div className="md:hidden space-y-4">
            {platformGuidance.map((row) => (
              <div key={row.platform} className="border border-navy/[0.08] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <SocialIcon name={row.icon} />
                  <span className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>{row.platform}</span>
                </div>
                <p className="font-sans text-[13px] text-navy/60 mb-1">{row.tone}</p>
                <p className="font-sans text-[13px] text-navy/45 leading-snug mb-2">{row.focus}</p>
                <div className="flex gap-4">
                  <span className="font-label text-[11px] text-navy/35 uppercase tracking-[0.06em]">{row.frequency}</span>
                  <span className="font-label text-[11px] text-navy/35 uppercase tracking-[0.06em]">{row.charLimit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content Cadence — navy bg, coral keyline ── */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <SbdcWatermark
          className="absolute -right-[8%] top-[5%] w-[40vw] max-w-[500px] text-white pointer-events-none select-none"
          opacity={0.03}
        />
        <span
          className="material-symbols-outlined absolute -right-10 top-[2%] text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          calendar_month
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 py-16 md:py-20 relative z-10">
          <SectionLabelLight eyebrow="Year-Round Rhythm" title="Content Cadence" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px border border-white/[0.06] overflow-hidden">
            {[
              {
                freq: "Weekly",
                title: "Social Posts",
                items: [
                  { tag: "People", tagColor: "bg-[#004290]/[0.15] text-[#8FC5D9]", text: "Advisor spotlight or team moment" },
                  { tag: "Funded", tagColor: "bg-[#A73B44]/[0.15] text-[#c4543a]", text: "Capital stat, lending tip, or client win" },
                  { tag: "Connected", tagColor: "bg-white/[0.06] text-white/40", text: "Event promo, workshop recap, or partner shout-out" },
                ],
                note: "Rotate pillars weekly — never post the same pillar twice in a row",
              },
              {
                freq: "Bi-Weekly",
                title: "Newsletter",
                items: [
                  { tag: "People", tagColor: "bg-[#004290]/[0.15] text-[#8FC5D9]", text: "Lead story: client or advisor profile" },
                  { tag: "Funded", tagColor: "bg-[#A73B44]/[0.15] text-[#c4543a]", text: "Quick tip: capital access or SBA update" },
                  { tag: "Connected", tagColor: "bg-white/[0.06] text-white/40", text: "Program spotlight + upcoming events" },
                ],
                note: "Each issue features one pillar lead, two supporting",
              },
              {
                freq: "Quarterly",
                title: "Anchor Content",
                items: [
                  { tag: "People", tagColor: "bg-[#004290]/[0.15] text-[#8FC5D9]", text: "Signature client success story (long-form)" },
                  { tag: "Funded", tagColor: "bg-[#A73B44]/[0.15] text-[#c4543a]", text: "Capital impact report or lender partnership feature" },
                  { tag: "Connected", tagColor: "bg-white/[0.06] text-white/40", text: "Event recap video or regional economic snapshot" },
                ],
                note: "Anchor content feeds 4–6 weeks of derivative posts",
              },
            ].map((col) => (
              <div key={col.freq} className="bg-[#0f1c2e] p-6">
                <p className="font-label text-[10px] uppercase tracking-[0.08em] text-[#c4543a] mb-1.5">{col.freq}</p>
                <h3 className="font-sans text-white/80 text-[17px] tracking-[-0.01em] mb-4" style={{ fontWeight: 500 }}>{col.title}</h3>
                {col.items.map((item) => (
                  <div key={item.text} className="py-2.5 border-b border-white/[0.05] last:border-b-0 text-[13px] text-white/40 leading-snug font-sans">
                    <span className={`inline-block font-label text-[8px] uppercase tracking-[0.06em] px-1.5 py-0.5 mr-1.5 ${item.tagColor}`}>{item.tag}</span>
                    {item.text}
                  </div>
                ))}
                <p className="font-sans text-white/20 text-[12px] italic mt-4">{col.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-5 border border-white/[0.06] font-sans text-[14px] text-white/35 leading-relaxed">
            <strong className="text-white/60" style={{ fontWeight: 500 }}>Pillar Rotation Rule:</strong>{" "}Each month, one pillar leads. The other two support. January = People-led. February = Funded-led. March = Connected-led. Repeat.
          </div>
        </div>
      </div>

      {/* ── Responding to Comments — cream bg, darker feel ── */}
      <div className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <span
          className="material-symbols-outlined absolute -left-6 bottom-[-4%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(40vw, 380px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          chat_bubble
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <SectionLabel eyebrow="Community" title="Responding to Comments" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14">
            {/* Left — guidance + template */}
            <div>
              <p className="font-sans text-navy/55 leading-[1.7] mb-8"
                style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
                Respond publicly to negative comments, then move the
                discussion to a private space as quickly as possible.
              </p>
              {/* Template — styled like a card */}
              <div className="bg-white border border-navy/[0.07] overflow-hidden">
                <div className="bg-navy px-5 py-3">
                  <p className="font-label text-[10px] uppercase tracking-[0.14em] text-white/40">Template Response</p>
                </div>
                <div className="px-6 py-5 border-l-2 border-[#c4543a]">
                  <p className="font-sans text-[15px] text-navy/70 italic leading-relaxed">
                    &ldquo;We are so sorry you&rsquo;ve had a negative experience. Please
                    private message us with your email address so we can help you
                    resolve the issue.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right — policy */}
            <div>
              <div className="bg-white border border-navy/[0.07] overflow-hidden">
                <div className="bg-navy px-5 py-3 flex items-center justify-between">
                  <p className="font-label text-[10px] uppercase tracking-[0.14em] text-white/40">Facebook Comments Policy</p>
                  <CopyButton text={commentPolicy} />
                </div>
                <div className="p-6 max-h-[280px] overflow-y-auto">
                  <p className="font-sans text-[13px] text-navy/50 leading-relaxed whitespace-pre-wrap">
                    {commentPolicy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Email Communications — navy, coral keyline ── */}
      <div className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <span
          className="material-symbols-outlined absolute -right-10 top-[5%] text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          mail
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 py-16 md:py-24 relative z-10">
          <SectionLabelLight eyebrow="Email" title="Email Communications" />
          <p className="font-sans text-base text-white/40 leading-relaxed mb-14 max-w-2xl -mt-6">
            Our email is the most direct point of digital connection with our clients.
            Treat it as a privilege.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/[0.06] overflow-hidden mb-14">
            {emailBestPractices.map((item, i) => (
              <div key={item.title} className="p-6 bg-[#0f1c2e]">
                <p className="font-label text-[10px] text-white/20 mb-2">
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

          <div className="max-w-3xl">
            <div className="flex items-center justify-between mb-4">
              <p className="font-label text-[11px] uppercase tracking-[0.12em] text-white/30">
                Required SBA &amp; ADA Disclaimer
              </p>
              <CopyButton text={sbaDisclaimer} />
            </div>
            <div className="border-l-2 border-[#c4543a]/30 pl-6">
              <p className="font-sans text-[13px] text-white/35 leading-relaxed whitespace-pre-wrap">
                {sbaDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Welcome Drip Sequence ── */}
      <div className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <span
          className="material-symbols-outlined absolute -right-8 top-[5%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(45vw, 460px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          mark_email_read
        </span>
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <SectionLabel eyebrow="New Client Onboarding" title="Welcome Drip Sequence" />
          <div className="p-5 bg-white border border-navy/[0.06] font-sans text-[14px] text-navy/55 leading-relaxed mb-10 -mt-6">
            <strong className="text-navy" style={{ fontWeight: 500 }}>3-email drip, automated after first consultation.</strong> Each email introduces one pillar in sequence &mdash; People, then Funded, then Connected &mdash; so new clients understand the full scope. Suggested timing: Day 1, Day 7, Day 14.
          </div>

          <div className="space-y-8">
            {[
              {
                label: "Drip 01 · Day 1 · People Pillar",
                heading: "Welcome to\nNorCal SBDC",
                preview: "You just gained a team — here\u2019s who\u2019s in your corner",
                body: ["Hi [First Name],", "Thank you for meeting with us. That conversation you just had? It wasn\u2019t a one-time thing. You now have an advisor \u2014 a real person with real expertise \u2014 who\u2019s invested in your growth.", "Your advisor will follow up within [X] business days with a summary of your session and recommended next steps."],
                bullets: ["Every consultation is no-fee \u2014 today and always", "You can schedule follow-ups as often as you need", "Your advisor connects you to specialists when your needs go deeper"],
                cta: "Schedule Your Next Session",
                signoff: "Welcome to the team,",
              },
              {
                label: "Drip 02 · Day 7 · Funded Pillar",
                heading: "Your Business, Funded",
                preview: "Capital access is part of the deal \u2014 here\u2019s how it works",
                body: ["Hi [First Name],", "NorCal SBDC has helped entrepreneurs across 36 counties access over $240M in funding. Whether you need capital now or want to be ready when the time comes, your advisor can help."],
                bullets: ["Review your financials and identify funding readiness gaps", "Help you build a loan package lenders actually want to see", "Introduce you to the right lender from our 50+ partners", "Navigate SBA programs, grants, and alternative sources"],
                cta: "Talk to Your Advisor About Capital",
                signoff: "Invested in your growth,",
              },
              {
                label: "Drip 03 · Day 14 · Connected Pillar",
                heading: "Your Business, Connected",
                preview: "You didn\u2019t just get an advisor \u2014 you got a network",
                body: ["Hi [First Name],", "NorCal SBDC isn\u2019t just your advisor \u2014 it\u2019s a network of 14 centers, 63 advisors, and hundreds of partners across Northern California. And you\u2019re now part of it."],
                bullets: ["200+ workshops and training events every year \u2014 most at no fee", "Partnerships with chambers, cities, and economic development orgs", "Direct introductions to lenders, industry partners, and collaborators", "Fellow entrepreneurs who\u2019ve been where you are"],
                cta: "Browse Upcoming Events",
                signoff: "Better together,",
              },
            ].map((email) => (
              <div key={email.label}>
                <p className="font-label text-[10px] uppercase tracking-[0.1em] text-navy/30 mb-2">{email.label}</p>
                <div className="bg-white shadow-md overflow-hidden max-w-[600px]">
                  {/* Coral keyline on each email card too */}
                  <div className="w-full h-[2px] bg-[#c4543a]" />
                  <div className="bg-[#0f1c2e] text-white p-6 text-center">
                    <h3 className="font-sans text-2xl tracking-[-0.02em] mb-1 whitespace-pre-line" style={{ fontWeight: 500 }}>{email.heading}</h3>
                    <p className="font-sans text-white/50 text-[13px] italic">{email.preview}</p>
                  </div>
                  <div className="p-6 font-sans text-[14px] text-navy/65 leading-relaxed">
                    {email.body.map((p, i) => <p key={i} className="mb-3">{p}</p>)}
                    <ul className="list-disc pl-5 mb-4 space-y-1.5">
                      {email.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <div className="mt-5 mb-4">
                      <span className="inline-block bg-[#004290] text-white font-sans text-[13px] px-5 py-2.5" style={{ fontWeight: 500 }}>{email.cta}</span>
                    </div>
                    <p className="mt-4 text-navy/50">{email.signoff}<br /><strong className="text-navy" style={{ fontWeight: 500 }}>NorCal SBDC</strong><br />Your Business, Better.</p>
                  </div>
                  <div className="bg-cream px-6 py-3 text-center font-sans text-[12px] text-navy/35 border-t border-navy/[0.04]">
                    &copy; 2026 NorCal SBDC. All rights reserved.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Web Publishing ── */}
      <div className="bg-white py-16 md:py-20 relative overflow-hidden">
        <SbdcWatermark
          className="absolute -right-[6%] top-[8%] w-[36vw] max-w-[420px] text-navy pointer-events-none select-none"
          opacity={0.025}
        />
        <div className="max-w-[1080px] mx-auto px-8 md:px-12 relative z-10">
          <SectionLabel eyebrow="Web" title="Web Publishing" />
          <p className="font-sans text-navy/45 leading-[1.7] mb-10 max-w-[580px] -mt-6"
            style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}>
            Every page we publish is a reflection of the brand. Keep it clean, accessible, and direct.
          </p>

          <div className="border border-navy/[0.08] overflow-hidden">
            {/* Column headers */}
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] bg-navy">
              <div className="px-5 py-3">
                <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Rule</p>
              </div>
              <div className="hidden md:block px-5 py-3 border-l border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#8FC5D9]" style={{ fontSize: "13px" }}>check_circle</span>
                  <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Do this</p>
                </div>
              </div>
              <div className="hidden md:block px-5 py-3 border-l border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c4543a]/70" style={{ fontSize: "13px" }}>cancel</span>
                  <p className="font-label text-[10px] uppercase tracking-[0.12em] text-white/40">Not this</p>
                </div>
              </div>
            </div>
            {webPublishingRules.map((rule, i) => (
              <div
                key={rule.title}
                className={`grid grid-cols-1 md:grid-cols-[220px_1fr_1fr] items-stretch ${
                  i < webPublishingRules.length - 1 ? "border-b border-navy/[0.06]" : ""
                }`}
              >
                <div className="px-5 py-4 md:border-r border-navy/[0.06] bg-navy/[0.02]">
                  <h3 className="font-sans text-navy text-[14px] leading-snug" style={{ fontWeight: 500 }}>
                    {rule.title}
                  </h3>
                </div>
                <div className="flex gap-2.5 items-start px-5 py-4 md:border-r border-navy/[0.06]">
                  <span className="material-symbols-outlined text-[#00685E] shrink-0 mt-0.5" style={{ fontSize: "15px" }}>check</span>
                  <span className="font-sans text-[13px] text-navy/65 leading-snug">{rule.good}</span>
                </div>
                <div className="flex gap-2.5 items-start px-5 py-4">
                  <span className="material-symbols-outlined text-[#A73B44] shrink-0 mt-0.5" style={{ fontSize: "15px" }}>close</span>
                  <span className="font-sans text-[13px] text-navy/45 leading-snug">{rule.bad}</span>
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
