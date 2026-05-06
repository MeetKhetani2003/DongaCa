"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import CTA from "@/components/CTA";
import { Plus, Minus } from "lucide-react";

const personal = [
  "Why should I file my Income Tax Return?",
  "Whether to purchase a house with a bank loan or to pay rent?",
  "What will be the profit & tax while selling a home or office?",
  "How to make productive use of money power?",
  "How to plan for children's education and marriage?",
  "How to plan for retirement and pension?",
  "What is the best way to structure family wealth?",
  "How to invest tax-efficiently across asset classes?",
  "When should I form an HUF?",
  "How to gift assets to family members tax-efficiently?",
];

const business = [
  "Which business structure suits my new venture?",
  "How to optimise GST input credits across branches?",
  "When does a tax audit become applicable to my business?",
  "How to raise working capital from a bank — cash credit vs. term loan?",
  "How to make use of computers, internet and digital technology in the accounts department?",
  "What are my obligations as an employer for TDS, PF and PT?",
  "How to structure an export business for refund eligibility?",
  "How to plan for an income-tax scrutiny notice?",
  "What are the compliance calendars I need to follow?",
  "AND — what will be your fees?",
];

function Accordion({ items, label }: { items: string[]; label: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-[#0B3A5C]/15">
      {items.map((q, i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border-b border-[#0B3A5C]/15">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-7 text-left group"
            >
              <div className="flex items-start gap-6">
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF] mt-2 tabular-nums">
                  {label}.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl md:text-2xl text-[#0B3A5C] leading-snug group-hover:text-[#1F8FCF] transition-colors">
                  {q}
                </span>
              </div>
              <span className="mt-2 text-[#0B3A5C] shrink-0">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-[calc(11px+1.5rem+3rem)] md:pl-[calc(11px+1.5rem+5rem)] max-w-3xl text-[15px] leading-[1.8] text-[#1A1A1A]/75">
                    Each engagement begins with a focused conversation. We walk
                    through your specific situation, weigh the options against
                    current law, and recommend the most tax-efficient and
                    compliant path — in plain language, with the trade-offs
                    spelled out.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function ConsultancyPage() {
  return (
    <>
      <PageHeader
        crumb="Consultancy"
        eyebrow="Ask us anything"
        title="Whatever's on"
        emphasis="your mind."
        intro="The questions our clients ask most often — across personal finance and business decisions. If your question isn't here, that's exactly the conversation we'd like to have."
      />

      <section className="relative py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                01 / Personal Requirements
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#0B3A5C] leading-[1.05] mb-12 max-w-3xl">
              For your{" "}
              <em className="italic text-[#1F8FCF]">family & finances.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Accordion items={personal} label="P" />
          </Reveal>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-[#F1EFE8]/60">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                02 / Business Requirements
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-[#0B3A5C] leading-[1.05] mb-12 max-w-3xl">
              For your{" "}
              <em className="italic text-[#1F8FCF]">business & books.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Accordion items={business} label="B" />
          </Reveal>
        </div>
      </section>

      <CTA
        eyebrow="Have a question that's not here?"
        title="Ask us"
        emphasis="directly."
        body="We answer every enquiry personally — usually within one working day."
      />
    </>
  );
}
