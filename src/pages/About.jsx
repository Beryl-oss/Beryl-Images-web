import BerylLogo from "../assets/icons/BerylImg-gold.svg";
import { LuPalette, LuCodeXml, LuSparkles, LuCamera, LuArrowRight } from "react-icons/lu";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);


function About() {
  const { t } = useLanguage();

  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {

      // Apparition de la partie visuelle
      gsap.from(visualRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });


      // Apparition du texte
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.15,
      });


      // Apparition des cartes
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });


      // Apparition du logo
      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.4,
      });


      // Respiration du logo
      gsap.to(logoRef.current, {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


    });

    return () => ctx.revert();

  }, []);



  return (
    <section ref={sectionRef} id="about" className="bg-[linear-gradient(180deg,_#f4f9fb_0%,_#eef7f8_100%)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 xl:px-10">
        <div className="w-full flex-1">
          <div
            ref={visualRef}
            className="relative mx-auto h-[420px] overflow-hidden rounded-[32px] border border-white/20 bg-[#264653] shadow-[0_30px_90px_rgba(15,23,42,0.16)] sm:h-[480px] lg:h-[560px] lg:max-w-[560px]"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF6D00]/25 blur-3xl sm:h-64 sm:w-64"></div>
            <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl sm:h-72 sm:w-72"></div>
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl sm:h-64 sm:w-64"></div>

            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6 sm:px-5">
              <p className="text-xs font-semibold text-white tracking-[0.2em] sm:text-sm">
                {t.about.badge}
              </p>
            </div>

            <div className="about-card absolute left-4 top-28 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-28 sm:px-5 sm:py-4">
              <LuPalette size={18} className="text-[#FFB347] sm:size-5" />
              <p className="text-sm font-semibold text-white">
                {t.about.cards[0]}
              </p>
            </div>

            <div className="about-card absolute right-4 top-17 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:right-6 sm:top-24 sm:px-5 sm:py-4">
              <LuCodeXml size={18} className="text-[#FFB347] sm:size-5" />
              <p className="text-sm font-semibold text-white">
                {t.about.cards[1]}
              </p>
            </div>

            <div className="about-card absolute left-4 bottom-13 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:left-6 sm:bottom-20 sm:px-5 sm:py-4">
              <LuCamera size={18} className="text-[#FFB347] sm:size-5" />
              <p className="text-sm font-semibold text-white">
                {t.about.cards[2]}
              </p>
            </div>

            <div className="about-card absolute right-4 bottom-25 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md sm:right-6 sm:bottom-24 sm:px-5 sm:py-4">
              <LuSparkles size={18} className="text-[#FFB347] sm:size-5" />
              <p className="text-sm font-semibold text-white">
                {t.about.cards[3]}
              </p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <img
                loading="lazy"
                ref={logoRef}
                src={BerylLogo}
                alt="Béryl Images"
                className="w-56 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] sm:w-64 lg:w-72"
              />
            </div>
          </div>
        </div>

        <div ref={contentRef} className="w-full flex-1 text-center sm:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ff6d00]">
            {t.about.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#264653] sm:text-4xl lg:text-5xl">
            {t.about.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:mx-0 sm:text-lg sm:leading-9">
            {t.about.description}
          </p>

          <div className="mt-8 space-y-4 sm:mt-10">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6D00] text-white shadow-lg">
                <LuPalette size={20} />
              </div>
              <p className="font-semibold text-[#264653]">{t.about.features[0]}</p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6D00] text-white shadow-lg">
                <LuCodeXml size={20} />
              </div>
              <p className="font-semibold text-[#264653]">{t.about.features[1]}</p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6D00] text-white shadow-lg">
                <LuSparkles size={20} />
              </div>
              <p className="font-semibold text-[#264653]">{t.about.features[2]}</p>
            </div>
          </div>

          <button className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#264653] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d3740] hover:shadow-xl sm:mt-10 sm:px-8">
            {t.about.button}
            <LuArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}


export default About;