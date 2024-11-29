<script lang="js">
	import { onMount } from 'svelte';
	import { initApp, initDatabase, getDataFromDatabase } from '$lib/utils/Firebase.js';
	import BandCard from '$lib/components/band/BandCard.svelte';

	const memberDataPath = 'public/members';
	let memberSet = $state([{}]);

async function fetchMemberData() {
		initApp();
		initDatabase();
		const members = await getDataFromDatabase(memberDataPath);
		memberSet = Object.values(members);
	}

	onMount(() => {
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