<script>
	import * as m from '$lib/paraglide/messages.js';
	import PageHeadSeo from '$lib/components/PageHeadSeo.svelte';

	import profilePic from '$assets/profile_picture_transparent.png?enhanced';

	// Dynamic markdown loading based on selected language (via +page.server.js)
	export let data;
	// important: make sure it's reactive for lang switcher
	$: renderedHtmlFromMarkdown = data?.mdContent?.html || '';
	// debug received data via:
	// console.log({ data });
</script>

<svelte:head>
	<title>Matthias Andrasch 💻 🌱</title>
	<meta
		name="description"
		content="Web Developer, interested in Green Web and Climate Justice. Working with tools like Craft CMS, Svelte(Kit) and DDEV."
	/>
</svelte:head>

<!-- TODO: Refactor into component -->
<div class="grid-container">
	<!-- TODO: Add avatar -->
	<section class="intro featured">
		<div class="profilePic">
			<div class="profilePic-wrapper">
				<enhanced:img src={profilePic} alt="" />
			</div>
			<!-- TODO: implement later :) <button class="button">Remix </button>-->
		</div>

		<div class="content">
			{@html renderedHtmlFromMarkdown}
		</div>
	</section>

	<!-- TODO: translate sections-->
	<section>
		<a href="/projects"><h2>{m.Projects()}</h2></a>
		<p>{m.ProjectsTeaser()}</p>
	</section>

	<section>
		<a href="/writing"><h2>{m.Writing()}</h2></a>
		<p>
			{m.WritingTeaser()}
		</p>
	</section>

	<section>
		<a href="/reading"><h2>{m.Reading()}</h2></a>
		<p>{m.ReadingTeaser()}</p>
	</section>

	<section class="featured tags">
		<!-- TODO: Move to own component -->
		<h2>Tagcloud</h2>
		<div class="tags">
			<!-- <span>Full Stack Web Development</span> -->
			<span>JavaScript</span>
			<span>Svelte(Kit)</span>
			<span>PHP</span>
			<span>CraftCMS</span>
			<span>DDEV</span>
			<span>HTML5</span>
			<span>CSS3</span>
			<span>Web Accessibility</span>
			<span>WordPress</span>
			<span>Tailwind</span>
			<span>Vite</span>
			<span>SSG / SSR</span>
			<span>Coolify</span>
			<span>🌱 Green Coding</span>
			<span>Green Web</span>
			<span>Developer Experience</span>
			<span>Open Source</span>
			<span>Climate Justice</span>
			<span>Social Innovation</span>
			<span>4 Day Work Week</span>
			<span>UBI</span>
			<span><s>Running &amp; Sports</s> Recovery 🤕</span>
			<span>Mindfulness</span>
			<span>Mental Health</span>
			<span>Climate Emotions</span>
			<span>🏠 Vienna</span>
			<span>🚞 Klimaticket</span>
		</div>
	</section>
</div>

<style>
	/* simple grid with 3 cols */
	.grid-container {
		display: grid;
		justify-content: center;

		/* desktop settings */
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.75rem;
		row-gap: 3.25rem;
		margin-top: 3.5rem;
	}

	/* mobile settings */
	@media (max-width: 48rem) {
		.grid-container {
			row-gap: 1.75rem;
			grid-template-columns: 1fr;
		}
	}

	.intro {
		display: grid;
		justify-content: center;
		/* mobile settings */
		grid-template-columns: 1fr;
		gap: 2.35rem;
		line-height: 1.75rem;
	}

	@media (min-width: 48rem) {
		.intro {
			/* desktop settings */
			grid-template-columns: 15rem 1fr;
		}
	}

	.intro picture {
		max-width: 100%;
		width: 100%;
	}

	.intro picture img {
		max-width: 15rem;
		width: 100%;
		aspect-ratio: 1;
		height: auto;
	}

	@media (min-width: 48rem) {
		section.featured {
			/* desktop settings */
			grid-column: span 3;
		}
	}

	h1 > .subtitle {
		font-size: 0.9rem;
		font-weight: 400;
	}

	/* https://codepen.io/P1N2O/pen/pyBNzX */
	.profilePic-wrapper {
		background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
		background-size: 300% 300%;
		/*animation: gradient 7s ease infinite;*/
		height: auto;
		width: 100%;
	}

	@media (prefers-reduced-motion) {
		.profilePic-wrapper {
			animation: none;
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	section.tags > h2 {
		margin-bottom: 2rem;
	}

	.tags > span {
		pointer-events: none;
		background-color: #f5f6fa; /* #eff4ff;*/
		border: none;
		color: var(--secondary); /* #2557d6; */
		padding: 5px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		margin-right: 13px;
		margin-left: -1px;
		margin-bottom: 10px;
		border-radius: 100px;
	}
</style>
