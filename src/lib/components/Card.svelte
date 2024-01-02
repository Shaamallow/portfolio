<script lang="ts">
	interface Post {
		headers: {
			title: string;
			date: string;
			wallpaper: string;
			tags: string[];
		};
		body: {
			content: string;
		};
	}

	export let data: Post;
</script>

<div
	class="min-h-full border border-base-200 rounded overflow-hidden shadow-2xl relative backdrop-blur hover:scale-105 transition ease-in-out duration-200"
>
	<div
		class="w-full h-[200px] bg-cover bg-center"
		style="background-image:url({data.headers.wallpaper})"
	/>
	<div class="m-4 mb-8">
		<h1 class="font-bold text-xl">{data.headers.title}</h1>
		<div class="text-base-200">{data.headers.date}</div>
		<div id="tags" class="flex flex-wrap gap-2 my-2 items-start">
			{#each data.headers.tags as tag}
				<div class="border-current border p-1 rounded-md text-xs text-primary">{tag}</div>
			{/each}
		</div>
	</div>
</div>
