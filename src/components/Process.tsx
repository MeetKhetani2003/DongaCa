"use client";

import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Consult",
    desc: "We listen first. A no-obligation conversation about your business, your books and your deadlines.",
    image: "/consult.png",
  },
  {
    n: "02",
    title: "Plan",
    desc: "A clear engagement scope, a calendar of filings, and a single point of contact you can call.",
    image: "/plan.png",
  },
  {
    n: "03",
    title: "Execute",
    desc: "Quiet, accurate, on-time. Monthly reports, proactive alerts and zero last-minute scrambles.",
    image: "/execute.png",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#1F8FCF]" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#1F8FCF] font-bold">
                  03 / Process
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#0B3A5C] leading-[0.95]">
                A predictable rhythm. <br />
                <em className="italic text-[#1F8FCF] not-italic font-display italic">No surprises.</em>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0B3A5C]/10 border-y border-[#0B3A5C]/10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="group relative overflow-hidden bg-[#FAFAF7] h-[450px] md:h-[550px] transition-all duration-700">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A5C] via-[#0B3A5C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-between transition-colors duration-500">
                  <div
                    className="font-display text-[120px] md:text-[140px] leading-none text-transparent group-hover:text-white/10 transition-all duration-700"
                    style={{ WebkitTextStroke: "1px rgba(31, 143, 207, 0.4)" }}
                  >
                    {s.n}
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <h3 className="font-display text-4xl text-[#0B3A5C] group-hover:text-white mb-6 transition-colors duration-500">
                      {s.title}
                    </h3>
                    <p className="text-[16px] leading-[1.7] text-[#1A1A1A]/70 group-hover:text-white/80 transition-colors duration-500 max-w-[280px]">
                      {s.desc}
                    </p>
                    
                    {/* Hover line */}
                    <motion.div 
                      className="h-1 w-0 bg-[#1F8FCF] mt-8 group-hover:w-16 transition-all duration-700 delay-100"
                    />
                  </div>
                </div>

                {/* Static number for when not hovered (optional refinement) */}
                <div className="absolute top-12 right-12 text-[11px] uppercase tracking-widest text-[#1F8FCF] font-bold group-hover:opacity-0 transition-opacity">
                  Step {s.n}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
