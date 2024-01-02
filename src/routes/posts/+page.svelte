<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20">
	<div class="flex flex-col items-center justify-stretch mb-40 mt-12 group max-w-3xl mx-auto">
		<h1
			class="font-display text-center text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3"
		>
			Posts
		</h1>

		<p class="text-center m-5 italic">
			More infromation will be coming here soon enough, in the meanwhile...
		</p>

		<div class="flex justify-center items-centery gap-2">
			<a href="/posts/test" class="btn btn-ghost border-current">test</a>
			<a href="/posts/post-2" class="btn btn-ghost border-current">long</a>
			<a href="/posts/post-3" class="btn btn-ghost border-current">post-3</a>
			<a href="/posts/post-4" class="btn btn-ghost border-current">post-4</a>
		</div>

		<div class="divider m-10" />

		<h2 class="font-display text-center text-3xl md:text-5xl font-bold mb-5">Self-Hosting</h2>

		<p class="text-justify mb-5">
			After a year at the Binet Réseau, I have come to a linking of being a system administrator and
			enjoy the benefits of owning a server. Therefore, I've built my own server and I'm
			self-hosting a bunch of services on top of my own website.
		</p>

		<h3 class="font-display text-center text-2xl md:text-4xl font-bold mb-5">Stack & Services</h3>

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

			<a href="https://debian.org">
				<img
					src="https://cdn.iconscout.com/icon/free/png-256/free-debian-11-1175231.png"
					alt="debian"
					class="mt-3 w-20"
				/>
			</a>
		</div>

		<h3 class="flex items-center font-display text-2xl md:text-4xl font-bold mt-10">
			<span>I use</span>
			<img
				alt="neovim"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1200px-Neovim-mark.svg.png"
				class="mx-4 w-10"
			/>
			<span>btw</span>
		</h3>
	</div>
</main>
