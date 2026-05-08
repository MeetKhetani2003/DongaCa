"use client";

import { motion } from "framer-motion";

const items = [
  "Trust",
  "Wealth Creation",
  "Tax Planning",
  "Compliance",
  "Audit Ready",
  "Timely Filings",
  "Family Office",
  "Direct Tax",
  "GST",
];

export default function Marquee() {
  return (
  <div className="mt-10  border-y border-[#0B3A5C]/10 overflow-hidden bg-[#F1EFE8]/40">
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
  );
}