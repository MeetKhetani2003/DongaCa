"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const slides = [
  {
    src: "/meeting.mp4",
    label: "Consultation",
    title: "Strategic Financial Advisory",
    description: "Expert guidance to navigate complex fiscal landscapes and drive sustainable growth for your enterprise.",
  },
  {
    src: "/accountant.mp4",
    label: "Accounting",
    title: "Precision in Every Number",
    description: "Meticulous bookkeeping and reporting that provides a clear, real-time picture of your business health.",
  },
  {
    src: "/manworking.mp4",
    label: "Audit",
    title: "Rigorous Compliance & Audit",
    description: "Building trust through transparent, thorough auditing processes that ensure regulatory excellence.",
  },
  {
    src: "/office.mp4",
    label: "Taxation",
    title: "Global Tax Optimization",
    description: "Smart, efficient tax planning strategies tailored to your unique personal and corporate requirements.",
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const current = slides[index];

  return (
    <section className="relative h-[90vh] min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.8, ease }}
            className="absolute inset-0"
          >
            <video
              src={current.src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center"
          >
            <motion.div 
              variants={itemVariants}
              className="h-px w-20 bg-[#1F8FCF] mb-10" 
            />
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-[#1F8FCF] font-bold">
                {current.label}
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/60">
                0{index + 1}
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-display text-[48px] sm:text-[68px] md:text-[88px] lg:text-[110px] leading-[0.95] mb-10 tracking-tight"
            >
              <span className="block">{current.title.split(' ').slice(0, -1).join(' ')}</span>
              <span 
                className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#1F8FCF] to-[#1F8FCF]/70"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
              >
                {current.title.split(' ').slice(-1)}
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-[17px] md:text-[20px] text-white/70 max-w-2xl leading-relaxed mb-14 font-sans tracking-wide"
            >
              {current.description}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-5 text-[13px] tracking-[0.2em] uppercase font-bold overflow-hidden transition-all duration-500 hover:text-white"
              >
                <span className="relative z-10">Our Services</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-500">→</span>
                <div className="absolute inset-0 bg-[#0B3A5C] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-12 py-5 text-[13px] tracking-[0.2em] uppercase font-bold text-white border border-white/20 hover:border-[#1F8FCF] hover:text-[#1F8FCF] transition-all duration-500"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators - Minimalist */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative h-8 flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div 
              className={`transition-all duration-500 ${i === index ? "w-12 bg-[#1F8FCF] h-[2px]" : "w-6 bg-white/20 h-[1px] group-hover:bg-white/40"}`}
            />
          </button>
        ))}
      </div>

      {/* Aesthetic Grain Layer */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
