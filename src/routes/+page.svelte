<script>
	// via vite-imagetools
	import HeroImage from '../images/innsbruck.jpg?w=1920&webp';
	import HeroImage_fallback from '../images/innsbruck.jpg?w=1920&jpg';

	import { Confetti } from 'svelte-confetti';
	import ToggleConfetti from '../lib/ToggleConfetti.svelte';
	import SocialMediaIcons from '../components/SocialMediaIcons.svelte';
</script>

<!-- TODO: Improve this https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/-->

<section class="lg:h-screen flex flex-column flex-wrap lg:flex-row">
	<div class="basis-full lg:basis-6/12 flex justify-center content-center items-center">
		<div class="prose p-10">
			<h2>Hey there!</h2>
			<p>I'm a Web Developer, currently living in Austria. 🇦🇹</p>
			<p>
				As a developer I try to build minimalistic, accessible and robust web experiences. I'm
				keenly interested in
				<a href="https://sustainablewebdesign.org/" target="_blank" rel="noreferrer"
					>Sustainable Web Design</a
				>
				and climate justice in general.
			</p>
			<p>
				Big fan of Open Source and
				<a href="https://www.klimaticket.at/en/" target="_blank" rel="noreferrer"
					>Klimaticket Austria</a
				>. 🥰
			</p>

			<SocialMediaIcons />

			<div class="mt-20">
				<ToggleConfetti>
					<button
						class="bg-gradient-to-br from-orange-400 to-rose-400 p-3 rounded text-white"
						slot="label">Alaaf!</button
					>
					<Confetti />
				</ToggleConfetti>
			</div>
		</div>
	</div>
	<div class="basis-full lg:basis-6/12 lg:max-h-screen">
		<picture class="block max-h-full h-ful">
			<source srcset={HeroImage} type="image/webp" />
			<img
				src={HeroImage_fallback}
				alt="Mountains and houses, person standing in front of them"
				class="max-h-full object-cover h-full w-full"
			/>
		</picture>
	</div>
</section>

<section class="prose">
	<h3>My DDEV lab</h3>
</section>
