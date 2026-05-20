"use client";

import { motion } from "framer-motion";
import { UserCheck, Clock, MessageSquare, IndianRupee } from "lucide-react";

const FEATURES = [
  {
    icon: UserCheck,
    title: "Dedicated Pediatric Expert",
    desc: "One specialist. One focus. Your child's wellbeing — handled with years of clinical experience in children's healthcare.",
  },
  {
    icon: Clock,
    title: "Always Open, Always Ready",
    desc: "Medical emergencies don't follow a schedule. Neither do we. Available 24 hours, 365 days a year.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    desc: "We explain every diagnosis in simple terms. No medical jargon, no confusion — just clarity and confidence for parents.",
  },
  {
    icon: IndianRupee,
    title: "Affordable for Every Family",
    desc: "Premium pediatric care shouldn't be a privilege. We deliver the highest medical standards at costs every Sompeta family can afford.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-[#0D2233] text-white py-20 md:py-28 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#1a6b8a]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#FF8C42]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#FF8C42] mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[3rem] font-bold leading-[1.1] mb-6">
              Why Sompeta's Parents{" "}
              <span className="italic text-[#FF8C42]">Trust Us</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md">
              We don't just treat illness. We build lasting trust with every family.
            </p>

            {/* Decorative stat block */}
            <div className="mt-10 inline-flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 px-6 py-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs uppercase tracking-widest text-white/60 font-medium">
                  Currently Open
                </span>
              </div>
              <p className="font-heading text-xl font-semibold">24/7 Emergency Available</p>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative glass-card rounded-2xl p-6 group hover:bg-white/10 transition-colors"
                >
                  {/* Top teal border */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#1a6b8a] to-transparent" />

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a6b8a] to-[#0d4f6b] flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <f.icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-3 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
