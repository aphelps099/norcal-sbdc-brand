interface PillNavProps {
  items: { label: string; href: string }[];
}

export default function PillNav({ items }: PillNavProps) {
  return (
    <div className="bg-cream flex flex-wrap items-center justify-center gap-3 py-6 px-6">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="group relative px-5 py-2.5 rounded-full border border-navy/10 text-navy/70 text-[0.65rem] font-500 tracking-[0.12em] uppercase transition-all duration-400 hover:border-navy/30 hover:text-navy hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          style={{ fontFamily: "var(--sans-condensed)" }}
        >
          {item.label}
          <span className="absolute inset-0 rounded-full bg-navy/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </a>
      ))}
    </div>
  );
}
