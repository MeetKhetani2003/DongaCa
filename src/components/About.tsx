"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                01 / About
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[#0B3A5C] text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A firm built on{" "}
              <em className="text-[#1F8FCF] not-italic font-display italic">
                trust
              </em>
              , sharpened by discipline.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-8">
          <Reveal delay={0.2}>
            <p className="text-[17px] leading-[1.7] text-[#1A1A1A]/75">
              Donga & Co. is a chartered accountancy practice rooted in
              Ahmedabad — established with honesty in heart, discipline in hands
              and a clear plan of action. We believe service is not merely a
              deliverable, but a relationship we earn, every quarter.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-[17px] leading-[1.7] text-[#1A1A1A]/75">
              From manufacturers and exporters to doctors, designers, brokers
              and creators — we serve a deliberately diverse roster of clients
              who share one trait: the desire to grow without worrying about the
              books.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#0B3A5C] border-b border-[#1F8FCF] pb-1 hover:text-[#1F8FCF] transition-colors"
            >
              Read our story →
            </Link>
          </Reveal>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#0B3A5C]/15">
            {[
              { n: "20+", l: "Years of practice" },
              { n: "500+", l: "Clients served" },
              { n: "18", l: "Service lines" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={0.4 + i * 0.08}>
                <div>
                  <div className="font-display text-5xl text-[#0B3A5C]">
                    {s.n}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/55 mt-2">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
