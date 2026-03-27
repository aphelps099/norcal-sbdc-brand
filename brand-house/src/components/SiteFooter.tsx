export default function SiteFooter() {
  return (
    <footer className="bg-navy">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 py-8 flex items-center justify-between">
        <span
          className="font-sans text-white/25 uppercase font-600"
          style={{ fontSize: "0.56rem", letterSpacing: "0.12em" }}
        >
          &copy; 2026 Brand SBDC
        </span>
        <a
          href="https://norcalsbdc.org"
          target="_blank"
          rel="noopener noreferrer"
          className="link-reveal font-sans text-white/25 hover:text-white/50 transition-colors duration-500 font-500"
          style={{ fontSize: "0.56rem", letterSpacing: "0.08em" }}
        >
          norcalsbdc.org
        </a>
      </div>
    </footer>
  );
}
