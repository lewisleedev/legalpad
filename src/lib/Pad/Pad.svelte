<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { isCharOpen } from '$lib/stores/padStore';
	import SpecialChars from './SpecialChars.svelte';

	import Editor from './Editor.svelte';
	import Toolbar from './Toolbar.svelte';
	import PageNav from './PageNav.svelte';

	export let editorValue: string;
	let editorComp: SvelteComponent;

	export function updateEditor() {
		editorComp.updateEditorStat();
	}

	$: editorValue;
</script>

<div class="wrapper">
	<Toolbar />
	<div class="editor-wrapper">
		<Editor bind:this={editorComp} bind:editorValue on:input />
		{#if $isCharOpen}
			<SpecialChars />
		{:else}
			<PageNav></PageNav>
		{/if}
	</div>
</div>

<style lang="postcss">
	.wrapper {
		margin: auto;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}
	.editor-wrapper {
		overflow: auto;
		width: 100%;
		display: flex;
		background: #e8ebf1;
		margin: auto;
	}
</style>
