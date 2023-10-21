<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';
	import catppuccin from '$lib/assets/catppuccin-icon-light.png';
	import c2x from '$lib/assets/c2x.png';

	export let data: PageData;
</script>

<svelte:head>
	<title>shaamallow</title>
</svelte:head>

<div class="mx-auto p-4 md:px-20">
	<div class="flex flex-col items-center justify-stretch mb-40 mt-20 group max-w-3xl mx-auto">
		<h1
			class="font-display text-5xl md:text-7xl font-bold bg-clip-text bg-secondary group-hover:text-transparent anim-gradient pb-3"
		>
			Hi, I'm Eyal
		</h1>
		<div class="flex justify-center items-center mt-3 mb-6">
			<svg
				class="w-[18px] h-[18px] mr-1"
				fill="hsl(var(--bc))"
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0 0 395.71 395.71"
				xml:space="preserve"
				><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				/><g id="SVGRepo_iconCarrier">
					<g>
						<path
							d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
						/>
					</g>
				</g></svg
			>
			<div class="font-display text-lg">Ecole Polytechnique, France</div>
		</div>
		<div class="text-center max-w-md">
			French engineering student, Computer Sience Major, Volleyball player and heavy music enjoyer
		</div>
	</div>

	<div class="md" />

	<div class="flex flex-col items-center justify-stretch mb-10 group max-w-3xl mx-auto">
		<h1 class="font-display text-3xl md:text-5xl font-bold bg-clip-text bg-secondary mb-3">
			More on the website
		</h1>
	</div>

	<!--	CARD Catppuccin   -->
	<div
		class="max-w-md md:max-w-5xl mx-auto rounded-[1rem] bg-neutral shadow-xl
		md:hover:scale-105 md:hover:translate-y-4 transition duration-200
		focus:outline-2 focus:outline focus:outline-transparent"
	>
		<div class="md:flex justify-stretch items-center">
			<div class="flex justify-center p-3 pb-0 md:m-5">
				<div
					class="aspect-square rounded-full mx-auto flex lg:max-w-sm max-w-[8rem] md:min-w-[13rem]"
				>
					<img src={catppuccin} alt="profile" />
				</div>
			</div>

			<div class="text-center p-3">
				<h2 class="font-bold">Theming</h2>
				<p>
					This website was made using the catppuccin color palette. Catppuccin is a community-driven
					pastel theme that aims to be the middle ground between low and high contrast themes. It
					consists of 4 soothing warm palettes with 26 eye-candy colors each, perfect for coding,
					designing, and much more! More information available on github
				</p>
			</div>
		</div>

		<div class="flex flex-col items-center md:flex-row justify-around pb-5 gap-4">
			<a href="https://github.com/catppuccin/catppuccin/stargazers"
				><img
					alt="Stargazers"
					src="https://img.shields.io/github/stars/catppuccin?style=for-the-badge&amp;logo=starship&amp;color=C9CBFF&amp;logoColor=D9E0EE&amp;labelColor=302D41"
				/></a
			><a href="https://github.com/catppuccin/catppuccin/releases/latest"
				><img
					alt="Releases"
					src="https://img.shields.io/github/release/catppuccin/catppuccin.svg?style=for-the-badge&amp;logo=github&amp;color=F2CDCD&amp;logoColor=D9E0EE&amp;labelColor=302D41"
				/></a
			><a href="https://github.com/catppuccin/catppuccin/issues"
				><img
					alt="Issues"
					src="https://img.shields.io/github/issues/catppuccin/catppuccin?style=for-the-badge&amp;logo=gitbook&amp;color=B5E8E0&amp;logoColor=D9E0EE&amp;labelColor=302D41"
				/></a
			><a href="https://discord.catppuccin.com"
				><img
					alt="Discord"
					src="https://img.shields.io/discord/907385605422448742?style=for-the-badge&amp;logo=discord&amp;color=DDB6F2&amp;logoColor=D9E0EE&amp;labelColor=302D41"
				/></a
			>
		</div>
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
		focus:outline-2 focus:outline focus:outline-transparent overflow-hidden md:hover:translate-y-4 trannsition duration-200 md:hover:scale-105"
			>
				<img src={c2x} alt="Affiche Coupe de l'X" />
			</div>
		</a>
	</div>
	<div class="divider m-20" />
</div>

<style>
	.anim-gradient {
		background-image: linear-gradient(
			300deg,
			rgb(var(--ctp-red)),
			rgb(var(--ctp-peach)),
			rgb(var(--ctp-yellow)),
			rgb(var(--ctp-green)),
			rgb(var(--ctp-blue)),
			rgb(var(--ctp-mauve))
		);

		background-size: 360% 360%;
		animation: gradient-animation 10s ease infinite;
	}

	/*Keyframes*/
	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
