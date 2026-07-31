import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroScrollIndicator() {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(indicatorRef.current, {
        opacity: 0,
        y: 24,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });

      gsap.to(".lens-ring", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".lens-core", {
        scale: 0.82,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".explore-text", {
        opacity: .45,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, indicatorRef);

    return () => ctx.revert();

  }, []);

  return (

    <a href="#about" ref={indicatorRef} className="group flex flex-col items-center">

      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/40 backdrop-blur-xl shadow-[0_15px_50px_rgba(53,98,103,.15)] transition-all duration-500 group-hover:scale-110">

        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-[#f8ffff] to-[#d7f0f0]" />

        <div className="absolute inset-[7px] rounded-full border border-[#356267]/10" />

        <div className="lens-ring absolute inset-[13px] rounded-full border-2 border-[#356267]/18" />

        <div className="lens-core absolute flex h-6 w-6 items-center justify-center rounded-full bg-[#356267] shadow-[0_0_20px_rgba(53,98,103,.35)]">

          <div className="h-2.5 w-2.5 rounded-full bg-white" />

        </div>

        <div className="absolute h-8 w-8 rounded-full bg-[#ff6d00]/20 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

      </div>

      <span className="explore-text mt-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-[#356267]/65 transition-all duration-300 group-hover:text-[#356267]">
        Explore
      </span>

    </a>

  );
}

export default HeroScrollIndicator;