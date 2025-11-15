<script lang="ts">
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
	let renderedHtmlFromMarkdown = $derived(data?.mdContent?.html ?? '');
</script>

<PageHeadSeo
	title="English Section"
	description="English-only notes and experiments."
	lang="en"
	ogLocale="en_US"
/>

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>

	<p style="margin-top:2rem;">
		Prefer the German version? <a href="/">Zur deutschsprachigen Startseite.</a>
	</p>
</div>
