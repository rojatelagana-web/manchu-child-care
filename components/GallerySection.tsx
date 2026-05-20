"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// NOTE: Replace placeholder images in /public/images/gallery/ with real clinic photos
const GALLERY = [
  { src: "/images/gallery/reception.svg", label: "Reception Area", aspect: "tall" },
  { src: "/images/gallery/consultation.svg", label: "Consultation Room", aspect: "wide" },
  { src: "/images/gallery/ward.svg", label: "Pediatric Ward", aspect: "square" },
  { src: "/images/gallery/equipment.svg", label: "Medical Equipment", aspect: "square" },
  { src: "/images/gallery/staff.svg", label: "Friendly Staff", aspect: "wide" },
  { src: "/images/gallery/exterior.svg", label: "Hospital Exterior", aspect: "tall" },
];

const aspectClass = (a: string) => {
  if (a === "tall") return "row-span-2 aspect-[3/4]";
  if (a === "wide") return "aspect-[4/3]";
  return "aspect-square";
};

export default function GallerySection() {
  return (
    <section className="bg-[#F4F9FF] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6b8a] mb-3">
            Inside Our Hospital
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0D2233] leading-[1.15]">
            A Look Inside{" "}
            <span className="italic text-[#1a6b8a]">Manchu Child Care</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {GALLERY.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow ${aspectClass(g.aspect)}`}
            >
              <Image
                src={g.src}
                alt={`${g.label} at Manchu Child Care`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2233]/85 via-[#0D2233]/20 to-transparent" />

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white rounded-full px-4 py-1.5 text-xs font-semibold border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" />
                  {g.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
