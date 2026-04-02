"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/placeholders/hero-1.jpg",
    eyebrow: "Desi Hut Hyderabad",
    title: "Food that looks premium and still feels properly desi.",
    description:
      "Built for families, groups, and repeat customers who want better presentation, strong taste, and a place worth visiting again.",
  },
  {
    id: 2,
    image: "/placeholders/hero-2.jpg",
    eyebrow: "Special deals and dining",
    title: "A better way to showcase signature dishes, offers, and atmosphere.",
    description:
      "From menu highlights to buffet promotions and seasonal deals, the website should help people decide fast and order faster.",
  },
  {
    id: 3,
    image: "/placeholders/hero-3.jpg",
    eyebrow: "Fast customer action",
    title: "Menu discovery, direct WhatsApp ordering, and cleaner brand presence.",
    description:
      "The homepage should not just look good. It should push people toward the menu, contact details, and quick ordering action.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-black/20" />

          <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
                  {slide.eyebrow}
                </p>

                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
                  {slide.description}
                </p>

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                  <Link
                    href="/menu"
                    className="rounded-full bg-[#c6922b] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                  >
                    View Menu
                  </Link>

                  <a
                    href="https://wa.me/923143666277"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <FaWhatsapp />
                    Order on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>

      <button
        type="button"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "w-8 bg-[#c6922b]" : "w-2.5 bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}