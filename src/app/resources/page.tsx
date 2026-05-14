"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import CTA from "@/components/CTA";
import { FileText, Calendar } from "lucide-react";

const tabs = [
  { id: "paper", label: "Paper Requirements", icon: FileText },
  { id: "deadlines", label: "Keep In Mind", icon: Calendar },
] as const;

const papers = [
  {
    t: "Income Tax Return — Salaried",
    items: [
      "Form 16 from employer",
      "Form 26AS / AIS / TIS download",
      "Bank statements for the year",
      "Investment proofs (80C, 80D, NPS, etc.)",
      "Home loan interest certificate (if applicable)",
      "Aadhaar & PAN copy",
    ],
  },
  {
    t: "Income Tax Return — Business / Profession",
    items: [
      "Books of accounts / Tally backup",
      "Bank statements for all accounts",
      "Sales & purchase ledgers",
      "GST returns filed during the year",
      "TDS certificates (Form 16A)",
      "Loan statements & interest certificates",
    ],
  },
  {
    t: "GST Registration",
    items: [
      "PAN of business / proprietor",
      "Aadhaar of authorised signatory",
      "Proof of business address (rent agreement / NOC + utility bill)",
      "Bank account proof — cancelled cheque or statement",
      "Photograph of authorised signatory",
      "Digital signature (for companies / LLPs)",
    ],
  },
  {
    t: "Company Incorporation",
    items: [
      "PAN & Aadhaar of directors",
      "Address proof of directors (utility bill / bank statement)",
      "Passport-size photographs",
      "Proof of registered office address",
      "DSC of proposed directors",
      "Proposed company names (in order of preference)",
    ],
  },
  {
    t: "Bank Loan / CMA Data",
    items: [
      "Last 3 years audited financials",
      "Provisional financials for current year",
      "Projected financials for next 2 years",
      "GST returns for last 12 months",
      "Bank statements for last 12 months",
      "KYC of promoters & guarantors",
    ],
  },
  {
    t: "TDS Return Filing",
    items: [
      "TAN of deductor",
      "Challan details for tax deposited",
      "PAN of all deductees",
      "Nature of payment & section",
      "Date and amount of payment",
      "Previous quarter return acknowledgement",
    ],
  },
];

const deadlines = [
  {
    d: "JUL",
    n: "31",
    t: "ITR Filing",
    note: "Non-audit individual / HUF cases",
    penalty: "Late fee up to ₹5,000",
  },
  {
    d: "SEP",
    n: "30",
    t: "Tax Audit Report",
    note: "u/s 44AB",
    penalty: "0.5% of turnover, max ₹1.5L",
  },
  {
    d: "OCT",
    n: "31",
    t: "Audit-case ITR",
    note: "Companies, partnerships under audit",
    penalty: "Up to ₹10,000 + interest",
  },
  {
    d: "JUL",
    n: "31",
    t: "TDS Return — Q1",
    note: "April – June quarter",
    penalty: "₹200 per day of delay",
  },
  {
    d: "OCT",
    n: "31",
    t: "TDS Return — Q2",
    note: "July – September quarter",
    penalty: "₹200 per day of delay",
  },
  {
    d: "JAN",
    n: "31",
    t: "TDS Return — Q3",
    note: "October – December quarter",
    penalty: "₹200 per day of delay",
  },
  {
    d: "MAY",
    n: "31",
    t: "TDS Return — Q4",
    note: "January – March quarter",
    penalty: "₹200 per day of delay",
  },
  {
    d: "MAR",
    n: "15",
    t: "Advance Tax — Final",
    note: "Final installment, 100% liability",
    penalty: "Interest @ 12% p.a.",
  },
  {
    d: "DEC",
    n: "15",
    t: "Advance Tax — Q3",
    note: "75% of total liability",
    penalty: "Interest @ 12% p.a.",
  },
  {
    d: "20",
    n: "th",
    t: "GSTR-3B Monthly",
    note: "Every month — summary return",
    penalty: "₹50–200 / day + 18% interest",
  },
  {
    d: "11",
    n: "th",
    t: "GSTR-1 Monthly",
    note: "Every month — outward supplies",
    penalty: "Late fee per day",
  },
  {
    d: "OCT",
    n: "30",
    t: "Annual ROC Filing",
    note: "AOC-4 / MGT-7 for companies",
    penalty: "₹100 per day",
  },
];

