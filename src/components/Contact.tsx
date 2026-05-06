"use client";

import { Reveal } from "./Reveal";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section
      id="contact"
      className="relative bg-[#0B3A5C] text-[#FAFAF7] py-14 md:py-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
              05 / Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1.0]">
              Let&apos;s talk{" "}
              <em className="italic text-[#1F8FCF]">numbers.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 space-y-8">
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#FAFAF7]/50 mb-2">
                  Email
                </div>
                <a
                  href="mailto:donga@dongaandco.com"
                  className="link-underline font-display text-2xl md:text-3xl"
                >
                  donga@dongaandco.com
                </a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#FAFAF7]/50 mb-2">
                  Phone
                </div>
                <a
                  href="tel:+919537393949"
                  className="link-underline font-display text-2xl md:text-3xl"
                >
                  +91 95373 93949
                </a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-[#FAFAF7]/50 mb-2">
                  Office
                </div>
                <p className="text-[15px] leading-[1.7] text-[#FAFAF7]/75 max-w-sm">
                  Signature-II, C-704, Sarkhej-Sanand Circle,
                  <br />
                  B/h. Hotel Sabar, Sarkhej,
                  <br />
                  Ahmedabad 382210, Gujarat, India.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.3}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-10"
            >
              {[
                { label: "Your name", id: "name", type: "text" },
                { label: "Email", id: "email", type: "email" },
                { label: "Phone", id: "phone", type: "tel" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-[10px] uppercase tracking-[0.28em] text-[#FAFAF7]/50 mb-3"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full bg-transparent border-b border-[#FAFAF7]/20 pb-3 text-lg text-[#FAFAF7] placeholder-[#FAFAF7]/30 focus:border-[#1F8FCF] outline-none transition-colors"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="msg"
                  className="block text-[10px] uppercase tracking-[0.28em] text-[#FAFAF7]/50 mb-3"
                >
                  How can we help?
                </label>
                <textarea
                  id="msg"
                  rows={3}
                  className="w-full bg-transparent border-b border-[#FAFAF7]/20 pb-3 text-lg text-[#FAFAF7] placeholder-[#FAFAF7]/30 focus:border-[#1F8FCF] outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-[#1F8FCF] text-[#0B3A5C] px-8 py-4 text-sm tracking-wide hover:bg-[#FAFAF7] transition-colors"
              >
                {submitted ? "Thank you — we'll be in touch" : "Send enquiry"}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
