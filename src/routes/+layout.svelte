<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Dialog from '$lib/components/Dialog.svelte';

	import { lightTheme, toggleTheme } from '$lib/theme.ts';

	let navbar: HTMLDivElement;
	let dialog: Dialog;
	let wallpaperPath: string;
	let footDiv: HTMLElement;

	onMount(() => {
		addEventListener('scroll', () => {
			// get scroll position
			// add blur to navbar = 0.5 * scroll position

			let scroll = window.scrollY;

			if (scroll > 100) {
				// add shadow to navbar
				navbar.classList.add('shadow-md');
			} else {
				navbar.classList.remove('shadow-md');
			}

			let blur = scroll * 0.05;

			if (navbar) {
				navbar.style.backdropFilter = `blur(${blur}px)`;
			}
			if (footDiv) {
				footDiv.style.backdropFilter = `blur(${blur}px)`;
			}
		});
	});

	afterNavigate(() => {
		console.log('page');
		if ($page.route.id === '/posts/[slug]') {
			wallpaperPath = $page.data.meta.wallpaper
				? $page.data.meta.wallpaper // value from markdown file
				: '/wallpaper2.jpg'; // default value for posts with no wallpaper

			return;
		}
		wallpaperPath = '/wallpaper.jpg'; // default wallpaper for the website
	});
</script>

<Dialog bind:dialog>
	<form method="dialog">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-5 top-5"
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="30">
				<path d="M20,20 L80,80 M80,20 L20,80" stroke="currentColor" stroke-width="5" />
			</svg>
		</button>
	</form>
	<div class="mx-auto flex flex-col justify-center">
		<a
			class="btn btn-ghost aria-current:underline decoration-2 underline-offset-8 text-xl"
			aria-current={$page.url.pathname === '/posts'}
			on:click={dialog.close()}
			href="/posts">Posts</a
		>
		<a
			class="btn btn-ghost aria-current:underline decoration-2 underline-offset-8 text-xl"
			aria-current={$page.url.pathname === '/projects'}
			on:click={dialog.close()}
			href="/projects">Projects</a
		>
		<a
			class="btn btn-ghost aria-current:underline decoration-2 underline-offset-8 text-xl"
			aria-current={$page.url.pathname === '/resume'}
			on:click={dialog.close()}
			href="/resume">Resume</a
		>
	</div>
</Dialog>

<main>
	<div class="flex flex-col h-12 mb-10">
		<div bind:this={navbar} class="navbar w-screen fixed h-12 z-10">
			<div class="navbar-start md:ml-40">
				<a class="btn btn-ghost px-2 normal-case text-xl" href="/">Shaamallow</a>
			</div>

			<div class="navbar-end md:mr-32">
				<div class="hidden lg:flex">
					<a
						class="btn btn-ghost aria-current:underline decoration-2 underline-offset-[6px]"
						aria-current={$page.url.pathname === '/posts'}
						href="/posts">Posts</a
					>
					<a
						class="btn btn-ghost aria-current:underline decoration-2 underline-offset-[6px]"
						aria-current={$page.url.pathname === '/projects'}
						href="/projects">Projects</a
					>
					<a
						class="btn btn-ghost aria-current:underline decoration-2 underline-offset-[6px]"
						aria-current={$page.url.pathname === '/resume'}
						href="/resume">Resume</a
					>
				</div>

				<div class="mt-1 lg:ml-2 mr-2">
					<label class="swap swap-rotate group">
						<!-- this hidden checkbox controls the state -->
						<input
							type="checkbox"
							class="theme-controller"
							value="catppuccin-latte"
							on:change={toggleTheme}
						/>
						<!-- sun icon -->
						<svg
							class="swap-on w-7 h-7 fill-current group-hover:fill-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
							/></svg
						>

						<!-- moon icon -->
						<svg
							class="swap-off fill-current w-7 h-7 group-hover:fill-black"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
							/></svg
						>
					</label>
				</div>

				<button class="btn btn-ghost lg:hidden" on:click={() => dialog.showModal()}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16 M4 12h16 M4 18h16"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>

	<div class="fixed inset-x-0 top-0" style="z-index: -10;">
		{#if $lightTheme}
			<div
				class="opacity-60 absolute inset-x-0 h-[1000px] bg-gradient-to-t from-neutral to-transparent mix-blend-normal"
				transition:fade={{ duration: 200 }}
			/>
			<div
				class="opacity-60 absolute inset-x-0 h-[1000px] bg-gradient-to-t from-neutral-800 to-neutral-100 mix-blend-normal"
				transition:fade={{ duration: 200 }}
			/>
		{:else}
			<div
				class="opacity-60 absolute inset-x-0 h-[1000px] bg-gradient-to-t from-neutral-800 to-transparent mix-blend-normal"
				transition:fade={{ duration: 200 }}
			/>
			<div
				class="opacity-60 absolute inset-x-0 h-[1000px] bg-gradient-to-t from-neutral-800 to-neutral-800 mix-blend-normal"
				transition:fade={{ duration: 200 }}
			/>
		{/if}
		<img src={wallpaperPath} alt="" class="w-full h-[1000px] object-cover m-0 nozoom" />
	</div>

	<slot />

	<footer class="grid gap-4 grid-cols-3 items-center grid-rows-1 px-6 pb-4" bind:this={footDiv}>
		<div class="text-left text-base-200 text-sm p-2 col-span-2 md:ml-36">
			© 2024 - Eyal Benaroche
		</div>
		<div class="p-2 place-self-end md:mr-28">
			<a href="https://github.com/Shaamallow/" target="_blank"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="40"
					height="40"
					viewBox="0 0 30 30"
					class="fill-base-200"
				>
					<path
						d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
					/>
				</svg></a
			>
		</div>
	</footer>
</main>
