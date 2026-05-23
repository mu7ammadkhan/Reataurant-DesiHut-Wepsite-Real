"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock3, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] pt-32 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 shadow-sm">
              <Star className="h-4 w-4 fill-sky-400 text-sky-400" />

              <span className="text-sm font-semibold text-slate-700">
                Hyderabad’s Favorite Food Spot
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Fresh & Delicious
              <span className="block text-sky-500">
                Food Delivered Fast
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Premium burgers, loaded fries, BBQ, fast food, and authentic
              desi flavors — served fresh daily with fast delivery and modern
              dining experience.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-sky-200 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600"
              >
                Explore Menu
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="tel:+923001234567"
                className="inline-flex items-center justify-center rounded-2xl border border-sky-100 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-sky-200 hover:bg-sky-50"
              >
                Order Now
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
                <Clock3 className="h-6 w-6 text-sky-500" />

                <h3 className="mt-3 font-bold text-slate-900">
                  Fast Delivery
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Quick service across Hyderabad.
                </p>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
                <Star className="h-6 w-6 text-sky-500" />

                <h3 className="mt-3 font-bold text-slate-900">
                  Premium Taste
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Fresh ingredients & quality food.
                </p>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm">
                <MapPin className="h-6 w-6 text-sky-500" />

                <h3 className="mt-3 font-bold text-slate-900">
                  Hyderabad
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Serving food lovers daily.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-4xl border border-sky-100 bg-white p-3 shadow-2xl shadow-sky-100">
              <div className="relative h-105 w-full overflow-hidden rounded-3xl sm:h-130">
                <Image
                  src="/placeholders/hero-food.jpg"
                  alt="Desi Hut Food"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-6 top-10 hidden rounded-3xl border border-sky-100 bg-white p-4 shadow-xl lg:block">
              <p className="text-sm font-medium text-slate-500">
                Customer Rating
              </p>

              <div className="mt-2 flex items-center gap-2">
                <Star className="h-5 w-5 fill-sky-400 text-sky-400" />

                <span className="text-xl font-black text-slate-900">
                  4.9
                </span>
              </div>
            </div>

            <div className="absolute -right-6 bottom-10 hidden rounded-3xl border border-sky-100 bg-white p-5 shadow-xl lg:block">
              <p className="text-sm font-medium text-slate-500">
                Daily Orders
              </p>

              <h3 className="mt-1 text-2xl font-black text-sky-500">
                500+
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}