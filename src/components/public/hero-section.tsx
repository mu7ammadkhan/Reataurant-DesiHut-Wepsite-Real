import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-600 sm:text-base">
            Desi Hut Hyderabad
          </p>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Fresh Desi Taste
            <span className="block text-red-600">Made for Real Food Lovers</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg lg:mx-0">
            Enjoy delicious biryani, BBQ, burgers, and family deals with the rich
            taste of Desi Hut. Fresh ingredients, strong flavor, and a proper food
            experience for friends and family.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/menu"
              className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:text-base"
            >
              View Menu
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-black px-6 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white sm:text-base"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center sm:gap-4 lg:max-w-md">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">10+</h3>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">Menu Items</p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Fast</h3>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">Service</p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Fresh</h3>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">Taste</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="flex h-70 w-full max-w-md items-center justify-center rounded-3xl bg-linear-to-br from-red-600 via-orange-500 to-yellow-400 p-6 shadow-xl sm:h-85 md:h-105">
            <div className="rounded-2xl bg-white/90 px-6 py-8 text-center shadow-lg backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                Special Deal
              </p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                Family Combo
              </h2>
              <p className="mt-3 text-sm text-gray-700 sm:text-base">
                2 Biryani + 1 BBQ + Drinks
              </p>
              <p className="mt-4 text-xl font-bold text-black sm:text-2xl">
                Rs. 1499
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}