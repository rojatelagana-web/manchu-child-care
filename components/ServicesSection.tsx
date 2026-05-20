"use client";

import { motion } from "framer-motion";
import { Baby, Thermometer, Syringe, Wind, Brain, Siren, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Baby,
    title: "Newborn & Neonatal Care",
    desc: "Specialized care for newborns from birth, including checkups, vaccinations, and early health monitoring.",
  },
  {
    icon: Thermometer,
    title: "Fever & Infection Treatment",
    desc: "Fast diagnosis and treatment for fever, viral infections, and seasonal illnesses in children.",
  },
  {
    icon: Syringe,
    title: "Vaccination & Immunization",
    desc: "Complete immunization schedules following national health guidelines to keep your child protected.",
  },
  {
    icon: Wind,
    title: "Respiratory & Breathing Issues",
    desc: "Expert management of asthma, bronchitis, pneumonia, and breathing difficulties in children.",
  },
  {
    icon: Brain,
    title: "Growth & Developmental Checkups",
    desc: "Regular monitoring of physical and cognitive milestones to ensure healthy child development.",
  },
  {
    icon: Siren,
    title: "24-Hour Emergency Pediatric Care",
    desc: "Round-the-clock emergency services for sudden illness, accidents, and urgent medical needs.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F4F9FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6b8a] mb-3"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0D2233] leading-[1.15] mb-4"
          >
            Comprehensive Care for Every{" "}
            <span className="italic text-[#1a6b8a]">Stage of Childhood</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8CA7B5] text-base md:text-lg"
          >
            From newborn screenings to adolescent care — we cover every milestone.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-[#1a6b8a]/10 overflow-hidden"
            >
              {/* Left teal border on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#FF8C42] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a6b8a]/10 to-[#FF8C42]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon size={26} className="text-[#1a6b8a]" />
              </div>

              <h3 className="font-heading text-xl font-bold text-[#0D2233] mb-3 leading-tight">
                {s.title}
              </h3>
              <p className="text-sm text-[#8CA7B5] leading-relaxed">{s.desc}</p>

              {/* Subtle decoration */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#1a6b8a]/5 group-hover:bg-[#FF8C42]/10 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e6712a] text-white font-semibold text-base px-7 py-4 rounded-full shadow-lg shadow-[#FF8C42]/30 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Book a Consultation Today
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
