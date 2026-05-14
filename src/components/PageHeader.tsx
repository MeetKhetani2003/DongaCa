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
  image,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  intro?: string;
  crumb: string;
  image?: string;
}) {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0B3A5C]">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A5C] via-transparent to-[#0B3A5C]/40" />
        </div>
      )}

      {/* Aesthetic Accents */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(31,143,207,0.3), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/60 mb-12"
        >
          <Link href="/" className="hover:text-[#1F8FCF] transition-colors">
            Home
          </Link>
          <span className="text-[#1F8FCF]">/</span>
          <span className="text-white/90">{crumb}</span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-[#1F8FCF]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#1F8FCF] font-bold">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-display text-white leading-[0.95] text-[52px] sm:text-[72px] md:text-[92px] lg:text-[112px] tracking-tight"
          >
            {title}{" "}
            {emphasis && (
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#1F8FCF] to-[#1F8FCF]/70">
                {emphasis}
              </span>
            )}
          </motion.h1>

          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="mt-12 max-w-2xl text-[18px] md:text-[21px] leading-relaxed text-white/70 font-sans font-light tracking-wide"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </div>

      {/* Aesthetic Grain Layer */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
