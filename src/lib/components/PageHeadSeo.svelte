<script lang="ts">
	import { pageTitleBase } from '$lib/store';
	import * as m from '$lib/paraglide/messages.js';

	
	interface Props {
		// export let titleKey: keyof typeof m;
		titleKey: any;
		descriptionKey?: string;
	}

	let { titleKey, descriptionKey = '' }: Props = $props();

	// Type guard to check if the key exists in m
	function isValidKey(key: string, obj: object): key is keyof typeof m {
		return key in obj;
	}

	// Compute the page title with a fallback if the key doesn't exist
	let pageTitle: string = $state();

	if (isValidKey(titleKey, m)) {
		pageTitle = `${pageTitleBase} - ${m[titleKey]()}`;
	} else {
		pageTitle = pageTitleBase; // or some default value
	}

	let pageDescription: string = $state('');
	if (descriptionKey != '' && isValidKey(descriptionKey, m)) {
		pageDescription = `${m[descriptionKey]()}`;
	} else {
		pageDescription = ''; // or some default value
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	{#if pageDescription != ''}
		<meta name="description" content={pageDescription} />
	{/if}
</svelte:head>
