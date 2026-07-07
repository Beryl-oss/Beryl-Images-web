import HeroText from './HeroText';
import HeroImage from './HeroImage';

function Hero() {
  return (
    <section id="Home"
     className="relative min-h-screen overflow-hidden bg-white"
    >
     {/*Aura de fond*/} 
     <div className="absolute left-[-150px] top-[-150px] h-[420px] w[420px] rounded-full bg-white/40 blur-3xl" />

     <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-between px-8 pt-32">
        {/* Texte */} 
         <HeroText />

        {/* Texte */}  
        <HeroImage /> 

     </div>
    </section>
  ); 
}

export default Hero;