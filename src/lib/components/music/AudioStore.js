import { writable, get } from 'svelte/store';
import { Queue } from '$lib/components/music/Queue.js';

const audioQueue = new Queue();

export const audioStore = writable(audioQueue);

export const enqueueAudio = (item) => {
	const store = get(audioStore);
	if (Array.isArray(item)) {
		store.enqueueArray(item);
	} else {
		store.enqueue(item);
	}
	audioStore.set(store);
}

export const dequeueAudio = () => {
	const store = get(audioStore);
	const dequeuedAudio = store.dequeue();
	audioStore.set(store);
	return dequeuedAudio;
}

export const peekAudio = () => {
	const store = get(audioStore);
	return store.peek();
}

export const isAudioQueueEmpty = () => {
	const store = get(audioStore);
	return store.isEmpty();
}