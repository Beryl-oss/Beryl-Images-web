import { useEffect, useRef, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import gsap from "gsap";
import { useLanguage } from "../../context/LanguageContext";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();

      tl.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(
        linksRef.current.children,
        {
          opacity: 0,
          y: -15,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );

    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);


  return (
    <div className="relative md:hidden">

      {/* Bouton */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          text-[#264653]
          transition-transform
          duration-300
          hover:scale-110
        "
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <Menu size={28} />
        )}
      </button>


      {/* Menu */}
      <div
        ref={menuRef}
        className="
          absolute
          right-0
          top-14
          w-72
          rounded-2xl
          border
          border-white/20
          bg-[#111]/80
          px-8
          py-8  
          -translate-y-5
          backdrop-blur-xl
          shadow-xl
        "
      >

        <ul
          ref={linksRef}
          className="
            flex
            flex-col
            gap-2
          "
        >
          {t.nav.items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-3
                  py-3
                  text-lg
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-white/10
                  hover:text-[#ff6d00]
                "
              >
                <span>{item.label}</span>
                <span className="text-sm text-white/60">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleLanguage}
          aria-label={t.nav.toggleLabel}
          className="mt-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20"
        >
          <Languages size={16} />
          <span>{language === 'fr' ? 'EN' : 'FR'}</span>
        </button>

      </div>

    </div>
  );
}

export default MobileMenu;