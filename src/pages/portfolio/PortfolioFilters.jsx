import { useLanguage } from "../../context/LanguageContext";

function PortfolioFilters({ selectedCategory, setSelectedCategory }) {
  const { t } = useLanguage();
  const categories = t.portfolio.filters;

  console.log(categories);
  const categories = t.portfolio.filters;

  return (
    <div className="mt-12 flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`${selectedCategory === category.id ? "bg-[#264653] text-white" : "bg-white text-slate-700"} rounded-full border border-slate-200 px-6 py-2.5 text-sm font-medium transition duration-300 hover:bg-[#264653] hover:text-white`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default PortfolioFilters;