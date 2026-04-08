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

function buildSignatureHtml(fields: {
  name: string;
  title: string;
  center: string;
  phone: string;
  email: string;
}) {
  const { name, title, center, phone, email } = fields;

  // Build the contact line: phone | email (skip either if blank)
  const contactParts: string[] = [];
  if (phone.trim())
    contactParts.push(
      `<span style="color:#3d4f5f;font-size:13px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">M: ${phone.trim()}</span>`
    );
  if (email.trim())
    contactParts.push(
      `<a href="mailto:${email.trim()}" style="color:#004290;font-size:13px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-decoration:none;">${email.trim()}</a>`
    );

  // Determine org line based on center
  const isLead = center.includes("Lead Center");
  const orgLine1 = "NORCAL SBDC NETWORK";
  const orgLine2 = isLead ? "LEAD CENTER" : center.replace(" SBDC", "").toUpperCase();

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1b2a3d;">
  <tr>
    <td style="vertical-align:top;padding-right:18px;border-right:2px solid #004290;">
      <img src="${LOGO_URL}" alt="America's SBDC California — Northern CA Network" width="110" style="display:block;width:110px;height:auto;" />
    </td>
    <td style="vertical-align:top;padding-left:18px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="font-size:16px;font-weight:700;color:#1b2a3d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.02em;padding-bottom:1px;">
            ${name.trim().toUpperCase()}
          </td>
        </tr>
        <tr>
          <td style="font-size:13px;color:#3d4f5f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding-bottom:8px;">
            ${title.trim()}
          </td>
        </tr>
        <tr>
          <td style="font-size:1px;line-height:1px;border-top:1px solid #c0c8d0;padding-bottom:8px;" />
        </tr>
        <tr>
          <td style="font-size:11px;font-weight:600;color:#1b2a3d;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;padding-bottom:1px;">
            ${orgLine1}
          </td>
        </tr>
        <tr>
          <td style="font-size:11px;font-weight:400;color:#3d4f5f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;letter-spacing:0.08em;text-transform:uppercase;padding-bottom:8px;">
            ${orgLine2}
          </td>
        </tr>${
          contactParts.length > 0
            ? `
        <tr>
          <td style="padding-bottom:4px;">
            ${contactParts.join(`<span style="color:#c0c8d0;font-size:13px;"> &nbsp;|&nbsp; </span>`)}
          </td>
        </tr>`
            : ""
        }
        <tr>
          <td>
            <a href="https://norcalsbdc.org" style="color:#004290;font-size:13px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;text-decoration:none;font-weight:500;">norcalsbdc.org</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

export default function EmailSignatureGenerator() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [center, setCenter] = useState(CENTERS[0]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const isReady = name.trim() && title.trim();

  const html = buildSignatureHtml({ name, title, center, phone, email });

  const handleCopy = async () => {
    // Copy as rich HTML so it pastes directly into email clients
    try {
      const blob = new Blob([html], { type: "text/html" });
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": blob,
          "text/plain": new Blob([html], { type: "text/plain" }),
        }),
      ]);
    } catch {
      // Fallback: copy as plain HTML
      await navigator.clipboard.writeText(html);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      {/* ── Left: Form ── */}
      <div className="lg:col-span-5 space-y-5">
        {/* Name */}
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

        {/* Title */}
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

        {/* Center */}
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

        {/* Phone */}
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

        {/* Email */}
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
            <button
              onClick={handleCopy}
              disabled={!isReady}
              className="px-5 py-2 bg-[#004290] text-white text-[13px] font-sans rounded-lg hover:bg-[#003574] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ fontWeight: 500 }}
            >
              {copied ? "Copied!" : "Copy Signature"}
            </button>
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
  );
}
