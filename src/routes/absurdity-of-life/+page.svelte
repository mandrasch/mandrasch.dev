<script lang="ts">
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	let { data } = $props();
	// important: make sure it's reactive for lang switcher
	let renderedHtmlFromMarkdown = $derived(data?.mdContent?.html);
</script>

<PageHeadSeo title="Die Absurdität des Lebens" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>
</div>
