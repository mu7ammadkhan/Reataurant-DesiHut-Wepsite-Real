const galleryItems = [1, 2, 3, 4, 5, 6, 7, 8];

export default function GalleryPage() {
  return (
    <section className="bg-[#111111] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#c6922b] sm:text-xs">
              Gallery
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Customers should see quality before they ever step inside.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            This gallery will later show real food photography, restaurant ambiance,
            and poster-based promotional visuals from the admin panel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-[0_12px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.34)]"
            >
              <div className="flex aspect-[4/5] items-center justify-center rounded-[22px] border border-dashed border-white/15 bg-white/[0.03] text-sm text-white/45">
                Gallery Image {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}