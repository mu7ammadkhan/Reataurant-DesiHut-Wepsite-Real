import { FaTags, FaUsers, FaWhatsapp } from "react-icons/fa";

const items = [
  {
    title: "Family Dining",
    text: "A setup that works better for families, groups, and casual dine-in visits.",
    icon: FaUsers,
  },
  {
    title: "Special Deals",
    text: "Promotional deals and featured items should be visible before users get lost.",
    icon: FaTags,
  },
  {
    title: "Fast Ordering",
    text: "Customers should move from homepage to WhatsApp action without confusion.",
    icon: FaWhatsapp,
  },
];

export default function HighlightsStrip() {
  return (
    <section className="bg-[#0d0d0d] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#141414] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                <Icon className="text-[18px]" />
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#c6922b]">
                {item.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-white/80">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}