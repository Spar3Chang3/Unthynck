<script lang="js">
	import { SiteLinks } from "$lib/utils/Global.js";
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let isMobile = $state(false);
	let navOpen = $state(false);

	function toggleNav(e) {
		e.preventDefault();
		navOpen = !navOpen;
		console.log("Nav open?", navOpen);
	}

	page.subscribe(() => {
		navOpen = false;
	});

	onMount(() => {
		isMobile = window.matchMedia('(max-width: 768px)').matches;
	});

</script>

<section class="main-header">

	<div class="fixed-header">

		<div class="spacer"></div>

		<div class="header-branding">
			<a href="https://unthynck.band/" class="shimmer">
				<h1>Unthynck</h1>
			</a>
		</div>

		{#if isMobile}
			<div class="mobile-wrapper"

			>
				<div class="mobile-button-container">
					<button class="mobile-button" onclick={toggleNav}>☰</button>
				</div>
				<div
					class="mobile-navbar"
					class:mobile-navbar-expanded={navOpen}
					class:mobile-navbar-closed={!navOpen}
				>
					<div class="site-link"><a href={SiteLinks.eventSchedule} target="_blank">Event Schedule</a></div>
					<div class="site-link"><a href={SiteLinks.music}>Music</a></div>
					<div class="site-link"><a href={SiteLinks.meetTheBand}>Meet the Band</a></div>
					<div class="site-link"><a href={SiteLinks.contactUs}>Contact Us</a></div>
				</div>
			</div>
		{:else}
			<div class="navbar">
				<div class="site-link"><a href={SiteLinks.eventSchedule}>Event Schedule</a></div>
				<div class="site-link"><a href={SiteLinks.music}>Music</a></div>
				<div class="site-link"><a href={SiteLinks.meetTheBand}>Meet the Band</a></div>
				<div class="site-link"><a href={SiteLinks.contactUs}>Contact Us</a></div>
			</div>
		{/if}

		<div class="spacer"></div>

	</div>

</section>

<style lang="css">
	.main-header {
			position: relative;
			height: auto;
			max-height: 10vh;
			width: 100vw;

			top: 0;
			margin: 0 auto;
			background-color: var(--surface-standard);
	}

	.fixed-header {
      font-family: Unthynck branding, serif;
			position: fixed;
			display: inline-grid;
			grid-template-columns: auto auto auto auto;
			grid-template-rows: auto;

			height: 10vh;
			width: inherit;

			background-color: var(--surface-standard);
			z-index: 10;
			margin: 0;
	}

	.header-branding {
			position: relative;
			display: flex;
			max-height: 5vh;
			width: fit-content;

			align-items: center;
			justify-self: flex-start;
			object-fit: contain;

			text-shadow: 10px 10px 10px var(--secondary-color);
	}

	.header-branding a {
			display: flex;
			font-size: 3rem;
			height: inherit;
			max-width: 100%;
			padding-right: 10px;

			justify-content: center;
			align-items: center;
	}


  .navbar {
      position: relative;
      display: inline-grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto;
      height: inherit;
      width: fit-content;
      gap: 3rem;
      font-size: 2rem;
      justify-self: flex-end;
      align-items: center;
  }

	/* START GPT CODE */

  .navbar a {
      position: relative; /* Required for pseudo-element positioning */
      text-decoration: none;
      color: var(--link-color);
      text-align: center;
      transition: color 0.3s ease; /* Optional for a smooth color transition */
  }

  .navbar a::after {
      content: '';
      position: absolute;
      bottom: 0; /* Align with the bottom of the <a> */
      left: 0;
      width: 0; /* Start with no width */
      height: 0.1rem; /* Height of the bottom border */
      background-color: var(--secondary-color); /* Border color */
      transition: width 0.3s ease; /* Smooth expansion animation */
  }

  .navbar a:hover::after {
      width: 100%; /* Expand to full width on hover */
  }

	/* END GPT CODE (I still don't know ::after well) */

	.site-link {

			white-space: nowrap;
	}

	a {
			text-decoration: none;
			color: var(--link-color);
			text-align: center;
	}

  .shimmer {
      color: var(--link-color);
      display: inline-block;
      mask: linear-gradient(-60deg, #784895 40%, #0d00 40%, #784895 70%) right/360% 100%;
      animation: shimmer 5s infinite;
  }

	.shimmer:hover {
			animation: shimmer 1.5s infinite alternate
	}


	@media only screen and (max-width: 768px) {

			.spacer {
					display: none;
			}

			.main-header {
					height: auto;
					min-height: 15vh;
					width: 100vw;
					overflow: visible;
			}

			.fixed-header {
					position: fixed;
					display: grid;
					grid-template-columns: auto;
					grid-template-rows: 1fr 1fr;
					height: 15vh;
					width: inherit;

					justify-content: center;
					align-items: center;
					z-index: 10;
					overflow: visible;
			}

			.header-branding {
					display: flex;
					justify-content: center;
					align-items: flex-start;
					min-height: 9vh;
					width: 100vw;
					z-index: 10;
			}

      .header-branding a {
          font-size: 2.5rem;
					max-height: 8vh;
      }

			.mobile-wrapper {
					display: flex;
					flex-direction: column;
					width: inherit;
					max-height: 6vh;
					justify-content: center;
					align-items: center;
					z-index: 8;
			}

			.mobile-button-container {
					position: relative;
					display: flex;
					justify-content: center;
					align-content: center;
					width: 100vw;
					z-index: 10;
			}

			.mobile-button {
					border: 0.1rem solid var(--on-primary-color);
					font-family: "Comic Sans MS", sans-serif;
					background-color: var(--secondary-color);
					color: var(--on-primary-color);
					height: 100%;
					width: 80%;
					font-size: 1rem;
					transition: 25ms ease-out;
			}

			.mobile-button:active {
					transform: scale(0.95);
			}

      .mobile-navbar {
          position: fixed;
          width: 90vw;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
					align-self: center;
					gap: 1.5rem;
					font-size: 2rem;
					margin-top: 1rem;
					padding: 1rem;

          background-color: var(--surface-standard);

          /* Key transition properties */
          transition:
                  opacity 0.3s ease,
                  transform 0.3s ease,
                  visibility 0.3s;

					pointer-events: none;
					touch-action: none;
					z-index: 1;
      }

			/*
				* TODO:
				* fix the mobile bug of blocking pointer events in navbar
			*/

      .mobile-navbar-expanded {
          opacity: 1;
          visibility: visible;
					pointer-events: auto;
					touch-action: auto;
          transform: translateY(18vh);
					z-index: 8;
      }

			.mobile-navbar-closed {
					visibility: hidden;
          transform: translateY(-20vw);
					opacity: 0;
					pointer-events: none;
					touch-action: none;
					z-index: 1;
			}

      .mobile-navbar a {
          width: 100%;
          text-align: center;
          padding: 0.5rem;
      }
	}

</style>