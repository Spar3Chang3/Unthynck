<script>
	import { onMount } from 'svelte';

	let { message = '', duration = 3000, onClose = () => {} } = $props();

	let isVisible = $state(true);

	onMount(() => {
		const timer = setTimeout(() => {
			isVisible = false;
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	});
</script>

<div
	class="toast"
	class:visible={isVisible}
>
	{message}
</div>

<style>
    .toast {
        position: fixed;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%) translateY(2rem);
        background-color: var(--secondary-color);
        color: var(--text-standard);
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        z-index: 100;
				font-family: var(--font-standard);
    }

    .visible {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
</style>