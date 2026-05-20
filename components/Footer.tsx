"use client";

import { Stethoscope, Facebook, Instagram, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D2233] text-white relative overflow-hidden">
      {/* Top teal accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a6b8a] to-transparent" />
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#1a6b8a]/60 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a6b8a] to-[#0d4f6b] flex items-center justify-center shadow-md">
                <Stethoscope size={20} className="text-white" />
              </div>
              <span className="font-heading text-xl font-bold">Manchu Child Care</span>
            </div>
            <p className="font-heading italic text-[#FF8C42] text-lg mb-4 leading-snug">
              "Caring for Little Lives, Around the Clock."
            </p>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              Sompeta's only dedicated 24-hour pediatric hospital — combining expert care with the warmth every family deserves.
            </p>
            <div className="flex gap-3">
              <a
                aria-label="Facebook"
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#1a6b8a] hover:border-[#1a6b8a] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#1a6b8a] hover:border-[#1a6b8a] transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-base font-semibold uppercase tracking-widest mb-5 text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-[#FF8C42] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold uppercase tracking-widest mb-5 text-white/90">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF8C42] shrink-0 mt-0.5" />
                <span className="text-white/70 leading-relaxed">
                  Opp. Jayaramayya Hospital, Indiramma Peta, Sompeta, Andhra Pradesh 532284
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#FF8C42] shrink-0 mt-0.5" />
                <a
                  href="tel:09052451020"
                  className="text-white/70 hover:text-white font-medium transition-colors"
                >
                  090524 51020
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#FF8C42] shrink-0 mt-0.5" />
                <div className="text-white/70 leading-relaxed">
                  Open 24 Hours
                  <br />
                  <span className="text-[#FF8C42] font-medium">Emergency: Always Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2025 Manchu Child Care · Sompeta, Andhra Pradesh · All Rights Reserved</p>
          <p className="font-heading italic text-[#1a6b8a]">
            Built with care for the families of Sompeta.
          </p>
        </div>
      </div>
    </footer>
  );
}
