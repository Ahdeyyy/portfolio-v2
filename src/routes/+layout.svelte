<script>
	import '../app.pcss';
	import { GithubLogo, TwitterLogo } from 'svelte-radix';
	import { Button } from '$lib/components/ui/button';
	import '@fontsource-variable/inter';
</script>

<main class="container relative mx-auto space-y-2 p-2 md:p-5">
	<nav class="sticky left-0 top-0 w-full p-2 backdrop-blur-md md:p-4">
		<ul class="flex content-center justify-between">
			<li class="size-8 rounded-full bg-primary"></li>
			<li class=" space-x-2 md:space-x-5">
				<Button
					variant="outline"
					class="rounded-full"
					size="icon"
					href="https://github.com/Ahdeyyy"
				>
					<GithubLogo class="size-4" />
				</Button>

				<Button variant="outline" class="rounded-full" size="icon" href="https://x.com/Ahdeyy21">
					<TwitterLogo class="size-4" />
				</Button>
			</li>
		</ul>
	</nav>
	<slot />
</main>
