<script lang="js">
	import { IconLinks, SocialLinks, SiteLinks } from '$lib/index.js'
	import { onMount } from 'svelte';

	let date = $state();

	onMount(() => {
		date = new Date().getFullYear();
	});
</script>

<section class="main-footer">
	<div class="spacer"></div>

	<div class="footer-branding">
		<a href={SiteLinks.landingPage}>Unthynck</a>
	</div>

	<div class="footer-copyright-message">
		<p>© {date} Unthynck - All Rights Reserved</p>
	</div>

	<div class="footer-social-links">
		<a href={SocialLinks.facebook}>
			<img src={IconLinks.facebook} alt={"Facebook"}/>
		</a>

		<a href={SocialLinks.instagram}>
			<img src={IconLinks.instagram} alt={"Instagram"}/>
		</a>

		<a href={SocialLinks.youtube}>
			<img src={IconLinks.youtube} alt={"YouTube"}/>
		</a>

		<a href={SocialLinks.spotify}>
			<img src={IconLinks.spotify} alt={"Spotify"}/>
		</a>
	</div>
	<div class="spacer"></div>

</section>

<style lang="css">

		a {
				text-decoration: none;
				color: var(--link-color);
		}

		a img {
        height: inherit;
        width: 3rem;
        margin: 0 auto;
        transition: 250ms ease;
		}

		a:hover img {
				transform: scale(1.1);
		}

		.main-footer {
				position: relative;
				display: grid;
				grid-template-columns: auto auto auto auto auto;
				grid-template-rows: auto;

				min-height: 10vh;
				max-height: 10vh;
				width: 100vw;

				background-color: var(--banner-standard);
				color: var(--text-standard);
				overflow: hidden;

				font-family: var(--font-standard);
				margin: 0 auto;
		}

		.footer-branding {
				display: flex;
				flex-direction: row;
				height: auto;

				justify-content: center;
				align-items: center;

				font-family: Unthynck Branding, serif;
				font-size: 4rem;
		}

		.footer-copyright-message {
				display: flex;
				flex-direction: row;
				height: auto;

				justify-content: center;
				align-items: center;
		}

		.footer-social-links {
        position: relative;
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto;
        height: auto;
        width: fit-content;
        gap: 2rem;

        justify-self: flex-end;
        align-items: center;
		}

		@media only screen and (max-width: 768px) {
				.spacer, .footer-branding {
						display: none;
				}

				.main-footer {
						display: grid;
						grid-template-columns: auto;
						grid-template-rows: auto auto;
						justify-content: center;
						align-items: center;

						min-height: 10vh;
						max-height: fit-content;
				}

				.footer-social-links {
						height: 10vh;
				}
		}

</style>