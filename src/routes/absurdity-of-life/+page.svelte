<script>
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	export let data; // loaded via .server.ts, markdown content
	// important: make sure it's reactive for lang switcher
	$: renderedHtmlFromMarkdown = data?.mdContent?.html;
</script>

<PageHeadSeo titleKey="AbsurdityOfLife" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>
</div>
