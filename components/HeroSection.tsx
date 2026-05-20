"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight, Star, CheckCircle2, Clock, Users, IndianRupee } from "lucide-react";

const headlineWords1 = ["Your", "Child's", "Health", "Is"];
const headlineWords2 = ["Our", "Only", "Priority."];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dot-grid"
    >
      {/* Soft teal blob */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#1a6b8a]/20 to-[#FF8C42]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#FF8C42]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left content - 60% (3/5) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#1a6b8a] text-white text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-sm"
            >
              <span className="text-[#FF8C42]">✦</span>
              Sompeta's #1 Pediatric Care Center
            </motion.div>

            {/* H1 staggered */}
            <h1 className="font-heading text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05] text-[#0D2233] mb-6">
              <span className="block">
                {headlineWords1.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                    className="inline-block mr-3"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="block italic">
                {headlineWords2.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 + i * 0.08 }}
                    className={`inline-block mr-3 ${
                      w === "Only" ? "gradient-text" : "text-[#1a6b8a]"
                    }`}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base md:text-lg text-[#8CA7B5] max-w-2xl mb-8 leading-relaxed"
            >
              Expert pediatric care, warm nurses, and a doctor who truly listens —
              available <span className="text-[#0D2233] font-semibold">24 hours a day, 7 days a week</span>,
              right here in Sompeta.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
            >
              <a
                href="tel:09052451020"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#FF8C42] hover:bg-[#e6712a] text-white font-semibold text-base px-7 py-4 rounded-full shadow-lg shadow-[#FF8C42]/30 hover:shadow-xl hover:scale-[1.02] transition-all pulse-ring w-full sm:w-auto"
              >
                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                Call Now — 090524 51020
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 border-2 border-[#1a6b8a] text-[#1a6b8a] hover:bg-[#1a6b8a] hover:text-white font-semibold text-base px-7 py-4 rounded-full transition-all w-full sm:w-auto"
              >
                View Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="fill-[#FF8C42] text-[#FF8C42]" />
                <span className="text-[#0D2233] font-semibold">4.5 Rating</span>
              </div>
              <span className="hidden sm:block h-4 w-px bg-[#8CA7B5]/30" />
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#1a6b8a]" />
                <span className="text-[#0D2233] font-semibold">500+ Families</span>
              </div>
              <span className="hidden sm:block h-4 w-px bg-[#8CA7B5]/30" />
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#1a6b8a]" />
                <span className="text-[#0D2233] font-semibold">24/7 Care</span>
              </div>
              <span className="hidden sm:block h-4 w-px bg-[#8CA7B5]/30" />
              <div className="flex items-center gap-2">
                <IndianRupee size={16} className="text-[#1a6b8a]" />
                <span className="text-[#0D2233] font-semibold">Affordable</span>
              </div>
            </motion.div>
          </div>

          {/* Right visual - 40% (2/5) */}
          <div className="lg:col-span-2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Backing soft shape */}
              <div className="absolute -inset-4 rounded-[2.5rem] gradient-primary opacity-90 rotate-3" />

              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
                {/* NOTE: Replace /images/hero-child.svg with a real warm pediatric photo (.jpg/.webp) */}
                <Image
                  src="/images/hero-child.svg"
                  alt="Caring pediatric doctor with happy child at Manchu Child Care, Sompeta"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2233]/30 via-transparent to-transparent" />
              </div>

              {/* Floating card 1: Expert Pediatrician (bottom-left) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 float-soft max-w-[200px]"
                style={{ animationDelay: "0s" }}
              >
                <div className="w-10 h-10 rounded-full bg-[#1a6b8a]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} className="text-[#1a6b8a]" />
                </div>
                <div>
                  <p className="text-xs text-[#8CA7B5] leading-none mb-1">Verified</p>
                  <p className="text-sm font-semibold text-[#0D2233] leading-tight">
                    Expert Pediatrician
                  </p>
                </div>
              </motion.div>

              {/* Floating card 2: Rating (top-right) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.25 }}
                className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl p-4 float-soft"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className={s <= 4 ? "fill-[#FF8C42] text-[#FF8C42]" : "fill-[#FF8C42]/50 text-[#FF8C42]/50"}
                    />
                  ))}
                </div>
                <p className="text-lg font-heading font-bold text-[#0D2233]">4.5 / 5</p>
                <p className="text-[10px] text-[#8CA7B5]">30+ Reviews</p>
              </motion.div>

              {/* Floating card 3: Open 24h (middle right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-[#0D2233] text-white rounded-full shadow-xl px-4 py-2 flex items-center gap-2 float-soft"
                style={{ animationDelay: "0.7s" }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-semibold whitespace-nowrap">Open 24 Hours</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
