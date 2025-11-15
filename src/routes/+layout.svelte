<script lang="ts">
	import '$styles/global.scss';

	import { pageTitleBase } from '$lib/store';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import type { LayoutData } from './$types';
	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<svelte:head>
	<title>{pageTitleBase}</title>

	<link rel="icon" href="/favicon-150x150.jpeg" sizes="32x32" />
	<link rel="icon" href="/favicon-300x300.jpeg" sizes="192x192" />
	<link rel="apple-touch-icon" href="/favicon-300x300.jpeg" />
	<meta name="msapplication-TileImage" content="/favicon-300x300.jpeg" />
</svelte:head>

<Header />

<main class="container">
	{@render children?.()}
</main>

<Footer currentDateOnServer={data.currentDateOnServer} />
<!-- <GitHubCorner /> -->
