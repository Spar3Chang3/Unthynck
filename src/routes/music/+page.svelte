<script lang="js">
	import Cassette from '$lib/components/music/Cassette.svelte';
	import SongSelection from '$lib/components/music/SongSelection.svelte';
	import Playlist from '$lib/components/music/Playlist.svelte';
	import { Titles } from '$lib/index.js';
	import { onMount } from 'svelte';

	function jumpToSongSelection(e) {
		e.preventDefault();

		const songSelection = document.getElementById('song-selection');

		songSelection.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		});
	}

	function jumpToCassette(e) {
		e.preventDefault();

		const cassette = document.getElementById('cassette');

		cassette.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		});
	}

	onMount(() => {
		document.title = Titles.music
	});

</script>
<section class="music">
	<div class="interact-tip">
		<h2>Add a song to the playlist to get started</h2>
		<button class="song-selection-jump jump" onclick={jumpToSongSelection}>
			&darr;
		</button>
	</div>

		<Cassette />

		<Playlist />

		<SongSelection />

	<div class="jump-to-top">
		<button class="cassette-jump jump" onclick={jumpToCassette}>
			&uarr;
		</button>
	</div>
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

  .interact-tip {
			display: flex;
      width: fit-content;

			justify-content: center;
			align-items: center;

      padding: 0 1rem 0 1rem;
			gap: 2rem;

      font-family: var(--font-special);
      font-size: 3rem;
      line-height: 1.5rem;
      color: var(--text-standard);
  }

	.jump {
			align-items: center;
      padding: 0 1rem 0.5rem 1rem;
      border: none;
			background-color: var(--secondary-color);
			color: var(--text-standard);
			font-size: 2rem;
			transition: all 100ms ease;
	}

	.jump:active {
			transform: scale(0.95);
      opacity: 0.8;
  }

  .jump-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
			z-index: 10;
  }
</style>
