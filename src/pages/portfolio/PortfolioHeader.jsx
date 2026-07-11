import { useLanguage } from "../../context/LanguageContext";

function PortfolioHeader() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl text-center">

      {/* Badge */}

      <div className="mb-6 inline-flex items-center rounded-full border border-[#356267]/10 bg-[#356267]/5 px-5 py-2 backdrop-blur-sm">

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#356267]">
          {t.portfolio.eyebrow}
        </span>

      </div>

      {/* Title */}

      <h2
        className="
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-slate-900

          md:text-6xl
          lg:text-7xl
        "
      >
        {t.portfolio.title}
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        {t.portfolio.description}
      </p>

      {/* Stats */}

      <div
        className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-5
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-white/70
            bg-white/70
            px-7
            py-5
            shadow-lg
            backdrop-blur-xl
          "
        >
          <p className="text-3xl font-bold text-[#356267]">
            12+
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Completed Projects
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/70
            bg-white/70
            px-7
            py-5
            shadow-lg
            backdrop-blur-xl
          "
        >
          <p className="text-3xl font-bold text-[#356267]">
            4
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Creative Services
          </p>
        </div>

      </div>

    </div>
  );
}

export default PortfolioHeader;