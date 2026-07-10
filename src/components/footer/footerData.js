export function getFooterSections(t) {
  return [
    {
      title: t.footer.navigationTitle,
      links: t.nav.items.map(({ label, href }) => ({ label, href })),
    },
    {
      title: t.footer.contactTitle,
      links: [
        { label: t.footer.email, href: 'mailto:massenajonas256@gmail.com' },
        { label: t.footer.phone, href: 'tel:+509 3583-2268' },
        { label: t.footer.address, href: '#contact' },
      ],
    },
  ];
}
