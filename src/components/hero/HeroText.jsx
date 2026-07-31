import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroButtons from "./HeroButtons";
import { useLanguage } from "../../context/LanguageContext";
import HeroBadges from "./HeroBadges";

gsap.registerPlugin(ScrollTrigger);

function HeroText() {

  const { t } = useLanguage();
  const textRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: {
          ease: "power4.out",
        },
      });


      tl.from(".hero-badge", {
        opacity: 0,
        y: 25,
        scale: 0.9,
        duration: 0.7,
      })


      .from(".hero-line-inner", {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power4.out",
      }, "-=0.3")


      .from(".hero-highlight", {
        opacity: 0,
        width: 0,
        duration: 0.8,
      }, "-=0.4")


      .from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.5")


      .from(".hero-buttons", {
        opacity: 0,
        y: 25,
        duration: 0.7,
      }, "-=0.45");


    }, textRef);


    return () => ctx.revert();

  }, []);



  return (

    <div ref={textRef} className="w-full max-w-2xl text-center sm:text-left">


      {/* Badge */}
        <span className="hero-badge group relative mb-7 inline-flex cursor-default items-center gap-3 overflow-hidden rounded-full border border-white/70 bg-white/45 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#356267] shadow-[0_10px_40px_rgba(53,98,103,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#356267]/20 hover:bg-white/70 hover:shadow-[0_18px_50px_rgba(53,98,103,0.15)] sm:text-sm">

          {/* Reflection */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />


          {/* Orange signature dot */}
          <span className="relative flex h-3 w-3 items-center justify-center">

            <span className="absolute h-full w-full animate-ping rounded-full bg-[#ff6d00]/40" />

            <span className="relative h-2 w-2 rounded-full bg-[#ff6d00] shadow-[0_0_15px_rgba(255,109,0,0.7)]" />

          </span>


          {/* Name */}
          <span className="relative z-10">
            {t.hero.badge}
          </span>


        </span>



      {/* Heading */}
      <h1 className="mb-8 text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.5rem]">

        {t.hero.titleLines.map((line,index)=>(

          <span key={index} className="hero-line block overflow-hidden">

            <span className="hero-line-inner block">

              {line}

            </span>

          </span>

        ))}


        <span className="hero-highlight relative mt-3 block h-2 w-32 overflow-hidden rounded-full bg-[#ff6d00]" />


      </h1>




      {/* Description */}
      <p className="hero-description mx-auto mb-10 max-w-xl text-base leading-8 text-slate-600 sm:mx-0 sm:text-lg">

        {t.hero.description}

      </p>




      {/* Buttons */}
      <div className="hero-buttons">

        <HeroButtons />

      </div>
      <HeroBadges />


    </div>

  );
}

export default HeroText;