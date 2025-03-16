<script lang="js">
	import { onMount } from 'svelte';
	import { IconLinks, ShuffleArray } from '$lib/index.js';
	import { getFileFromStorage } from '$lib/firebase.js';
	import { audioStore, dequeueAudio, isAudioQueueEmpty, removeAudio } from '$lib/components/music/AudioStore.js';
	import Modal from '$lib/components/layout/Modal.svelte';

	const defaultAudio = '/audio/default.mp3';
	const tapeAudio = '/audio/tape.mp3';

	let cassetteWidth = $state(0);
	let cassetteScaleStyle = $state("");

	let volume = $state(50);
	let muted = $state(false);
	let paused = $state(true);
	let shuffled = $state(false);
	let currentSong = $state(null);
	let tapeSfx = $state(null);
	let duration = $state(0);
	let currentSongName = $state();
	let currentSongAlbumName = $state();

	let currentQueue = $state();

	let reelAnimation = $derived([
		{
			animationPlayState: `${paused ? 'paused' : 'running'}`,
			animationDuration: `${Math.round(duration)}s`
		},
		{
			animationPlayState: `${paused ? 'paused' : 'running'}`,
			animationDuration: `${Math.round(duration)}s`
		}
	]);

	let volumeIcon = $derived(applyVolumeIcon());
	let playIcon = $derived(applyPlayIcon());
	let shuffleIcon = $derived(applyShuffleIcon());

	let allSongs = $state([]);
	let pending = $state();
	let { songsLoaded = (new Promise(resolve => resolve = pending)) } = $props();

	let showPopup = $state(false);

	function togglePopup(e) {
		e.preventDefault();

		showPopup = !showPopup;
	}

	async function queryAllSongs() {
		await songsLoaded.then(() => {
			const nodeList = document.querySelectorAll('.add-to-queue-button');
			allSongs = ShuffleArray(Array.from(nodeList));
		});
	}

	function applyPlayIcon() {
		if (paused) {
			return IconLinks.playerPlay;
		} else {
			return IconLinks.playerPause;
		}
	}

	function applyVolumeIcon() {
		updateVolume();
		if (muted) {
			return IconLinks.volumeMute;
		} else if (volume === 0) {
			return IconLinks.volumeNone;
		} else if (volume <= 50) {
			return IconLinks.volumeLow;
		} else if (volume > 50) {
			return IconLinks.volumeHigh;
		}
	}

	function applyShuffleIcon() {
		if (shuffled) {
			return IconLinks.playerShuffleOn;
		} else {
			return IconLinks.playerShuffleOff
		}
	}

	function updatePlayback(e) {
		e.preventDefault();

		if (!currentSong && !tapeSfx || isAudioQueueEmpty() && currentSong.currentTime === currentSong.duration) {
			return;
		}

		tapeSfx.play();
		paused = !paused;
		if (paused) {
			currentSong.pause();
		} else {
			currentSong.play();
		}

	}

	function mute(e) {
		e.preventDefault();
		muted = !muted;
		updateVolume();
	}

	function updateVolume() {
		if (!currentSong) {
			return;
		}

		if (muted) {
			currentSong.volume = 0;
		} else {
			currentSong.volume = volume/100;
		}
	}


	//This shuffle is quite basic, BUT it DOES work... mostly...
	function shuffle(e) {
		e.preventDefault();
		shuffled = !shuffled;

		if (shuffled) {
			while (currentQueue.length < 10) {
				getNextShuffle();
			}
		}
	}

	function getNextShuffle() {
		if (allSongs.length === 0) {
			const nodeList = document.querySelectorAll('.add-to-queue-button');
			allSongs = ShuffleArray(Array.from(nodeList));
		}

		allSongs.pop().click();
	}

	async function nextInQueue() {
		if (shuffled) {
			getNextShuffle();
		}

		if (isAudioQueueEmpty()) {
			return;
		}

		const audioData = dequeueAudio();
		currentSongName = audioData.fileName;
		currentSongAlbumName = audioData.trackPath.split('/')[1]; //Should always be chill, but need to update with proper property
		await getFileFromStorage(audioData.trackPath, audioData.fileName).then((src) => {
			currentSong.src = src;
		});
		paused = false;
		currentSong.play();
	}

	function calculateCassetteSize() {
		const cassette = document.querySelector('.cassette-body');
		cassetteWidth = cassette.offsetWidth;

		const maxAllowedWidth = window.innerWidth * (7 / 8); //87.5% of window width

		let scaleFactor = cassetteWidth > maxAllowedWidth ? maxAllowedWidth / cassetteWidth : 1;

		scaleFactor = Math.max(0.1, Math.min(1.0, scaleFactor));

		cassetteScaleStyle = `transform: scale(${scaleFactor.toFixed(2)});`;
	}

	onMount(() => {
		if (isAudioQueueEmpty()) {
			currentSong = new Audio(defaultAudio);
		} else {
			currentSong = new Audio();
			nextInQueue();
		}

		const unsubscribe = audioStore.subscribe((queue) => {
			currentQueue = queue;
		});

		const loadedMetaData = () => {
			duration = Math.round(currentSong.duration);
		}

		const ended = () => {
			paused = true;
			nextInQueue();
		}

		tapeSfx = new Audio(tapeAudio);
		tapeSfx.volume = 0.5;
		duration = Math.round(currentSong.duration);

		currentSong.addEventListener('loadedmetadata', loadedMetaData);

		currentSong.addEventListener('ended', ended);

		const mediaQuery = window.matchMedia('(max-width: 768px)');

		mediaQuery.addEventListener('change', calculateCassetteSize);

		calculateCassetteSize();

		queryAllSongs();

		return () => {
			currentSong.pause();
			currentSong.stop;
			currentSong.src = '';
			currentSong = null;

			try {
				currentSong.removeEventListener('loadedmetadata', loadedMetaData);

				currentSong.removeEventListener('ended', ended);

				mediaQuery.removeEventListener('change', calculateCassetteSize);
				//eslint-disable-next-line no-unused-vars
			} catch (error) {
				console.error("Looks like you left without even trying any music. What a shame");
			}

			tapeSfx.pause();
			tapeSfx.src = '';
			tapeSfx = null;

			removeAudio();

			unsubscribe();
		}
	});

