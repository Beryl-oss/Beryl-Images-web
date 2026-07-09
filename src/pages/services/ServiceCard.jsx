function ServiceCard({ card, Icon, index }) {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
      <span className="absolute right-5 top-2 text-6xl font-bold text-slate-100">
        0{index + 2}
      </span>

      <div className="relative z-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-50 text-slate-900 transition duration-500 group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-6">
          <Icon size={26} />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{card.copy}</p>
      </div>

      <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition duration-300 group-hover:translate-x-1">
        Learn more
        <span className="text-base">→</span>
      </button>
    </article>
  );
}

export default ServiceCard;
