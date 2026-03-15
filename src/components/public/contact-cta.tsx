import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="bg-[#f5efe5] px-4 py-18 text-[#171717] sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell overflow-hidden rounded-[34px] bg-[#171717] px-6 py-10 text-white shadow-[0_28px_70px_rgba(0,0,0,0.16)] sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c6922b]">Reservation & inquiries</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.04em] sm:text-5xl">
              Give people one clear next step instead of making them hunt for contact details.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/68 sm:text-base">
              This site now pushes the customer toward menu browsing, booking, or WhatsApp contact without looking desperate or cluttered.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#c6922b] px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#141414] lg:w-auto"
            >
              Reserve a Table
            </Link>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/12 px-6 py-4 text-sm font-black uppercase tracking-[0.15em] text-white lg:w-auto"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
