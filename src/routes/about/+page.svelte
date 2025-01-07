<script lang="ts">
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';


	import HeroImage from '../../images/innsbruck.jpg?w=1920&webp';
	import HeroImage_fallback from '../../images/innsbruck.jpg?w=1920&jpg';
	let { data } = $props();
	let renderedHtmlFromMarkdown = $derived(data?.mdContent?.html ?? ''); // important: make sure it's reactive for lang switcher
</script>

<PageHeadSeo titleKey="About" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>

	<div style="margin-top:3rem">
		<picture>
			<source srcset={HeroImage} type="image/webp" />
			<img
				src={HeroImage_fallback}
				alt="Mountains and houses, person standing in front of them"
				class="max-h-full object-cover h-full w-full"
			/>
		</picture>
	</div>
</div>

<style lang="scss">
	:global(.prose ul li) {
		padding-bottom: 1rem;
	}

	:global(.prose h2, .prose h3) {
		margin-top: 50px;
		margin-bottom: 1.25rem;
	}

	:global(.prose .tags) {
		margin-top: 2rem;
	}
</style>
