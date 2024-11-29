<script lang="js">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>
<style>
		@font-face {
				font-family: 'Unthynck Branding';
				src: url("/fonts/unthynck-branding.ttf") format("truetype");
				font-weight: normal;
				font-style: normal;
				font-display: swap;
		}

		:global(html, body) {
				margin: 0;
		}

    :root {
        --background-standard: url("/backgrounds/standard-background.jpg");
        --surface-standard: #000000;
        --primary-color: #1a1a1a;
        --on-primary-color: #F8F0e3;
        --secondary-color: #784895;
        --on-secondary-color: #e4ebf7;

				--link-color: #039be5;

        --primary-container: #140800;
        --secondary-container: #7a2abf;

        --paragraph-font-size: 1.4rem;
        --paragraph-line-height: 1.5;

        @media only screen and (max-width: 768px) {
            --paragraph-font-size: 1.15rem;
        }
    }

		main, header, footer{
				background-image: url("/backgrounds/standard-background.jpg");
				background-repeat: repeat;
				background-size: initial;
		}

</style>

<header>
	<Header/>
</header>
<main>
	<slot/>
</main>
<footer>
	<Footer/>
</footer>