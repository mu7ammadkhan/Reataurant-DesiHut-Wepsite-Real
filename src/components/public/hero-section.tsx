"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

const slides = [
  {
    image: "/placeholders/hero-1.jpg",
    badge: "Desi Hut Hyderabad",
    title: "Premium desi dining with real flavor.",
  },
  {
    image: "/placeholders/hero-2.jpg",
    badge: "Family-friendly atmosphere",
    title: "A better place for food, family, and comfort.",
  },
  {
    image: "/placeholders/hero-3.jpg",
    badge: "Menu and deals that get noticed",
    title: "Clean presentation. Strong taste. Easy ordering.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[720px] max-h-[100svh] min-h-[620px] overflow-hidden bg-black sm:h-[760px] lg:h-[820px]">
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
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pt-[88px] sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#c6922b]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441] sm:text-xs">
              {slides[current].badge}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            {slides[current].title}
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-[#c6922b] px-7 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              View Menu
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/82">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c6922b]/12 text-[#c6922b]">
              <FaMapMarkerAlt className="text-[14px]" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#c6922b]">
                Location
              </p>
              <p className="mt-1 text-sm">Autobhan Road, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 sm:flex"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-[13px]" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
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