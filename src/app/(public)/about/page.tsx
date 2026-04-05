export default function AboutPage() {
  const points = [
    {
      title: "Family-ready atmosphere",
      text: "The brand presentation should feel welcoming for families, groups, and repeat dine-in customers.",
    },
    {
      title: "Stronger visual identity",
      text: "A restaurant with weak presentation loses trust before the customer even looks at the food.",
    },
    {
      title: "Better customer action",
      text: "The website should move visitors toward menu discovery, contact, and WhatsApp ordering without friction.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#c6922b] sm:text-xs">
              About Us
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Desi Hut should feel trustworthy before the customer even arrives.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            This website is being built to present Desi Hut in a cleaner and more
            professional way. The goal is simple: better food presentation, better
            structure, and a smoother path from interest to action.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.34)]"
              >
                <h2 className="text-xl font-semibold">{point.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/75">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="flex min-h-[420px] items-center justify-center rounded-[26px] border border-dashed border-white/15 bg-white/[0.03] text-center text-white/45">
              Restaurant interior / about image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}