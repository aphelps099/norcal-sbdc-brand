
import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import SbdcWatermark from "@/components/SbdcWatermark";
import Link from "next/link";

function SocialIcon({ name, size = 22, className }: { name: string; size?: number; className?: string }) {
  const cls = className ?? `text-navy/40`;
  const style = { width: size, height: size };
  switch (name) {
    case "linkedin":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case "facebook":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
    case "instagram":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>;
    case "x":
      return <svg style={style} className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    default:
      return null;
  }
}

/* ─────────────────────────────  DATA  ───────────────────────────── */

const socialPrinciples = [
  {
    title: "Authentic",
    desc: "Use your real name. Never blog anonymously. Every post reflects who we are as people — not as an institution.",
    icon: "verified",
  },
  {
    title: "Audience",
    desc: "A founder needs different content than a city councilmember. Tailor every message to the person on the other side of the screen.",
    icon: "groups",
  },
  {
    title: "Privacy",
    desc: "Never disclose personal, confidential, or proprietary information about clients, advisors, partners, or lenders.",
    icon: "shield",
  },
];

const platformGuidance = [
  {
    platform: "LinkedIn",
    icon: "linkedin",
    tone: "Professional, data-driven",
    frequency: "2–3× / week",
    focus: "Impact stats, advisor spotlights, success stories, event recaps.",
  },
  {
    platform: "Facebook",
    icon: "facebook",
    tone: "Warm, community-focused",
    frequency: "3–5× / week",
    focus: "Event promotion, client spotlights, behind-the-scenes, local highlights.",
  },
  {
    platform: "Instagram",
    icon: "instagram",
    tone: "Visual, aspirational",
    frequency: "3–4× / week",
    focus: "Client photos, event moments, quote cards, reels with advisor tips.",
  },
  {
    platform: "X / Twitter",
    icon: "x",
    tone: "Punchy, topical",
    frequency: "Daily",
    focus: "Quick stats, event live-tweeting, resource links, industry news.",
  },
];

const emailBestPractices = [
  { title: "Access is a Privilege", desc: "Clients gave you their attention willingly. Deliver a high-quality experience they can count on." },
  { title: "Subject Lines Matter Most", desc: "Be specific and create urgency. “Free Workshop: Access to Capital — Feb 15” beats “February Newsletter.”" },
  { title: "One Clear Call to Action", desc: "Every email should have one primary goal. Don't split attention across five different asks." },
  { title: "Mobile-First Design", desc: "Over 60% of emails are opened on mobile. Use single-column layouts, large tap targets, and concise copy." },
  { title: "Include Required Disclaimers", desc: "Every client and partner-facing mass email must include the SBA and ADA disclaimer. No exceptions." },
];

const sbaDisclaimer = `Funded in part through a cooperative agreement with the US Small Business Administration (SBA). Funded in part through a grant with the Governor's Office of Business and Economic Development. All opinions, conclusions, or recommendations expressed are those of the author(s) and do not necessarily reflect the view of the SBA, California Office of the Small Business Advocate or Cal Poly Humboldt sponsored programs.\n\nReasonable accommodations for persons with disabilities will be made if requested at least 72 hours in advance. Contact: [contact name] at [contact phone number] or email: [contact email].`;

const commentPolicy = `The [Center Name] SBDC has created this page with the intention of providing a format for discussion about news and events related to [subject matter]. [Center Name] SBDC reserves the right to remove any content that is deemed, in our sole view, commercial, harmful, inappropriate, erroneous, harassing, libelous, threatening, discriminatory, or wildly off-topic. [Center Name] SBDC reserves the right to remove you from the community/block you from posting after the second offense. [Center Name] SBDC is not responsible for the content posted by others on this page; please note that community-contributed content is the opinion of the specific author and does not necessarily represent the opinions of [Center Name] SBDC.\n\nThank you for your participation and for your role in creating a safe and dynamic environment for our online community.`;

/** Shared section heading style — consistent scale throughout */
function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-t border-navy/10 pt-6 mb-12">
      <p className="font-label text-[11px] uppercase tracking-[0.22em] text-navy/35 mb-3">{eyebrow}</p>
      <h2 className="font-sans text-navy tracking-[-0.015em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>{title}</h2>
    </div>
  );
}

