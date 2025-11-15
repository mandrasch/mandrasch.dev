<script lang="ts">
	import SocialIcons from './SocialIcons.svelte';

	interface Props {
		currentDateOnServer: String;
	}

	let { currentDateOnServer }: Props = $props();
</script>

<footer data-theme="dark" id="footer" class="fluid">
	<div class="container">
		<div class="grid">
			<div class="col">
				<p style="text-align:left;">Lass uns vernetzen!</p>
				<SocialIcons />
			</div>

			<div class="col" style="text-align:left;">
				<div style="color:white;text-align:left;padding-bottom:1rem;">Bonus-Seiten</div>
				<nav>
					<a href="/green-coding">Green Coding</a>
					<a href="/klimagerechtigkeit">Klimagerechtigkeit</a>
					<a href="/absurdität-des-lebens">Die Absurdität des Lebens</a>
					<!-- <a href="/ssr-test">SSR Test</a>-->
				</nav>
			</div>

			<div class="col" style="align-self:end;">
				<p style="text-align:right;margin-bottom:12px;">
					Made with SvelteKit (<a href="https://github.com/mandrasch/mandrasch.dev">Source</a>).
				</p>
				<p style="text-align:right;margin-bottom:12px;">Travelling via Klimaticket Austria.</p>
				<p style="text-align:right;margin-bottom:12px;">
					<a href="https://matthias-andrasch.eu/impressum-datenschutz/">Impressum & Datenschutz</a>
				</p>
			</div>

			<div class="col-full timestamp">
				Diese Seite wurde generiert am
				{currentDateOnServer}.
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		text-align: center;
		border-top: 1px solid #999;
		background-color: var(--pico-primary-background);
		font-size: 0.9rem;

		container-type: inline-size;
		container-name: footer;
	}
	/* .container-fluid was overriden by #root > footer (id has higher specifity) */
	:global(#root > #footer.fluid) {
		width: 100%;
		max-width: 100%;
		margin: 7.5rem auto 0;
		padding-right: var(--pico-spacing);
		padding-left: var(--pico-spacing);
	}

	footer a {
		color: white;
	}
	footer p {
		color: white;
	}

	.container {
		padding-top: 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 2rem;
		row-gap: 3rem;

		@container footer (width <= 40rem) {
			grid-template-columns: 1fr;
		}
	}

	.col-2 {
		grid-column: span 2;
		@container footer (width <= 40rem) {
			grid-column: initial;
		}
	}

	.col-full {
		grid-column: span 3;
		@container footer (width <= 40rem) {
			grid-column: initial;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: left;
	}

	.timestamp {
		color: white;
		font-size: 0.7rem;
	}
</style>
