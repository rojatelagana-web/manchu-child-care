"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  decimals?: number;
  label1: string;
  label2: string;
};

const STATS: Stat[] = [
  { value: 500, suffix: "+", label1: "Families", label2: "Treated" },
  { value: 24, suffix: "/7", label1: "Emergency", label2: "Care" },
  { value: 4.5, decimals: 1, suffix: "★", label1: "Average", label2: "Rating" },
  { value: 10, suffix: "+", label1: "Years of", label2: "Experience" },
];

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(v.toFixed(decimals));
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative gradient-primary text-white overflow-hidden">
      {/* subtle texture */}
      <div className="absolute inset-0 opacity-10 dot-grid" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center px-2 ${
                i < STATS.length - 1 ? "md:border-r md:border-white/15" : ""
              }`}
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-2">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="text-white/80 text-xs md:text-sm font-medium leading-tight">
                {s.label1}
                <br />
                {s.label2}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
