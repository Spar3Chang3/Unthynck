<meta http-equiv="Refresh" content="3;/landing-page">
<script lang="js">
	import { onMount } from 'svelte'

	let count = $state(3);
	let interval = $state();

	function startCounter() {
		interval = setInterval(() => {
			count--;

			if (count === 0) {
				clearInterval(interval);
			}
		}, 1000);
	}

	onMount(() => {
		startCounter();

		return(() => {
			if (interval) {
				clearInterval(interval);
			}
		});
	});
</script>
<style>
	.redirect {
			display: flex;
			flex-direction: column;

			height: 80vh;
			width: 100vw;

			justify-content: center;
			align-items: center;

			color: var(--text-standard);
			background-color: var(--background-standard);
	}
	.content {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;
			text-align: center;

      font-family: var(--font-special);
			font-size: 3rem;
			line-height: 2rem;
			animation: glitch .4s infinite alternate;
	}

  @keyframes glitch {
      0% {
          text-shadow: -4px 6px 0 var(--banner-accent), 4px -6px 0 var(--banner-standard);
          transform: translateY(-0.5rem);
      }
      40% {
          text-shadow: 4px -6px 0 var(--banner-standard), -4px 6px 0 var(--banner-accent);
      }
      70% {  text-shadow: none; transform: none; }
  }

</style>
<title>Connecting to page</title>

<section class="redirect">
	<div class="content">
		<h1>You are being redirected</h1>
		<h2>Please wait...</h2>
		<h2>{count}</h2>
	</div>
</section>