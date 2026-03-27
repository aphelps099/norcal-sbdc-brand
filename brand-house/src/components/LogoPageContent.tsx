"use client";

import { useEffect, useRef } from "react";

/* ─── Section anchor nav data ─── */
const SECTIONS = [
  { id: "network", label: "Network Logo" },
  { id: "programs", label: "Program Logos" },
  { id: "stakeholders", label: "Stakeholder Logos" },
  { id: "centers", label: "Center Logos" },
  { id: "compliance", label: "Compliance" },
  { id: "misuse", label: "Logo Misuse" },
];

/* ─── Logo card types ─── */
interface LogoAsset {
  name: string;
  description: string;
  variants: { label: string; filename: string }[];
  preview: string;
  bgDark?: boolean;
}

/* ─── Network logos ─── */
const NETWORK_LOGOS: LogoAsset[] = [
  {
    name: "Full Color",
    description: "Primary network logo for light backgrounds",
    preview: "/images/logos/ncn-full-color.png",
    variants: [
      { label: "Web (PNG)", filename: "/downloads/logos/NCN-FullColor-Web.png" },
      { label: "Print (EPS)", filename: "/downloads/logos/NCN-FullColor-Print.eps" },
    ],
  },
  {
    name: "Reverse (White)",
    description: "For dark backgrounds — navy, navy-deep, photography",
    preview: "/images/logos/ncn-reverse.png",
    bgDark: true,
    variants: [
      { label: "Web (PNG)", filename: "/downloads/logos/NCN-Reverse-Web.png" },
      { label: "Print (EPS)", filename: "/downloads/logos/NCN-Reverse-Print.eps" },
    ],
  },
];

/* ─── Program logos ─── */
const PROGRAM_LOGOS: LogoAsset[] = [
  { name: "Veterans SBDC", description: "Veterans entrepreneurship program", preview: "/images/logos/prog-veterans.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/Veterans-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/Veterans-Reverse.png" }] },
  { name: "Women in Business", description: "Women's business center program", preview: "/images/logos/prog-wib.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/WIB-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/WIB-Reverse.png" }] },
  { name: "Capital Infusion", description: "Capital access program", preview: "/images/logos/prog-capital.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/Capital-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/Capital-Reverse.png" }] },
  { name: "NEP Program", description: "NorCal Entrepreneurship Program", preview: "/images/logos/prog-nep.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/NEP-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/NEP-Reverse.png" }] },
  { name: "International Trade", description: "International trade center program", preview: "/images/logos/prog-trade.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/Trade-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/Trade-Reverse.png" }] },
  { name: "Emerge Program", description: "Emerging business program", preview: "/images/logos/prog-emerge.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/Emerge-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/Emerge-Reverse.png" }] },
  { name: "APEX Accelerator", description: "Government contracting program", preview: "/images/logos/prog-apex.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/APEX-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/APEX-Reverse.png" }] },
];

/* ─── Stakeholder logos ─── */
const STAKEHOLDER_LOGOS: LogoAsset[] = [
  { name: "SBA", description: "U.S. Small Business Administration", preview: "/images/logos/stake-sba.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/SBA-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/SBA-Reverse.png" }] },
  { name: "California GoBiz", description: "Governor's Office of Business & Economic Development", preview: "/images/logos/stake-gobiz.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/GoBiz-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/GoBiz-Reverse.png" }] },
  { name: "America's SBDC", description: "National SBDC network", preview: "/images/logos/stake-americas.png", variants: [{ label: "Color (PNG)", filename: "/downloads/logos/Americas-Color.png" }, { label: "Reverse (PNG)", filename: "/downloads/logos/Americas-Reverse.png" }] },
];

/* ─── Center names ─── */
const CENTERS = [
  "Butte College SBDC",
  "Cascade SBDC",
  "Central Coast SBDC",
  "Central Sierra SBDC",
  "Greater Sacramento SBDC",
  "Humboldt SBDC",
  "Lake County SBDC",
  "Mendocino SBDC",
  "Napa-Sonoma SBDC",
  "Northeastern California SBDC",
  "San Francisco SBDC",
  "Silicon Valley SBDC",
  "Solano SBDC",
  "Contra Costa SBDC",
  "Alameda County SBDC",
  "San Mateo County SBDC",
];

