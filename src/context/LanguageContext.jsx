import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {
  fr: {
    nav: {
      items: [
        { label: 'Accueil', href: '#home' },
        { label: 'À propos', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
      ],
      toggleLabel: 'Changer la langue',
      currentLabel: 'FR',
    },
    hero: {
      badge: 'Masséna Béryl',
      titleLines: ['Des expériences', 'web sobres qui', 'mettent votre', 'projet en valeur'],
      description:
        'Je conçois des interfaces modernes, rapides et élégantes pour aider les entreprises et les créateurs à transformer leurs visiteurs en clients.',
      ctaPrimary: 'Voir mes projets',
      ctaSecondary: 'En savoir plus',
    },
    about: {
      eyebrow: 'À propos',
      heading: 'Créer des expériences numériques qui marquent durablement.',
      description:
        'Chez Béryl Images, nous allions créativité, stratégie et technologie pour créer des identités de marque mémorables et des expériences numériques modernes. Chaque projet est pensé avec clarté, élégance et impact pour aider les entreprises à construire une présence forte et durable.',
      badge: '✨ Studio créatif premium',
      cards: ['Identité de marque', 'Sites modernes', 'Storytelling visuel', 'UI / UX Design'],
      features: [
        'Identité de marque stratégique',
        'Sites web hautes performances',
        'Storytelling visuel créatif',
      ],
      button: 'En savoir plus',
    },
    services: {
      badge: 'Mes services',
      title: 'Transformer des idées en expériences mémorables.',
      description:
        'Je conçois des marques, sites web et visuels qui connectent avec les gens et aident les entreprises à se démarquer.',
      mainHeading: 'Design qui raconte votre histoire et élève votre marque.',
      cards: [
        {
          title: 'Design graphique',
          copy:
            'Affiches, branding, réseaux sociaux, supports imprimés et identités visuelles conçus pour marquer les esprits.',
        },
        {
          title: 'Développement Web',
          copy: 'Sites modernes et responsives construits avec React et Tailwind CSS.',
        },
        {
          title: 'Photographie',
          copy:
            'Images professionnelles qui capturent des moments authentiques et des produits.',
        },
        {
          title: 'Identité de marque',
          copy:
            'Logos, palettes et identités visuelles conçus pour une reconnaissance durable.',
        },
      ],
      button: 'Découvrir les projets',
    },
  },
  en: {
    nav: {
      items: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
      ],
      toggleLabel: 'Switch language',
      currentLabel: 'EN',
    },
    hero: {
      badge: 'Masséna Béryl',
      titleLines: ['Designing', 'digital experiences', 'that make', 'your brand stand out'],
      description:
        'I craft modern, fast and elegant interfaces to help businesses and creators turn visitors into clients.',
      ctaPrimary: 'See my projects',
      ctaSecondary: 'Learn more',
    },
    about: {
      eyebrow: 'About',
      heading: 'Creating digital experiences that leave a lasting impression.',
      description:
        'At Béryl Images, we blend creativity, strategy and technology to craft memorable brand identities and modern digital experiences. Every project is designed with clarity, elegance and impact to help businesses build a strong and lasting presence.',
      badge: '✨ Premium creative studio',
      cards: ['Brand identity', 'Modern websites', 'Visual storytelling', 'UI / UX Design'],
      features: [
        'Strategic brand identity',
        'High-performance websites',
        'Creative visual storytelling',
      ],
      button: 'Learn more',
    },
    services: {
      badge: 'My services',
      title: 'Turning ideas into memorable experiences.',
      description:
        'I design brands, websites and visuals that connect with people and help businesses stand out.',
      mainHeading: 'Design that tells your story and elevates your brand.',
      cards: [
        {
          title: 'Graphic Design',
          copy:
            'Posters, branding, social media, print materials and visual identities crafted to leave a lasting impression.',
        },
        {
          title: 'Website Development',
          copy: 'Modern responsive websites built with React and Tailwind CSS.',
        },
        {
          title: 'Photography',
          copy: 'Professional imagery that captures authentic moments and products.',
        },
        {
          title: 'Brand Identity',
          copy:
            'Logos, color systems and visual identities designed for long-term recognition.',
        },
      ],
      button: 'Explore projects',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
