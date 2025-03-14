<script lang="js">
	import { onMount, tick } from 'svelte';
	import { getJsonIndexDownloads, initStorage } from '$lib/firebase.js';
	import AlbumWidget from '$lib/components/music/AlbumWidget.svelte';
	import { IconLinks } from '$lib/index.js';

	let indexArr = $state([]);
	let indexRetrieved = $state(false);
	let { resolveReady = $bindable() } = $props();

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

	async function setSongsAdded() {
		await tick().then(() => {
			resolveReady();
		});
	}

	onMount(() => {
		getJsons().then(() => {
			indexRetrieved = true;
			setSongsAdded();
		});
	});

</script>

<section class="song-selection" id="song-selection">
	{#if indexRetrieved}
		{#each indexArr as album, key}
			<AlbumWidget album={album} index={key} />
		{/each}
	{:else}
		<div class="loading-model">
			<img src={IconLinks.loader} alt="Loading Icon" />
		</div>
	{/if}
</section>

<style lang="css">
	.song-selection {
			display: flex;
			flex-direction: column;
			height: fit-content;
			width: 95dvw;
			gap: 2rem;
			padding: 2rem;
	}

  .loading-model {
			display: flex;

      height: fit-content;
      width: 100%;

			justify-content: center;
  }

  .loading-model img {
      height: 10vh;
      width: 10vh;
      object-fit: contain;

      animation: rotate 1s infinite linear;
  }

  @keyframes rotate {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }
</style>