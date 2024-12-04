<script lang="js">
	import Cassette from '$lib/components/music/Cassette.svelte';
	import { Titles } from '$lib/utils/Global.js';
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = Titles.music
	});

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

			height: fit-content;
			width: 100vw;

			overflow-x: hidden;
	}
</style>
