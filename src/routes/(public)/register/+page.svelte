<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
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
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Enter your email" required />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input placeholder="Enter your password" id="password" type="password" required />
				</div>
				<Button type="submit" class="w-full">Sign up</Button>

				<div class="grid grid-cols-[1fr_50px_1fr] items-center">
					<Separator decorative />
					<p class="text-center text-sm text-muted-foreground">OR</p>
					<Separator decorative />
				</div>
				<Button variant="outline" class="w-full">Sign up with Google</Button>
			</div>
		</Card.Content>
	</Card.Root>
</div>
