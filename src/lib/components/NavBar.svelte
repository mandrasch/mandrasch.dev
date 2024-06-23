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
</script>

<!-- https://github.com/LorisSigrist/paraglide-sveltekit-example/blob/main/src/lib/ui/Header.svelte -->

<nav>
	<ul>
		{#each routes as route}
			<li>
				<a
					class={`button ${$page.route.id === route.href ? 'selected' : ''}`}
					aria-current={$page.route.id === route.href ? 'page' : undefined}
					href={route.href}>{route.label}</a
				>
			</li>
		{/each}
		<li>|</li>
		<li>
			<LanguageSwitch reduced={true} />
		</li>
	</ul>
</nav>

<style lang="scss">
	nav ul {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		font-size: 0.9rem;
	}

	a.selected {
		font-weight: bold;
		text-decoration: underline;
	}

	/* TODO: use css var */
	@container header (width <= 40rem) {
		nav {
			justify-content: center;
			margin-top: 1rem;
		}
		nav ul {
			gap: 0.2rem;
			justify-content: center;
			li {
				padding: 0.2rem var(--pico-nav-element-spacing-horizontal);
			}
		}
	}
</style>
