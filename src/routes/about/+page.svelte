<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20">
	<div class="flex flex-col items-center justify-stretch mb-40 mt-12 group max-w-3xl mx-auto">
		<div class="md:flex block justify-center items-center md:mt-3 mb-6">
			<h1
				class="font-display text-center text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3"
			>
				About me
			</h1>

			<a href="/cv.pdf" target="_blank" class=" transition md:hover:scale-105 md:ml-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto"
					width="100"
					height="100"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					fill="hsl(var(--bc))"
					stroke="hsl(var(--b1))"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M14 3v4a1 1 0 0 0 1 1h4" />
					<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
					<path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
					<path d="M13 11l1.5 6l1.5 -6" />
				</svg>
			</a>
		</div>

		<p class="text-justify m-5">
			Hello, I'm Eyal Benaroche, a third year engineering student at Ecole Polytechnique. I serve as
			both the Treasurer and one of the system administrator of Binet Réseau. Additionallyn I'm the
			captain and setter of Polytechnique's volleyball team and practice from 6 to 10 hour a week.
		</p>

		<div class="divider m-10" />

		<h2
			class="font-display text-center text-4xl md:text-6xl font-bold bg-clip-text bg-secondary mb-3"
		>
			Education
		</h2>

		<div class="divider m-10" />

		<h2
			class="font-display text-center text-4xl md:text-6xl font-bold bg-clip-text bg-secondary mb-3"
		>
			Experience
		</h2>

		<div class="divider m-10" />

		<h2
			class="font-display text-center text-4xl md:text-6xl font-bold bg-clip-text bg-secondary mb-3"
		>
			Hobbies
		</h2>
	</div>
</main>
