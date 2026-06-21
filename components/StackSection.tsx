"use client";

import { Lock, Database, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const STACK = [
  { icon: Lock, name: "Seal" },
  { icon: Database, name: "Walrus" },
  { icon: ShieldCheck, name: "Sui" },
];

export default function StackSection() {
  const marqueeItems = Array.from({ length: 6 }, () => "PERSIST THROUGH ANYTHING");

  return (
    <section className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-yolk-deep">
            Part of the Sui stack
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Built on tools that don&apos;t blink.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-4">
            {STACK.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="flex items-center gap-2.5 rounded-full border border-shell bg-cream px-5 py-3 transition-all duration-200 hover:-translate-y-1 hover:border-yolk hover:bg-white hover:shadow-sm"
                >
                  <Icon className="h-[18px] w-[18px] text-yolk-deep" strokeWidth={1.8} />
                  <span className="font-display text-base font-bold text-ink">
                    {s.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="mt-16 overflow-hidden border-y border-shell py-5">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((text, i) => (
            <span
              key={i}
              className="mx-6 shrink-0 font-display text-2xl font-extrabold uppercase tracking-tight text-shell md:text-3xl"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
