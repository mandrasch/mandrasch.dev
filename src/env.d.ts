// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

interface ImportMetaEnv {
  /** Simple Password Protect password for the WordPress blog. */
  readonly WP_SITE_PASSWORD?: string;
  /** Optional WordPress REST API base URL override. */
  readonly WP_API_BASE?: string;
  /** Optional WordPress site origin override. */
  readonly WP_SITE_URL?: string;
}
