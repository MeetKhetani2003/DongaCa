"use client";

import { Reveal } from "./Reveal";

export default function Quote() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,177,74,0.12), transparent 60%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="font-display text-[120px] leading-none text-[#1F8FCF]/40 italic block">
            “
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display italic text-[#0B3A5C] text-3xl md:text-5xl leading-[1.2] -mt-10">
            You focus on growing your business.
            <br />
            Trust us with the rest.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="h-px w-10 bg-[#1F8FCF]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#1A1A1A]/60">
              The Donga & Co. Promise
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
