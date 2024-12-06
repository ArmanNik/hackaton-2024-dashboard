<script lang="ts">
	import { base } from '$app/paths';
	import * as Card from '$lib/components/ui/card/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import Users from 'lucide-svelte/icons/users';

	let { data } = $props();
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<div class="flex items-center">
	<h1 class="text-lg font-semibold md:text-2xl">Users</h1>
</div>

<div class="grid gap-4 md:grid-cols-3">
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Users class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Total users</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">{data.users.total}</div>
			<p class="text-xs text-muted-foreground">Unique users</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Users class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">New users this month</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">+23</div>
			<p class="text-xs text-muted-foreground">+25% from last month</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Users class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Active users</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">+12</div>
			<p class="text-xs text-muted-foreground">+12% from last month</p>
		</Card.Content>
	</Card.Root>
</div>
<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>Email</Table.Head>
			<Table.Head>Phone</Table.Head>
			<Table.Head>User Id</Table.Head>
			<!-- <Table.Head class="text-right"></Table.Head> -->
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each data.users.users as user, i (i)}
			<Table.Row href={`${base}/dashboard/users/user-${user.$id}`}>
				<Table.Cell class="font-medium">{user.name}</Table.Cell>
				<Table.Cell>{user.email}</Table.Cell>
				<Table.Cell>{user?.phone || '-'}</Table.Cell>
				<Table.Cell>{user.$id}</Table.Cell>
				<!-- <Table.Cell class="text-right">
					<Button size="icon" variant="ghost" on:click={(e) => e.preventDefault()}
						><Ellipsis class="h-4 w-4" /></Button
					>
				</Table.Cell> -->
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
