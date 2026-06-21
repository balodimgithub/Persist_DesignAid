"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-yolk-ink px-6 py-20 md:px-10">
      {/* same orange family, lighter tint, blended in for depth */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yolk-pale/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-yolk/20 blur-3xl" />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Seal something that should outlast you.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          It takes minutes to set a condition. It could take care of the
          people, agents, or treasuries that depend on you.
        </p>
        <button className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-yolk-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream">
          Start sealing
          <ArrowRight className="h-4 w-4" />
        </button>
      </Reveal>
    </section>
  );
}
