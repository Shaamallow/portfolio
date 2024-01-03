<script lang="ts">
	import { fade } from 'svelte/transition';
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20 md:px-48">
	<h1 class="font-display text-left text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3">
		Projects
	</h1>

	<p class="text-left m-5 italic">List of my projects from the most recent to the oldest</p>

	<div class="divider m-10" />

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-stretch">
		{#each data.projects as project}
			<Card data={project} />
		{/each}
	</div>

	<div class="divider m-10" />
</main>
