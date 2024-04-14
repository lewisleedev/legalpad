<script lang="ts">
	import { editorStore, zoomLevel } from '$lib/stores/padStore';
	import { toastStore } from '$lib/stores/uiStore';
	import { onMount } from 'svelte';
	import { getPageNumber } from './utils';
	import LineCounter from './LineCounter.svelte';

	let editorElem: HTMLElement;
	let editorFontSize = 16;

	export let editorValue: string;
	const getLineNumber = (editorElem: HTMLElement) => {
		let h = editorElem.getBoundingClientRect().height;
		let lineHeight = editorFontSize * 1.5;
		let lineNumber = Math.floor(h / lineHeight);
		return lineNumber;
	};

	export const updateEditorStats = () => {
		$editorStore.lineNumber = getLineNumber(editorElem);
		$editorStore.pageNumber = getPageNumber($editorStore.lineNumber);
		if ($editorStore.lineNumber >= 329) {
			toastStore.addToast(
				{
					color: 'alert-warning',
					message: '10쪽을 초과할 수 없습니다.'
				},
				3000
			);
			document.execCommand('undo', false);
		}
	};

	onMount(() => {
		updateEditorStats();
	});
</script>

<div class="pad-container" style={`font-size: ${$zoomLevel}px`}>
	<main class="pad-wrapper mx-auto mt-auto">
		<LineCounter />
		<div class="editor-wrapper">
			<div
				id="editor"
				class="editor"
				contenteditable="true"
				spellcheck="false"
				bind:this={editorElem}
				on:input={() => {
					updateEditorStats();
					localStorage.setItem('legalpadContent', editorValue);
					$editorStore.hasChanged = true;
				}}
				bind:innerHTML={editorValue}
			>
				<div></div>
			</div>
		</div>
	</main>
</div>

<style lang="postcss">
	.pad-container {
		width: 100%;
		height: 100%;
		padding-top: 2rem;
		padding-bottom: 0rem;
		display: flex;
		overflow: auto;
		font-size: 16px;
	}
	.pad-wrapper {
		height: 100%;
		overflow-y: scroll;
		display: flex;
	}

	.editor-wrapper {
		margin-right: auto;

		/* Shamelessly taken from the official website. */
		height: 492em; /* Total 328 lines */
		width: 49em !important;
		min-width: 49em;
		max-width: 49em;
		background-image: repeating-linear-gradient(
				rgba(247, 247, 247, 0.8),
				rgba(247, 247, 247, 0.8) calc(45em),
				rgba(227, 235, 241, 0.8) calc(45em),
				rgba(227, 235, 241, 0.8) calc(96em),
				rgba(247, 247, 247, 0.8) calc(96em),
				rgba(247, 247, 247, 0.8) calc(147em),
				rgba(227, 235, 241, 0.8) calc(147em),
				rgba(227, 235, 241, 0.8) calc(198em)
			),
			repeating-linear-gradient(
				transparent,
				transparent calc(1.5em - 1px),
				rgb(25, 22, 43) calc(1.5em - 1px),
				rgb(25, 22, 43) calc(1.5em)
			);

		#editor {
			min-height: 1em;
			pointer-events: all;
			cursor: auto;
			user-select: auto;
			line-height: calc(1em * 3 / 2);
			word-break: break-all;
			line-break: anywhere !important;
			font-family: Malgun Gothic !important;
			font-size: 1em; /* 16px */
			&:focus {
				outline: none;
			}
		}
	}
</style>
