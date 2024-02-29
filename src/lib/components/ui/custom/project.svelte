<script lang="ts">
	import type { ProjectDetails } from '$lib/types';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	export let project: ProjectDetails;
</script>

<article class="grid gap-12 p-3 font-sans md:grid-flow-col md:grid-cols-5 md:p-5">
	<img
		class="h-full w-full rounded-lg object-cover md:col-span-3"
		src={project.img}
		alt="epub reader"
	/>
	<div class="grid place-content-center gap-4 space-y-2 text-balance text-center md:col-span-2">
		<p>{project.name}</p>
		<p>
			{project.description}
		</p>
		<div class="flex justify-center gap-4">
			<Button href={project.repo}>Repository</Button>
			<Button href={project.release}>Release</Button>
		</div>
		<div class="flex justify-center gap-4">
			{#each project.tags as tag}
				<Badge class="upper bg-gradient-to-tr from-amber-400 to-red-400">{tag}</Badge>
			{/each}
		</div>
	</div>
</article>
