import { useLanguage } from '../../context/LanguageContext';

function HeroButtons() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
      <a
        href="#projects"
        className="rounded-full bg-[#356267] px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#41737c] hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
      >
        {t.hero.ctaPrimary}
      </a>

      <a
        href="#contact"
        className="group flex items-center justify-center gap-2 text-sm font-semibold text-[#356267] transition-all duration-300 hover:text-[#25484b] sm:justify-start sm:text-base"
      >
        {t.hero.ctaSecondary}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

export default HeroButtons;