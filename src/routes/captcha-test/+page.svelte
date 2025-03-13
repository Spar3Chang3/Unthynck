<script lang="js">
	import Captcha from '$lib/components/layout/Captcha.svelte';
</script>
<style lang="css">
	.captcha-test {
			display: flex;
			flex-direction: column;

			height: 80vh;
			width: 100vw;

			justify-content: center;
			align-items: center;
			background-color: whitesmoke;
	}
</style>
<section class="captcha-test">
	<Captcha />
</section>