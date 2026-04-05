import Link from "next/link";
import { FaGift, FaWhatsapp } from "react-icons/fa";

export default function DealsBannerSection() {
  return (
    <section className="bg-[#111111] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#171717] p-8 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441]">
            <FaGift className="text-[11px]" />
            <span>Deals & Promotions</span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Highlight current offers before customers lose interest and leave.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
            Deals are supposed to pull action fast. If they are buried or weak,
            they stop doing their job.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-[#c6922b] px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Explore Menu
            </Link>

            <a
              href="https://wa.me/923143666277"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FaWhatsapp className="text-[14px]" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}