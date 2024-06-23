<script>
	import * as m from '$lib/paraglide/messages.js';

	export let reduced = false;

	// Thx to https://github.com/LorisSigrist/paraglide-sveltekit-example
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	/**
	 * @param { import("$lib/paraglide/runtime").AvailableLanguageTag } newLanguage
	 */
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route(get(page).url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		console.log('Trying to switch to ', { localisedPath });
		goto(localisedPath);
	}

	const labels = {
		en: 'English',
		de: 'Deutsch'
	};

	const reducedLabels = {
		en: 'en',
		de: 'de'
	};
</script>

<div class="languageSwitcher">
	{#if reduced}
		{#each availableLanguageTags as langTag}
			<a
				href="javascript:void(0)"
				on:click={() => switchToLanguage(langTag)}
				class:selected={languageTag() === langTag}
			>
				{reducedLabels[langTag]}
			</a>
		{/each}
	{:else}
		{#each availableLanguageTags as langTag}
			<a
				href="javascript:void(0)"
				on:click={() => switchToLanguage(langTag)}
				class:selected={languageTag() === langTag}
			>
				{labels[langTag]}
			</a>
		{/each}
	{/if}
</div>

<style>
	.languageSwitcher {
		display: flex;
		gap: 0.5rem;
	}

	a {
		font-size: 0.9rem;
		text-decoration: none;
		cursor: pointer;
	}

	a.selected {
		font-weight: bold;
		text-decoration: underline;
	}
</style>
