<script>
	import { Button } from '$lib/components/ui/button';
	import { SiteLinks, SocialLinks, IconLinks } from '$lib/utils/Global.js';

	let { showModal = $bindable() } = $props();
	let dialog = $state();

</script>

<main>

	<div class="main-header">
		<div class="menu-button-container spacer">
			<Button variant="outline" onclick={() => (showModal = true)}>☰</Button>
		</div>
		<div class="brand-heading">
			<h1>Unthynck</h1>
		</div>
	</div>

	<dialog bind:this={dialog}
					onclose={() => (showModal = false)}>
		<section class="modal-header">
			<header>Unthynck</header>
			<Button variant="outline" onclick={() => dialog.close()}>✕</Button>
		</section>

		<section class="modal-body">
			<div class="nav-button-group">
				<Button variant="primary" href="${SiteLinks.eventSchedule}">Event Schedule ▷</Button>
				<Button variant="primary" href="${SiteLinks.music}">Our Music ▷</Button>
				<hr/>
				<Button variant="secondary" href="${SiteLinks.meetTheBand}">Meet the Band ▷</Button>
				<Button variant="secondary" href="${SiteLinks.contactUs}">Contact Us ▷</Button>
			</div>

			<div class="modal-social-links">
				<span class="modal-socials-tooltip">Check us out on</span>
				<Button variant="ghost" href="${SocialLinks.facebook}">
					<img src={IconLinks.facebook} alt={'Facebook Icon'}/>
				</Button>
				<Button variant="ghost" href="${SocialLinks.instagram}">
					<img src={IconLinks.instagram} alt={'Instagram Icon'}/>
				</Button>
				<Button variant="ghost" href="${SocialLinks.youtube}">
					<img src={IconLinks.youtube} alt={'YouTube Icon'}/>
				</Button>
				<Button variant="ghost" href="${SocialLinks.spotify}">
					<img src={IconLinks.spotify} alt={'Spotify Icon'}/>
				</Button>
			</div>
		</section>

		<section class="modal-footer">
			<div class="modal-footer-licenses">
				<span>© 2024 Unthynck - All Rights Reserved</span>
			</div>
		</section>
	</dialog>
</main>

<style>

</style>