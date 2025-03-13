<script lang="js">
	//Need to fix the hitching which may just come down to css animation lagging
	//Also, doesn't even really look good so eh, not sure if I'll use this.

	import { onMount } from 'svelte';

	const waveCount = 5;
	const animationOffset = 0.5;

	let waves = $state([]);
	let windowWidth = $state();
	let strokeColor = $state();

	let { animate = true } = $props();

	function generateWavePath(width, height, amplitude, frequency, phase) {
		let points = [];
		const step = width / 400;

		for (let x = 0; x <= width; x += step) {
			let y = 0;
			const normalizedX = (x * frequency) / 50;

			y = amplitude * Math.sin(normalizedX + phase);

			points.push(`${x},${height / 2 + y}`);
		}

		return `M0,${height / 2} L${points.join(' L')}`;
	}

	onMount(() => {
		windowWidth = window.innerWidth;

		strokeColor = getComputedStyle(document.documentElement).getPropertyValue("--secondary-color").trim();

		waves = Array.from({ length: waveCount }).map((_, index) => {
			const amplitude = 30 + (index * 15);
			const frequency = 1 + (index * 0.2);

			const phase = animate ? animationOffset + (index * 0.5) : (index * 0.5);
			const opacity = 1 - (index * 0.15);

			return {
				amplitude: amplitude,
				frequency: frequency,
				phase: phase,
				opacity: opacity,
				class: `wave${(Math.floor(Math.random() * waveCount))}`
			}
			}
		)
	});
</script>
<style lang="css">

		.main-background {
				position: fixed;
				height: 100dvh;
				width: 100dvw;
		}

		svg {
				height: 100dvh;
				width: 200dvw;
		}

		.wave1 {
				--wave-offset: -11dvh;
				animation: translate-wave-left 8s linear infinite;
		}

		.wave2 {
				--wave-offset: -21dvh;
				animation: translate-wave-left 8s linear infinite;
		}

		.wave3 {
				--wave-offset: 5dvh;
				animation: translate-wave-right 8s linear infinite;
		}

		.wave4 {
				--wave-offset: 23dvh;
				animation: translate-wave-right 8s linear infinite;
		}

		.wave5 {
				--wave-offset: 34dvh;
				animation: translate-wave-left 8s linear infinite;
		}

		@keyframes translate-wave-right {
        0% {
            transform: translateX(-100dvw) translateY(var(--wave-offset, 0));
        }
        100% {
            transform: translateX(0) translateY(var(--wave-offset, 0));
        }
		}

		@keyframes translate-wave-left {
				0% {
						transform: translateX(0) translateY(var(--wave-offset, 0));
				}
				100% {
						transform: translateX(-100dvw) translateY(var(--wave-offset, 0));
				}
		}
</style>
<div class="main-background">
	<svg>
	{#each waves as wave, index}
		<g class="wave{index+1}">
			<path
				d={generateWavePath(windowWidth*2, 600, wave.amplitude, wave.frequency, wave.phase)}
				fill="none"
				stroke={strokeColor}
				stroke-width="2"
				stroke-opacity={wave.opacity}
			></path>
		</g>
	{/each}
	</svg>
</div>