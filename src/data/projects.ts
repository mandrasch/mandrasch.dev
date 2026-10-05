export interface ProjectLink {
  label: string;
  href: string;
  note?: string;
}

export interface ProjectGroup {
  label: string;
  links: ProjectLink[];
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  links?: ProjectLink[];
  groups?: ProjectGroup[];
}

export const projects: Project[] = [
  {
    id: 'quick-ddev-previews',
    title: 'NEW: Quick DDEV Previews',
    links: [
      {
        label: 'github.com/mandrasch/quick-ddev-previews',
        href: 'https://github.com/mandrasch/quick-ddev-previews',
        note: 'a selfhosted service for quickly deploying DDEV project previews',
      },
    ],
  },
  {
    id: 'karenzwizard',
    title: 'NEW: Karenz Wizard - für mehr Väterbeteiligung!',
    links: [{ label: 'karenz-wizard.at', href: 'https://karenz-wizard.at/' }],
  },
  {
    id: 'sveltekit',
    title: 'Svelte and SvelteKit (JavaScript)',
    links: [
      {
        label: 'austrian-web-dev-companies.pages.dev',
        href: 'https://austrian-web-dev-companies.pages.dev/',
        note: 'Demo project with the new Svelte v5 ($state), SvelteKit v2 and Simple.css.',
      },
      {
        label: 'mandrasch/mandrasch.dev',
        href: 'https://github.com/mandrasch/mandrasch.dev',
        note: 'Personal site with multilanguage markdown loading',
      },
      {
        label: 'mandrasch/sveltekit-inlang-paraglide-demo',
        href: 'https://github.com/mandrasch/sveltekit-inlang-paraglide-demo',
        note: 'Simple i18n demo with SvelteKit and @inlang/paraglide-js-adapter-sveltekit',
      },
      {
        label: 'DDEV unofficial Web UI - frontend experiment',
        href: 'https://ddev-unofficial-web-ui.mandrasch.eu/',
      },
      {
        label: 'tzettel.mandrasch.eu',
        href: 'https://tzettel.mandrasch.eu/',
        note: 'Daily work sheet (Tageszettel) web app',
      },
      {
        label: 'mandrasch/train2lake',
        href: 'https://github.com/mandrasch/train2lake',
        note: 'Demo of SvelteKit and WordPress REST API (Gutenberg)',
      },
      {
        label: 'mandrasch/sveltekit-headless-wp-rest-demo',
        href: 'https://github.com/mandrasch/sveltekit-headless-wp-rest-demo',
        note: 'Connect SvelteKit to WordPress REST API (Gutenberg)',
      },
    ],
    groups: [
      {
        label: 'Guides',
        links: [
          {
            label: 'Svelte 5: Share state between components (for Dummies)',
            href: 'https://dev.to/mandrasch/svelte-5-share-state-between-components-for-dummies-4gd2',
          },
          {
            label: 'Deploy SvelteKit with SSR on Coolify (Hetzner VPS)',
            href: 'https://dev.to/mandrasch/deploy-sveltekit-with-ssr-on-coolify-hetzner-vps-24c5',
          },
          {
            label: 'Host SvelteKit apps with SSR-support via ploi.io (on Hetzner Cloud)',
            href: 'https://dev.to/mandrasch/host-sveltekit-apps-with-ssr-support-via-ploiio-on-hetzner-cloud-1cpa',
          },
          {
            label: 'Rich Harris explains why SvelteKit pushes for Server Side Rendering (and against SPA / CSR)',
            href: 'https://dev.to/mandrasch/rich-harris-explains-why-sveltekit-pushes-for-server-side-rendering-and-against-spa-5flj',
          },
          {
            label: 'Hosting SvelteKit as SSR on mittwald SpaceServer',
            href: 'https://dev.to/mandrasch/hosting-nodejs-ssr-sveltekit-apps-on-mittwald-spaceserver-1a3g',
          },
        ],
      },
    ],
  },
  {
    id: 'craftcms',
    title: 'Craft CMS (PHP / MySQL)',
    description:
      'Craft CMS is an awesome fit for web agency work, especially with plugins like Sprig and Blitz Cache.',
    links: [
      {
        label: 'CraftCMS Launchpad',
        href: 'https://craftcms-launchpad.mandrasch.eu/',
        note: 'Interactive CraftCMS demos in your browser, powered by DDEV.',
      },
      {
        label: 'mandrasch/ddev-craftcms-vite',
        href: 'https://github.com/mandrasch/ddev-craftcms-vite',
        note: 'Demo repository for Vite usage with DDEV',
      },
      {
        label: 'mandrasch/craftcms-sprig-green-coding-jobs-demo',
        href: 'https://github.com/mandrasch/craftcms-sprig-green-coding-jobs-demo',
        note: 'Demo project of my first steps with Sprig, an htmx-powered plugin for Craft CMS',
      },
    ],
    groups: [
      {
        label: 'Guides',
        links: [
          {
            label: 'Deploy CraftCMS via ploi.io on Hetzner cloud (the fast way)',
            href: 'https://dev.to/mandrasch/install-craftcms-via-ploiio-on-hetzner-cloud-including-ddev-57f8',
          },
          {
            label: 'Install Craft CMS v5 with one command via DDEV',
            href: 'https://dev.to/mandrasch/install-craft-cms-v5-alpha-with-one-command-via-ddev-4ne5',
          },
          {
            label: 'Develop with CraftCMS + Vite + DDEV in Codespaces (experimental)',
            href: 'https://dev.to/mandrasch/open-craftcms-in-github-codespaces-via-ddev-21he',
          },
        ],
      },
    ],
  },
  {
    id: 'ddev',
    title: 'DDEV-related',
    description:
      'DDEV is a swiss army knife for Docker-based PHP development environments, I maintain some tutorials and demo project in my free time.',
    groups: [
      {
        label: 'Prototype work',
        links: [
          {
            label: 'DDEV unofficial Web UI - frontend experiment',
            href: 'https://ddev-unofficial-web-ui.mandrasch.eu/',
          },
        ],
      },
      {
        label: 'Guides',
        links: [
          {
            label: 'Working with Vite in DDEV - an introduction',
            href: 'https://ddev.com/blog/working-with-vite-in-ddev/',
            note: 'ddev.com',
          },
          {
            label: 'my-ddev-lab.mandrasch.eu',
            href: 'https://my-ddev-lab.mandrasch.eu/',
            note: 'Personal notebook',
          },
          {
            label: 'Install Laravel with Vite support in DDEV (Docker)',
            href: 'https://dev.to/mandrasch/install-laravel-with-vite-support-in-ddev-docker-4lmh',
          },
        ],
      },
      {
        label: 'Demos',
        links: [
          {
            label: 'CraftCMS Launchpad',
            href: 'https://craftcms-launchpad.mandrasch.eu/',
            note: 'Interactive CraftCMS demos in your browser, powered by DDEV.',
          },
          {
            label: 'mandrasch/ddev-sveltekit-postgres',
            href: 'https://github.com/mandrasch/ddev-sveltekit-postgres',
            note: 'Dockerized SvelteKit with PostgreSQL',
          },
          {
            label: 'mandrasch/ddev-laravel-vite',
            href: 'https://github.com/mandrasch/ddev-laravel-vite',
            note: 'Laravel with DDEV, including support for Vite',
          },
          {
            label: 'mandrasch/ddev-laravel-breeze-vite',
            href: 'https://github.com/mandrasch/ddev-laravel-breeze-vite',
            note: 'Demo for Laravel Breeze StarterKit',
          },
          {
            label: 'mandrasch/ddev-wp-acf-blocks-svelte',
            href: 'https://github.com/mandrasch/ddev-wp-acf-blocks-svelte',
            note: 'WP ACF Blocks meets Svelte',
          },
          {
            label: 'mandrasch/ddev-pull-wp-scripts',
            href: 'https://github.com/mandrasch/ddev-pull-wp-scripts',
            note: 'Pull scripts to sync WordPress to DDEV',
          },
          {
            label: 'mandrasch/ddev-typo3-vite-svelte',
            href: 'https://github.com/mandrasch/ddev-typo3-vite-svelte',
            note: 'Svelte meets TYPO3 + Vite in DDEV',
          },
        ],
      },
    ],
  },
  {
    id: 'web-animation',
    title: 'Web Animation',
    links: [
      {
        label: 'mandrasch/rive-vite-demo',
        href: 'https://github.com/mandrasch/rive-vite-demo',
        note: 'Demo for usage of Rive animations in Vite projects',
      },
      {
        label: 'mandrasch/spline-selfhosted',
        href: 'https://github.com/mandrasch/spline-selfhosted',
        note: 'Demo of selfhosting of Spline 3D scene (exports)',
      },
      {
        label: 'mandrasch/astro-landing-page-spline-viewer-demo',
        href: 'https://github.com/mandrasch/astro-landing-page-spline-viewer-demo',
        note: 'Astro meets Spline Viewer',
      },
    ],
  },
  {
    id: 'web-accessibility',
    title: 'Web Accessibility',
    description:
      'My dream would be a website called screenreadthis.org - which will give developers instantly the screenreader output of websites - without learning keyboard shortcuts for real screenreaders first (which is a major blocker for testing imho). Unfortunately I didn\'t find a quick way to remote control real screenreaders (yet). Only managed to implement some experiments:',
    links: [
      {
        label: 'mandrasch/screenreadthis',
        href: 'https://github.com/mandrasch/screenreadthis',
        note: 'prototype with Puppeteers accessibility snapshot (experimental)',
      },
      {
        label: 'mandrasch/not-a-real-screenreader',
        href: 'https://github.com/mandrasch/not-a-real-screenreader',
        note: 'electron (experimental)',
      },
      {
        label: 'mandrasch/screenreader-remote-control',
        href: 'https://github.com/mandrasch/screenreader-remote-control?tab=readme-ov-file',
        note: 'electron, control laptop via second device (experimental)',
      },
      {
        label: 'mandrasch/pa11y-pipeline-dashboard',
        href: 'https://github.com/mandrasch/pa11y-pipeline-dashboard',
      },
      {
        label: 'assistivlabs.com',
        href: 'https://assistivlabs.com/',
        note: 'See also: remote screenreader testing',
      },
    ],
  },
  {
    id: 'open-education',
    title: 'Open Education',
    links: [
      {
        label: 'OERhörnchen',
        href: 'https://oerhoernchen.de/',
        note: 'Search interface for Open Educational Resources (OER)',
      },
      {
        label: 'klimakrise-schnelldurchlauf.mandrasch.eu',
        href: 'https://klimakrise-schnelldurchlauf.mandrasch.eu/',
      },
    ],
  },
  {
    id: 'eleventy',
    title: 'Eleventy',
    links: [
      {
        label: 'mandrasch/11ty-plain-bootstrap5',
        href: 'https://github.com/mandrasch/11ty-plain-bootstrap5',
        note: 'Plain template for static site generator Eleventy with Bootstrap v5',
      },
    ],
  },
];
