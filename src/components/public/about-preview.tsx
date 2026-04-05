import Image from "next/image";
import { FaClock, FaLeaf, FaUsers } from "react-icons/fa";

const points = [
  {
    title: "Fresh ingredients",
    text: "Food should feel clean, hot, and made with care instead of looking mass-produced.",
    icon: FaLeaf,
  },
  {
    title: "Family-ready space",
    text: "The brand should work for families, groups, and casual dine-in customers without looking generic.",
    icon: FaUsers,
  },
  {
    title: "Fast service promise",
    text: "Customers should understand quickly that Desi Hut is serious about both food and flow.",
    icon: FaClock,
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-[#121212] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10">
          <Image
            src="/placeholders/about-preview.jpg"
            alt="Desi Hut dining experience"
            width={900}
            height={1000}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        <div>
          <span className="inline-flex rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441] sm:text-xs">
            About Desi Hut
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A desi dining place that should feel premium without losing its real taste.
          </h2>

          <p className="mt-5 text-sm leading-8 text-white/75 sm:text-base">
            Desi Hut is built for people who want proper food, a better atmosphere,
            and a place that works for family dinners, friend meetups, and repeat visits.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                    <Icon className="text-[17px]" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}