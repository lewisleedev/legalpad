<script>
	import '../app.pcss';
	import Toast from '$lib/ui/Toast/Toast.svelte';
</script>

<Toast />

<div class="flex h-screen flex-col">
	<slot />
</div>
