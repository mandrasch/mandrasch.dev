<script>
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	export let data; // loaded via .server.ts, markdown content
	// important: make sure it's reactive for lang switcher
	$: renderedHtmlFromMarkdown = data?.mdContent?.html || '';
</script>

<PageHeadSeo titleKey="Projects" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>

	<article id="craftcms">
		<h3>Craft CMS</h3>

		<p>
			Craft CMS is an awesome fit for web agency work, especially with plugins like Sprig and Blitz
			Cache.
		</p>

		<ul>
			<li>
				<a href="https://github.com/mandrasch/ddev-craftcms-vite">mandrasch/ddev-craftcms-vite</a> -
				Demo repository for Vite usage with DDEV
			</li>
			<li>
				<a href="https://github.com/mandrasch/craftcms-sprig-green-coding-jobs-demo"
					>mandrasch/craftcms-sprig-green-coding-jobs-demo</a
				> - Demo project of my first steps with Sprig, an htmx-powered plugin for Craft CMS
			</li>

			<li>
				Guides:
				<ul>
					<li>
						<a
							href="https://dev.to/mandrasch/install-craftcms-via-ploiio-on-hetzner-cloud-including-ddev-57f8"
							>Deploy CraftCMS via ploi.io on Hetzner cloud (the fast way)</a
						>
					</li>
					<li>
						<a
							href="https://dev.to/mandrasch/install-craft-cms-v5-alpha-with-one-command-via-ddev-4ne5"
							>Install Craft CMS v5 with one command via DDEV</a
						>
					</li>
					<li>
						<a href="https://dev.to/mandrasch/open-craftcms-in-github-codespaces-via-ddev-21he"
							>Develop with CraftCMS + Vite + DDEV in Codespaces (experimental)</a
						>
					</li>
				</ul>
			</li>
		</ul>
	</article>

	<article id="ddev">
		<h3>DDEV-related</h3>

		<p>
			DDEV is a swiss army knife for Docker-based PHP development environments, I maintain some
			tutorials and demo project in my free time.
		</p>

		<ul>
			<li>
				Guides:
				<ul>
					<li>
						<a href="https://ddev.com/blog/working-with-vite-in-ddev/"
							>Working with Vite in DDEV - an introduction</a
						> (ddev.com)
					</li>
					<li>
						Personal notebook: <a href="https://my-ddev-lab.mandrasch.eu/"
							>my-ddev-lab.mandrasch.eu</a
						>
					</li>
					<li>
						<a href="https://dev.to/mandrasch/install-laravel-with-vite-support-in-ddev-docker-4lmh"
							>Install Laravel with Vite support in DDEV (Docker)</a
						>
					</li>
				</ul>
			</li>
			<li>
				Demos:
				<ul>
					<li>
						<a href="https://github.com/mandrasch/ddev-sveltekit-postgres"
							>mandrasch/ddev-sveltekit-postgres</a
						> - Dockerized SvelteKit with PostgreSQL
					</li>
					<li>
						<a href="https://github.com/mandrasch/ddev-laravel-vite">
							mandrasch/ddev-laravel-vite</a
						> - Laravel with DDEV, including support for Vite
					</li>
					<li>
						<a href="https://github.com/mandrasch/ddev-laravel-breeze-vite"
							>mandrasch/ddev-laravel-breeze-vite</a
						> - Demo for Laravel Breeze StarterKit
					</li>
					<li>
						<a href="https://github.com/mandrasch/ddev-wp-acf-blocks-svelte"
							>mandrasch/ddev-wp-acf-blocks-svelte</a
						> - WP ACF Blocks meets Svelte
					</li>
					<li>
						<a href="https://github.com/mandrasch/ddev-pull-wp-scripts">
							mandrasch/ddev-pull-wp-scripts</a
						> - Pull scripts to sync WordPress to DDEV
					</li>
					<li>
						<a href="https://github.com/mandrasch/ddev-typo3-vite-svelte">
							mandrasch/ddev-typo3-vite-svelte</a
						> - Svelte meets TYPO3 + Vite in DDEV
					</li>
				</ul>
			</li>
		</ul>
	</article>

	<article id="sveltekit">
		<h3>Svelte(Kit)</h3>

		<ul>
			<li>
				<a href="https://github.com/mandrasch/sveltekit-inlang-paraglide-demo"
					>mandrasch/sveltekit-inlang-paraglide-demo</a
				> - Simple i18n demo with SvelteKit and @inlang/paraglide-js-adapter-sveltekit
			</li>
			<li>
				<a href="https://tzettel.mandrasch.eu/">tzettel.mandrasch.eu</a> - Daily work sheet (Tageszettel)
				web app
			</li>
			<li>
				<a href="https://github.com/mandrasch/train2lake">mandrasch/train2lake</a> - Demo of SvelteKit
				and WordPress REST API (Gutenberg)
			</li>
			<li>
				<a href="https://github.com/mandrasch/sveltekit-headless-wp-rest-demo"
					>mandrasch/sveltekit-headless-wp-rest-demo</a
				> - Connect SvelteKit to WordPress REST API (Gutenberg)
			</li>
			<li>
				Guides:
				<ul>
					<li>
						<a href="https://dev.to/mandrasch/deploy-sveltekit-with-ssr-on-coolify-hetzner-vps-24c5"
							>Deploy SvelteKit with SSR on Coolify (Hetzner VPS)
						</a>
					</li>
					<li>
						<a
							href="https://dev.to/mandrasch/host-sveltekit-apps-with-ssr-support-via-ploiio-on-hetzner-cloud-1cpa"
							>Host SvelteKit apps with SSR-support via ploi.io (on Hetzner Cloud)
						</a>
					</li>
					<li>
						<a
							href="https://dev.to/mandrasch/rich-harris-explains-why-sveltekit-pushes-for-server-side-rendering-and-against-spa-5flj"
							>Rich Harris explains why SvelteKit pushes for Server Side Rendering (and against SPA
							/ CSR)
						</a>
					</li>
					<li>
						<a
							href="https://dev.to/mandrasch/hosting-nodejs-ssr-sveltekit-apps-on-mittwald-spaceserver-1a3g"
							>Hosting SvelteKit as SSR on mittwald SpaceServer
						</a>
					</li>
				</ul>
			</li>
		</ul>
	</article>

	<article id="web-animation">
		<h3 id="web-animation">Web Animation</h3>

		<ul>
			<li>
				<a href="https://github.com/mandrasch/rive-vite-demo">mandrasch/rive-vite-demo</a> - Demo for
				usage of Rive animations in Vite projects
			</li>
			<li>
				<a href="https://github.com/mandrasch/spline-selfhosted">mandrasch/spline-selfhosted</a> - Demo
				of selfhosting of Spline 3D scene (exports)
			</li>
			<li>
				<a href="https://github.com/mandrasch/astro-landing-page-spline-viewer-demo"
					>mandrasch/astro-landing-page-spline-viewer-demo</a
				> - Astro meets Spline Viewer
			</li>
		</ul>
	</article>

	<article id="web-accessibility">
		<h3 id="">Web Accessibility</h3>

		<p>
			My dream would be a website called screenreadthis.org - which will give developers instantly
			the screenreader output of websites - without learning keyboard shortcuts for real
			screenreaders first (which is a major blocker for testing imho). Unfortunately I didn't find a
			quick way to remote control real screenreaders (yet). Only managed some to implement some
			experiments:
		</p>

		<ul>
			<li>
				<a href="https://github.com/mandrasch/screenreadthis">mandrasch/screenreadthis</a> - prototype
				with Puppeteers accessibility snapshot (experimental)
			</li>
			<li>
				<a href="https://github.com/mandrasch/not-a-real-screenreader"
					>mandrasch/not-a-real-screenreader</a
				> - electron (experimental)
			</li>
			<li>
				<a href="https://github.com/mandrasch/screenreader-remote-control?tab=readme-ov-file"
					>mandrasch/screenreader-remote-control</a
				> - electron, control laptop via second device (experimental)
			</li>
			<li>
				<a href="https://github.com/mandrasch/pa11y-pipeline-dashboard"
					>mandrasch/pa11y-pipeline-dashboard</a
				>
			</li>
		</ul>

		<p>
			See also <a href="https://assistivlabs.com/">assistivlabs.com</a> for remote screenreader testing.
		</p>
	</article>

	<article id="climate-emergency">
		<h3>Climate Emergency</h3>

		<ul>
			<li><a href="https://aktuelle-erderhitzung.de/">aktuelle-erderhitzung.de</a></li>
			<li>
				<a href="https://klimakrise-schnelldurchlauf.mandrasch.eu/"
					>klimakrise-schnelldurchlauf.mandrasch.eu</a
				>
			</li>
		</ul>
	</article>

	<article id="other">
		<h3 id="other">Other</h3>

		<ul>
			<li>
				<a href="https://github.com/mandrasch/11ty-plain-bootstrap5"
					>mandrasch/11ty-plain-bootstrap5</a
				>
				- Plain template for static site generator Eleventy with Boostrap v5
			</li>
			<li>
				<a href="https://oerhoernchen.de/">OERhörnchen</a> - Search interface for Open Educational Resources
				(OER)
			</li>
		</ul>
	</article>
</div>

<style>
	article {
		padding: 2rem;
		margin-bottom: 2.5rem;
	}
</style>
