import Link from "next/link";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c6922b] font-bold text-black">
              DH
            </div>
            <div>
              <p className="text-lg font-semibold">Desi Hut</p>
              <p className="text-sm text-gray-400">Hyderabad</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            A modern restaurant website with menu highlights, gallery, special
            deals, and direct WhatsApp ordering.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c6922b]">
            Quick Links
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 transition hover:text-[#c6922b]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c6922b]">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#c6922b]" />
              <span>Autobhan Road, Hyderabad</span>
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#c6922b]" />
              <span>0314 3666277</span>
            </p>

            <p className="flex items-center gap-3">
              <FaWhatsapp className="text-[#c6922b]" />
              <span>WhatsApp Ordering Available</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c6922b]">
            Follow Us
          </h3>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#c6922b] hover:text-[#c6922b]"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-300 transition hover:border-[#c6922b] hover:text-[#c6922b]"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-gray-500">
        © 2026 Desi Hut Hyderabad. All rights reserved.
      </div>
    </footer>
  );
}