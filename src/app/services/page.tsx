import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import CTA from "@/components/CTA";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Donga & Co.",
  description:
    "Eighteen service lines across accounting, taxation, audit, finance and company affairs.",
};

const groups = [
  {
    label: "Accounts & Systems",
    items: [
      {
        t: "Books of Accounts",
        d: "Writing books of accounts as per the needs and requirements of clients.",
      },
      {
        t: "Tally ERP Advisory",
        d: "Advising clients on Tally ERP systems, setup and management.",
      },
      {
        t: "HR Selection & Training",
        d: "Human resource selection and development — training of client staff.",
      },
      {
        t: "Management Consultancy",
        d: "Advising on Company Law matters and management decisions.",
      },
    ],
  },
  {
    label: "Direct Tax",
    items: [
      {
        t: "Income Tax Filings",
        d: "Online payment of Income Tax, TDS and statutory liabilities on behalf of clients.",
      },
      {
        t: "Scrutiny Representation",
        d: "Representing clients before Income Tax authorities for assessment proceedings.",
      },
      {
        t: "Tax Planning",
        d: "Advising on tax planning and investments to get the best advantage within the legal framework.",
      },
      {
        t: "TDS Returns",
        d: "Filing of TDS returns and preparation of associated schedules.",
      },
    ],
  },
  {
    label: "Indirect Tax",
    items: [
      {
        t: "GST / VAT Returns",
        d: "Preparation and filing of returns, with departmental representation as required.",
      },
      {
        t: "Service Tax Schedules",
        d: "Preparation of schedules for Service Tax liability and filing of returns.",
      },
      {
        t: "Refunds for Exporters",
        d: "Claiming refund of Service Tax for exporters and ensuring timely credit.",
      },
      {
        t: "Excise Advisory",
        d: "Advice in matters of central excise and service tax.",
      },
    ],
  },
  {
    label: "Finance & Audit",
    items: [
      {
        t: "Bank Finance",
        d: "Cash credit, term loans, project finance, housing & car finance — sourced and structured.",
      },
      {
        t: "CMA Data",
        d: "Preparation of CMA data for renewal of working-capital and finance facilities.",
      },
      {
        t: "Audit Coordination",
        d: "Coordinating with auditors under the Companies Act, Income Tax Act, GST Act and more.",
      },
      {
        t: "Scrutiny Preparation",
        d: "Preparation of details for scrutiny assessments under the Income Tax Act.",
      },
    ],
  },
  {
    label: "Company Affairs",
    items: [
      {
        t: "Company Registration",
        d: "End-to-end company incorporation, including PAN/TAN and statutory registrations.",
      },
      {
        t: "Professional Tax & PT",
        d: "Professional Tax registration and ongoing compliance.",
      },
      {
        t: "Partnership Deeds",
        d: "Drafting and registration of partnership deeds and amendments.",
      },
      {
        t: "New Project Consultation",
        d: "Project proposals, feasibility consultation and structuring advice.",
      },
    ],
  },
];

export default function ServicesPage() {
  let counter = 0;
  return (
    <>
      <PageHeader
        crumb="Services"
        eyebrow="What we do"
        title="Eighteen service lines."
        emphasis="One accountable team."
        intro="From the first journal entry to the final assessment hearing, we cover every step. Here's the full catalog — organised the way our practice is run."
      />

      {groups.map((g, gi) => (
        <section
          key={g.label}
          className={`relative py-10 md:py-14 ${
            gi % 2 === 1 ? "bg-[#F1EFE8]/60" : ""
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                    {String(gi + 1).padStart(2, "0")} / Group
                  </span>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="mt-4 font-display text-3xl md:text-5xl text-[#0B3A5C] leading-[1.05]">
                    {g.label}
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#0B3A5C]/10">
              {g.items.map((it) => {
                counter += 1;
                const n = String(counter).padStart(2, "0");
                return (
                  <Reveal key={it.t} delay={0.05}>
                    <div className="group border-r border-b border-[#0B3A5C]/10 p-8 md:p-10 hover:bg-[#FAFAF7] transition-colors h-full bg-transparent">
                      <div className="flex items-start justify-between mb-10">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                          {n}
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="text-[#0B3A5C]/30 group-hover:text-[#1F8FCF] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                      <h3 className="font-display text-2xl text-[#0B3A5C] mb-3 leading-tight">
                        {it.t}
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-[#1A1A1A]/70">
                        {it.d}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <CTA
        eyebrow="Engage us"
        title="Not sure where to"
        emphasis="start?"
        body="Tell us what's on your plate this quarter — we'll tell you which of our service lines apply, in plain language."
      />
    </>
  );
}
