<script lang="ts">
	import { editorStore } from '$lib/stores/padStore';
	import { getPageNumber, pageBreakLineNs } from './utils';
</script>

<div class="line-counter-wrapper">
	{#each [...Array($editorStore.lineNumber).keys()] as k}
		{@const isPageBreak = pageBreakLineNs.includes(k + 1)}
		{@const currPageNumber = getPageNumber(k + 1)}
		{#if (k + 1) % 5 == 0 || isPageBreak}
			{#if isPageBreak}
				<div class="line-counter visible" id={`page${currPageNumber}a`}>
					<span>({currPageNumber}쪽) {k + 1}</span>
				</div>
			{:else}
				<div class="line-counter visible"><span>{k + 1}</span></div>
			{/if}
		{:else}
			<div class="line-counter"></div>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.line-counter-wrapper {
		margin-left: auto;
		min-width: 4em;
		font-size: 0.6em;
		overflow-y: visible;

		.line-counter {
			height: calc(2.5em); /* Because 0.6/1.5 = 2.5 */
			margin-right: 1rem;
			margin-left: auto;
			margin-bottom: auto;
			margin-top: 0px;
			text-align: right;
			display: flex;
			span {
				margin: auto 0px auto auto;
				display: inline-block;
			}
		}
		.visible {
			border-bottom: 1px solid #1e90ff;
		}
	}
</style>
