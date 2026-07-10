function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-[#ff6d00]/40 hover:bg-slate-900"
    >
      <div className="rounded-full bg-[#ff6d00]/15 p-2 text-[#ff6d00]">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-200">{label}</p>
        <p className="mt-1 text-sm text-slate-400">{value}</p>
      </div>
    </a>
  );
}

export default ContactCard;
