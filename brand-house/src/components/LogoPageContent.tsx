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

/* ─── Reusable grid widths ─── */
const COL_NARROW = "max-w-[780px] mx-auto px-8 md:px-12";
const COL_WIDE = "max-w-[960px] mx-auto px-8 md:px-12";

/* ─── Section heading component ─── */
function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <h2 className="font-serif text-2xl md:text-3xl text-navy tracking-[-0.02em]">
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
        className={`rounded-lg border overflow-hidden mb-3 flex items-center justify-center p-8 min-h-[160px] transition-shadow duration-300 group-hover:shadow-md ${
          logo.bgDark
            ? "bg-navy border-navy/20"
            : "bg-white border-black/[0.06]"
        }`}
      >
        <div
          className={`w-full max-w-[160px] h-[64px] flex items-center justify-center rounded ${
            logo.bgDark ? "bg-white/10" : "bg-[#f0f0ed]"
          }`}
        >
          <span
            className={`font-sans text-[10px] font-800 uppercase tracking-[0.1em] ${
              logo.bgDark ? "text-white/40" : "text-navy/20"
            }`}
          >
            {logo.name}
          </span>
        </div>
      </div>
      <h3 className="font-sans text-[13px] font-800 text-navy mb-0.5">{logo.name}</h3>
      <p className="font-sans text-[13px] text-text-secondary font-500 mb-2.5">
        {logo.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {logo.variants.map((v) => (
          <a
            key={v.label}
            href={v.filename}
            download
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-navy/[0.04] hover:bg-royal/10 hover:text-royal text-navy/50 text-[10px] font-sans font-800 uppercase tracking-[0.08em] transition-all duration-200"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-50">
              <path d="M6 1v8M3 6.5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {v.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Section anchor navigation (pills) ─── */
function SectionNav() {
  return (
    <div>
      <p className="font-sans text-sm text-text-secondary font-500 mb-5">
        Find what logo you need.
      </p>
      <nav className="flex flex-wrap gap-2.5">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="inline-block px-4 py-2 rounded-full border-2 border-navy/12 font-sans text-[11px] font-800 uppercase tracking-[0.12em] text-navy/40 hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
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
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
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
    <div ref={contentRef} className="bg-white">
      {/* ═══ Intro section — offset 2-column ═══ */}
      <section className="logo-section py-16 md:py-24">
        <div className={COL_WIDE}>
          <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-14 items-start">
            {/* Left — logo preview */}
            <div className="flex items-center justify-center bg-[#f7f7f5] rounded-xl border border-black/[0.05] p-10 md:p-12 min-h-[240px]">
              <div className="w-full max-w-[220px] flex flex-col items-center gap-3">
                <div className="w-full h-[100px] bg-white rounded flex items-center justify-center">
                  <span className="font-sans text-[10px] font-800 uppercase tracking-[0.1em] text-navy/20">
                    Network Logo
                  </span>
                </div>
              </div>
            </div>

            {/* Right — our logo text */}
            <div>
              <span className="font-sans text-[12px] font-700 uppercase tracking-[0.2em] text-royal mb-5 block">
                Our Logo
              </span>
              <p className="font-serif text-lg md:text-xl text-navy leading-relaxed mb-5">
                The California SBDC logo represents us at the very highest level
                and is vitally important to our brand. It acts as a signature, an
                identifier and a stamp of quality.
              </p>
              <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-6">
                It is, and should always be, the most consistent component in our
                communications. In order to maintain this consistency, a few simple
                guidelines should be followed.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-pool/10 border border-pool/20">
                <span className="text-pool text-lg leading-none mt-0.5">✱</span>
                <p className="font-sans text-sm text-navy/60 font-500 leading-relaxed">
                  SBDC logos should <strong className="font-800 text-navy">never</strong> be
                  recreated or typeset. Only official logo files should be used in
                  communications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section jump nav — tight column */}
        <div className={`${COL_NARROW} mt-14 pt-7 border-t border-navy/8`}>
          <SectionNav />
        </div>
      </section>

      {/* ═══ Network Logos ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="network" title="Network Logo" />
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-8 max-w-lg">
            The NorCal SBDC network logo is our primary mark. Use the full-color version
            on light backgrounds and the reverse version on dark backgrounds.
          </p>
        </div>
        <div className={COL_WIDE}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NETWORK_LOGOS.map((logo) => (
              <LogoCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Program Logos ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="programs" title="Program Logos" />
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-8 max-w-lg">
            Each program within the NorCal SBDC network has its own identity. These logos
            should appear on collateral specific to their intended audiences.
          </p>
        </div>
        <div className={COL_WIDE}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_LOGOS.map((logo) => (
              <LogoCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Stakeholder Logos ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="stakeholders" title="Stakeholder Logos" />
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-8 max-w-lg">
            Partner and stakeholder logos that appear alongside NorCal SBDC branding.
            Always use official versions provided here.
          </p>
        </div>
        <div className={COL_WIDE}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {STAKEHOLDER_LOGOS.map((logo) => (
              <LogoCard key={logo.name} logo={logo} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Center Logos ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="centers" title="Center Logos" />
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-3 max-w-lg">
            Each of our 16 regional centers has a customized logo. Click a center name
            below to download its logo package (includes full color and reverse variants
            in PNG and EPS formats).
          </p>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-pool/10 border border-pool/20 mb-8 max-w-lg">
            <span className="text-pool text-base leading-none mt-0.5">✱</span>
            <p className="font-sans text-sm text-navy/60 font-500 leading-relaxed">
              Center logos follow the same brand guidelines as the network logo.
              Do not modify, recreate, or typeset center logos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
            {CENTERS.map((center) => {
              const slug = center.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={center}
                  href={`/downloads/logos/centers/${slug}.zip`}
                  download
                  className="group flex items-center gap-2 py-2 border-b border-navy/6 hover:border-royal/30 transition-colors duration-200"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-navy/20 group-hover:text-royal transition-colors flex-shrink-0">
                    <path d="M6 1v8M3 6.5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-sans text-sm font-500 text-navy/60 group-hover:text-royal transition-colors duration-200">
                    {center}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Compliance Logos ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="compliance" title="Compliance" />
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-start">
            <div>
              <h3 className="font-sans text-sm font-800 text-navy mb-3">ADA Compliance Logo</h3>
              <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-3">
                The ADA compliance seal must be displayed on all public-facing digital
                properties including websites, email templates, and downloadable documents.
              </p>
              <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-5">
                Place the compliance logo in the footer area of websites, and on the last
                page of printed materials. Do not resize below 60px width for digital or
                0.5 inches for print.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-coral/8 border border-coral/15">
                <span className="text-coral text-sm font-800 leading-none mt-0.5">!</span>
                <p className="font-sans text-[13px] text-navy/55 font-500 leading-relaxed">
                  Federal funding recipients are required to display accessibility
                  compliance indicators. Failure to include this mark may affect
                  grant compliance status.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#f7f7f5] rounded-lg border border-black/[0.05] p-10 min-h-[160px]">
              <div className="w-[100px] h-[100px] bg-white rounded flex items-center justify-center">
                <span className="font-sans text-[9px] font-800 uppercase tracking-[0.1em] text-navy/18 text-center leading-tight">
                  ADA<br />Compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Logo Misuse ═══ */}
      <section className="logo-section pt-14 pb-24">
        <div className={COL_NARROW}>
          <SectionHeading id="misuse" title="Misuse of Logo" />
          <p className="font-sans text-base text-text-secondary font-500 leading-relaxed mb-8 max-w-lg">
            To protect the integrity of our brand, the following modifications are
            strictly prohibited. When in doubt, use the official files provided above.
          </p>
        </div>
        <div className={COL_WIDE}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MISUSE_ITEMS.map((item) => (
              <div key={item.type}>
                <div className="rounded-lg border border-coral/10 bg-white p-5 flex items-center justify-center min-h-[120px] mb-2.5 relative overflow-hidden">
                  <div className="w-full h-[60px] bg-[#f7f7f5] rounded flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-coral/30">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute top-0 right-0 w-5 h-5">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-coral/12 border-l-[20px] border-l-transparent" />
                  </div>
                </div>
                <p className="font-sans text-[13px] text-text-secondary font-500 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
