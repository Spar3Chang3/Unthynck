import { writable, get } from 'svelte/store';

export const audioStore = writable([]);


// Add an item to the queue
export const enqueueAudio = (item) => {
	audioStore.update((queue) => [...queue, item]); // Create a new array with the new item added
};

// Remove and return the first item from the queue
export const dequeueAudio = () => {
	let audio = null;
	audioStore.update((queue) => {
		audio = queue[0]; // Get the first item
		return queue.slice(1); // Return a new array without the first item
	});
	return audio;
};

export const peekAudio = () => {
	const store = get(audioStore);
	return store[0];
}

export const isAudioQueueEmpty = () => {
	const store = get(audioStore);
	return store.length === 0;
}
