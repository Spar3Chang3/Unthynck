<script lang="js">
	import Cassette from '$lib/components/music/Cassette.svelte';
	import SongSelection from '$lib/components/music/SongSelection.svelte';
	import Playlist from '$lib/components/music/Playlist.svelte';
	import { Titles } from '$lib/index.js';
	import { onMount } from 'svelte';

	let showUpButton = $state(false);
	let songsAdded = $state(false);
	let resolveReady = $state();
	let songsLoaded = $state(new Promise(resolve => resolveReady = resolve));

	function jumpToSongSelection(e) {
		e.preventDefault();

		const songSelection = document.getElementById('song-selection');

		songSelection.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}

	function jumpToCassette(e) {
		e.preventDefault();

		const cassette = document.getElementById('interact-tip');

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
<style lang="css">

    @keyframes bounce {
        0%   { transform: translateY(0); }
        15%  { transform: translateY(-15px); }
        30%  { transform: translateY(0); }
        45%  { transform: translateY(-10px); }
        60%  { transform: translateY(0); }
        75%  { transform: translateY(-5px); }
        90%  { transform: translateY(0); }
        100% { transform: translateY(0); }
    }

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
				text-shadow: 10px 10px 10px var(--secondary-color);
        line-height: 1.5rem;
        color: var(--text-standard);
    }

		.interact-tip h2 {
        animation: bounce 1.2s cubic-bezier(0.33, 1, 0.68, 1);
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
				text-align: center;

        opacity: 1;
        visibility: visible;
    }

    .jump:active {
        transform: scale(0.95);
        opacity: 0.8;
    }

    .cassette-jump {
				padding: 0.75rem 0.75rem 0.65rem 0.75rem;
				aspect-ratio: 1/1;
				height: fit-content;
				width: fit-content;
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
    }
</style>
<section class="music">
	<div class="interact-tip" id="interact-tip">
		<h2
			style:visibility={songsAdded ? 'hidden' : 'visible'}
			style:height={songsAdded ? '0' : 'auto'}
		>Add a song to the playlist to get started</h2>
		<button class="song-selection-jump jump" onclick={jumpToSongSelection}>
			Jump to Songs
		</button>
	</div>

		<Cassette songsLoaded={songsLoaded} />

		<Playlist bind:songsAdded={songsAdded} />

		<SongSelection bind:resolveReady={resolveReady} />

	<div class="jump-to-top">
		<button class="cassette-jump jump" class:hidden={!showUpButton} onclick={jumpToCassette}>
			<svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
				<!-- Sloppy left pointer -->
				<path d="M12 3 L6.8 9.5" />

				<!-- Sloppy right pointer -->
				<path d="M12 3 L17.2 9.3" />

				<!-- Janky stick body with a gentle wiggle -->
				<path d="M12 9 C11.7 12, 12.3 14, 12 18" />
			</svg>
		</button>
	</div>
</section>
