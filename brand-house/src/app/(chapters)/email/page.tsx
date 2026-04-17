import InteriorHero from "@/components/InteriorHero";
import CopyButton from "@/components/CopyButton";
import NextSectionLink from "@/components/NextSectionLink";
import GrainBackdrop from "@/components/GrainBackdrop";

const emailBestPractices = [
  { title: "One Clear Call to Action", desc: "Every email should have one primary goal. Don't split attention across five different asks." },
  { title: "Mobile-First Design", desc: "Over 60% of emails are opened on mobile. Use single-column layouts, large tap targets, and concise copy." },
  { title: "Include Required Disclaimers", desc: "Every client and partner-facing mass email must include the SBA and ADA disclaimer. No exceptions." },
];

const sbaDisclaimer = `Funded in part through a cooperative agreement with the US Small Business Administration (SBA). Funded in part through a grant with the Governor's Office of Business and Economic Development. All opinions, conclusions, or recommendations expressed are those of the author(s) and do not necessarily reflect the view of the SBA, California Office of the Small Business Advocate or Cal Poly Humboldt sponsored programs.\n\nReasonable accommodations for persons with disabilities will be made if requested at least 72 hours in advance. Contact: [contact name] at [contact phone number] or email: [contact email].`;

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="border-t border-navy/20 pt-6 mb-12">
      <p className="font-label uppercase text-navy/65 mb-3"
        style={{ fontSize: "11px", letterSpacing: "0.22em" }}>{eyebrow}</p>
      <h2 className="font-sans text-navy tracking-[-0.015em]"
        style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 500, lineHeight: 1.05 }}>{title}</h2>
    </div>
  );
}

const drip = [
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
];

export default function EmailPage() {
  return (
    <>
      <GrainBackdrop />
      <div className="relative" style={{ zIndex: 1 }}>
      <InteriorHero
        chapterNumber="07"
        category="strategy"
        title="Email"
        subtitle="Email is the most direct digital connection with our clients. Treat it as a privilege."
        showRule={false}
      />

      {/* ── EMAIL PRINCIPLES — cream ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>

        <span
          className="material-symbols-outlined absolute -right-10 top-[5%] text-navy/[0.04] pointer-events-none select-none"
          style={{ fontSize: "min(50vw, 500px)", fontVariationSettings: "'FILL' 1, 'wght' 200", lineHeight: 1 }}
          aria-hidden="true"
        >
          mail
        </span>
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
          <SectionLabel eyebrow="Principles" title="Three rules, every send." />

          <p className="font-sans text-navy/75 leading-[1.6] mb-14 max-w-[680px] -mt-6"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 400 }}>
            Keep it focused, make it mobile, and stay compliant. Every email
            representing NorCal SBDC follows these three rules.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-navy/10 overflow-hidden mb-16 bg-navy/10">
            {emailBestPractices.map((item, i) => (
              <div key={item.title} className="p-8 bg-cream">
                <p className="font-label uppercase text-[#1D5AA7] mb-4"
                  style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-sans text-navy mb-3 tracking-[-0.01em]"
                  style={{ fontSize: "clamp(19px, 1.8vw, 22px)", fontWeight: 500, lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p className="font-sans text-navy/75 leading-[1.6]"
                  style={{ fontSize: "15px", fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center justify-between mb-5">
              <p className="font-label uppercase text-navy/70"
                style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                Required SBA &amp; ADA Disclaimer
              </p>
              <CopyButton text={sbaDisclaimer} />
            </div>
            <div className="border-l-2 border-[#1D5AA7] pl-6 py-2">
              <p className="font-sans text-navy/75 leading-[1.65] whitespace-pre-wrap"
                style={{ fontSize: "15px", fontWeight: 400 }}>
                {sbaDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WELCOME DRIP SEQUENCE — cream ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#f5f4f0" }}>
        <span
          className="material-symbols-outlined absolute -right-8 top-[5%] text-navy/[0.035] pointer-events-none select-none"
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
            {drip.map((email) => (
              <div key={email.label}>
                <p className="font-label uppercase text-navy/60 mb-3"
                  style={{ fontSize: "11px", letterSpacing: "0.22em", fontWeight: 500 }}>
                  {email.label}
                </p>
                <div className="bg-white shadow-md overflow-hidden max-w-[640px]">
                  <div className="w-full h-[2px] bg-[#1D5AA7]" />
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
      </div>
    </>
  );
}
