<script lang="ts">
	import type { ProjectDetails } from '$lib/types';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Drawer from '$lib/components/ui/drawer';
	import { mediaQuery } from 'svelte-legos';
	import { onMount } from 'svelte';

	let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');
	export let project: ProjectDetails;
	let article: HTMLElement;
	onMount(() => {
		const options = {
			root: null,
			threshold: 0.1
		};
		const observer = new IntersectionObserver((entries) => {
			if (!article) return;
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element is in view
					article.classList.add('translate-x-0');
					article.classList.remove('opacity-0');
					article.classList.remove('-translate-x-72');
				} else {
					// Element is not in view
					article.classList.remove('translate-x-0');
					article.classList.add('-translate-x-72');
					article.classList.add('opacity-0');
				}
			});
		}, options);

		observer.observe(article);
	});

	async function repoClick() {
		const event_type = `click::repository::${project.name}`;
		console.log(event_type);
		await fetch('/api/analytics', {
			method: 'POST',
			body: event_type
		});
	}

	async function releaseClick() {
		const event_type = `click::release::${project.name}`;
		console.log(event_type);
		await fetch('/api/analytics', {
			method: 'POST',
			body: event_type
		});
	}
</script>

<article
	bind:this={article}
	class="grid -translate-x-72 gap-12 p-3 font-sans opacity-0 transition-all duration-1000 md:grid-flow-col md:grid-cols-5 md:p-5"
>
	{#if $isDesktop}
		<Dialog.Root bind:open preventScroll>
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
						<Button on:click={repoClick} target="_blank" href={project.repo}>Repository</Button>

						<Button on:click={releaseClick} target="_blank" href={project.release}>Release</Button>
					</div>
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	{:else}
		<Drawer.Root bind:open>
			<Drawer.Trigger class="aspect-video h-full w-full md:col-span-3">
				<img
					class="h-full w-full rounded-lg object-cover md:col-span-3"
					src={project.img}
					alt={project.name}
				/>
			</Drawer.Trigger>
			<Drawer.Content class="space-y-5">
				<Drawer.Header>
					<Drawer.Title>{project.name}</Drawer.Title>
					<Drawer.Description>{project.description}</Drawer.Description>
				</Drawer.Header>
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
				<Drawer.Footer>
					<div class="flex justify-center gap-4">
						<Button href={project.repo}>Repository</Button>
						<Button href={project.release}>Release</Button>
					</div>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	{/if}
	<div class="grid place-content-center gap-4 space-y-2 text-balance text-center md:col-span-2">
		<p>{project.name}</p>
		<p>
			{project.description}
		</p>
		<div class="flex justify-center gap-4">
			<Button target="_blank" on:click={repoClick} href={project.repo}>Repository</Button>
			<Button href={project.release}>Release</Button>
		</div>
		<div class="flex justify-center gap-4">
			{#each project.tags as tag}
				<Badge class="upper bg-gradient-to-tr from-amber-400 to-red-400">{tag}</Badge>
			{/each}
		</div>
	</div>
</article>
