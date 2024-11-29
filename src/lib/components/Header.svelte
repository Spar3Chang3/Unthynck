<script lang="js">
	import { SiteLinks } from "$lib/utils/Global.js";
</script>

<section class="main-header">

	<div class="fixed-header">

		<div class="spacer"></div>

		<div class="header-branding">
			<a href="https://unthynck.band/" class="shimmer">
				<h1>Unthynck</h1>
			</a>
		</div>

		<div class="navbar">
			<div class="site-link"><a href={SiteLinks.eventSchedule}>Event Schedule</a></div>
			<div class="site-link"><a href={SiteLinks.music}>Music</a></div>
			<div class="site-link"><a href={SiteLinks.meetTheBand}>Meet the Band</a></div>
			<div class="site-link"><a href={SiteLinks.contactUs}>Contact Us</a></div>
		</div>

		<div class="spacer"></div>

	</div>

</section>

<style>
	.main-header {
			position: relative;
			display: inline-flex;
			height: 10vh;
			width: 100vw;
			justify-content: center;
			align-items: center;

			margin: 0 auto;
			background-color: var(--surface-standard);
	}

	.fixed-header {
      font-family: Unthynck branding, serif;
			position: fixed;
			display: inline-grid;
			grid-template-columns: auto auto auto auto;
			grid-template-rows: auto;
			height: inherit;
			width: inherit;

			background-color: var(--surface-standard);
			z-index: 10;
	}

	.header-branding {
			position: relative;
			display: flex;
			height: inherit;
			width: fit-content;

			font-size: 3rem;
			align-items: center;
			justify-self: flex-start;

			text-shadow: 10px 10px 10px var(--secondary-color);
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

  @keyframes shimmer {
      100% {
          mask-position: left
      }
  }

</style>