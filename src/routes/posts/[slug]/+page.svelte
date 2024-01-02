<script lang="ts">
	import { page } from '$app/stores';
	$: status = $page.status;
	$: error = $page.error;
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mainDiv: HTMLDivElement;

	interface Data {
		headers: {
			title: string;
			tags: string[];
		};
		body: {
			content: string;
			page: any;
		};
	}

	export let data: Data;

	let loaded = false;

	onMount(() => {
		loaded = true;

		addEventListener('scroll', () => {
			let scroll = window.scrollY;
			let blur = scroll * 0.01 < 10 ? scroll * 0.01 : 10;
			if (mainDiv) {
				mainDiv.style.backdropFilter = `blur(${blur}px)`;
			}
		});
	});
</script>

{#if loaded}
	<div in:fade={{ duration: 300, delay: 80 }} class="mx-auto pt-20 px-6" bind:this={mainDiv}>
		<div class="flex flex-col items-start justify-stretch mx-auto">
			<a class="text-sm text-base-200" href="/posts">Posts <span class="text-primary">/</span></a>
			<h1
				class="font-display text-3xl md:text-5xl font-bold bg-clip-text bg-secondary group-hover:text-transparent anim-gradient pb-3"
			>
				{data.headers.title}
			</h1>
			<div class="text-center max-w-md mb-2" id="author">Eyal Benaroche</div>
			<div id="tags" class="flex flex-wrap gap-2 items-start">
				{#each data.headers.tags as tag}
					<div class="border-current border p-1 rounded-md text-xs text-primary">{tag}</div>
				{/each}
			</div>
		</div>

		<div class="divider" />
		<p class="text-justify">{data.body.content}</p>
		<p class="text-justify">{data.body.content}</p>
		<p class="text-justify">{data.body.content}</p>

		<div class="divider py-6" />
	</div>
{/if}
