<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	export let data: LayoutData;
</script>

<main>
	<div class="anim-gradient flex flex-col h-48">
		<div
			class="navbar bg-neutral/70 shadow-xl w-screen fixed h-12 z-10 backdrop-blur-md border-b border-neutral/20"
		>
			<div class="navbar-start">
				<a class="btn btn-ghost normal-case text-xl" href="/">Shaamallow</a>
			</div>

			<div class="navbar-end">
				<div class="dropdown dropdown-end md:hidden">
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
						<li class="grid place-items-center"><a href="/sports">Sports</a></li>
						<li class="grid place-items-center"><a href="/dashboard">Dashboard</a></li>
						<li class="grid place-items-center"><a href="/project">Projects</a></li>
						<li class="grid place-items-center"><a href="/contact">Contact</a></li>
					</ul>
				</div>

				<div class="hidden md:flex">
					<a class="btn btn-ghost" href="/about">About</a>
					<a class="btn btn-ghost" href="/sports">sports</a>
					<a class="btn btn-ghost" href="/dashboard">Dashboard</a>
					<a class="btn btn-ghost" href="/project">Projects</a>
					<a class="btn btn-ghost" href="/contact">Contact</a>
				</div>
			</div>
		</div>
		<div class="grid place-items-center flex-grow mt-12">
			<h1 class="font-display text-2xl md:text-8xl font-bold text-white">Welcome aboard captain</h1>
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
		animation: gradient-animation 36s ease infinite;
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
