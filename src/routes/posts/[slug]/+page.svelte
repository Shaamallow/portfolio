<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { formatDate } from '$lib/utils';

	let mainDiv: HTMLDivElement;

	let loaded = false;

	export let data;

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

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

{#if loaded}
	<div
		in:fade={{ duration: 300, delay: 80 }}
		class="mx-auto pt-20 px-6 md:px-48"
		bind:this={mainDiv}
	>
		<div class="flex flex-col items-start justify-stretch mx-auto">
			<a class="text-sm text-base-200" href="/posts">Posts <span class="text-primary">/</span></a>
			<h1
				class="font-display text-3xl md:text-5xl font-bold bg-clip-text bg-secondary group-hover:text-transparent anim-gradient pb-3"
			>
				{data.meta.title}
			</h1>
			<div class="text-base mb-2">{data.meta.description}</div>
			<div class="text-center max-w-md text-base-200" id="author">Eyal Benaroche</div>
			<div class="text-center max-w-md mb-2 text-base-200" id="date">
				{formatDate(data.meta.date)}
			</div>
			<div id="tags" class="flex flex-wrap gap-2 items-start">
				{#each data.meta.tags as tag}
					<div class="border-current border p-1 rounded-md text-xs text-primary">{tag}</div>
				{/each}
			</div>
		</div>

		<div class="divider" />

		<article>
			<div class="prose">
				<svelte:component this={data.content} />
			</div>
		</article>

		<div class="divider mb-0 pb-6" />
	</div>
{/if}

<style>
</style>
