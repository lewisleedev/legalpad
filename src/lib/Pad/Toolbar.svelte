<script>
	import {
		ClipboardCopy,
		ClipboardPaste,
		Undo,
		Redo,
		AlignLeft,
		AlignRight,
		AlignCenter,
		AlignJustify
	} from 'lucide-svelte';
	import { isCharOpen, zoomLevel } from '$lib/stores/padStore';
	import { toastStore } from '$lib/stores/uiStore';
</script>

<div class="toolbar primary-content bg-primary">
	<div class="toolbar-wrapper">
		<button
			on:click={() => {
				document.execCommand('copy', false);
			}}
			class="btn btn-square btn-sm"><ClipboardCopy></ClipboardCopy></button
		>
		<button
			title="Pasting is disabled due to limitations of web browsers. See MDN."
			on:click={() => {
				toastStore.addToast(
					{
						color: 'alert-warning',
						message: 'Pasting is disabled'
					},
					5000
				);
			}}
			class="btn btn-square btn-sm"
			><ClipboardPaste></ClipboardPaste>
		</button>
		<button
			on:click={() => {
				document.execCommand('undo', false); // Sure I can do better than this but every time I put this in other function it somehow refueses to work correctly.
			}}
			class="btn btn-square btn-sm"
			><Undo></Undo>
		</button>
		<button
			on:click={() => {
				document.execCommand('redo', false);
			}}
			class="btn btn-square btn-sm"><Redo></Redo></button
		><button
			on:click={() => {
				document.execCommand('justifyLeft', false);
			}}
			class="btn btn-square btn-sm"><AlignLeft></AlignLeft></button
		>
		<button
			on:click={() => {
				document.execCommand('justifyCenter', false);
			}}
			class="btn btn-square btn-sm"><AlignCenter></AlignCenter></button
		>
		<button
			on:click={() => {
				document.execCommand('justifyRight', false);
			}}
			class="btn btn-square btn-sm"
		>
			<AlignRight></AlignRight></button
		>
		<button
			on:click={() => {
				document.execCommand('justifyFull', false);
			}}
			class="btn btn-square btn-sm"><AlignJustify></AlignJustify></button
		>
		<span class="separ bg-primary-content"></span>
		<span class="desc text-primary-content">화면크기</span>

		<div class="tooltip tooltip-right tooltip-warning" data-tip="This is experimental.">
			<select
				name="zoom-level"
				id="zoom-level"
				bind:value={$zoomLevel}
				on:change={() => ($isCharOpen = false)}
				class="select select-sm"
			>
				<option value="12.8">80%</option>
				<option value="16">100%</option>
				<option value="20.8">130%</option>
				<option value="24">150%</option>
				<option value="32">200%</option>
			</select>
		</div>
		<span class="separ bg-primary-content"></span>
		<button
			class="btn-text btn btn-sm"
			on:click={() => {
				$isCharOpen ? ($isCharOpen = false) : ($isCharOpen = true);
			}}>※ 문자표</button
		>
	</div>
</div>

<style lang="postcss">
	.toolbar {
		width: 100%;
		display: flex;
	}

	.toolbar-wrapper {
		margin: auto;
		padding: 0.5rem;
		display: flex;
		gap: 0.3rem;
		button {
			position: relative;
			display: flex;
			border: none;
			border-radius: 0.5rem;
		}
		button.btn-text {
			width: fit-content;
			font-size: 0.8rem;
			display: inline-block;
			padding: 0px 0.5rem;
			font-weight: bold;
		}
	}

	span.separ {
		margin: auto 1rem;
		display: inline-block;
		width: 1px;
		height: 2rem;
	}
	span.desc {
		margin: auto 1rem auto 0px;
		display: inline-block;
		font-weight: bold;
	}
</style>
