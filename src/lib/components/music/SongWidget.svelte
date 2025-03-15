<script lang="js">
	import { IconLinks } from '$lib/index.js';
	import { getFileFromStorage } from '$lib/firebase.js';
	import { removeAudio } from '$lib/components/music/AudioStore.js';

	let currentAlbumCover = $state(IconLinks.loadingIcon);
	let { song = $bindable({
		trackName: "Nothing Selected Yet :("
	}), index } = $props();

	async function fetchAlbumArt() {
		const preload = new Image();

		await getFileFromStorage(song.artworkPath, 'art.png').then((src) => {
			preload.src = src;
		});

		preload.onload = () => {
			currentAlbumCover = preload.src;
		}
	}

	function removeFromPlaylist(e) {
		e.preventDefault();

		removeAudio(index);
	}

	function getAlbumName() {
		if (song?.trackPath) {
			return song.trackPath.split('/')[1];
		} else {
			return "Unknown";
		}
	}

	$effect(() => {
		if (song.artworkPath) {
			fetchAlbumArt();
		}
	});

</script>

<div class="song-widget" title="{song.trackName} - {getAlbumName()}">
	<div class="song-widget-art-container">
		<img class="song-widget-art" src={currentAlbumCover} alt="Song Album Cover"/>
	</div>
	<div class="song-widget-utils">
		<p style="box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1); padding: 1px;">{song.trackName}</p>
		<button class="dequeue-song-button" onclick={removeFromPlaylist} title="Remove From Queue">
			<img class="icon" src={IconLinks.playlistRemove} alt="Dequeue Song"/>
		</button>
	</div>
</div>

<style lang="css">
	.song-widget {
			position: relative;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;

      justify-content: center;
      align-items: center;

      height: fit-content;
      width: 6rem;

      padding: 0.5rem;

      background-color: var(--secondary-color);
      font-family: var(--font-standard);
      font-size: 1rem;
			color: var(--text-standard);
	}

  .song-widget-art-container {
      position: absolute;
      height: 100%;
      width: 100%;
  }

  .song-widget-art {
      height: 100%;
      width: 100%;
      object-fit: cover;

      filter: blur(4px);
  }

	.song-widget-utils {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			z-index: 5;
	}

	.dequeue-song-button {
			height: 2.5rem;
			width: 2.5rem;
			background: transparent;
			border: none;
			cursor: pointer;
			transition: scale 200ms ease;
	}

	.icon {
			height: 100%;
			width: 100%;
			object-fit: cover;
	}

	.icon:hover {
			transform: scale(1.05);
	}

  .icon:active {
      transform: scale(0.95);
      opacity: 0.8;
  }

	@media only screen and (max-width: 768px) {
			.song-widget {
					max-height: 8rem;
			}
	}

</style>