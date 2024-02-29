<script>
	import '../app.pcss';
	import { GithubLogo, TwitterLogo, Sun, Moon } from 'svelte-radix';
	import { Button } from '$lib/components/ui/button';
	import '@fontsource-variable/inter';
	import '@fontsource/geist-sans';
	import * as Avatar from '$lib/components/ui/avatar';
	import { ModeWatcher, setMode, resetMode } from 'mode-watcher';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
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
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} class="rounded-full" variant="outline" size="icon">
							<Sun class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon
								class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
							/>
							<span class="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
						<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
						<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
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
	<ModeWatcher />
	<slot />
</main>
