const sampleItems = [
  { name: "Chicken Biryani", price: "Rs. 350", category: "Desi" },
  { name: "Zinger Burger", price: "Rs. 520", category: "Fast Food" },
  { name: "Malai Boti", price: "Rs. 890", category: "BBQ" },
  { name: "Chicken Chowmein", price: "Rs. 640", category: "Chinese" },
  { name: "Family Deal 1", price: "Rs. 1999", category: "Deals" },
  { name: "Kunafa", price: "Rs. 450", category: "Dessert" },
];

export default function MenuPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
          Menu
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Explore popular dishes and customer favorites.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">
          This is a temporary menu layout. Later we will connect it to the admin
          panel and MongoDB.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#c6922b]">
                {item.category}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{item.name}</h2>
              <p className="mt-2 text-sm text-gray-300">{item.price}</p>

              <a
                href={`https://wa.me/923143666277?text=${encodeURIComponent(
                  `Assalamualaikum, I want to order ${item.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-full bg-[#c6922b] px-5 py-2.5 text-sm font-semibold text-black"
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