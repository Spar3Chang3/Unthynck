<script lang="js">
	import { onMount } from 'svelte';
	import { getJsonIndexDownloads, initStorage } from '$lib/firebase.js';
	import AlbumWidget from '$lib/components/music/AlbumWidget.svelte';

	let indexArr = $state([]);

	async function getJsons() {
		initStorage();
		try {
			const returnArr = await getJsonIndexDownloads('releases');

			const jsonPromises = returnArr.map(async (url) => {
				const response = await fetch(url);
				return response.json();
			});

			indexArr = Object.values(await Promise.all(jsonPromises));
		} catch (error) {
			console.error('Error fetching JSONs:', error);
			indexArr = [];
		}
	}

	onMount(() => {
		getJsons();
	})

</script>

<section class="song-selection" id="song-selection">
	{#each indexArr as album, key}
		<AlbumWidget album={album} index={key} />
	{/each}
</section>

<style lang="css">
	.song-selection {
			display: flex;
			flex-direction: column;
			height: fit-content;
			width: 95vw;
			gap: 2rem;
			padding: 2rem;
	}
</style>