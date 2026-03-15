import Image from "next/image";

const categories = [
  {
    title: "Biryani",
    image: "/placeholders/res2.jpg",
    description: "Layered rice, deep masala, and proper appetite-level comfort food.",
  },
  {
    title: "BBQ",
    image: "/placeholders/res3.jpg",
    description: "Chargrilled options for customers who want smoke, spice, and protein-heavy plates.",
  },
  {
    title: "Fast Food",
    image: "/placeholders/res1.jpg",
    description: "Quick sellers that still match the brand instead of looking like a separate menu.",
  },
];

export default function CategoryPreview() {
  return (
    <section className="bg-[#0f0f0f] px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-kicker">Menu categories</p>
          <h2 className="section-heading mt-4">Clear category blocks that help customers decide faster.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-[30px] border border-white/8 bg-[#171717] transition duration-300 hover:-translate-y-1.5 hover:border-[#c6922b]/35"
            >
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6922b]">Explore</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white">{category.title}</h3>
                  <p className="mt-3 max-w-[30ch] text-sm leading-7 text-white/65">{category.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
