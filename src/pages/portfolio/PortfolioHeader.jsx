import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function PortfolioHeader() {
  const { t } = useLanguage();
  const headerRef = useRef(null);

    useEffect(() => {

  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      defaults: {
        ease: "power3.out",
      },
    });


    tl.from(".portfolio-badge", {
      y: 30,
      opacity: 0,
      duration: 0.7,
    })

    .from(".portfolio-title", {
      y: 60,
      opacity: 0,
      duration: 0.9,
    }, "-=0.35")

    .from(".portfolio-description", {
      y: 35,
      opacity: 0,
      duration: 0.7,
    }, "-=0.5")

    .from(".portfolio-stat", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
    }, "-=0.4");


  }, headerRef);


  return () => ctx.revert();

  }, []);

  return (
    <div 
      ref={headerRef}
      className="mx-auto max-w-4xl text-center">

      {/* Badge */}

      <div className="portfolio-badge mb-6 inline-flex items-center rounded-full border border-[#356267]/10 bg-[#356267]/5 px-5 py-2 backdrop-blur-sm">

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#356267]">
          {t.portfolio.eyebrow}
        </span>

      </div>

      {/* Title */}

      <h2
        className="
          portfolio-title
          text-4xl
          font-extrabold
          leading-tight
          tracking-tight
          text-slate-900

          md:text-6xl
          lg:text-7xl
        "
      >
        {t.portfolio.title}
      </h2>

      {/* Description */}

      <p
        className="
          portfolio-description
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          text-slate-600
        "
      >
        {t.portfolio.description}
      </p>

      {/* Stats */}

      <div
        className="
          portfolio-stat
          mt-12
          flex
          flex-wrap
          justify-center
          gap-5
        "
      >

        <div
          className="
            rounded-2xl
            border
            border-white/70
            bg-white/70
            px-7
            py-5
            shadow-lg
            backdrop-blur-xl
          "
        >
          <p className="text-3xl font-bold text-[#356267]">
            12+
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Completed Projects
          </p>
        </div>

        <div
          className="
            rounded-2xl
            border
            border-white/70
            bg-white/70
            px-7
            py-5
            shadow-lg
            backdrop-blur-xl
          "
        >
          <p className="text-3xl font-bold text-[#356267]">
            4
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Creative Services
          </p>
        </div>

      </div>

    </div>
  );
}

export default PortfolioHeader;