import { ArrowRight, Mail } from 'lucide-react';

function ContactHero({ title, description, ctaLabel, email }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff6d00]">
        Contact
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-white to-slate-100 px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          <Mail size={18} />
          {ctaLabel}
        </a>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          Usually replies within 24h
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
