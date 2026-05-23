"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  "/placeholders/gallery1.jpg",
  "/placeholders/gallery2.jpg",
  "/placeholders/gallery3.jpg",
  "/placeholders/gallery4.jpg",
  "/placeholders/gallery5.jpg",
  "/placeholders/gallery6.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
              Our Gallery
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Food That Looks
              <span className="block text-sky-500">As Good As It Tastes</span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-2xl border border-sky-100 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-600"
          >
            View Full Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative h-64 overflow-hidden rounded-3xl border border-sky-100 shadow-sm"
            >
              <Image
                src={img}
                alt="Food gallery"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
