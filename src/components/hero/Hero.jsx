import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroScrollIndicator from "./HeroScrollIndicator";

function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.97,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
          }
        )
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            x: 70,
            y: 30,
            rotate: 2,
            scale: 0.92,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 1.25,
          },
          "-=0.75"
        );

      gsap.to(imageRef.current, {
        y: -12,
        duration: 4,
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(bgRef.current, {
        xPercent: 5,
        yPercent: 5,
        duration: 18,
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-center-glow", {
        scale: 1.08,
        opacity: 0.85,
        duration: 8,
        repeat: -1,
        repeatRefresh: true,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="#home" ref={sectionRef} className="relative isolate overflow-hidden bg-[#fdfefe]">

      {/* Animated Background */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-10">

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: "linear-gradient(rgba(53,98,103,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(53,98,103,.14) 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

        {/* Cyan Glow */}
        <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-cyan-200/60 blur-[140px] md:h-[46rem] md:w-[46rem]" />

        {/* Green Glow */}
        <div className="absolute -bottom-52 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#356267]/10 blur-[160px] md:h-[48rem] md:w-[48rem]" />

        {/* Center Glow */}
        <div className="hero-center-glow absolute left-1/2 top-[32%] h-72 w-72 -translate-x-1/2 rounded-full bg-white/70 blur-[120px]" />

        {/* Orange Accent */}
        <div className="absolute right-[10%] top-[38%] h-56 w-56 rounded-full bg-[#ff6d00]/10 blur-[110px] md:h-80 md:w-80" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-multiply" style={{ backgroundImage: "radial-gradient(circle at 20% 20%,rgba(0,0,0,.15) 1px,transparent 1px)", backgroundSize: "16px 16px" }} />

      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center gap-16 px-6 py-28 sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-12 xl:gap-20">

        {/* Text */}
        <div ref={textRef} className="order-1 w-full max-w-2xl will-change-transform lg:w-[45%]">
          <HeroText />
        </div>

        {/* Image */}
        <div ref={imageRef} className="order-2 flex w-full justify-center will-change-transform lg:w-[55%] lg:justify-end">
          <HeroImage />
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 lg:block">
          <HeroScrollIndicator />
      </div>

    </section>
  );
}

export default Hero;
