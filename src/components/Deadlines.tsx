"use client";

import { Reveal } from "./Reveal";

const deadlines = [
  { d: "JUL", n: "31", t: "ITR Filing", note: "For non-audit cases" },
  { d: "OCT", n: "15", t: "TDS Return Q2", note: "Quarterly TDS" },
  { d: "MAR", n: "31", t: "Advance Tax", note: "Final installment" },
  { d: "MAY", n: "31", t: "TDS Return Q4", note: "FY year-end" },
  { d: "OCT", n: "31", t: "Tax Audit", note: "If applicable u/s 44AB" },
  { d: "JAN", n: "15", t: "TDS Return Q3", note: "Quarterly TDS" },
];

export default function Deadlines() {
  return (
    <section id="resources" className="relative py-14 md:py-20 bg-[#F1EFE8]/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                04 / Keep In Mind
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[#0B3A5C] leading-[1.05]">
                Dates we never let you{" "}
                <em className="italic text-[#1F8FCF]">miss.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <Reveal delay={0.2}>
              <p className="text-[17px] leading-[1.7] text-[#1A1A1A]/70">
                Compliance is a calendar problem before it is a tax problem.
                Here are the dates we proactively manage for every client we
                serve.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {deadlines.map((d, i) => (
            <Reveal key={`${d.d}-${d.n}-${i}`} delay={i * 0.05}>
              <div className="group bg-[#FAFAF7] border border-[#0B3A5C]/10 p-6 hover:border-[#1F8FCF] transition-colors h-full flex flex-col justify-between min-h-[180px]">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#1F8FCF]">
                    {d.d}
                  </div>
                  <div className="font-display text-5xl text-[#0B3A5C] mt-1">
                    {d.n}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="font-medium text-[#0B3A5C] text-sm">
                    {d.t}
                  </div>
                  <div className="text-xs text-[#1A1A1A]/55 mt-1">{d.note}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
