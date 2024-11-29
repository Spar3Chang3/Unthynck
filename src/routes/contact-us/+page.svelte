<script lang="js">

	let inquiry = $state({
		name: "",
		email: "",
		type: "",
		businessMessage: "",
	});

	let submitted = $state(false);

	const inquiryTypes = [ 'Cameo', 'Performance', 'Personal Message'];
	const confusionPrompt = inquiryTypes[2]; //If they select personal message, I don't want the message they send to be the personal message, but rather the context

	const submitForm = (e) => {
		e.preventDefault();
		submitted = true;
		//Add this to firebase realtimeDB, will implement after prompting claude
	}

</script>

<section class="contact-us">
	{#if submitted}
		<div class="submitted-prompt">
			<h4 style="color: green">Thanks! We'll get back to you as soon as we can.</h4>
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

					{#if inquiry.type === confusionPrompt}
						<div class="confusion-prompt">
							<p class="confusion-prompt" style="color: red">Please do not put your personal message in the box below</p>
							<p class="confusion-prompt">We will contact you later for the personal message if your inquiry is accepted</p>
						</div>
					{/if}
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

				<div class="submit-button-container">
					<button type="submit" class="submit-button">
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
				min-height: 80vh;

				justify-content: center;
				align-items: center;

				font-family: "Comic Sans MS", sans-serif;
				color: var(--on-primary-color);

				gap: 5rem;
		}

		.contact-info, .submitted-prompt {
				position: relative;
				display: flex;
				flex-direction: column;
				width: fit-content;
				height: fit-content;

				padding: 8rem;

				justify-content: center;
				align-items: center;

				background-color: var(--primary-color);
				border: 0.1rem solid var(--secondary-color);
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
				font-size: 1rem;
				font-family: "Comic Sans MS", sans-serif;
		}

		.user-dropdown, .user-message {
				display: flex;
				flex-direction: column;
				width: 100%;
				text-align: center;
				font-family: "Comic Sans MS", sans-serif;
		}

		.inquiry-type {
				font-size: 1rem;
				font-family: "Comic Sans MS", sans-serif;
		}

		.inquiry-type-input {
				font-family: "Comic Sans MS", sans-serif;
				font-size: 1rem;
		}

		.user-option {
				font-family: "Comic Sans MS", sans-serif;
				font-size: 1rem;
		}

		.confusion-prompt {
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				word-wrap: break-word;

				font-size: 1.2rem;
				width: 100%;
		}

		.business-message-input {
				font-family: "Comic Sans MS", sans-serif;
				font-size: 1rem;

		}

		.submit-button-container {
				display: flex;
				width: 100%;

        justify-content: center;

				margin-top: 1rem;

		}

    .submit-button {
        font-size: 1.2rem;
        color: var(--on-secondary-color);
        background-color: var(--secondary-color);
        padding: 0.5rem;

        border-radius: 0;
        border: 0.1rem solid var(--on-primary-color);
				font-family: "Comic Sans MS", sans-serif;
    }

</style>