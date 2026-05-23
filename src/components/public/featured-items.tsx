"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, ArrowRight } from "lucide-react";

const featuredItems = [
  {
    title: "Zinger Burger",
    image: "/placeholders/zinger.jpg",
    price: "Rs. 799",
    rating: "4.9",
    description:
      "Crispy chicken fillet with premium sauces and fresh lettuce.",
  },
  {
    title: "Loaded Fries",
    image: "/placeholders/fries.jpg",
    price: "Rs. 599",
    rating: "4.8",
    description:
      "Cheesy loaded fries with spicy toppings and creamy sauce.",
  },
  {
    title: "BBQ Platter",
    image: "/placeholders/bbq.jpg",
    price: "Rs. 1499",
    rating: "5.0",
    description:
      "Juicy BBQ with fresh naan, chutney, and signature spices.",
  },
];

export default function FeaturedItemsSection() {
  return (
    <section className="bg-[#f7fbff] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
              Featured Food
            </span>

            <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Most Popular
              <span className="block text-sky-500">
                Delicious Items
              </span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
          >
            Full Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-4xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Rating */}
                <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow-lg">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                  <span className="text-sm font-bold text-slate-900">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-sky-100 px-4 py-2 text-sm font-black text-sky-600">
                    {item.price}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-sky-200 transition-all duration-300 hover:bg-sky-600">
                  <ShoppingBag className="h-5 w-5" />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}