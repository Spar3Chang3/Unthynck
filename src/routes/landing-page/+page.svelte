<script>
	import Carousel from 'svelte-carousel';
	import { Titles } from '$lib/index.js';
	import { onMount } from 'svelte';
	import { getDownloadsFromStorage, initStorage } from '$lib/firebase.js';

	let backgroundPath = $state("");
	let backgroundOpacity = $state(1);
	let carousel = $state();
	let showCarousel = $state(false);

	let parallaxScrollY = $state([0, 0, 0]);


	let isMobile = $state(false);
	let slideImagePath;

	let slides = $state([]);

	let observeElements = $state([
		{id: 0, title: 'about-text', isVisible: false, visibleRatio: 0, hasBeenViewed: false},
		{id: 1, title: 'spotify-plugin', isVisible: false, visibleRatio: 0, hasBeenViewed: false},
	]);

	let elementRefs = $state([null, null]);

	function setupMediaListeners() {
		const mobileQuery = window.matchMedia('(max-width: 768px)');

		// Set initial values
		isMobile = mobileQuery.matches;

		const updateMobile = (e) => isMobile = e.matches;
		// Add listeners
		mobileQuery.addEventListener('change', updateMobile);

		// Return cleanup function
		return () => {
			mobileQuery.removeEventListener('change', updateMobile);
		};
	}


	async function fetchSlides() {
		initStorage();
		let slideLinks = await getDownloadsFromStorage(slideImagePath);
		slides = Object.values(slideLinks);
	}

	function updateSlideBackground(index) {
		backgroundOpacity = 0;
		setTimeout(() => {
			backgroundPath = slides[index];
			backgroundOpacity = 1;
		}, 500);
	}

	function showPrevSlide(e) {
		e.preventDefault();
		carousel.goToPrev();
	}

	function showNextSlide(e) {
		e.preventDefault();
		carousel.goToNext();
	}

	onMount(() => {
		document.title = Titles.landingPage;

		const cleanup = setupMediaListeners();
		slideImagePath = isMobile ? 'images/slideshow/mobile' : 'images/slideshow/desktop';

		fetchSlides().then(() => {
			showCarousel = true;
		}).then(() => {
			updateSlideBackground(0);
		});


		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				const targetIndex = observeElements.findIndex(
					target => target.id === Number(entry.target.dataset.id)
				);

				if (targetIndex > -1) {

					observeElements[targetIndex] = {
						...observeElements[targetIndex],
						isVisible: entry.isIntersecting,
						visibleRatio: Math.round(entry.intersectionRatio * 100),
						hasBeenViewed: entry.isIntersecting && observeElements[targetIndex].hasBeenViewed === false || observeElements[targetIndex].hasBeenViewed
					}
				}
			});
		},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.2
			}
		);

		Object.values(elementRefs).forEach(element => {
			if (element) {
				observer.observe(element);
			}
		});

		const setSlideParallax = () => {
			parallaxScrollY[0] = window.scrollY;
		}

		window.addEventListener('scroll', setSlideParallax);

		return () => {
			cleanup;

			Object.values(elementRefs).forEach(element => {
				if (element) {
					observer.unobserve(element);
				}
			});

			window.removeEventListener('scroll', setSlideParallax);
		};

	});



</script>