</script>

<section class="cassette" id="cassette">

	<Modal
		bind:isOpen={showPopup}
		title="Looking for more features?"
		alignItems="center"
		width="80dvw"
		offset="-10dvh"
		backgroundColor="var(--banner-accent)"
		showExitButton={true}
	>
		<h2 style="font-family: var(--font-standard); text-align: center; font-size: 1.5rem;">Check us out on Spotify!</h2>
		<br/>
		<iframe style="width: 100%; height: 65dvh;"
						src="https://open.spotify.com/embed/artist/3C3IxXuW9aRAlwvooDiCJM?utm_source=generator&theme=0"
						height="700" frameBorder="0" allowFullScreen={false}
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						datatype={'audio/mpeg'}
						itemProp={'audio'}
						title={'Unthynck'}
						loading="lazy"></iframe>
	</Modal>

	<div class="cassette-body" style={cassetteScaleStyle}>
		<div class="dots"></div>
		<div class="dots"></div>
		<div class="dots"></div>
		<div class="dots"></div>
		<div class="label">
			<div class="label-descp">
				<div class="album-name">
					<h2>{currentSongAlbumName}</h2>
				</div>
				<div class="line"></div>
				<div class="song-name">
					<h3>{currentSongName}</h3>
				</div>
				<div class="line"></div>
			</div>
			<div class="player">
				<div class="tape">
					<div class="circle" id="circle1" style:animation-play-state="{reelAnimation[0].animationPlayState}">
						<div class="teeth"></div>
						<div class="teeth"></div>
						<div class="teeth"></div>
						<div class="teeth"></div>
					</div>
					<div class="visor">
						<div class="left-reel reel"
								 style:animation-duration="{reelAnimation[0].animationDuration}"
								 style:animation-play-state="{reelAnimation[0].animationPlayState}"
						></div>
						<div class="right-reel reel"
								 style:animation-duration="{reelAnimation[1].animationDuration}"
								 style:animation-play-state="{reelAnimation[1].animationPlayState}"
						></div>
					</div>
					<div class="circle" id="circle2" style:animation-play-state="{reelAnimation[1].animationPlayState}">
						<div class="teeth"></div>
						<div class="teeth"></div>
						<div class="teeth"></div>
						<div class="teeth"></div>
					</div>
				</div>
			</div>
			<div class="label-color"></div>
		</div>
	</div>

		<div class="media-controls">
			<div class="playback-control">
				<button class="control-button" onclick={updatePlayback}><img class="icon" src={playIcon} alt="playback control" title={paused ? "Music Paused" : "Music Playing"}/></button>
			</div>
			<div class="volume-control">
				<button class="control-button" onclick={mute} title={muted ? "Music Muted" : "Music Unmuted"}><img class="icon" src={volumeIcon} alt="volume control"/></button>
				<input
					type="range"
					bind:value={volume}
					min="0"
					max="100"
					class="volume-slider"
					disabled={muted}
					title={volume}
				/>
			</div>
			<div class="shuffle-control">
				<button class="control-button" onclick={shuffle} title={shuffled ? "Shuffling Enabled" : "Shuffling Disabled"} disabled={allSongs.length === 0}><img class="icon" src={shuffleIcon} alt="shuffle control"/></button>
			</div>
			<div class="tooltip">
				<button onclick={togglePopup} title="Other Features?">?</button>
			</div>
		</div>
</section>


