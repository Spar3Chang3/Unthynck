<script>

	let { isOpen = $bindable(), title = "Penis", showExitButton = false, showTitle = true, alignItems = 'flex-start', width = '100dvw', offset = '0', backgroundColor = 'black', children } = $props();
	function closeModal() {
		isOpen = false;
	}

	function handleEscape(event) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	// Close modal when clicking outside
	function handleOutsideClick(event) {
		if (event.target.classList.contains('modal-backdrop')) {
			closeModal();
		}
	}
</script>

<svelte:window onkeydown={handleEscape}/>

	<div
		class="modal-backdrop"
		style:visibility="{isOpen ? 'visible' : 'hidden'}"
		style:opacity="{isOpen ? 1 : 0}"
		style:align-items={alignItems}
		onclick={handleOutsideClick}
		onkeydown={handleOutsideClick}
		role="tabpanel"
		tabindex="0"
	>
		<div class="modal"
				 style:width={width}
				 style:margin-top={offset}
				 style:background-color={backgroundColor}
		>
			{#if showTitle}
				<div class="modal-header">
					<h2>{title}</h2>
					{#if showExitButton}
						<button
							class="close-button"
							onclick={closeModal}
						>×</button>
					{/if}
				</div>
			{/if}
			<div class="modal-content">
				{@render children()}
			</div>
		</div>
	</div>

<style>
    .modal-backdrop {
        position: fixed;
				top: 0;
				right: 0;
				height: 100%;
				width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: space-evenly;
        z-index: 100;

        color: var(--text-standard);

				transition: opacity 250ms;
				transform: translateY(10vh);
    }

    .modal {
				position: relative;
        overflow-y: auto;
				padding: 0.5rem;
    }

    .modal-header {
				position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
				text-align: center;
        margin-bottom: 15px;
				font-family: var(--font-standard);
				font-size: 1.75rem;
    }

    .close-button {
				position: absolute;
				top: 0;
				right: 0;

        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
				font-size: 2.5rem;
				color: var(--text-standard);
				transition: 200ms ease;
				margin-right: 15px;
    }

    .close-button:hover {
				transform: scale(1.05);
        opacity: 0.7;
    }

		.close-button:active {
				transform: scale(0.95);
		}

		@media only screen and (max-width: 768px) {
				.modal-header {
						font-size: 1.25rem;
				}
		}
</style>