"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image
              src="/placeholders/logo-white1.png"
              alt="Desi Hut"
              width={120}
              height={48}
              priority
              className="h-auto w-28 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/85 transition-colors duration-300 hover:text-[#c6922b]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

         <button
  type="button"
  onClick={() => setIsOpen((prev) => !prev)}
  className="relative z-[999] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white lg:hidden"
  aria-label="Toggle Menu"
>
  <div className="relative flex h-5 w-5 items-center justify-center">
    <span
      className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
        isOpen ? "rotate-45" : "-translate-y-[6px]"
      }`}
    />

    <span
      className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    />

    <span
      className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
        isOpen ? "-rotate-45" : "translate-y-[6px]"
      }`}
    />
  </div>
</button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed left-0 right-0 top-[76px] z-50 border-t border-white/10 bg-[#0b0b0b] transition-all duration-300 lg:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors duration-300 hover:bg-white/5 hover:text-[#c6922b]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}