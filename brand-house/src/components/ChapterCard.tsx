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
      className="group block p-7 md:p-9 rounded-xl bg-white border border-black/[0.04] hover-lift transition-all duration-500"
    >
      <span className="font-mono text-[0.6rem] text-text-tertiary tracking-[0.15em]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-serif text-xl md:text-2xl text-navy mt-4 mb-3 transition-colors duration-400 group-hover:text-royal">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed font-serif">
        {description}
      </p>
      <span className="inline-block mt-5 font-mono text-[0.65rem] tracking-[0.1em] uppercase text-royal/60 group-hover:text-royal transition-colors duration-400">
        Explore
        <span className="inline-block ml-1 transition-transform duration-400 group-hover:translate-x-1">&rarr;</span>
      </span>
    </Link>
  );
}
