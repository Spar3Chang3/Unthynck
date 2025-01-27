<script lang="js">
	import { onMount } from 'svelte';
	import { Titles, IconLinks, GetFullDate } from '$lib/index.js';
	import { initDatabase, pushToContact } from '$lib/firebase.js';
	import Captcha from '$lib/components/layout/Captcha.svelte';


	let inquiry = $state({
		name: "",
		email: "",
		type: "",
		businessMessage: ""
	});

	let submitted = $state(0); //0, unsubmitted, 1, loading, 2, submitted successfully, -1, error submitting

	let submitNotDisabled = $state(false);

	const inquiryTypes = [ 'Cameo', 'Performance', 'Personal Message'];
	const confusionPrompt = inquiryTypes[2]; //If they select personal message, I don't want the message they send to be the personal message, but rather the context

	async function submitForm(e) {
		e.preventDefault();

		submitted = 1;

		try {
			const res = await pushToContact({ ...inquiry, date: GetFullDate() });

			if (res.statusCode === 200) {
				submitted = 2;
				console.log(res.message);
			} else {
				console.log("Unknown response with no error: ", res.statusCode, res.message);
			}
		} catch (err) {
			// Handle errors from pushToContact
			if (err.statusCode === 500) {
				submitted = -1;
				console.log("Error submitting to server", err.message);
			} else {
				console.log('Unexpected error:', err);
			}
		}
	}

	onMount(() => {
		document.title = Titles.contactUs

		initDatabase();
	});
</script>

<section class="contact-us">
	{#if submitted === 2}
		<div class="submitted-prompt">
			<h4 style="color: green">Thanks! We'll get back to you as soon as we can.</h4>
		</div>
	{:else if submitted === 1}
		<div class="loading-model">
			<img src={IconLinks.loader} alt="Loading Icon"/>
		</div>
	{:else}
		<div class="contact-prompt">
			<h2>Want Unthynck to play for you? We're open for commission!</h2>
		</div>
		<div class="contact-info">
			<form onsubmit={submitForm}>

				<div class="user-contact">
					<label for="name">Name</label>
					<input
						type="text"
						id="name"
						bind:value={inquiry.name}
						required
						class="name user-input"
						placeholder="John Doe"
					/>

					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						bind:value={inquiry.email}
						required
						class="email user-input"
						placeholder="example@unthynck.band"
					/>
				</div>

				<br/>

				<div class="user-dropdown">
					<label for="inquiryType">Type of Inquiry</label>
					<select
						id="inquiryType"
						bind:value={inquiry.type}
						required
						class="inquiry-type"
					>
						<option value="" disabled class="inquiry-type-input">Select Inquiry</option>	<!-- type of thing they want us to do -->
						{#each inquiryTypes as type}
							<option value={type} class="user-option">{type}</option>
						{/each}
					</select>
						<div class="confusion-prompt"
								 style:opacity={inquiry.type === confusionPrompt ? 1 : 0}

						>
							<p class="confusion-prompt" style="color: red">Please do not put your personal message in the box below</p>
							<p class="confusion-prompt">We will contact you later for the personal message if your inquiry is accepted</p>
						</div>
				</div>

				<br/>

				<div class="user-message">
					<label for="business-message">Tell us About Your Inquiry</label>
					<textarea
						id="business-message"
						bind:value={inquiry.businessMessage}
						required
						rows="8"
						class="business-message-input"
						placeholder="I want to hear you guys for my 18th birthday! Here's my address and the time I'm currently thinking about"
					></textarea>
				</div>

				<div class="captcha">
					<Captcha bind:isHuman={submitNotDisabled} />
				</div>

				<div class="submit-button-container">
					<button type="submit" class="submit-button {submitNotDisabled ? '' : 'disabled'}" disabled={!submitNotDisabled}>
						Send Inquiry
					</button>
				</div>
			</form>

		</div>
	{/if}
</section>

<style lang="css">
		.contact-us {
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100vw;
				height: fit-content;

				justify-content: center;
				align-items: center;

				font-family: "Comic Sans MS", sans-serif;
				color: var(--text-standard);

				gap: 3rem;
		}

		.contact-prompt {
				text-align: center;
				margin-top: 2rem;
				font-family: var(--font-standard);
				font-size: 2rem;
		}

		.loading-model {
				height: fit-content;
				width: fit-content;
				animation: rotate 1s infinite linear;
		}

		.loading-model img {
				height: 10vh;
				width: 10vh;
				object-fit: contain;
		}

		.contact-info, .submitted-prompt {
				position: relative;
				display: flex;
				flex-direction: column;
				width: 80vw;
				height: fit-content;

				padding: 2rem;

				justify-content: center;
				align-items: center;

				background-color: var(--primary-color);
				font-family: var(--font-standard);
				font-size: 1.8rem;

				margin-bottom: 2rem;
		}

		.user-contact {
				display: flex;
				flex-direction: column;
				width: 100%;
				height: fit-content;
		}

		.user-input {
				height: 2rem;
				font-size: 1.2rem;
				font-family: Roboto Light, sans-serif;
				margin-bottom: 1rem;
		}

		.user-dropdown, .user-message {
				display: flex;
				flex-direction: column;
				width: 100%;
				text-align: center;
				font-family: var(--font-standard);
		}

		.inquiry-type {
				font-size: 1.5rem;
				font-family: var(--font-standard);
		}

		.inquiry-type-input {
				font-family: Roboto Light, sans-serif;
				font-size: 1rem;
		}

		.user-option {
				font-family: var(--font-standard);
				font-size: 1rem;
		}

		.confusion-prompt {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				text-wrap: wrap;
				line-height: 1rem;
				font-size: 1.2rem;
				width: 100%;
		}

		.business-message-input {
				font-family: Roboto Light, sans-serif;
				font-size: 1.2rem;

		}

		.submit-button-container {
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100%;

        justify-content: center;

				margin-top: 1rem;

		}

    .submit-button {
        font-size: 1.2rem;
        color: var(--text-standard);
        background-color: var(--secondary-color);
        padding: 0.5rem 2rem 0.5rem 2rem;

        border-radius: 0;
				border: none;
				font-family: var(--font-standard);
				cursor: pointer;
    }

		.submit-button:active {
				transform: scale(0.95);
		}

		.disabled {
				background-color: #5d5d5d;
				cursor: not-allowed;
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