<script lang="ts">
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	
	interface Props {
		// loaded via .server.ts, markdown content
		data: any;
	}

	let { data }: Props = $props();

	// important: make sure it's reactive for lang switcher
	let renderedHtmlFromMarkdown = $derived(data.mdContent.html);
</script>

<PageHeadSeo titleKey="ClimateJustice" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>
</div>
