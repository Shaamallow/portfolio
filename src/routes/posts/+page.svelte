<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Card from '$lib/components/Card.svelte';

	interface Post {
		title: string;
		description: string;
		date: string;
		slug: string;
		content: string;
	}

	export let data: any;

	let loaded = false;
	onMount(() => {
		loaded = true;
		console.log(data);
	});
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20 md:px-48">
	<h1 class="font-display text-left text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3">
		Posts
	</h1>

	<p class="text-left m-5 italic">Here is the subtitle for this page</p>

	<div class="my-10" />

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-stretch">
		{#each data.headers as header}
			<Card data={header} />
		{/each}
	</div>

	<div class="divider m-10" />

	<h2 class="font-display text-3xl md:text-5xl font-bold mb-5">Self-Hosting</h2>

	<p class="text-justify mb-5">
		After a year at the Binet Réseau, I have come to a linking of being a system administrator and
		enjoy the benefits of owning a server. Therefore, I've built my own server and I'm self-hosting
		a bunch of services on top of my own website.
	</p>

	<h3 class="flex font-display text-2xl md:text-4xl italic">
		I use
		<img
			alt="neovim"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1200px-Neovim-mark.svg.png"
			class="mx-4 w-10"
		/>
		btw
	</h3>

	<div class="my-4" />

	<h3 class="font-display text-2xl md:text-4xl font-bold">Stack & Services</h3>

	<div class="flex justify-center items-center my-3 gap-4 md:gap-10">
		<a href="https://docs.docker.com/" target="_blank">
			<img
				src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
				alt="docker"
				class="mt-3 w-20"
			/>
		</a>
		<a href="https://gitlab.com" target="_blank">
			<img
				src="https://cdn.icon-icons.com/icons2/2415/PNG/512/gitlab_original_logo_icon_146503.png"
				alt="gitlab"
				class="mt-3 w-20"
			/>
		</a>
		<a href="https://nextcloud.com" target="_blank">
			<img
				src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nextcloud_logo_icon_168948.png"
				alt="nextcloud"
				class="mt-3 w-20"
			/>
		</a>
		<a href="https://jellyfin.org" target="_blank">
			<img src="/logo/jellyfin.png" alt="jellyfin" class="mt-3 w-20" />
		</a>
		<a href="https://debian.org" target="_blank">
			<img
				src="https://cdn.iconscout.com/icon/free/png-256/free-debian-11-1175231.png"
				alt="debian"
				class="mt-3 w-20"
			/>
		</a>
	</div>
</main>
