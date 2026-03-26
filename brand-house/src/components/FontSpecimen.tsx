interface FontSpecimenProps {
  family: string;
  weights: readonly string[];
  usage: string;
  className?: string;
}

export default function FontSpecimen({
  family,
  weights,
  usage,
  className = "",
}: FontSpecimenProps) {
  return (
    <div className={`p-6 rounded-xl border border-cream/5 bg-white/[0.02] ${className}`}>
      <p
        className="text-3xl md:text-4xl text-cream mb-4"
        style={{ fontFamily: family }}
      >
        Aa Bb Cc 123
      </p>
      <p className="font-mono text-xs text-cream/40 mb-1">{family}</p>
      <p className="font-mono text-[10px] text-cream/30">
        Weights: {weights.join(", ")}
      </p>
      <p className="text-xs text-cream/30 mt-2">{usage}</p>
    </div>
  );
}
