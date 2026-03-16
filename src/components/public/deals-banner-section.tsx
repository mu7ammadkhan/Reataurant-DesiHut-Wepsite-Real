import Image from "next/image";
import Link from "next/link";

const deals = [
  {
    title: "Family Feast Box",
    subtitle: "Serves 4-5 people",
    price: "Rs. 4,990",
    image: "/placeholders/image copy 2.png",
  },
  {
    title: "Lunch Saver Deal",
    subtitle: "Fast, filling, and practical",
    price: "Rs. 1,250",
    image: "/placeholders/image copy 3.png",
  },
  {
    title: "Weekend BBQ Combo",
    subtitle: "Built for sharing",
    price: "Rs. 3,490",
    image: "/placeholders/image copy 4.png",
  },
];

export default function DealsSection() {
  const [featured, ...secondaryDeals] = deals;

  return (
    <section id="deals" className="bg-[#f5efe5] px-4 py-18 text-[#161616] sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Family deals</p>
          <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.04em] text-[#171717] sm:text-5xl">
            Bigger offers, cleaner design, and no cheap promo-template feel.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#4d473d]">
            Your old deal cards were trying too hard. This layout is more controlled, more premium, and far easier for a customer to scan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <article className="relative overflow-hidden rounded-[34px] bg-[#171717] p-6 text-white shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:min-h-115">
            <div className="grid h-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c6922b]">Featured deal</p>
                <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.04em]">{featured.title}</h3>
                <p className="mt-4 text-lg font-semibold text-white/86">{featured.subtitle}</p>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                  Balanced for families who want proper value without the site looking like a discount poster. Big image, strong price, and one clear action.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <div className="rounded-full bg-[#c6922b] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#141414]">
                    {featured.price}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#c6922b] hover:text-[#c6922b]"
                  >
                    Order / Reserve
                  </Link>
                </div>
              </div>

              <div className="relative h-70 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 lg:h-full lg:min-h-90">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {secondaryDeals.map((deal) => (
              <article
                key={deal.title}
                className="grid gap-4 overflow-hidden rounded-[30px] border border-[#d8cebf] bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.07)] sm:grid-cols-[170px_1fr] sm:items-center sm:p-5"
              >
                <div className="relative h-45 overflow-hidden rounded-[22px] bg-[#171717] sm:h-full sm:min-h-42.5">
                  <Image src={deal.image} alt={deal.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 180px" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9f1d22]">Limited offer</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-[#171717]">{deal.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#514b42]">{deal.subtitle}</p>
                  <div className="mt-4 inline-flex rounded-full bg-[#171717] px-4 py-2 text-sm font-black text-white">{deal.price}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
