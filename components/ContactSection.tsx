"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Clock, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  childAge?: string;
  concern?: string;
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (_data: FormValues) => {
    // Simulated submission; wire to your backend / form service in production
    await new Promise((r) => setTimeout(r, 800));
    reset();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Soft backdrop */}
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#1a6b8a]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#1a6b8a] mb-3">
              Contact Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0D2233] leading-[1.15] mb-6">
              Visit Us or{" "}
              <span className="italic text-[#1a6b8a]">Get in Touch</span>
            </h2>
            <p className="text-[#8CA7B5] text-base md:text-lg mb-8 leading-relaxed">
              Our doors are always open. Drop in, call us, or send a message — we'll respond with the urgency your child deserves.
            </p>

            {/* Info cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4F9FF] border border-[#1a6b8a]/10">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#FF8C42]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8CA7B5] font-medium mb-1">Address</p>
                  <p className="text-sm md:text-base text-[#0D2233] font-medium leading-relaxed">
                    Opp. Jayaramayya Hospital, Indiramma Peta,
                    <br />
                    Sompeta, Andhra Pradesh 532284
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4F9FF] border border-[#1a6b8a]/10">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[#FF8C42]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8CA7B5] font-medium mb-1">Phone</p>
                  <a
                    href="tel:09052451020"
                    className="text-base md:text-lg text-[#0D2233] font-semibold hover:text-[#1a6b8a] transition-colors"
                  >
                    090524 51020
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-green-50 border border-green-200">
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-green-700 font-medium mb-1">Hours</p>
                  <p className="text-sm md:text-base text-[#0D2233] font-semibold flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
                    </span>
                    Open 24 Hours · 7 Days a Week
                  </p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#1a6b8a]/10 mb-6 aspect-[16/9]">
              <iframe
                title="Manchu Child Care location map"
                src="https://www.google.com/maps?q=Sompeta,+Andhra+Pradesh+532284&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919052451020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-[#0D2233]/5 border border-[#1a6b8a]/10 p-8 md:p-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0D2233] mb-2">
                Request a Callback
              </h3>
              <p className="text-sm text-[#8CA7B5] mb-7">
                Share your details and our team will call you back within minutes.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D2233] mb-2">
                    Parent's Name <span className="text-[#FF8C42]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    {...register("name", { required: "Please enter your name" })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1a6b8a]/20 bg-[#F4F9FF] focus:bg-white focus:border-[#1a6b8a] outline-none transition-colors text-sm"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D2233] mb-2">
                    Phone Number <span className="text-[#FF8C42]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 90524 51020"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[+\d\s-]{7,15}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl border border-[#1a6b8a]/20 bg-[#F4F9FF] focus:bg-white focus:border-[#1a6b8a] outline-none transition-colors text-sm"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.phone.message}</p>
                  )}
                </div>

                {/* Child's age */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D2233] mb-2">
                    Child's Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 3 years"
                    {...register("childAge")}
                    className="w-full px-4 py-3 rounded-xl border border-[#1a6b8a]/20 bg-[#F4F9FF] focus:bg-white focus:border-[#1a6b8a] outline-none transition-colors text-sm"
                  />
                </div>

                {/* Concern */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0D2233] mb-2">
                    Concern / Reason for Visit
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your child's symptoms or your question..."
                    {...register("concern")}
                    className="w-full px-4 py-3 rounded-xl border border-[#1a6b8a]/20 bg-[#F4F9FF] focus:bg-white focus:border-[#1a6b8a] outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-[#FF8C42] hover:bg-[#e6712a] disabled:opacity-60 text-white font-semibold text-base px-7 py-4 rounded-full shadow-lg shadow-[#FF8C42]/30 hover:shadow-xl transition-all"
                >
                  {isSubmitting ? "Sending..." : "Request a Callback"}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Success toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 font-semibold text-sm"
                  role="status"
                >
                  <CheckCircle2 size={18} />
                  We'll call you back shortly!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
