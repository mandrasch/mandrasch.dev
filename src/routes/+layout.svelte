<script lang="ts">
	import '$styles/global.scss';

	import { pageTitleBase } from '$lib/store';

	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n';

	import GitHubCorner from '$lib/components/GitHubCorner.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>{pageTitleBase}</title>

	<script
		defer
		data-domain="mandrasch.dev"
		src="https://plausible.coolify.mandrasch.dev/js/script.js"
	></script>

	<link rel="icon" href="/favicon-150x150.jpeg" sizes="32x32" />
	<link rel="icon" href="/favicon-300x300.jpeg" sizes="192x192" />
	<link rel="apple-touch-icon" href="/favicon-300x300.jpeg" />
	<meta name="msapplication-TileImage" content="/favicon-300x300.jpeg" />
</svelte:head>

<ParaglideJS {i18n}>
	<Header />

	<main class="container">
		<slot />
	</main>

	<Footer currentDateOnServer={data.currentDateOnServer} />
	<!-- <GitHubCorner /> -->
</ParaglideJS>
