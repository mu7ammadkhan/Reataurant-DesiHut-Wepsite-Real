"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const fallbackItems = [
  {
    _id: "1",
    name: "Chicken Biryani",
    price: 850,
    category: "Biryani",
    image: "/placeholders/res1.jpg",
  },
  {
    _id: "2",
    name: "Malai Boti",
    price: 1290,
    category: "BBQ",
    image: "/placeholders/res2.jpg",
  },
  {
    _id: "3",
    name: "Family Platter",
    price: 3290,
    category: "Sharing Deal",
    image: "/placeholders/res3.jpg",
  },
];

type MenuItem = {
  _id: string;
  name: string;
  price: number;
  category?: string;
  isPopular?: boolean;
  image?: string;
};

export default function FeaturedItems() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        setItems(Array.isArray(data?.data) ? data.data : []);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const displayItems = items.length >= 3 ? items.slice(0, 3) : fallbackItems;

  return (
    <section className="bg-[#111111] px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-kicker">Popular picks</p>
            <h2 className="section-heading mt-4">Signature dishes that deserve the front page.</h2>
            <p className="section-copy mt-5 max-w-xl">
              The old section looked like a generic food template. This version pushes cleaner cards, better spacing, and menu items people actually understand.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex w-fit items-center rounded-full border border-[#c6922b] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#c6922b] transition hover:bg-[#c6922b] hover:text-[#141414]"
          >
            Full Menu
          </Link>
        </div>

        {loading ? (
          <div className="mt-12 rounded-[28px] border border-white/8 bg-white/[0.03] px-6 py-16 text-center text-white/65">
            Loading featured items...
          </div>
        ) : (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {displayItems.map((item, index) => (
              <article
                key={item._id}
                className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-[#171717] transition duration-300 hover:-translate-y-1.5 hover:border-[#c6922b]/35"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <Image
                    src={item.image || fallbackItems[index]?.image || "/placeholders/res1.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                    {item.category || "Chef Pick"}
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-full bg-[#c6922b] px-4 py-2 text-sm font-black text-[#141414] shadow-lg">
                    Rs. {item.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-[-0.03em] text-white">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Strong presentation, practical price display, and a layout that feels more like a real restaurant brand than a copied product card.
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
