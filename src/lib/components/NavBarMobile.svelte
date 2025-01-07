<script>
	import * as m from '$lib/paraglide/messages.js';

	import LanguageSwitch from './LanguageSwitch.svelte';
	import { page } from '$app/stores';

	// TODO: move to store, doube-coded
	// Route slug translations can be found in i18n.js
	const routes = [
		{
			href: '/about', // path name will be translated via src/lib/i18n.js
			label: m.About()
		},
		{
			href: '/projects', // path name will be translated via src/lib/i18n.js
			label: m.Projects()
		},
		{
			href: '/writing',
			label: m.Writing()
		},
		{
			href: '/reading',
			label: m.Reading()
		}
		/*{
			href: '/ideas', // TODO: add screenreadthis
			label: 'Ideas' // TODO: translate
		},*/
	];

	/* Fork of https://svelte.dev/repl/c94eebb874584f2fb62c0303738b7509?version=3.42.4, thx! */
	import { fly, scale } from 'svelte/transition';
	import { quadOut, cubicOut } from 'svelte/easing';

	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<!-- TODO: translate -->
<button class="hamburger" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		fill="currentColor"
		class="bi bi-list"
		viewBox="0 0 16 16"
	>
		<path
			fill-rule="evenodd"
			d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
		/>
	</svg> Menü
</button>

{#if isOpen}
	<nav
		in:fly={{ y: -15, duration: 250, easing: cubicOut }}
		out:fly={{ y: -15, duration: 200, easing: cubicOut }}
	>
		<ul>
			{#each routes as route, i}
				<li>
					<a
						class={`button ${$page.route.id === route.href ? 'selected' : ''}`}
						aria-current={$page.route.id === route.href ? 'page' : undefined}
						href={route.href}
						onclick={toggleMenu}
					>
						{route.label}
					</a>
				</li>
			{/each}
			<li>|</li>
			<li>
				<LanguageSwitch reduced={true} />
			</li>
		</ul>
		<div class="bar" transition:scale={{ duration: 200, easing: quadOut, start: 1.2 }}></div>
	</nav>
{/if}

<style>
	nav,
	nav ul {
		flex-direction: column;
	}

	.hamburger {
		margin-top: 0.5rem;
		cursor: pointer;
		color: var(--pico-primary-background);
		background: none;
		border: none;
	}

	.menu {
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		padding: 1em;
		padding-top: 0;
		color: #eef;

		background: #1d1d2f;
	}

	p {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}

	p:hover {
		text-decoration: underline;
	}

	.bar {
		border-style: solid;
		border-color: white;
		border-width: 1px;
		height: 0;
	}
</style>
