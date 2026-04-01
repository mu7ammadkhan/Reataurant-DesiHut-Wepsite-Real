"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-white transition hover:opacity-90"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c6922b] text-sm font-bold text-black">
            DH
          </div>
          <div>
            <p className="text-base font-semibold leading-none">Desi Hut</p>
            <p className="mt-1 text-xs text-gray-400">Hyderabad</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition hover:text-[#c6922b]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/923143666277"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#c6922b] px-5 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            <FaWhatsapp />
            Order Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#111111] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-medium text-gray-200 transition hover:text-[#c6922b]"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/923143666277"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#c6922b] px-5 py-3 text-sm font-semibold text-black"
            >
              <FaWhatsapp />
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}