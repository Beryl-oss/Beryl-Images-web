const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  
  function NavLinks({ linksRef }) {
    return (
      <ul ref={linksRef} className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm font-semi-bold text-[#264653] transition-colors duration-300 hover:text-orange-500"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }
  
  export default NavLinks;