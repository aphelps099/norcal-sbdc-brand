"use client";

import { useEffect, useRef, useState } from "react";
import CopyButton from "./CopyButton";

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

/* ─── Carousel colors ─── */
const CAROUSEL_COLORS = [
  "linear-gradient(135deg, #13171C 0%, #2B3035 100%)",   // Midnight → Slate
  "linear-gradient(135deg, #004290 0%, #5684BA 100%)",   // Cobalt → Steel
  "linear-gradient(135deg, #A73B44 0%, #5684BA 100%)",   // Berry → Steel
  "linear-gradient(135deg, #00685E 0%, #004290 100%)",   // Evergreen → Cobalt
  "linear-gradient(135deg, #5684BA 0%, #85A3C8 100%)",   // Steel → Fog
];

/* ─── Network logos ─── */
const NETWORK_LOGOS: LogoAsset[] = [
  {
    name: "Full Color",
    description: "Primary network logo for light backgrounds",
    preview: "/logos/NCN_ColorBand_Logo-300x214.webp",
    variants: [
      { label: "Web (PNG)", filename: "/logos/NCN_ColorBand_Logo-300x214.webp" },
      { label: "Print (EPS)", filename: "/downloads/logos/NCN-FullColor-Print.eps" },
    ],
  },
  {
    name: "Reverse (White)",
    description: "For dark backgrounds — navy, navy-deep, photography",
    preview: "/logos/NCN_Band_Logo_White.png",
    bgDark: true,
    variants: [
      { label: "Web (PNG)", filename: "/logos/NCN_Band_Logo_White.png" },
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

/* ─── Compliance copy blocks ─── */
const SBA_DISCLAIMER = `Funded in part through a cooperative agreement with the U.S. Small Business Administration. All opinions, conclusions or recommendations expressed are those of the author(s) and do not necessarily reflect the views of the SBA or Cal Poly Humboldt Sponsored Programs Foundation.`;

const GOBIZ_ACK_PROJECT = `Funded in part through a Grant with the Governor's Office of Business and Economic Development.`;

const GOBIZ_ACK_EDITORIAL = `Funded in part through a Grant with the California Office of the Small Business Advocate. All opinions, conclusions, and/or recommendations expressed herein are those of the author(s) and do not necessarily reflect the views of the California Office of the Small Business Advocate.`;

const CAL_POLY_NOTE = `Cal Poly Humboldt serves as the Lead Center's regional host and is located in Arcata, CA.`;

const ADA_STATEMENT = `Reasonable accommodations for persons with disabilities will be made if requested at least 72 hours in advance of this event; please send an email with the subject header ACCOMMODATION REQUEST to [@service center location/program name, phone + email contact].`;

const ALL_FUNDER_ACK = `Funded in part through a cooperative agreement with the US Small Business Administration (SBA). Funded in part through a Grant with the California Office of the Small Business Advocate (GO-Biz). All opinions, conclusions, or recommendations expressed are those of the author(s) and do not necessarily reflect the views of the SBA, Go-Biz, or Cal Poly Humboldt sponsored programs.`;

/* ─── Disclaimer & logo usage chart ───
   Columns from PDF: SBA / GO-Biz / ADA / Cal Poly Humboldt.
   "✓" = required, "—" = not required, "Always" = required every time. */
const COMPLIANCE_COLUMNS = [
  "SBA Logo + Disclaimer",
  "GO-Biz Logo + Disclaimer",
  "ADA Accommodation",
  "Cal Poly Humboldt Disclaimer",
] as const;

const COMPLIANCE_MATRIX: { context: string; values: [string, string, string, string] }[] = [
  { context: "Training Events in NeoSerra", values: ["✓", "✓", "✓", "—"] },
  { context: "Event Flyer", values: ["✓", "✓", "✓", "—"] },
  { context: "Newsletter Footer", values: ["✓", "✓", "✓", "—"] },
  { context: "Website Event", values: ["✓", "✓", "✓", "—"] },
  { context: "Zoom", values: ["✓", "✓", "✓", "—"] },
  { context: "Social Media Events", values: ["✓", "✓", "✓", "—"] },
  { context: "Social Media Commentary", values: ["—", "—", "—", "—"] },
  { context: "PowerPoint Slide Decks", values: ["✓", "✓", "N/A", "Always"] },
];

/* ─── Funder blocks data ─── */
interface Funder {
  name: string;
  preview: string;
  blurb: string;
  disclaimers: { label: string; text: string; heading?: string }[];
}

const FUNDERS: Funder[] = [
  {
    name: "U.S. Small Business Administration",
    preview: "/images/logos/stake-sba.png",
    blurb:
      "Created in 1953, the SBA is the only cabinet-level federal agency fully dedicated to small businesses, providing counseling, capital, and contracting expertise.",
    disclaimers: [{ label: "SBA Disclaimer", text: SBA_DISCLAIMER }],
  },
  {
    name: "Governor's Office of Business & Economic Development (GO-Biz)",
    preview: "/images/logos/stake-gobiz.png",
    blurb:
      "GO-Biz serves as California's leader for job growth, economic development, and business assistance efforts.",
    disclaimers: [
      {
        label: "GO-Biz — Project Funds",
        heading: "Materials produced with Project Funds",
        text: GOBIZ_ACK_PROJECT,
      },
      {
        label: "GO-Biz — Editorial",
        heading: "Materials with editorial content",
        text: GOBIZ_ACK_EDITORIAL,
      },
    ],
  },
  {
    name: "Cal Poly Humboldt",
    preview: "/images/logos/stake-calpoly.png",
    blurb: CAL_POLY_NOTE,
    disclaimers: [],
  },
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

/* ─── Section heading component ───
   Matches the site-wide section rhythm: heading + 2px container-width rule
   at rgba(15,28,46,0.18) (same weight as nav underline). */
function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-8">
      <h2
        className="text-navy"
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 500,
          fontSize: "clamp(28px, 3.2vw, 40px)",
          letterSpacing: "-0.015em",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>
      <div
        aria-hidden
        className="mt-6 md:mt-8"
        style={{ height: 2, background: "rgba(15,28,46,0.18)" }}
      />
    </div>
  );
}

/* ─── Logo carousel component ─── */
function LogoCarousel() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % CAROUSEL_COLORS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative overflow-hidden border border-black/[0.05] flex items-center justify-center p-10 md:p-12 min-h-[240px] transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ background: CAROUSEL_COLORS[colorIndex] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/NCN_Band_Logo_White.png"
        alt="NorCal SBDC Network Logo"
        className="w-full max-w-[260px] h-auto relative z-10"
      />
    </div>
  );
}

