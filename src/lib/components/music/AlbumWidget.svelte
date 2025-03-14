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
	});

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

		if (songsVisible) {
			songsVisible = false;
		} else {
			songsVisible = true;

			const widget = document.getElementById(index).querySelector('.widget-content');
			setTimeout(() => {
				widget.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}, 100);
		}

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
				 class:title-open={songsVisible}
		>
			<h2>{formatAlbumName()}</h2>
		</div>

		<div class="widget-content"
				 style:opacity={songsVisible ? 1 : 0}
				 style:visibility={songsVisible ? 'visible' : 'hidden'}
				 style:height={songsVisible ? 'fit-content' : '0'}
				 style:width={songsVisible ? '90dvw' : '0'}
				 style:transition="opacity 500ms ease, visibility 500ms ease"
		>
			{#each album as song}
				<div class="widget-song">
					<div class="widget-song-info item1">
						<div class="widget-song-name">
							<h4>{song.trackNumber}&emsp;</h4>
							<h4>{song.trackName}</h4>
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
							<p>{song.trackDescription}</p>
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
			max-width: 95dvw;

			transition: height 300ms ease, width 250ms ease;
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
			flex-wrap: wrap;
			align-items: center;

			width: 60%;

			font-family: var(--font-special);
			font-size: 2rem;
			transform: translateX(40%);

			opacity: 0;
			visibility: hidden;
	}

	.title-open {
			visibility: visible;
			opacity: 1;

			transition: opacity 600ms ease, visibility 600ms ease;
	}

	.widget-content {
			position: relative;
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-content: center;

			gap: 0.5rem;
			overflow: hidden;
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
			padding-right: 5px;
	}

  .widget-song-descr {
      display: flex;
      height: 100%;
      width: 100%;

      justify-content: flex-start;
      align-items: center;
			font-size: 1rem;
			line-height: 1.25rem;
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
			height: 2.5rem;
			width: 2.5rem;
			text-align: center;

			border: none;
			background-color: transparent;
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
      box-shadow: var(--secondary-color) 0 24px 24px;
  }

	@media only screen and (max-width: 768px) {
			.album-widget-title {
					font-size: 1.5rem;
					transform: translateX(8.5rem);
			}

			.widget-song-descr {
			}
	}

</style>