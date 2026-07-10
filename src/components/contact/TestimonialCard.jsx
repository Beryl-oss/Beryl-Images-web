function TestimonialCard({ quote, name, role }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <p className="text-sm leading-7 text-slate-300">“{quote}”</p>
      <div className="mt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
