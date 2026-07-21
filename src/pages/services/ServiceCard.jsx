import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function ServiceCard({ card, Icon, index }) {

  const cardRef = useRef(null);


  useEffect(() => {
    const el = cardRef.current;

    if (!el) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 32,
          scale: 0.96,
          rotateX: 6,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.7,
          delay: index * 0.07,
          ease: "power2.out",
          force3D: true,
          overwrite: "auto",
          clearProps: "transform,opacity,filter",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [index]);



  return (

    <article
      ref={cardRef}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl"
    >


      <span className="absolute right-5 top-2 text-6xl font-bold text-slate-100 transition duration-500 group-hover:text-slate-200">

        0{index + 2}

      </span>




      <div className="relative z-10">


        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-50 text-slate-900 transition duration-500 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-6">

          <Icon size={26}/>

        </div>




        <h3 className="mt-6 text-xl font-semibold text-slate-900">

          {card.title}

        </h3>




        <p className="mt-4 text-sm leading-7 text-slate-600">

          {card.copy}

        </p>



      </div>





      <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition duration-300 group-hover:translate-x-2">

        Create 

        <span className="text-base">

          →

        </span>

      </a>



    </article>

  );

}


export default ServiceCard;