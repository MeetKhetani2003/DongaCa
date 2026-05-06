"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHeader({
  eyebrow,
  title,
  emphasis,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  intro?: string;
  crumb: string;
}) {
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
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#0B3A5C]/70 mb-10"
        >
          <Link href="/" className="hover:text-[#1F8FCF]">
            Home
          </Link>
          <span className="text-[#1F8FCF]">/</span>
          <span>{crumb}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-[#1F8FCF]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#0B3A5C]/70">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="font-display text-[#0B3A5C] leading-[0.98] text-[44px] sm:text-[64px] md:text-[84px] lg:text-[104px] max-w-[14ch]"
        >
          {title}{" "}
          {emphasis && (
            <em className="italic text-[#1F8FCF] font-display">{emphasis}</em>
          )}
        </motion.h1>

        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-10 max-w-2xl text-[17px] leading-[1.7] text-[#1A1A1A]/75"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
