interface PillNavProps {
  items: { label: string; href: string }[];
}

export default function PillNav({ items }: PillNavProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8 px-6">
      <span className="font-sans text-sm text-cream/40 mr-2">Your Business,</span>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="px-5 py-2 rounded-full border border-cream/20 text-cream/70 font-mono text-xs tracking-wider uppercase hover:bg-cream/10 hover:text-cream hover:border-cream/40 transition-all duration-300"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
