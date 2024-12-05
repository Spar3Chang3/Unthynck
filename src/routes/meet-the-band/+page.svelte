<script lang="js">
	import { onMount } from 'svelte';
	import { Titles } from '$lib/utils/Global.js';
	import { initDatabase, getDataFromDatabase } from '$lib/utils/Firebase.js';
	import BandCard from '$lib/components/band/BandCard.svelte';

	const memberDataPath = 'public/members';

	let memberSet = $state([]);

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
		fetchMemberData();
	});
</script>

<section class="meet-the-band">
	{#each memberSet as member}
		<BandCard
			name={member.name}
			hp={member.hp}
			id={member.id}
			aboutMe={member.aboutMe}
			imagePath={member.imagePath}
			position={member.position}
		/>
	{/each}
</section>

<style lang="css">

	.meet-the-band {
			position: relative;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			min-height: 80vh;
			width: 100vw;

			justify-content: center;
			align-items: center;

			overflow-x: hidden;
	}

</style>