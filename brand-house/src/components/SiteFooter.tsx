export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-10 flex items-center justify-between">
        <span
          className="font-sans text-white/20 uppercase font-800"
          style={{ fontSize: "0.62rem", letterSpacing: "0.14em" }}
        >
          &copy; 2026 NorCal SBDC
        </span>
        <a
          href="https://norcalsbdc.org"
          target="_blank"
          rel="noopener noreferrer"
          className="link-reveal font-sans text-white/20 hover:text-white/40 transition-colors duration-500 font-800 uppercase"
          style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}
        >
          norcalsbdc.org
        </a>
      </div>
    </footer>
  );
}
