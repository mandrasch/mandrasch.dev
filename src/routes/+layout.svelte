<script>
	import '../css/app.css';
	import Header from './../components/Header.svelte';
	import Footer from './../components/Footer.svelte';
</script>

<svelte:head>
	<script defer data-domain="mandrasch.dev" src="https://plausible.coolify.mandrasch.dev/js/script.js"></script>
</svelte:head>

<!-- <Header /> -->

<main>
	<slot />
</main>

<Footer />
