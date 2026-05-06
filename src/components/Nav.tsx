"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Consultancy", href: "/consultancy" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#FAFAF7]/95 backdrop-blur-xl border-b border-[#0B3A5C]/10 shadow-[0_1px_20px_-10px_rgba(11,58,92,0.25)]"
          : "bg-[#FAFAF7]/80 backdrop-blur-md border-b border-[#0B3A5C]/8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link href="/" className="group">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[12.5px] font-medium tracking-[0.08em] uppercase transition-colors relative group ${
                  active
                    ? "text-[#1F8FCF]"
                    : "text-[#0B3A5C] hover:text-[#1F8FCF]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-[#1F8FCF] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex group items-center gap-2 rounded-full bg-[#1F8FCF] px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] text-white hover:bg-[#0B3A5C] transition-colors"
        >
          Book a Consult
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#0B3A5C] p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-[#0B3A5C]/10 bg-[#FAFAF7]"
        >
          <nav className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-wide text-[#0B3A5C]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1F8FCF] px-5 py-3 text-[12px] uppercase tracking-[0.14em] text-white"
            >
              Book a Consult →
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
