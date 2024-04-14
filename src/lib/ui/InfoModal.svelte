<script>
	import { version } from '$app/environment';
</script>

<div class="modal-box flex flex-col gap-1">
	<h2 class="text-center text-2xl font-bold">legalpad</h2>
	<p class="text-center">v{version}</p>
	<p class="text-center">
		This app is licensed under <a href="https://www.mozilla.org/en-US/MPL/2.0/" class="underline"
			>MPLv2</a
		>. You are free to use/modify it according to the license terms.
	</p>
	<details>
		<summary class="text-center text-sm">Disclaimer</summary>
		<div class="flex flex-col gap-2 text-sm">
			<p>
				This website is a static site built for informational purposes only. It may contain code,
				content, and resources originating from third-party sources. The use of any such third-party
				material is not intended to infringe upon the rights of the respective copyright holders.
			</p>

			<p>
				All original content on this site is published in good faith that it does not violate any
				copyright laws. However, if you believe that your copyrighted work has been used in a way
				that constitutes copyright infringement, please contact me immediately so we can rectify the
				situation.
			</p>

			<p>
				Regarding the use of third-party code libraries and frameworks, it is understood that these
				are licensed under their own respective terms. No claim of ownership or affiliation is made
				over this third-party code. Users of this site are advised to review the applicable licenses
				of any external code, libraries or plugins used.
			</p>

			<p>
				By using this website, you agree that the author shall not be held liable for any copyright
				issues arising from the use of third-party material. The responsibility falls on the users
				to ensure they are in compliance with the licenses of any code they choose to use or copy
				from this site.
			</p>

			<p>
				If you have any questions or concerns regarding the copyright of material on this static
				website, please contact us for further clarification.
			</p>
		</div>
	</details>

	<p class="text-center text-sm">
		<a href="https://github.com/lewisleedev/legalpad" class="underline">Source Code</a> /
		<a href="https://github.com/lewisleedev/legalpad/issues" class="underline">Report bugs</a>
	</p>
	<p class="text-center text-sm">
		Made with ❤️ by <a href="https://github.com/lewisleedev" class="underline">@lewisleedev</a>
	</p>
</div>
<form method="dialog" class="modal-backdrop">
	<button>close</button>
</form>
