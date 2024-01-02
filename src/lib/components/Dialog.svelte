<script lang="ts">
	export let dialog;
</script>

<dialog class="modal modal-top backdrop-blur-xl" bind:this={dialog} on:close>
	<slot />
</dialog>
