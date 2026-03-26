"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/lib/brand-tokens";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-black/[0.05] bg-white min-h-screen fixed left-0 top-0 pt-20 pb-8 px-6">
      <Link
        href="/"
        className="link-reveal font-mono text-[0.6rem] tracking-[0.15em] uppercase text-text-tertiary hover:text-navy transition-colors mb-10"
      >
        &larr; Brand House
      </Link>

      <nav className="flex flex-col gap-0.5">
        {chapters.map((ch) => {
          const active = pathname === ch.href;
          return (
            <Link
              key={ch.href}
              href={ch.href}
              className={`px-3 py-2.5 rounded-lg text-sm font-sans font-500 transition-all duration-200 ${
                active
                  ? "bg-royal/[0.06] text-royal"
                  : "text-text-secondary hover:text-navy hover:bg-black/[0.02]"
              }`}
            >
              {ch.title}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-8 border-t border-black/[0.04]">
        <p className="font-mono text-[0.55rem] text-text-tertiary/40 tracking-[0.1em] uppercase">
          NorCal SBDC
        </p>
      </div>
    </aside>
  );
}
