<script lang="ts">
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	let { data } = $props();
	let renderedHtmlFromMarkdown = $derived(data?.mdContent?.html ?? '');
</script>

<PageHeadSeo title="Schreiben" />

<div class="container-boxed">
	<div class="prose writing">
		{@html renderedHtmlFromMarkdown}
	</div>
</div>

<style>
	:global(.prose.writing a) {
		text-decoration: none;
	}
	:global(.prose.writing a h2) {
		color: var(--pico-primary);
	}

	:global(.prose.writing h2) {
		font-size: 1.2rem;
	}

	:global(.prose.writing article p) {
		font-size: 0.8rem;
	}
</style>
