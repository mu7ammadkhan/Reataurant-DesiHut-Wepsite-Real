import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const items = [
  {
    title: "Location",
    text: "Autobhan Road, Hyderabad",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Call / WhatsApp",
    text: "0314 3666277",
    icon: FaPhoneAlt,
  },
  {
    title: "Opening Hours",
    text: "Daily · 4 PM to 2 AM",
    icon: FaClock,
  },
];

export default function QuickInfoStrip() {
  return (
    <section className="border-y border-white/10 bg-[#111111] px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#151515] px-4 py-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c6922b]/12 text-[#c6922b]">
                <Icon className="text-[15px]" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#c6922b]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-white/80">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}