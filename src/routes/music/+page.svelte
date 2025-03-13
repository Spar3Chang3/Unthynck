<script lang="js">
	import Cassette from '$lib/components/music/Cassette.svelte';
	import SongSelection from '$lib/components/music/SongSelection.svelte';
	import Playlist from '$lib/components/music/Playlist.svelte';
	import { Titles } from '$lib/index.js';
	import { onMount } from 'svelte';

	let showUpButton = $state(false);
	let songsAdded = $state(false);

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
			block: 'start',
		});
	}

	function showJumpUp(e) {
		e.preventDefault();

		showUpButton = window.scrollY >= (window.innerHeight) / 4;

	}

	onMount(() => {
		document.title = Titles.music

		document.addEventListener('scroll', showJumpUp);

		return(() => {
			document.removeEventListener('scroll', showJumpUp);
		})
	});

</script>
<section class="music">
	<div class="interact-tip">
		<h2
			style:visibility={songsAdded ? 'hidden' : 'visible'}
			style:height={songsAdded ? '0' : ''}
		>Add a song to the playlist to get started</h2>
		<button class="song-selection-jump jump" onclick={jumpToSongSelection}>
			Jump to Songs
		</button>
	</div>

		<Cassette />

		<Playlist bind:songsAdded={songsAdded} />

		<SongSelection />

	<div class="jump-to-top">
		<button class="cassette-jump jump" class:hidden={!showUpButton} onclick={jumpToCassette} style="padding-top: 0;">
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

			gap: 4rem;

			overflow-x: hidden;
	}

  .interact-tip {
			display: flex;
			flex-direction: column;
      width: fit-content;

			justify-content: center;
			align-items: center;

      padding: 1rem 1rem 0 1rem;
			gap: 0.2rem;

      font-family: var(--font-special);
      font-size: 3rem;
      line-height: 1.5rem;
      color: var(--text-standard);
  }

	.jump {
			align-items: center;
      padding: 0.5rem 1rem 0.5rem 1rem;
      border: none;
			background-color: var(--secondary-color);
			color: var(--text-standard);
			font-family: var(--font-standard);
			font-size: 1.5rem;
			transition: all 100ms ease;
			cursor: pointer;

      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.08);

			opacity: 1;
			visibility: visible;
	}

	.jump:active {
			transform: scale(0.95);
      opacity: 0.8;
  }

	.cassette-jump {
			font-size: 3rem;
	}

  .jump-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
			z-index: 10;
  }

	.hidden {
			opacity: 0;
			visibility: hidden;
	}

	@media only screen and (max-width: 768px) {

			.music {
					gap: 1rem;
			}

			.interact-tip {
					font-size: 2rem;
					line-height: 2rem;
					text-align: center;

					gap: 0;
			}

			.jump {
					font-size: 1.2rem;
			}

			.cassette-jump {
					font-size: 2rem;
			}
	}
</style>
