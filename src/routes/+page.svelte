<script>
	// via vite-imagetools
	import HeroImage from '../images/innsbruck.jpg?w=1920&webp';
	import HeroImage_fallback from '../images/innsbruck.jpg?w=1920&jpg';

	import { Confetti } from 'svelte-confetti';
	import ToggleConfetti from '../lib/ToggleConfetti.svelte';
	import SocialMediaIcons from '../components/SocialMediaIcons.svelte';

	import MasonryLikes from '../components/MasonryLikes.svelte';
</script>

<svelte:head>
	<title>Matthias Andrasch - web developer</title>
</svelte:head>

<section class="lg:h-screen flex flex-column flex-wrap lg:flex-row">
	<div class="basis-full lg:basis-6/12 flex justify-center content-center items-center">
		<div class="prose p-10">
			<!-- TODO: font should be defined in co-->
			<h2 class="font-headings text-2xl">Matthias Andrasch</h2>
			<p>Hey, there!</p>
			<p>
				<!--As a developer--> I'm a Web Developer. My main goal is to build accessible and robust web
				experiences by following the "keep it simple"-approach.
			</p>
			<p>
				My personal interests are climate and social justice. I am devastated about the current
				state of the climate emergency - which is massively threatening the well being of future
				generations. <!-- and the <a
					href="https://www.theguardian.com/environment/2022/oct/27/world-close-to-irreversible-climate-breakdown-warn-major-studies"
					>insufficient responses</a
				> to it - threatening the well-being of future generations.-->
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
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Currently:
			</h3>
			<p>
				In my personal time I enjoy blogging, learning and discussing web development approaches in
				the field of Open Source. Sports-wise I like to go jogging, recently discovered trail
				running as well.
			</p>
			<p>
				My current job is at the web agency <a href="https://markensinn.at/">gugler* MarkenSinn</a>
				in St. Pölten. The team of MarkenSinn commited itself to build accessible and sustainable
				web experiences. The company takes part in
				<a href="https://ecogood.org">economy for the common good</a>.
			</p>

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Development topics:
			</h3>
			<p class="text-justify">
				SvelteKit • VanillaJS • CSS3 • WordPress • typo3 • Laravel • CraftCMS • Bootstrap •
				TailwindCSS • Eleventy • HeadlessCMS • JamStack • Accessibility (a11y) • Sustainable Web
				Design • Gitpod • Ionic • Vite • DDEV • NodeJS • WCAG
			</p>
			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2  px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Green Mobility:
			</h3>
			<p>
				<!-- I'm a --> Huge fan of green mobility via
				<a href="https://www.klimaticket.at/en/" target="_blank" rel="noreferrer"
					>Klimaticket Austria</a
				>! 🥰
			</p>
			<p>
				Want to go for trip? Check <a href="https://www.zuugle.at/">Zuugle</a>,
				<a href="https://bahnzumberg.at">Bahn zum Berg</a> & more.
			</p>

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2  px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Stations of life:
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
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Open Source activities:
			</h3>
			<p>
				I enjoy blogging, learning and discussing demo projects out in the open with others. Follow
				me on <a href="https://github.com/mandrasch">Github</a>,
				<a href="https://twitter.com/m_andrasch">Twitter</a>
				and
				<a href="https://dev.to/mandrasch/">dev.to</a> for latest updates.
			</p>
			<a
				href="https://my-ddev-lab.mandrasch.eu/"
				class="no-underline"
				target="_blank"
				rel="noreferrer"
			>
				<div
					class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5 hover:bg-gradient-to-r from-teal-200 to-lime-200"
				>
					<div>
						<h4 class="font-headings text-gray-800 font-semibold">My DDEV lab</h4>
						<p class="mt-2 text-gray-600">
							DDEV is an open source swiss army knife for PHP development and runs on all operating
							systems. This is my personal notebook for working with DDEV.
						</p>
					</div>
					<div class="flex justify-end mt-4">my-ddev-lab.mandrasch.eu</div>
				</div>
			</a>
			<a
				href="https://ddev-pull-wp.mandrasch.eu/"
				class="no-underline"
				target="_blank"
				rel="noreferrer"
			>
				<div
					class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5 hover:bg-gradient-to-r from-teal-200 to-lime-200"
				>
					<div>
						<h4 class="font-headings text-gray-800 font-semibold">DDEV pull WordPress generator</h4>
						<p class="mt-2 text-gray-600">
							Online generator to help with the creation of DDEV pull scripts for WordPress,
							developed with SvelteKit.
						</p>
					</div>
					<div class="flex justify-end mt-4">ddev-pull-wp.mandrasch.eu</div>
				</div>
			</a>
			<a
				href="https://github.com/mandrasch/11ty-plain-bootstrap5"
				class="no-underline"
				target="_blank"
				rel="noreferrer"
			>
				<div
					class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5 hover:bg-gradient-to-r from-teal-200 to-lime-200"
				>
					<div>
						<h4 class="font-headings text-gray-800 font-semibold">
							Eleventy plain Bootstrap5 starter
						</h4>
						<p class="mt-2 text-gray-600">
							Bootstrap starter theme for static site generator Eleventy/11ty.
						</p>
					</div>
					<div class="flex justify-end mt-4">github.com/mandrasch/11ty-plain-bootstrap5</div>
				</div></a
			>
			<a
				href="https://klimakrise-schnelldurchlauf.mandrasch.eu/"
				class="no-underline"
				target="_blank"
				rel="noreferrer"
			>
				<div
					class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5 hover:bg-gradient-to-r from-teal-200 to-lime-200"
				>
					<div>
						<h4 class="font-headings text-gray-800 font-semibold">Klimakrise Schnelldurchlauf</h4>
						<p class="mt-2 text-gray-600">Educational one pager about the climate emergency.</p>
					</div>
					<div class="flex justify-end mt-4">klimakrise-schnelldurchlauf.mandrasch.eu</div>
				</div></a
			>
			<a href="https://oerhoernchen.de/" class="no-underline" target="_blank" rel="noreferrer">
				<div
					class="py-4 px-8 bg-white shadow-lg rounded-lg mb-5 hover:bg-gradient-to-r from-teal-200 to-lime-200"
				>
					<div>
						<h4 class="font-headings text-gray-800 font-semibold">OERhörnchen</h4>
						<p class="mt-2 text-gray-600">
							Tiny web project to help with the discovery of Open Educational Resources (OER),
							developed with Eleventy/11ty.
						</p>
					</div>
					<div class="flex justify-end mt-4">oerhoernchen.de</div>
				</div>
			</a>
		</section>

		<section>
			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Inspirational:
			</h3>
			<blockquote>
				“The one who plants trees, knowing that he will never sit in their shade, has at least
				started to understand the meaning of life.” ― Rabindranath Tagore
			</blockquote>

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Likes:
			</h3>
			<MasonryLikes />
		</section>
	</div>
</div>

<section class="bg-sky-200 text-black w-full py-5 text-center">
	🚧 This site is work in progress. <a href="/ssr-test" class="underline">Test SvelteKit SSR</a> 🚧
</section>
