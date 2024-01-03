<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let data: Post;
</script>

<div
	class="min-h-full border border-base-200 rounded shadow-2xl backdrop-blur hover:scale-105 transition ease-in-out duration-200"
>
	<a href="/posts/{data.slug}">
		<div
			class="w-full h-[200px] bg-cover bg-center"
			style="background-image:url({data.wallpaper})"
		/>
		<div class="m-4 mb-8">
			<div class="font-bold text-xl">{data.title}</div>
			<div class="text-base-200 overflow-hidden w-full h-6">{data.description}</div>
			<div class="text-base-200">{formatDate(data.date)}</div>
			<div id="tags" class="flex flex-wrap gap-2 my-2 items-start">
				{#each data.tags as tag}
					<div class="border-current border p-1 rounded-md text-xs text-primary">{tag}</div>
				{/each}
			</div>
		</div>
	</a>
</div>
