<script>
	import { page } from '$app/stores';

	// Mobile menu button was clicked
	// thx to https://linguinecode.com/post/create-a-navbar-in-svelte, modified
	let showMobileMenu = false;
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// TODO: Add ESC key action
	// TODO: Add focustrap
	// TODO: Add click on the outside closes menu
</script>

<nav class="w-full fixed top-0 bg-green-800 text-white px-5 sm:px-0">
	<div class="container mx-auto py-5 flex items-center justify-between">
		<h1>Matthias Andrasch</h1>
		<ul class="hidden md:flex space-x-10 font-bold text-sm">
			<li class="hover:text-gray-500" class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class="hover:text-gray-500">
				<a href="/blog">Blog</a>
			</li>
			<li class="hover:text-gray-500">
				<a href="/blog">Contact</a>
			</li>
		</ul>
		<div class="hidden md:block align-right">
			<!-- TODO use button for a11y-compliance! -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-moon-stars-fill"
				viewBox="0 0 16 16"
			>
				<title>Switch to light or dark mode</title>
				<path
					d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
				/>
				<path
					d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
				/>
			</svg>
		</div>
		<div class="space-y-1 md:hidden">
			<!-- Mobile menu icon and menu list-->
			<button on:click={handleMobileIconClick} class="mt-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					fill="currentColor"
					class="h-8 w-8"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
					/>
				</svg>
			</button>
			<!-- TODO: items are double coded, use variables and render them dynamically -->
			<div
				class:hidden={!showMobileMenu}
				class="bg-indigo-900 absolute left-0 top-0 w-full p-10 space-y-5"
			>
				<ul class="rounded-b-1xl space-y-10 text-white text-center">
					<li class:active={$page.url.pathname === '/'}>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/blog">Contact</a>
					</li>
				</ul>
				<button class="bg-white text-blue-800 w-full py-2 mt-3" on:click={handleMobileIconClick}
					>Close</button
				>
			</div>
			<!-- eo mobile menu-->
		</div>
	</div>
</nav>
