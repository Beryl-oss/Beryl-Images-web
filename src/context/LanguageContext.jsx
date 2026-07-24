import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {

  /* Français */

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
    footer: {
      brandText: 'Des systèmes de design élégants, des interfaces réfléchies et une présence digitale pensée pour la croissance.',
      navigationTitle: 'Navigation',
      contactTitle: 'Contact',
      email: 'massenajonas256@gmail.com',
      phone: '+509 3583-2268',
      timezone: 'UTC-4 (Haiti)',
      copyright: 'Tous droits réservés.',
      social: [
        { label: 'Instagram', href: 'https://www.instagram.com/beryl_images' },
        { label: 'GitHub', href: 'https://github.com/beryl-oss' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Prêt à créer quelque chose d’exceptionnel ?',
      description:
        'Discutons de votre prochain projet et donnons vie à une expérience digitale mémorable.',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      timezoneLabel: 'Fuseau Horaire',
      cta: 'Écrire un message',
      form: {
        name: "Votre nom",
        email: "Votre email",
        message: "Parlez-moi de votre projet...",
        send: "Envoyer",
        sending: "Envoi...",
        success: "Votre message a bien été envoyé. Merci !",
        error: "Une erreur est survenue. Veuillez réessayer."
      },
      testimonials: [
        {
          quote:
            "Une collaboration remarquable du premier échange jusqu'à la livraison. L'attention portée aux détails et la qualité d'exécution ont fait toute la différence.",
          name: "Mathaus D.",
          role: "Founder, Dufrene Création",
        },
        {
          quote:
            "Notre vision a été parfaitement comprise et traduite en une conception cohérente et raffinée. Un accompagnement à la fois créatif, stratégique et irréprochable.",
          name: 'Ander',
          role: 'CEO, Ander Parfumerie',
        },
        {
          quote:
            "Béryl a réalisé un excellent travail en respectant parfaitement l'identité visuelle de Pixora School. Son sens du détail, son organisation et son professionalisme donnent un résultat de grande qualité.",
          name: "Fritz Gérald H.",
          role: "PDG, Pixora School",
        },
      ],
      testimonialTitle: 'Confiance de marques ambitieuses',
      testimonialIntro: 'Quelques mots de founders et d’équipes créatives qui ont apprécié la stratégie et l’exécution soignée.',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Des créations qui donnent vie aux marques.',
      description:
        'Découvrez une sélection de projets réalisés en design graphique, identité visuelle et création digitale.',

      filters: [
        { id: 'all', label: 'Tous' },
        { id: 'flyer', label: 'Affiches' },
        { id: 'photography', label: 'Photographie' },
      ],

      projects: [
        {
          id: 1,
          title: "Jerry Petit-Homme",
          description:
            "Création d'un visuel promotionnel destiné à mettre en valeur le talent de Jerry Petit-Homme au sein du FC Toro.",
          type: "Sports Flyer",
          category: "Affiche",
          categoryId: "flyer",
        },

        {
          id: 2,
          title: "Ander Parfumerie",
          description:
            "Conception de supports publicitaires modernes pour promouvoir une marque de parfum.",
          type: "Advertising Design",
          category: "Affiche",
          categoryId: "flyer",
        },

        {
          id: 3,
          title: "Concert Event",
          description:
            "Affiche événementielle mettant l'accent sur une direction artistique dynamique.",
          type: "Event Poster",
          category: "Affiche",
          categoryId: "flyer",
        },

        {
          id: 4,
          title: "DJ Anymix Booking",
          description:
            "Création d'une affiche de booking premium destinée à un DJ fictif.",
          type: "Booking Flyer",
          category: "Affiche",
          categoryId: "flyer",
        },

        {
          id: 5,
          title: "Portrait de Acsa Laure",
          description:
            "Portrait capturant un moment authentique de l'artiste durant sa performance.",
          type: "Portrait Photography",
          category: "Photographie",
          categoryId: "photography",
        },

        {
          id: 6,
          title: "Portrait d'un chanteur",
          description:
            "Photographie mettant en valeur les émotions d'un chanteur pendant son interprétation.",
          type: "Portrait Photography",
          category: "Photographie",
          categoryId: "photography",
        },

        {
          id: 7,
          title: "Affiche d'un championnat",
          description:
            "Affiche sportive annonçant un championnat annuel avec une identité visuelle énergique.",
          type: "Sports Poster",
          category: "Affiche",
          categoryId: "flyer",
        },

        {
          id: 8,
          title: "Portrait d'un bassiste",
          description:
            "Portrait mettant en avant la concentration et l'expression d'un bassiste.",
          type: "Portrait Photography",
          category: "Photographie",
          categoryId: "photography",
        },

        {
          id: 9,
          title: "Portrait d'un orateur",
          description:
            "Photographie illustrant la présence et la concentration d'un orateur.",
          type: "Portrait Photography",
          category: "Photographie",
          categoryId: "photography",
        },

        {
          id: 10,
          title: "Portrait d'un batteur",
          description:
            "Portrait capturant l'énergie et la précision d'un batteur en pleine performance.",
          type: "Portrait Photography",
          category: "Photographie",
          categoryId: "photography",
        },

        {
          id: 11,
          title: "Hands That Speak",
          description:
            "Une image où les mains deviennent le langage de la musique, dans une composition sobre et intemporelle.",
          type: "Music Lifestyle Photography",
          category: "Photographie",
          categoryId: "photography",
        },

        {
          id: 12,
          title: "Formation Pixora School",
          type: "Advertising Design",
          description:
            "Une conception minimaliste, conçue pour inciter des visiteurs à acheter la formation",
          category: "Affiche",
          categoryId: "flyer",
        },
      ],
    },
  },

  /* Anglais */

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
      badge: 'Premium creative studio',
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
    footer: {
      brandText: 'Elegant design systems, thoughtful interfaces, and a digital presence tailored for growth.',
      navigationTitle: 'Navigate',
      contactTitle: 'Contact',
      email: 'massenajonas256@gmail.com',
      phone: '+509 3583-2268',
      timezone: 'UTC-4 (Haiti)',
      copyright: 'All rights reserved.',
      social: [
        { label: 'Instagram', href: 'https://www.instagram.com/beryl_images' },
        { label: 'GitHub', href: 'https://github.com/beryl-oss' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Ready to create something exceptional?',
      description:
        'Let’s discuss your next project and bring a memorable digital experience to life.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      timezoneLabel: 'Timezone',
      cta: 'Write a message',
      form: {
        name: "Your name",
        email: "Your email",
        message: "Tell me about your project...",
        send: "Send",
        sending: "Sending...",
        success: "Your message has been sent. Thank you!",
        error: "Something went wrong. Please try again."
      },
      testimonials: [
        {
          quote:
            'The whole experience felt premium, thoughtful, and very clear from the first call.',
          name: 'Mathaus D.',
          role: 'Founder, Dufrene Création',
        },
        {
          quote:
            'Every detail was aligned with our brand. The final result felt polished and strategic.',
          name: 'Ander',
          role: 'CEO, Ander Parfumerie',
        },
        {
          quote:
            "Béryl did an excellent job respecting Pixora School's visual identity. His attention to detail, organization, and professionalism resulted in a high-quality outcome.",
          name: "Fritz Gérald H.",
          role: "PDG, Pixora School",
        },
      ],
      testimonialTitle: 'Trusted by ambitious brands',
      testimonialIntro:
        'A few words from founders and creative teams who valued thoughtful strategy and polished execution.',
    }, 
    portfolio: {
  eyebrow: 'Portfolio',
  title: 'Designs that bring brands to life.',
  description:
    'Discover a selection of projects crafted in graphic design, visual identity, and digital creation.',

      filters: [
        { id: 'all', label: 'All' },
        { id: 'flyer', label: 'Flyers' },
        { id: 'photography', label: 'Photography' },
      ],

      projects: [
        {
          id: 1,
          title: "Jerry Petit-Homme",
          description:
            "Promotional visual created to highlight Jerry Petit-Homme's talent within FC Toro.",
          type: "Sports Flyer",
          category: "Flyer",
          categoryId: "flyer",
        },

        {
          id: 2,
          title: "Ander Parfumerie",
          description:
            "Modern advertising materials designed to promote a perfume brand.",
          type: "Advertising Design",
          category: "Flyer",
          categoryId: "flyer",
        },

        {
          id: 3,
          title: "Concert Event",
          description:
            "Event poster focused on a dynamic and engaging art direction.",
          type: "Event Poster",
          category: "Flyer",
          categoryId: "flyer",
        },

        {
          id: 4,
          title: "DJ Anymix Booking",
          description:
            "Premium booking flyer created for a fictional DJ.",
          type: "Booking Flyer",
          category: "Flyer",
          categoryId: "flyer",
        },

        {
          id: 5,
          title: "Acsa Laure Portrait",
          description:
            "Portrait capturing an authentic moment of the artist during a performance.",
          type: "Portrait Photography",
          category: "Photography",
          categoryId: "photography",
        },

        {
          id: 6,
          title: "Singer Portrait",
          description:
            "Photography highlighting the emotions of a singer during a performance.",
          type: "Portrait Photography",
          category: "Photography",
          categoryId: "photography",
        },

        {
          id: 7,
          title: "Championship Poster",
          description:
            "Sports poster announcing an annual championship with an energetic visual identity.",
          type: "Sports Poster",
          category: "Flyer",
          categoryId: "flyer",
        },

        {
          id: 8,
          title: "Bass Player Portrait",
          description:
            "Portrait highlighting the focus and expression of a bass player.",
          type: "Portrait Photography",
          category: "Photography",
          categoryId: "photography",
        },

        {
          id: 9,
          title: "Speaker Portrait",
          description:
            "Photography showing the presence and concentration of a speaker.",
          type: "Portrait Photography",
          category: "Photography",
          categoryId: "photography",
        },

        {
          id: 10,
          title: "Drummer Portrait",
          description:
            "Portrait capturing the energy and precision of a drummer performing.",
          type: "Portrait Photography",
          category: "Photography",
          categoryId: "photography",
        },

        {
          id: 11,
          title: "Hands That Speak",
          description:
            "An image where hands become the language of music through a timeless composition.",
          type: "Music Lifestyle Photography",
          category: "Photography",
          categoryId: "photography",
        },

        {
          id: 12,
          title: "Formation Pixora School",
          type: "Advertising Design",
          description:
            "A minimalist design, made to incite users to buy the formation",
          category: "Flyer",
          categoryId: "flyer",
        },
      ],
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
