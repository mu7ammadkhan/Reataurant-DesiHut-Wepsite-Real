"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Burgers",
    image: "/placeholders/burger.jpg",
    items: "15+ Items",
  },
  {
    title: "Pizza",
    image: "/placeholders/pizza.jpg",
    items: "10+ Items",
  },
  {
    title: "BBQ",
    image: "/placeholders/bbq.jpg",
    items: "12+ Items",
  },
  {
    title: "Fries",
    image: "/placeholders/fries.jpg",
    items: "8+ Items",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
              Popular Categories
            </span>

            <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Choose Your Favorite
              <span className="block text-sky-500">
                Food Category
              </span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group overflow-hidden rounded-4xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {category.items}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-all duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}