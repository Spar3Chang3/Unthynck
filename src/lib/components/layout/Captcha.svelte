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
	let averageClickAccuracy = $state(0);

	const maxChecks = 5;
	const circleSize = 50;

	//Function to track mouse movement
	const trackMouseMove = (e) => {
		const { clientX, clientY } = e;
		mouseMovements.push({ x: clientX, y: clientY, timestamp: Date.now() });

		//Limit the number of stored points to optimize performance
		if (mouseMovements.length > 500) {
			mouseMovements.shift();
		}
	};

	//Analyze mouse movement straightness
	const analyzeStraightness = () => {
		if (mouseMovements.length < 10) return;

		const start = mouseMovements[0];
		const end = mouseMovements[mouseMovements.length - 1];

		//Calculate straight-line distance (Euclidean distance)
		const straightDistance = Math.sqrt(
			Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
		);

		//Calculate total path length
		let totalPathLength = 0;
		for (let i = 1; i < mouseMovements.length; i++) {
			const dx = mouseMovements[i].x - mouseMovements[i - 1].x;
			const dy = mouseMovements[i].y - mouseMovements[i - 1].y;
			totalPathLength += Math.sqrt(dx * dx + dy * dy);
		}

		const straightnessRatio = straightDistance / totalPathLength;

		//Human-like behavior detection
		if (straightnessRatio < 0.8 && totalPathLength > 200) {
			analyzeNum === maxChecks ? isHuman = true : analyzeNum++;
			errorMessage = "";
		}
	};

	//Start the game
	const startGame = () => {
		gameStarted = true;
		generateCirclePosition();
	};

	//Generate random circle position
	const generateCirclePosition = () => {
		const gameArea = document.querySelector(".game-area");
		const { width, height } = gameArea.getBoundingClientRect();

		circlePosition.x = Math.floor(Math.random() * (width - circleSize));
		circlePosition.y = Math.floor(Math.random() * (height - circleSize));
	};

	//Handle circle clicks
	const handleCircleClick = (e) => {
		e.preventDefault();
		score++;

		const { clientX, clientY } = e;
		const circleRect = e.target.getBoundingClientRect(); //This is new to me I love it
		const circleCenterX = circleRect.left + circleRect.width / 2;
		const circleCenterY = circleRect.top + circleRect.height / 2;

		console.log(`Click X: ${clientX}, Click Y: ${clientY}`);
		console.log(`Circle X: ${circleCenterX}, Circle Y: ${circleCenterY}`);

		const dx = clientX - circleCenterX;
		const dy = clientY - circleCenterY;
		const distance = Math.sqrt(dx ** 2 + dy ** 2);

		//Normalize?
		averageClickAccuracy += Math.max(0, 1 - distance / (circleSize / 2));

		if (score >= 5) {
			const overallAverage = averageClickAccuracy/maxChecks;

			if (overallAverage <= 0.9) {
				isHuman = true;
			}
		}

		if (isHuman) {
			gameCompleted = true;
			errorMessage = ""; // Clear errors if the game is complete
		} else {
			generateCirclePosition();
		}

		//Having both these ifs is inefficient but ass is running on cum vapors
	};

	//Handle checkbox validation
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
				font-size: 1.5rem;
		}

		.captcha-container h2 {
				text-align: center;
				font-size: 2rem;
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
			Tap or Click each circle below:
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
