<script>
	// via vite-imagetools
	import HeroImage from '../images/innsbruck.jpg?w=1920&webp';
	import HeroImage_fallback from '../images/innsbruck.jpg?w=1920&jpg';

	import { Confetti } from 'svelte-confetti';
	import ToggleConfetti from '../lib/ToggleConfetti.svelte';
	import SocialMediaIcons from '../components/SocialMediaIcons.svelte';

	import NotebookImage from '../images/openmoji_1F4D2.svg';
</script>

<!-- TODO: Improve this https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/-->

<section class="lg:h-screen flex flex-column flex-wrap lg:flex-row">
	<div class="basis-full lg:basis-6/12 flex justify-center content-center items-center">
		<div class="prose p-10">
			<!-- TODO: font should be defined in co-->
			<h2 class="font-headings">Hey there!</h2>
			<p>I'm a Web Developer, currently living in Austria. 🇦🇹</p>
			<p>
				As a developer I try to build accessible and robust web experiences by following the "keep
				it simple" approach.
			</p>
			<p>
				My personal interests are climate and social justice. I'm also a huge fan of green mobility
				via
				<a href="https://www.klimaticket.at/en/" target="_blank" rel="noreferrer"
					>Klimaticket Austria</a
				>! 🥰
			</p>

			<p>Connect with me here:</p>

			<SocialMediaIcons />

			<p>or <a href="#more">discover more below.</a></p>
		</div>
	</div>
	<div class="basis-full lg:basis-6/12 lg:max-h-screen">
		<picture class="block max-h-full h-full">
			<source srcset={HeroImage} type="image/webp" />
			<img
				src={HeroImage_fallback}
				alt="Mountains and houses, person standing in front of them"
				class="max-h-full object-cover h-full w-full"
			/>
		</picture>
	</div>
</section>

<!-- TODO: Boxes with Icon(?) and short statements of what i do there, maybe use https://openmoji.org/ ?-->

<div class="container p-10 mx-auto text-center space-y-10 prose ">
	<section class="w-full" id="more">
		<div class="flex align-top">
			<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">
				<img src={NotebookImage} alt="" />My DDEV lab
			</h3>
			<p class="flex-grow text-left">
				Test Test 1 23 Test Test 1 23 Test Test 1 23 Test Test 1 23 Test Test 1 23
			</p>
		</div>
		<div class="flex align-top">
			<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">Sustainable Web Design</h3>
			<p class="flex-grow text-left">
				Test Test 1 23 Test Test 1 23 Test Test 1 23 Test Test 1 23 Test Test 1 23
			</p>
		</div>
	</section>

	<section
		class="w-full rounded-xl py-5"
		style="background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);"
	>
		<a href="https://sustainablewebdesign.org/" target="_blank" rel="noreferrer"
			>Sustainable Web Design</a
		> is a principle I found really important
	</section>

	<section class="w-full">Open Source</section>

	<section class="w-full">
		<ToggleConfetti>
			<button
				class="bg-gradient-to-br from-orange-400 to-rose-400 p-3 rounded text-white"
				slot="label">Alaaf!</button
			>
			<Confetti />
		</ToggleConfetti>
	</section>
</div>
