"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaUtensils } from "react-icons/fa";

const slides = [
  {
    image: "/placeholders/hero-1.jpg",
    title: "Real desi food in a place that actually feels worth visiting.",
    subtitle: "Desi Hut Hyderabad",
    text: "Built for families, groups, and hungry customers who want proper taste, cleaner presentation, and fast menu access.",
  },
  {
    image: "/placeholders/hero-2.jpg",
    title: "Food, comfort, and atmosphere without the usual cheap restaurant feel.",
    subtitle: "Premium desi dining",
    text: "The homepage should make people trust the brand fast, not force them to figure everything out themselves.",
  },
  {
    image: "/placeholders/hero-3.jpg",
    title: "Signature dishes, special deals, and direct WhatsApp ordering.",
    subtitle: "Fresh. Clean. Consistent.",
    text: "Customers should land here, understand the brand quickly, and move straight to menu or order action.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[100svh] items-center px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441] sm:text-xs">
              <FaUtensils className="text-[11px]" />
              <span>{slides[current].subtitle}</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
              {slides[current].title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              {slides[current].text}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full bg-[#c6922b] px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
              >
                View Menu
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-black/35 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#c6922b]">
                Dine In
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Comfortable setup for families, friends, and casual group dining.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#c6922b]">
                Direct Ordering
              </p>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Menu browsing and WhatsApp ordering should feel fast and obvious.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-[#c6922b]">
                  <FaMapMarkerAlt className="text-[14px]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#c6922b]">
                    Location
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    Autobhan Road, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 sm:flex"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-[13px]" />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 sm:flex"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-[13px]" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-7 bg-[#c6922b]" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}