function SectionLabelLight({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-t border-white/[0.08] pt-6 mb-12">
      <p className="font-label text-[11px] uppercase tracking-[0.22em] text-white/45 mb-3">{eyebrow}</p>
      <h2 className="font-sans text-white tracking-[-0.015em]" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>{title}</h2>
    </div>
  );
}

export default function ContentPage() {
  return (
    <>
      <InteriorHero
        chapterNumber="06"
        category="strategy"
        title="Content"
        subtitle="Guidelines for social media, newsletters, and email — so every center shows up with one unified voice."
      />

      {/* ── CONTENT GENERATOR — editorial hero moment ── */}
      <section className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <SbdcWatermark
          className="absolute -right-[6%] top-[10%] w-[38vw] max-w-[460px] text-white pointer-events-none select-none"
          opacity={0.03}
        />
        {/* Massive italic serif sparkle mark as art — gestural not literal */}
        <span
          className="material-symbols-outlined absolute -right-12 -bottom-24 text-[#c4543a]/[0.07] pointer-events-none select-none"
          style={{ fontSize: "min(80vw, 820px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          auto_awesome
        </span>

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-24 md:py-36">
          <p className="font-label uppercase mb-8"
            style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#c4543a" }}>
            Tool · AI-Powered
          </p>

          {/* Hero title — italic serif to signal something special */}
          <h2
            className="italic tracking-[-0.04em]"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(72px, 11vw, 180px)",
              color: "#f5f4f0",
              lineHeight: 0.92,
              fontWeight: 400,
            }}
          >
            Content
            <br />
            Generator.
          </h2>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <p
                className="font-sans text-white leading-[1.45] max-w-[640px]"
                style={{ fontSize: "clamp(22px, 2.1vw, 28px)", fontWeight: 400, letterSpacing: "-0.01em" }}
              >
                Write on-brand success stories, social posts, email campaigns, and workshop recaps — all trained on NorCal SBDC&rsquo;s voice, pillars, and messaging framework.
              </p>

              <Link
                href="/generate"
                className="inline-flex items-center gap-3 mt-10 bg-[#c4543a] hover:bg-[#b84a31] text-white font-sans px-7 py-4 transition-colors no-underline"
                style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.02em" }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px", fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  auto_awesome
                </span>
                Open Content Generator
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "18px" }}
                >
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="md:col-span-5 md:pt-4">
              <p className="font-label uppercase mb-5"
                style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(133,163,200,0.55)" }}>
                Formats
              </p>
              <ul className="space-y-3">
                {[
                  "Client Success Stories",
                  "Social Posts · IG / LI / FB / X",
                  "Email Campaigns",
                  "Workshop Recaps",
                  "Press Releases",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="font-sans text-white/80 flex items-baseline gap-4 py-2 border-b border-white/[0.08]"
                    style={{ fontSize: "16px", fontWeight: 400 }}
                  >
                    <span className="font-label text-white/30 text-[11px] tracking-[0.22em]">·</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PRINCIPLES — 3 big things ── */}
      <section className="bg-[#0f1c2e] relative overflow-hidden border-t border-white/[0.06]">
        <span
          className="material-symbols-outlined absolute -right-8 -top-6 text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          forum
        </span>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabelLight eyebrow="Social Media · Principles" title="Three things, always." />

          <p className="font-sans text-white/60 leading-[1.6] mb-16 max-w-[680px]"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 400 }}>
            We build our social media presence on content that&rsquo;s relevant
            and authentic. Every post reflects who we are.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {socialPrinciples.map((p, i) => (
              <div key={p.title}>
                <p className="font-label uppercase text-[#c4543a]/70"
                  style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  0{i + 1}
                </p>
                <h3
                  className="mt-4 italic"
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(48px, 5.8vw, 84px)",
                    color: "#f5f4f0",
                    letterSpacing: "-0.04em",
                    lineHeight: 0.96,
                    fontWeight: 400,
                  }}
                >
                  {p.title}.
                </h3>
                <p
                  className="mt-6 font-sans text-white/70 leading-[1.55]"
                  style={{ fontSize: "16px", fontWeight: 400 }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA KIT — full typographic range, bigger, client images ── */}
      <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <SectionLabel eyebrow="Ready-to-Post Templates" title="Social Media Kit" />

          <p className="font-sans text-navy/60 leading-[1.6] mb-14 max-w-[680px] -mt-6"
            style={{ fontSize: "clamp(17px, 1.6vw, 19px)", fontWeight: 400 }}>
            Six template formats showing the brand&rsquo;s full typographic and color range —
            editorial serif, wide display, monospace labels, and real client imagery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 1 — Client image BG with editorial serif overlay */}
            <div className="flex flex-col">
              <div
                className="aspect-square relative overflow-hidden text-white flex flex-col justify-between p-8 md:p-10 shadow-sm"
                style={{
                  backgroundImage: "linear-gradient(180deg, rgba(15,28,46,0.15) 0%, rgba(15,28,46,0.75) 100%), url('/photos/rejoule.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex justify-between items-start">
                  <p className="font-label uppercase text-white/90"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    NorCal SBDC
                  </p>
                  <p className="font-label uppercase text-white/60"
                    style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                    Client Story
                  </p>
                </div>
                <div>
                  <p
                    className="italic"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(26px, 3.4vw, 42px)",
                      fontWeight: 400,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.08,
                    }}
                  >
                    &ldquo;They helped me build something that lasts.&rdquo;
                  </p>
                  <p className="font-label uppercase mt-5 text-white/75"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    ReJoule · Bay Area
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>Client Testimonial · Serif</p>
                <p className="font-label text-[11px] text-navy/40 uppercase tracking-[0.12em] mt-1">IG / FB · Connected Pillar · Bi-Weekly</p>
              </div>
            </div>

            {/* 2 — Wide display stat on coral */}
            <div className="flex flex-col">
              <div
                className="aspect-square relative overflow-hidden flex flex-col justify-between p-8 md:p-10 shadow-sm"
                style={{ backgroundColor: "#c4543a", color: "#f5f4f0" }}
              >
                <div className="flex justify-between items-start">
                  <p className="font-label uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.85)" }}>
                    NorCal SBDC
                  </p>
                  <p className="font-label uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,244,240,0.6)" }}>
                    Capital Impact
                  </p>
                </div>
                <div>
                  <p className="font-label uppercase mb-3"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.7)" }}>
                    Total Capital Accessed
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontSize: "clamp(64px, 9vw, 120px)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      lineHeight: 0.86,
                    }}
                  >
                    $549M
                  </p>
                  <p className="font-label uppercase mt-4"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.85)" }}>
                    #YourBusinessBetter
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>Impact Stat · Wide Display</p>
                <p className="font-label text-[11px] text-navy/40 uppercase tracking-[0.12em] mt-1">LI / FB · Funded Pillar · Monthly</p>
              </div>
            </div>

            {/* 3 — Client image BG, wide + serif combo */}
            <div className="flex flex-col">
              <div
                className="aspect-square relative overflow-hidden text-white flex flex-col justify-between p-8 md:p-10 shadow-sm"
                style={{
                  backgroundImage: "linear-gradient(180deg, rgba(15,28,46,0.25) 0%, rgba(15,28,46,0.85) 100%), url('/photos/marin-auto.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="font-label uppercase text-white/90"
                  style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  NorCal SBDC
                </p>
                <div>
                  <p className="italic text-white/85"
                    style={{ fontFamily: "var(--serif)", fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.3 }}>
                    Meet your
                  </p>
                  <p
                    className="uppercase mt-2"
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontSize: "clamp(38px, 4.6vw, 64px)",
                      fontWeight: 700,
                      letterSpacing: "0.005em",
                      lineHeight: 0.95,
                      color: "#f5f4f0",
                    }}
                  >
                    SBDC
                    <br />
                    Advisor.
                  </p>
                  <p className="font-label uppercase mt-5 text-white/70"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    People Pillar · Weekly
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>Advisor Spotlight · Mixed Type</p>
                <p className="font-label text-[11px] text-navy/40 uppercase tracking-[0.12em] mt-1">IG / LI · People Pillar · Weekly</p>
              </div>
            </div>

            {/* 4 — Navy, big italic serif headline */}
            <div className="flex flex-col">
              <div
                className="aspect-square relative overflow-hidden flex flex-col justify-between p-8 md:p-10 shadow-sm"
                style={{ backgroundColor: "#0f1c2e", color: "#f5f4f0" }}
              >
                <div className="flex justify-between items-start">
                  <p className="font-label uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(133,163,200,0.7)" }}>
                    NorCal SBDC
                  </p>
                  <p className="font-label uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(133,163,200,0.5)" }}>
                    Brand Anthem
                  </p>
                </div>
                <div>
                  <p
                    className="italic"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(42px, 5.6vw, 76px)",
                      color: "#f5f4f0",
                      letterSpacing: "-0.04em",
                      lineHeight: 0.92,
                      fontWeight: 400,
                    }}
                  >
                    Your
                    <br />
                    Business,
                    <br />
                    <span style={{ color: "#85A3C8" }}>Better.</span>
                  </p>
                  <p className="font-label uppercase mt-6"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(133,163,200,0.6)" }}>
                    #PeopleFundedConnected
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>Brand Anthem · Editorial Serif</p>
                <p className="font-label text-[11px] text-navy/40 uppercase tracking-[0.12em] mt-1">IG / LI / FB / X · Evergreen</p>
              </div>
            </div>

            {/* 5 — Steel bg, wide display stat */}
            <div className="flex flex-col">
              <div
                className="aspect-square relative overflow-hidden flex flex-col justify-between p-8 md:p-10 shadow-sm"
                style={{ backgroundColor: "#5684BA", color: "#f5f4f0" }}
              >
                <div className="flex justify-between items-start">
                  <p className="font-label uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.9)" }}>
                    NorCal SBDC
                  </p>
                  <p className="font-label uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(245,244,240,0.65)" }}>
                    Jobs Created
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-wide)",
                      fontSize: "clamp(68px, 9.5vw, 128px)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      lineHeight: 0.86,
                      color: "#f5f4f0",
                    }}
                  >
                    3,723
                  </p>
                  <p className="font-sans mt-5 text-white max-w-[240px]"
                    style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.35 }}>
                    jobs created with NorCal SBDC support in 2025.
                  </p>
                  <p className="font-label uppercase mt-4"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(245,244,240,0.8)" }}>
                    #NorCalSBDC
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>Jobs Stat · Wide Display</p>
                <p className="font-label text-[11px] text-navy/40 uppercase tracking-[0.12em] mt-1">LI / X · People Pillar · Quarterly</p>
              </div>
            </div>

            {/* 6 — Cream with coral italic, mono label stack */}
            <div className="flex flex-col">
              <div
                className="aspect-square relative overflow-hidden flex flex-col justify-between p-8 md:p-10 shadow-sm border border-navy/[0.08]"
                style={{ backgroundColor: "#f5f4f0", color: "#0f1c2e" }}
              >
                <div className="flex justify-between items-start">
                  <p className="font-label uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)" }}>
                    NorCal SBDC
                  </p>
                  <p className="font-label uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.18em", color: "rgba(15,28,46,0.4)" }}>
                    Did You Know?
                  </p>
                </div>
                <div>
                  <p className="font-label uppercase mb-3"
                    style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#c4543a" }}>
                    Capital Education
                  </p>
                  <p
                    className="italic"
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(26px, 3.2vw, 38px)",
                      color: "#0f1c2e",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.08,
                      fontWeight: 400,
                    }}
                  >
                    Every consultation is{" "}
                    <span style={{ color: "#c4543a" }}>no-fee</span>.
                    <br />
                    Today &amp; always.
                  </p>
                  <p className="font-sans mt-5 text-navy/65 max-w-[260px]"
                    style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }}>
                    Your advisor helps you prepare loan packages, navigate SBA programs, and connect with the right lender.
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-sans text-navy text-[15px]" style={{ fontWeight: 500 }}>Capital Education · Editorial</p>
                <p className="font-label text-[11px] text-navy/40 uppercase tracking-[0.12em] mt-1">LI / FB · Funded Pillar · Monthly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA BEST PRACTICE — steel bg, big, hover for tone ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#5684BA" }}>
        <div className="w-full h-[2px] bg-[#0f1c2e]/20" />
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <div className="border-t border-white/25 pt-6 mb-12">
            <p className="font-label uppercase text-white/80 mb-3"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
              Platforms · Channels
            </p>
            <h2 className="font-sans text-white tracking-[-0.015em]"
              style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>
              Social Media Best Practice
            </h2>
          </div>

          <p className="font-sans text-white leading-[1.6] mb-14 max-w-[680px]"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 400 }}>
            Four platforms, four cadences, one voice.
            Hover a platform to see the tone we use there.
          </p>

          <div className="space-y-0 border-t border-white/25">
            {platformGuidance.map((row) => (
              <details
                key={row.platform}
                className="group border-b border-white/25 open:bg-white/[0.06]"
              >
                <summary
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[320px_1fr_180px_56px] items-center py-8 md:py-10 cursor-pointer list-none gap-6"
                  title={`Tone: ${row.tone}`}
                >
                  {/* Platform icon + name */}
                  <div className="flex items-center gap-5">
                    <span className="text-white/95">
                      <SocialIcon name={row.icon} size={36} className="" />
                    </span>
                    <span className="font-sans text-white"
                      style={{ fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 500, letterSpacing: "-0.015em" }}>
                      {row.platform}
                    </span>
                  </div>

                  {/* Focus (hidden on mobile) */}
                  <p className="hidden md:block font-sans text-white/90 leading-[1.5]"
                    style={{ fontSize: "16px", fontWeight: 400 }}>
                    {row.focus}
                  </p>

                  {/* Frequency */}
                  <p className="hidden md:block font-sans text-white/85 text-right"
                    style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "-0.005em" }}>
                    {row.frequency}
                  </p>

                  {/* Disclosure chevron */}
                  <span
                    className="material-symbols-outlined text-white/80 transition-transform group-open:rotate-45 justify-self-end"
                    style={{ fontSize: "28px" }}
                    aria-hidden="true"
                  >
                    add
                  </span>
                </summary>

                {/* Expanded tone panel */}
                <div className="pb-10 pl-0 md:pl-[60px] pr-6 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-10">
                  <div>
                    <p className="font-label uppercase text-white/70 mb-2"
                      style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                      Tone
                    </p>
                    <p className="italic text-white"
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(24px, 2.8vw, 34px)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        fontWeight: 400,
                      }}>
                      {row.tone}.
                    </p>
                  </div>
                  <div className="md:hidden">
                    <p className="font-label uppercase text-white/70 mb-2"
                      style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                      Focus
                    </p>
                    <p className="font-sans text-white/95 leading-[1.5]"
                      style={{ fontSize: "16px", fontWeight: 400 }}>
                      {row.focus}
                    </p>
                    <p className="font-label uppercase text-white/70 mt-4 mb-2"
                      style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                      Cadence
                    </p>
                    <p className="font-sans text-white"
                      style={{ fontSize: "16px", fontWeight: 500 }}>
                      {row.frequency}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Desktop hover hint */}
          <style>{`
            @media (hover: hover) and (min-width: 768px) {
              details summary:hover {
                background: rgba(255,255,255,0.06);
              }
            }
          `}</style>
        </div>
      </section>

      {/* ── CONTENT CADENCE → "Posting Rhythm" ── */}
      <section className="bg-[#0f1c2e] relative overflow-hidden">
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
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabelLight eyebrow="Year-Round Rhythm" title="Posting Rhythm" />

          <p className="font-sans text-white/70 leading-[1.6] mb-14 max-w-[680px] -mt-6"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 400 }}>
            Weekly, bi-weekly, and quarterly anchors — rotating our three pillars so every client sees the full story.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px border border-white/[0.10] overflow-hidden">
            {[
              {
                freq: "Weekly",
                title: "Social Posts",
                items: [
                  { tag: "People", tagColor: "bg-[#004290]/25 text-[#8FC5D9]", text: "Advisor spotlight or team moment" },
                  { tag: "Funded", tagColor: "bg-[#A73B44]/25 text-[#e88f7a]", text: "Capital stat, lending tip, or client win" },
                  { tag: "Connected", tagColor: "bg-white/[0.08] text-white/75", text: "Event promo, workshop recap, or partner shout-out" },
                ],
                note: "Rotate pillars weekly — never post the same pillar twice in a row.",
              },
              {
                freq: "Bi-Weekly",
                title: "Newsletter",
                items: [
                  { tag: "People", tagColor: "bg-[#004290]/25 text-[#8FC5D9]", text: "Lead story: client or advisor profile" },
                  { tag: "Funded", tagColor: "bg-[#A73B44]/25 text-[#e88f7a]", text: "Quick tip: capital access or SBA update" },
                  { tag: "Connected", tagColor: "bg-white/[0.08] text-white/75", text: "Program spotlight + upcoming events" },
                ],
                note: "Each issue features one pillar lead, two supporting.",
              },
              {
                freq: "Quarterly",
                title: "Anchor Content",
                items: [
                  { tag: "People", tagColor: "bg-[#004290]/25 text-[#8FC5D9]", text: "Signature client success story (long-form)" },
                  { tag: "Funded", tagColor: "bg-[#A73B44]/25 text-[#e88f7a]", text: "Capital impact report or lender feature" },
                  { tag: "Connected", tagColor: "bg-white/[0.08] text-white/75", text: "Event recap video or regional snapshot" },
                ],
                note: "Anchor content feeds 4–6 weeks of derivative posts.",
              },
            ].map((col) => (
              <div key={col.freq} className="bg-[#0f1c2e] p-8 md:p-10">
                <p className="font-label uppercase text-[#c4543a] mb-2"
                  style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                  {col.freq}
                </p>
                <h3 className="font-sans text-white tracking-[-0.015em] mb-6"
                  style={{ fontSize: "clamp(22px, 2.2vw, 28px)", fontWeight: 500, lineHeight: 1.15 }}>
                  {col.title}
                </h3>
                {col.items.map((item) => (
                  <div key={item.text} className="py-4 border-b border-white/[0.10] last:border-b-0 font-sans text-white/85 leading-[1.5]"
                    style={{ fontSize: "15px", fontWeight: 400 }}>
                    <span className={`inline-block font-label uppercase px-2 py-0.5 mr-2 ${item.tagColor}`}
                      style={{ fontSize: "10px", letterSpacing: "0.14em", fontWeight: 500 }}>
                      {item.tag}
                    </span>
                    {item.text}
                  </div>
                ))}
                <p className="font-sans italic text-white/55 mt-6 leading-[1.5]"
                  style={{ fontSize: "14px" }}>
                  {col.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-6 border border-white/[0.10] font-sans text-white/80 leading-[1.6]"
            style={{ fontSize: "15px" }}>
            <strong className="text-white" style={{ fontWeight: 500 }}>Pillar Rotation Rule:</strong>{" "}
            Each month, one pillar leads. The other two support. January = People-led. February = Funded-led. March = Connected-led. Repeat.
          </div>
        </div>
      </section>

      {/* ── RESPONDING TO COMMENTS ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <span
          className="material-symbols-outlined absolute -left-6 bottom-[-4%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(40vw, 380px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          chat_bubble
        </span>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <SectionLabel eyebrow="Community" title="Responding to Comments" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14">
            <div>
              <p className="font-sans text-navy/75 leading-[1.6] mb-10"
                style={{ fontSize: "clamp(17px, 1.6vw, 19px)", fontWeight: 400 }}>
                Respond publicly to negative comments, then move the
                discussion to a private space as quickly as possible.
              </p>
              <div className="bg-white border border-navy/[0.07] overflow-hidden">
                <div className="bg-navy px-6 py-4">
                  <p className="font-label uppercase text-white/65"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    Template Response
                  </p>
                </div>
                <div className="px-7 py-7 border-l-2 border-[#c4543a]">
                  <p className="font-sans italic text-navy leading-[1.5]"
                    style={{ fontFamily: "var(--serif)", fontSize: "clamp(19px, 1.8vw, 23px)", fontWeight: 400, letterSpacing: "-0.01em" }}>
                    &ldquo;We are so sorry you&rsquo;ve had a negative experience. Please
                    private message us with your email address so we can help you
                    resolve the issue.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border border-navy/[0.07] overflow-hidden">
                <div className="bg-navy px-6 py-4 flex items-center justify-between">
                  <p className="font-label uppercase text-white/65"
                    style={{ fontSize: "11px", letterSpacing: "0.22em" }}>
                    Facebook Comments Policy
                  </p>
                  <CopyButton text={commentPolicy} />
                </div>
                <div className="p-7 max-h-[320px] overflow-y-auto">
                  <p className="font-sans text-navy/80 leading-[1.65] whitespace-pre-wrap"
                    style={{ fontSize: "15px", fontWeight: 400 }}>
                    {commentPolicy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMAIL COMMUNICATIONS ── */}
      <section className="bg-[#0f1c2e] relative overflow-hidden">
        <div className="w-full h-[2px] bg-[#c4543a]" />
        <span
          className="material-symbols-outlined absolute -right-10 top-[5%] text-white/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          mail
        </span>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabelLight eyebrow="Email" title="Email Communications" />

          <p className="font-sans text-white/75 leading-[1.6] mb-14 max-w-[680px] -mt-6"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 400 }}>
            Email is the most direct digital connection with our clients.
            Treat it as a privilege.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-white/[0.10] overflow-hidden mb-16">
            {emailBestPractices.map((item, i) => (
              <div key={item.title} className="p-8 bg-[#0f1c2e]">
                <p className="font-label uppercase text-[#c4543a]/80 mb-4"
                  style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-sans text-white mb-3 tracking-[-0.01em]"
                  style={{ fontSize: "clamp(19px, 1.8vw, 22px)", fontWeight: 500, lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-white/75 leading-[1.6]"
                  style={{ fontSize: "15px", fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center justify-between mb-5">
              <p className="font-label uppercase text-white/75"
                style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                Required SBA &amp; ADA Disclaimer
              </p>
              <CopyButton text={sbaDisclaimer} />
            </div>
            <div className="border-l-2 border-[#c4543a]/50 pl-6 py-2">
              <p className="font-sans text-white/75 leading-[1.65] whitespace-pre-wrap"
                style={{ fontSize: "15px", fontWeight: 400 }}>
                {sbaDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELCOME DRIP SEQUENCE ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <span
          className="material-symbols-outlined absolute -right-8 top-[5%] text-navy/[0.025] pointer-events-none select-none"
          style={{ fontSize: "min(45vw, 460px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          mark_email_read
        </span>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <SectionLabel eyebrow="New Client Onboarding" title="Welcome Drip Sequence" />
          <div className="p-6 bg-white border border-navy/[0.08] font-sans text-navy/75 leading-[1.6] mb-12 -mt-6"
            style={{ fontSize: "15px", fontWeight: 400 }}>
            <strong className="text-navy" style={{ fontWeight: 500 }}>3-email drip, automated after first consultation.</strong>{" "}
            Each email introduces one pillar in sequence &mdash; People, then Funded, then Connected &mdash; so new clients understand the full scope. Suggested timing: Day 1, Day 7, Day 14.
          </div>

          <div className="space-y-10">
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
                body: ["Hi [First Name],", "NorCal SBDC has helped entrepreneurs across 36 counties access over $549M in funding. Whether you need capital now or want to be ready when the time comes, your advisor can help."],
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
                <p className="font-label uppercase text-navy/50 mb-3"
                  style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  {email.label}
                </p>
                <div className="bg-white shadow-md overflow-hidden max-w-[640px]">
                  <div className="w-full h-[2px] bg-[#c4543a]" />
                  <div className="bg-[#0f1c2e] text-white p-8 text-center">
                    <h3 className="font-sans tracking-[-0.02em] mb-2 whitespace-pre-line"
                      style={{ fontSize: "clamp(24px, 2.5vw, 30px)", fontWeight: 500, lineHeight: 1.15 }}>
                      {email.heading}
                    </h3>
                    <p className="font-sans italic text-white/75"
                      style={{ fontFamily: "var(--serif)", fontSize: "16px", fontWeight: 400 }}>
                      {email.preview}
                    </p>
                  </div>
                  <div className="p-8 font-sans text-navy leading-[1.65]"
                    style={{ fontSize: "16px", fontWeight: 400 }}>
                    {email.body.map((p, i) => <p key={i} className="mb-4">{p}</p>)}
                    <ul className="list-disc pl-5 mb-5 space-y-2">
                      {email.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <div className="mt-6 mb-5">
                      <span className="inline-block bg-[#004290] text-white font-sans px-6 py-3"
                        style={{ fontSize: "15px", fontWeight: 500, letterSpacing: "0.01em" }}>
                        {email.cta}
                      </span>
                    </div>
                    <p className="mt-6 text-navy/75">
                      {email.signoff}
                      <br />
                      <strong className="text-navy" style={{ fontWeight: 500 }}>NorCal SBDC</strong>
                      <br />
                      Your Business, Better.
                    </p>
                  </div>
                  <div className="bg-cream px-8 py-4 text-center font-sans text-navy/50 border-t border-navy/[0.06]"
                    style={{ fontSize: "13px", fontWeight: 400 }}>
                    &copy; 2026 NorCal SBDC. All rights reserved.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NextSectionLink title="Calendar" href="/calendar" />
    </>
  );
}
