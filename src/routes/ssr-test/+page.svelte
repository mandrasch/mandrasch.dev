<script>
	/** @type {import('./$types').PageData} */
	export let data; // retrieved from server
</script>

<!-- see console output-->
{@debug data}

<div class="container mx-auto prose">
	<div class="flex flex-col space-y-2">
		<h2>Users (SSR test)</h2>

		<p>
			This data is fetched from <a
				class="underline"
				href="https://jsonplaceholder.typicode.com/users">jsonplaceholder.typicode.com/users</a
			>, but server side. If I hadn't told you, you would have no access to this information / URL
			via dev tools.
		</p>

		<ul>
			{#each data.users as user}
				<li>{user.name}</li>
			{/each}
		</ul>
	</div>
</div>
