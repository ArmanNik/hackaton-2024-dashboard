<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Users from 'lucide-svelte/icons/users';
	import Zap from 'lucide-svelte/icons/zap';
	import Database from 'lucide-svelte/icons/database';
	import FileText from 'lucide-svelte/icons/file-text';
	import SignalHigh from 'lucide-svelte/icons/signal-high';
	import Folder from 'lucide-svelte/icons/folder';
	import Download from 'lucide-svelte/icons/download';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Progress } from '$lib/components/ui/progress';
	import * as Table from '$lib/components/ui/table/index.js';

	let backups: { id: string; size: string; timeDate: string }[] = [
		{
			id: 'd8092edf',
			size: '1.2GB',
			timeDate: '12:00 06/12/2024'
		},
		{
			id: '2dfs9j2f',
			size: '1.5GB',
			timeDate: '15:30 01/11/2024'
		},
		{
			id: '32982dj9',
			size: '1.3GB',
			timeDate: '02:23 12/01/2024'
		},
		{
			id: 'fer3rtgg',
			size: '2.3GB',
			timeDate: '08:48 16/12/2023'
		},
		{
			id: '1t335tgh',
			size: '2.1GB',
			timeDate: '16:22 30/06/2023'
		}
	];
</script>

<svelte:head>
	<title>Overview</title>
</svelte:head>

<div class="flex items-center">
	<h1 class="text-lg font-semibold md:text-2xl">Overview</h1>
</div>

<Tabs.Root value="account" class="w-[400px]">
	<Tabs.List>
		<Tabs.Trigger value="account">Dashboard</Tabs.Trigger>
		<Tabs.Trigger value="password">Usage</Tabs.Trigger>
		<Tabs.Trigger value="password">Analytics</Tabs.Trigger>
	</Tabs.List>
</Tabs.Root>

<div class="grid gap-4 md:grid-cols-4">
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Users class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Users</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">5343</div>
			<p class="text-xs text-muted-foreground">Unique users</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Database class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Documents</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">235</div>
			<p class="text-xs text-muted-foreground">Documents</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<FileText class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Files</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">25</div>
			<p class="text-xs text-muted-foreground">Files</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center gap-2 space-y-0 pb-2">
			<Zap class="h-4 w-4 text-muted-foreground" />
			<Card.Title class="text-sm font-medium">Executions</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">3456</div>
			<p class="text-xs text-muted-foreground">Executions</p>
		</Card.Content>
	</Card.Root>
</div>

<section class="grid gap-4 lg:grid-cols-[2fr_1fr]">
	<div class="flex flex-col gap-2">
		<div class="flex items-center">
			<h2 class="text-xl">Usage</h2>
		</div>

		<Card.Root>
			<Card.Content class="flex flex-col gap-4">
				<div class="flex flex-col gap-1">
					<div class="flex justify-between">
						<div class="flex items-center gap-1">
							<SignalHigh class="h-4 w-4 text-muted-foreground" />
							<span class="text-lg text-muted-foreground">Bandwith</span>
						</div>
						<span>45%</span>
					</div>
					<Progress value={45} />
					<div class="mt-1 flex justify-between">
						<span class="text-muted-foreground">45GB</span>
						<span class="text-muted-foreground">100GB</span>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<div class="flex justify-between">
						<div class="flex items-center gap-1">
							<Folder class="h-4 w-4 text-muted-foreground" />
							<span class=" text-lg text-muted-foreground">Storage</span>
						</div>
						<span>20%</span>
					</div>
					<Progress value={20} />
					<div class="mt-1 flex justify-between">
						<span class="text-muted-foreground">20GB</span>
						<span class="text-muted-foreground">100GB</span>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<div class="flex justify-between">
						<div class="flex items-center gap-1">
							<Zap class="h-4 w-4 text-muted-foreground" />
							<span class="text-lg text-muted-foreground">Compute</span>
						</div>
						<span>60%</span>
					</div>
					<Progress value={60} />
					<div class="mt-1 flex justify-between">
						<span class="text-muted-foreground">60GB</span>
						<span class="text-muted-foreground">100GB</span>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<div class="flex justify-between">
						<div class="flex items-center gap-1">
							<Download class="h-4 w-4 text-muted-foreground" />
							<span class="text-lg text-muted-foreground">Downloads</span>
						</div>
						<span>50%</span>
					</div>
					<Progress value={50} />
					<div class="mt-1 flex justify-between">
						<span class="text-muted-foreground">50GB</span>
						<span class="text-muted-foreground">100GB</span>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex items-center">
			<h2 class="text-xl">Latest backup</h2>
		</div>
		<Card.Root>
			<Card.Content>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head>ID</Table.Head>
							<Table.Head>Size</Table.Head>
							<Table.Head>Updated</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each backups as backup, i (i)}
							<Table.Row>
								<Table.Cell class="font-medium">{backup.id}</Table.Cell>
								<Table.Cell>{backup.size}</Table.Cell>
								<Table.Cell>{backup.timeDate}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</section>
