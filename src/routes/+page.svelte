<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { lightTheme } from '$lib/theme.ts';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
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

		<div class="divider my-[20rem]" />

		<div class="flex flex-col items-center justify-stretch mb-10 group max-w-3xl mx-auto px-4">
			<h1 class="font-display text-3xl md:text-5xl font-bold bg-clip-text bg-secondary mb-3">
				More on the website
			</h1>
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

		<!-- PROJECTS FROM HERE -->
		<div class="divider m-10" />

		<div class="flex flex-col items-center justify-stretch m-20 group max-w-3xl mx-auto">
			<h1 class="font-display text-3xl md:text-5xl font-bold bg-clip-text bg-secondary mb-10">
				Recent Projects
			</h1>

			<a href="https://coupedelx.binets.fr" target="_blank">
				<div
					class="w-58 md:w-[45rem] rounded-[1rem] bg-neutral shadow-xl
		focus:outline-2 focus:outline focus:outline-transparent overflow-hidden md:hover:translate-y-4 transition duration-200 md:hover:scale-105"
				>
					<img src="/projects/c2x.png" alt="Affiche Coupe de l'X" />
				</div>
			</a>
		</div>
		<div class="divider m-20" />
	</div>
{/if}
