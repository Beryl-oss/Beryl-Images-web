function FooterBrand({ text }) {
  return (
    <div className="max-w-sm">
      <div className="text-2xl font-semibold tracking-tight text-white">Beryl <span className="text-orange-500">.</span></div>
      <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
    </div>
  );
}

export default FooterBrand;
