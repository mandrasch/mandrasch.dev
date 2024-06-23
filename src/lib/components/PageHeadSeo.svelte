<script lang="ts">
	import { pageTitleBase } from '$lib/store';
	import * as m from '$lib/paraglide/messages.js';

	// export let titleKey: keyof typeof m;
	export let titleKey;

	// Type guard to check if the key exists in m
	function isValidKey(key: string, obj: object): key is keyof typeof m {
		return key in obj;
	}

	// Compute the page title with a fallback if the key doesn't exist
	let pageTitle: string;
	if (isValidKey(titleKey, m)) {
		pageTitle = `${pageTitleBase} - ${m[titleKey]()}`;
	} else {
		pageTitle = pageTitleBase; // or some default value
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
