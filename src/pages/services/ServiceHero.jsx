import { LuArrowRight, LuPalette } from "react-icons/lu";
import ServicePreviewGallery from "./ServicePreviewGallery";

function ServiceHero({ heroCard, content, previews, setSelectedPreview, setShowGallery }) {
  return (
    <article className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900 p-8 text-white shadow-[0_40px_80px_-40px_rgba(38,70,83,0.7)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_50px_100px_-40px_rgba(38,70,83,0.9)] sm:p-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#264653] via-slate-900 to-black" />
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF6D00]/20 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white ring-1 ring-white/10 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
            <LuPalette size={32} />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              {heroCard.title}
            </p>
            <h3 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              {content.mainHeading}
            </h3>
          </div>
        </div>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
          {heroCard.copy}
        </p>

        <button
          onClick={() => setShowGallery(true)}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 md:hidden"
        >
          {content.button}
          <LuArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-2" />
        </button>

        <ServicePreviewGallery previews={previews} setSelectedPreview={setSelectedPreview} />
      </div>
    </article>
  );
}

export default ServiceHero;
