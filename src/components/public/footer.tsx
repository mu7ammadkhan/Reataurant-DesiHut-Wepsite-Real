import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0d0d0d] px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-2xl font-black uppercase tracking-[0.18em] text-white">Desi Hut</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#c6922b]">Hyderabad</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
            Casual premium restaurant website concept with cleaner hierarchy, stronger contrast, and a more believable food brand look.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="section-shell mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Desi Hut Hyderabad. All rights reserved.</p>
        <p>Fresh food. Better presentation. Stronger first impression.</p>
      </div>
    </footer>
  );
}
