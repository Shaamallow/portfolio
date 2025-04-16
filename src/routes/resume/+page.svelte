<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<main in:fade={{ duration: 400, delay: 100 }} class="mx-auto p-4 md:p-20 md:px-48">
	<h1 class="font-display text-left text-5xl md:text-7xl font-bold bg-clip-text bg-secondary mb-3">
		Resume
	</h1>

	<p class="text-left m-5 italic">
		I'm Eyal Benaroche, a third year engineering student at Ecole Polytechnique and Research
		Scientist working at Clipdrop
	</p>

	<div class="flex gap-5">
		<a href="/BENAROCHE_EYAL_CV_EN.pdf" target="_blank">
			<div class="btn btn-outline">Paper CV (in English)</div>
		</a>
		<a href="/BENAROCHE_EYAL_CV_FR.pdf" target="_blank">
			<div class="btn btn-outline">CV Papier (en Français)</div>
		</a>
	</div>

	<div class="divider mb-10" />

	<h3 class="font-display text-left text-xl md:text-3xl font-bold mb-3">Experience</h3>

	<div class="overflow-x-auto">
		<table class="table md:w-3/5">
			<thead>
				<tr class="text-md">
					<th>Company</th>
					<th>Link</th>
					<th>Role</th>
					<th>Date</th>
					<th>Location</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						<div class="w-[120px] bg-white flex items-center justify-center rounded">
							<div
								class="w-[110px] h-[120px] bg-contain bg-no-repeat bg-center rounded"
								style="background-image:url(https://blog.logomyway.com/wp-content/uploads/2021/11/meta-logo.png)"
							/>
						</div>
					</td>
					<td
						><a
							href="https://ai.meta.com/research/"
							class="font-bold text-md text-primary"
							target="_blank">FAIR</a
						>,
						<a
							href="https://www.metacareers.com/"
							class="font-bold text-md text-primary"
							target="_blank">Meta</a
						></td
					>
					<td>Research Scientist Intern</td>
					<td>April 2025 - September 2025</td>
					<td>Hybrid, Paris, France</td>
				</tr>

				<tr>
					<td>
						<div
							class="w-[120px] h-[100px] bg-cover bg-no-repeat bg-center rounded"
							style="background-image:url(https://static.clipdrop.co/web/homepage/preview.jpg)"
						/>
					</td>
					<td
						><a href="https://clipdrop.co/" class="font-bold text-md text-primary" target="_blank"
							>Clipdrop</a
						>
						by
						<a href="https://jasper.ai" class="font-bold text-md text-primary" target="_blank"
							>Jasper</a
						></td
					>
					<td>Research Scientist Intern</td>
					<td>April 2024 - August 2024</td>
					<td>Hybrid, Paris, France</td>
				</tr>

				<tr>
					<td>
						<div class="w-[120px] bg-white flex items-center justify-center rounded">
							<div
								class="w-[110px] h-[120px] bg-contain bg-no-repeat bg-center rounded"
								style="background-image:url(https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg)"
							/>
						</div>
					</td>
					<td
						><a
							href="https://www.fujitsu.com/global/"
							class="font-bold text-md text-primary"
							target="_blank">Fujitsu Limited</a
						></td
					>
					<td>Research Scientist Intern</td>
					<td>Summer 2023</td>
					<td>Hybrid, Tokyo, Japan</td>
				</tr>

				<tr>
					<td>
						<div class="w-[120px] h-[120px] bg-white flex items-center justify-center rounded">
							<div
								class="w-[101px] h-[100px] bg-cover bg-center rounded"
								style="background-image:url(/logo/binet_reseau.png)"
							/>
						</div>
					</td>

					<td>
						<a href="https://br.binets.fr/" target="_blank" class="font-bold text-md text-primary"
							>Binet Réseau</a
						>
					</td>
					<td> System Administrator & Treasurer </td>
					<td>November 2022 - December 2023</td>
					<td>Ecole Polytechnique, France</td>
				</tr>

				<tr>
					<td>
						<div class="w-[120px] h-[120px] bg-white flex items-center justify-center rounded">
							<div
								class="w-[80px] h-[110px] bg-cover bg-center rounded"
								style="background-image:url(https://esperancebanlieues.org/wp-content/uploads/2020/06/LOGO.png)"
							/>
						</div>
					</td>

					<td>
						<a
							href="https://courserictabarly.esperancebanlieues.org/"
							target="_blank"
							class="font-bold text-md text-primary">Cours Eric Tabarly</a
						> (Non Profit)
					</td>
					<td>Teacher</td>
					<td>October 2021 - April 2022</td>
					<td>Toulon, France</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="divider my-10" />

	<h3 class="font-display text-left text-xl md:text-3xl font-bold mb-3">Academics</h3>

	<div class="overflow-x-auto">
		<table class="table md:w-3/5">
			<thead>
				<tr class="text-md">
					<th>School</th>
					<th>Link</th>
					<th>Degree</th>
					<th>Date</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						<div class="w-[120px] h-[160px] bg-white flex items-center justify-center rounded">
							<div
								class="w-[120px] h-[160px] bg-contain bg-no-repeat bg-center rounded"
								style="background-image:url(https://etudestech.com/wp-content/uploads/2022/11/mines-paris.png)"
							/>
						</div>
					</td>
					<td
						><a
							href="https://www.minesparis.psl.eu/"
							class="font-bold text-md text-primary"
							target="_blank">Ecole Des Mines de Paris</a
						></td
					>
					<td>
						<div class="border-b pb-2 mb-2 border-base-300">Engineering Degree</div>
						<div>Master of Science in Engineering</div>
					</td>
					<td>2024-2025</td>
				</tr>

				<tr>
					<td>
						<div
							class="w-[120px] h-[160px] bg-cover bg-center rounded"
							style="background-image:url(https://upload.wikimedia.org/wikipedia/fr/2/2a/Polytechnique_logo_2013.svg)"
						/>
					</td>
					<td
						><a
							href="https://www.polytechnique.edu/en"
							class="font-bold text-md text-primary"
							target="_blank">Ecole polytechnique</a
						></td
					>
					<td>
						<div class="border-b pb-2 mb-2 border-base-300">Engineering Degree</div>
						<div>Master of Science in Engineering</div>
					</td>
					<td>2021-2024</td>
				</tr>

				<tr>
					<td>
						<div
							class="w-[120px] h-[160px] bg-cover bg-center rounded"
							style="background-image:url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Lyc%C3%A9e_Hoche_%C3%A0_Versailles_le_19_septembre_2015_-_10_%28Cropped%29.jpg)"
						/>
					</td>

					<td>
						<a
							href="https://lyc-hoche-versailles.ac-versailles.fr/spip.php?rubrique5"
							target="_blank"
							class="font-bold text-md text-primary">Lycée Hoche</a
						>
					</td>
					<td>
						<div class="border-b pb-2 mb-2 border-base-300">Classe Préparatoire PCSI - PSI*</div>
						<div>
							Preparatory Classes <a
								class="underline text-primary"
								href="https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles"
								target="_blank">(more details)</a
							>
						</div>
					</td>
					<td>2019-2021</td>
				</tr>
			</tbody>
		</table>
	</div>
</main>
