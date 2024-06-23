<script>
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	// loaded via .server.ts, markdown content
	export let data;

	// important: make sure it's reactive for lang switcher
	$: renderedHtmlFromMarkdown = data.mdContent.html;
</script>

<PageHeadSeo titleKey="ClimateJustice" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>
</div>
