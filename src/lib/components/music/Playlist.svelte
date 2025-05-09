	<script lang="js">
	import { audioStore, isAudioQueueEmpty } from '$lib/components/music/AudioStore.js';
	import SongWidget from '$lib/components/music/SongWidget.svelte';
	import { onMount } from 'svelte';

	let currentQueue = $state([{
		trackName: null,
		artworkPath: null,
		trackPath: null,
	}]);
	let viewCurrentQueue = $state(false);
	let { songsAdded = $bindable(false) } = $props();

	function togglePlaylistView(e) {
		e.preventDefault();
		viewCurrentQueue = !viewCurrentQueue;
	}

	onMount(() => {
		const unsubscribe = audioStore.subscribe((queue) => {
			currentQueue = queue;
			songsAdded = !isAudioQueueEmpty();
		});

		return(() => {
			unsubscribe();
		});
	});

</script>

<section class="playlist">
	<div class="song-up-next-container">
		<h2>Up Next: </h2>
		{#if songsAdded}
			<div class="inline">
				<SongWidget bind:song={currentQueue[0]} />
				<small>and {currentQueue.length - 1} more...</small>
			</div>
		{:else}
			<h3 class="playlist-empty-notifier">No songs are up next</h3>
		{/if}
		<button class="view-playlist-button" onclick={togglePlaylistView}>
			View Playlist
		</button>
	</div>

	<div class="playlist-container"
			 style:height={viewCurrentQueue ? 'fit-content' : '0'}
			 style:visibility={viewCurrentQueue ? 'visible' : 'hidden'}
			 style:opacity={viewCurrentQueue ? '1' : '0'}
	>
		{#each currentQueue as song, index}
			<SongWidget song={song} index={index} />
		{/each}
	</div>
</section>

<style lang="css">
	.playlist {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;

			height: fit-content;
			width: 90dvw;
	}

	.song-up-next-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: auto auto;

			height: fit-content;
			width: 90dvw;

			justify-content: center;
			justify-items: center;
			align-items: center;
			text-align: center;
			padding: 0.5rem;

			color: var(--text-standard);
			background-color: var(--primary-color);
	}

	.inline {
			position: relative;
			display: flex;
			flex-direction: row;

			height: 100%;
			width: 100%;

			justify-content: center;
			align-items: center;

			font-family: var(--font-standard);
	}

	.inline small {
			position: absolute;

			bottom: 0.75rem;
			left: calc(50% + 4rem);
	}

	.song-up-next-container h2 {
			font-family: "Unthynck Branding", sans-serif;

			font-size: 3rem;
	}

	.playlist-empty-notifier {
      font-size: 1.2rem;
			font-family: var(--font-standard)
	}

	.view-playlist-button {
			border: none;
			background-color: var(--secondary-color);

			height: fit-content;
			width: fit-content;
			padding: 0.5rem;

			font-size: 1.5rem;
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

			width: 90dvw;

			justify-content: center;

			background-color: var(--primary-color);

			gap: 1rem;
			margin-top: 0.5rem;
			padding: 0.5rem;

      transition: height 200ms ease, opacity 200ms ease, visibility 200ms ease;
	}

	@media only screen and (max-width: 768px) {
			.song-up-next-container h2 {
					font-size: 2rem;
			}

			.playlist-empty-notifier {
					font-size: 1rem;
					text-rendering: optimizeLegibility;
      }

			.view-playlist-button {
					font-size: 1rem;
      }
	}

</style>