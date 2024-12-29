<script lang="js">
	import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/* TODO:
		* add mobile detector
	*/

	onMount(() => {

	});


</script>
<style>
		@font-face {
				font-family: 'Unthynck Branding';
				src: url("/fonts/unthynck-branding.ttf") format("truetype");
				font-weight: normal;
				font-style: normal;
				font-display: swap;
		}

		@font-face {
				font-family: 'Unthynck Text';
				src: url("/fonts/unthynck-text.ttf") format("truetype");

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

		main {
				background-image: url("/backgrounds/standard-background.jpg");
				background-repeat: repeat;
				background-size: initial;
				overflow-x: hidden;
				min-height: 80vh;
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