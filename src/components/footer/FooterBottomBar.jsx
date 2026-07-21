function FooterBottomBar({ copyright, socialLinks }) {
  return (
    <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Beryl Images. {copyright}</p>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((item) => (
          <a target="_blank" rel="noopener noreferrer" key={item.label} href={item.href} className="transition-colors duration-200 hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterBottomBar;
