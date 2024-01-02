<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20">
	<div class="flex flex-col items-center justify-stretch mb-40 mt-12 group max-w-3xl mx-auto">
		<div class="md:flex block justify-center items-center md:mt-3 mb-6">
			<h1
				class="font-display text-center text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3"
			>
				Projects
			</h1>

			<a
				href="https://github.com/Shaamallow"
				target="_blank"
				class=" transition md:hover:scale-105 md:ml-3"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					fill="currentColor"
					width="100"
					height="100"
					viewBox="0 0 24 24"
					class="mx-auto"
				>
					<path
						d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"
					/>
				</svg>
			</a>
		</div>

		<p class="text-center m-5 italic">
			All projects are available on my <a
				href="https://github.com/Shaamallow"
				target="_blank"
				class="font-bold">GitHub</a
			> but you'll soon be able to learn a bit more here.
		</p>

		<div class="divider m-10" />

		<a href="https://github.com/Shaamallow/VolleyVision" target="_blank">
			<div
				class="w-58 md:h-[24rem] md:w-[45rem] rounded-[1rem] bg-neutral shadow-xl
      focus outline-2 focus:outline focus:outline-transparent overflow-hidden md:hover:translate-y-4 transition duration-200 md:hover:scale-105"
			>
				<img src="/projects/volleyball.jpg" alt="Volleyball" />
			</div>
		</a>

		<p class="text-justify mt-8">
			Computer Vision and Deep learning applied to Volleyball to automate the study of the game for
			teams. Project in the course of the 3rd year at École Polytechnique.
		</p>
		<div class="divider m-10" />

		<a href="https://coupedelx.binets.fr" target="_blank">
			<div
				class="w-58 md:w-[45rem] rounded-[1rem] bg-neutral shadow-xl
		focus:outline-2 focus:outline focus:outline-transparent overflow-hidden md:hover:translate-y-4 transition duration-200 md:hover:scale-105"
			>
				<img src="/projects/c2x.png" alt="Affiche Coupe de l'X" />
			</div>
		</a>

		<p class="text-justify mt-8">
			Organized the 2023 edition of the Coupe de l'X, the 1st student sport tournament of the year
			in France. Also created the website.
		</p>

		<div class="divider m-10" />

		<a href="https://github.com/Shaamallow/PSC" target="_blank">
			<div
				class="w-58 md:w-[45rem] rounded-[1rem] bg-neutral shadow-xl
		focus:outline-2 focus:outline focus:outline-transparent overflow-hidden md:hover:translate-y-4 transition duration-200 md:hover:scale-105"
			>
				<img src="/projects/psc_logo.png" alt="Affiche Coupe de l'X" />
			</div>
		</a>

		<p class="text-justify mt-8">
			Created a tool that helps geographic analysts at UNESCO to grasp the stakes of a region’s
			education guidelines and compare worldwide. <br /> Year-long project under Dr. El Mahdi El
			Mhamdi and Emile Lucas from Illuin. <br /> Classification and feature extraction from documents
			with a focus on explainability using unsupervised learning.
		</p>

		<div class="divider m-10" />
	</div>
</main>
