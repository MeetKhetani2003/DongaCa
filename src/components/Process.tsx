"use client";

import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Consult",
    desc: "We listen first. A no-obligation conversation about your business, your books and your deadlines.",
  },
  {
    n: "02",
    title: "Plan",
    desc: "A clear engagement scope, a calendar of filings, and a single point of contact you can call.",
  },
  {
    n: "03",
    title: "Execute",
    desc: "Quiet, accurate, on-time. Monthly reports, proactive alerts and zero last-minute scrambles.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                03 / Process
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[#0B3A5C] leading-[1.05] max-w-2xl">
                A predictable rhythm.{" "}
                <em className="italic text-[#1F8FCF]">No surprises.</em>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0B3A5C]/10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="bg-[#FAFAF7] p-10 md:p-12 h-full">
                <div
                  className="font-display text-[110px] leading-none text-transparent"
                  style={{ WebkitTextStroke: "1px #1F8FCF" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-8 font-display text-3xl text-[#0B3A5C]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#1A1A1A]/70">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
