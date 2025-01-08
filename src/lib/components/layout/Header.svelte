<script lang="js">
	import { SiteLinks } from '$lib/index.js';
	import { afterNavigate } from '$app/navigation';
	import Modal from '$lib/components/layout/Modal.svelte';

	let { isMobile = false } = $props();

	let isModalOpen = $state(false);

	function changeModalState(e) {
		e.preventDefault();
		isModalOpen = !isModalOpen;
	}

	afterNavigate(() => {
		isModalOpen = false;
	});

</script>

<style lang="css">

	.relative-navbar {
			display: block;

			min-height: 50px;
			height: 10vh;

			width: 100vw;
      background-color: var(--banner-standard);
	}

	.fixed-navbar {
			position: fixed;
      display: grid;
      grid-template-columns: 34% 66%;
      grid-template-rows: 1fr;

      min-height: 50px;
      max-height: 10vh;

			font-family: var(--font-special);
      width: 100vw;
      background-color: var(--banner-standard);
			z-index: 10;
	}

	.shimmer {
			display: flex;
			height: 100%;
			width: 100%;

			justify-content: center;
			align-items: center;

			color: var(--link-color);
			font-size: clamp(2rem, 3rem, 4rem);
			text-decoration: none;
			mask: linear-gradient(-60deg, #784895 40%, #0d00 40%, #784895 70%) right/360% 100%;
			animation: shimmer 5s infinite;
	}

	.shimmer:hover {
			animation: shimmer 1.5s infinite alternate
	}

	.header-branding {
			position: relative;
			display: flex;
			min-height: 50px;
			height: 10vh;
			width: 100%;
      text-shadow: 10px 10px 10px var(--secondary-color);
			line-height: 1rem;
			margin: 0 auto;
			overflow: hidden;
	}

  .navigation {
			position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;

      min-height: 50px;
			height: 10vh;
			width: 100%;
      flex-grow: 1;
  }

	.navigation a {
			position: relative;
			display: flex;

			justify-content: center;
			align-items: center;

			font-size: clamp(0.5rem, 2rem, 3rem);
			text-decoration: none;
			color: var(--link-color);
			transition: color 0.3s ease;
	}

  .navigation a::after {
      content: '';
      position: absolute;
      bottom: 0; /* Align with the bottom of the <a> */
      left: 0;
      width: 0; /* Start with no width */
      height: 0.1rem; /* Height of the bottom border */
      background-color: var(--secondary-color); /* Border color */
      transition: width 0.3s ease; /* Smooth expansion animation */
  }

  .navigation a:hover::after {
      width: 100%; /* Expand to full width on hover */
  }

  .site-link {
			position: relative;
			display: flex;

			height: 100%;
			width: 100%;
			justify-content: center;
			align-items: center;

      white-space: nowrap;
  }

	@media only screen and (min-width: 1200px) {
			.navigation {
					width: 60%;
					padding-left: 25%;
					padding-right: 25%;
			}
	}

	@media only screen and (max-width: 768px) {

			.fixed-navbar {
					grid-template-columns: 66% 34%;
			}
			.shimmer {
					margin-top: -1vh;
			}
			.navigation-modal a {
					color: var(--text-standard);
			}
			.navigation {
					display: flex;
					align-items: center;
					justify-content: flex-end;
			}
			.button-container {
					position: relative;
					display: flex;
					width: 100%;
					height: 100%;
					justify-content: center;
					align-items: center;
					z-index: 20;
			}
			.nav-vis-button {
					height: 6vh;
					width: 6vh;

					background-color: var(--secondary-color);
          color:whitesmoke;
					border: 0.1vh solid var(--banner-accent);
					transition: 50ms ease;
			}
			.nav-vis-button:active {
					background-color: var(--banner-accent);
					transform: scale(0.90);
      }
	}

	@keyframes shimmer {
		100% {
			mask-position: left
		}
	}

</style>

<section class="relative-navbar">
	<div class="fixed-navbar">
		<div class="header-branding">
			<a href={SiteLinks.landingPage} class="shimmer">
				<h1>Unthynck</h1>
			</a>
		</div>
		{#if isMobile}
			<div class="navigation">
				<div class="button-container">
					<button class="nav-vis-button" onclick={changeModalState}>☰</button>
				</div>
				<div class="navigation-modal">
					<Modal bind:isOpen={isModalOpen} title={"I LOVE PENGIS"} showExitButton={false} showTitle={false} >
						<div class="site-link"><a href={SiteLinks.eventSchedule}>Event Schedule</a></div>
						<br/>
						<div class="site-link"><a href={SiteLinks.music}>Music</a></div>
						<br/>
						<div class="site-link"><a href={SiteLinks.meetTheBand}>Meet the Band</a></div>
						<br/>
						<div class="site-link"><a href={SiteLinks.contactUs}>Contact Us</a></div>
					</Modal>
				</div>
			</div>
		{:else}
			<div class="navigation">
				<div class="site-link"><a href={SiteLinks.eventSchedule}>Event Schedule</a></div>
				<div class="site-link"><a href={SiteLinks.music}>Music</a></div>
				<div class="site-link"><a href={SiteLinks.meetTheBand}>Meet the Band</a></div>
				<div class="site-link"><a href={SiteLinks.contactUs}>Contact Us</a></div>
			</div>
		{/if}
	</div>
</section>
