"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/lib/brand-tokens";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-cream/5 bg-navy-deep/50 min-h-screen fixed left-0 top-0 pt-20 pb-8 px-6">
      <Link
        href="/"
        className="font-mono text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-cream transition-colors mb-10"
      >
        &larr; Brand House
      </Link>

      <nav className="flex flex-col gap-1">
        {chapters.map((ch) => {
          const active = pathname === ch.href;
          return (
            <Link
              key={ch.href}
              href={ch.href}
              className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                active
                  ? "bg-royal/15 text-pool font-medium"
                  : "text-cream/50 hover:text-cream hover:bg-white/[0.03]"
              }`}
            >
              {ch.title}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-cream/5">
        <p className="font-mono text-[10px] text-cream/20 tracking-wider uppercase">
          NorCal SBDC
        </p>
      </div>
    </aside>
  );
}
