<script lang="ts">
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';
	
	interface Props {
		// loaded via .server.ts
		data: any;
	}

	let { data }: Props = $props();

	// important: make sure it's reactive for lang switcher
	let books = $derived(data.books ?? []);
	let renderedHtmlFromMarkdown = $derived(data?.mdContent?.html ?? '');
</script>

<PageHeadSeo title="Lesen" />

<div class="container-boxed">
	<div class="prose">
		{@html renderedHtmlFromMarkdown}
	</div>

	<div class="books-container">
		{#each books as book}
			<article class="grid-book" id={book.id ? book.id : ''}>
				<a class="title book-link" href={book.link} target="_blank">
					{book.title}
				</a>

				<div class="rating">{book.rating}</div>

				<div class="author">{book.authors}</div>

				{#if book.learning && book.learning != ''}
					<div class="learning">
						Learnings: {@html book.learning}
					</div>
				{/if}
			</article>
		{/each}
	</div>

	<p style="margin-top:1rem;font-size:0.7rem;text-align:center;">
		Page Layout inspired by <a href="https://stefanzweifel.dev/reading/" target="_blank"
			>https://stefanzweifel.dev/reading/</a
		>
	</p>
</div>

<style>
	.container-boxed {
		max-width: 850px;
	}

	.books-container {
		container-type: inline-size;
		container-name: books;
		margin-top: 2rem;
	}

	a.book-link {
		text-decoration: none;
		color: unset;
		display: block;
	}

	a.book-link:hover {
		color: var(--pico-primary);
	}

	.grid-book {
		display: grid;

		column-gap: 0.5rem;
		font-size: 0.75rem;
		line-height: 1.25rem;

		margin-top: 0.25rem;
	}

	@container books (min-width: 450px) {
		article.grid-book {
			grid-template-columns: repeat(9, minmax(0, 1fr));
			padding: 1.2rem;
		}

		.grid-book .title {
			grid-column: span 7 / span 7;
			font-weight: bold;
		}

		.grid-book .rating {
			grid-column: span 2 / span 2;
			justify-self: end;
		}

		.grid-book .author {
			grid-column: span 3 / span 3;
		}

		.grid-book .learning {
			grid-column: span 9 / span 9;
			padding-top: 0.75rem;
			font-size: 0.7rem;
			line-height: 1rem;
			color: #807f7f;
			text-align: justify;
		}
	}

	/* old: */

	article {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;

		padding: 2rem;
		margin-top: 1.5rem;
	}

	/* TODO: Add responsive styling vars */
	@media (min-width: 42rem) {
		article {
			grid-template-columns: 10rem 1fr;
			column-gap: 1rem;
		}
	}

	h3 {
		font-weight: normal;
	}

	.status-wrapper {
		width: auto;
	}

	/*.status {
		display: block;
		width: 100%;
		text-align: center;
		border-radius: 5px;
		padding: 0.25rem 0.5rem;
		font-size: 0.875rem;
	}

	.status.status--read {
		background: lightgreen;
	}

	.status.status--reading {
		background: lightblue;
	}

	.status.status--planned {
		background: lightyellow;
	}*/

	/* style rendered content, but scoped; thx https://stackoverflow.com/a/77502741 */
	.description > :global(p) {
		color: #6d6d6d; /* TODO: use pico css var*/
		font-size: 0.75rem;
		margin-bottom: 0.5rem;
	}
</style>
