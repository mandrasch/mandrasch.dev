import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Über mich', href: getPermalink('/ueber-mich') },
    { text: 'Blog', href: getPermalink('/blog') },
    { text: 'Projekte', href: getPermalink('/projekte') },
    { text: 'Schreiben', href: getPermalink('/schreiben') },
    { text: 'Lesen', href: getPermalink('/lesen') },
    { text: 'English', href: getPermalink('/en') },
  ],
};

export const footerData = {
  links: [
    {
      title: '// Bonus-Seiten',
      links: [
        { text: 'Green Coding', href: getPermalink('/green-coding') },
        { text: 'Klimagerechtigkeit', href: getPermalink('/klimagerechtigkeit') },
        { text: 'Die Absurdität des Lebens', href: getPermalink('/absurditaet-des-lebens') },
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/workwhileclimate' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://matthias-andrasch.eu"> Matthias Andrasch</a> · All rights reserved.
  `,
};
