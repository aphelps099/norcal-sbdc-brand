export default function SiteFooter() {
  return (
    <footer className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <span
          className="font-mono text-white/30 uppercase"
          style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}
        >
          &copy; 2026 Brand SBDC
        </span>
        <a
          href="https://norcalsbdc.org"
          target="_blank"
          rel="noopener noreferrer"
          className="link-reveal font-mono text-white/30 hover:text-white/60 transition-colors duration-300"
          style={{ fontSize: "0.55rem", letterSpacing: "0.1em" }}
        >
          norcalsbdc.org
        </a>
      </div>
    </footer>
  );
}
