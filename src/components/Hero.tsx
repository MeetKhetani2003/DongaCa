"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    src: "https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    caption: "Books & filings, handled.",
    label: "Accounting",
  },
  {
    src: "https://images.pexels.com/photos/5511098/pexels-photo-5511098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    caption: "A team you can call.",
    label: "Consultation",
  },
  {
    src: "https://images.pexels.com/photos/8296970/pexels-photo-8296970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    caption: "Tax planning, done right.",
    label: "Direct Tax",
  },
  {
    src: "https://images.pexels.com/photos/6899396/pexels-photo-6899396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    caption: "Audit-ready, every quarter.",
    label: "Audit",
  },
  {
    src: "https://images.pexels.com/photos/8296974/pexels-photo-8296974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    caption: "GST & compliance made simple.",
    label: "GST",
  },
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] overflow-hidden bg-[#0B3A5C]">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.caption}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A5C]/85 via-[#0B3A5C]/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Caption */}
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-[#FAFAF7]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`cap-${index}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#1F8FCF] mb-2">
              {String(index + 1).padStart(2, "0")} — {current.label}
            </div>
            <div className="font-display text-xl md:text-2xl leading-snug max-w-xs">
              {current.caption}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute top-5 right-5 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1 transition-all"
            style={{
              width: i === index ? 28 : 12,
              backgroundColor:
                i === index ? "#1F8FCF" : "rgba(250,250,247,0.45)",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-5 left-5 text-[#FAFAF7]/80 text-[11px] uppercase tracking-[0.28em]">
        <span className="text-[#1F8FCF]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mx-2 opacity-50">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(31,143,207,0.18), transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#1F8FCF]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#0B3A5C]/70">
              Est. Ahmedabad · Chartered Accountancy
            </span>
          </motion.div>

          <h1 className="font-display text-[#0B3A5C] leading-[0.95] text-[42px] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            {["Accounting,", "taxation", "& systems —"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease }}
              className="block italic text-[#1F8FCF]"
            >
              handled.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-7 max-w-xl text-[16px] md:text-[17px] leading-relaxed text-[#1A1A1A]/75"
          >
            You focus on growing your business. We take care of the numbers, the
            filings, and the deadlines — quietly, accurately, on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-[#1F8FCF] text-white px-7 py-4 text-sm tracking-wide hover:bg-[#0B3A5C] transition-colors"
            >
              Explore services
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 text-sm tracking-wide text-[#0B3A5C] border border-[#0B3A5C]/30 hover:border-[#0B3A5C] transition-colors"
            >
              Talk to us
            </Link>
          </motion.div>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-[#0B3A5C]/15 pt-5"
          >
            {[
              { n: "20+", l: "Years" },
              { n: "500+", l: "Clients" },
              { n: "18", l: "Services" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl text-[#0B3A5C]">
                  {s.n}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A]/55 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="lg:col-span-5"
        >
          <HeroCarousel />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-10 md:mt-14 border-y border-[#0B3A5C]/10 overflow-hidden bg-[#F1EFE8]/40">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center shrink-0">
              {[
                "Trust",
                "Wealth Creation",
                "Tax Planning",
                "Compliance",
                "Audit Ready",
                "Timely Filings",
                "Family Office",
                "Direct Tax",
                "GST",
              ].map((w) => (
                <span
                  key={`${k}-${w}`}
                  className="font-display italic text-3xl md:text-4xl text-[#0B3A5C]/60 mx-8 flex items-center gap-8"
                >
                  {w}
                  <span className="text-[#1F8FCF]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
