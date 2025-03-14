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
	<div style="visibility: hidden; height: 0;">
		<iframe style="width: 100%; height: 75vh;"
						src="https://open.spotify.com/embed/artist/3C3IxXuW9aRAlwvooDiCJM?utm_source=generator&theme=0"
						width="50%" height="700" frameBorder="0" allowFullScreen={false}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						datatype={'audio/mpeg'}
						itemProp={'audio'}
						title={'Unthynck'}
		></iframe>
	</div>
</section>