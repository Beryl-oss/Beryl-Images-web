import { useLanguage } from "../../context/LanguageContext";

function PortfolioFilters({
  selectedCategory,
  setSelectedCategory,
}) {
  const { t } = useLanguage();

  const categories = t.portfolio.filters;

  return (
    <div
      className="
        mt-16
        flex
        flex-wrap
        justify-center
        gap-4
      "
    >
      {categories.map((category) => {
        const active = selectedCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              group
              relative
              overflow-hidden
              rounded-full
              border
              px-6
              py-3
              text-sm
              font-semibold
              tracking-wide

              transition-all
              duration-300

              ${
                active
                  ? `
                    border-[#356267]
                    bg-[#356267]
                    text-white
                    shadow-[0_10px_30px_rgba(53,98,103,.25)]
                  `
                  : `
                    border-white/80
                    bg-white/70
                    text-slate-600
                    backdrop-blur-xl

                    hover:-translate-y-1
                    hover:border-[#356267]/30
                    hover:bg-white
                    hover:text-[#356267]
                    hover:shadow-lg
                  `
              }
            `}
          >
            {/* Glow */}

            <span
              className="
                absolute
                inset-0
                opacity-0

                transition-opacity
                duration-300

                group-hover:opacity-100

                bg-[radial-gradient(circle_at_top_left,_rgba(53,98,103,.08),_transparent_70%)]
              "
            />

            <span className="relative">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PortfolioFilters;