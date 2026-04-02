export default function AboutPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
          About Us
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          A place built for family dining, comfort, and properly satisfying food.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300">
          Desi Hut Hyderabad is being presented as a modern dining destination
          where customers can enjoy quality meals, special deals, and a better
          overall food experience in a clean and welcoming environment.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Fresh Presentation</h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Strong visuals, quality food photography, and a premium brand feel
              across the website.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Family Friendly</h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              A layout and tone that fits families, groups, and casual dine-in
              customers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Fast Ordering</h2>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              Website visitors can quickly explore the menu and place orders
              through WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}