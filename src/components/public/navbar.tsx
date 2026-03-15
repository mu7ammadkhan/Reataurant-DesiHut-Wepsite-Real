"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-bold sm:text-xl">
            Desi Hut
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm transition hover:text-yellow-400 lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {isOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 transform bg-white text-black shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-bold">Menu</h2>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-md border"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col px-5 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b py-4 text-base font-medium transition hover:text-red-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}