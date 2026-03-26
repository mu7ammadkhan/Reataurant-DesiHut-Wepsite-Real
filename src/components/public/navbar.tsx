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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[#c6922b]/10 bg-[rgba(16,13,10,0.86)] shadow-[0_12px_40px_rgba(0,0,0,0.30)] backdrop-blur-xl"
            : "bg-gradient-to-b from-[rgba(12,10,8,0.72)] via-[rgba(12,10,8,0.38)] to-transparent"
        }`}
      >
        <div className="section-shell px-4 py-3 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-[22px] border px-3 py-2 transition-all duration-300 sm:px-4 ${
              scrolled
                ? "border-white/10 bg-[rgba(245,235,223,0.96)] shadow-[0_10px_30px_rgba(0,0,0,0.14)]"
                : "border-white/10 bg-[rgba(245,235,223,0.88)] backdrop-blur-md shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
            }`}
          >
            <Link href="/" className="shrink-0">
              <div className="inline-flex items-center rounded-[16px] bg-[#171411] px-4 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.24)] ring-1 ring-[#c6922b]/15">
                <Image
                  src="/placeholders/logo.png"
                  alt="Desi Hut Logo"
                  width={130}
                  height={48}
                  priority
                  className="h-10 w-auto object-contain sm:h-11"
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-7 xl:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-semibold tracking-[0.12em] text-[#1f1a17] transition duration-200 hover:text-[#8b6422] after:absolute after:left-0 after:top-full after:mt-1 after:h-[2px] after:w-0 after:bg-[#c6922b] after:transition-all after:duration-200 hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <a
                href="tel:+923152206451"
                className="inline-flex items-center gap-3 rounded-full border border-[#d8c2a0] bg-white/60 px-4 py-2.5 text-[#1f1a17] transition duration-200 hover:border-[#c6922b] hover:bg-white/80"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#c6922b] text-[#141414]">
                  <FaPhoneAlt className="text-sm" />
                </span>

                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold">+92 315 2206451</span>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[#6f6253]">
                    Call Now
                  </span>
                </span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#171411] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-200 hover:bg-[#2a221b]"
              >
                Book Table
              </Link>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c4a4] bg-[#171411] text-lg text-white transition duration-200 hover:border-[#c6922b] hover:text-[#f1d69f] xl:hidden"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition duration-300 xl:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-[84%] max-w-[360px] border-l border-white/10 bg-[#111111] px-6 py-6 text-white shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="inline-flex items-center rounded-[16px] bg-[#1a1612] px-3 py-2 ring-1 ring-[#c6922b]/10">
            <Image
              src="/placeholders/logo.png"
              alt="Desi Hut Logo"
              width={112}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg transition duration-200 hover:border-[#c6922b] hover:text-[#c6922b]"
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
              className="rounded-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition duration-200 hover:bg-white/5 hover:text-[#c6922b]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+923152206451"
          className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-white/80"
        >
          <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#c6922b] text-[#141414]">
            <FaPhoneAlt className="text-sm" />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">
              +92 315 2206451
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/55">
              Call Now
            </span>
          </span>
        </a>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#c6922b] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#141414] transition duration-200 hover:bg-[#d6a84f]"
        >
          Reserve Now
        </Link>
      </aside>
    </>
  );
}