/* ─── Logo download card component ─── */
function LogoCard({ logo }: { logo: LogoAsset }) {
  return (
    <div className="group">
      <div
        className={`border overflow-hidden mb-3 flex items-center justify-center p-8 min-h-[160px] transition-shadow duration-300 group-hover:shadow-md ${
          logo.bgDark
            ? "bg-navy border-navy/20"
            : "bg-white border-black/[0.06]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo.preview}
          alt={logo.name}
          className="w-full max-w-[200px] h-auto"
        />
      </div>
      <h3 className="font-label text-[13px] text-navy mb-0.5">{logo.name}</h3>
      <p className="font-sans text-[13px] text-text-secondary mb-2.5">
        {logo.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {logo.variants.map((v) => (
          <a
            key={v.label}
            href={v.filename}
            download
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-navy/[0.04] hover:bg-royal/10 hover:text-royal text-navy/50 text-[10px] font-sans font-label uppercase tracking-[0.08em] transition-all duration-200"
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

/* ─── Copy-ready disclaimer card ───
   Navy utility card pattern lifted from the Email page disclaimer block.
   Vertical label rail on desktop, horizontal label on mobile, CopyButton top-right. */
function DisclaimerCard({
  label,
  text,
  heading,
}: {
  label: string;
  text: string;
  heading?: string;
}) {
  return (
    <div
      className="grid gap-6 md:gap-10"
      style={{
        gridTemplateColumns: "auto minmax(0,1fr) auto",
        backgroundColor: "#0f1c2e",
        color: "#f5f4f0",
        padding: "28px 32px 32px",
        alignItems: "start",
      }}
    >
      <div
        className="hidden md:flex"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          alignSelf: "stretch",
          alignItems: "center",
          paddingRight: 8,
          borderRight: "1px solid rgba(255,255,255,0.15)",
          fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#85A3C8",
        }}
      >
        {label}
      </div>

      <div
        className="md:hidden"
        style={{
          fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#85A3C8",
          paddingBottom: 10,
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          gridColumn: "1 / -1",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontFamily: "proxima-sera, var(--serif)",
          fontWeight: 300,
          fontSize: 15,
          lineHeight: 1.6,
          color: "#f5f4f0",
          opacity: 0.92,
        }}
      >
        {heading && (
          <div
            style={{
              fontFamily: "var(--sans-label, 'Roboto Mono', monospace)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#85A3C8",
              marginBottom: 10,
              opacity: 0.9,
            }}
          >
            {heading}
          </div>
        )}
        <p>{text}</p>
      </div>

      <div className="self-start">
        <CopyButton text={text} />
      </div>
    </div>
  );
}

/* ─── Section anchor navigation (pills) ─── */
function SectionNav() {
  return (
    <div>
      <h3
        className="font-serif italic text-navy mb-8"
        style={{
          fontSize: "clamp(32px, 3.6vw, 48px)",
          lineHeight: 1.05,
          letterSpacing: "-0.025em",
        }}
      >
        Find what logo you need.
      </h3>
      <nav className="flex flex-wrap gap-3">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-navy/20 font-sans text-[16px] text-navy hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
          >
            <span>{s.label}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
    <div ref={contentRef}>
      {/* ═══ Intro section — section jump nav ═══ */}
      <section className="logo-section py-16 md:py-24">
        <div className={COL_NARROW}>
          <SectionNav />
        </div>
      </section>

      {/* ═══ Network Logos ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="network" title="Network Logo" />
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
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
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
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
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
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
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-3 max-w-lg">
            Each of our 16 regional centers has a customized logo. Click a center name
            below to download its logo package (includes full color and reverse variants
            in PNG and EPS formats).
          </p>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-pool/10 border border-pool/20 mb-8 max-w-lg">
            <span className="text-pool text-base leading-none mt-0.5">✱</span>
            <p className="font-sans text-sm text-navy/60 leading-relaxed">
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
                  <span className="font-sans text-sm text-navy/60 group-hover:text-royal transition-colors duration-200">
                    {center}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ Compliance ═══ */}
      <section className="logo-section py-14">
        <div className={COL_NARROW}>
          <SectionHeading id="compliance" title="Compliance" />
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-10 max-w-lg">
            Every client- and partner-facing piece must acknowledge our funders. Use the chart
            below to confirm which logos and disclaimers a given format requires, then copy the
            exact, approved language from the funder blocks that follow. When in doubt, include
            all three.
          </p>

          {/* ── Disclaimer & Logo Chart ── */}
          <h3 className="font-label text-sm text-navy mb-4 tracking-[0.08em] uppercase">
            Disclaimer &amp; Logo Chart
          </h3>
          <div className="overflow-x-auto mb-14 border border-navy/10 rounded-lg">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-navy text-cream">
                  <th
                    scope="col"
                    className="text-left px-4 py-3 font-label text-[11px] uppercase tracking-[0.1em]"
                  >
                    Context
                  </th>
                  {COMPLIANCE_COLUMNS.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="text-center px-3 py-3 font-label text-[11px] uppercase tracking-[0.1em] border-l border-white/10"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE_MATRIX.map((row, i) => (
                  <tr
                    key={row.context}
                    className={i % 2 === 1 ? "bg-navy/[0.02]" : undefined}
                  >
                    <th
                      scope="row"
                      className="text-left px-4 py-3 font-sans text-sm text-navy border-t border-navy/10 font-normal"
                    >
                      {row.context}
                    </th>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className="text-center px-3 py-3 font-sans text-sm text-navy/70 border-t border-l border-navy/10"
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Funder blocks ── */}
          <div className="space-y-14">
            {FUNDERS.map((funder) => (
              <div
                key={funder.name}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start"
              >
                <div>
                  <div className="flex items-center justify-center bg-[#f7f7f5] rounded-lg border border-black/[0.05] p-6 min-h-[160px] mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={funder.preview}
                      alt={funder.name}
                      className="w-full max-w-[160px] h-auto"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-label text-sm text-navy mb-2 tracking-[0.08em] uppercase">
                    {funder.name}
                  </h3>
                  <p className="font-sans text-base text-text-secondary leading-relaxed mb-5">
                    {funder.blurb}
                  </p>
                  {funder.disclaimers.length > 0 && (
                    <div className="space-y-4">
                      {funder.disclaimers.map((d) => (
                        <DisclaimerCard
                          key={d.label}
                          label={d.label}
                          heading={d.heading}
                          text={d.text}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── ADA Accommodation Statement ── */}
          <div className="mt-14">
            <h3 className="font-label text-sm text-navy mb-2 tracking-[0.08em] uppercase">
              ADA Accommodation Statement
            </h3>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5 max-w-lg">
              Include on all event flyers, emails, newsletters, website events, and Zoom
              registrations.
            </p>
            <DisclaimerCard label="ADA Accommodation" text={ADA_STATEMENT} />
          </div>

          {/* ── Combined funder acknowledgment ── */}
          <div className="mt-14">
            <h3 className="font-label text-sm text-navy mb-2 tracking-[0.08em] uppercase">
              Sample of All-Funder Acknowledgment
            </h3>
            <p className="font-sans text-base text-text-secondary leading-relaxed mb-5 max-w-lg">
              Safe default when a piece touches multiple funders. Paste as-is into footers
              and closing slides.
            </p>
            <DisclaimerCard label="All-Funder Acknowledgment" text={ALL_FUNDER_ACK} />
          </div>

          {/* ── Stakes reminder ── */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-coral/[0.08] border border-coral/15 mt-10">
            <span className="text-coral text-sm font-label leading-none mt-0.5">!</span>
            <p className="font-sans text-[13px] text-navy/55 leading-relaxed">
              Federal and state funding recipients are required to display these
              acknowledgments. Missing or modified language may affect grant compliance
              status — copy the text here verbatim.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Logo Misuse ═══ */}
      <section className="logo-section pt-14 pb-24">
        <div className={COL_NARROW}>
          <SectionHeading id="misuse" title="Misuse of Logo" />
          <p className="font-sans text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
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
                <p className="font-sans text-[13px] text-text-secondary leading-snug">
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
