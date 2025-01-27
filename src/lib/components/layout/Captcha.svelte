<script>
	import { onMount } from "svelte";

	let { isHuman = $bindable(false) } = $props();

	let mouseMovements = $state([]);
	let errorMessage = $state("");
	let checkboxChecked = $state(false);
	let gameStarted = $state(false);
	let gameCompleted = $state(false);
	let score = $state(0); // Tracks clicks on the circles
	let circlePosition = $state({ x: 0, y: 0 }); // Position of the circle
	let analyzeNum = $state(0);
	const maxChecks = 5;

	// Function to track mouse movement
	const trackMouseMove = (e) => {
		const { clientX, clientY } = e;
		mouseMovements.push({ x: clientX, y: clientY, timestamp: Date.now() });

		// Limit the number of stored points to optimize performance
		if (mouseMovements.length > 500) {
			mouseMovements.shift();
		}
	};

	// Analyze mouse movement straightness
	const analyzeStraightness = () => {
		if (mouseMovements.length < 10) return;

		const start = mouseMovements[0];
		const end = mouseMovements[mouseMovements.length - 1];

		// Calculate straight-line distance (Euclidean distance)
		const straightDistance = Math.sqrt(
			Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
		);

		// Calculate total path length
		let totalPathLength = 0;
		for (let i = 1; i < mouseMovements.length; i++) {
			const dx = mouseMovements[i].x - mouseMovements[i - 1].x;
			const dy = mouseMovements[i].y - mouseMovements[i - 1].y;
			totalPathLength += Math.sqrt(dx * dx + dy * dy);
		}

		const straightnessRatio = straightDistance / totalPathLength;

		// Human-like behavior detection
		if (straightnessRatio < 0.8 && totalPathLength > 200) {
			analyzeNum === maxChecks ? isHuman = true : analyzeNum++;
			errorMessage = "";
		}
	};

	// Start the game
	const startGame = () => {
		gameStarted = true;
		generateCirclePosition();
	};

	// Generate random circle position
	const generateCirclePosition = () => {
		const gameArea = document.querySelector(".game-area");
		const { width, height } = gameArea.getBoundingClientRect();
		const circleSize = 50;

		circlePosition.x = Math.random() * (width - circleSize);
		circlePosition.y = Math.random() * (height - circleSize);
	};

	// Handle circle clicks
	const handleCircleClick = () => {
		score++;
		if (isHuman) {
			gameCompleted = true;
			errorMessage = ""; // Clear errors if the game is complete
		} else {
			generateCirclePosition();
		}
	};

	// Handle checkbox validation
	const handleCheckboxChange = () => {
		if (!isHuman) {
			errorMessage = "Please play the game and move your mouse naturally.";
			startGame();
		} else {
			errorMessage = "";
		}
	};

	onMount(() => {
		window.addEventListener("mousemove", trackMouseMove);

		const interval = setInterval(() => {
			analyzeStraightness();
		}, 1500);

		return () => {
			window.removeEventListener("mousemove", trackMouseMove);
			clearInterval(interval);
		};
	});
</script>

<style>
    .captcha-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: fit-content;
        font-family: var(--font-standard);
				padding: 1rem;
    }

		.captcha-container p {
				text-align: center;
				max-width: 50%;
				font-size: 1.5rem;
		}

    .game-area {
        position: relative;
        width: 250px;
        height: 250px;
        border: 2px dashed #ddd;
        margin: 20px 0;
        overflow: hidden;
    }

    .game-area-completed {
        border: 2px dashed green;
    }

    .circle {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: var(--secondary-color);
        border-radius: 50%;
				border: none;
        cursor: pointer;
    }

    .checkbox-container {
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .error {
        margin-top: 10px;
        color: red;
        font-size: 1rem;
    }

    .status {
        margin-top: 10px;
        font-size: 1.2rem;
        color: #444;
    }

    input[type="checkbox"] {
        transform: scale(1.2);
    }

</style>

<div class="captcha-container">

	{#if gameStarted}

		<h2>Prove You're Human</h2>
		<p>
			Move your mouse naturally and complete the game below by clicking the
			circles.
		</p>

		<div class="game-area" class:game-area-completed={gameCompleted}>
			{#if !gameCompleted}
				<button
					type="button"
					class="circle"
					style="top: {circlePosition.y}px; left: {circlePosition.x}px"
					onclick={handleCircleClick}
					aria-label="Captcha minigame button"
				></button>
			{/if}
		</div>

		<p>Score: {score}</p>
	{/if}


	<div class="checkbox-container">
		<input
			type="checkbox"
			bind:checked={checkboxChecked}
			onchange={handleCheckboxChange}
			autocomplete="off"
		/>
		<label for="captcha-checkbox">I'm not a robot</label>
	</div>

	{#if errorMessage}
		<div class="error">{errorMessage}</div>
	{/if}

	{#if isHuman && checkboxChecked}
		<div class="status" style="color: green;">
			✅ Human verified! Thank you.
		</div>
	{/if}
</div>
