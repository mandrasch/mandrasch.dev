<script>
	import '../css/app.css';
	import Header from './../components/Header.svelte';
</script>

<Header />

<!-- TODO: Improve this, no custom margin should be needed -->
<main style="margin-top:64px;">
	<slot />
</main>
