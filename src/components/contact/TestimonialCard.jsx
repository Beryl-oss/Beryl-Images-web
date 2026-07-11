function TestimonialCard({ quote, name, role }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-sm

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2
        hover:border-white/20
        hover:bg-white/[0.08]
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
      "
    >
      {/* Glow subtil */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_65%)]
        "
      />

      <p className="relative text-sm leading-7 text-slate-300">
        “{quote}”
      </p>

      <div className="relative mt-5">
        <p
          className="
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {name}
        </p>

        <p
          className="
            text-sm
            text-slate-400
            transition-colors
            duration-300
            group-hover:text-slate-300
          "
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;