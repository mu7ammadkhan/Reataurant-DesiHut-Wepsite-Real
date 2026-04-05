import Link from "next/link";
import { FaArrowRight, FaStar, FaWhatsapp } from "react-icons/fa";

const items = [
  { name: "Chicken Biryani", price: "Rs. 350", tag: "Popular" },
  { name: "Zinger Burger", price: "Rs. 520", tag: "Fast Food" },
  { name: "Malai Boti", price: "Rs. 890", tag: "BBQ" },
  { name: "Chicken Chowmein", price: "Rs. 640", tag: "Chinese" },
];

export default function FeaturedItems() {
  return (
    <section className="bg-[#0d0d0d] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441]">
              Featured Items
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Push the dishes people are most likely to notice first.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
              The homepage should sell better items upfront instead of making users
              dig through everything manually.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Full Menu
            <FaArrowRight className="text-[12px]" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-[#171717] p-6"
            >
              <div className="flex aspect-square items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-[#111111]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                  <FaStar className="text-[18px]" />
                </div>
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#c6922b]">
                {item.tag}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm text-white/75">{item.price}</p>

              <a
                href={`https://wa.me/923143666277?text=${encodeURIComponent(
                  `Assalamualaikum, I want to order ${item.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#c6922b] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                <FaWhatsapp className="text-[14px]" />
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}