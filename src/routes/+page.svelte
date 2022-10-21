<script>
	// via vite-imagetools
	import HeroImage from '../images/innsbruck.jpg?w=1920&webp';
	import HeroImage_fallback from '../images/innsbruck.jpg?w=1920&jpg';
</script>

<!-- TODO: Improve this https://www.kindacode.com/snippet/tailwind-css-make-a-child-element-fill-the-remaining-space/-->

<div class="md:h-screen flex flex-column flex-wrap lg:flex-row max-h">
	<div class="basis-full lg:basis-6/12 flex justify-center content-center items-center">
		<div class="prose p-10">
			<h2>Hey there!</h2>
			<p>I'm a Web Developer, currently living in Austria. 🇦🇹</p>
			<p>
				I'm keenly interested in
				<a href="https://sustainablewebdesign.org/" target="_blank">Sustainable Web Design</a>
				and climate justice. As a developer I try to build minimalistic, accessible and robust web experiences.
			</p>
			<p>
				Big fan of Open Source and
				<a href="https://www.klimaticket.at/en/" target="_blank">Klimaticket Austria</a>. 🥰
			</p>
		</div>
	</div>

	<picture class="basis-full lg:basis-6/12">
		<source srcset={HeroImage} type="image/webp" />
		<img
			src={HeroImage_fallback}
			alt="Mountains and houses, person standing in front of them"
			class="max-h-full"
		/>
	</picture>
</div>

<!-- 
<div
	class="relative  min-h-[50vh] lg:h-screen bg-gradient-to-t from-emerald-200 mt-5 bg-cover bg-right"
	style="background-image:url({HeroImage}),url({HeroImage_fallback})"
>
	Hello
</div> -->
