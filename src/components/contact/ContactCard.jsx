function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="
        group
        relative
        flex
        items-start
        gap-4
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-slate-900/70
        p-5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.015]
        hover:border-[#ff6d00]/50
        hover:bg-slate-900
        hover:shadow-[0_20px_60px_rgba(255,109,0,0.18)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_left,_rgba(255,109,0,.08),transparent_65%)]
        "
      />

      {/* Arrow */}
      <span
        className="
          absolute
          right-5
          top-5
          text-slate-500
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:text-[#ff6d00]
          group-hover:opacity-100
        "
      >
        ↗
      </span>

      <div
        className="
          relative
          rounded-full
          bg-[#ff6d00]/15
          p-3
          text-[#ff6d00]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
          group-hover:bg-[#ff6d00]/25
        "
      >
        <Icon size={20} />
      </div>

      <div className="relative">
        <p className="text-sm font-semibold text-slate-100">
          {label}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-400">
          {value}
        </p>
      </div>
    </a>
  );
}

export default ContactCard;