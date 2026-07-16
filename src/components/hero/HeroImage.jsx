import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroPic from "../../assets/images/Beryl_IMG2.webp";

gsap.registerPlugin(ScrollTrigger);

function HeroImage() {

  const containerRef = useRef(null);
  const floatRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          x: 80,
          scale: 0.94,
          rotate: 2,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );


      gsap.to(floatRef.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      gsap.to(containerRef.current, {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });


    }, containerRef);


    return () => ctx.revert();

  }, []);


  return (

    <div className="relative flex w-full items-center justify-center lg:justify-end">

      <div className="absolute inset-x-4 bottom-4 h-24 rounded-full bg-[#356267]/10 blur-3xl sm:inset-x-6 sm:h-32 lg:bottom-6" />

      <div className="absolute left-4 top-4 h-16 w-16 rounded-full bg-[#ff6d00]/10 blur-2xl sm:h-20 sm:w-20" />


      <div ref={containerRef} className="will-change-transform">

        <div
          ref={floatRef}
          className="group relative z-10 w-full max-w-[280px] rounded-[32px] border border-white/80 bg-gradient-to-br from-[#f8fdfd] via-white to-[#eaf7f7] p-2 shadow-[0_25px_70px_rgba(41,78,86,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(41,78,86,0.22)] sm:max-w-[360px] sm:p-3 md:max-w-[420px] md:p-4 lg:max-w-[500px] xl:max-w-[620px]"
        >
          <div className="absolute inset-3 rounded-[24px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(214,242,242,0.55)_35%,_rgba(53,98,103,0.12)_100%)] sm:inset-4" />

          <div className="relative overflow-hidden rounded-[26px] border border-[#356267]/10">
            <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src={heroPic}
              alt="Portrait de Beryl"
              className="relative z-10 h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>

    </div>

  );
}

export default HeroImage;