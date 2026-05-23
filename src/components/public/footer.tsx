"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black text-white">
              Desi Hut Hyderabad
            </h2>

            <p className="mt-4 text-slate-300 leading-7">
              Fresh food, fast delivery, and premium taste. Serving Hyderabad
              with quality meals and modern food experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-300">
              <Link href="/" className="hover:text-sky-400 transition">
                Home
              </Link>
              <Link href="/menu" className="hover:text-sky-400 transition">
                Menu
              </Link>
              <Link href="/gallery" className="hover:text-sky-400 transition">
                Gallery
              </Link>
              <Link href="/about" className="hover:text-sky-400 transition">
                About
              </Link>
              <Link href="/contact" className="hover:text-sky-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact</h3>

            <div className="mt-4 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <span>info@desihut.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Hyderabad, Sindh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Desi Hut Hyderabad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
