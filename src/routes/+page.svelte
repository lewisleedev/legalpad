<script lang="ts">
	import Pad from '$lib/Pad/Pad.svelte';
	import Header from '$lib/ui/Header/Header.svelte';
	import { onMount, type SvelteComponent } from 'svelte';
	import { isMobile } from '$lib/stores/uiStore';
	import NoMobile from '$lib/ui/NoMobile.svelte';
	import { version } from '$app/environment';

	let editorVal: string;
	let answerTitle = '';
	let editorComp: SvelteComponent;

	function saveToFile(title: string) {
		const blob = new Blob([editorVal], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = title + '.legalpad';
		a.click();
		URL.revokeObjectURL(url);
	}

	function triggerFileInput() {
		document.getElementById('fileInput')?.click();
	}

	function loadFile(event: Event) {
		const file = event.target?.files[0];
		if (!file) {
			return;
		}

		const filename = file.name;
		const filenameParts = filename.split('.');
		if (filenameParts.length > 1) {
			filenameParts.pop();
		}
		answerTitle = filenameParts.join('.');

		const reader = new FileReader();
		reader.onload = (e) => {
			const cleanData = e.target?.result;
			editorVal = cleanData;
		};
		reader.readAsText(file);
		editorComp.updateEditor();
	}

	function loadLocalStorage() {
		const savedContent = localStorage.getItem('legalpadContent');
		const savedTitle = localStorage.getItem('legalpadTitle');
		if (savedContent && savedTitle) {
			editorVal = savedContent;
			answerTitle = savedTitle;
		}
		editorComp.updateEditor();
	}

	onMount(() => {
		if (window.innerWidth < 900) {
			$isMobile = true;
		}
	});
	$: editorVal;
	$: answerTitle;
</script>

{#if $isMobile}
	<NoMobile></NoMobile>
{:else}
	<header class="flex grow">
		<Header
			{answerTitle}
			on:saveFile={(e) => {
				saveToFile(e.detail.saveTitle);
			}}
			on:loadFile={triggerFileInput}
			on:loadLocal={loadLocalStorage}
		></Header>
		<input type="file" id="fileInput" on:change={loadFile} hidden />
	</header>
	<div class="wrapper bg-[#e8ebf1]">
		<Pad bind:this={editorComp} bind:editorValue={editorVal} />
		<footer class="py-1 text-center">
			<p class="p-1 text-black text-opacity-50">
				Legalpad v{version} |
				<a href="https://github.com/lewisleedev/legalpad" class="underline">Source code</a> | Made for
				Seol
			</p>
		</footer>
	</div>
{/if}

<style lang="postcss">
	.wrapper {
		display: flex;
		width: 100%;
		height: 90vh;
		flex-direction: column;
	}
	header {
		background: skyblue;
	}
</style>
