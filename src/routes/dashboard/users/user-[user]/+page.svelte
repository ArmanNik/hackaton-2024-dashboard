<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { Badge } from '$lib/components/ui/badge';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';
	import { type ActionResult, type SubmitFunction } from '@sveltejs/kit';
	import { toast } from 'svelte-sonner';

	let { data } = $props();

	let email = $state(data.user?.email ?? '');
	let name = $state(data.user?.name ?? '');
	let password = $state(data.user?.password ?? '');
	let phone = $state(data.user?.phone ?? '');

	function handleEnhance({ submitter }: { submitter?: HTMLElement | null }) {
		const button = submitter as HTMLButtonElement;

		if (button) {
			button.disabled = true;
		}
		return async ({
			result
		}: {
			result: ActionResult<
				Record<string, unknown> | undefined,
				Record<string, unknown> | undefined
			>;
		}) => {
			if (result?.type === 'success') {
				toast.success('User name updated');
			} else if (result?.type === 'error') {
				button.disabled = false;
				toast.error(result.error.message);
			}
		};
	}

	let disableDelete = $state(false);
	async function deleteUser() {
		disableDelete = true;
		const res = await fetch(`${base}/dashboard/users/user-${data.user.$id}`, {
			method: 'DELETE'
		});

		if (res.ok) {
			toast.success('User deleted');
			goto(`${base}/dashboard/users`);
		} else {
			disableDelete = false;
			toast.error('Something went wrong');
		}
	}
</script>

<svelte:head>
	<title>User - {data.user?.name ?? $page.params.user}</title>
</svelte:head>

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
			<Breadcrumb.Page>{data.user?.name ?? $page.params.user}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<div class="flex flex-row items-center gap-2">
	<h1 class="text-lg font-semibold md:text-2xl">Users</h1>
	<Badge variant="outline">{data.user.$id}</Badge>
</div>

<div class="flex max-w-xl flex-col gap-8">
	<div class="flex flex-col gap-4">
		<h2>User overview</h2>
		<Card.Root>
			<Card.Content>
				<ul>
					<li>
						<span class="font-bold">Name:</span>
						{data.user?.name}
					</li>
					<li>
						<span class="font-bold">Email:</span>
						{data.user?.email}
					</li>
					<li>
						<span class="font-bold">Phone:</span>
						{data.user?.phone || 'n/a'}
					</li>
					<li>
						<span class="font-bold">User ID:</span>
						{data.user?.$id}
					</li>
				</ul>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="flex flex-col gap-4">
		<h2>Edit user</h2>
		<Card.Root>
			<Card.Content class="flex flex-col gap-4">
				<form
					action="?/updateName"
					method="POST"
					class="flex w-full flex-col gap-1.5"
					use:enhance={handleEnhance}
				>
					<Label for="name">Name</Label>
					<div class="flex gap-4">
						<Input
							placeholder="Enter your name"
							id="name"
							name="name"
							type="text"
							required
							bind:value={name}
						/>
						<Button variant="outline" type="submit" disabled={data.user?.name === name}>
							Update
						</Button>
					</div>
				</form>
				<form
					action="?/updateEmail"
					method="POST"
					class="flex w-full flex-col gap-1.5"
					use:enhance={handleEnhance}
				>
					<Label for="email">Email</Label>

					<div class="flex gap-4">
						<Input
							placeholder="Enter your email"
							id="email"
							type="email"
							name="email"
							required
							bind:value={email}
						/>

						<Button variant="outline" type="submit" disabled={data.user?.email === email}>
							Update
						</Button>
					</div>
				</form>
				<form
					action="?/updatePassword"
					method="POST"
					class="flex w-full flex-col gap-1.5"
					use:enhance={handleEnhance}
				>
					<Label for="id">Password</Label>
					<div class="flex gap-4">
						<Input
							placeholder="Enter password"
							id="id"
							type="password"
							name="password"
							required
							bind:value={password}
						/>

						<Button variant="outline" type="submit" disabled={data.user?.password === password}>
							Update
						</Button>
					</div>
				</form>
				<form
					action="?/updatePhone"
					method="POST"
					class="flex w-full flex-col gap-1.5"
					use:enhance={handleEnhance}
				>
					<Label for="phone">Phone</Label>

					<div class="flex gap-4">
						<Input
							placeholder="Enter your phone"
							id="phone"
							type="phone"
							name="phone"
							required
							bind:value={phone}
						/>

						<Button variant="outline" type="submit" disabled={data.user?.phone === phone}>
							Update
						</Button>
					</div>
				</form>

				<div class="mt-4"></div>
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
					<Dialog.Root>
						<Dialog.Trigger class={buttonVariants({ variant: 'destructive' })}>
							Delete user
						</Dialog.Trigger>
						<Dialog.Content class="sm:max-w-[425px]">
							<Dialog.Header>
								<Dialog.Title>Delete user</Dialog.Title>
								<Dialog.Description>
									Are you sure you want to delete this user? This action is irreversible.
								</Dialog.Description>
							</Dialog.Header>

							<Dialog.Footer>
								<Button
									type="submit"
									variant="destructive"
									disabled={disableDelete}
									on:click={deleteUser}>Delete</Button
								>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</div>
