export default function DealsSection() {
  return (
    <section className="bg-yellow-100 px-4 py-12 text-center sm:px-6 lg:px-8">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Today’s Deals</h2>

      <p className="mx-auto mb-6 max-w-2xl text-sm sm:text-base md:text-lg">
        Family Deal: 2 Biryani + 1 BBQ + Drinks
      </p>

      <button className="rounded-lg bg-black px-5 py-3 text-sm text-white sm:px-6 sm:text-base">
        Order Now
      </button>
    </section>
  );
}