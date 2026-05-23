"use client";

import { MapPin, Utensils, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
              About Us
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              We Serve Fresh &
              <span className="block text-sky-500">
                Premium Desi Food
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Desi Hut Hyderabad is built for real food lovers. We focus on
              taste, quality, and fast service. Every meal is prepared fresh
              with high-quality ingredients and authentic flavors.
            </p>

            <p className="mt-4 text-slate-500">
              From burgers to BBQ and desi meals, we bring restaurant-quality
              food with a modern fast-food experience.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <Utensils className="h-6 w-6 text-sky-500" />
                <h4 className="mt-3 font-bold text-slate-900">Fresh Food</h4>
                <p className="text-sm text-slate-500">Daily prepared meals</p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <Clock className="h-6 w-6 text-sky-500" />
                <h4 className="mt-3 font-bold text-slate-900">Fast Service</h4>
                <p className="text-sm text-slate-500">Quick delivery system</p>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                <MapPin className="h-6 w-6 text-sky-500" />
                <h4 className="mt-3 font-bold text-slate-900">Local Brand</h4>
                <p className="text-sm text-slate-500">Hyderabad based</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-105 w-full overflow-hidden rounded-[2.5rem] border border-sky-100 bg-sky-50 shadow-xl">
              <img
                src="/placeholders/about-food.jpg"
                alt="About Desi Hut"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl border border-sky-100">
              <p className="text-sm text-slate-500">Since</p>
              <h3 className="text-2xl font-black text-sky-500">2024</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

