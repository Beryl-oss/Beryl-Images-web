import { useLanguage } from '../../context/LanguageContext';
import FooterBrand from './FooterBrand';
import FooterBottomBar from './FooterBottomBar';
import FooterColumn from './FooterColumn';
import { getFooterSections } from './footerData';

function Footer() {
  const { t } = useLanguage();
  const footerSections = getFooterSections(t);

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.04),_transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] lg:grid-cols-[1.3fr_1fr_1fr]">
          <FooterBrand text={t.footer.brandText} />
          {footerSections.map((section) => (
            <FooterColumn key={section.title} {...section} />
          ))}
        </div>

        <FooterBottomBar copyright={t.footer.copyright} socialLinks={t.footer.social} />
      </div>
    </footer>
  );
}

export default Footer;
