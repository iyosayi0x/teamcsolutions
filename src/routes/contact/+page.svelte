<script lang="ts">
	import manImg from '$lib/images/pexels-italo-melo-881954-2379004.jpg';
	import InputField from './InputField.svelte';
</script>

<div class="contact">
	<section class="contact__banner">
		<img src={manImg} alt="contact display banner" class="contact__banner__image" />
		<div class="contact__banner__overlay" />
	</section>

	<section class="contact__form-container">
		<div class="contact__cta">
			<h1 class="contact__cta__title">Contact Us</h1>
			<p class="contact__cta__description">
				Have a question or want to book a consultation? We're here to help! Use the form below to
				ask about our services or schedule a consultation. We'll get back to you promptly.
			</p>
		</div>

		<form class="contact__form">
			<!-- --- main form ---  -->
			<section class="contact__form-main">
				<div class="contact__form__field__wrapper" data-type="dual">
					<InputField fieldName="contact__firstName" label="First Name" />
					<InputField fieldName="contact__lastName" label="Last Name" />
				</div>

				<div class="contact__form__field__wrapper">
					<InputField fieldName="contact__email" label="Email" />
				</div>

				<div class="contact__form__field__wrapper" data-type="dual">
					<InputField fieldName="first_name" label="First Name" />
					<InputField fieldName="contact__firstName" label="Last Name" />
				</div>

				<div class="contact__form__field__wrapper">
					<InputField fieldName="contact__role" label="Role" />
				</div>

				<div class="contact__form__field__wrapper">
					<InputField fieldName="contact__message__content" label="Message" />
				</div>
			</section>

			<!-- ---- action button ---  -->
			<section class="contact__form__btn-container">
				<button class="primary-btn">Send</button>
			</section>
		</form>
	</section>
</div>

<style lang="scss">
	@use '../../css_lib' as *;
	.contact {
		@include flexbox(space-between, center);
		section {
			flex: 0.5;
			align-self: stretch;
		}

		@media screen and (max-width: $tab-phone-breakpoint) {
			display: block;
		}
	}

	.contact__cta__title {
		font-size: $text-h1;
	}

	.contact__cta__description {
		font-size: $text-small;
		color: $grey-color-1;
		line-height: 1.4rem;
	}

	.contact__banner {
		position: relative;
		@media screen and (max-width: $tab-phone-breakpoint) {
			display: none;
		}
	}
	.contact__banner__image {
		width: 100%;
		height: 100%;
		height: 50rem;
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

	.contact__form-container {
		@include useBlockPadding(4rem);
		flex: 0.4;
		box-sizing: border-box;
	}

	.contact__form-main {
		margin: 2rem 0 0 0;
		& > div:not(:last-child) {
			margin-bottom: 1rem;
		}
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
</style>
