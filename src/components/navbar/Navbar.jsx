import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

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
          border-black/5
          bg-white/50
          px-8
          py-2
          backdrop-blur-[20px]
          shadow-sm
        "
      >
        {/* Logo */}
        <Logo logoRef={logoRef} />

        {/* Liens desktop */}
        <NavLinks linksRef={linksRef} />

        {/* Menu mobile */}
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Navbar;