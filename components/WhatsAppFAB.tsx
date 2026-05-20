"use client";

import { motion } from "framer-motion";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919052451020"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl shadow-green-500/40 flex items-center justify-center bounce-soft group"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping" />

      {/* WhatsApp SVG */}
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7 md:w-8 md:h-8 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.83 2.708.83.66 0 2.05-.355 2.493-1.07.215-.345.215-.645.143-1.018-.073-.087-.06-.193-.413-.4Z M24.523 5.495c-2.292-2.305-5.34-3.575-8.575-3.575-6.665 0-12.106 5.43-12.106 12.105 0 2.13.555 4.215 1.6 6.05L4 28.085l8.155-2.13c1.762.943 3.747 1.45 5.793 1.45h.005c6.66 0 12.115-5.43 12.115-12.1 0-3.232-1.39-6.281-3.545-8.81Zm-8.575 18.605c-1.825 0-3.617-.475-5.18-1.4l-.368-.225-3.85.998 1.025-3.69-.245-.397c-1.034-1.625-1.58-3.495-1.58-5.45 0-5.65 4.6-10.25 10.25-10.25 2.755 0 5.305 1.025 7.237 2.91 1.933 1.882 3.012 4.395 3.012 7.072.005 5.65-4.642 10.432-10.302 10.432z"/>
      </svg>

      {/* Hover tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-[#0D2233] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity hidden md:block">
        Chat with us
      </span>
    </motion.a>
  );
}
