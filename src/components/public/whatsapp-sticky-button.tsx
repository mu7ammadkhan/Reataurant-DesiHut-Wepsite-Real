"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "923152206451";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center rounded-full px-4 py-3 font-bold text-white  transition hover:-translate-y-1 hover:border-[#25D366]/40 sm:bottom-6 sm:right-6"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-xl">
        <FaWhatsapp />
      </span>
    </a>
  );
}
