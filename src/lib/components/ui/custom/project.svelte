<script lang="ts">
	import type { ProjectDetails } from '$lib/types';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	export let project: ProjectDetails;
</script>

<article class="grid gap-12 p-3 font-sans md:grid-flow-col md:grid-cols-5 md:p-5">
	<Dialog.Root preventScroll>
		<Dialog.Trigger class="aspect-video h-full w-full md:col-span-3">
			<img
				class="h-full w-full rounded-lg object-cover md:col-span-3"
				src={project.img}
				alt={project.name}
			/>
		</Dialog.Trigger>
		<Dialog.Content class="h-4/5 w-5/6 space-y-5">
			<Dialog.Header>
				<Dialog.Title>{project.name}</Dialog.Title>
				<Dialog.Description>{project.description}</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-5">
				<img
					class="h-full w-full rounded-lg object-cover md:col-span-3"
					src={project.img}
					alt={project.name}
				/>
				<div class="flex justify-center gap-4">
					{#each project.tags as tag}
						<Badge class="upper bg-gradient-to-tr from-amber-400 to-red-400">{tag}</Badge>
					{/each}
				</div>
			</div>
			<Dialog.Footer>
				<div class="flex justify-center gap-4">
					<Button href={project.repo}>Repository</Button>
					<Button href={project.release}>Release</Button>
				</div>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
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
