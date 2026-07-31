import { Palette, Code2, Camera } from "lucide-react";

function HeroBadges() {

  const badges = [
    {
      label: "Graphic Design",
      icon: Palette,
      color: "bg-orange-100 text-[#ff6d00]",
    },
    {
      label: "Web Development",
      icon: Code2,
      color: "bg-[#c2f2f2] text-[#356267]",
    },
    {
      label: "Photography",
      icon: Camera,
      color: "bg-slate-100 text-slate-700",
    },
  ];


  return (
    <div className="hero-badges mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">

      {badges.map((badge) => {

        const Icon = badge.icon;

        return (

          <div key={badge.label} className={`flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${badge.color}`}>

            <Icon size={15} strokeWidth={2.2} />

            <span>
              {badge.label}
            </span>

          </div>

        );

      })}

    </div>
  );
}

export default HeroBadges;