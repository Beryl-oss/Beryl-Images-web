import heroPic from '../../assets/images/Beryl_IMG2.png';

function HeroImage() {
  return (
    <div className="relative flex w-full justify-center lg:w-auto lg:justify-end">
      <div className="absolute inset-x-4 bottom-4 h-24 rounded-full bg-[#356267]/10 blur-3xl sm:inset-x-6 sm:h-32 lg:bottom-6" />
      <div className="absolute left-4 top-4 h-16 w-16 rounded-full bg-[#ff6d00]/10 blur-2xl sm:h-20 sm:w-20" />

      <div className="group relative z-10 w-full max-w-[320px] rounded-[32px] border border-white/80 bg-gradient-to-br from-[#f8fdfd] via-white to-[#eaf7f7] p-3 shadow-[0_25px_70px_rgba(41,78,86,0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(41,78,86,0.22)] sm:max-w-[420px] sm:p-4 lg:max-w-[560px] lg:p-5 xl:max-w-[680px]">
        <div className="absolute inset-2 rounded-[26px] border border-[#356267]/10 transition-all duration-500 group-hover:border-[#356267]/20" />
        <img
          src={heroPic}
          alt="Portrait de Beryl"
          className="relative z-10 w-full rounded-[24px] object-contain shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
    </div>
  );
}

export default HeroImage;