import { useLanguage } from '../../context/LanguageContext';

function PortfolioHeader() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
        {t.portfolio.eyebrow}
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-6xl">
        {t.portfolio.title}
      </h2>

      <p className="mt-6 text-lg text-gray-600">{t.portfolio.description}</p>
    </div>
  );
}

export default PortfolioHeader;