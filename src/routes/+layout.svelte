<script>
	import '../app.pcss';
	import { GithubLogo, TwitterLogo } from 'svelte-radix';
	import { Button } from '$lib/components/ui/button';
	import '@fontsource-variable/inter';
	import '@fontsource/geist-sans';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<main class="container relative mx-auto p-2 md:p-5">
	<nav class="fixed left-0 top-0 z-50 w-full p-2 backdrop-blur-lg md:p-4">
		<ul class="flex content-center justify-between">
			<li class="rounded-full">
				<Avatar.Root>
					<Avatar.Image src="/adebusuyi.jpg" class="object-cover" alt="@adebusuyi" />
					<Avatar.Fallback>AA</Avatar.Fallback>
				</Avatar.Root>
			</li>
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
