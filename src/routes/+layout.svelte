<script>
	import '../css/app.css';
	import Header from './../components/Header.svelte';
</script>

<Header />

<!-- TODO: Improve this, no custom margin should be needed? Automatic way of doing this? Fill up space with flex or something? -->
<main class="mt-[64px] lg:mt-0">
	<slot />
</main>
