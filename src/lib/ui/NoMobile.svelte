<script>
	import { isMobile } from '$lib/stores/uiStore';
</script>

<div class="flex h-screen flex-col">
	<div class="m-auto flex flex-col p-4">
		<h1 class="mb-2 text-center text-2xl font-bold">모바일은 지원하지 않습니다</h1>
		<p class="text-center">태블릿 등 대화면 모바일 기기는 부분적으로 사용 가능합니다</p>
		<button
			class="btn mx-auto mt-2"
			on:click={() => {
				$isMobile = false;
			}}>계속하기</button
		>
	</div>
</div>
