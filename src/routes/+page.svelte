<script lang="ts">
	import type { ProjectDetails } from '$lib/types';
	import Project from '$lib/components/ui/custom/project.svelte';

	const projects: ProjectDetails[] = [
		{
			name: 'Svelte epub reader',
			description:
				'A desktop application for reading epub files. It is built with svelte and tauri',
			tags: ['svelte', 'tauri', 'rust', 'tailwind'],
			repo: 'https://github.com/Ahdeyyy/reader',
			release: 'https://github.com/Ahdeyyy/reader/releases',
			img: '/reader.png'
		}
	];
</script>

<section class="grid h-screen place-content-center space-y-2 overflow-x-hidden">
	<h1
		class="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-center font-sans text-5xl font-bold uppercase text-transparent md:text-6xl"
	>
		Adeala Adebusuyi
	</h1>
	<h2 class="text-center font-sans text-lg font-semibold text-gray-600">Software developer</h2>
	<p class="text-pretty break-words text-center font-sans text-primary md:text-balance">
		Passionate software developer with a background in computer science. specialties include
		frontend development with html, css, javascript, react , backend development with golang, nodejs
	</p>
</section>

<section class="h-screen space-y-7 p-5">
	<h3
		class="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-center font-sans text-3xl font-semibold uppercase text-transparent md:text-5xl"
	>
		Projects
	</h3>
	<ul class="grid h-full gap-10">
		{#each projects as project}
			<li class="h-1/5">
				<Project {project} />
			</li>
		{/each}
	</ul>
</section>
<!-- 
<style>
	.full-width {
		box-shadow: 0 0 0 100vmax rgb(15, 23, 42);
		clip-path: inset(0 -100vmax);
	}
</style> -->
