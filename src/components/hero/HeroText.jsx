import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroButtons from "./HeroButtons";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

function HeroText() {

  const { t } = useLanguage();
  const textRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power3.out",
        },
      });


      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })


      .from(
        ".hero-line-inner",
        {
          yPercent: 120,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
        },
        "-=0.25"
      )


      .from(
        ".hero-description",
        {
          opacity: 0,
          y: 25,
          duration: 0.7,
        },
        "-=0.45"
      )


      .from(
        ".hero-buttons",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.35"
      );


    }, textRef);


    return () => ctx.revert();

  }, []);



  return (

    <div
      ref={textRef}
      className="w-full max-w-xl text-center sm:text-left"
    >


      <span className="hero-badge mb-5 inline-block rounded-full bg-[#c2f2f2] px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-[#356267] sm:px-5 sm:text-sm md:text-base">
        {t.hero.badge}
      </span>



      <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">

        {t.hero.titleLines.map((line,index)=>(

          <span
            key={index}
            className="hero-line block overflow-hidden"
          >

            <span className="hero-line-inner block">
              {line}
            </span>

          </span>

        ))}

      </h1>




      <p className="hero-description mx-auto mb-8 max-w-lg text-base leading-7 text-slate-600 sm:mx-0 sm:text-lg lg:text-base">
        {t.hero.description}
      </p>




      <div className="hero-buttons">
        <HeroButtons />
      </div>



    </div>

  );
}


export default HeroText;