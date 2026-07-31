import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";


gsap.registerPlugin(ScrollTrigger);



function Navbar() {

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const glassRef = useRef(null);

  const { toggleLanguage, t } = useLanguage();



  useLayoutEffect(() => {

    const ctx = gsap.context(() => {



      // ============================
      // Intro animation
      // ============================

      const intro = gsap.timeline();



      intro

        .set(navRef.current, {
          y: -60,
          opacity: 0,
        })


        .to(navRef.current, {

          y: 0,

          opacity: 1,

          duration: 1.2,

          ease: "power3.out",

        })


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





      // ============================
      // Capsule scroll animation
      // ============================


      ScrollTrigger.create({

        start: "100px top",


        onEnter: () => {



          // Capsule container

          gsap.to(navRef.current, {

            scaleX: 0.96,

            y: 8,

            duration: 0.7,

            ease: "power4.out",

          });



          // Glass appearance

          gsap.to(glassRef.current, {

            opacity: 1,

            duration: 0.45,

            ease: "power3.out",

          });



          // Logo subtle resize

          gsap.to(logoRef.current, {

            scale: 0.92,

            duration: 0.5,

            ease: "power3.out",

          });



        },



        onLeaveBack: () => {



          gsap.to(navRef.current, {

            scaleX: 1,

            y: 0,

            duration: 0.7,

            ease: "power4.out",

          });



          gsap.to(glassRef.current, {

            opacity: 0,

            duration: 0.35,

            ease: "power3.out",

          });



          gsap.to(logoRef.current, {

            scale: 1,

            duration: 0.5,

            ease: "power3.out",

          });



        },



      });



    }, navRef);



    return () => ctx.revert();



  }, []);




  return (

    <header

      className="
        fixed
        left-0
        top-0
        z-50
        flex
        w-full
        justify-center
      "

    >


      <nav

        ref={navRef}

        style={{

          transformOrigin: "center top",
          willChange: "transform",

        }}


        className="
          relative
          flex
          w-full
          items-center
          justify-between
          px-6
          py-2
          transition-none
        "

      >



        {/* Glass capsule layer */}

        <div

          ref={glassRef}

          className="
            absolute
            inset-0
            -z-10
            rounded-full
            border
            border-white/40
            bg-white/70
            opacity-0
            shadow-[0_15px_40px_rgba(15,23,42,0.12)]
            backdrop-blur-xl
          "

        />




        {/* Logo */}

        <div ref={logoRef}>

          <Logo />

        </div>





        {/* Desktop navigation */}

        <NavLinks linksRef={linksRef} />







        {/* Language button */}

        <div className="hidden items-center gap-2 md:flex">


          <button

            onClick={toggleLanguage}

            aria-label={t.nav.toggleLabel}


            className="
              group
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/70
              bg-white/70
              text-[#264653]
              shadow-[0_6px_18px_rgba(15,23,42,0.1)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white
            "

          >


            <span

              className="
                absolute
                inset-0
                bg-[linear-gradient(120deg,rgba(255,255,255,0.75),rgba(255,255,255,0.2))]
                opacity-70
                transition-opacity
                duration-300
                group-hover:opacity-100
              "

            />



            <Languages

              size={18}

              className="
                relative
                transition-transform
                duration-300
                group-hover:rotate-12
              "

            />


          </button>


        </div>







        {/* Mobile */}

        <MobileMenu />



      </nav>



    </header>

  );

}



export default Navbar;