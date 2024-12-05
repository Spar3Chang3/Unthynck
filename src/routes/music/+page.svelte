<script lang="js">
	import Cassette from '$lib/components/music/Cassette.svelte';
	import SongSelection from '$lib/components/music/SongSelection.svelte';
	import { Titles } from '$lib/utils/Global.js';
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = Titles.music
	});

</script>
<section class="music">
		<Cassette />
		<SongSelection />
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

			gap: 8rem;

			overflow-x: hidden;
	}
</style>
