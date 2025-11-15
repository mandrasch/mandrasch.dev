<script lang="ts">
	import { pageTitleBase } from '$lib/store';

	interface Props {
		title: string;
		description?: string;
		lang?: string;
		ogLocale?: string;
	}

	let { title, description = '', lang = 'de', ogLocale }: Props = $props();

	const pageTitle = title ? `${pageTitleBase} - ${title}` : pageTitleBase;
	const resolvedLocale = ogLocale ?? (lang === 'en' ? 'en_US' : 'de_AT');
</script>

<svelte:head>
	<title>{pageTitle}</title>
	{#if description !== ''}
		<meta name="description" content={description} />
	{/if}
	<meta http-equiv="content-language" content={lang} />
	<meta property="og:locale" content={resolvedLocale} />
</svelte:head>
