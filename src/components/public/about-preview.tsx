import Image from "next/image";
import { FaClock, FaLeaf, FaUsers } from "react-icons/fa";

const points = [
  {
    icon: <FaLeaf className="text-[#c6922b]" />,
    title: "Fresh ingredients",
    text: "Food should feel clean, hot, and made with care instead of looking mass-produced.",
  },
  {
    icon: <FaUsers className="text-[#c6922b]" />,
    title: "Family-ready space",
    text: "The tone stays warm and practical so the brand works for families, groups, and casual dine-in customers.",
  },
  {
    icon: <FaClock className="text-[#c6922b]" />,
    title: "Fast service promise",
    text: "Customers should understand quickly that Desi Hut is serious about both taste and flow.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-[#121212] px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[#1a1a1a] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.25)] sm:p-4">
            <div className="relative h-[340px] overflow-hidden rounded-[28px] sm:h-[460px]">
              <Image
                src="/placeholders/main.jpg"
                alt="Desi Hut dining and food presentation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 right-5 rounded-[26px] border border-white/10 bg-[#171717] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:right-8 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c6922b]">Why this works</p>
            <p className="mt-2 text-sm leading-6 text-white/72">Less noise. Better hierarchy. Stronger restaurant feel.</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-kicker">About Desi Hut</p>
          <h2 className="section-heading mt-4">Real desi food presented like a serious modern brand.</h2>
          <p className="section-copy mt-5 max-w-xl">
            The website should feel like the restaurant knows what it is doing. Not flashy for no reason. Not dull either. Just strong visuals, solid spacing, and a tone that suits a busy casual restaurant.
          </p>

          <div className="mt-8 grid gap-4">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 transition hover:border-[#c6922b]/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-[#c6922b]/20 bg-[#c6922b]/10 text-lg">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/64">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
