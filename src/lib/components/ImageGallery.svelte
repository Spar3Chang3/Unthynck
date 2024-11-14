<script>
	import { onMount } from 'svelte';

	export let images = [];

	let currentIndex = 0;
	let touchStart = null;
	let touchEnd = null;
	let loadedImages = new Set([0]); // Track loaded image indexes
	let isAnimating = false;
	let slideDirection = ''; // 'left' or 'right'

	// Preload next image
	function preloadNext() {
		const nextIndex = (currentIndex + 1) % images.length;
		if (!loadedImages.has(nextIndex)) {
			const img = new Image();
			img.src = images[nextIndex];
			img.onload = () => {
				loadedImages.add(nextIndex);
			};
		}
	}

	// Handle slide transitions
	async function slide(direction) {
		if (isAnimating) return;
		isAnimating = true;
		slideDirection = direction;

		const newIndex = direction === 'right'
			? (currentIndex - 1 + images.length) % images.length
			: (currentIndex + 1) % images.length;

		// Wait for animation to complete
		await new Promise(resolve => setTimeout(resolve, 300));

		currentIndex = newIndex;
		slideDirection = '';
		isAnimating = false;

		// Preload next image after transition
		preloadNext();
	}

	// Touch handlers for mobile swipe
	function handleTouchStart(e) {
		touchStart = e.touches[0].clientX;
	}

	function handleTouchMove(e) {
		touchEnd = e.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (!touchStart || !touchEnd) return;

		const diff = touchStart - touchEnd;
		const threshold = 50; // Minimum swipe distance

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				slide('left');
			} else {
				slide('right');
			}
		}

		touchStart = null;
		touchEnd = null;
	}

	// Initialize first image and preload second
	onMount(() => {
		if (images.length > 1) {
			preloadNext();
		}
	});
</script>

<style>
    .gallery {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        touch-action: pan-y pinch-zoom;
    }

    .slide {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease-in-out;
    }

    .slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Slide animations */
    .slide-left-enter {
        transform: translateX(100%);
    }

    .slide-left-exit {
        transform: translateX(-100%);
    }

    .slide-right-enter {
        transform: translateX(-100%);
    }

    .slide-right-exit {
        transform: translateX(100%);
    }
</style>

<div
	class="gallery"
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
>
	{#each images as image, i}
		{#if loadedImages.has(i) && (i === currentIndex ||
			i === (currentIndex + 1) % images.length ||
			i === (currentIndex - 1 + images.length) % images.length)}
			<div
				class="slide"
				class:slide-left-enter={slideDirection === 'left' && i === (currentIndex + 1) % images.length}
				class:slide-left-exit={slideDirection === 'left' && i === currentIndex}
				class:slide-right-enter={slideDirection === 'right' && i === (currentIndex - 1 + images.length) % images.length}
				class:slide-right-exit={slideDirection === 'right' && i === currentIndex}
				style="transform: {i === currentIndex && !slideDirection ? 'translateX(0)' : ''}"
			>
				<img src={image} alt={`Slide ${i + 1}`} />
			</div>
		{/if}
	{/each}

	<!-- Navigation buttons -->
	<button
		on:click={() => slide('right')}
		style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%);"
	>
		←
	</button>
	<button
		on:click={() => slide('left')}
		style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%);"
	>
		→
	</button>
</div>