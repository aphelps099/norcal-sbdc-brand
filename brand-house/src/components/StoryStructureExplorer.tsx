"use client";

/**
 * StoryStructureExplorer
 * ----------------------
 * Drop-in replacement for the "A · Structure" definition list in stories/page.tsx.
 *
 * Left rail = collapsible label rows (title + square + toggle).
 * Right column = a sample story card mockup.
 * Middle gutter = orthogonal SVG connector lines linking each label to its element.
 *
 * Hovering either side syncs the highlight; expanding a label reveals the
 * full writing rules for that section.
 *
 * Uses brand tokens from globals.css — no new colors or fonts introduced.
 */

import { useCallback, useEffect, useRef, useState } from "react";

type SectionId =
  | "kicker"
  | "name"
  | "tagline"
  | "metric"
  | "quote"
  | "challenge"
  | "solution"
  | "results"
  | "cta";

type Section = {
  id: SectionId;
  label: string;
  lead: string;
  whatItIs?: string;
  rules: string[];
  example: string;
  meta?: string;
};

const SECTIONS: Section[] = [
  {
    id: "kicker",
    label: "Kicker",
    lead: "Short context label that appears above the headline.",
    whatItIs:
      "A small all-caps tag that sets context before the reader sees the business name. Always references the SBDC center or program that ran the engagement.",
    rules: ["All caps, letter-spaced, coral", "2–4 words maximum", "Names a program or regional center, never the business"],
    example: "TECH FUTURES GROUP",
    meta: "Other valid: MARIN SBDC · SAN FRANCISCO SBDC · NORTH COAST SBDC",
  },
  {
    id: "name",
    label: "Business Name",
    lead: "The headline — the business displayed prominently.",
    whatItIs: "The legal or trade name of the business, set in the brand display serif at headline size.",
    rules: ["Proxima Sera, 38–56px depending on layout", "Use the name the business uses publicly — not the LLC suffix", "Never abbreviate unless the business does"],
    example: "ReJoule",
  },
  {
    id: "tagline",
    label: "Tagline",
    lead: "One sentence describing what the business does.",
    rules: ["One sentence, 12–20 words", "Lead with the verb or product, not the company name", "Avoid jargon — write so a non-customer understands"],
    example: "Second-life battery diagnostics that keep EV packs out of landfills and on the road longer.",
  },
  {
    id: "metric",
    label: "Hero Metric",
    lead: "The single most impressive number — the anchor of the story.",
    rules: ["One number, displayed large in the brand serif", "Pair with a 2–4 word small-caps label beneath", "Prioritize: capital raised > revenue > jobs > other"],
    example: "$27M — In Capital Raised",
    meta: "If no dollar figure exists, lead with jobs created or units shipped.",
  },
  {
    id: "quote",
    label: "Quote",
    lead: "Direct quote from the business owner.",
    rules: ["Must mention SBDC or the specific advisor by name", "Specific over vague — name a deliverable, not a feeling", "One to two sentences, 25–50 words"],
    example: "“The Tech Futures Group at NorCal SBDC helped us refine our pitch and connect with the right investors at exactly the right time.”",
  },
  {
    id: "challenge",
    label: "The Challenge",
    lead: "Two to three sentences max — what was the obstacle?",
    rules: ["Concrete obstacle, not a generic struggle", "Include the stakes — what was at risk?", "2–3 sentences, no more"],
    example: "Scaling a hardware-software platform required capital and credibility neither founder had access to alone.",
  },
  {
    id: "solution",
    label: "The Solution",
    lead: "Two to three sentences max — what did SBDC do specifically?",
    rules: ["Name the actual deliverables — model, deck, intros", "Active verbs, owned by the SBDC advisor", "2–3 sentences, no more"],
    example: "SBDC advisors restructured the financial model, prepared the deck, and warm-introduced strategic investors.",
  },
  {
    id: "results",
    label: "The Results",
    lead: "Lead with numbers — three to four metrics displayed prominently.",
    rules: ["Three to four metrics, displayed as a row", "Number + 1–2 word label, no sentences", "Order by impact: capital → jobs → growth → reach"],
    example: "$27M Raised · 42 Jobs · 3 New Markets",
  },
  {
    id: "cta",
    label: "Partner CTA",
    lead: "Link back to the NorCal SBDC center that helped.",
    rules: ["Always links to the partner center page, never a homepage", "Coral, all-caps, with trailing arrow", "Drives visitors back into the network"],
    example: "TECH FUTURES GROUP →",
  },
];

