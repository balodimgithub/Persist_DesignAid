"use client";

import { Dna, Bot, Landmark, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: Dna,
    eyebrow: "Digital Inheritance",
    title: "Trustless estate planning.",
    body: "The same primitive that seals a message for a nominee could power automated wealth transfer, dead-man's-switch key rotation, or conditional document release — all without a lawyer or custodian.",
    cta: "Try the reference app",
  },
  {
    icon: Bot,
    eyebrow: "Agent Continuity",
    title: "Autonomous agent succession.",
    body: "An AI agent seals its operational state into a capsule. When it goes offline, a successor decrypts and inherits — memory, credentials, context. The same primitive, applied to machine identity instead of human.",
    cta: "View Guardian Agent",
  },
  {
    icon: Landmark,
    eyebrow: "DAO Contingency",
    title: "Governance fail-safes.",
    body: "A multisig treasury seals recovery instructions that unlock only when the DAO goes inactive. Same conditional access logic, different application surface — no new contracts needed.",
    cta: "Read the roadmap",
  },
];

export default function UseCasePillars() {
  return (
    <section id="use-cases" className="bg-white px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-yolk-deep">
            Where the primitive travels
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            One sealing rule. Three futures.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.eyebrow} delay={i * 0.12}>
                <article className="group relative flex h-full flex-col rounded-3xl border border-shell bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-yolk/50 hover:shadow-[0_18px_40px_-15px_rgba(184,94,16,0.3)]">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-yolk-deep shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-yolk group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>

                  <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-yolk-deep">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mb-3 font-display text-2xl font-extrabold leading-snug text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mb-7 flex-1 text-[15px] leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>

                  <button className="flex items-center justify-between rounded-xl border border-shell bg-white px-4 py-3.5 text-left font-mono text-[13px] font-medium text-ink-soft transition-all duration-200 group-hover:border-yolk group-hover:text-ink">
                    {pillar.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
