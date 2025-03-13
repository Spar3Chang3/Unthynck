<script lang="js">
	import { page } from '$app/state';
</script>

<style lang="css">
	.error {
			display: flex;
			flex-direction: column;

			min-height: 79.8vh;
			width: 100vw;

			justify-content: center;
			align-items: center;
			text-align: center;

      font-family: var(--font-special);
			color: var(--text-standard);
	}

	.error-content {
			display: flex;
			flex-direction: row;
			width: fit-content;

			font-size: 2rem;
	}
</style>

<section class="error">
	<div class="error-content">
		<h2>{page.status}</h2>
		<h1>&nbsp;│&nbsp;</h1>
		<h2>{page.error.message}</h2>
	</div>
</section>