export default function StoryStructureExplorer() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [open, setOpen] = useState<Set<SectionId>>(new Set());
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const drawConnectors = useCallback(() => {
    const stage = stageRef.current;
    const svg = svgRef.current;
    if (!stage || !svg) return;

    const rect = stage.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    svg.setAttribute("width", String(rect.width));
    svg.setAttribute("height", String(rect.height));

    while (svg.firstChild) svg.removeChild(svg.firstChild);

    SECTIONS.forEach((s) => {
      const labelDot = stage.querySelector<HTMLElement>(`[data-label-anchor="${s.id}"]`);
      const cardDot =
        stage.querySelector<HTMLElement>(`[data-shared-anchor="${s.id}"]`) ||
        stage.querySelector<HTMLElement>(`[data-card-anchor="${s.id}"]`);
      if (!labelDot || !cardDot) return;

      const a = labelDot.getBoundingClientRect();
      const b = cardDot.getBoundingClientRect();
      const x1 = a.left + a.width / 2 - rect.left;
      const y1 = a.top + a.height / 2 - rect.top;
      const x2 = b.left + b.width / 2 - rect.left;
      const y2 = b.top + b.height / 2 - rect.top;
      const midX = x1 + (x2 - x1) * 0.55;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${x1} ${y1} H ${midX} V ${y2} H ${x2}`);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", active === s.id ? "#A73B44" : "rgba(15,28,46,0.40)");
      path.setAttribute("stroke-width", active === s.id ? "1.5" : "1");
      svg.appendChild(path);
    });
  }, [active]);

  useEffect(() => {
    drawConnectors();
    const handler = () => drawConnectors();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [drawConnectors, open]);

  // Recompute after the accordion animation finishes
  useEffect(() => {
    const t = setTimeout(drawConnectors, 380);
    return () => clearTimeout(t);
  }, [open, drawConnectors]);

  const toggle = (id: SectionId) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const isActive = (id: SectionId) => active === id;

  return (
    <div ref={stageRef} className="story-structure-stage relative grid items-start">
      <style>{`
        .story-structure-stage { grid-template-columns: 1fr; gap: 40px; }
        @media (min-width: 1024px) {
          .story-structure-stage { grid-template-columns: 220px 1fr 460px; gap: 0; }
        }
        @media (max-width: 1023px) {
          .story-structure-connectors { display: none; }
          .story-structure-card-wrap { justify-content: flex-start !important; }
        }
      `}</style>
      <svg ref={svgRef} aria-hidden className="story-structure-connectors absolute inset-0 w-full h-full pointer-events-none z-[1]" />

      {/* LEFT RAIL */}
      <div className="relative z-[2] flex flex-col">
        {SECTIONS.map((s) => (
          <div
            key={s.id}
            className="relative border-t border-[rgba(15,28,46,0.10)] last:border-b transition-colors"
            style={{ background: isActive(s.id) ? "rgba(167,59,68,0.10)" : "transparent" }}
            onMouseEnter={() => setActive(s.id)}
            onMouseLeave={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => toggle(s.id)}
              className="w-full flex items-center justify-between gap-3 py-3.5 pr-7 text-left cursor-pointer"
            >
              <span
                className="font-label uppercase block transition-colors"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  fontWeight: 500,
                  color: isActive(s.id) ? "#A73B44" : "rgba(15,28,46,0.65)",
                }}
              >
                {s.label}
              </span>
              <span
                className="flex-shrink-0 inline-flex items-center justify-center transition-all"
                aria-label={open.has(s.id) ? "Collapse" : "Expand"}
                style={{
                  width: "16px",
                  height: "16px",
                  border: `1px solid ${open.has(s.id) || isActive(s.id) ? "#A73B44" : "rgba(15,28,46,0.45)"}`,
                  background: open.has(s.id) ? "#A73B44" : "transparent",
                  color: open.has(s.id) ? "#fff" : isActive(s.id) ? "#A73B44" : "rgba(15,28,46,0.65)",
                  fontSize: "11px",
                  lineHeight: 1,
                  transform: open.has(s.id) ? "rotate(45deg)" : "none",
                }}
              >
                +
              </span>
              {/* Right-edge anchor dot */}
              <span
                data-label-anchor={s.id}
                className="absolute"
                style={{
                  right: "-5px",
                  top: "50%",
                  transform: `translateY(-50%) ${isActive(s.id) ? "scale(1.3)" : ""}`,
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: isActive(s.id) ? "#A73B44" : "rgba(15,28,46,0.45)",
                  boxShadow: "0 0 0 4px #f5f4f0",
                  transition: "all 0.18s ease",
                }}
              />
            </button>

            {/* Accordion */}
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-out"
              style={{ maxHeight: open.has(s.id) ? "640px" : "0px" }}
            >
              <div className="pt-1 pr-7 pb-5 pl-4.5" style={{ paddingLeft: "18px" }}>
                <p className="font-sans mb-3" style={{ fontSize: "14px", color: "#0f1c2e", fontWeight: 500 }}>
                  {s.lead}
                </p>
                {s.whatItIs && (
                  <>
                    <h4 className="font-label uppercase mt-3.5 mb-1.5" style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", fontWeight: 500 }}>
                      What it is
                    </h4>
                    <p className="font-sans" style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(15,28,46,0.80)" }}>
                      {s.whatItIs}
                    </p>
                  </>
                )}
                <h4 className="font-label uppercase mt-3.5 mb-1.5" style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", fontWeight: 500 }}>
                  Rules
                </h4>
                <ul className="list-none p-0 m-0">
                  {s.rules.map((r) => (
                    <li key={r} className="relative pl-4 mb-1 font-sans" style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(15,28,46,0.80)" }}>
                      <span className="absolute left-0 top-[10px] w-1.5 h-px bg-[rgba(15,28,46,0.45)]" />
                      {r}
                    </li>
                  ))}
                </ul>
                <h4 className="font-label uppercase mt-3.5 mb-1.5" style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", fontWeight: 500 }}>
                  Example
                </h4>
                <div className="bg-white border-l-2 border-[#A73B44] py-2 px-3 mt-1.5 font-serif" style={{ fontSize: "13px", color: "#0f1c2e" }}>
                  {s.example}
                </div>
                {s.meta && (
                  <p className="mt-3 font-sans" style={{ fontSize: "11px", letterSpacing: "0.04em", color: "rgba(15,28,46,0.55)" }}>
                    {s.meta}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GUTTER */}
      <div className="relative" />

      {/* RIGHT: SAMPLE CARD */}
      <div className="story-structure-card-wrap relative z-[2] flex justify-end">
        <div
          className="relative bg-white"
          style={{
            width: "100%",
            maxWidth: "460px",
            padding: "40px 40px 36px",
            boxShadow:
              "0 1px 0 rgba(15,28,46,0.04), 0 24px 48px -24px rgba(15,28,46,0.18), 0 8px 16px -12px rgba(15,28,46,0.08)",
          }}
        >
          <Hot id="kicker" active={active} setActive={setActive}>
            <p className="font-label uppercase" style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#A73B44", fontWeight: 700, marginBottom: "8px" }}>
              NorCal SBDC Success Story
            </p>
          </Hot>
          <Hot id="name" active={active} setActive={setActive}>
            <h3 className="font-serif" style={{ fontSize: "38px", lineHeight: 1.05, letterSpacing: "-0.015em", color: "#0f1c2e", fontWeight: 500, marginBottom: "6px" }}>
              ReJoule
            </h3>
          </Hot>
          <p className="font-sans" style={{ fontSize: "13px", color: "rgba(15,28,46,0.65)", marginBottom: "18px" }}>
            Chris Aguirre, Owner
          </p>

          <Hot id="tagline" active={active} setActive={setActive}>
            <p className="font-serif italic" style={{ fontSize: "16px", lineHeight: 1.45, color: "rgba(15,28,46,0.85)", marginBottom: "28px", fontWeight: 400 }}>
              Second-life battery diagnostics that keep EV packs out of landfills and on the road longer.
            </p>
          </Hot>

          <Hot id="metric" active={active} setActive={setActive}>
            <div className="border-t border-[rgba(15,28,46,0.10)]" style={{ paddingTop: "22px", marginBottom: "22px" }}>
              <div className="font-serif" style={{ fontSize: "64px", lineHeight: 1, letterSpacing: "-0.02em", color: "#0f1c2e", fontWeight: 500 }}>$27M</div>
              <div className="font-label uppercase" style={{ fontSize: "10.5px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", marginTop: "8px", fontWeight: 500 }}>
                In Capital Raised
              </div>
            </div>
          </Hot>

          <Hot id="quote" active={active} setActive={setActive}>
            <blockquote className="font-serif" style={{ fontSize: "14.5px", lineHeight: 1.55, color: "rgba(15,28,46,0.85)", borderLeft: "2px solid #A73B44", padding: "4px 0 4px 14px", marginBottom: "22px", fontWeight: 400 }}>
              “The Tech Futures Group at NorCal SBDC helped us refine our pitch and connect with the right investors at exactly the right time.”
            </blockquote>
          </Hot>

          {/* Challenge + Solution share a row but each gets its own anchor at the card's left edge */}
          <div className="relative grid grid-cols-2" style={{ gap: "14px 20px", marginBottom: "22px" }}>
            <span data-shared-anchor="challenge" className="absolute" style={anchorStyle(active === "challenge", { top: "14px" })} />
            <span data-shared-anchor="solution" className="absolute" style={anchorStyle(active === "solution", { top: "auto", bottom: "14px" })} />
            <Hot id="challenge" active={active} setActive={setActive} noAnchor>
              <div>
                <div className="font-label uppercase" style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", fontWeight: 500, marginBottom: "6px" }}>The Challenge</div>
                <div className="font-sans" style={{ fontSize: "12.5px", lineHeight: 1.45, color: "rgba(15,28,46,0.85)" }}>
                  Scaling a hardware-software platform required capital and credibility neither founder had access to alone.
                </div>
              </div>
            </Hot>
            <Hot id="solution" active={active} setActive={setActive} noAnchor>
              <div>
                <div className="font-label uppercase" style={{ fontSize: "10px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", fontWeight: 500, marginBottom: "6px" }}>The Solution</div>
                <div className="font-sans" style={{ fontSize: "12.5px", lineHeight: 1.45, color: "rgba(15,28,46,0.85)" }}>
                  SBDC advisors restructured the financial model, prepared the deck, and warm-introduced strategic investors.
                </div>
              </div>
            </Hot>
          </div>

          <Hot id="results" active={active} setActive={setActive}>
            <div className="flex border-t border-[rgba(15,28,46,0.10)]" style={{ gap: "28px", paddingTop: "18px", marginBottom: "24px" }}>
              {[
                ["$27M", "Raised"],
                ["42", "Jobs"],
                ["3", "New Markets"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif" style={{ fontSize: "22px", color: "#0f1c2e", letterSpacing: "-0.01em", fontWeight: 500 }}>{n}</div>
                  <div className="font-label uppercase" style={{ fontSize: "9.5px", letterSpacing: "0.22em", color: "rgba(15,28,46,0.55)", marginTop: "4px", fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </Hot>

          <Hot id="cta" active={active} setActive={setActive} inline>
            <a href="#" className="font-label uppercase inline-block" style={{ fontSize: "11px", letterSpacing: "0.22em", color: "#A73B44", fontWeight: 700, textDecoration: "none", borderBottom: "1px solid #A73B44", paddingBottom: "4px" }}>
              Tech Futures Group →
            </a>
          </Hot>
        </div>
      </div>
    </div>
  );
}

function anchorStyle(activeMatches: boolean, extras: Record<string, string> = {}) {
  return {
    left: "-46px",
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    background: activeMatches ? "#A73B44" : "rgba(15,28,46,0.45)",
    boxShadow: "0 0 0 4px #f5f4f0",
    zIndex: 3,
    transition: "all 0.18s ease",
    ...extras,
  } as React.CSSProperties;
}

function Hot({
  id,
  active,
  setActive,
  children,
  noAnchor,
  inline,
}: {
  id: SectionId;
  active: SectionId | null;
  setActive: (id: SectionId | null) => void;
  children: React.ReactNode;
  noAnchor?: boolean;
  inline?: boolean;
}) {
  const isActive = active === id;
  return (
    <div
      className={`relative ${inline ? "inline-block" : ""}`}
      style={{
        background: isActive ? "rgba(167,59,68,0.10)" : "transparent",
        outline: isActive ? "1px dashed #A73B44" : "1px dashed transparent",
        outlineOffset: "6px",
        cursor: "pointer",
        transition: "background 0.18s ease, outline 0.18s ease",
      }}
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive(null)}
    >
      {!noAnchor && (
        <span
          data-card-anchor={id}
          className="absolute"
          style={anchorStyle(isActive, { top: "50%", transform: `translateY(-50%) ${isActive ? "scale(1.3)" : ""}` })}
        />
      )}
      {children}
    </div>
  );
}
