<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mx-auto p-4 md:px-20">
	<div class="flex flex-col items-center justify-stretch mb-40 mt-20 group max-w-3xl mx-auto">
		<h1 class="font-display text-5xl md:text-7xl font-bold mb-3 text-center">
			{$page.status}
		</h1>
		<div class="text-center max-w-md">{$page.error?.message}</div>
		<div class="text-center max-w-md italic">Seems like I fucked up</div>
	</div>
</div>

