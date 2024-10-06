<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import SocialIcons from './SocialIcons.svelte';

	export let currentDateOnServer: String;
</script>

<footer data-theme="dark" id="footer" class="fluid">
	<div class="container">
		<div class="grid">
			<div class="col">
				<p style="text-align:left;">Let's connect!</p>
				<SocialIcons />
			</div>

			<div class="col" style="text-align:left;">
				<div style="color:white;text-align:left;padding-bottom:1rem;">Bonus Pages</div>
				<nav>
					<a href="/green-coding">Green Coding</a>
					<a href="/climate-justice">{m.ClimateJustice()}</a>
					<a href="/absurdity-of-life">{m.AbsurdityOfLife()}</a>
					<a href="/ssr-test">SSR Test</a>
				</nav>
			</div>

			<div class="col" style="align-self:end;">
				<p style="text-align:right;margin-bottom:12px;">
					Made with
					<a href="https://github.com/mandrasch/mandrasch.dev">SvelteKit</a>.
				</p>
				<p style="text-align:right;margin-bottom:12px;">Travelling via Klimaticket Austria.</p>
				<p style="text-align:right;margin-bottom:12px;">
					<a href="https://matthias-andrasch.eu/impressum-datenschutz/">{m.ImprintAndPrivacy()}</a>
				</p>
			</div>

			<div class="col-full timestamp">
				{m.ThisPageWasRenderedOn()}
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
	}

	.col-2 {
		grid-column: span 2;
	}

	.col-full {
		grid-column: span 3;
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
