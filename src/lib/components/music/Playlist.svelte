<script lang="js">
	import { audioStore } from '$lib/components/music/AudioStore.js';
	import { IconLinks } from '$lib/utils/Global.js';
	import { getFileFromStorage } from '$lib/utils/Firebase.js';
	import { onMount } from 'svelte';

	let currentQueue = $state([{
		trackName: null,
		artworkPath: null
	}]);
	let viewCurrentQueue = $state(false);
	let currentAlbumCover = $state(IconLinks.loadingIcon);

	async function fetchAlbumArt() {
		const preload = new Image();

		await getFileFromStorage(currentQueue[0].artworkPath, 'art.png').then((src) => {
			preload.src = src;
		});

		preload.onload = () => {
			currentAlbumCover = preload.src;
		}
	}

	function togglePlaylistView(e) {
		e.preventDefault();
		viewCurrentQueue = !viewCurrentQueue;
	}

	onMount(() => {
		const unsubscribe = audioStore.subscribe((queue) => {
			currentQueue = queue;
			console.log(queue);
			fetchAlbumArt();
		});

		return(() => {
			unsubscribe();
		});
	});

</script>

<section class="playlist">
	<div class="song-up-next-container">
		<h2>Up Next: </h2>
		<div class="song-up-next">
			<img class="song-album-cover" src={currentAlbumCover} alt="Song Album Cover"/>
			<p>{currentQueue[0].trackName}</p>
		</div>
		<button class="view-playlist-button" onclick={togglePlaylistView}>
			View Playlist
		</button>
	</div>

	{#if viewCurrentQueue }
		<div class="playlist-container">
			{#each currentQueue as song}
				<div class="song-up-next">
					<img class="song-album-cover" src={getFileFromStorage(song.artworkPath, 'art.png')} alt="Song Album Cover"/>
					<p>{song.trackName}</p>
				</div>
			{/each}
		</div>
	{/if}
</section>

<style lang="css">
	.playlist {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;

			height: fit-content;
			width: 90vw;
	}

	.song-up-next-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: auto auto;

			height: fit-content;
			width: 90vw;

			justify-content: center;
			justify-items: center;
			align-items: center;
			text-align: center;

			color: var(--on-secondary-color);
			background-color: var(--primary-color);
	}

	.song-up-next-container h2 {
			font-family: "Unthynck Branding", sans-serif;

			font-size: 4rem;
	}

	.song-up-next {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: auto auto;

			justify-content: center;
			align-items: center;

			height: fit-content;
			width: 6rem;

			padding: 0.5rem;

      background-color: var(--secondary-color);
			font-family: "Unthynck Text", sans-serif;
			font-size: 1rem;
	}

	.song-album-cover {
			height: 6rem;
			width: 6rem;

			object-fit: contain;
	}

	.view-playlist-button {
			border: 0.1rem solid var(--on-secondary-color);
			background-color: var(--secondary-color);

			height: fit-content;
			width: fit-content;
			padding: 0.5rem;

			font-size: 1.2rem;
			font-family: "Unthynck Text", sans-serif;
			color: var(--on-primary-color);

			cursor: pointer;
	}

	.view-playlist-button:active {
			transform: scale(0.95);
			opacity: 0.8;
	}

	.playlist-container {
			display: flex;
			flex-wrap: wrap;

			height: fit-content;
			width: 85vw;

			background-color: var(--primary-color);

			gap: 1rem;
			margin-top: 0.5rem;
			padding: 0.5rem;
	}

</style>