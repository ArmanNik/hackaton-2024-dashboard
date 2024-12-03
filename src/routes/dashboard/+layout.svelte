<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';

	let { children } = $props();

	import Settings from 'lucide-svelte/icons/settings';
	import Zap from 'lucide-svelte/icons/zap';
	import House from 'lucide-svelte/icons/house';
	import Users from 'lucide-svelte/icons/users';

	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { page } from '$app/stores';

	const sidebarLinks = [
		{ name: 'Overview', href: `${base}/dashboard/overview`, Icon: House },
		{ name: 'Users', href: `${base}/dashboard/users`, Icon: Users },
		{ name: 'Integrations', href: `${base}/dashboard/integrations`, Icon: Zap },
		{ name: 'Settings', href: `${base}/dashboard/settings`, Icon: Settings }
	];

	const headerLinks = [
		{ name: 'Dashboard', href: `${base}/dashboard` },
		{ name: 'About', href: `${base}/dashboard/about` },
		{ name: 'Products', href: `${base}/dashboard/products` },
		{ name: 'Contact', href: `${base}/dashboard/contact` }
	];
</script>

<div class="flex min-h-[100dvh] w-full flex-col content-stretch items-stretch">
	<header class="top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
		<nav
			class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
		>
			<a href={base} class="flex items-center gap-2 text-lg font-semibold md:text-base">
				<img src={`${base}/favicon.png`} alt="logo" height="6" width="6" class="h-6 w-6" />
				<span class="sr-only">Acme Inc</span>
			</a>

			{#each headerLinks as { name, href }}
				<a
					{href}
					class="text-muted-foreground transition-colors hover:text-foreground"
					class:text-foreground={$page.url.pathname === href}
				>
					{name}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
						<span class="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Logout</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</header>

	<div class="grid h-full w-full flex-1 md:grid-cols-[220px_1fr]">
		<div class="hidden border-r bg-background md:block">
			<div class="flex h-full flex-col gap-2">
				<div class="flex-1">
					<nav class="grid items-start px-2 py-4 text-sm font-medium lg:px-4">
						{#each sidebarLinks as { name, href, Icon }}
							<a
								class:bg-muted={$page.url.pathname.includes(href)}
								{href}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
							>
								<Icon class="h-4 w-4" />
								{name}
							</a>
						{/each}
					</nav>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				{@render children()}
			</main>
		</div>
	</div>
</div>
