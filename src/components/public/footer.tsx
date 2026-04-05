import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-flex rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441]">
            Desi Hut Hyderabad
          </span>

          <h3 className="mt-5 text-2xl font-semibold sm:text-[28px]">
            A premium desi dining experience that still feels real.
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Desi Hut is built to present the brand properly, highlight menu items,
            promote deals, and push direct customer action without making the site
            feel cluttered or cheap.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
            Navigation
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-white/75 transition duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
            Contact
          </p>

          <div className="mt-5 space-y-4 text-sm text-white/75">
            <p className="flex items-start gap-3 leading-6">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                <FaMapMarkerAlt className="text-[14px]" />
              </span>
              <span>Autobhan Road, Hyderabad, Sindh</span>
            </p>

            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                <FaPhoneAlt className="text-[13px]" />
              </span>
              <span>0314 3666277</span>
            </p>

            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                <FaClock className="text-[13px]" />
              </span>
              <span>Open daily · 4 PM to 2 AM</span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
            Social
          </p>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
            Keep social links here so customers can quickly discover the brand on
            the platforms they already use.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition duration-300 hover:border-[#c6922b] hover:text-[#c6922b]"
            >
              <FaFacebookF className="text-[14px]" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition duration-300 hover:border-[#c6922b] hover:text-[#c6922b]"
            >
              <FaInstagram className="text-[15px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Desi Hut Hyderabad. All rights reserved.</p>
        <p>Built for stronger presentation, faster menu access, and direct action.</p>
      </div>
    </footer>
  );
}