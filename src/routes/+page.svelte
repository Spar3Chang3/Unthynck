<script lang="js">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/landing-page');
	});
</script>
<style>
	.redirect {
			display: flex;
			flex-direction: column;

			height: 80vh;
			width: 100vw;

			justify-content: center;
			align-items: center;

			color: var(--text-standard);
			background-color: var(--background-standard);
	}
	.content {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;
			text-align: center;

      font-family: var(--font-special);
			font-size: 3rem;
			line-height: 2rem;
	}

</style>
<title>Connecting to page</title>

<section class="redirect">
	<div class="content">
		<h1>You are being redirected</h1>
		<h2>Please wait...</h2>
	</div>
</section>