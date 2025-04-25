<script lang="js">
	import { onMount } from 'svelte';
	import { IconLinks, Titles } from '$lib/index.js';
	import { initDatabase, getDataFromDatabase } from '$lib/firebase.js';
	import BandCard from '$lib/components/band/BandCard.svelte';

	const memberDataPath = 'public/members';

	let memberSet = $state([]);
	let membersRetrieved = $state(false);

async function fetchMemberData() {
		initDatabase();
		await getDataFromDatabase(memberDataPath).then((data) => {
			memberSet = Object.values(data);
		}).catch((err) => {
			alert(("Could not obtain members :( Please try refreshing or come back later - " + err));
		});

	}

	onMount(() => {
		document.title = Titles.meetTheBand;
		fetchMemberData().then(() => {
			membersRetrieved = true;
		});
	});
</script>

<section class="meet-the-band">
	<div class="band-members-container">
		{#if membersRetrieved}
			{#each memberSet as member}
				<BandCard
					name={member.name}
					hp={member.hp}
					id={member.id}
					aboutMe={member.aboutMe}
					imagePath={member.imagePath}
					position={member.position}
					instagramLink={member.instagramLink}
					facebookLink={member.facebookLink}
				/>
			{/each}
		{:else}
			<div class="loading-model">
				<img src={IconLinks.loader} alt="Loading Icon" />
			</div>
		{/if}
	</div>
</section>

<style lang="css">

	.meet-the-band {
			position: relative;
			display: flex;

			min-height: 80dvh;
			width: 100dvw;
	}

	.band-members-container {
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			min-height: 80dvh;
			width: 100dvw;

			justify-content: center;
			align-items: center;

			overflow-x: hidden;
			padding-top: 2rem;
	}

  .loading-model img {
      height: 10dvh;
      width: 10dvh;
      object-fit: contain;

      animation: rotate 1s infinite linear;
  }

  @keyframes rotate {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }

</style>