export default function ResourcesPage() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("paper");

  return (
    <>
      <PageHeader
        crumb="Resources"
        eyebrow="At a glance"
        title="Documents and dates,"
        emphasis="organised."
        intro="Two reference sets we share with every client — a checklist of what to bring, and a calendar of what's coming up."
        image="/resources-hero.png"
      />

      {/* Tabs */}
      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex gap-2 border-b border-[#0B3A5C]/15">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`relative flex items-center gap-3 px-6 py-5 text-sm uppercase tracking-[0.18em] transition-colors ${
                    isActive
                      ? "text-[#0B3A5C]"
                      : "text-[#1A1A1A]/45 hover:text-[#0B3A5C]"
                  }`}
                >
                  <Icon size={16} />
                  {t.label}
                  {isActive && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#1F8FCF]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {active === "paper" ? (
          <motion.section
            key="paper"
            id="paper"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative py-12 md:py-16"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
                <div className="lg:col-span-6">
                  <Reveal>
                    <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                      01 / Paper Requirements
                    </span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="mt-6 font-display text-4xl md:text-5xl text-[#0B3A5C] leading-[1.05]">
                      What to{" "}
                      <em className="italic text-[#1F8FCF]">bring along.</em>
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 self-end">
                  <Reveal delay={0.2}>
                    <p className="text-[16px] leading-[1.7] text-[#1A1A1A]/70">
                      Use these checklists when you reach out so we can begin
                      work on the same day. Don&apos;t worry if a document or
                      two is missing — we&apos;ll guide you.
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0B3A5C]/10">
                {papers.map((p, i) => (
                  <Reveal key={p.t} delay={i * 0.05}>
                    <div className="bg-[#FAFAF7] p-8 md:p-10 h-full">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF] mb-4">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-[#0B3A5C] mb-6 leading-tight">
                        {p.t}
                      </h3>
                      <ul className="space-y-3">
                        {p.items.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-3 text-[14px] text-[#1A1A1A]/75 leading-[1.6]"
                          >
                            <span className="mt-2 h-1 w-1 rounded-full bg-[#1F8FCF] shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="deadlines"
            id="deadlines"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative py-12 md:py-16"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
                <div className="lg:col-span-6">
                  <Reveal>
                    <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                      02 / Keep In Mind
                    </span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <h2 className="mt-6 font-display text-4xl md:text-5xl text-[#0B3A5C] leading-[1.05]">
                      Dates we never let you{" "}
                      <em className="italic text-[#1F8FCF]">miss.</em>
                    </h2>
                  </Reveal>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 self-end">
                  <Reveal delay={0.2}>
                    <p className="text-[16px] leading-[1.7] text-[#1A1A1A]/70">
                      Compliance is a calendar problem before it is a tax
                      problem. These are the recurring dates we manage on behalf
                      of every client.
                    </p>
                  </Reveal>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {deadlines.map((d, i) => (
                  <Reveal key={`${d.t}-${i}`} delay={i * 0.04}>
                    <div className="group bg-[#FAFAF7] border border-[#0B3A5C]/10 p-6 hover:border-[#1F8FCF] hover:bg-[#0B3A5C] transition-all h-full flex flex-col justify-between min-h-[210px]">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.24em] text-[#1F8FCF]">
                          {d.d}
                        </div>
                        <div className="font-display text-5xl text-[#0B3A5C] group-hover:text-[#FAFAF7] mt-1 transition-colors">
                          {d.n}
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="font-medium text-[#0B3A5C] group-hover:text-[#FAFAF7] text-sm transition-colors">
                          {d.t}
                        </div>
                        <div className="text-xs text-[#1A1A1A]/55 group-hover:text-[#FAFAF7]/60 mt-1 transition-colors">
                          {d.note}
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#1F8FCF] mt-3">
                          {d.penalty}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <CTA
        eyebrow="Stay ahead"
        title="Want a calendar"
        emphasis="of your own?"
        body="We'll draft a personalised compliance calendar mapped to your business — and remind you a week before each date."
      />
    </>
  );
}
