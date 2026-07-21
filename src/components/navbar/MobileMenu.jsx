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
  const menu = menuRef.current;

  if (!menu) return;

  gsap.killTweensOf(menu);

  if (isOpen) {
    menu.style.pointerEvents = "auto";

    gsap.to(menu, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "expo.out",
    });

    gsap.fromTo(
      linksRef.current.children,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.35,
        ease: "power2.out",
      }
    );

  } else {

    menu.style.pointerEvents = "none";

    gsap.to(menu, {
      opacity: 0,
      y: -20,
      duration: 0.25,
      ease: "power2.in",
    });

  }

}, [isOpen]);


  return (
    <div className="relative md:hidden">

      {/* Bouton menu */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="
          rounded-lg
          text-[#264653]
          transition-transform
          duration-300
          hover:scale-110
          focus:outline-none
          focus:ring-2
          focus:ring-[#ff6d00]
        "
      >
        {isOpen ? (
          <X size={28} aria-hidden="true" />
        ) : (
          <Menu size={28} aria-hidden="true" />
        )}
      </button>


      {/* Menu dropdown */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        className="
          pointer-events-none
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
          opacity-0
          backdrop-blur-xl
          shadow-xl
        "
      >

        <ul
          ref={linksRef}
          className="flex flex-col gap-2"
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
                  duration-500
                  hover:bg-white/10
                  hover:backdrop-blur-sm
                  hover:text-[#ff6d00]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ff6d00]
                "
              >
                <span>{item.label}</span>

                <span
                  className="text-sm text-white/60"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>


        {/* Langue */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={t.nav.toggleLabel}
          className="
            mt-5
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-white/10
            px-3
            py-2
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-white/20
            focus:outline-none
            focus:ring-2
            focus:ring-[#ff6d00]
          "
        >
          <Languages size={16} aria-hidden="true" />

          <span>
            {language === "fr" ? "EN" : "FR"}
          </span>
        </button>

      </div>

    </div>
  );
}

export default MobileMenu;