<section class="landing-page">

	<section class="slideshow-wrapper">
		<div class="slideshow-container">
			{#if showCarousel}
<!--				<Carousel-->
<!--					bind:this={carousel}-->
<!--					autoplay-->
<!--					autoplayDuration={5000}-->
<!--					>-->
<!--					<img class="slide-img" src={slides[0]} alt="slide"/>-->
<!--					<img class="slide-img" src="#" alt="slide"/>-->
<!--				</Carousel>-->

							<Carousel
								bind:this={carousel}
								autoplay={true}
								autoplayDuration={5000}
								particlesToShow={1}
								particlesToScroll={1}
								loop={true}
								let:loaded
								on:pageChange={
								e => updateSlideBackground(e.detail)
								}
								>
								<button slot="prev" onclick={showPrevSlide} class="custom-arrow custom-arrow-prev" aria-label="Navigate to Previous Slide">
									<i></i>
								</button>
								{#each slides as slide, imageIndex (slide)}
									<div class="img-container">
										{#if loaded.includes(imageIndex)}
											<img class="slide-img" src={slide} alt="Band members"/>
										{/if}
									</div>
								{/each}
								<button slot="next" onclick={showNextSlide} class="custom-arrow custom-arrow-next" aria-label="Navigate to Next Slide">
									<i></i>
								</button>
							</Carousel>
			{/if}
		</div>
		<div class="slideshow-image-background"
					style:opacity="{backgroundOpacity}" style:background-image="url({backgroundPath})" style:margin-top="{parallaxScrollY[0]}px"></div>
	</section>


	<section class="about-wrapper"
					 bind:this={elementRefs[0]}
					 data-id="0"
	>
		<div
			class="about-text-container"
			style="opacity: {observeElements[0].hasBeenViewed ? 1 : 0}; transform: translateY({observeElements[0].hasBeenViewed ? '0' : '100vh'}); transition: opacity 0.4s ease, transform 0.5s ease;"
		>
			<div class="about-text">
				<h2>GRUNGY AND RUSTY</h2>
				<p>
					A product of the 217, Unthynck is a band with unconditional LOVE for our hometown:
					<a href="https://www.springfield.il.us/">Springfield, IL</a>
				</p>

				<p>
					Our sound is a blend of grunge, hardcore punk, alt metal, thrash, and more.
					If you're looking for vibes, or just hailing Psybin, you've come to the right place.
					From the basement to Parker's bedroom to you ears, we're here to stay
				</p>

				<p>
					Check out our latest albums, get to know us, and find your next night out.
					Catch us on Spotify, Apple Music, YouTube, or right here!
				</p>
			</div>
		</div>
		</section>

	<section
		class="plugin-wrapper"
		bind:this={elementRefs[1]}
		data-id="1"
	>
		<div
			class="spotify-plugin-container" style="opacity: {observeElements[1].hasBeenViewed ? 1 : 0}; transform: translateY({observeElements[1].hasBeenViewed ? '0' : '100vh'}); transition: opacity 0.4s ease, transform 0.5s ease;"
		>
			<iframe style="width: 100%; height: 75vh;"
							src="https://open.spotify.com/embed/artist/3C3IxXuW9aRAlwvooDiCJM?utm_source=generator&theme=0"
							width="50%" height="700" frameBorder="0" allowFullScreen={false}
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							datatype={'audio/mpeg'}
							itemProp={'audio'}
							title={'Unthynck'}
							loading="lazy"></iframe>
		</div>

	</section>


</section>

<style lang="css">

	.landing-page {
			position: relative;
			display: flex;
			flex-direction: column;

			height: fit-content;
			width: 100vw;

			place-items: center;
			align-items: center;

			margin: 0 auto;

			color: var(--text-standard);
			overflow: hidden;

			gap: 8rem;
	}

	.slideshow-wrapper {
			position: relative;
			display: flex;
			height: 80vh;
			width: 100vw;
			padding: 4rem;

			justify-content: center;
			align-items: center;
			overflow: hidden;
	}

	.slideshow-container {
			height: 80vh;
			width: 90vw;
			overflow: hidden;
			z-index: 2;
	}

  /* General carousel styling */
  .img-container {
      position: relative; /* Enables positioning of children */
			display: flex;
			width: 90vw;
			height: 80vh; /* Full height of carousel */
			justify-content: center;
			align-items: center;
			object-fit: contain;
  }

  .slide-img {
			position: relative;
      display: block; /* Removes inline spacing issues */
			height: 100%;
			width: 100%;
			object-fit: contain;
  }

  /* Custom arrow buttons styling */
  .custom-arrow {
      position: absolute; /* Position buttons over the carousel */ /* Align to the top of the carousel */
      height: fit-content; /* Full height of the carousel */
      width: fit-content; /* Width for the button area */
      display: flex; /* Center icon vertically and horizontally */
      align-items: center;
      justify-content: center;
      z-index: 8; /* Ensure it stays above other elements */
      cursor: pointer; /* Pointer cursor for interactivity */
      background: rgba(120, 72, 149, 0.2); /* Semi-transparent overlay */
      color: white; /* Icon color */
      transition: background 0.3s ease; /* Smooth hover effect */
			border: none;
			align-self: center;
  }

  /* Hover effect */
  .custom-arrow:hover {
      background: rgba(120, 72, 149, 0.5); /* Darker background on hover */
  }

  /* Left (prev) arrow */
  .custom-arrow-prev {
      padding: 2rem 0.5rem 2rem 1rem;
      left: 0; /* Align to the left of the carousel */
  }

  /* Right (next) arrow */
  .custom-arrow-next {
      padding: 2rem 1rem 2rem 0.5rem;
      right: 0; /* Align to the right of the carousel */
  }

  /* Icon styling inside buttons */
  .custom-arrow i {
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 10px;
  }

  /* Adjust icons for left and right */
  .custom-arrow-prev i {
      transform: rotate(135deg); /* Left arrow */
  }

  .custom-arrow-next i {
      transform: rotate(-45deg); /* Right arrow */
  }

	.slideshow-image-background {
			position: absolute;
			height: 100vh;
			width: 100vw;
			z-index: 1;
			background-position: center;
			background-size: cover;
			transition: opacity 550ms ease;
			background-color: var(--primary-color);
			filter: blur(12px);
	}

	.about-wrapper {
			position: relative;
			display: flex;
			flex-direction: column;

			min-height: fit-content;
			width: 90vw;
			overflow: hidden;

			justify-content: center;
			align-items: center;

			background-color: transparent;

			font-family: "Unthynck Text", sans-serif;
	}

	.about-wrapper a {
			text-decoration: none;
			color: var(--link-color);
			overflow: hidden;
	}

	.about-text-container {
			position: relative;
			display: block;
			height: fit-content;
			width: 100%;

			background-color: var(--primary-color);
	}

	.about-text {
			padding: 2rem;
	}

	.plugin-wrapper {
			position: relative;
			display: flex;
			flex-direction: column;

			min-height: fit-content;
			width: 90vw;

			justify-items: center;
			align-items: center;

			background-color: transparent;
	}

	.spotify-plugin-container {
			position: relative;
			display: block;
			max-height: 80vh;
			width: 100%;
			margin-bottom: 2rem;
	}

	@media only screen and (max-width: 768px) {
			.spotify-plugin-container {
					height: fit-content;
			}
	}

</style>