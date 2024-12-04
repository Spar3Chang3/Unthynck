<script lang="js">
	import { getFileFromStorage, initStorage, initApp } from '$lib/utils/Firebase.js';
	import { onMount } from 'svelte';
	import { IconLinks } from '$lib/utils/Global.js';

	let showCardBack = $state(false);
	let portrait = $state(IconLinks.loadingIcon);

	let {
		aboutMe,
		hp,
		id,
		imagePath,
		instagramLink,
		name,
		position
	} = $props();

	const toggleCardFlip = (e) => {
		e.preventDefault();
		showCardBack = !showCardBack;
	}

	async function fetchImages() {
		let preload = new Image();
		await getFileFromStorage(imagePath, "portrait.jpg").then((downloadPath) => {
			preload.src = downloadPath;
		});

		preload.onload = () => {
			portrait = preload.src;
		}
	}

	onMount(() => {
		initApp();
		initStorage();
		fetchImages();
	});

</script>

<div class="flip-box">
	<button class="flip-button" onclick={toggleCardFlip} aria-label="flip-button"></button>
	<div class="flip-box-inner" class:show-back={showCardBack}>

		<div class="flip-box-front card" >
			<div class="portrait-container" style:opacity="{showCardBack ? '0' : '1'}" style:transition="opacity 500ms ease">
				<img class="portrait" src={portrait} alt="Band Member portrait" />
			</div>
			<div class="interact-tip-container">
				<img class="interact-tip" src="/icons/interaction-cursor.svg" alt="Interaction Hint Icon - click card to flip" />
			</div>
		</div>

		<div class="flip-box-back card">
			<div class="content">
				<div class="banner">
					<h1>{name}</h1>
				</div>
				<div class="type-caption">
					<h3>{position}</h3>
				</div>
				<div class="stats">
					<div class="health"><h3>HP: {hp}</h3></div>
					<div class="about-me">
						<p>{aboutMe}</p>
					</div>

					<div class="socials">
					</div>
				</div>
			</div>
		</div>

	</div>
</div>




<style>
    h1 {
        margin: 0 0 5px;
    }
    /* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
    .flip-box {
				position: relative;
        background-color: transparent;
        width: 320px;
        height: 480px;
        margin: 0 20px 40px;
        border: 1px solid #f1f1f1;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-box-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

		.flip-button {
				position: absolute;
				width: 100%;
				height: 100%;
				border: none;
				background-color: transparent;
				z-index: 10;
		}

    .show-back {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-box-front, .flip-box-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the front side */
    .flip-box-front {
        background-color: #000;
    }

    /* Style the back side */
    .flip-box-back {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-image: url("/backgrounds/card-background.jpg");
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
        color: white;
        transform: rotateY(180deg) translateX(6px);
    }


    /* Add some shadows to create a card effect */
    .card {
				height: inherit;
				width: inherit;
				overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

		.content {
				position: relative;
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
        font-family: "Unthynck Text", sans-serif;
				line-height: var(--paragraph-line-height);

				overflow: scroll;
				scrollbar-width: none;
				-ms-overflow-style: none;

				::-webkit-scrollbar {
						display: none;
				}
		}

		.portrait-container {
				position: absolute;
				height: 100%;
				width: 100%;
		}

		.interact-tip-container {
				position: absolute;
				display: flex;
				height: 100%;
				width: 100%;
				justify-content: flex-end;
				align-items: flex-start;
		}

		.portrait {
				position: relative;
				height: inherit;
				width: inherit;
				object-fit: cover;
		}

		.interact-tip {
				position: relative;
				height: 20%;
				width: 20%;
		}

    .banner {
        font-family: "Unthynck Branding", sans-serif;
				font-size: 2rem;
    }

		.stats {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
		}

    .health {
        display: inline-block;
        justify-content: center;
        align-content: center;
        width: 90%;
    }

    .about-me {
        display: inline-block;
        justify-content: center;
        align-content: center;
        text-align: left;
        width: 90%;
    }

    .socials {
        position: relative;
				display: flex;
				align-items: center;
        bottom: 0.5rem;
        height: fit-content;
        width: 95%;
        backdrop-filter: blur(4px);
        border-radius: 6px;
        overflow: hidden;
        background-color: var(--frosted-glass);
    }


</style>