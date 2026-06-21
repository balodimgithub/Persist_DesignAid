"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, Database, ShieldCheck, EyeOff } from "lucide-react";
import Reveal from "./Reveal";

const PRIMITIVES = [
  {
    icon: Lock,
    name: "Seal",
    role: "How data is protected",
    body: "Your file or text is encrypted client-side before it ever leaves your device. Only a wallet that satisfies the condition you set can request the decryption key.",
    stat: "256-bit",
    statLabel: "encryption, end to end",
  },
  {
    icon: Database,
    name: "Walrus",
    role: "Where data lives",
    body: "The encrypted blob is stored on decentralized storage — no single server to subpoena, no company to go out of business and take your data with it.",
    stat: "No",
    statLabel: "single point of failure",
  },
  {
    icon: ShieldCheck,
    name: "Sui",
    role: "What conditions are met",
    body: "On-chain logic tracks wallet activity and time. A 90-day silence, a fixed date, or a submitted proof-of-life — Sui is the judge that decides when a capsule is allowed to open.",
    stat: "On-chain",
    statLabel: "verifiable conditions",
  },
  {
    icon: EyeOff,
    name: "Privacy",
    role: "Who ever sees it",
    body: "Persist never holds your data or your keys. Nobody, including the team that built this protocol, can open a capsule before its condition is satisfied.",
    stat: "Zero",
    statLabel: "custodians, always",
  },
];

export default function Primitives() {
  const [active, setActive] = useState(0);
  const current = PRIMITIVES[active];
  const Icon = current.icon;

  return (
    <section id="how-it-works" className="bg-cream px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-yolk-deep">
            Under the shell
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            Power to the wallet.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Three tools coordinate every capsule. None of them ever
            holds your key.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid gap-0 overflow-hidden rounded-3xl border border-shell bg-white shadow-sm md:grid-cols-[320px_1fr]">
            {/* tab list */}
            <div className="flex flex-row gap-1 border-b border-shell bg-cream-deep/60 p-3 md:flex-col md:border-b-0 md:border-r">
              {PRIMITIVES.map((p, i) => {
                const TabIcon = p.icon;
                const isActive = i === active;
                return (
                  <button
                    key={p.name}
                    onClick={() => setActive(i)}
                    className={`flex flex-1 items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-colors duration-200 md:flex-initial ${
                      isActive
                        ? "bg-white shadow-sm"
                        : "hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isActive ? "bg-yolk text-white" : "bg-cream text-ink-soft"
                      }`}
                    >
                      <TabIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    </span>
                    <span
                      className={`hidden font-display text-base font-bold sm:inline ${
                        isActive ? "text-ink" : "text-ink-soft"
                      }`}
                    >
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* detail panel */}
            <div className="relative min-h-[280px] p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-yolk-deep">
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </span>
                  <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-wider text-yolk-deep">
                    {current.role}
                  </p>
                  <h3 className="mb-4 font-display text-3xl font-extrabold text-ink">
                    {current.name}
                  </h3>
                  <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                    {current.body}
                  </p>
                  <div className="inline-flex items-baseline gap-2 rounded-xl bg-cream px-5 py-3">
                    <span className="font-display text-2xl font-extrabold text-yolk-deep">
                      {current.stat}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                      {current.statLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