<style lang="css">

    /* Animations */

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes shrink {
        0% {
            width: 100px;
        }
        100% {
            width: 0;
        }
    }

    @keyframes grow {
        0% {
            width: 0;
        }
        100% {
            width: 100px;
        }
    }

		.cassette {
				display: flex;
				flex-direction: column;

				height: fit-content;
				width: 90vw;

				justify-content: center;
				align-items: center;

				gap: 2rem;
		}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .cassette-body {
        position: relative;
        width: 650px;
        height: 350px;
        max-width: 650px;
        max-height: 350px;
        border-radius: 15px;
        background-color: #33323a;
    }

    .dots {
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: #f4edd6;
        border-radius: 50%;
        top: 0;
        margin: 10px;
    }

    .dots::before {
        content: "";
        position: absolute;
        height: 15px;
        width: 2px;
        background-color: rgb(110, 107, 107);
        left: 45%;
        top: 2px;
        border-radius: 10px;
    }

    .dots::after {
        content: "";
        position: absolute;
        height: 15px;
        width: 2px;
        background-color: rgb(110, 107, 107);
        transform: rotate(90deg);
        right: 9px;
        top: 2px;
        border-radius: 10px;
    }

    .dots:nth-child(2) {
        top: inherit;
        bottom: 0;
    }

    .dots:nth-child(3) {
        right: 0;
    }

    .dots:nth-child(4) {
        top: inherit;
        right: 0;
        bottom: 0;
    }

    .label {
        background-color: #f4edd6;
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 550px;
        height: 250px;
        clip-path: polygon(5% 0, 95% 0, 100% 10%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 10%);
    }

    .label-descp {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 35%;
        background-color: #f4edd6;
    }

    .line {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        background-color: rgb(156, 158, 162);
        height: 2px;
        width: 95%;
    }

		.album-name {
				position: absolute;
				top: -20px;
				font-family: var(--font-special);
				font-size: 2.5rem;
		}

		.song-name {
				position: absolute;
				top: 40px;
				font-family: var(--font-standard);
				font-size: 1.25rem;
		}

    .player {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 40%;
        background-color: var(--banner-accent);
    }

    .label-color {
        background-color: var(--secondary-color);
        height: 100px;
        width: 100%;
        margin-top: 10px;
				filter: opacity(0.8);
    }

    .tape {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        height: 80%;
        width: 70%;
        border-radius: 50px;
        background-color: #32313a;
    }

    .circle {
        overflow: hidden;
        position: relative;
        margin: 0 10px;
        height: 70px;
        width: 70px;
        background-color: #f4edd6;
        border-radius: 50%;
        animation: spin 3s infinite linear;
    }

    .teeth {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #69696b;
        left: 45%;
    }

    .teeth:nth-child(2) {
        left: inherit;
        bottom: 0;
        right: 40%;
    }

    .teeth:nth-child(3) {
        left: inherit;
        bottom: 30px;
    }

    .teeth:nth-child(4) {
        left: inherit;
        right: 0;
        bottom: 30px;
    }

    .visor {
        overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 35px;
        height: 40px;
        width: 180px;
        background-color: #eeebe0;
    }

    .left-reel {
        position: absolute;
        height: 100px;
				width: 100px;
        background-color: var(--primary-color);
				border-radius: 50%;
        top: -30px;
        left: -30px;
				animation-fill-mode: forwards;
				animation: shrink linear;
    }

    .right-reel {
        position: absolute;
        height: 100px;
				width: 100px;
        background-color: var(--primary-color);
				border-radius: 50%;
        top: -30px;
        right: -30px;
				animation-fill-mode: forwards;
				animation: grow linear;
    }

		/* Media Controls */
		.media-controls {
				position: relative;
				display: grid;
				grid-template-columns: auto auto auto;
				grid-template-rows: auto;

				justify-content: center;
				align-items: center;

				height: fit-content;
				width: fit-content;
				background-color: var(--secondary-color);

				padding: 1rem;
				gap: 4rem;

		}

		.icon {
				height: 2rem;
				width: 2rem;
		}

		.control-button {
				border: none;
				background-color: transparent;
				cursor: pointer;
		}

		.tooltip {
				position: absolute;
				display: grid;

				height: 100%;
				width: fit-content;

				place-items: center;
				padding: clamp(0.5rem, 1rem, 1.5rem);

				left: 100%;
		}

		.tooltip button {
				height: 2rem;
				width: 2rem;

				text-align: center;

				cursor: pointer;

				border-radius: 50%;
				background-color: var(--secondary-color);
				border: none;
				font-size: 1.5rem;
				color: whitesmoke;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.08);
				transition: 200ms ease;
    }

		.tooltip button:hover {
				transform: scale(1.05);
		}

		.tooltip button:active {
				transform: scale(0.95);
		}

		.playback-control, .shuffle-control {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				height: inherit;
				width: fit-content;
		}

		.volume-control {
				display: inline-grid;
				grid-template-columns: auto auto;
				justify-content: center;
				align-items: center;

				height: inherit;
				width: fit-content;

				gap: 1rem;
		}

		.volume-slider {
				color: var(--link-color);
		}

    /* Responsive */

    @media screen and (max-width: 768px) {
				.cassette {
						justify-items: auto;
						gap: 0;
						margin-top: -0.75rem;
				}

				.media-controls {
						transform: scale(0.85);
						gap: 1.5rem;
						margin-top: -2.5rem;
				}
    }
</style>