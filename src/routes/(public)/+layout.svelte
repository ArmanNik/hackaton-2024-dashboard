<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { DropdownMenu } from 'bits-ui';

	let { children } = $props();

	let buttonData = $derived.by(() => {
		if ($page.url.pathname.includes('/login')) {
			return {
				text: 'Sign up',
				href: `${base}/register`
			};
		} else {
			return {
				text: 'Login',
				href: `${base}/login`
			};
		}
	});
</script>

<div class="flex min-h-[100dvh] w-full flex-col">
	<header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
		<nav
			class=" flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
		>
			<a href={base} class="flex items-center gap-2 text-lg font-semibold md:text-base">
				<img
					src={`${base}/favicon.png`}
					alt="logo"
					height="6"
					width="6"
					class="h-6 w-6 dark:invert"
				/>
				<span>Acme Inc.</span>
			</a>
		</nav>
		<div class="ml-auto flex items-center gap-4 md:gap-2 lg:gap-4">
			<Button href={buttonData.href}>
				{buttonData.text}
			</Button>
		</div>
	</header>
	<div class="h-full w-full flex-1 lg:grid lg:grid-cols-2">
		<div class="hidden bg-muted lg:block">
			<img
				src="/auth-bg.jpg"
				alt="placeholder"
				width="1920"
				height="1080"
				class="h-full w-full object-cover dark:grayscale"
			/>
		</div>
		<div class="flex items-center justify-center py-12">
			{@render children()}
		</div>
	</div>
</div>
