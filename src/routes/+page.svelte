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
			<h2 class="font-headings text-2xl">Matthias Andrasch</h2>
			<p>Hey, there! My name is Matthias and I work as a Web Developer.</p>
			<p>
				As a developer I try to build accessible and robust web experiences by following the "keep
				it simple"-approach.
			</p>
			<p>
				My personal interests are climate and social justice. I am devastated about the current
				state of the climate emergency and the <a
					href="https://www.theguardian.com/environment/2022/oct/27/world-close-to-irreversible-climate-breakdown-warn-major-studies"
					>insufficient responses</a
				> to it - threatening the well-being of future generations.
			</p>
			<p>
				I'm a huge fan of green mobility via
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
			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 bg-green-200 px-2 py-2 shadow-sm inline-block"
			>
				Currently:
			</h3>
			<p>
				Working at the web agency <a href="https://markensinn.at/">gugler* MarkenSinn</a> in St.
				Pölten, capital of Lower Austria. The team of MarkenSinn commited itself to build accessible
				and sustainable web site experiences. <br />MarkenSinn is a member of
				<a href="https://waca.at/">WACA Austria</a> and integrates
				<a href="https://sustainablewebdesign.org/">Sustainable Web Design</a> principles.
			</p>
			<p>
				The parent company <a href="https://gugler.at">gugler*</a> is a cradle to cradle printing
				company and takes part in the
				<a href="https://ecogood.org">economy for the common good</a> movement.
			</p>
			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 bg-green-200 px-2 py-2 shadow-sm inline-block mt-5"
			>
				Experiences so far:
			</h3>
			<ul>
				<li>Grown up in the mountainless parts of Eastern Germany</li>
				<li>
					Apprenticeship as IT-Specialist in software development (Fachinformatiker/in für
					Anwendungsentwicklung), Berlin
				</li>
				<li>Bachelor of Arts Media Education, University Magdeburg</li>
				<li>
					Moved to Cologne - <ToggleConfetti>
						<button class="underline" slot="label">Alaaf!</button>
						<Confetti />
					</ToggleConfetti>
				</li>
				<ul>
					<li>
						Master of Arts in the field of Media Pedagogy, Social Work and Management (MAPAM), TH
						Köln.
					</li>
					<li>
						Scientific employee in the field of Open Educational Resources (OER) and media education
						at University Cologne and TH Köln.
					</li>
				</ul>

				<li>Moved to Vienna, Austria</li>
			</ul>

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 bg-green-200 px-2 py-2 shadow-sm inline-block mt-5"
			>
				Open Source activities:
			</h3>
			<p>
				I enjoy blogging, learning and discussing demo projects out in the open with others. Follow
				me on <a href="https://github.com/mandrasch">Github</a> and
				<a href="https://dev.to/mandrasch/">dev.to</a> for latest updates.
			</p>
			<div class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5">
				<div>
					<h4 class="font-headings text-gray-800 font-semibold">My DDEV lab</h4>
					<p class="mt-2 text-gray-600">
						DDEV is an open source swiss army knife for PHP development and runs on all operating
						systems. This is my personal notebook for working with DDEV:
					</p>
				</div>
				<div class="flex justify-end mt-4">
					<a href="https://my-ddev-lab.mandrasch.eu/" class="underline">my-ddev-lab.mandrasch.eu</a>
				</div>
			</div>

			<div class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5">
				<div>
					<h4 class="font-headings text-gray-800 font-semibold">DDEV pull WordPress generator</h4>
					<p class="mt-2 text-gray-600">
						Online generator to help with the creation of DDEV pull scripts for WordPress, developed
						with SvelteKit.
					</p>
				</div>
				<div class="flex justify-end mt-4">
					<a href="https://ddev-pull-wp.mandrasch.eu/" class="underline"
						>ddev-pull-wp.mandrasch.eu</a
					>
				</div>
			</div>

			<div class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5">
				<div>
					<h4 class="font-headings text-gray-800 font-semibold">
						Eleventy plain Bootstrap5 starter
					</h4>
					<p class="mt-2 text-gray-600">
						Bootstrap starter theme for static site generator Eleventy/11ty.
					</p>
				</div>
				<div class="flex justify-end mt-4">
					<a href="https://github.com/mandrasch/11ty-plain-bootstrap5" class="underline"
						>github.com/mandrasch/11ty-plain-bootstrap5</a
					>
				</div>
			</div>

			<div class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5">
				<div>
					<h4 class="font-headings text-gray-800 font-semibold">Klimakrise Schnelldurchlauf</h4>
					<p class="mt-2 text-gray-600">Educational one pager about the climate emergency.</p>
				</div>
				<div class="flex justify-end mt-4">
					<a href="https://klimakrise-schnelldurchlauf.mandrasch.eu/" class="underline"
						>klimakrise-schnelldurchlauf.mandrasch.eu</a
					>
				</div>
			</div>

			<div class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5">
				<div>
					<h4 class="font-headings text-gray-800 font-semibold">OERhörnchen</h4>
					<p class="mt-2 text-gray-600">
						Tiny web project to help with the discovery of Open Educational Resources (OER),
						developed with Eleventy/11ty.
					</p>
				</div>
				<div class="flex justify-end mt-4">
					<a href="https://oerhoernchen.de/" class="underline">oerhoernchen.de</a>
				</div>
			</div>
		</section>

		<section>
			<h2>Likes</h2>
		</section>
	</div>
</div>
