const menuItems = [
  { name: "Chicken Biryani", category: "Desi", price: "Rs. 350" },
  { name: "Zinger Burger", category: "Fast Food", price: "Rs. 520" },
  { name: "Malai Boti", category: "BBQ", price: "Rs. 890" },
  { name: "Chicken Chowmein", category: "Chinese", price: "Rs. 640" },
  { name: "Family Deal 1", category: "Deals", price: "Rs. 1999" },
  { name: "Kunafa", category: "Dessert", price: "Rs. 450" },
];

export default function MenuPage() {
  return (
    <section className="bg-[#0b0b0b] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#c6922b] sm:text-xs">
              Our Menu
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Menu browsing should feel clean, fast, and worth exploring.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            This is a temporary static menu preview. Later this page will connect
            with MongoDB and the admin panel.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {["All", "Desi", "BBQ", "Fast Food", "Chinese", "Deals"].map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 backdrop-blur-sm transition duration-300 hover:border-[#c6922b]/40 hover:bg-white/10 hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.34)]"
            >
              <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] text-sm text-white/35">
                Menu Item Image
              </div>

              <p className="text-xs uppercase tracking-[0.3em] text-[#c6922b]">
                {item.category}
              </p>

              <div className="mt-3 flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">
                  {item.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Short item description will appear here when dynamic data is connected.
              </p>

              <a
                href={`https://wa.me/923143666277?text=${encodeURIComponent(
                  `Assalamualaikum, I want to order ${item.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#c6922b] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(198,146,43,0.25)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_35px_rgba(198,146,43,0.35)]"
              >
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}