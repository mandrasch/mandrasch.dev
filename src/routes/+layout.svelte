<script>
	import '../css/app.css';
	import Header from './../components/Header.svelte';
	import Footer from './../components/Footer.svelte';
</script>

<Header />

<!-- TODO: Improve this, no custom margin should be needed? Automatic way of doing this? Fill up space with flex or something? -->
<!-- class="mt-[64px] lg:mt-0" was only for header menu-->
<main>
	<slot />
</main>

<Footer />
