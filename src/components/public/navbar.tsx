"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-sky-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <Image
                src="/logo/logo.png"
                alt="Desi Hut Hyderabad"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="hidden sm:block">
              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                Desi Hut
              </h2>

              <p className="text-xs font-medium text-sky-500">
                Hyderabad Sindh
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "bg-sky-500 text-white shadow-md shadow-sky-200"
                      : "text-slate-700 hover:bg-sky-50 hover:text-sky-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-sky-200 hover:bg-sky-50"
            >
              <Phone className="h-4 w-4 text-sky-500" />
              Call Now
            </a>

            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-all hover:scale-[1.02] hover:bg-sky-600"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Food
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-100 bg-white text-slate-800 shadow-sm transition-all hover:bg-sky-50 lg:hidden"
          >
            {mobileMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-white transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 py-8">
          <div className="space-y-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold transition-all ${
                    active
                      ? "bg-sky-500 text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="space-y-4 rounded-3xl border border-sky-100 bg-sky-50 p-5">
            <div>
              <p className="text-sm font-medium text-sky-500">
                Hungry?
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900">
                Order Fresh Food Now
              </h3>
            </div>

            <a
              href="tel:+923001234567"
              className="flex w-full items-center justify-center rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-white transition-all hover:bg-sky-600"
            >
              Call & Order
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}