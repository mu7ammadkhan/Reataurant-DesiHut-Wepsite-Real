export default function ContactPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Visit, call, or order directly on WhatsApp.
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Restaurant Details</h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-300">
              <p>
                <span className="font-semibold text-white">Address:</span>{" "}
                Autobhan Road, Hyderabad
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                0314 3666277
              </p>
              <p>
                <span className="font-semibold text-white">WhatsApp:</span>{" "}
                Available for direct ordering
              </p>
              <p>
                <span className="font-semibold text-white">Timings:</span>{" "}
                Timing will be updated from admin panel later
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:03143666277"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/923143666277"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#c6922b] px-6 py-3 text-sm font-semibold text-black"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">Map Placeholder</h2>
            <div className="mt-6 flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-white/15 text-sm text-gray-400">
              Google Map will be added here later
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}