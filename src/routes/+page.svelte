<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
</script>

<section
	class="full-width grid h-screen place-content-center space-y-2 overflow-x-hidden bg-slate-900"
>
	<h1
		class="bg-gradient-to-r from-teal-400 via-amber-400 to-red-400 bg-clip-text text-center font-sans text-5xl font-bold uppercase text-transparent md:text-6xl"
	>
		Adeala Adebusuyi
	</h1>
	<h2 class="text-center font-sans text-lg font-semibold text-muted">Software developer</h2>
	<p class="text-pretty break-words text-center font-sans text-primary md:text-balance">
		Passionate software developer with a background in computer science. specialties include
		frontend development with html, css, javascript, react , backend development with golang, nodejs
	</p>
</section>

<section class="h-screen space-y-2 p-5">
	<ul class="h-full">
		<li class="h-1/5">
			<article class="grid gap-12 p-3 md:flex md:p-5">
				<AspectRatio ratio={16 / 9} class="bg-muted">
					<img
						class="h-full w-full rounded-lg object-cover md:object-contain"
						src="/reader.png"
						alt="epub reader"
					/>
				</AspectRatio>
				<div class="grid place-content-center gap-4">
					<p>Svelte epub reader</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eum ullam sequi
						debitis unde aliquid deserunt aliquam amet in numquam.
					</p>
					<Button>Lorem ipsum dolor sit amet.</Button>
					<Button>Lorem ipsum dolor sit amet.</Button>
					<Badge>Go</Badge>
				</div>
			</article>
		</li>
	</ul>
</section>

<style>
	.full-width {
		box-shadow: 0 0 0 100vmax rgb(15, 23, 42);
		clip-path: inset(0 -100vmax);
	}
</style>
