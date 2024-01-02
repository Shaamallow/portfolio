<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { lightTheme } from '$lib/theme.ts';

	import Card from '$lib/components/Card.svelte';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});

	let data = {
		headers: {
			title: 'I have a Very Long Title for this Card indeed',
			date: '2021-08-01',
			wallpaper: '/wallpaper2.jpg',
			tags: ['test', 'test2', 'test3', 'iLoveToWriteTags', 'thisisaverylongtag']
		},
		body: {
			content: 'test'
		}
	};

	import { posts } from '$lib/data.ts';
</script>

<svelte:head>
	<title>shaamallow</title>
</svelte:head>

{#if loaded}
	<div in:fade={{ duration: 400, delay: 100 }} class="mx-auto mt-32 px-6">
		<div class="flex flex-col items-center justify-stretch mx-auto px-4">
			<img src="/avatar.jpg" alt="" class="rounded-full w-[10rem] lg:w-[20rem] mb-4" />
			<h1
				class="text-center font-display text-4xl md:text-5xl font-bold bg-clip-text bg-secondary group-hover:text-transparent anim-gradient pb-3"
			>
				Eyal Benaroche
			</h1>
			<div class="text-center max-w-xs lg:max-w-3xl text-lg font-bold">
				French Engineering Student @ Ecole Polytechnique, France
			</div>
		</div>

		<div class="divider my-10" />

		<h1 class="font-display text-3xl md:text-5xl font-bold bg-clip-text bg-secondary mb-3 md:mb-8">
			Recent
		</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-stretch">
			{#each [1, 2, 3, 4] as post}
				<Card {data} />
			{/each}
		</div>

		<div class="flex flex-col items-center justify-stretch mb-30 mt-20 group max-w-3xl mx-auto">
			<h1 class="font-display text-xl md:text-3xl font-bold bg-clip-text bg-secondary mb-3">
				The Tech Stack
			</h1>

			<div class="flex justify-center items-center my-3 gap-4 md:gap-10">
				<a href="https://svelte.dev" target="_blank">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/199px-Svelte_Logo.svg.png"
						alt="svelte"
						class="mt-3 w-20"
					/>
				</a>
				<a href="https://www.typescriptlang.org/" target="_blank">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
						alt="typescript"
						class="mt-3 w-20"
					/>
				</a>
				<a href="https://tailwindcss.com" target="_blank">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
						alt="tailwind"
						class="mt-3 w-20"
					/>
				</a>
			</div>
		</div>
	</div>
{/if}
