const items = [
  ["Fresh Kitchen", "Prepared hot with cleaner presentation"],
  ["Group Friendly", "Platters and deals that make sense"],
  ["Fast Turnaround", "Designed for dine-in and takeaway flow"],
  ["Modern Brand Look", "Not another copied restaurant template"],
];

export default function HighlightsStrip() {
  return (
    <section className="border-y border-white/8 bg-[#151515] px-4 py-6 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map(([title, text]) => (
          <div key={title} className="rounded-[22px] border border-white/6 bg-white/3 px-5 py-4">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#c6922b]">{title}</p>
            <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
