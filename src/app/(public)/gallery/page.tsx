const galleryItems = [1, 2, 3, 4, 5, 6];

export default function GalleryPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c6922b]">
          Gallery
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Food, atmosphere, and the full dining vibe.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">
          This is a temporary gallery section. Later we will connect real uploaded
          images from the admin panel.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item}
              className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 text-sm text-gray-400"
            >
              Gallery Image {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}