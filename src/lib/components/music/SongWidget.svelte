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

	$effect(() => {
		if (song.artworkPath) {
			fetchAlbumArt();
		}
	});

</script>

<div class="song-widget">
	<div class="song-widget-art-container">
		<img class="song-widget-art" src={currentAlbumCover} alt="Song Album Cover"/>
	</div>
	<div class="song-widget-utils">
		<p>{song.trackName}</p>
		<button class="dequeue-song-button" onclick={removeFromPlaylist}>
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
      height: 6rem;
      width: 6rem;
	}

	.song-widget-art {
			height: 6rem;
			width: 6rem;
			object-fit: contain;
	}

	.song-widget-utils {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
	}

	.dequeue-song-button {
			height: 2rem;
			width: 2rem;
			background: transparent;
			border: none;
			cursor: pointer;
	}

	.icon {
			height: 100%;
			width: 100%;
			object-fit: cover;
	}

  .icon:active {
      transform: scale(0.95);
      opacity: 0.8;
  }

</style>