/* ─── Logo misuse items ─── */
const MISUSE_ITEMS = [
  { label: "Do not alter proportions of logo.", type: "stretch" },
  { label: "Do not rearrange elements of the logo.", type: "rearrange" },
  { label: "Do not cut off or remove elements of the logo.", type: "crop" },
  { label: "Do not stretch or condense the logo.", type: "distort" },
  { label: "Do not place the logo in a box.", type: "box" },
  { label: "Do not place the logo on unapproved colors.", type: "color" },
  { label: "Do not change the orientation of the logo.", type: "rotate" },
  { label: "Do not add new graphic elements to the logo.", type: "add" },
];

/* ─── Section heading component ─── */
function SectionHeading({ id, title, number }: { id: string; title: string; number: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <div className="flex items-center gap-4 mb-3">
        <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-navy/30">
          {number}
        </span>
        <div className="h-[1px] flex-1 bg-navy/8" />
      </div>
      <h2 className="font-serif text-3xl md:text-4xl text-navy tracking-[-0.02em]">
        {title}
      </h2>
    </div>
  );
}

/* ─── Logo download card component ─── */
function LogoCard({ logo }: { logo: LogoAsset }) {
  return (
    <div className="group">
      <div
        className={`rounded-xl border overflow-hidden mb-4 flex items-center justify-center p-8 md:p-12 min-h-[180px] transition-shadow duration-300 group-hover:shadow-lg ${
          logo.bgDark
            ? "bg-navy border-navy/20"
            : "bg-white border-black/[0.06]"
        }`}
      >
        <div
          className={`w-full max-w-[200px] h-[80px] flex items-center justify-center rounded ${
            logo.bgDark ? "bg-white/10" : "bg-cream"
          }`}
        >
          <span
            className={`font-sans text-xs font-800 uppercase tracking-[0.1em] ${
              logo.bgDark ? "text-white/40" : "text-navy/25"
            }`}
          >
            {logo.name}
          </span>
        </div>
      </div>
      <h3 className="font-sans text-sm font-800 text-navy mb-1">{logo.name}</h3>
      <p className="font-sans text-sm text-text-secondary font-500 mb-3">
        {logo.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {logo.variants.map((v) => (
          <a
            key={v.label}
            href={v.filename}
            download
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-navy/[0.04] hover:bg-royal/10 hover:text-royal text-navy/60 text-[11px] font-sans font-800 uppercase tracking-[0.1em] transition-all duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <path d="M6 1v8M3 6.5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {v.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Section anchor navigation (in-page) ─── */
function SectionNav() {
  return (
    <nav className="flex flex-wrap gap-3 md:gap-4">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="font-sans text-[11px] font-800 uppercase tracking-[0.15em] text-navy/35 hover:text-royal transition-colors duration-200"
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}

/* ─── Main page content ─── */
export default function LogoPageContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!contentRef.current) return;

      gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".logo-section").forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: { trigger: section, start: "top 85%", once: true },
            }
          );
        });
      }, contentRef.current);
    }
    init();
  }, []);

  return (
    <div ref={contentRef} className="bg-cream">
      {/* ═══ Intro section ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 pt-16 md:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — logo preview */}
          <div className="flex items-center justify-center bg-white rounded-2xl border border-black/[0.05] p-12 md:p-16 min-h-[280px]">
            <div className="w-full max-w-[280px] flex flex-col items-center gap-3">
              <div className="w-full h-[120px] bg-cream rounded-lg flex items-center justify-center">
                <span className="font-sans text-xs font-800 uppercase tracking-[0.1em] text-navy/25">
                  Network Logo
                </span>
              </div>
            </div>
          </div>

          {/* Right — our logo text */}
          <div className="pt-2">
            <span className="font-sans text-[11px] font-800 uppercase tracking-[0.2em] text-royal mb-4 block">
              Our Logo
            </span>
            <p className="font-serif text-lg md:text-xl text-navy leading-relaxed mb-6">
              The California SBDC logo represents us at the very highest level
              and is vitally important to our brand. It acts as a signature, an
              identifier and a stamp of quality.
            </p>
            <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-6">
              It is, and should always be, the most consistent component in our
              communications. In order to maintain this consistency, a few simple
              guidelines should be followed.
            </p>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-pool/10 border border-pool/20">
              <span className="text-pool text-xl leading-none mt-0.5">✱</span>
              <p className="font-sans text-sm text-navy/70 font-500 leading-relaxed">
                SBDC logos should <strong className="font-800 text-navy">never</strong> be
                recreated or typeset. Only official logo files should be used in
                communications. The California SBDC logo as shown here will serve as
                the network&rsquo;s primary logo and trademark.
              </p>
            </div>
          </div>
        </div>

        {/* Section jump nav */}
        <div className="mt-16 pt-8 border-t border-navy/8">
          <SectionNav />
        </div>
      </section>

      {/* ═══ Network Logos ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <SectionHeading id="network" title="Network Logo" number="01" />
        <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
          The NorCal SBDC network logo is our primary mark. Use the full-color version
          on light backgrounds and the reverse version on dark backgrounds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NETWORK_LOGOS.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>
      </section>

      {/* ═══ Program Logos ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <SectionHeading id="programs" title="Program Logos" number="02" />
        <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
          Each program within the NorCal SBDC network has its own identity. These logos
          should appear on collateral and communications specific to their intended audiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAM_LOGOS.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>
      </section>

      {/* ═══ Stakeholder Logos ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <SectionHeading id="stakeholders" title="Stakeholder Logos" number="03" />
        <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
          Partner and stakeholder logos that appear alongside NorCal SBDC branding.
          Always use official versions provided here.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAKEHOLDER_LOGOS.map((logo) => (
            <LogoCard key={logo.name} logo={logo} />
          ))}
        </div>
      </section>

      {/* ═══ Center Logos ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <SectionHeading id="centers" title="Center Logos" number="04" />
        <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-4 max-w-xl">
          Each of our 16 regional centers has a customized logo. Click a center name
          below to download its logo package (includes full color and reverse variants
          in PNG and EPS formats).
        </p>
        <div className="flex items-start gap-3 p-5 rounded-xl bg-pool/10 border border-pool/20 mb-10 max-w-xl">
          <span className="text-pool text-lg leading-none mt-0.5">✱</span>
          <p className="font-sans text-sm text-navy/70 font-500 leading-relaxed">
            Center logos follow the same brand guidelines as the network logo.
            Do not modify, recreate, or typeset center logos. If you need a custom
            variation, contact the NorCal SBDC brand team.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
          {CENTERS.map((center) => {
            const slug = center.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={center}
                href={`/downloads/logos/centers/${slug}.zip`}
                download
                className="group flex items-center gap-2 py-2.5 border-b border-navy/6 hover:border-royal/30 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="text-navy/25 group-hover:text-royal transition-colors flex-shrink-0">
                  <path d="M6 1v8M3 6.5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-sans text-sm font-500 text-navy/70 group-hover:text-royal transition-colors duration-200">
                  {center}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ═══ Compliance Logos ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 py-16">
        <SectionHeading id="compliance" title="Compliance" number="05" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-sans text-sm font-800 text-navy mb-3">ADA Compliance Logo</h3>
            <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-4">
              The ADA compliance seal must be displayed on all public-facing digital
              properties including websites, email templates, and downloadable documents.
            </p>
            <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-6">
              Place the compliance logo in the footer area of websites, and on the last
              page of printed materials. Do not resize below 60px width for digital or
              0.5 inches for print.
            </p>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-coral/8 border border-coral/15">
              <span className="text-coral text-sm font-800 leading-none mt-0.5">!</span>
              <p className="font-sans text-[13px] text-navy/60 font-500 leading-relaxed">
                Federal funding recipients are required to display accessibility
                compliance indicators. Failure to include this mark may affect
                grant compliance status.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white rounded-xl border border-black/[0.05] p-12 min-h-[200px]">
            <div className="w-[120px] h-[120px] bg-cream rounded-lg flex items-center justify-center">
              <span className="font-sans text-[10px] font-800 uppercase tracking-[0.1em] text-navy/20 text-center leading-tight">
                ADA<br />Compliance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Logo Misuse ═══ */}
      <section className="logo-section max-w-[1200px] mx-auto px-8 md:px-16 pt-16 pb-24">
        <SectionHeading id="misuse" title="Misuse of Logo" number="06" />
        <p className="font-sans text-sm text-text-secondary font-500 leading-relaxed mb-10 max-w-xl">
          To protect the integrity of our brand, the following modifications are
          strictly prohibited. When in doubt, use the official files provided above.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {MISUSE_ITEMS.map((item) => (
            <div key={item.type} className="group">
              <div className="rounded-xl border border-red-200/40 bg-white p-6 flex items-center justify-center min-h-[140px] mb-3 relative overflow-hidden">
                {/* Placeholder for misuse illustration */}
                <div className="w-full h-[80px] bg-cream/60 rounded flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-coral/40">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                {/* Red corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-t-coral/15 border-l-[24px] border-l-transparent" />
                </div>
              </div>
              <p className="font-sans text-[13px] text-text-secondary font-500 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
