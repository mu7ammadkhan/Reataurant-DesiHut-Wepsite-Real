import { FaConciergeBell, FaFire, FaHamburger, FaUtensils } from "react-icons/fa";

const categories = [
  {
    title: "Desi",
    text: "Traditional dishes with stronger flavor, proper spice, and familiar comfort.",
    icon: FaUtensils,
  },
  {
    title: "BBQ",
    text: "Grilled items and smoky flavors for customers who want richer dinner options.",
    icon: FaFire,
  },
  {
    title: "Fast Food",
    text: "Burgers, wraps, and quick bites for simple cravings and faster ordering.",
    icon: FaHamburger,
  },
  {
    title: "Chinese",
    text: "Noodles, rice, and saucy dishes that give the menu more variety.",
    icon: FaConciergeBell,
  },
];

export default function CategoryPreview() {
  return (
    <section className="bg-[#111111] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#c6922b]/25 bg-[#c6922b]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9a441]">
            Explore Categories
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Give people a cleaner path to the food they actually want.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
            Dumping the full menu at once is lazy. A proper homepage should guide
            customers toward categories first.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-3xl border border-white/10 bg-[#171717] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                  <Icon className="text-[18px]" />
                </div>

                <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#c6922b]">
                  Category
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {category.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}