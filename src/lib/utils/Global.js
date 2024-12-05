export function RedirectInWindow(link) {
	window.open(link, '_self');
}

export function RedirectOutWindow(link) {
	window.open(link, '_blank');
}

export const SiteLinks = {
	landingPage: 'https://Unthynck.band/landing-page',
	meetTheBand: 'https://Unthynck.band/meet-the-band',
	eventSchedule: 'https://Unthynck.band/event-schedule',
	music: 'https://Unthynck.band/music',
	contactUs: 'https://Unthynck.band/contact-us',
}

export const SocialLinks = {
	facebook: 'https://www.facebook.com/profile.php?id=61557511241917',
	instagram: 'https://www.instagram.com/unthynck/',
	youtube: 'https://www.youtube.com/@unthynck/',
	spotify: 'https://open.spotify.com/artist/3C3IxXuW9aRAlwvooDiCJM?si=aNeFJKxFTSaP4uWIsfV_kg&nd=1&dlsi=8c6941f026bd452c',
	bandcamp: '#',
}

export const IconLinks = {
	facebook: '/icons/facebook.svg',
	instagram: '/icons/instagram.svg',
	youtube: '/icons/youtube.svg',
	spotify: '/icons/spotify.svg',

	interaction: '/icons/interaction-cursor.svg',
	loadingIcon: '/icons/spinning-note.gif',

	volumeNone: '/icons/volume-none.svg',
	volumeLow: '/icons/volume-low.svg',
	volumeHigh: '/icons/volume-high.svg',
	volumeMute: '/icons/volume-off.svg',
	playerPlay: '/icons/player-play.svg',
	playerPause: '/icons/player-pause.svg',
	playerShuffleOn: '/icons/player-shuffle-on.svg',
	playerShuffleOff: '/icons/player-shuffle-off.svg',
	playlistAdd: '/icons/playlist-add.svg',
}

export const Titles = {
	landingPage: "Landing Page - Unthynck",
	meetTheBand: "Meet The Band - Unthynck",
	eventSchedule: "Event Schedule - Unthynck",
	music: "Listen - Unthynck",
	contactUs: "Contact Us - Unthynck"
}