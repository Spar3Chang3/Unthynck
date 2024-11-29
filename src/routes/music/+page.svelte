<script lang="js">
	import Cassette from '$lib/components/music/Cassette.svelte';
</script>
<section class="music">
		<Cassette />
</section>
<style lang="css">
	.music {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			min-height: 80vh;
			width: 100vw;
	}
</style>
