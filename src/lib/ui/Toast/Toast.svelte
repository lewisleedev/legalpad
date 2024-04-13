<script lang="ts">
	import { toastStore } from '$lib/stores/uiStore';
	import { fade } from 'svelte/transition';
</script>

<div class="toast z-40">
	{#each $toastStore as toast}
		<div class={`alert ${toast.color} rounded-sm`} out:fade={{ duration: 300 }}>
			{toast.message}
		</div>
	{/each}
</div>
