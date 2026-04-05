import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppStickyButton() {
  return (
    <a
      href="https://wa.me/923143666277"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-[28px]" />
      <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
        Order on WhatsApp
      </span>
    </a>
  );
}