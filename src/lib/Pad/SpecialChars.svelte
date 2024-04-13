<script>
	import { symbolsArray } from './charsList';
</script>

<div class="chars-wrapper">
	{#each symbolsArray as symbols}
		<div class="grid w-full grid-cols-10">
			{#each symbols as symbol}
				<button
					class="btn btn-square btn-sm"
					on:click={() => {
						document.execCommand('insertHTML', false, symbol);
					}}>{symbol}</button
				>
			{/each}
		</div>
	{/each}
</div>

<style lang="postcss">
	.chars-wrapper {
		margin: auto;
		padding: 1rem;
		width: 38%;
		height: 100%;
		background: hsla(0, 0%, 100%, 0.7);
		overflow-y: auto;
	}
	button {
		margin: 2px;
		width: 2rem;
		height: 2rem;
		border: none;
		cursor: pointer;
		font-size: 1.2rem;
	}
</style>
