"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/placeholders/imgsec1.webp",
    eyebrow: "Desi Hut Hyderabad",
    title: "Real Desi Flavor,",
    highlight: "Served With Style",
    description:
      "From BBQ and karahi to platters and family meals, enjoy proper taste in a space that feels clean, warm, and worth coming back to.",
  },
  {
    id: 2,
    image: "/placeholders/imgsec2.jpg",
    eyebrow: "Family Dining Experience",
    title: "Comfortable Seating,",
    highlight: "Freshly Prepared Food",
    description:
      "Bring family and friends for a dine-in experience built around strong flavor, quick service, and presentation that actually feels premium.",
  },
  {
    id: 3,
    image: "/placeholders/imgsec3.jpg",
    eyebrow: "BBQ • Karahi • Platters",
    title: "Every Visit Should Feel",
    highlight: "Worth Repeating",
    description:
      "Desi Hut combines everyday favorites with a polished atmosphere so customers remember both the food and the feeling of the place.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center scale-[1.03]"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.38)_0%,rgba(8,8,8,0.48)_18%,rgba(8,8,8,0.72)_52%,rgba(8,8,8,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,146,43,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="section-shell w-full">
          <div className="max-w-[760px]">
            <div className="overflow-hidden rounded-full border border-[#f3d18b]/25 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f3d18b] backdrop-blur-sm sm:inline-flex sm:text-[11px]">
              {slides[current].eyebrow}
            </div>

            <div className="relative mt-5 min-h-[180px] sm:min-h-[220px] md:min-h-[250px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <h1 className="max-w-[720px] text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {slide.title}
                    <span className="block text-[#f3d18b]">
                      {slide.highlight}
                    </span>
                  </h1>
                </div>
              ))}
            </div>

            <div className="relative min-h-[92px] max-w-[640px]">
              {slides.map((slide, index) => (
                <p
                  key={slide.id}
                  className={`absolute inset-0 text-sm leading-7 text-white/82 transition-all duration-700 sm:text-[15px] sm:leading-8 md:text-base ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  {slide.description}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/menu"
                className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#c6922b] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#141414] shadow-[0_12px_30px_rgba(198,146,43,0.26)] transition duration-200 hover:bg-[#d6a84f] hover:-translate-y-[1px]"
              >
                View Menu
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-white/15 bg-black/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-200 hover:border-[#c6922b] hover:text-[#f3d18b]"
              >
                Book Table
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-9 bg-[#c6922b]"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}