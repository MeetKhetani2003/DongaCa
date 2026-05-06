"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";

export default function CTA({
  eyebrow = "Ready when you are",
  title = "Let's talk",
  emphasis = "numbers.",
  body = "Tell us a little about your business — we'll come back with a clear, no-obligation plan.",
}: {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  body?: string;
}) {
  return (
    <section className="relative bg-[#0B3A5C] text-[#FAFAF7] py-12 md:py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1F8FCF 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0]">
              {title} <em className="italic text-[#1F8FCF]">{emphasis}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-[#FAFAF7]/65 text-[16px] leading-[1.7]">
              {body}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end gap-4 flex-wrap">
          <Reveal delay={0.25}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#1F8FCF] text-[#0B3A5C] px-8 py-4 text-sm tracking-wide hover:bg-[#FAFAF7] transition-colors"
            >
              Book a consult
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={0.32}>
            <a
              href="mailto:donga@dongaandco.com"
              className="group inline-flex items-center gap-3 border border-[#FAFAF7]/30 px-8 py-4 text-sm tracking-wide text-[#FAFAF7] hover:border-[#1F8FCF] hover:text-[#1F8FCF] transition-colors"
            >
              Email us
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
