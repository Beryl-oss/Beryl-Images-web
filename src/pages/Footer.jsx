import React from 'react';

const Footer = () => {
  const sections = [
    { title: 'Company', links: ['About', 'Careers', 'Press', 'Blog'] },
    { title: 'Resources', links: ['Help Center', 'Privacy Policy', 'Terms', 'Support'] },
    { title: 'Contact', links: ['contact@beryl.com', '+1 555 123 4567', '123 Main St, Anytown'] },
  ];

  return (
    <footer style={{ background: '#0f172a', color: '#e2e8f0', padding: '40px 20px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '24px', alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Beryl</div>
          <p style={{ lineHeight: 1.8, maxWidth: 360, color: '#cbd5e1' }}>
            Elegant design system, thoughtful components, and a digital presence tailored for growth.
          </p>
        </div>
        {sections.map((section) => (
          <div key={section.title}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px', color: '#94a3b8' }}>
              {section.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(148, 163, 184, 0.16)', marginTop: '36px', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '14px', fontSize: '0.9rem', color: '#94a3b8' }}>
        <p>© {new Date().getFullYear()} Beryl. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '18px' }}>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
