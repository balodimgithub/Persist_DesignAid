"use client";

import { motion } from "framer-motion";
import { Lock, Database, ShieldCheck } from "lucide-react";
import Mascot from "./Mascot";

const QUICK_FACTS = [
  { icon: Lock, label: "Encrypted before it leaves your device" },
  { icon: Database, label: "Stored with no single point of failure" },
  { icon: ShieldCheck, label: "Released only when your condition is met" },
];

export default function Hero() {
  return (
    <section id="top" className="aurora relative overflow-hidden bg-white px-6 pb-24 pt-16 md:px-10 md:pt-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-shell bg-cream px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-ink-soft"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yolk" />
            One primitive. Three guarantees.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[3.1rem] font-extrabold leading-[1.03] tracking-tight text-ink md:text-[5.5rem]"
          >
            Continuity
            <br />
            that <span className="text-yolk-deep">matters.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            Persist seals files and messages to a wallet-bound condition —
            a date, 90 days of silence, a proof of inactivity — instead of
            a custodian. No lawyer, no Web2 login, no third party holding
            the key.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button className="rounded-full bg-ink px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-yolk-deep">
              Seal your first capsule
            </button>
            <a
              href="#how-it-works"
              className="group flex items-center gap-2 px-2 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-ink-soft transition-colors hover:text-ink"
            >
              See how sealing works
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {QUICK_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-2.5 rounded-xl border border-shell bg-white/70 p-3.5 transition-colors hover:border-yolk/50"
                >
                  <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-yolk-deep" strokeWidth={1.8} />
                  <span className="text-[13px] leading-snug text-ink-soft">
                    {fact.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Mascot size={300} />
        </div>
      </div>
    </section>
  );
}
