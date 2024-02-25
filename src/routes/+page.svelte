<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
</script>

<section
	class="full-width grid h-screen place-content-center space-y-2 overflow-x-hidden bg-slate-900"
>
	<h1
		class="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-center font-sans text-5xl font-bold uppercase text-transparent md:text-6xl"
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
	<h3
		class="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-center font-sans text-2xl font-semibold uppercase text-transparent"
	>
		Projects
	</h3>
	<ul class="h-full">
		<li class="h-1/5">
			<article class="grid gap-12 p-3 md:grid-flow-col md:grid-cols-5 md:p-5">
				<img
					class="h-full w-full rounded-lg object-cover md:col-span-3"
					src="/reader.png"
					alt="epub reader"
				/>
				<div
					class="grid place-content-center gap-4 space-y-2 text-balance text-center md:col-span-2"
				>
					<p>Svelte epub reader</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto eum ullam sequi
						debitis unde aliquid deserunt aliquam amet in numquam.
					</p>
					<div class="flex justify-center gap-4">
						<Button>Repository</Button>
						<Button>Release</Button>
					</div>
					<div class="flex">
						<Badge>Go</Badge>
					</div>
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
