<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { editorStore } from '$lib/stores/padStore';
	import { LucideUpload, Save } from 'lucide-svelte';

	export let answerTitle: string;

	let widthMachine: HTMLElement;
	let titleInputBox: HTMLElement;

	const dispatch = createEventDispatcher();

	const handleEmptyTitle = () => {
		if (answerTitle === '') {
			answerTitle = 'Untitled Answer';
		}
		titleInputBox.style.width = Math.max(widthMachine.offsetWidth, 140) + 'px';
	};
	onMount(() => {
		handleEmptyTitle();
	});
</script>

<svelte:window
	on:beforeunload={(event) => {
		if ($editorStore.hasChanged) {
			event.preventDefault(); //Should be enough
		}
	}}
/>

<header class="flex w-full grow flex-row gap-2 bg-base-100 px-5">
	<div class="my-auto mr-auto min-w-4">
		<input
			type="text"
			class="text-lg hover:ring"
			bind:this={titleInputBox}
			maxlength="25"
			on:change={() => {
				handleEmptyTitle();
			}}
			on:input={handleEmptyTitle}
			bind:value={answerTitle}
		/>
		<span bind:this={widthMachine} style="visibility: hidden;" class="text-lg">{answerTitle}</span>
	</div>
	<div class="my-auto">
		<button
			class="btn btn-primary"
			on:click={() => {
				dispatch('loadFile');
			}}
		>
			<LucideUpload></LucideUpload>
		</button>
		<button
			class="btn btn-primary"
			on:click={() => {
				dispatch('saveFile', {
					saveTitle: answerTitle
				});
			}}
		>
			<Save></Save>
		</button>
	</div>
</header>
