<script lang="ts">
	

	// Import Skill Icons
	import DevTo from 'virtual:icons/skill-icons/devto-dark';
	import GitHub from 'virtual:icons/skill-icons/github-dark';
	import LinkedIn from 'virtual:icons/skill-icons/linkedin';
	import Mastodon from 'virtual:icons/skill-icons/mastodon-light';
	import Instagram from 'virtual:icons/skill-icons/instagram';
	import Twitter from 'virtual:icons/skill-icons/twitter';
	interface Props {
		// Default colors for the icons
		primaryComponentColor?: string;
		hoverComponentColor?: string;
	}

	let { primaryComponentColor = 'white', hoverComponentColor = 'var(--primary)' }: Props = $props();
</script>

<div
	class="icons"
	style="--primaryComponentColor:{primaryComponentColor};--hoverComponentColor:{hoverComponentColor}"
>
	<a
		href="https://github.com/mandrasch"
		aria-label="GitHub"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<GitHub />
		</div>
		GitHub
	</a>

	<a
		href="https://www.linkedin.com/in/mandrasch/"
		aria-label="Linkedin"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<LinkedIn />
		</div>
		LinkedIn
	</a>

	<a
		href="https://twitter.com/m_andrasch"
		aria-label="Twitter"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<Twitter />
		</div>
		Twitter
	</a>

	<a
		href="https://social.tchncs.de/@mandrasch"
		aria-label="Mastodon"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<Mastodon />
		</div>
		Mastodon
	</a>

	<a href="https://dev.to/mandrasch" aria-label="dev.to" target="_blank" rel="noopener noreferrer">
		<div class="icon">
			<DevTo />
		</div>
		dev.to
	</a>

	<a
		href="https://instagram.com/workwhileclimate"
		aria-label="Instagram"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<Instagram />
		</div>
		Instagram
	</a>
</div>

<style>
	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		flex-wrap: wrap;
		flex-direction: column;
	}

	a {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 1rem;
		color: white;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		font-size: 1rem;
		color: var(--primaryComponentColor);
	}
	.icon:hover {
		color: var(--hoverComponentColor);
	}
</style>
