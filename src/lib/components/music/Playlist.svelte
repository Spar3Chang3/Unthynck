<script lang="js">
	import { audioStore } from '$lib/components/music/AudioStore.js';
	import SongWidget from '$lib/components/music/SongWidget.svelte';
	import { onMount } from 'svelte';

	let currentQueue = $state([{
		trackName: null,
		artworkPath: null
	}]);
	let viewCurrentQueue = $state(false);

	function togglePlaylistView(e) {
		e.preventDefault();
		viewCurrentQueue = !viewCurrentQueue;
	}

	onMount(() => {
		const unsubscribe = audioStore.subscribe((queue) => {
			currentQueue = queue;
			console.log(queue);
		});

		return(() => {
			unsubscribe();
		});
	});

</script>

<section class="playlist">
	<div class="song-up-next-container">
		<h2>Up Next: </h2>
		<SongWidget bind:song={currentQueue[0]} />
		<button class="view-playlist-button" onclick={togglePlaylistView}>
			View Playlist
		</button>
	</div>

	{#if viewCurrentQueue }
		<div class="playlist-container">
			{#each currentQueue as song, index}
				<SongWidget song={song} index={index} />
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
			padding: 0.5rem;

			color: var(--text-standard);
			background-color: var(--primary-color);
	}

	.song-up-next-container h2 {
			font-family: "Unthynck Branding", sans-serif;

			font-size: 4rem;
	}

	.view-playlist-button {
			border: none;
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