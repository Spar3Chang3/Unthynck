<script lang="js">
	import { onMount } from 'svelte';
	import { IconLinks } from '$lib/utils/Global.js';
	import { audioQueue } from '$lib/components/music/AudioStore.js';

	const defaultAudio = '/audio/default.mp3';
	const tapeAudio = '/audio/tape.mp3';

	let volume = $state(50);
	let muted = $state(false);
	let paused = $state(true);
	let shuffled = $state(false);
	let currentSong = null;
	let tapeSfx = null;

	let volumeIcon = $derived(applyVolumeIcon());
	let playIcon = $derived(applyPlayIcon());
	let shuffleIcon = $derived(applyShuffleIcon());

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

		if (!currentSong && !tapeSfx) {
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

	function shuffle(e) {
		e.preventDefault();
		shuffled = !shuffled;
	}

	onMount(() => {
		currentSong = new Audio(defaultAudio);
		tapeSfx = new Audio(tapeAudio);

		return () => {
			currentSong.stop;
			currentSong.pause();
			currentSong.src = '';
			currentSong = null;
		}
	});

</script>

<section class="cassette">
	<div class="cassette-body">
		<div class="dots"></div>
		<div class="dots"></div>
		<div class="dots"></div>
		<div class="dots"></div>
		<div class="label">
			<div class="label-descp">
				<div class="line"></div>
				<div class="line"></div>
			</div>
			<div class="player">
				<div class="tape">
					<div class="circle" id="circle1">
						<div class="teeth"></div>
						<div class="teeth"></div>
						<div class="teeth"></div>
						<div class="teeth"></div>
					</div>
					<div class="visor">
						<div class="left-reel reel"></div>
						<div class="right-reel reel"></div>
					</div>
					<div class="circle" id="circle2">
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
</section>

<br/>

<section class="media-controls">
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
		<button class="control-button" onclick={shuffle} title={shuffled ? "Shuffling Enabled" : "Shuffling Disabled"}><img class="icon" src={shuffleIcon} alt="shuffle control"/></button>
	</div>
</section>

<style lang="css">
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

    .player {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 40%;
        background-color: #faac52;
    }

    .label-color {
        background-color: #fc5214;
        height: 100px;
        width: 100%;
        margin-top: 10px;
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
        animation: rotate 3s infinite linear;
        animation-play-state: paused;
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
        top: 30px;
        height: 40px;
        width: 160px;
        background-color: #eeebe0;
    }

    .reel, .left-reel {
        position: absolute;
        height: 65px;
        width: 65px;
        background-color: #69696b;
        border-radius: 50%;
        top: -10px;
        left: -20px;
        animation-play-state: paused;
    }

    .right-reel {
        left: 120px;
        animation-play-state: paused;
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

				margin-top: 4rem;
				padding: 1rem;
				gap: 4rem;

				border: 0.1rem solid var(--secondary-container);
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

    /* Animations */

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes first-circle-rotate {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.5);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes second-circle-rotate {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(0.72);
        }

        100% {
            transform: scale(1);
        }
    }

    /* Responsive */

    @media screen and (max-width: 400px) {
        .cassette-body {
            transform: scale(0.50);
        }
    }
</style>