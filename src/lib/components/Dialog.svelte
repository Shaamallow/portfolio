<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	let { dialog = $bindable(), children } = $props();
</script>

<dialog class="modal modal-top backdrop-blur-xl" bind:this={dialog} onclose={bubble('close')}>
	{@render children?.()}
</dialog>
