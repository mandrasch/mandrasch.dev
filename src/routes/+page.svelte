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

<section class="bg-sky-200 text-black w-full py-5 text-center">
	🚧 This site is work in progress. <a href="/ssr-test" class="underline">Test SSR</a> 🚧
</section>

<section class="lg:h-screen flex flex-column flex-wrap lg:flex-row">
	<div class="basis-full lg:basis-6/12 flex justify-center content-center items-center">
		<div class="prose p-10">
			<!-- TODO: font should be defined in co-->
			<h2 class="font-headings text-2xl">Hey there!</h2>
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
<div class=" bg-slate-100">
	<div class="container p-10 mx-auto space-y-10 prose">
		<section class="w-full" id="more">
			<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">Currently</h3>
			<p class="text-justify">
				Working at the web agency <a href="https://markensinn.at/">gugler* MarkenSinn</a> in St.
				Pölten, Lower Austria. The team of MarkenSinn commited itself to build accessible and
				sustainable web sites for everyone.<br />
				The parent company gugler* is a cradle to cradle printing company and takes part in the
				<a href="https://ecogood.org">economy for the common good</a> movement.
			</p>

			<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">The journey so far</h3>
			<ul>
				<li>
					Scientific employee in the field of Open Educational Resources (OER) and media education
					at University Cologne and TH Köln.
				</li>
				<li>
					Master of Arts in the field of Media Pedagogy, Social Work and Management (MAPAM), TH
					Köln. <ToggleConfetti>
						<button class="underline" slot="label">Alaaf!</button>
						<Confetti />
					</ToggleConfetti>
				</li>
				<li>Bachelor of Arts Media Education, University Magdeburg</li>
				<li>
					Apprenticeship as IT-Specialist in software development (Fachinformatiker/in für
					Anwendungsentwicklung), Berlin
				</li>
			</ul>

			<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">Open Source activities</h3>
			<p>
				I enjoy blogging, learning and sharing demo projects out in the open. Sharing is caring.
			</p>
		</section>

		<section class="w-full">
			<div class="flex align-top">
				<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">My DDEV lab</h3>
				<p class="flex-grow text-left">
					DDEV is an open source swiss army knife for PHP development and runs on all operating
					systems. "My DDEV lab" is my personal notebook:
					<br />
					<a href="https://my-ddev-lab.mandrasch.eu/" class="underline">my-ddev-lab.mandrasch.eu</a>
				</p>
			</div>
			<div class="flex align-top">
				<h3 class="text-left font-headings mt-0 pr-4 basis-5/12">Sustainable Web Design</h3>
				<p class="flex-grow text-left">
					Test Test 1 23 Test Test 1 23 Test Test 1 23 Test Test 1 23 Test Test 1 23
				</p>
			</div>
		</section>

		<div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
			<div>
				<h4 class="font-headings text-gray-800 font-semibold">My DDEV lab</h4>
				<p class="mt-2 text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea
					doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a
					veritatis pariatur minus consequuntur!
				</p>
			</div>
			<div class="flex justify-end mt-4">
				<a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
			</div>
		</div>

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
</div>
