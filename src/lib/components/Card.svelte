<script lang="ts">
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';

	export let data: Post;
	let link: string;

	// conditional link on presence of url or not

	if (data.url) {
		link = data.url;
	} else {
		link = `/posts/${data.slug}`;
	}
</script>

<div
	class="min-h-full border border-base-200 rounded shadow-2xl backdrop-blur hover:scale-105 transition ease-in-out duration-200 overflow-hidden"
>
	<a href={link} target={data.url ? '_blank' : '_self'} rel="noreferrer">
		<div
			class="w-full h-[200px] bg-cover bg-center"
			style="background-image:url({data.wallpaper})"
		/>
		<div class="m-4 mb-8">
			<div class="font-bold text-xl">{data.title}</div>
			<div class="text-base-200 overflow-hidden w-full h-12">{data.description}</div>
			<div class="text-base-200">{formatDate(data.date)}</div>
			<div id="tags" class="flex flex-wrap gap-2 my-2 items-start">
				{#each data.tags as tag}
					{#if tag.toLowerCase() == 'external'}
						<div class="border-current border p-1 rounded-md text-xs text-warning">
							{tag.toLowerCase()}
						</div>
					{:else if tag.toLowerCase() == 'github'}
						<div class="border-current border p-1 rounded-md text-xs text-accent">
							{tag.toLowerCase()}
						</div>
					{:else if tag.toLowerCase() == 'arxiv'}
						<div class="border-current border p-1 rounded-md text-xs text-error">
							{tag.toLowerCase()}
						</div>
					{:else}
						<div class="border-current border p-1 rounded-md text-xs text-primary">
							{tag.toLowerCase()}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</a>
</div>
