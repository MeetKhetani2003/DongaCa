"use client";

import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Bookkeeping & Tally",
    desc: "Books written to the standards your business needs — Tally ERP, reconciliations, MIS.",
  },
  {
    n: "02",
    title: "Direct Tax",
    desc: "Income tax filings, advance tax, scrutiny representation and tax planning.",
  },
  {
    n: "03",
    title: "GST & Indirect Tax",
    desc: "Returns, refunds, departmental representation and end-to-end compliance.",
  },
  {
    n: "04",
    title: "Audit Coordination",
    desc: "Liaising with auditors under the Companies Act, Income Tax Act and more.",
  },
  {
    n: "05",
    title: "Finance & CMA",
    desc: "CMA data, project reports, cash credit, term loans and bank facility renewals.",
  },
  {
    n: "06",
    title: "Company Setup",
    desc: "Company registration, PAN/TAN, professional tax & partnership deeds.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0B3A5C] text-[#FAFAF7] py-14 md:py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1F8FCF 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                02 / Services
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Everything your books need,{" "}
                <em className="italic text-[#1F8FCF]">under one roof.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <Reveal delay={0.2}>
              <p className="text-[#FAFAF7]/65 text-[17px] leading-[1.7]">
                Eighteen distinct service lines, one accountable team. From
                day-to-day bookkeeping to complex assessments — we handle it
                end-to-end so you don&apos;t juggle vendors.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#FAFAF7]/10">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <Link
                href="/services"
                className="group block border-r border-b border-[#FAFAF7]/10 p-8 md:p-10 hover:bg-[#07273F] transition-colors h-full"
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                    {s.n}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#FAFAF7]/40 group-hover:text-[#1F8FCF] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-[28px] leading-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#FAFAF7]/55">
                  {s.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-sm tracking-wide text-[#FAFAF7] border-b border-[#1F8FCF] pb-1 hover:text-[#1F8FCF] transition-colors"
            >
              View all 18 services
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
