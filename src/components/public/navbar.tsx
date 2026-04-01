"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Deals", href: "/deals" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#0d0d0d]/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-19.5 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#c6922b]/40 bg-[#151515]">
              <Image
                src="/logo.png"
                alt="Desi Hut Hyderabad logo"
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>

            <div className="leading-tight">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#c6922b]">
                Fine Desi Dining
              </p>
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Desi Hut Hyderabad
              </h2>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-white/85 transition hover:text-[#c6922b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+920000000000"
              className="inline-flex items-center gap-2 rounded-full border border-[#c6922b]/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c6922b] hover:text-black"
            >
              <FaPhoneAlt className="text-sm" />
              Call Now
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#c6922b] hover:text-[#c6922b] lg:hidden"
          >
            {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-[84%] max-w-85 flex-col bg-[#101010] px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 border-b border-white/10 pb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c6922b]">
            Desi Hut Hyderabad
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Premium Desi Taste
          </h3>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-white/85 transition hover:bg-white/5 hover:text-[#c6922b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+920000000000"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#c6922b] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
        >
          <FaPhoneAlt />
          Call for Reservation
        </a>
      </aside>
    </>
  );
}