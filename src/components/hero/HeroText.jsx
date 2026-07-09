import HeroButtons from './HeroButtons';
import { useLanguage } from '../../context/LanguageContext';

function HeroText() {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-xl text-center sm:text-left">
      <span className="mb-5 inline-block rounded-full bg-[#c2f2f2] px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[#356267] sm:px-5 sm:text-sm md:text-base">
        {t.hero.badge}
      </span>

      <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
        {t.hero.titleLines[0]}
        <br />
        {t.hero.titleLines[1]}
        <br />
        {t.hero.titleLines[2]}
        <br />
        {t.hero.titleLines[3]}
      </h1>

      <p className="mx-auto mb-8 max-w-lg text-base leading-7 text-slate-600 sm:mx-0 sm:text-lg lg:text-base">
        {t.hero.description}
      </p>

      <HeroButtons />
    </div>
  );
}

export default HeroText;