import { useEffect, useRef } from "react";
import { LuArrowRight, LuPalette } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicePreviewGallery from "./ServicePreviewGallery";

gsap.registerPlugin(ScrollTrigger);


function ServiceHero({ heroCard, content, previews, setSelectedPreview, setShowGallery }) {

  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const previewsRef = useRef(null);


  useEffect(() => {

    const ctx = gsap.context(() => {


      // Texte + icône

      gsap.from(contentRef.current.children, {
  y: 35,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
  clearProps: "all",

  scrollTrigger: {
    trigger: heroRef.current,
    start: "top 75%",
    once: true,
  },
});





      // Cards preview

      gsap.from(previewsRef.current.children, {

        opacity: 0,
        x: -35,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
        clearProps: "opacity,transform",

        scrollTrigger: {

          trigger: previewsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",

        },

      });



    }, heroRef);



    return () => ctx.revert();


  }, []);





  return (

    <article
      ref={heroRef}
      className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900 p-8 text-white shadow-[0_40px_80px_-40px_rgba(38,70,83,0.7)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_50px_100px_-40px_rgba(38,70,83,0.9)] sm:p-10"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#264653] via-slate-900 to-black" />

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF6D00]/20 blur-[120px]" />

      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />



      <div
        ref={contentRef}
        className="relative z-10"
      >


        <div className="flex items-center gap-4">


          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-white ring-1 ring-white/10 backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">

            <LuPalette size={32}/>

          </div>




          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">

              {heroCard.title}

            </p>


            <h3 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">

              {content.mainHeading}

            </h3>


          </div>


        </div>





        <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">

          {heroCard.copy}

        </p>




        <button
          onClick={() => setShowGallery(true)}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-100 lg:hidden"
        >

          {content.button}

          <LuArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-2"/>

        </button>







        <div
          ref={previewsRef}
          className="mt-14 hidden gap-5 lg:flex"
        >


          {previews.map((preview)=>(


            <button

              key={preview.title}

              onClick={() => setSelectedPreview(preview)}

              className="group/preview w-36 rounded-3xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur-xl transition duration-500 hover:-translate-y-3"

            >


              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">


                <img

                  src={preview.image}

                  alt={preview.title}

                  className="h-full w-full object-cover"

                />



                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover/preview:opacity-100">

                  <span className="text-xs font-semibold text-white">

                    View ↗

                  </span>


                </div>



              </div>




              <p className="mt-3 text-xs text-white/70">

                {preview.title}

              </p>



            </button>


          ))}



        </div>




      </div>


    </article>

  );

}


export default ServiceHero;