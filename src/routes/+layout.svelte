<script lang="ts">
	import '$styles/global.scss';

	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n';

	import GitHubCorner from '$lib/components/GitHubCorner.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>Matthias Andrasch - Web Developer</title>

	<script
		defer
		data-domain="mandrasch.dev"
		src="https://plausible.coolify.mandrasch.dev/js/script.js"
	></script>
</svelte:head>

<ParaglideJS {i18n}>
	<Header />

	<main class="container">
		<slot />
	</main>

	<Footer currentDateOnServer={data.currentDateOnServer} />
	<!-- <GitHubCorner /> -->
</ParaglideJS>
