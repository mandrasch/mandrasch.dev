export interface Link {
  text: string;
  href: string;
  target?: string;
}

export interface SocialLink {
  ariaLabel: string;
  icon: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: Link[];
}

export const SITE = {
  name: 'Matthias Andrasch',
  site: 'https://matthias-andrasch.eu',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: false,
} as const;

export const I18N = {
  language: 'de',
  textDirection: 'ltr',
} as const;

export const METADATA = {
  title: {
    default: 'Matthias Andrasch – Web Developer & Hobby Blogger',
    template: '%s — Matthias Andrasch',
  },
  description:
    'Persönliche Website von Matthias Andrasch. Full-Stack Web-Entwickler aus Wien. Svelte, Nuxt, Craft CMS, Open Source.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: 'Matthias Andrasch',
    type: 'website',
    images: [
      {
        url: '~/assets/images/hero-image.png',
        width: 1200,
        height: 628,
      },
    ],
  },
} as const;

export const UI = {
  theme: 'system',
} as const;

export const headerData = {
  links: [
    { text: 'Über mich', href: '/ueber-mich' },
    { text: 'Blog', href: '/blog' },
    { text: 'Projekte', href: '/projekte' },
    { text: 'Schreiben', href: '/schreiben' },
    { text: 'Lesen', href: '/lesen' },
  ],
} satisfies { links: Link[] };

export const footerData = {
  links: [
    {
      title: '// Bonus-Seiten',
      links: [
        { text: 'Green Coding', href: '/green-coding' },
        { text: 'Klimagerechtigkeit', href: '/klimagerechtigkeit' },
        { text: 'Die Absurdität des Lebens', href: '/absurditaet-des-lebens' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum & Datenschutz', href: 'https://matthias-andrasch.eu/impressum-datenschutz/' },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/mandrasch' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mandrasch/' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/mandrasch.bsky.social' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://social.tchncs.de/@mandrasch' },
    { ariaLabel: 'dev.to', icon: 'tabler:code', href: 'https://dev.to/mandrasch' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/matthias.andrasch/' },
  ],
} satisfies {
  links: FooterLinkGroup[];
  secondaryLinks: Link[];
  socialLinks: SocialLink[];
};
