import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About — Donga & Co.",
  description:
    "Donga & Co. is a chartered accountancy practice rooted in Ahmedabad. Built on trust, sharpened by discipline.",
};

const industries = [
  "Manufacturing",
  "Trading",
  "Exporters & Importers",
  "Builders & Developers",
  "Doctors & Laboratories",
  "Event Management",
  "Stock Brokers & Traders",
  "E-commerce",
  "Contractors",
  "Software Development",
  "Non-Resident Indians",
  "Interior Designers",
  "Web Designers",
  "Artists & Musicians",
  "Film Editors",
  "Sports Persons",
  "Commission Agents",
  "LIC Agents",
  "Caterers & Decorators",
  "Restaurant & Hotel",
  "Clearing & Forwarding",
  "Courier & Logistics",
];

const values = [
  {
    n: "01",
    t: "Trust",
    d: "We treat every client relationship as long-term — earned every quarter, never assumed.",
  },
  {
    n: "02",
    t: "Timeliness",
    d: "Available Timely Service is not a tagline. It is the operating discipline of the firm.",
  },
  {
    n: "03",
    t: "Together",
    d: "Together Everybody Achieves More — we grow with our employees and our clients.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="01 / Our Story"
        title="A practice built on"
        emphasis="quiet discipline."
        intro="Donga & Co. was established in Ahmedabad with a dream in eyes, honesty in heart, hard work in hands and an action plan in mind. Two decades on, the principles have not changed."
      />

      {/* Leadership Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-[#0B3A5C]/5">
                  <img
                    src="/OwnerSuiteImage.jpeg"
                    alt="Muzamilkhan Donga"
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </Reveal>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1F8FCF]/10 -z-10 rounded-full blur-2xl" />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                  Leadership
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display text-4xl md:text-5xl text-[#0B3A5C] leading-tight">
                  Muzamilkhan Donga
                  <span className="block text-xl md:text-2xl text-[#1F8FCF] mt-2 font-sans font-medium tracking-wide">
                    Founder & Managing Partner
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 space-y-6 text-[17px] leading-[1.8] text-[#1A1A1A]/75">
                  <p>
                    With over two decades of experience in the fiscal landscape of Gujarat, 
                    Muzamilkhan has built Donga & Co. on a foundation of absolute honesty 
                    and quiet discipline. His vision was simple: to create a "Temple of Trust" 
                    where businesses could find not just service, but strategic partnership.
                  </p>
                  <p>
                    Under his leadership, the firm has evolved from a local practice into 
                     a multi-city advisory, known for its inventive and cost-effective 
                     solutions to complex taxation and auditing challenges.
                  </p>
                  <p className="font-display italic text-xl text-[#0B3A5C]">
                    "We don't just count the numbers; we make the numbers count for your growth."
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.3}>
                <div className="mt-12 flex items-center gap-10 border-t border-[#0B3A5C]/10 pt-10">
                  <div>
                    <div className="text-2xl font-display text-[#0B3A5C]">20+</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mt-1">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display text-[#0B3A5C]">Ahmedabad</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mt-1">Practice Base</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="relative py-12 md:py-16 bg-[#F1EFE8]/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                A Note From The Firm
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-3xl md:text-4xl text-[#0B3A5C] leading-[1.1]">
                Welcome to the{" "}
                <em className="italic text-[#1F8FCF]">Temple of Trust.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-7 text-[16px] leading-[1.8] text-[#1A1A1A]/75">
            <Reveal delay={0.15}>
              <p>
                We welcome you to a world of wealth creation, a territory of tax
                planning, and a place where you can get all the services under
                one roof — and that too, &lsquo;Any Time Services&rsquo;.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                In recent times we&apos;ve observed that the Government of India
                is focusing on Digital India — filing returns and various forms
                under the Income Tax Act, TDS, GST, ROC, etc. have become
                online. Today, every day has become a deadline. In such a
                scenario we believe that not only services, but{" "}
                <em className="text-[#0B3A5C] not-italic font-medium">
                  timely services
                </em>{" "}
                are most important.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                Our employees are our strength and our greatest asset. The
                secret of our growth is the growth of our people and our
                clients. As the word TEAM says — Together Everybody Achieves
                More. We believe in growing and prospering together.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="mt-8 border-l-2 border-[#1F8FCF] pl-6 py-2 font-display italic text-2xl md:text-3xl text-[#0B3A5C] leading-[1.3]">
                &ldquo;You focus on growing your business and trust in us. Just
                keep accounting, taxation & systems with us.&rdquo;
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-12 md:py-16 bg-[#F1EFE8]/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                  02 / What We Stand For
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display text-4xl md:text-5xl text-[#0B3A5C] leading-[1.05]">
                  Three principles,{" "}
                  <em className="italic text-[#1F8FCF]">no exceptions.</em>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0B3A5C]/10">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.1}>
                <div className="bg-[#FAFAF7] p-10 md:p-12 h-full">
                  <div
                    className="font-display text-[110px] leading-none text-transparent"
                    style={{ WebkitTextStroke: "1px #1F8FCF" }}
                  >
                    {v.n}
                  </div>
                  <h3 className="mt-8 font-display text-3xl text-[#0B3A5C]">
                    {v.t}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[#1A1A1A]/70">
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                  03 / Industries Served
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-display text-4xl md:text-5xl text-[#0B3A5C] leading-[1.05]">
                  A deliberately{" "}
                  <em className="italic text-[#1F8FCF]">diverse</em> roster.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <Reveal delay={0.2}>
                <p className="text-[16px] leading-[1.7] text-[#1A1A1A]/70">
                  By design, we serve a wide cross-section of professions and
                  industries. The breadth keeps our practice sharp, and gives
                  every client the benefit of cross-pollinated expertise.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#0B3A5C]/10">
            {industries.map((it, i) => (
              <Reveal key={it} delay={i * 0.02}>
                <div className="bg-[#FAFAF7] py-6 px-5 text-[14px] text-[#0B3A5C] hover:bg-[#0B3A5C] hover:text-[#1F8FCF] transition-colors cursor-default flex items-center gap-3">
                  <span className="text-[10px] text-[#1F8FCF] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {it}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Become a client"
        title="Let's start with"
        emphasis="a conversation."
        body="No commitment, no jargon. Just a clear-headed talk about your books, your filings and your goals for the year."
      />
    </>
  );
}
