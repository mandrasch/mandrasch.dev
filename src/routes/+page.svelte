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

			<p class="leading-loose">
				Hi! I’m a Web Developer with passion for Svelte, SvelteKit, DDEV and Open Source. I care
				about the <a href="https://climateaction.tech/blog/letsgreentheweb-together/"
					>Green Web movement</a
				>
				🌱 <!-- and
				<a href="https://www.edx.org/course/web-accessibility-introduction">Web Accessibility</a> -->.
			</p>

			<!--<p class="leading-loose">
				I enjoy coding since my teenager days and completed an apprenticeship of "specialist in the
				field of application development" (Ausbildung Fachinformatiker/in für Anwendungsentwicklung)
				in Berlin. To broaden my perspective I studied media pedagogy in Magdeburg (Bachelor of
				Arts), Cologne (Master of Arts) and worked in Higher Education projects.
			</p>-->

			<p class="leading-loose">
				Like many other people I'm troubled by the climate emergency. I tried to wrap my mind around
				by creating tiny side projects like <a href="https://crunchtime2030.de/">crunchtime2030</a>
				(WIP), <a href="https://aktuelle-erderhitzung.de/">Aktuelle Erderhitzung</a> and
				<a href="https://klimakrise-schnelldurchlauf.mandrasch.eu/">KK Schnelldurchlauf</a>.
				Discovered that the concept of "climate emotions" (<a
					href="https://matthias-andrasch.eu/blog/2023/klimagefuehle-zitate-teil-1/">Klimagefühle</a
				>) is extremly helpful.
			</p>

			<p>Currently happy inhabitant of Vienna, Austria. 🇪🇺</p>
			<p>Follow me here</p>

			<SocialMediaIcons />

			<p>
				<a
					href="https://matthias-andrasch.eu/"
					class="hover:bg-gradient-to-r from-teal-200 to-lime-200 hover:no-underline"
					>read my blog</a
				>
				or
				<a href="#more" class="hover:bg-gradient-to-r from-teal-200 to-lime-200 hover:no-underline"
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

			<!--<h3
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
			</p>-->

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
				class="text-left font-headings mt-0 pr-4 -ml-5 -skew-y-2 px-2 py-2 shadow-sm inline-block mt-5 bg-gradient-to-r from-teal-200 to-lime-200"
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
