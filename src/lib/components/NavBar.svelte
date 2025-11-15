<script>
	import { page } from '$app/stores';

		const routes = [
		{
			href: '/ueber-mich',
			label: 'Über mich'
		},
		{
			href: 'https://matthias-andrasch.eu/blog',
			label: 'Blog'
		},
		{
			href: '/projekte',
			label: 'Projekte'
		},
		{
			href: '/schreiben',
			label: 'Schreiben'
		},
		{
			href: '/lesen',
			label: 'Lesen'
		},
		{
			href: '/en',
			label: 'English'
		}
	];
</script>

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
