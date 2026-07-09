import { useLanguage } from '../../context/LanguageContext';

function NavLinks({ linksRef }) {
  const { t } = useLanguage();

  return (
    <ul ref={linksRef} className="hidden items-center gap-8 md:flex">
      {t.nav.items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="relative text-sm font-medium tracking-[0.02em] text-[#133847] transition-all duration-300 hover:text-[#ff6d00]"
          >
            <span className="absolute bottom-[-4px] left-0 h-[1.5px] w-0 rounded-full bg-[#ff6d00] transition-all duration-300 group-hover:w-full" />
            <span className="transition-all duration-300 hover:tracking-[0.04em]">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;