import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set([textRef.current, imageRef.current], { y: 24, opacity: 0 })
        .to(textRef.current, { y: 0, opacity: 1, duration: 0.9 })
        .to(imageRef.current, { y: 0, opacity: 1, duration: 0.9 }, '-=0.65');
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#ffffff_0%,_#f8fdfd_45%,_#eef9f9_100%)]">
      <div className="absolute left-[-120px] top-[-120px] h-[280px] w-[280px] rounded-full bg-[#c2f2f2]/60 blur-3xl sm:h-[360px] sm:w-[360px]" />
      <div className="absolute bottom-[-80px] right-[-60px] h-[260px] w-[260px] rounded-full bg-[#356267]/10 blur-3xl sm:h-[320px] sm:w-[320px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-10 lg:py-32 xl:px-12">
        <div ref={textRef} className="w-full max-w-2xl lg:w-[48%] lg:max-w-none">
          <HeroText />
        </div>
        <div ref={imageRef} className="w-full lg:w-[52%] lg:max-w-none">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;