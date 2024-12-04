<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { account } from '$lib/sdk';
	import { toast } from 'svelte-sonner';
	import google from '$lib/icons/google.svg';
	import apple from '$lib/icons/apple.svg';
	import github from '$lib/icons/github.svg';

	let email = '';
	let password = '';
	async function login() {
		try {
			await account.createEmailPasswordSession(email, password);
			goto(`${base}/dashboard/overview`);
		} catch (e) {
			toast.error(e.message);
		}
	}
</script>

<div class="mx-auto grid w-[350px] gap-6">
	<div class="grid gap-2 text-center">
		<h1 class="text-3xl font-bold">Welcome to Acme Inc.</h1>
		<!-- <p class="text-balance text-muted-foreground">
			Enter your email below to login to your account
		</p> -->
	</div>
	<Card.Root>
		<Card.Content>
			<form class="grid gap-4" on:submit|preventDefault={login}>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input bind:value={email} id="email" type="email" placeholder="Enter email" required />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						bind:value={password}
						placeholder="Enter password"
						id="password"
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
