"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";

const locations = [
  {
    city: "Ahmedabad",
    address: "C-704, Signature-II, Opp. Relief Hotel, Sarkhej-Sanand Road, Sarkhej, Ahmedabad, Gujarat.",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=72.48%2C22.98%2C72.52%2C23.02&layer=mapnik&marker=23.0012%2C72.5023",
  },
  {
    city: "Rajkot",
    address: "Silk Route, Near Aastha Gate, 150 Feet Ring Road, Rajkot, Gujarat.",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=70.76%2C22.28%2C70.80%2C22.32&layer=mapnik&marker=22.3022%2C70.7811",
  },
  {
    city: "Surat",
    address: "319 Shyam Dham Sankul, Near Shyamdham Chowk, Nana Varachha, Surat, Gujarat.",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=72.86%2C21.18%2C72.90%2C21.22&layer=mapnik&marker=21.2033%2C72.8844",
  },
];

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
        image="/contact-hero.png"
      />

      <section className="relative py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-8 bg-[#1F8FCF]" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-[#1F8FCF] font-bold">
                  Coordinates
                </span>
              </div>
            </Reveal>

            <div className="space-y-12">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "dongaasc@gmail.com",
                  href: "mailto:dongaasc@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 95123 43949",
                  href: "tel:+919512343949",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon – Sat · 10:00 AM – 7:30 PM",
                },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={0.1 + i * 0.1}>
                    <div className="flex items-start gap-6 group">
                      <div className="h-12 w-12 rounded-xl bg-[#0B3A5C]/5 flex items-center justify-center text-[#1F8FCF] group-hover:bg-[#1F8FCF] group-hover:text-white transition-all duration-500">
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/40 font-bold mb-1">
                          {c.label}
                        </div>
                        {c.href ? (
                          <a href={c.href} className="font-display text-2xl text-[#0B3A5C] hover:text-[#1F8FCF] transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <div className="font-display text-2xl text-[#0B3A5C]">{c.value}</div>
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
              <div className="bg-[#0B3A5C] text-white p-10 md:p-14 rounded-[32px] relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <h2 className="font-display text-4xl mb-4">
                    Send us an <em className="italic text-[#1F8FCF] not-italic font-display italic">enquiry.</em>
                  </h2>
                  <p className="text-white/60 text-sm mb-12 max-w-sm">
                    Have a specific legal or accounting matter? Reach out and we&apos;ll get back to you shortly.
                  </p>

                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setSubmitting(true);
                      
                      const formData = new FormData(e.currentTarget);
                      const data = {
                        name: formData.get("name"),
                        email: formData.get("email"),
                        phone: formData.get("phone"),
                        company: formData.get("company"),
                        subject: formData.get("subject"),
                        message: formData.get("message"),
                      };

                      try {
                        const res = await fetch("/api/contact", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(data),
                        });
                        
                        if (res.ok) {
                          setSubmitted(true);
                        } else {
                          alert("Failed to send inquiry. Please try again.");
                        }
                      } catch (err) {
                        console.error("Submission error", err);
                        alert("An error occurred. Please try again.");
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {[
                      { name: "name", label: "Your name", type: "text", req: true },
                      { name: "email", label: "Email", type: "email", req: true },
                      { name: "phone", label: "Phone", type: "tel" },
                      { name: "company", label: "Company", type: "text" },
                      { name: "subject", label: "Subject", type: "text" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">
                          {f.label} {f.req && "*"}
                        </label>
                        <input
                          name={f.name}
                          type={f.type}
                          required={f.req}
                          className="w-full bg-transparent border-b border-white/20 pb-3 text-base outline-none focus:border-[#1F8FCF] transition-colors"
                        />
                      </div>
                    ))}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] uppercase tracking-widest text-white/40 font-bold mb-3">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        className="w-full bg-transparent border-b border-white/20 pb-3 text-base outline-none focus:border-[#1F8FCF] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting || submitted}
                      className="md:col-span-2 group inline-flex items-center justify-center gap-3 bg-[#1F8FCF] text-[#0B3A5C] py-5 rounded-xl font-bold tracking-widest uppercase text-xs hover:bg-white transition-all disabled:opacity-50"
                    >
                      {submitted ? "Message Sent ✓" : submitting ? "Sending..." : "Submit Inquiry"}
                    </button>
                  </form>
                </div>
                {/* Decorative blob */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#1F8FCF]/10 rounded-full blur-[80px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-[#FAFAF7] border-t border-[#0B3A5C]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#1F8FCF] font-bold">
                Our Presence
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-[#0B3A5C]">
                Three Cities. <em className="italic text-[#1F8FCF] not-italic font-display italic">One Standard.</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {locations.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.1}>
                <div className="group bg-white p-2 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-700">
                  <div className="aspect-[16/10] overflow-hidden rounded-[28px] grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                      title={`Map of ${loc.city}`}
                      src={loc.mapUrl}
                      className="w-full h-full border-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-2xl text-[#0B3A5C]">{loc.city}</h3>
                      <MapPin size={18} className="text-[#1F8FCF]" />
                    </div>
                    <p className="text-sm text-[#1A1A1A]/60 leading-relaxed mb-8 min-h-[60px]">
                      {loc.address}
                    </p>
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-[#1F8FCF] hover:text-[#0B3A5C] transition-colors"
                    >
                      Get Directions <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
