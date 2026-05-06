"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk"
        emphasis="numbers."
        intro="Tell us about your business in a few lines. We'll respond personally within one working day with a clear, no-obligation next step."
      />

      <section className="relative py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info column */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#1F8FCF]">
                Coordinates
              </span>
            </Reveal>

            <div className="mt-10 space-y-10">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "donga@dongaandco.com",
                  href: "mailto:donga@dongaandco.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 95373 93949",
                  href: "tel:+919537393949",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value:
                    "Signature-II, C-704, Sarkhej-Sanand Circle, B/h. Hotel Sabar, Sarkhej, Ahmedabad 382210, Gujarat, India.",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value:
                    "Monday – Saturday · 10:00 AM – 7:30 PM IST. Closed on national holidays.",
                },
              ].map((c, i) => {
                const Icon = c.icon;
                const Inner = (
                  <>
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#1A1A1A]/45 mb-2">
                      {c.label}
                    </div>
                    <div className="font-display text-xl md:text-2xl text-[#0B3A5C] leading-snug">
                      {c.value}
                    </div>
                  </>
                );
                return (
                  <Reveal key={c.label} delay={0.05 + i * 0.08}>
                    <div className="flex items-start gap-5 group">
                      <div className="mt-2 h-10 w-10 rounded-full border border-[#1F8FCF]/40 flex items-center justify-center text-[#1F8FCF] shrink-0 group-hover:bg-[#1F8FCF] group-hover:text-[#0B3A5C] transition-colors">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1">
                        {c.href ? (
                          <a href={c.href} className="block">
                            {Inner}
                          </a>
                        ) : (
                          Inner
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <div className="bg-[#0B3A5C] text-[#FAFAF7] p-8 md:p-12 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #1F8FCF 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative">
                  <h2 className="font-display text-3xl md:text-4xl mb-2">
                    Send us an{" "}
                    <em className="italic text-[#1F8FCF]">enquiry.</em>
                  </h2>
                  <p className="text-[#FAFAF7]/65 text-sm mb-10">
                    All fields are optional except name and email.
                  </p>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setSubmitting(true);
                      const formData = new FormData(e.currentTarget);
                      const payload = Object.fromEntries(formData.entries());
                      try {
                        await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(payload),
                        });
                      } catch {}
                      setSubmitting(false);
                      setSubmitted(true);
                    }}
                    className="space-y-8"
                  >
                    {[
                      {
                        name: "name",
                        label: "Your name",
                        type: "text",
                        required: true,
                      },
                      {
                        name: "email",
                        label: "Email",
                        type: "email",
                        required: true,
                      },
                      { name: "phone", label: "Phone", type: "tel" },
                      {
                        name: "company",
                        label: "Company / Profession",
                        type: "text",
                      },
                    ].map((f) => (
                      <div key={f.name}>
                        <label
                          htmlFor={f.name}
                          className="block text-[10px] uppercase tracking-[0.28em] text-[#FAFAF7]/50 mb-3"
                        >
                          {f.label}{" "}
                          {f.required && (
                            <span className="text-[#1F8FCF]">*</span>
                          )}
                        </label>
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type}
                          required={f.required}
                          className="w-full bg-transparent border-b border-[#FAFAF7]/20 pb-3 text-base text-[#FAFAF7] placeholder-[#FAFAF7]/30 focus:border-[#1F8FCF] outline-none transition-colors"
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[10px] uppercase tracking-[0.28em] text-[#FAFAF7]/50 mb-3"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full bg-transparent border-b border-[#FAFAF7]/20 pb-3 text-base text-[#FAFAF7] placeholder-[#FAFAF7]/30 focus:border-[#1F8FCF] outline-none resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting || submitted}
                      className="group inline-flex items-center gap-3 bg-[#1F8FCF] text-[#0B3A5C] px-8 py-4 text-sm tracking-wide hover:bg-[#FAFAF7] transition-colors disabled:opacity-70"
                    >
                      {submitted
                        ? "Thank you — we'll be in touch ✓"
                        : submitting
                          ? "Sending…"
                          : "Send enquiry"}
                      {!submitted && (
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="aspect-[16/7] w-full overflow-hidden border border-[#0B3A5C]/10 grayscale-[40%] hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Donga & Co. office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.4900%2C22.9900%2C72.5300%2C23.0200&amp;layer=mapnik&amp;marker=23.0050%2C72.5050"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
