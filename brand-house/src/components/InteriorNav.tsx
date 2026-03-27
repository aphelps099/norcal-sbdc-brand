"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/lib/brand-tokens";

export default function InteriorNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 z-50 gap-1">
      {chapters.map((ch) => {
        const active = pathname === ch.href;
        return (
          <Link
            key={ch.href}
            href={ch.href}
            className="group flex items-center gap-3 py-1.5 transition-all duration-300"
          >
            <span
              className={`block h-[2px] transition-all duration-300 ${
                active
                  ? "w-8 bg-royal"
                  : "w-4 bg-navy/20 group-hover:w-6 group-hover:bg-navy/50"
              }`}
            />
            <span
              className={`font-sans text-[11px] font-800 uppercase tracking-[0.15em] transition-all duration-300 ${
                active
                  ? "text-royal opacity-100"
                  : "text-navy/30 opacity-0 group-hover:opacity-100 group-hover:text-navy/60"
              }`}
            >
              {ch.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
