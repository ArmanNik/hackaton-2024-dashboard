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
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<div class="mx-auto grid w-[350px] gap-6">
	<div class="grid gap-2 text-center">
		<h1 class="text-3xl font-bold">Welcome to Acme Inc.</h1>
		<!-- <p class="text-balance text-muted-foreground">Enter your email below to register</p> -->
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
						if (result?.type === 'success') {
							goto('/dashboard/overview');
						} else if (result?.type === 'error') {
							if (submitter) {
								submitter.disabled = false;
							}
							console.log(result);
							toast.error(result.error.message);
						}
					};
				}}
			>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" name="email" placeholder="Enter your email" required />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input
						placeholder="Enter your password"
						name="password"
						id="password"
						type="password"
						required
					/>
				</div>
				<Button type="submit" class="w-full">Sign up</Button>

				<div class="grid grid-cols-[1fr_150px_1fr] items-center">
					<Separator decorative />
					<p class="text-center text-sm text-muted-foreground">OR SIGN UP WITH</p>
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
