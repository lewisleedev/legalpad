<script lang="ts">
	import { editorStore } from '$lib/stores/padStore';

	const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<div class="absolute right-0 z-0 m-2 h-fit rounded-md bg-base-300 p-2 xl:p-4">
	<div class="grid grid-cols-2 gap-x-1 gap-y-2">
		{#each rows as row}
			<button
				class="btn btn-square btn-sm xl:btn-md"
				class:btn-primary={$editorStore.pageNumber >= row}
				class:btn-disabled={$editorStore.pageNumber < row}
				on:click={() => {
					const targetAnchor = document.getElementById(`page${row}a`);
					targetAnchor.scrollIntoView();
				}}>{row}쪽</button
			>
		{/each}
	</div>
</div>
