import Link from "next/link";

interface ChapterCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

export default function ChapterCard({
  title,
  description,
  href,
  index,
}: ChapterCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 md:p-8 rounded-2xl border border-cream/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cream/15 transition-all duration-500"
    >
      <span className="font-mono text-xs text-cream/30 tracking-wider">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-serif text-xl md:text-2xl font-bold text-cream mt-3 mb-2 group-hover:text-pool transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-cream/40 leading-relaxed">{description}</p>
      <span className="inline-block mt-4 font-mono text-xs tracking-wider text-royal group-hover:text-pool transition-colors duration-300">
        Explore &rarr;
      </span>
    </Link>
  );
}
