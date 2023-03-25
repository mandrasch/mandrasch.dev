<script>
	// via vite-imagetools
	import HeroImage from '../images/innsbruck.jpg?w=1920&webp';
	import HeroImage_fallback from '../images/innsbruck.jpg?w=1920&jpg';

	import { Confetti } from 'svelte-confetti';
	import ToggleConfetti from '../lib/ToggleConfetti.svelte';
	import SocialMediaIcons from '../components/SocialMediaIcons.svelte';

	import MasonryLikes from '../components/MasonryLikes.svelte';

	// import iconGermanyFlag from '../images/icon_flag_germany_openmoji_1F1E9-1F1EA.svg';
</script>

<svelte:head>
	<title>Matthias Andrasch - Web Developer</title>
	<meta
		name="desc"
		content="My name is Matthias and I'm a Web Developer living in Vienna, Austria. My personal interests are climate and social justice."
	/>
	<meta name="google-site-verification" content="TfqMffmUE8pukIujAWw3pw7fLxoZs9gphmsZ2CAs2FA" />
</svelte:head>

<!-- svelte-ignore no-target-blank -->

<section class="lg:h-screen flex flex-column flex-wrap lg:flex-row">
	<div class="basis-full lg:basis-6/12 flex justify-center content-center items-center">
		<div class="prose p-10">
			<h2 class="font-headings text-2xl">Matthias Andrasch</h2>

			<p>Hey, I’m Matthias from Vienna! 🇦🇹🇪🇺</p>
			<p class="leading-relaxed">
				I’m a Web Developer with passion for Svelte and SvelteKit, Open Source, DDEV and
				<a href="https://sustainablewebdesign.org/">Sustainable Web Design</a>🌱. In my daily work I
				constantly try to get better in all aspects of
				<a href="https://www.edx.org/course/web-accessibility-introduction">Web Accessibility</a>.
			</p>

			<p class="leading-relaxed">
				I also studied media pedagogy in Magdeburg and Cologne after finishing an apprenticeship
				of "specialist in the field of application development" in Berlin. (Ausbildung
				Fachinformatiker/in für Anwendungsentwicklung)
			</p>

			<p>
				As so many other people I'm troubled by the climate emergency. Tried to wrap my mind around
				it with some tiny side projects: <a href="https://aktuelle-erderhitzung.de/"
					>aktuelle-erderhitzung.de</a
				>,
				<a href="https://klimakrise-schnelldurchlauf.mandrasch.eu/">Klimakrise Schnelldurchlauf</a>.
				Recently I found reading about "climate feelings" (<a
					href="https://matthias-andrasch.eu/blog/2023/klimagefuehle-zitate-teil-1/">Klimagefühle</a
				>) to be extremly helpful.
			</p>

			<SocialMediaIcons />

			<p>
				or <a
					href="#more"
					class="hover:bg-gradient-to-r from-teal-200 to-lime-200 hover:no-underline"
					>discover more below.</a
				>
			</p>
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
		<section class="w-full scroll-mt-10" id="more">
			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Passionate about:
			</h3>
			<p>
				In my personal time I enjoy blogging, learning and discussing web development approaches
				with others in the field of Open Source. I'm interested in bridging the gap between a good
				developer experience (DX) and a good editor and user experience (UX).
			</p>
			<p>
				My general interests are climate and social justice. I am devastated about the current state
				of the climate emergency - which is massively threatening the well-being of future
				generations.
			</p>
			<p>
				I'm a huge fan of green mobility via
				<a href="https://www.klimaticket.at/en/" target="_blank" rel="noreferrer"
					>Klimaticket Austria</a
				>! 🥰 Want to go for trip without a car? Check out
				<a href="https://www.zuugle.at/" target="_blank">Zuugle</a>,
				<a href="https://bahnzumberg.at" target="_blank">Bahn zum Berg</a> & more.
			</p>
			<!-- <p>Jogging is a, recently discovered trail running as well.</p> -->

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Current job:
			</h3>

			<p>
				My current job is being a Web Developer at <a href="https://markensinn.at/"
					>gugler* MarkenSinn</a
				>
				- a web agency located in St. Pölten, Lower Austria.
			</p>
			<p>
				The team of MarkenSinn commited itself to build accessible and sustainable web experiences.
				MarkenSinn is advisory board member of Web Accessibility Certificate Austria (WACA).
			</p>
			<p>
				The head organization gugler* participates in the movement
				<a href="https://ecogood.org">economy for the common good</a> and publishes common good
				reports openly. Other companies taking part in the movement are
				<a href="https://csr-report.vaude.com/gri-en/csr-standards/economy-for-the-common-good.php"
					>VAUDE</a
				>
				and
				<a
					href="https://www.sonnentor.com/en-gb/about-us/sustainability/community-economy-what-is-that"
					>Sonnentor.</a
				>
			</p>

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Development topics:
			</h3>
			<p class="text-justify">
				SvelteKit • VanillaJS • CSS3 • WordPress • typo3 • Laravel • CraftCMS • Bootstrap •
				TailwindCSS • Eleventy • HeadlessCMS • JamStack • Accessibility (a11y) • Sustainable Web
				Design • Gitpod • Ionic • Vite • DDEV • NodeJS • WCAG • DevOps
			</p>

			<h3
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2  px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
			>
				Stations of life:
			</h3>
			<ul>
				<li>
					Grown up in the mountainless parts of Eastern Germany 🇩🇪 <!-- <img
						alt=""
						src={iconGermanyFlag}
						class="inline-block w-auto heigth-auto"
					/> -->
				</li>
				<li>
					Apprenticeship as IT-Specialist in software development (Fachinformatiker/in für
					Anwendungsentwicklung), Berlin
				</li>
				<li>Bachelor of Arts Media Education, University Magdeburg</li>
				<li>
					Moved to Cologne - <ToggleConfetti>
						<button class="underline" slot="label">Alaaf! 🎉</button>
						<Confetti />
					</ToggleConfetti>

					<ul>
						<li>
							Master of Arts in the field of Media Pedagogy, Social Work and Management (MAPAM), TH
							Köln.
						</li>
						<li>
							Scientific employee in the field of Open Educational Resources (OER) and media
							education at University Cologne and TH Köln.
						</li>
					</ul>
				</li>

				<li>Moved to Vienna, Austria 🇦🇹</li>
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
