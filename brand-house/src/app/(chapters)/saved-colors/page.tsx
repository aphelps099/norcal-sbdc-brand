import InteriorHero from "@/components/InteriorHero";
import type { GradientDef } from "@/components/InteriorHero";

const ARCHIVED_GRADIENTS: {
  name: string;
  page: string;
  gradient: GradientDef;
}[] = [
  {
    name: "Rainbow Sweep",
    page: "Colors",
    gradient: { angle: 135, stops: ["#0f1c2e", "#1D5AA7", "#8FC5D9", "#A73B44", "#00685E"] },
  },
  {
    name: "Deep Editorial",
    page: "Typography",
    gradient: { angle: 160, stops: ["#13171C", "#2B3035", "#1D5AA7", "#85A3C8", "#8FC5D9"] },
  },
  {
    name: "Institutional",
    page: "Logos",
    gradient: { angle: 120, stops: ["#0f1c2e", "#004290", "#1D5AA7", "#85A3C8", "#8FC5D9"] },
  },
  {
    name: "Warm Authority",
    page: "Voice & Tone",
    gradient: { angle: 145, stops: ["#13171C", "#A73B44", "#1D5AA7", "#8FC5D9", "#85A3C8"] },
  },
  {
    name: "Cinematic",
    page: "Photography",
    gradient: { angle: 170, stops: ["#0f1c2e", "#2B3035", "#A73B44", "#004290", "#13171C"] },
  },
  {
    name: "Cool Systematic",
    page: "Templates",
    gradient: { angle: 130, stops: ["#0f1c2e", "#1D5AA7", "#004290", "#85A3C8", "#8FC5D9"] },
  },
  {
    name: "Energetic",
    page: "Content",
    gradient: { angle: 155, stops: ["#0f1c2e", "#00685E", "#8FC5D9", "#A73B44", "#1D5AA7"] },
  },
  {
    name: "Warm Cycles",
    page: "Calendar",
    gradient: { angle: 140, stops: ["#13171C", "#A73B44", "#00685E", "#8FC5D9", "#1D5AA7"] },
  },
  {
    name: "Narrative Warmth",
    page: "Stories",
    gradient: { angle: 150, stops: ["#0f1c2e", "#A73B44", "#85A3C8", "#8FC5D9", "#00685E"] },
  },
  {
    name: "Referential Cool",
    page: "Glossary",
    gradient: { angle: 125, stops: ["#13171C", "#2B3035", "#004290", "#1D5AA7", "#85A3C8"] },
  },
  {
    name: "Creative Energy",
    page: "Generate",
    gradient: { angle: 140, stops: ["#0f1c2e", "#1D5AA7", "#00685E", "#8FC5D9", "#85A3C8"] },
  },
];

function GradientSwatch({ g }: { g: typeof ARCHIVED_GRADIENTS[number] }) {
  const angle = g.gradient.angle ?? 135;
  const stops = g.gradient.stops;
  const css = `linear-gradient(${angle}deg, ${stops.join(", ")})`;

  return (
    <div className="group">
      <div
        className="aspect-[16/9] rounded-lg overflow-hidden mb-3 ring-1 ring-white/[0.06]"
        style={{ background: css }}
      />
      <p className="text-white/80 text-[15px] font-sans" style={{ fontWeight: 500 }}>
        {g.name}
      </p>
      <p className="text-white/30 text-[12px] font-mono mt-0.5">
        {g.page} · {angle}°
      </p>
      <div className="flex gap-1 mt-2">
        {stops.map((hex, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-sm ring-1 ring-white/10"
            style={{ backgroundColor: hex }}
            title={hex}
          />
        ))}
      </div>
    </div>
  );
}

export default function SavedColorsPage() {
  return (
    <>
      <InteriorHero
        category="visual"
        title="Saved Colors"
        subtitle="Archived gradient definitions from the original Brand House heroes. Available for reuse in presentations, social, and marketing materials."
      />

      <div className="bg-[#0f1c2e] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <h2
            className="tracking-[-0.02em] text-white/90 mb-4"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 40px)",
            }}
          >
            Gradient Archive
          </h2>
          <p className="font-sans text-base text-white/40 leading-relaxed mb-12 max-w-xl">
            11 five-stop linear gradients built from the brand palette. Each uses a unique angle
            and color sequence. Click any swatch to see the CSS values.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARCHIVED_GRADIENTS.map((g) => (
              <GradientSwatch key={g.name} g={g} />
            ))}
          </div>

          {/* CSS reference */}
          <div className="mt-16 border-t border-white/[0.06] pt-10">
            <h3 className="font-label text-[11px] uppercase tracking-[0.12em] text-white/40 mb-6">
              CSS Reference
            </h3>
            <pre className="p-6 rounded-lg bg-black/30 border border-white/[0.06] text-white/50 text-[12px] font-mono leading-relaxed overflow-x-auto max-h-[400px]">
{ARCHIVED_GRADIENTS.map((g) => {
  const angle = g.gradient.angle ?? 135;
  return `/* ${g.name} (${g.page}) */\nbackground: linear-gradient(${angle}deg, ${g.gradient.stops.join(", ")});\n`;
}).join("\n")}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
