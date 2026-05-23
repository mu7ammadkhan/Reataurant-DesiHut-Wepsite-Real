"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    review:
      "Best food in Hyderabad. Burger quality is insane and delivery is super fast.",
  },
  {
    name: "Sara Ali",
    review:
      "Loved the BBQ platter. Fresh, tasty and value for money. Highly recommended.",
  },
  {
    name: "Usman Tariq",
    review:
      "Clean taste, good packaging and consistent quality every time.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7fbff] py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers
            <span className="block text-sky-500">Say About Us</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-4xl border border-sky-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100"
            >
              {/* Stars */}
              <div className="flex gap-1 text-sky-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sky-400" />
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 text-slate-600 leading-7">
                "{t.review}"
              </p>

              {/* Name */}
              <h4 className="mt-6 font-bold text-slate-900">
                {t.name}
              </h4>

              {/* subtle animation dot (lightweight) */}
              <div className="mt-4 h-1 w-10 rounded-full bg-sky-200 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
