"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, Clock3 } from "lucide-react";

export default function DealsBanner() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-sky-500 to-cyan-500 px-6 py-14 shadow-2xl shadow-sky-200 lg:px-14">
          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
                <BadgePercent className="h-4 w-4 text-white" />

                <span className="text-sm font-bold text-white">
                  Limited Time Offer
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Get Special Deals
                <span className="block">
                  On Combo Meals
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-sky-100">
                Enjoy premium burgers, fries, pizza, and drinks with
                exclusive discounts and family combo offers available daily.
              </p>

              {/* Info */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
                <Clock3 className="h-5 w-5 text-white" />

                <p className="text-sm font-semibold text-white">
                  Offer valid till midnight today
                </p>
              </div>

              {/* Button */}
              <div className="mt-8">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-black text-sky-600 shadow-xl transition-all duration-300 hover:scale-[1.03]"
                >
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative mx-auto h-87.5 w-full max-w-lg">
                <Image
                  src="/placeholders/deal-food.png"
                  alt="Special Deal"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating Price */}
              <div className="absolute top-6 right-0 rounded-4xl bg-white px-6 py-5 shadow-2xl">
                <p className="text-sm font-semibold text-slate-500">
                  Starting From
                </p>

                <h3 className="mt-1 text-3xl font-black text-sky-500">
                  Rs. 999
                </h3>
              </div>

              {/* Floating Discount */}
              <div className="absolute bottom-6 left-0 rounded-4xl bg-white px-6 py-5 shadow-2xl">
                <p className="text-sm font-semibold text-slate-500">
                  Discount
                </p>

                <h3 className="mt-1 text-3xl font-black text-cyan-500">
                  30% OFF
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}