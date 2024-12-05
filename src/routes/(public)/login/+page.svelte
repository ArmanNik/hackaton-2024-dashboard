<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import google from '$lib/icons/google.svg';
	import apple from '$lib/icons/apple.svg';
	import github from '$lib/icons/github.svg';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="mx-auto grid w-[350px] gap-6">
	<div class="grid gap-2 text-center">
		<h1 class="text-3xl font-bold">Welcome to Acme Inc.</h1>
		<!-- <p class="text-balance text-muted-foreground">
			Enter your email below to login to your account
		</p> -->
	</div>
	<Card.Root>
		<Card.Content>
			<form
				method="post"
				class="grid gap-4"
				use:enhance={({ submitter }) => {
					if (submitter) {
						submitter.disabled = true;
					}
					return async ({ result, update }) => {
						// console.log(result);
						if (result?.type === 'success') {
							await goto(`${base}/dashboard/overview`);
						} else if (result?.type === 'error') {
							if (submitter) {
								submitter.disabled = false;
							}
							toast.error(result.error.message);
						}
					};
				}}
			>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input
						value={form?.email ?? ''}
						id="email"
						name="email"
						type="email"
						placeholder="Enter email"
						required
					/>
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						placeholder="Enter password"
						id="password"
						name="password"
						type="password"
						required
					/>
				</div>
				<Button type="submit" class="w-full">Get started</Button>

				<div class="grid grid-cols-[1fr_150px_1fr] items-center">
					<Separator decorative />
					<p class="text-center text-sm text-muted-foreground">OR SIGN IN WITH</p>
					<Separator decorative />
				</div>
				<Button variant="outline" class="flex w-full items-center gap-1">
					<img src={google} alt="google" />
					Google
				</Button>
				<Button variant="outline" class="flex w-full items-center gap-1">
					<img src={github} alt="github" />
					GitHub
				</Button>
				<Button variant="outline" class="flex w-full items-center gap-1">
					<img src={apple} alt="apple" />
					Apple
				</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
