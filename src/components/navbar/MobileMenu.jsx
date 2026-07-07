import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
          opacity-0
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
            gap-6
          "
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-lg
                  font-medium
                  text-white
                  transition-colors
                  duration-300
                  hover:text-[#ff6d00]
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default MobileMenu;