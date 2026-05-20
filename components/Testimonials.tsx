"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Star, BadgeCheck, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  rating: number;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "K. Annepu",
    rating: 5,
    quote:
      "The doctor is very experienced in children's healthcare. This hospital has the best medical standards — and at affordable costs. The staff and nurses are incredibly friendly.",
  },
  {
    name: "Mallarpu Santoshi",
    rating: 5,
    quote:
      "The treatment is excellent and the staff responds very well. They explain everything clearly and take great care of children. Highly recommend this hospital.",
  },
  {
    name: "Local Parent",
    rating: 5,
    quote:
      "Best hospital in Sompeta! The treatment is top-notch, staff is friendly, and the doctor genuinely cares about your child's recovery.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  const t = TESTIMONIALS[index];

  return (
    <section id="reviews" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Soft backdrop */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#F4F9FF] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6b8a] mb-3">
            What Parents Say
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0D2233] leading-[1.15] mb-5">
            Trusted by Hundreds of{" "}
            <span className="italic text-[#1a6b8a]">Families Across Sompeta</span>
          </h2>

          {/* Rating display */}
          <div className="inline-flex items-center gap-3 bg-[#F4F9FF] rounded-full px-5 py-2.5">
            <span className="font-heading text-2xl font-bold text-[#0D2233]">4.5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={16}
                  className={s <= 4 ? "fill-[#FF8C42] text-[#FF8C42]" : "fill-[#FF8C42]/40 text-[#FF8C42]/40"}
                />
              ))}
            </div>
            <span className="text-xs text-[#8CA7B5]">Based on 30+ verified reviews</span>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-xl shadow-[#0D2233]/5 border border-[#1a6b8a]/10 p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="text-[#FF8C42] shrink-0" size={36} />
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-[#FF8C42] text-[#FF8C42]" />
                    ))}
                  </div>
                </div>
                <p className="font-heading italic text-xl md:text-2xl text-[#0D2233] leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center font-heading text-lg font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0D2233]">{t.name}</p>
                      <p className="text-xs text-[#8CA7B5]">Sompeta, Andhra Pradesh</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1a6b8a] bg-[#1a6b8a]/10 px-3 py-1.5 rounded-full">
                    <BadgeCheck size={14} />
                    Verified Review
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#1a6b8a]/30 hover:bg-[#1a6b8a] hover:text-white text-[#1a6b8a] flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-[#FF8C42]" : "w-2 bg-[#1a6b8a]/25 hover:bg-[#1a6b8a]/50"
                  }`}
                />
              ))}
            </div>

            <button
              aria-label="Next testimonial"
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#1a6b8a]/30 hover:bg-[#1a6b8a] hover:text-white text-[#1a6b8a] flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/manchu+child+care+sompeta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e6712a] text-white font-semibold text-base px-7 py-4 rounded-full shadow-lg shadow-[#FF8C42]/30 hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Read All Reviews on Google
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
