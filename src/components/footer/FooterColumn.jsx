function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-sm text-slate-300">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition-colors duration-200 hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
