const galleryItems = [1, 2, 3, 4];

export default function GalleryPreview() {
  return (
    <section className="bg-[#0b0b0b] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
              Gallery Preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              The restaurant should look good before the customer even visits.
            </h2>
          </div>

          <a
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
          >
            View Gallery
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.34)]"
            >
              <div className="flex aspect-[4/5] items-center justify-center rounded-[22px] border border-dashed border-white/15 bg-white/[0.03] text-sm text-white/45">
                Image {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}