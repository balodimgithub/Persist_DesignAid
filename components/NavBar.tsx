"use client";

import EggCapsule from "./EggCapsule";

const NAV_LINKS = [
  { label: "Protocol", href: "#protocol" },
  { label: "Seal", href: "#how-it-works" },
  { label: "Vault", href: "#vault" },
  { label: "Agent", href: "#use-cases" },
  { label: "Docs", href: "#docs" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-shell/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <EggCapsule size={28} pulse />
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
            PERSIST
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-mono text-[13px] font-medium uppercase tracking-wider text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-yolk transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-shell bg-cream px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-soft sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Testnet
          </span>
          <button className="relative overflow-hidden rounded-full bg-yolk px-5 py-2.5 font-mono text-[13px] font-semibold uppercase tracking-wider text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yolk-deep active:translate-y-0">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
