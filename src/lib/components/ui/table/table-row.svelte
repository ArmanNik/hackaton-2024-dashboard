<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLTableRowElement> & {
		'data-state'?: unknown;
		href?: string | undefined;
	};

	export let href: string | undefined = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

{#if href}
	<a
		{href}
		role="row"
		class={cn(
			'table-row w-full border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
			className
		)}
		{...$$restProps}
		on:click
		on:keydown
	>
		<slot />
	</a>
{:else}
	<tr
		class={cn(
			'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
			className
		)}
		{...$$restProps}
		on:click
		on:keydown
	>
		<slot />
	</tr>
{/if}
