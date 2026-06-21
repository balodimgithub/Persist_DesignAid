"use client";

import { KeyRound, ShieldOff, Fingerprint } from "lucide-react";
import Reveal from "./Reveal";

export default function VaultSection() {
  return (
    <section id="vault" className="bg-cream px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-yolk-deep">
            The vault
          </p>
          <h2 className="mb-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Your wallet is the identity. Nobody co-signs it.
          </h2>
          <p className="mb-7 text-base leading-relaxed text-ink-soft md:text-lg">
            Every capsule is bound to a security token assigned to your
            wallet alone — not a username, not an email, not a session
            cookie a third party can revoke. Ownership of your digital
            identity stays where it belongs: with you.
          </p>
          <ul className="space-y-5">
            <li className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-yolk-deep shadow-sm">
                <KeyRound className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong className="font-semibold text-ink">Wallet-bound keys.</strong>{" "}
                Only the address that meets the condition can ever request
                decryption.
              </span>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-yolk-deep shadow-sm">
                <ShieldOff className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong className="font-semibold text-ink">No OAuth hand-off.</strong>{" "}
                Nothing is shared through a Web2 login screen for the sake
                of convenience — that convenience is exactly what gets
                breached.
              </span>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-yolk-deep shadow-sm">
                <Fingerprint className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </span>
              <span className="text-[15px] leading-relaxed text-ink-soft">
                <strong className="font-semibold text-ink">You are the proof.</strong>{" "}
                Activity itself becomes the credential — no separate
                password to lose or leak.
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border-2 border-yolk bg-white p-7 shadow-[0_18px_40px_-18px_rgba(184,94,16,0.35)] transition-transform duration-300 hover:-translate-y-1.5">
              <p className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wider text-yolk-deep">
                Persist
              </p>
              <p className="font-display text-xl font-extrabold text-ink">
                Wallet-native
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                One key, one owner, enforced on-chain.
              </p>
            </div>
            <div className="rounded-2xl border border-shell bg-white p-7 opacity-70 transition-all duration-300 hover:-translate-y-1.5 hover:opacity-100">
              <p className="mb-1 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                Web2 OAuth
              </p>
              <p className="font-display text-xl font-extrabold text-ink">
                Custodial
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                A provider holds the key — and the breach risk.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
