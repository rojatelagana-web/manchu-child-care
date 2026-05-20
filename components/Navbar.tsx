"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Menu, X, Stethoscope } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1a6b8a] text-white text-sm overflow-hidden relative z-50">
        <div className="hidden md:flex items-center justify-center gap-3 py-2 px-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF8C42] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF8C42]" />
            </span>
            Open 24 Hours
          </span>
          <span className="text-white/40">·</span>
          <span>Emergency Pediatric Care Available</span>
          <span className="text-white/40">·</span>
          <a href="tel:09052451020" className="font-semibold hover:underline">
            Call 090524 51020
          </a>
        </div>
        <div className="md:hidden py-2">
          <div className="ticker-scroll text-sm">
            ⚡ Open 24 Hours · Emergency Pediatric Care Available · Call 090524 51020 · ⚡ Open 24 Hours · Emergency Pediatric Care Available
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.6)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(13, 34, 51, 0.08)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-40 backdrop-blur-md border-b border-white/40"
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Stethoscope size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-lg md:text-xl font-bold text-[#0D2233]">
                  Manchu Child Care
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#1a6b8a] font-medium hidden sm:block">
                  Pediatric Hospital · Sompeta
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-sm font-medium text-[#0D2233]/80 hover:text-[#1a6b8a] transition-colors group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF8C42] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-2">
              <a
                href="tel:09052451020"
                className="hidden sm:inline-flex items-center gap-2 bg-[#FF8C42] hover:bg-[#e6712a] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all pulse-ring"
              >
                <Phone size={16} />
                <span className="hidden md:inline">Call Now:</span>
                090524 51020
              </a>
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-[#1a6b8a]/10 transition-colors"
              >
                <Menu size={24} className="text-[#0D2233]" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
                <span className="font-heading text-lg font-bold text-[#0D2233]">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-md hover:bg-[#1a6b8a]/10"
                >
                  <X size={24} className="text-[#0D2233]" />
                </button>
              </div>
              <ul className="flex-1 flex flex-col px-6 py-8 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 text-2xl font-heading text-[#0D2233] hover:text-[#1a6b8a] border-b border-gray-100"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="p-6 border-t border-gray-100">
                <a
                  href="tel:09052451020"
                  className="flex items-center justify-center gap-2 w-full bg-[#FF8C42] hover:bg-[#e6712a] text-white font-semibold py-4 rounded-full text-base"
                >
                  <Phone size={18} />
                  Call Now — 090524 51020
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
