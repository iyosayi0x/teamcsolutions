<script lang="ts">
	import config from '$lib/config';
	import Icon from '@iconify/svelte';
	import manImg from '$lib/images/pexels-italo-melo-881954-2379004.jpg';
	import InputField from './InputField.svelte';

	let isLoading = false;
	let showSuccessText = false;

	const roleOptions = [
		'IT Manager/Director',
		'Chief Technology Officer (CTO)',
		'Project Manager',
		'Data Scientist',
		'AI Specialist/Engineer',
		'Cybersecurity Analyst',
		'Cloud Architect',
		'Software Developer/Engineer',
		'Business Owner/CEO',
		'Systems Administrator',
		'Consultant',
		'HR/Recruitment',
		'Vendor/Partner',
		'Research & Development',
		'Procurement Officer',
		'Compliance/Regulation Officer',
		'Entrepreneur/Startup Founder',
		'Student/Intern'
	];

	const handleFormSubmit = async (e: Event) => {
		e.preventDefault();
		if (isLoading || showSuccessText) return;

		const contactForm = document.querySelector('#contactForm') as HTMLFormElement;
		const formData = new FormData(contactForm);
		console.log(formData);

		try {
			isLoading = true;
			await fetch(contactForm.action, {
				method: contactForm.method,
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});
		} catch (err) {
			console.log(err);
		} finally {
			isLoading = false;
			showSuccessText = true;
			setTimeout(() => {
				showSuccessText = false;
			}, 10000);
		}
	};
</script>

<svelte:head>
	<title>Contact Us | Team Consulting Solutions</title>
</svelte:head>

<div class="contact">
	<section class="contact__banner">
		<img src={manImg} alt="contact display banner" class="contact__banner__image" />
		<div class="contact__banner__overlay" />
		<div class="contact__banner__info">
			<div class="contact__banner__header">Contact Our Experts</div>
			<p class="contact__banner__desc">
				Leverage the power of AI to drive innovation, enhance security, and optimize your
				operations. Our expert team provides tailored solutions to help you achieve your business
				goals. From data-driven insights to robust cybersecurity measures, we're here to support
				your success.
			</p>
		</div>
	</section>

	<section class="contact__form-container">
		<div class="contact__form-wrapper">
			<div class="contact__cta">
				<h1 class="contact__cta__title">Contact Us</h1>
				<p class="contact__cta__description">
					Have a question or want to book a consultation? We're here to help! Use the form below to
					ask about our services or schedule a consultation. We'll get back to you promptly.
				</p>
			</div>

			<div class="contact__alt">
				<div class="contact__alt__contact">
					<Icon icon="ic:outline-email" style="color:inherit; font-size:inherit" inline={true} />
					<a href="mailto:{config.contact.email}">{config.contact.email}</a>
				</div>

				<div class="contact__alt__contact">
					<Icon
						icon="mingcute:location-fill"
						style="color:inherit; font-size:inherit"
						inline={true}
					/>
					<a href={config.location.map}>{config.location.address}</a>
				</div>
			</div>

			<form
				class="contact__form"
				method="POST"
				on:submit={handleFormSubmit}
				id="contactForm"
				action="https://formspree.io/f/myzyyzla"
			>
				<!-- --- main form ---  -->
				<section class="contact__form-main">
					<div class="contact__form__field__wrapper" data-type="dual">
						<InputField
							fieldName="contact__firstName"
							label="First Name"
							inputField={{ placeholder: 'Enter your first name', name: 'fname' }}
						/>
						<InputField
							fieldName="contact__lastName"
							label="Last Name"
							inputField={{ placeholder: 'Enter your last name', name: 'lname' }}
						/>
					</div>

					<div class="contact__form__field__wrapper">
						<InputField
							fieldName="contact__email"
							label="Email"
							inputField={{ placeholder: 'Enter your email', type: 'email', name: 'email' }}
						/>
					</div>

					<div class="contact__form__field__wrapper">
						<InputField
							fieldName="contact__firstName"
							label="Phone Number"
							fieldType="phoneNumber"
							inputField={{ placeholder: 'Enter your phone number', name: 'phone' }}
						/>
					</div>

					<div class="contact__form__field__wrapper">
						<InputField
							fieldName="contact__role"
							label="Role"
							options={roleOptions.map((option) => ({ value: option }))}
							fieldType="dropdown"
							inputField={{ placeholder: 'Select an option', name: 'role' }}
						/>
					</div>

					<div class="contact__form__field__wrapper">
						<InputField
							fieldName="contact__message__content"
							label="Message"
							fieldType="textarea"
							inputField={{ placeholder: 'Enter your message', name: 'message' }}
						/>
					</div>
				</section>

				<!-- ---- action button ---  -->
				<section class="contact__form__btn-container">
					<button class={isLoading ? 'inactive-btn' : 'primary-btn'}>
						{#if isLoading}
							<div class="loading-icon">
								<Icon icon="gg:spinner-two" inline={true} />
							</div>
						{:else if showSuccessText}
							Form Submitted <Icon icon="gg:check-o" inline={true} />
						{:else}
							Submit
						{/if}
					</button>
				</section>
			</form>
		</div>
	</section>
</div>

<style lang="scss">
	@use '../../css_lib' as *;
	.contact {
		@include flexbox(space-between, center);
		section {
			align-self: stretch;
		}

		@media screen and (max-width: $tab-phone-breakpoint) {
			display: block;
		}
	}

	// --- main sections ---
	.contact__banner {
		position: relative;
		flex: 0.4;
		@media screen and (max-width: $tab-phone-breakpoint) {
			display: none;
		}
	}

	.contact__form-container {
		flex: 0.65;
	}

	// ---- contact form ---
	.contact__cta__title {
		font-size: $text-h1;
	}

	.contact__cta__description {
		font-size: $text-small;
		color: $grey-color-1;
		line-height: 1.4rem;
	}

	.contact__banner__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.contact__banner__overlay {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%);
	}

	.contact__form-wrapper {
		@include useBlockPadding(1rem);
	}

	.contact__form-main {
		margin: 2rem 0 0 0;
		& > div:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	.contact__form {
		@include flexbox(space-between, center, column);
		gap: 2rem;
	}

	.contact__form__field__wrapper[data-type='dual'] {
		@include flexbox(space-between, center);
		gap: 1rem;
	}

	.contact__form__btn-container {
		button {
			width: 100%;
		}
	}

	// --- contact alt ---
	.contact__alt {
		margin-top: 1.4rem;
		padding-left: 2rem;
		border-left: 2px solid $primary-color;
		& > div:not(:last-child) {
			margin-bottom: 0.5rem;
		}
	}

	.contact__alt__contact {
		color: $primary-color;
		font-size: $text-small;
		a {
			text-decoration: none;
			color: inherit;
			margin-left: 0.5rem;
		}
	}

	// --- banner ---
	.contact__banner__info {
		position: absolute;
		bottom: 3rem;
		left: 3rem;
		color: white;
		z-index: 1;
	}

	.contact__banner__header {
		font-size: $text-h2;
		font-weight: 500;
		line-height: 2.5rem;
	}
	.contact__banner__desc {
		font-size: $text-small;
		line-height: 1.7rem;
		color: rgb(227, 224, 224);
	}

	.loading-icon {
		font-size: 20px;
		animation: rotate 0.3s linear infinite;
		width: fit-content;
		height: fit-content;
		margin: 0 auto;
	}

	@keyframes rotate {
		from {
			transform: rotatez(0deg);
		}
		to {
			transform: rotatez(360deg);
		}
	}
</style>
