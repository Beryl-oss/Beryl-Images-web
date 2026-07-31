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

useEffect(()=>{

const ctx = gsap.context(()=>{


gsap.from(visualRef.current,{
scrollTrigger:{
trigger:sectionRef.current,
start:"top 75%",
},
x:-100,
opacity:0,
scale:.96,
duration:1.2,
ease:"power4.out"
});


gsap.from(contentRef.current,{
scrollTrigger:{
trigger:sectionRef.current,
start:"top 75%",
},
x:100,
opacity:0,
duration:1.2,
ease:"power4.out",
delay:.15
});


gsap.from(".about-card",{
scrollTrigger:{
trigger:sectionRef.current,
start:"top 70%",
},
y:40,
opacity:0,
scale:.9,
stagger:.15,
duration:.8,
ease:"back.out(1.7)"
});


gsap.from(logoRef.current,{
scrollTrigger:{
trigger:sectionRef.current,
start:"top 70%",
},
scale:.5,
opacity:0,
rotate:-8,
duration:1.2,
ease:"back.out(2)"
});


gsap.to(logoRef.current,{
y:-10,
duration:3,
repeat:-1,
yoyo:true,
ease:"sine.inOut"
});


gsap.to(".about-glow",{
scale:1.15,
opacity:.8,
duration:5,
repeat:-1,
yoyo:true,
ease:"sine.inOut"
});


},sectionRef);


return()=>ctx.revert();


},[]);



return(

<section ref={sectionRef} className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-12">

<div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-20">


{/* Visual */}

<div ref={visualRef} className="relative w-full max-w-lg">

<div className="about-glow absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6d00]/20 blur-[120px] sm:h-96 sm:w-96"/>


<div className="group relative h-[430px] overflow-hidden rounded-[40px] border border-white/20 bg-gradient-to-br from-[#111d21] via-[#183337] to-[#264653] shadow-[0_40px_100px_rgba(38,70,83,.35)] sm:h-[520px]">


<div className="pointer-events-none absolute -left-1/2 top-0 h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl transition-transform duration-[1200ms] group-hover:translate-x-[900px]"/>


<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"/>


<div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl sm:left-7 sm:top-7">

<p className="text-xs font-semibold tracking-[0.25em] text-white">
{t.about.badge}
</p>

</div>



<div className="absolute inset-0 flex items-center justify-center">

<div className="absolute h-48 w-48 rounded-full bg-[#ff6d00]/20 blur-[90px]"/>


<img ref={logoRef} loading="lazy" src={BerylLogo} alt="Béryl Images" className="relative z-10 w-56 object-contain drop-shadow-[0_25px_60px_rgba(255,109,0,.25)] sm:w-72"/>


</div>




<div className="about-card absolute left-5 top-28 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:left-7">

<LuPalette size={20} className="text-[#ffb347]"/>

<p className="text-sm font-semibold text-white">
{t.about.cards[0]}
</p>

</div>



<div className="about-card absolute right-5 top-28 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:right-7">

<LuCodeXml size={20} className="text-[#ffb347]"/>

<p className="text-sm font-semibold text-white">
{t.about.cards[1]}
</p>

</div>



<div className="about-card absolute bottom-20 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:left-7">

<LuCamera size={20} className="text-[#ffb347]"/>

<p className="text-sm font-semibold text-white">
{t.about.cards[2]}
</p>

</div>



<div className="about-card absolute bottom-20 right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:right-7">

<LuSparkles size={20} className="text-[#ffb347]"/>

<p className="text-sm font-semibold text-white">
{t.about.cards[3]}
</p>

</div>



<div className="absolute bottom-6 left-1/2 -translate-x-1/2">

<p className="text-[10px] uppercase tracking-[0.45em] text-white/40">
Design · Code · Vision
</p>

</div>


</div>

</div>





{/* Content */}

<div ref={contentRef} className="w-full flex-1 text-center sm:text-left">


<span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
{t.about.eyebrow}
</span>


<h2 className="mt-5 text-3xl font-black leading-tight text-[#264653] sm:text-4xl lg:text-5xl">
{t.about.heading}
</h2>


<p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:mx-0 sm:text-lg">
{t.about.description}
</p>



<div className="mt-8 space-y-4">

<div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6d00] text-white shadow-lg">
<LuPalette size={20}/>
</div>

<p className="font-semibold text-[#264653]">
{t.about.features[0]}
</p>

</div>


<div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6d00] text-white shadow-lg">
<LuCodeXml size={20}/>
</div>

<p className="font-semibold text-[#264653]">
{t.about.features[1]}
</p>

</div>


<div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ff6d00] text-white shadow-lg">
<LuSparkles size={20}/>
</div>

<p className="font-semibold text-[#264653]">
{t.about.features[2]}
</p>

</div>


</div>



<a href="#contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#264653] px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1d3740] hover:shadow-xl">

{t.about.button}

<LuArrowRight size={18}/>

</a>


</div>


</div>

</section>

);

}

export default About;