"use client";

export default function WhatsAppButton() {
  const phoneNumber = "923XXXXXXXXX";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 rounded-full bg-green-500 px-4 py-3 text-sm text-white shadow-lg sm:bottom-6 sm:right-6 sm:px-5"
    >
      WhatsApp
    </a>
  );
}