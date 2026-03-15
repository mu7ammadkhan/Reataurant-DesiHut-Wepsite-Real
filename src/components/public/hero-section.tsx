"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/placeholders/imgsec1.webp",
    eyebrow: "Hyderabad's desi dining spot",
    title: "Food that looks premium and still tastes properly desi.",
    description:
      "Built for families, groups, and repeat customers who care about flavor, clean presentation, and a place that feels worth coming back to.",
  },
  {
    id: 2,
    image: "/placeholders/imgsec2.jpg",
    eyebrow: "Fresh kitchen, strong service",
    title: "From BBQ to platters, the menu should sell before the waiter does.",
    description:
      "A restaurant site should make people hungry fast. This layout pushes signature items, trust, and reservation action without looking cheap.",
  },
  {
    id: 3,
    image: "/placeholders/imgsec3.jpg",
    eyebrow: "Casual premium atmosphere",
    title: "Clean brand. Better visuals. Stronger first impression.",
    description:
      "Restaurant owners do not need another loud template. They need a polished homepage that feels modern, warm, and easy to trust.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[current];

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#111111]">
      <div className="absolute inset-0">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.92)_0%,rgba(10,10,10,0.72)_38%,rgba(10,10,10,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,146,43,0.18),transparent_30%)]" />
      </div>

      <div className="relative z-10 section-shell flex min-h-[760px] items-center px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,650px)_1fr]">
          <div className="max-w-[640px] rounded-[32px] border border-white/20 bg-black/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-8 lg:p-10">
            <p className="section-kicker">{activeSlide.eyebrow}</p>
            <h1 className="mt-6 max-w-[12ch] text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-8 text-white/76 sm:text-lg">
              {activeSlide.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center rounded-full bg-[#c6922b] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-[#141414] transition hover:bg-[#d6a84f]"
              >
                View Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:border-[#c6922b] hover:text-[#c6922b]"
              >
                Reserve Now
              </Link>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {[
                ["Fresh Kitchen", "Prepared hot and served clean"],
                ["Family Friendly", "Built for groups and platters"],
                ["Fast Service", "Good flow for dine-in and takeaway"],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="gold-ring w-full max-w-[330px] rounded-[32px] border border-white/10 bg-[#151515]/85 p-6 backdrop-blur-lg">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c6922b]">Today&apos;s focus</p>
              <p className="mt-4 text-3xl font-black leading-tight text-white">Signature visuals that sell the food.</p>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Large imagery, stronger typography, and cleaner calls to action. That is how you stop this from looking like a copied theme.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-[1280px] -translate-x-1/2 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:border-[#c6922b] hover:text-[#c6922b]"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:border-[#c6922b] hover:text-[#c6922b]"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all ${
                current === index ? "h-2 w-10 bg-[#c6922b]" : "h-2 w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
