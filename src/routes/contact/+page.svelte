<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20">
	<div class="flex flex-col items-center justify-stretch mb-40 mt-12 group max-w-3xl mx-auto">
		<div class="md:flex block justify-center items-center md:mt-3 mb-6">
			<h1
				class="font-display text-center text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3"
			>
				Contact
			</h1>

			<a
				href="https://linkedin.com/in/eyal-benaroche"
				target="_blank"
				class=" transition md:hover:scale-105 md:ml-3"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					fill="hsl(var(--bc))"
					width="100"
					height="100"
					viewBox="0 0 50 50"
				>
					<path
						d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
					/>
				</svg>
			</a>
		</div>

		<p class="text-center m-5 italic">The easiest way is to contact me on LinkedIn</p>
	</div>
</main>
