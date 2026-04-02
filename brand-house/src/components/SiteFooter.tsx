import SbdcWatermark from "./SbdcWatermark";

const FOOTER_COLS = [
  {
    heading: "Brand House",
    links: [
      { label: "Colors", href: "/colors" },
      { label: "Typography", href: "/typography" },
      { label: "Logos", href: "/logos" },
      { label: "Voice & Tone", href: "/voice" },
      { label: "Photography", href: "/photography" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Content", href: "/content" },
      { label: "Calendar", href: "/calendar" },
      { label: "Stories", href: "/stories" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    heading: "Network",
    links: [
      { label: "NorCal SBDC", href: "https://norcalsbdc.org" },
      { label: "California SBDC", href: "https://www.californiasbdc.org" },
      { label: "SBA.gov", href: "https://www.sba.gov" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-navy-deep overflow-hidden">
      {/* Star watermark */}
      <SbdcWatermark
        className="absolute -right-[10%] -bottom-[15%] w-[50vw] max-w-[600px] text-white pointer-events-none select-none"
        opacity={0.035}
      />

      {/* Main footer */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 sm:px-12 pt-16 md:pt-20 pb-10">
        {/* Column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <h3
                className="text-white/25 mb-5 uppercase"
                style={{
                  fontFamily: "var(--sans-condensed)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                }}
              >
                {col.heading}
              </h3>
              <div className="h-[1px] bg-white/[0.06] mb-5" />
              <nav className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-sans text-[12px] font-400 text-white/30 hover:text-white/60 transition-colors duration-300 no-underline"
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Fourth column — brand mark */}
          <div className="flex flex-col justify-between">
            <div>
              <h3
                className="text-white/25 mb-5 uppercase"
                style={{
                  fontFamily: "var(--sans-condensed)",
                  fontWeight: 500,
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                }}
              >
                Connect
              </h3>
              <div className="h-[1px] bg-white/[0.06] mb-5" />
              <p className="font-sans text-[12px] font-400 text-white/25 leading-relaxed max-w-[240px]">
                Funded in part through a cooperative agreement with the
                U.S. Small Business Administration.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/[0.06] mb-6" />

        {/* Sub-footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span
            className="text-white/15 uppercase font-500"
            style={{ fontFamily: "var(--sans-condensed)", fontSize: "0.58rem", letterSpacing: "0.15em" }}
          >
            &copy; 2026 NorCal SBDC &middot; All Rights Reserved
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://norcalsbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-white/30 transition-colors duration-500 font-500 uppercase no-underline"
              style={{ fontFamily: "var(--sans-condensed)", fontSize: "0.58rem", letterSpacing: "0.12em" }}
            >
              norcalsbdc.org
            </a>
            <a
              href="https://www.californiasbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/15 hover:text-white/30 transition-colors duration-500 font-500 uppercase no-underline"
              style={{ fontFamily: "var(--sans-condensed)", fontSize: "0.58rem", letterSpacing: "0.12em" }}
            >
              californiasbdc.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
