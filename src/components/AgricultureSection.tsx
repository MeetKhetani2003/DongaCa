"use client";

import { Reveal } from "./Reveal";
import { CheckCircle2, Play, MapPin, Phone } from "lucide-react";
import { useState, useRef } from "react";

const agriServices = [
  {
    title: "Pesticides",
    desc: "End-to-end licensing and compliance for manufacturing and sales.",
  },
  {
    title: "Fertilizers",
    desc: "Documentation and regulatory support for fertilizer distribution.",
  },
  {
    title: "Seeds",
    desc: "Legal framework setup for seed production and trading business.",
  },
];

export default function AgricultureSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="agriculture" className="relative py-24 md:py-32 bg-[#FAFAF7] overflow-hidden">
      {/* Background Pattern - Matching Website Theme */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0B3A5C 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}
          <div className="order-1 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[2px] w-12 bg-[#1F8FCF]" />
                <span className="text-[12px] uppercase tracking-[0.5em] text-[#1F8FCF] font-bold">
                  Agri-Business Licensing
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-7xl leading-[1.05] text-[#0B3A5C] tracking-tight">
                Specialized Agriculture <br />
                <em className="italic text-[#1F8FCF]">& Licensing Solutions.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 text-[#0B3A5C]/70 text-lg leading-relaxed max-w-xl border-l border-[#0B3A5C]/10 pl-8">
                Donga & Co. provides mission-critical support for agricultural entrepreneurs.
                From initial license application to final submission, we ensure your business
                complies with all regulatory standards for pesticides, fertilizers, and seeds.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              {agriServices.map((service, i) => (
                <Reveal key={service.title} delay={0.3 + i * 0.1}>
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0B3A5C]/5 flex items-center justify-center group-hover:bg-[#0B3A5C] group-hover:text-white transition-all duration-300">
                      <CheckCircle2 size={24} className="text-[#1F8FCF] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#0B3A5C] mb-2 group-hover:text-[#1F8FCF] transition-colors">{service.title}</h3>
                      <p className="text-sm text-[#0B3A5C]/60 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-12 items-center border-t border-[#0B3A5C]/5 pt-12">
              <Reveal delay={0.6}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B3A5C] flex items-center justify-center text-white shadow-lg">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B3A5C]/40 font-bold">Call Now</p>
                    <p className="font-display text-xl text-[#0B3A5C]">+91 95123 43949</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.7}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1F8FCF] flex items-center justify-center text-white shadow-lg">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B3A5C]/40 font-bold">Locations</p>
                    <p className="font-display text-xl text-[#0B3A5C]">Ahmedabad • Rajkot • Surat</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Video Side */}
          <div className="order-2 lg:order-2 relative group">
            <Reveal delay={0.4}>
              <div className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(11,58,92,0.3)] border-8 border-white bg-[#0B3A5C]">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/agriculturevideo.mp4"
                  loop
                  muted={!isPlaying}
                  playsInline
                />

                {/* Overlay Play Button */}
                {!isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 w-full h-full bg-[#0B3A5C]/20 flex items-center justify-center group-hover:bg-[#0B3A5C]/40 transition-all duration-300"
                  >
                    <div className="w-24 h-24 rounded-full bg-white/95 flex items-center justify-center text-[#0B3A5C] transform group-hover:scale-110 transition-transform shadow-2xl">
                      <Play size={36} fill="currentColor" />
                    </div>
                  </button>
                )}

                {isPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20"
                  >
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-5 bg-white rounded-full" />
                      <div className="w-1.5 h-5 bg-white rounded-full" />
                    </div>
                  </button>
                )}
              </div>
            </Reveal>

            {/* Decorative Elements - Blue Blobs */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-[#1F8FCF]/10 to-transparent rounded-full blur-[100px] opacity-60" />

            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 -left-10 text-[10vw] font-display font-black text-[#0B3A5C]/[0.03] select-none pointer-events-none leading-none -z-10">
              AGRI
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
