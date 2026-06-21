"use client";

import EggCapsule from "./EggCapsule";

export default function Footer() {
  return (
    <footer id="docs" className="bg-cream px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 border-t border-shell pt-12 md:flex-row md:items-center">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <EggCapsule size={24} />
            <span className="font-display text-xl font-extrabold text-ink">
              PERSIST
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            A continuity primitive for the wallet age. Built on Seal, Walrus,
            and Sui.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 font-mono text-[13px] font-medium uppercase tracking-wider text-ink-soft">
          <a href="#protocol" className="transition-colors hover:text-ink">
            Protocol
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-ink">
            Seal
          </a>
          <a href="#vault" className="transition-colors hover:text-ink">
            Vault
          </a>
          <a href="#use-cases" className="transition-colors hover:text-ink">
            Agent
          </a>
          <a
            href="https://github.com"
            className="transition-colors hover:text-ink"
          >
            Whitepaper
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl font-mono text-xs text-ink-soft/70">
        Testnet build — no funds at risk. © {new Date().getFullYear()} Persist
        Protocol.
      </p>
    </footer>
  );
}
