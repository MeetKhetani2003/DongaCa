"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Landmark, Scale, FileText, Award, ChevronRight } from "lucide-react";

const specializations = [
  {
    title: "Industry Licenses",
    icon: Leaf,
    items: ["Fertilizer, Seeds & Pesticides", "Industrial & Fire License", "SSI/MSME Registration"],
    color: "from-green-500 to-emerald-700",
    bg: "bg-green-50",
    tag: "Agriculture & Mfg",
  },
  {
    title: "NGO & Trusts",
    icon: Landmark,
    items: ["Trust & Society Registration", "12A & 80G Approval", "FCRA Compliance"],
    color: "from-amber-500 to-orange-700",
    bg: "bg-amber-50",
    tag: "Social Sector",
  },
  {
    title: "Legal & Drafting",
    icon: Scale,
    items: ["Legal Notice Drafting", "Deed Preparation", "Board Resolutions"],
    color: "from-blue-500 to-indigo-700",
    bg: "bg-blue-50",
    tag: "Legal Matters",
  },
  {
    title: "Financial Strategy",
    icon: FileText,
    items: ["Project Reports (CMA Data)", "Government Subsidies", "NBFC Registration"],
    color: "from-emerald-500 to-teal-700",
    bg: "bg-emerald-50",
    tag: "Project Finance",
  },
  {
    title: "IP & Certification",
    icon: Award,
    items: ["Trademark & Copyright", "ISO, Halal & Ayush", "Organic Certification"],
    color: "from-purple-500 to-fuchsia-700",
    bg: "bg-purple-50",
    tag: "Intellectual Property",
  },
  {
    title: "Specialized Compliance",
    icon: Shield,
    items: ["Political Party Registration", "RERA Compliance", "Tax Exemption Planning"],
    color: "from-indigo-500 to-blue-700",
    bg: "bg-indigo-50",
    tag: "Strategic Compliance",
  },
];

export default function SpecializedServices() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF7] overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-0 text-[18vw] font-display font-black text-[#0B3A5C]/[0.02] select-none pointer-events-none leading-none">
        EXPERTISE
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-[2px] w-12 bg-[#1F8FCF]" />
              <span className="text-[12px] uppercase tracking-[0.5em] text-[#1F8FCF] font-bold">
                Extended Expertise
              </span>
            </motion.div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#0B3A5C] leading-[0.9] tracking-tight">
              Specialized Industry <br /> 
              <span className="text-[#1F8FCF] italic">& Legal Solutions</span>
            </h2>
          </div>
          <p className="text-[#1A1A1A]/60 max-w-sm text-lg leading-relaxed font-sans mb-4 border-l border-[#0B3A5C]/10 pl-8">
            Beyond standard accounting, we provide mission-critical registrations 
            and legal frameworks tailored to your industry's specific demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specializations.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col h-[480px] p-10 bg-white border border-[#0B3A5C]/5 rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#0B3A5C]/10 hover:-translate-y-2"
            >
              {/* Animated Background Blob */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br ${spec.color}`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${spec.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold">
                    {spec.tag}
                  </span>
                </div>

                <h3 className="font-display text-3xl text-[#0B3A5C] mb-8 group-hover:text-[#1F8FCF] transition-colors duration-300">
                  {spec.title}
                </h3>

                <div className="space-y-5 flex-grow">
                  {spec.items.map((item) => (
                    <div key={item} className="flex items-center gap-4 text-[15px] text-[#1A1A1A]/70 group-hover:text-[#1A1A1A] transition-colors">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#1F8FCF]/30 group-hover:bg-[#1F8FCF] transition-colors" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-[#0B3A5C]/5 flex items-center justify-between group-hover:border-[#1F8FCF]/20 transition-colors">
                  <span className="text-[11px] uppercase tracking-widest text-[#0B3A5C]/40 group-hover:text-[#0B3A5C] transition-colors font-bold">
                    Learn More
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#0B3A5C]/10 flex items-center justify-center group-hover:bg-[#0B3A5C] group-hover:border-[#0B3A5C] transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-[#0B3A5C] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hover Grain Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative side accent */}
      <div className="absolute left-0 bottom-0 w-1/3 h-px bg-gradient-to-r from-[#1F8FCF]/20 to-transparent" />
    </section>
  );
}
