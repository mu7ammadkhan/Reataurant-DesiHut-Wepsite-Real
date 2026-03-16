"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Deals", href: "#deals" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0f0f0f]/85 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-shell flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div>
              <Image
                src="/placeholders/logo.png"
                alt="Desi Hut Logo"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-xs">
                Hyderabad
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold tracking-[0.16em] text-white/80 transition hover:text-[#c6922b]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+923001234567"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
            >
              <FaPhoneAlt className="text-[#c6922b]" />
              <span>+92 300 1234567</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#c6922b] bg-[#c6922b] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#141414] transition hover:bg-transparent hover:text-[#c6922b]"
            >
              Book Table
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white xl:hidden"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {open && (
        <button
          type="button"
          aria-label="Close overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-60 bg-black/70 xl:hidden"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-70 h-full w-[84%] max-w-90 border-l border-white/10 bg-[#111111] px-6 py-6 text-white shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.18em]">
              Desi Hut
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/45">
              Casual Premium Dining
            </p>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:bg-white/5 hover:text-[#c6922b]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#c6922b] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#141414]"
        >
          Reserve Now
        </Link>
      </aside>
    </>
  );
}