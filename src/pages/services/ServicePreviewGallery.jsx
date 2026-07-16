function ServicePreviewGallery({ previews, setSelectedPreview }) {
  return (
    <div className="mt-14 hidden gap-5 lg:flex">
      {previews.map((preview) => (
        <button
          key={preview.title}
          onClick={() => setSelectedPreview(preview)}
          className="group/preview w-36 rounded-3xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur-xl transition duration-500 hover:-translate-y-3"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              loading="lazy"
              src={preview.image}
              alt={preview.title}
              className="h-full w-full object-cover transition duration-500 group-hover/preview:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover/preview:opacity-100">
              <span className="text-xs font-semibold text-white">View ↗</span>
            </div>
          </div>

          <p className="mt-3 text-xs text-white/70">{preview.title}</p>
        </button>
      ))}
    </div>
  );
}

export default ServicePreviewGallery;
