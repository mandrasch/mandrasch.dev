<script>
	let likes = [
		{
			emoji: '📅',
			title: 'Vier Tage Woche für das Klima (Four-day week for climate)',
			url: 'https://www.oegb.at/themen/arbeitsrecht/arbeitszeit/4-tage-woche-fuer-das-klima'
		},
		{
			emoji: '⛰️',
			title: 'Klimaticket 🇦🇹 & Bahn zum Berg',
			url: 'https://www.bahn-zum-berg.at/'
		},
		{
			emoji: '👩‍🎓',
			title: 'ArbeiterKind.de - Für alle, die als Erste in ihrer Familie studieren',
			url: 'https://arbeiterkind.de/'
		},
		{
			emoji: '🚆',
			title: 'Loving the atmosphere - ökologische Geschäftsreisen',
			url: 'https://lovingtheatmosphere.org/'
		},
		{
			emoji: '👪',
			title: 'Mein Grundeinkommen',
			url: 'https://www.mein-grundeinkommen.de/'
		},
		{
			emoji: '📚💻',
			title: 'Öffentliches Geld, öffentliches Gut (Public money, public good)',
			url: 'https://www.wikimedia.de/oeffentliches-gut/'
		},
		{
			emoji: '🏛️',
			title: 'Open Access & Open Science',
			url: 'https://irights.info/artikel/was-open-access-bewirkt-und-worauf-autorinnen-achten-sollten/30911'
		},
		{
			emoji: '💡',
			title: 'P-L-U-R-V (F-L-I-C-C)',
			url: 'https://www.klimafakten.de/meldung/p-l-u-r-v-dies-sind-die-haeufigsten-desinformations-tricks-von-wissenschafts-leugnern'
		}
	];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
	{#each likes as like}
		<a href={like.url} class="no-underline h-full ">
			<div
				class="h-full py-4 px-8 bg-white shadow-lg rounded-lg mb-5  text-center hover:bg-green-200"
			>
				<div>
					{like.emoji} <br />

					{like.title}
				</div>
			</div>
		</a>
	{/each}
</div>
