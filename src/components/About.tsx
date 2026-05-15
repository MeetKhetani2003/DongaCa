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
              Led by **CA Jay H Rajait** and **Madhusudan Donga**, our practice is
              dedicated to providing inventive and cost-effective solutions to our
              clients' complex fiscal challenges. We believe in building trust
              through transparency and delivering results with unwavering discipline.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-[17px] leading-[1.7] text-[#1A1A1A]/75">
              Our mission is to add value to our clients' businesses by providing
              proactive advice and ensuring total regulatory compliance. From NGO
              registrations to specialized industry licenses, we handle the
              intricacies so you can focus on growth.
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
