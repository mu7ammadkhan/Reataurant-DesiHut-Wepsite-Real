"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923001234567";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-[#25D366]/40 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-lg text-white">
        <FaWhatsapp />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
