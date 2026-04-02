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
    <div className={`p-6 rounded-xl border border-black/[0.04] bg-white ${className}`}>
      <p
        className="text-3xl md:text-4xl text-navy mb-4"
        style={{ fontFamily: family }}
      >
        Aa Bb Cc 123
      </p>
      <p className="font-mono text-xs text-text-secondary mb-1">{family}</p>
      <p className="font-mono text-[0.6rem] text-text-tertiary">
        Weights: {weights.join(", ")}
      </p>
      <p className="text-xs text-text-tertiary mt-2 font-sans">{usage}</p>
    </div>
  );
}
