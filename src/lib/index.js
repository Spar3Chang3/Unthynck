export function RedirectInWindow(link) {
    window.open(link, '_self');
}

export function RedirectOutWindow(link) {
    window.open(link, '_blank');
}

export function GetFullDate() {
    const date = new Date();

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // +1 for 0-based month indexing
    const year = String(date.getUTCFullYear());  // Get UTC year
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    const zone = String(date.getTimezoneOffset());  // In minutes, positive if local is behind UTC

    return {
      day: `${day}/${month}/${year}`,
      time: `${hours}:${minutes}:${seconds}`,
      zone: zone,
      unix: Date.now()
    }
}

export function ShuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap elements
    }
    return arr;
}

export function CreateMobileListener(callback) {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const listener = (event) => callback(event.matches);

    mediaQuery.addEventListener('change', listener);

    return { mediaQuery, listener }
}

export function RemoveMobileListener(listenerObj) {
    if (listenerObj?.mediaQuery && listenerObj?.listener) {
        listenerObj.mediaQuery.removeEventListener('change', listenerObj.listener);
    }
}


export const SiteLinks = {
    landingPage: '/landing-page',
    meetTheBand: '/meet-the-band',
    eventSchedule: 'https://calendar.google.com/calendar/u/7?cid=NTQwYzQ0OWJhNjBkMzJhZTBhYzA1MmM4NzNmM2ZmMzc0ZDMyOTA5NTkxYzYzYmY5NWRmMmVmMWEyM2VjNDY1NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
    music: '/music',
    contactUs: '/contact-us',
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

    interaction: '/icons/hand-click.svg',
    loadingIcon: '/icons/spinning-note.gif',
    loader: '/icons/loader.svg',

    volumeNone: '/icons/volume-none.svg',
    volumeLow: '/icons/volume-low.svg',
    volumeHigh: '/icons/volume-high.svg',
    volumeMute: '/icons/volume-off.svg',
    playerPlay: '/icons/player-play.svg',
    playerPause: '/icons/player-pause.svg',
    playerShuffleOn: '/icons/player-shuffle-on.svg',
    playerShuffleOff: '/icons/player-shuffle-off.svg',
    playlistAdd: '/icons/playlist-add.svg',
    playlistRemove: '/icons/playlist-remove.svg',
}

export const Titles = {
    landingPage: "Landing Page - Unthynck",
    meetTheBand: "Meet The Band - Unthynck",
    eventSchedule: "Event Schedule - Unthynck",
    music: "Listen - Unthynck",
    contactUs: "Contact Us - Unthynck"
}