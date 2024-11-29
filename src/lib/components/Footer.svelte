<script lang="js">
	import { IconLinks, SocialLinks, SiteLinks } from '$lib/utils/Global.js';

</script>

<section class="main-footer">
	<div class="spacer"></div>

	<div class="footer-branding">
		<a href={SiteLinks.landingPage}>Unthynck</a>
	</div>

	<div class="footer-copyright-message">
		<p>© 2024 Unthynck - All Rights Reserved</p>
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
				transition: 250ms ease;
		}

		a:hover img {
				transform: scale(1.1);
		}

		img {
				height: inherit;
				width: 3rem;
				margin: 0 auto;
		}


		.main-footer {
				position: relative;
				display: inline-grid;
				grid-template-columns: auto auto auto auto auto;
				grid-template-rows: auto;

				height: 10vh;
				width: 100vw;

				background-color: var(--surface-standard);
				color: var(--on-primary-color);
		}

		.footer-branding {
				display: inline-flex;
				flex-direction: row;
				height: inherit;

				justify-content: center;
				align-items: center;

				font-family: Unthynck Branding, serif;
				font-size: 4rem;
		}

		.footer-copyright-message {
				display: inline-flex;
				flex-direction: row;
				height: inherit;

				justify-content: center;
				align-items: center;
		}

		.footer-social-links {
        position: relative;
        display: inline-grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto;
        height: inherit;
        width: fit-content;
        gap: 2rem;

        justify-self: flex-end;
        align-items: center;
		}

</style>