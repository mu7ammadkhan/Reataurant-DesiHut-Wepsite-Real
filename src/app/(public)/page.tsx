export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 text-center">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c6922b]">
          Desi Hut Hyderabad
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Family dining, special deals, and fast WhatsApp ordering.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          We are building a clean and professional restaurant website with a
          dynamic menu, gallery, deals, and admin panel.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/menu"
            className="rounded-full bg-[#c6922b] px-6 py-3 text-sm font-semibold text-black"
          >
            View Menu
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

