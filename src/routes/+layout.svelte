<script lang="ts">
	import type { LayoutData } from './$types';
	import TypeWriter from 'svelte-typewriter';
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	let greetings = ['Hello there !', 'Welcome aboard Captain', 'Hail on deck'].sort(
		() => Math.random() - 0.5
	);

	onMount(() => {
		themeChange(false);
	});
</script>

<main>
	<div class="anim-gradient flex flex-col h-56 md:h-[23rem]">
		<div
			class="navbar bg-neutral/70 shadow-xl w-screen fixed h-12 z-10 backdrop-blur-md border-b border-neutral/20"
		>
			<!--NAVBAR-->
			<div class="navbar-start">
				<a class="btn btn-ghost normal-case text-xl" href="/">Shaamallow</a>
			</div>

			<div class="navbar-center">
				<label class="swap swap-rotate">
					<!-- this hidden checkbox controls the state -->
					<input
						type="checkbox"
						data-toggle-theme="catppuccin-frappe,catppuccin-latte"
						data-act-class="ACTIVECLASS"
					/>
					<!-- sun icon -->
					<svg
						class="swap-on fill-current w-8 h-8"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/></svg
					>

					<!-- moon icon -->
					<svg
						class="swap-off fill-current w-8 h-8"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/></svg
					>
				</label>
			</div>

			<div class="navbar-end">
				<div class="dropdown dropdown-end lg:hidden">
					<div tabIndex={0} class="btn btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</div>
					<ul
						tabIndex={0}
						class="menu menu-sm p-3 dropdown-content bg-neutral/70 backdrop-blur-md rounded-box mt-3 w-52"
					>
						<li class="grid place-items-center"><a href="/about">About</a></li>
						<li class="grid place-items-center"><a href="/projects">Projects</a></li>
						<li class="grid place-items-center"><a href="/blog">Blog</a></li>
						<li class="grid place-items-center"><a href="/contact">Contact</a></li>
					</ul>
				</div>

				<div class="hidden lg:flex">
					<a class="btn btn-ghost" href="/about">About</a>
					<a class="btn btn-ghost" href="/projects">Projects</a>
					<a class="btn btn-ghost" href="/blog">Blog</a>
					<a class="btn btn-ghost" href="/contact">Contact</a>
				</div>
			</div>
		</div>

		<div class="grid place-items-center flex-grow mt-12">
			<h1 class="font-display text-center text-4xl md:text-8xl font-bold text-white">
				<TypeWriter delay={200}>
					{greetings[0]}
				</TypeWriter>
			</h1>
		</div>
	</div>

	<slot />
</main>

<style>
	.anim-gradient {
		background: linear-gradient(
			300deg,
			rgb(var(--ctp-red)),
			rgb(var(--ctp-peach)),
			rgb(var(--ctp-yellow)),
			rgb(var(--ctp-green)),
			rgb(var(--ctp-blue)),
			rgb(var(--ctp-mauve))
		);

		background-size: 360% 360%;
		animation: gradient-animation 24s ease infinite;
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
