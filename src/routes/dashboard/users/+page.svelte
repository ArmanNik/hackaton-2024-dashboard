<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import Users from 'lucide-svelte/icons/users';

	const users = [
		{
			name: 'John Doe',
			email: 'joedoe@appwrite.io',
			username: 'joedoe',
			id: '123456'
		},
		{
			name: 'Jane Doe',
			email: 'janedoe@appwrite.io',
			username: 'janedoe',
			id: '123457'
		}
	];
</script>

<div class="flex items-center">
	<h1 class="text-lg font-semibold md:text-2xl">Users</h1>
</div>

<div class="grid gap-4 md:grid-cols-[200px_1fr]">
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Users class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Total users</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">45,231</div>
			<p class="text-xs text-muted-foreground">Unique users</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 pb-2">
			<Users class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">New users this month</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-2 md:grid-cols-[1fr_2px_2fr]">
				<div>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">+25% from last month</p>
				</div>
				<Separator decorative orientation="vertical" class="h-full" />
				<div>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">+25% from last month</p>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Name</Table.Head>
			<Table.Head>Email</Table.Head>
			<Table.Head>Username</Table.Head>
			<Table.Head>User Id</Table.Head>
			<Table.Head class="text-right"></Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each users as user, i (i)}
			<Table.Row href={`${base}/dashboard/users/user-${user.id}`}>
				<Table.Cell class="font-medium">{user.name}</Table.Cell>
				<Table.Cell>{user.email}</Table.Cell>
				<Table.Cell>{user.username}</Table.Cell>
				<Table.Cell>{user.id}</Table.Cell>
				<Table.Cell class="text-right">
					<Button size="icon" variant="ghost"><Ellipsis class="h-4 w-4" /></Button>
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
