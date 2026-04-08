import SbdcWatermark from "./SbdcWatermark";

export default function SiteFooter() {
  return (
    <footer className="relative bg-navy-deep overflow-hidden">
      {/* Star watermark */}
      <SbdcWatermark
        className="absolute -right-[10%] -bottom-[15%] w-[50vw] max-w-[600px] text-white pointer-events-none select-none"
        opacity={0.035}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 sm:px-12 py-10 md:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span
            className="font-sans text-white/25 uppercase"
            style={{ fontSize: "0.58rem", letterSpacing: "0.15em" }}
          >
            &copy; 2026 NorCal SBDC &middot; All Rights Reserved
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://norcalsbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/25 hover:text-white/45 transition-colors duration-500 uppercase no-underline"
              style={{ fontSize: "0.58rem", letterSpacing: "0.12em" }}
            >
              norcalsbdc.org
            </a>
            <a
              href="https://www.californiasbdc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/25 hover:text-white/45 transition-colors duration-500 uppercase no-underline"
              style={{ fontSize: "0.58rem", letterSpacing: "0.12em" }}
            >
              californiasbdc.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
