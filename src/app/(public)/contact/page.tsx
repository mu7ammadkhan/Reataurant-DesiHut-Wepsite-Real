export default function ContactPage() {
  return (
    <section className="bg-[#0b0b0b] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#c6922b] sm:text-xs">
              Contact Us
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Make it stupidly easy for people to call, visit, or order fast.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Contact pages fail when they hide the important stuff. This one should
            stay clean, direct, and useful.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <h2 className="text-2xl font-semibold">Restaurant Details</h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-white/75">
              <p>
                <span className="font-semibold text-white">Address:</span> Autobhan Road, Hyderabad
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> 0314 3666277
              </p>
              <p>
                <span className="font-semibold text-white">WhatsApp:</span> Available for direct orders
              </p>
              <p>
                <span className="font-semibold text-white">Timings:</span> To be updated from admin panel
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:03143666277"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/923143666277"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#c6922b] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(198,146,43,0.25)] transition duration-300 hover:scale-[1.02]"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="flex min-h-[420px] items-center justify-center rounded-[26px] border border-dashed border-white/15 bg-white/[0.03] text-sm text-white/45">
              Google Map will be added here later
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}