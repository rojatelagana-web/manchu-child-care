"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, MessageCircle, IndianRupee, Building2, ArrowRight, MapPin } from "lucide-react";

const FEATURES = [
  { icon: Stethoscope, text: "Experienced Pediatric Specialist" },
  { icon: MessageCircle, text: "Clear, Detailed Explanations for Parents" },
  { icon: IndianRupee, text: "Premium Care at Affordable Rates" },
  { icon: Building2, text: "Modern Facilities & Medical Standards" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative backdrop */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl gradient-primary opacity-90" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-[#FF8C42]/15" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              {/* NOTE: Replace /images/about-clinic.svg with a real clinic interior photo (.jpg/.webp) */}
              <Image
                src="/images/about-clinic.svg"
                alt="Modern, welcoming reception area at Manchu Child Care, Sompeta"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Floating circular doctor image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-2 sm:-right-8 w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl"
            >
              {/* NOTE: Replace /images/doctor.svg with a real pediatrician photo (.jpg/.webp) */}
              <Image
                src="/images/doctor.svg"
                alt="Experienced pediatric doctor at Manchu Child Care"
                fill
                sizes="180px"
                className="object-cover"
              />
            </motion.div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-6 left-6 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2"
            >
              <MapPin size={14} className="text-[#FF8C42]" />
              <span className="text-xs font-semibold text-[#0D2233]">Sompeta, Andhra Pradesh</span>
            </motion.div>

            {/* Open Now badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-6 right-6 bg-green-500 text-white rounded-full shadow-lg px-3 py-1.5 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-xs font-semibold">Open Now</span>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6b8a] mb-4">
              About Manchu Child Care
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0D2233] leading-[1.15] mb-6">
              A Hospital Built Around Your Child's{" "}
              <span className="italic text-[#1a6b8a]">Comfort and Recovery</span>
            </h2>
            <div className="space-y-4 text-[#8CA7B5] text-base md:text-lg leading-relaxed mb-8">
              <p>
                At Manchu Child Care, we believe that healing begins with trust. Located in the heart of Sompeta, our dedicated pediatric center provides round-the-clock medical care for children — combining clinical excellence with the warmth every worried parent needs.
              </p>
              <p>
                Our experienced pediatric doctor takes the time to explain every diagnosis clearly, ensuring you never leave with unanswered questions. Backed by a friendly and compassionate staff, we deliver world-class child healthcare at costs every family can afford.
              </p>
            </div>

            {/* Feature points */}
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {FEATURES.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#1a6b8a]/10 flex items-center justify-center">
                    <f.icon size={18} className="text-[#1a6b8a]" />
                  </div>
                  <span className="pt-1.5 text-sm font-medium text-[#0D2233]">{f.text}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-[#FF8C42] hover:text-[#e6712a] font-semibold text-base"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
