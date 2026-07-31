import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroPic from "../../assets/images/Beryl_IMG2.webp";

function HeroImage() {
  const containerRef = useRef(null);
  const glassRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 50,
          x: 70,
          scale: 0.92,
          rotate: 3,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
        }
      );


      gsap.to(glassRef.current, {
        y: -14,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.75,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });


    }, containerRef);


    return () => ctx.revert();

  }, []);


  return (
    <div ref={containerRef} className="relative flex items-center justify-center will-change-transform">


      {/* Studio glow */}
      <div ref={glowRef} className="absolute inset-0 -z-10 rounded-full bg-[#356267]/20 blur-[100px] sm:blur-[140px]" />


      {/* Orange signature light */}
      <div className="absolute -right-10 top-16 -z-10 h-36 w-36 rounded-full bg-[#ff6d00]/20 blur-[80px]" />


      {/* Glass frame */}
      <div ref={glassRef} className="group relative w-full max-w-[300px] rounded-[42px] border border-white/70 bg-gradient-to-br from-[#f8fdfd]/90 via-white/80 to-[#eaf7f7]/70 p-3 shadow-[0_40px_120px_rgba(53,98,103,0.22)] backdrop-blur-xl sm:max-w-[380px] sm:p-4 md:max-w-[480px] lg:max-w-[560px] xl:max-w-[640px]">


        {/* Inner frame */}
        <div className="relative overflow-hidden rounded-[32px] border border-[#356267]/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(214,242,242,0.55)_35%,_rgba(53,98,103,0.12)_100%)]">


          <img
            loading="eager"
            fetchPriority="high"
            decoding="async"
            src={heroPic}
            alt="Portrait de Beryl"
            className="relative z-10 h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />


          {/* Glass reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/10 opacity-60" />


        </div>


      </div>


    </div>
  );
}

export default HeroImage;