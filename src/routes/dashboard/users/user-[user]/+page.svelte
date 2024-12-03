<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { Badge } from '$lib/components/ui/badge';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';

	let { user = { name: 'test', $id: 'testid', username: 'test', email: 'test@test.com' } } =
		$props();
</script>

<Breadcrumb.Root class="hidden md:flex">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href={`${base}/dashboard/overview`}>Overview</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Link href={`${base}/dashboard/users`}>Users</Breadcrumb.Link>
		</Breadcrumb.Item>
		<Breadcrumb.Separator />
		<Breadcrumb.Item>
			<Breadcrumb.Page>{user?.name ?? $page.params.user}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<div class="flex flex-row items-center gap-2">
	<h1 class="text-lg font-semibold md:text-2xl">Users</h1>
	<Badge variant="secondary">{user.$id}</Badge>
</div>

<div class="flex max-w-lg flex-col gap-8">
	<div class="flex flex-col gap-4">
		<h2>User overview</h2>
		<Card.Root>
			<Card.Content>
				<ul>
					<li>
						<span class="font-bold">Name:</span>
						{user?.name}
					</li>
					<li>
						<span class="font-bold">Email:</span>
						{user?.email}
					</li>
					<li>
						<span class="font-bold">Username:</span>
						{user?.username}
					</li>
					<li>
						<span class="font-bold">User ID:</span>
						{user?.$id}
					</li>
				</ul>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="flex flex-col gap-4">
		<h2>Edit user</h2>
		<Card.Root>
			<Card.Content class="flex flex-col gap-2">
				<div class="flex w-full flex-col gap-1.5">
					<Label for="name">Name</Label>
					<Input
						placeholder="Enter your name"
						id="name"
						type="text"
						required
						bind:value={user.name}
					/>
				</div>
				<div class="flex w-full flex-col gap-1.5">
					<Label for="email">Email</Label>

					<Input
						placeholder="Enter your email"
						id="email"
						type="email"
						required
						bind:value={user.email}
					/>
				</div>
				<div class="flex w-full flex-col gap-1.5">
					<Label for="username">Username</Label>

					<Input
						placeholder="Enter your username"
						id="username"
						type="text"
						required
						bind:value={user.username}
					/>
				</div>
				<div class="flex w-full flex-col gap-1.5">
					<Label for="id">User ID</Label>
					<Input placeholder="Enter your ID" id="id" type="text" required bind:value={user.$id} />
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="flex flex-col gap-4">
		<h2>Danger zone</h2>
		<Card.Root>
			<Card.Content class="flex flex-col gap-6 ">
				<div>
					<h3 class="font-semibold">Delete user</h3>
					<p>
						The user will be permanently deleted, including all data associated with this user. This
						action is irreversible.
					</p>
				</div>
				<div>
					<Button variant="destructive">Delete user</Button>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
