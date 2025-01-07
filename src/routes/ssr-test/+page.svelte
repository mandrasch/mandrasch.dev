<script lang="ts">
	let { data } = $props();
</script>

<div class="container-boxed">
	<h1>SSR test</h1>

	<p>
		This page is <a href="https://kit.svelte.dev/docs/glossary#ssr" target="_blank">server side rendered (SSR)</a>. See how the timestamp changes here - while the other pages are statically pre-rendered (<a href="https://kit.svelte.dev/docs/glossary#ssg" target="_blank">SSG</a>), see timestamp in the footer.
	</p>

	<!-- See +layout.server.ts -->
	<p>
		Current date on server, retrieved via +layout.server.ts: <code>{ data.currentDateOnServer }</code>
	</p>

	<p>This website is currently hosted via Coolify, see my tutorial: <a href="https://dev.to/mandrasch/deploy-sveltekit-with-ssr-on-coolify-hetzner-vps-24c5" target="_blank">Deploy SvelteKit with SSR on Coolify (Hetzner VPS)</a>.
	</p>

	<p>
		Disclaimer: <a href="https://kit.svelte.dev/docs/link-options" target="_blank">SvelteKit routing</a> is involved here as well, therefore the footer itself is not updated when navigating to this page from another page of this website. Only after a real browser reload, the full page is refreshed and the footer information is correct.
	</p>
</div>
