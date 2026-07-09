import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const { toggleLanguage, language, t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Position initiale
      tl.set(navRef.current, {
        y: -60,
        opacity: 0,
      })

      // Apparition de la navbar
      .to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      })

      // Apparition du logo
      .from(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.85,
          duration: 0.7,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )

      // Apparition des liens un par un
      .from(
        linksRef.current.children,
        {
          opacity: 0,
          y: -12,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-2 left-0 z-50 w-full px-5">
      <nav
        ref={navRef}
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          border-black/10
          bg-white/50
          px-8
          py-2
          shadow-[0_8px_30px_rgba(15,23,42,0.12)]
          backdrop-blur-[24px]
          backdrop-saturate-150
        "
      >
        {/* Logo */}
        <Logo logoRef={logoRef} />

        {/* Liens desktop */}
        <NavLinks linksRef={linksRef} />

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.toggleLabel}
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white/45 text-[#264653] shadow-[0_6px_18px_rgba(15,23,42,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/70"
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.75),rgba(255,255,255,0.2))] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <Languages size={18} className="relative transition-transform duration-300 group-hover:rotate-12" />
          </button>
        </div>

        {/* Menu mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar;