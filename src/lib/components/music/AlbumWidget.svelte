<script lang="js">
	import { getFileFromStorage } from '$lib/firebase.js';
	import { onMount } from 'svelte';
	import { IconLinks } from '$lib/index.js';
	import { enqueueAudio } from '$lib/components/music/AudioStore.js';
	import Toast from '$lib/components/layout/Toast.svelte';

	let { album = [], index } = $props();

	let showToast = $state(false);
	let toastSong = $state('???');
	let albumArt = $state(IconLinks.loadingIcon);
	let songsVisible = $state(false);
	let songContainer = $derived({
		height: songsVisible ? 'fit-content' : '8rem',
		width: songsVisible ? '90vw' : '8rem',
		padding: songsVisible ? 0 : 0,
	})

	function formatDuration(durationInSeconds) {
		const minutes = Math.floor(durationInSeconds / 60);
		const remainingSeconds = durationInSeconds % 60;

		const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure two digits
		const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // Ensure two digits

		return `${formattedMinutes}:${formattedSeconds}`;
	}

	function formatAlbumName() {
		return album[0].trackPath.slice(album[0].trackPath.indexOf("/")+1, album[0].trackPath.lastIndexOf("/"));
	}

	function toggleWidget(e) {
		e.preventDefault();

		songsVisible = !songsVisible;

		const widget = document.getElementById(index).querySelector('.widget-content');

		widget.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});

	}

	function addToQueue(song) {
		enqueueAudio(song);
		toastSong = song.trackName;
		showToast = true;
	}

	async function fetchAlbumArt() {
		const preload = new Image();

		await getFileFromStorage(album[0].artworkPath, 'art.png').then((src) => {
			preload.src = src;
		});

		preload.onload = () => {
			albumArt = preload.src;
		}
	}

	onMount(() => {
		fetchAlbumArt();
	});

</script>

<div class="album-widget" id="{index}"
		 style:height="{songContainer.height}"
		 style:width="{songContainer.width}"
		>
	<div class="album-widget-cover">
		<img class="album-cover" src="{albumArt}" alt="Album Cover"/>
		<button class="widget-extend-button" onclick={toggleWidget} aria-label="Playlist add Button"></button>
	</div>
		<div class="album-widget-title"
				 style:opacity={songsVisible ? 1 : 0}
				 style:visibility={songsVisible ? 'visible' : 'hidden'}
		>
			<h2>{formatAlbumName()}</h2>
		</div>

		<div class="widget-content"
				 style:opacity={songsVisible ? 1 : 0}
				 style:visibility={songsVisible ? 'visible' : 'hidden'}
		>
			{#each album as song}
				<div class="widget-song">
					<div class="widget-song-info item1">
						<div class="widget-song-name">
							<h4>{song.trackNumber}&emsp;{song.trackName}</h4>
						</div>
					</div>
					<div class="widget-song-util item2">
						<p>{formatDuration(song.trackDuration)}</p>
						<button class="add-to-queue-button" onclick={() => addToQueue(song)}>
							<img class="icon" src={IconLinks.playlistAdd} alt="Add to Playlist"/>
						</button>
					</div>
					<div class="widget-song-info item3">
						<div class="widget-song-descr">
							<p>&emsp;Description: {song.trackDescription}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{#if showToast}
		<Toast
			message="Added {toastSong} to queue"
			duration={3000}
			onClose={() => showToast = false}
		/>
	{/if}
</div>

<style lang="css">
	.album-widget {
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 2rem;

			color: var(--text-standard);

			transition: height 300ms ease, width 300ms ease;
			background-color: var(--primary-color);
			padding: 1rem;
	}

	.album-widget-cover {
			position: relative;
			height: 8rem;
			width: 8rem;

			overflow: hidden;
	}

	.album-cover {
			position: absolute;
			height: 8rem;
			width: 8rem;
			object-fit: cover;
	}


	.widget-extend-button {
			position: absolute;
			height: 8rem;
			width: 8rem;

			border: none;
			background-color: transparent;
	}


	.album-widget-title {
			position: absolute;
			display: flex;
			align-items: center;

			white-space: pre;

			font-family: var(--font-special);
			font-size: 2rem;
			transform: translateX(10rem);
      		transition: opacity 500ms ease;
	}

	.widget-content {
			position: relative;
			display: flex;
			flex-direction: column;
			height: fit-content;
			width: 90vw;

			justify-content: center;
			align-content: center;

			white-space: pre;
			gap: 0.5rem;
			overflow: hidden;
      		transition: opacity 500ms ease;
  }

	.widget-song {
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
			grid-template-areas:
				"item1 item2"
				"item3 item3";

			align-items: center;


			background-color: var(--secondary-color);
			padding: 0.5rem;
	}

	.item1 {
			grid-area: item1;
	}
	.item2 {
			grid-area: item2;
	}
	.item3 {
			grid-area: item3;
	}

  .widget-song-info {
      display: flex;
			flex-direction: column;
      height: fit-content;
      align-items: center;
			justify-content: center;
			font-family: "Unthynck Text", sans-serif;
  }

	.widget-song-name {
			display: flex;
			height: 100%;
			width: 100%;

      justify-content: flex-start;
			align-items: center;
			font-size: 1.2rem;
	}

  .widget-song-descr {
      display: flex;
      height: 100%;
      width: 100%;

      justify-content: flex-start;
      align-items: center;
			font-size: 1rem;
	}

  .widget-song-util {
			display: inline-grid;
			grid-template-columns: 1fr 1fr;
			height: 100%;
			width: 100%;

      justify-content: center;
			align-items: center;

			font-family: "Unthynck Text", sans-serif;
			font-size: 1.2rem;
	}

	.add-to-queue-button {
			height: 2rem;
			width: 2rem;
			text-align: center;

			border: none;
			background-color: transparent;
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
      box-shadow: var(--secondary-color) 0 24px 24px;
	}

</style>