"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative bg-[#FF8C42] text-white overflow-hidden">
      {/* Heartbeat line behind text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <svg viewBox="0 0 1200 200" className="w-full max-w-5xl" preserveAspectRatio="none">
          <path
            d="M 0 100 L 200 100 L 240 100 L 260 60 L 280 140 L 300 30 L 320 170 L 340 100 L 480 100 L 520 100 L 540 50 L 560 150 L 580 30 L 600 170 L 620 100 L 800 100 L 840 100 L 860 60 L 880 140 L 900 30 L 920 170 L 940 100 L 1200 100"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="heartbeat-line"
          />
        </svg>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] via-[#FF8C42]/95 to-[#FF8C42] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-4 text-white"
        >
          Is Your Child Unwell{" "}
          <span className="italic underline decoration-white/40 underline-offset-4">Right Now</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Don't wait. Our pediatric team is available around the clock for emergencies.
        </motion.p>
        <motion.a
          href="tel:09052451020"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-white text-[#FF8C42] hover:bg-[#0D2233] hover:text-white font-bold text-base md:text-lg px-8 py-5 rounded-full shadow-2xl transition-colors"
        >
          <Phone size={20} />
          Call Emergency Line: 090524 51020
        </motion.a>
      </div>
    </section>
  );
}
