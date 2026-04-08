"use client";

import { useState } from "react";

const CENTERS = [
  "NorCal SBDC Network — Lead Center",
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

const LOGO_URL =
  "https://norcal-sbdc-brand-production.up.railway.app/logos/NCN_ColorBand_Logo-300x214.webp";

type SigStyle = "two-column" | "mono" | "compact";

const STYLE_OPTIONS: { id: SigStyle; label: string; desc: string }[] = [
  { id: "two-column", label: "Two Column", desc: "Logo + info side by side" },
  { id: "mono", label: "Minimal Mono", desc: "Clean, tech-forward" },
  { id: "compact", label: "Compact", desc: "Space-efficient" },
];

/* ─────────────────────────────────────────────────────────
   Shared helpers
   ───────────────────────────────────────────────────────── */

/** Title Case: "marketing and technology director" → "Marketing and Technology Director" */
function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}

function orgLines(center: string) {
  const isLead = center.includes("Lead Center");
  return {
    line1: "NORCAL SBDC NETWORK",
    line2: isLead ? "LEAD CENTER" : center.replace(" SBDC", "").toUpperCase(),
  };
}

/* ─────────────────────────────────────────────────────────
   Style 1 — Two Column (default)
   ───────────────────────────────────────────────────────── */

function buildTwoColumnHtml(f: {
  name: string; title: string; center: string; phone: string; email: string;
}) {
  const { line1, line2 } = orgLines(f.center);
  const displayTitle = toTitleCase(f.title.trim());

  const contactRows: string[] = [];
  if (f.phone.trim()) {
    contactRows.push(
      `<tr><td style="font-size:13px;color:#3d4f5f;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;padding-bottom:0;">M: ${f.phone.trim()}</td></tr>`
    );
  }
  if (f.email.trim()) {
    contactRows.push(
      `<tr><td style="padding-bottom:0;"><a href="mailto:${f.email.trim()}" style="color:#004290;font-size:13px;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;text-decoration:none;">${f.email.trim()}</a></td></tr>`
    );
  }

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;color:#1b2a3d;">
  <tr>
    <td style="vertical-align:top;padding-right:14px;border-right:2px solid #004290;">
      <img src="${LOGO_URL}" alt="America's SBDC California — Northern CA Network" width="100" style="display:block;width:100px;height:auto;" />
    </td>
    <td style="vertical-align:top;padding-left:14px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr><td style="font-size:15px;font-weight:700;color:#1b2a3d;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.02em;line-height:1.2;">${f.name.trim().toUpperCase()}</td></tr>
        <tr><td style="font-size:13px;color:#3d4f5f;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;padding-bottom:4px;">${displayTitle}</td></tr>
        <tr><td style="font-size:12px;color:#1b2a3d;line-height:1;padding-bottom:4px;">—</td></tr>
        <tr><td style="font-size:10px;font-weight:600;color:#1b2a3d;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.08em;line-height:1.3;">${line1}</td></tr>
        <tr><td style="font-size:10px;font-weight:400;color:#3d4f5f;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.08em;padding-bottom:4px;">${line2}</td></tr>
${contactRows.join("\n")}
        <tr><td><a href="https://norcalsbdc.org" style="color:#004290;font-size:13px;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;text-decoration:none;font-weight:500;">norcalsbdc.org</a></td></tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─────────────────────────────────────────────────────────
   Style 2 — Minimal Mono
   ───────────────────────────────────────────────────────── */

function buildMonoHtml(f: {
  name: string; title: string; center: string; phone: string; email: string;
}) {
  const centerLabel = f.center.includes("Lead Center")
    ? "Northern California SBDC"
    : f.center;
  const displayTitle = toTitleCase(f.title.trim());

  const contactLines: string[] = [];
  if (f.phone.trim()) contactLines.push(f.phone.trim());
  if (f.email.trim()) {
    contactLines.push(
      `<a href="mailto:${f.email.trim()}" style="color:#333;text-decoration:none;">${f.email.trim()}</a>`
    );
  }
  contactLines.push(
    `<a href="https://norcalsbdc.org" style="color:#333;text-decoration:none;">norcalsbdc.org</a>`
  );

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:'Roboto Mono','SF Mono','Courier New',monospace;font-size:12px;line-height:1.6;color:#333;">
  <tr><td style="font-weight:600;font-size:13px;">${toTitleCase(f.name.trim())}</td></tr>
  <tr><td style="color:#888;">${displayTitle} · ${centerLabel}</td></tr>
  <tr><td style="color:#666;padding-top:8px;">${contactLines.join("<br>")}</td></tr>
  <tr>
    <td style="padding-top:12px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;padding-right:10px;">
            <img src="${LOGO_URL}" alt="NorCal SBDC" width="40" style="display:block;width:40px;height:auto;" />
          </td>
          <td style="vertical-align:middle;font-family:'Roboto Mono','SF Mono','Courier New',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#004290;">Your Business People.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─────────────────────────────────────────────────────────
   Style 3 — Compact
   ───────────────────────────────────────────────────────── */

function buildCompactHtml(f: {
  name: string; title: string; center: string; phone: string; email: string;
}) {
  const displayTitle = toTitleCase(f.title.trim());
  const contactParts: string[] = [];
  if (f.phone.trim()) contactParts.push(f.phone.trim());
  if (f.email.trim()) {
    contactParts.push(
      `<a href="mailto:${f.email.trim()}" style="color:#1e3a5f;text-decoration:none;">${f.email.trim()}</a>`
    );
  }
  contactParts.push(
    `<a href="https://norcalsbdc.org" style="color:#1e3a5f;text-decoration:none;">norcalsbdc.org</a>`
  );

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:'Proxima Nova','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:#444;">
  <tr>
    <td>
      <span style="font-weight:700;color:#222;">${toTitleCase(f.name.trim())}</span>
      <span style="color:#ccc;"> · </span>
      <span style="color:#666;">${displayTitle}</span>
    </td>
  </tr>
  <tr><td style="font-size:12px;color:#888;padding-top:3px;">${contactParts.join(" · ")}</td></tr>
  <tr>
    <td style="padding-top:10px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;padding-right:10px;">
            <img src="${LOGO_URL}" alt="NorCal SBDC" width="36" style="display:block;width:36px;height:auto;" />
          </td>
          <td style="vertical-align:middle;font-family:'Roboto Mono','SF Mono','Courier New',monospace;font-size:9px;letter-spacing:0.2em;text-transform:uppercase;color:#004290;">Your Business People.</td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─────────────────────────────────────────────────────────
   Dispatcher
   ───────────────────────────────────────────────────────── */

function buildHtml(
  style: SigStyle,
  f: { name: string; title: string; center: string; phone: string; email: string }
) {
  switch (style) {
    case "mono":    return buildMonoHtml(f);
    case "compact": return buildCompactHtml(f);
    default:        return buildTwoColumnHtml(f);
  }
}

/* ─────────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────────────── */

export default function EmailSignatureGenerator({
  onOpenGuide,
}: {
  onOpenGuide?: () => void;
}) {
  const [style, setStyle] = useState<SigStyle>("two-column");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [center, setCenter] = useState(CENTERS[0]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const isReady = name.trim() && title.trim();

  // Live HTML uses real input; demo uses placeholder data
  const html = buildHtml(style, { name, title, center, phone, email });
  const demoHtml = buildHtml(style, {
    name: "Maria Santos",
    title: "Senior Business Advisor",
    center: "NorCal SBDC Network — Lead Center",
    phone: "530.898.4598",
    email: "msantos@norcalsbdc.org",
  });

  const handleCopy = async () => {
    try {
      const blob = new Blob([html], { type: "text/html" });
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": blob,
          "text/plain": new Blob([html], { type: "text/plain" }),
        }),
      ]);
    } catch {
      await navigator.clipboard.writeText(html);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div>
      {/* ── M3-style Tabs (dark theme) ── */}
      <div className="relative mb-8">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.08]" />
        <div className="flex -mb-[1px]">
          {STYLE_OPTIONS.map((s) => {
            const isActive = style === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setStyle(s.id)}
                className={`group relative px-5 py-3 font-mono text-[12px] whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/35 hover:text-white/60"
                }`}
                style={{ fontWeight: 500 }}
              >
                {s.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[3px] rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-royal scale-x-100"
                      : "bg-transparent scale-x-0 group-hover:bg-white/15 group-hover:scale-x-100"
                  }`}
                />
                <span
                  className={`absolute inset-x-1 inset-y-0.5 rounded-lg transition-colors duration-200 -z-10 ${
                    isActive ? "bg-white/[0.05]" : "group-hover:bg-white/[0.03]"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* ── Left: Form ── */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <label className="font-label text-[11px] uppercase tracking-[0.1em] text-white/50 block mb-2">
              Full Name <span className="text-[#A73B44]">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Aaron Phelps"
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white text-[14px] font-sans placeholder:text-white/25 focus:outline-none focus:border-royal/60 focus:ring-2 focus:ring-royal/20 transition-all"
            />
          </div>

          <div>
            <label className="font-label text-[11px] uppercase tracking-[0.1em] text-white/50 block mb-2">
              Title <span className="text-[#A73B44]">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Marketing and Technology Director"
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white text-[14px] font-sans placeholder:text-white/25 focus:outline-none focus:border-royal/60 focus:ring-2 focus:ring-royal/20 transition-all"
            />
          </div>

          <div>
            <label className="font-label text-[11px] uppercase tracking-[0.1em] text-white/50 block mb-2">
              Center
            </label>
            <select
              value={center}
              onChange={(e) => setCenter(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white text-[14px] font-sans focus:outline-none focus:border-royal/60 focus:ring-2 focus:ring-royal/20 transition-all appearance-none"
            >
              {CENTERS.map((c) => (
                <option key={c} value={c} className="bg-[#1a2a3e] text-white">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-label text-[11px] uppercase tracking-[0.1em] text-white/50 block mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="530.768.7680"
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white text-[14px] font-sans placeholder:text-white/25 focus:outline-none focus:border-royal/60 focus:ring-2 focus:ring-royal/20 transition-all"
            />
          </div>

          <div>
            <label className="font-label text-[11px] uppercase tracking-[0.1em] text-white/50 block mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="aphelps@norcalsbdc.org"
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white text-[14px] font-sans placeholder:text-white/25 focus:outline-none focus:border-royal/60 focus:ring-2 focus:ring-royal/20 transition-all"
            />
          </div>
        </div>

        {/* ── Right: Live Preview + Copy ── */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-white/[0.08] bg-white overflow-hidden sticky top-8">
            {/* Preview header */}
            <div className="px-6 py-4 border-b border-black/[0.06] flex items-center justify-between">
              <p className="font-label text-[11px] uppercase tracking-[0.12em] text-navy/40">
                Preview
              </p>
              <div className="flex items-center gap-3">
                {onOpenGuide && (
                  <button
                    onClick={onOpenGuide}
                    className="text-[12px] font-mono text-navy/30 hover:text-royal transition-colors"
                  >
                    How to set up
                  </button>
                )}
                <button
                  onClick={handleCopy}
                  disabled={!isReady}
                  className="px-5 py-2 bg-[#004290] text-white text-[13px] font-sans rounded-lg hover:bg-[#003574] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ fontWeight: 500 }}
                >
                  {copied ? "Copied!" : "Copy Signature"}
                </button>
              </div>
            </div>

            {/* Live rendered signature — shows demo data when empty */}
            <div className="p-6">
              {isReady ? (
                <div dangerouslySetInnerHTML={{ __html: html }} />
              ) : (
                <div className="relative">
                  <div className="opacity-70 pointer-events-none" dangerouslySetInnerHTML={{ __html: demoHtml }} />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0) 30%, rgba(255,255,255,0.85) 100%)",
                    }}
                  />
                  <p className="absolute bottom-4 right-5 text-navy/30 text-[12px] font-sans" style={{ fontWeight: 500 }}>
                    Enter your details to customize
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Code toggle */}
          <details className="mt-4">
            <summary className="font-label text-[11px] uppercase tracking-[0.1em] text-white/30 hover:text-white/50 cursor-pointer transition-colors">
              View HTML Source
            </summary>
            <pre className="mt-3 p-4 rounded-lg bg-black/30 border border-white/[0.06] text-white/50 text-[11px] font-mono leading-relaxed overflow-x-auto max-h-[300px]">
              {isReady ? html : "<!-- Fill in name and title to generate -->"}
            </pre>
          </details>
        </div>
      </div>
    </div>
  );
}
