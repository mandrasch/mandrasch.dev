<script>
	import { onMount } from 'svelte';

	import NavBar from '$lib/components/NavBar.svelte';
	import NavBarMobile from './NavBarMobile.svelte';

	// TODO: rather use container queries in a cool way?
	let isMobile = $state(false);
	function checkScreenWidth() {
		isMobile = window.innerWidth < 640;
	}
	onMount(() => {
		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);
		return () => window.removeEventListener('resize', checkScreenWidth);
	});
</script>

<header>
	<div class="container">
		<h1 class="siteTitle">
			<a href="/">Matthias Andrasch</a>
			<span class="subline small">Web Developer & Hobby Blogger</span>
		</h1>

		{#if !isMobile}
			<NavBar />
		{:else}
			<NavBarMobile />
		{/if}
	</div>
</header>

<style lang="scss">
	header {
		/*background-color: var(--pico-primary-background);*/
		container-type: inline-size;
		container-name: header;
	}

	header > .container {
		display: flex;
		justify-content: space-between;
	}

	a {
		/*color: var(--pico-contrast-inverse);*/
	}

	.siteTitle {
		font-size: 1rem;
		font-weight: normal;
		display: flex;
		flex-direction: column;
		justify-content: center;

		margin-bottom: 0;
	}

	.siteTitle a {
		text-decoration: none;
	}
	span.subline {
		display: block;
		font-size: 0.75rem;
		padding-top: 0.25rem;
	}

	/* TODO: use css var */
	@container header (width <= 40rem) {
		header > .container {
			display: flex;
			flex-direction: column;
			justify-content: center;

			.siteTitle {
				text-align: center;
			}
		}
	}
</style>
