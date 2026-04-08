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

function orgLines(center: string) {
  const isLead = center.includes("Lead Center");
  return {
    line1: "NORCAL SBDC NETWORK",
    line2: isLead ? "LEAD CENTER" : center.replace(" SBDC", "").toUpperCase(),
  };
}

/* ─────────────────────────────────────────────────────────
   Style 1 — Two Column (default, tightened)
   ───────────────────────────────────────────────────────── */

function buildTwoColumnHtml(f: {
  name: string; title: string; center: string; phone: string; email: string;
}) {
  const { line1, line2 } = orgLines(f.center);

  const contactRows: string[] = [];
  if (f.phone.trim()) {
    contactRows.push(
      `<tr><td style="font-size:13px;color:#3d4f5f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding-bottom:1px;">M: ${f.phone.trim()}</td></tr>`
    );
  }
  if (f.email.trim()) {
    contactRows.push(
      `<tr><td style="padding-bottom:1px;"><a href="mailto:${f.email.trim()}" style="color:#004290;font-size:13px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-decoration:none;">${f.email.trim()}</a></td></tr>`
    );
  }

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1b2a3d;">
  <tr>
    <td style="vertical-align:top;padding-right:16px;border-right:2px solid #004290;">
      <img src="${LOGO_URL}" alt="America's SBDC California — Northern CA Network" width="100" style="display:block;width:100px;height:auto;" />
    </td>
    <td style="vertical-align:top;padding-left:16px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr><td style="font-size:15px;font-weight:700;color:#1b2a3d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.02em;padding-bottom:1px;">${f.name.trim().toUpperCase()}</td></tr>
        <tr><td style="font-size:13px;color:#3d4f5f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding-bottom:6px;">${f.title.trim()}</td></tr>
        <tr><td style="font-size:13px;color:#1b2a3d;padding-bottom:6px;">—</td></tr>
        <tr><td style="font-size:10px;font-weight:600;color:#1b2a3d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;padding-bottom:0;">${line1}</td></tr>
        <tr><td style="font-size:10px;font-weight:400;color:#3d4f5f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;padding-bottom:6px;">${line2}</td></tr>
${contactRows.join("\n")}
        <tr><td><a href="https://norcalsbdc.org" style="color:#004290;font-size:13px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-decoration:none;font-weight:500;">norcalsbdc.org</a></td></tr>
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
  <tr><td style="font-weight:600;font-size:13px;">${f.name.trim()}</td></tr>
  <tr><td style="color:#888;">${f.title.trim()} · ${centerLabel}</td></tr>
  <tr><td style="color:#666;padding-top:8px;">${contactLines.join("<br>")}</td></tr>
  <tr>
    <td style="padding-top:12px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;padding-right:12px;">
            <img src="${LOGO_URL}" alt="NorCal SBDC" width="24" height="auto" style="display:block;width:24px;height:auto;" />
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

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:#444;">
  <tr>
    <td>
      <span style="font-weight:700;color:#222;">${f.name.trim()}</span>
      <span style="color:#ccc;"> · </span>
      <span style="color:#666;">${f.title.trim()}</span>
    </td>
  </tr>
  <tr><td style="font-size:12px;color:#888;padding-top:3px;">${contactParts.join(" · ")}</td></tr>
  <tr>
    <td style="padding-top:10px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="vertical-align:middle;padding-right:12px;">
            <img src="${LOGO_URL}" alt="NorCal SBDC" width="20" height="auto" style="display:block;width:20px;height:auto;" />
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
  const html = buildHtml(style, { name, title, center, phone, email });

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
      {/* ── Style Picker ── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {STYLE_OPTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setStyle(s.id)}
            className={`px-4 py-2.5 text-[12px] font-mono border rounded-lg transition-all ${
              style === s.id
                ? "border-royal bg-royal/15 text-white"
                : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/70"
            }`}
          >
            <span className="font-medium">{s.label}</span>
            <span className="hidden sm:inline text-white/30 ml-2">— {s.desc}</span>
          </button>
        ))}
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

            {/* Live rendered signature */}
            <div className="p-8">
              {isReady ? (
                <div dangerouslySetInnerHTML={{ __html: html }} />
              ) : (
                <p className="text-navy/25 text-[14px] font-sans text-center py-8">
                  Fill in your name and title to see the preview.
                </p>
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
