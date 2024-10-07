<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	export let label: string | undefined;
	export let fieldName: string | undefined;
	export let inputField: InputFieldProps = {};
	export let options: { value: string; name?: string }[] = [];
	export let onSelectOption: (args: string) => void = (args) => {};
	export let fieldType: 'default' | 'textarea' | 'phoneNumber' | 'dropdown' = 'default';
</script>

<svelte:head>
	<title>Contact Us | Team Consulting Solutions</title>

	<!-- Meta Tags for SEO -->
	<meta
		name="description"
		content="Get in touch with Team Consulting Solutions for expert AI, cybersecurity, and cloud consulting services. Contact us for more information or to request a consultation."
	/>
	<meta
		name="keywords"
		content="Contact, Team Consulting Solutions, AI consulting, Cybersecurity services, Cloud solutions, Technical consulting"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Team Consulting Solutions" />

	<!-- Open Graph Meta Tags for Social Sharing -->
	<meta property="og:title" content="Contact Team Consulting Solutions" />
	<meta
		property="og:description"
		content="Reach out to Team Consulting Solutions for technical solutions in AI, cybersecurity, and cloud services."
	/>
	<meta property="og:type" content="website" />
	<!-- <meta property="og:url" content="https://www.yourwebsite.com/contact" />
	<meta property="og:image" content="https://www.yourwebsite.com/images/contact-us-social.jpg" /> -->

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contact Team Consulting Solutions" />
	<meta
		name="twitter:description"
		content="Get in touch for AI, cybersecurity, and cloud consulting services."
	/>
	<!-- <meta name="twitter:image" content="https://www.yourwebsite.com/images/contact-us-twitter.jpg" /> -->

	<!-- Viewport Meta Tag for Mobile Responsiveness -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Favicon -->
	<!-- <link rel="icon" href="/favicon.ico" /> -->
</svelte:head>

<div class="field">
	<label for={fieldName} class="field__label">{label}</label>
	<div class="field__input-wrapper" data-type={fieldType}>
		<!-- ---- default text field ---  -->
		{#if fieldType === 'default'}
			<input type="text" name={fieldName} class="field__input" {...inputField} />
			<!-- ---- end of default text field ---  -->

			<!-- --- textarea field ---  -->
		{:else if fieldType === 'textarea'}
			<textarea {...inputField} class="field__textarea" />
			<!-- --- end of text areat field ---  -->

			<!-- ---- phone number field ---  -->
		{:else if fieldType === 'phoneNumber'}
			<div class="field__phoneNumber__codes">
				<span>
					<Icon icon="ri:arrow-drop-down-line" style="font-size:30px" inline={true} />
				</span>
				<input type="text" readonly={true} />
			</div>
			<input type="number" {...inputField} />
			<!-- ---- end of phone number field ---  -->

			<!-- --- drop down field ---  -->
		{:else if fieldType === 'dropdown'}
			<input
				type="text"
				readonly={true}
				{...inputField}
				class="field__input"
				placeholder={inputField.placeholder}
			/>
			<span>
				<Icon icon="ri:arrow-drop-down-line" style="font-size:30px" inline={true} />
			</span>

			<div class="options-container" tabindex="0" role="button" transition:fade>
				{#each options as option}
					<div
						class="option"
						role="button"
						tabindex="0"
						on:click={() => onSelectOption(option.value)}
						on:keypress={() => onSelectOption(option.value)}
					>
						{option.name || option.value}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '../../css_lib' as *;

	// field
	.field {
		width: 100%;
		input {
			font-family: $primary-font !important;
		}
	}

	.field__label {
		font-size: $primary-font;
		font-size: $text-small;
		line-height: 1.6rem;
		color: $grey-color-2;
	}

	.field__input-wrapper {
		background: #f6f6f6;
		border-radius: 0.5rem;
	}

	.field__input {
		border: none;
		background: none;
		width: 100%;
		outline: none;
		padding: 1rem;
	}

	// text area field
	.field__textarea {
		@extend .field__input;
		height: 12rem;
		resize: none;
	}

	// phone number field
	.field__input-wrapper[data-type='phoneNumber'] {
		@include flexbox(flex-start, center);
		background: none;
		gap: 1rem;

		& > input:last-child {
			flex: 1;
			@extend .field__input;
			background: #f6f6f6;
			border-radius: 0.5rem;
		}
	}

	.field__phoneNumber__codes {
		@include flexbox(space-between, center);
		background: #f6f6f6;
		border-radius: 0.5rem;
		padding: 0 0.5rem;

		input {
			@extend .field__input;
			width: 4rem;
		}

		span {
			transition: 0.4s;
			display: grid;
			place-items: center;
		}
	}

	.field__phoneNumber__codes:focus-within {
		span {
			transform: rotateZ(180deg);
		}
	}

	// drop down
	.options-container {
		position: absolute;
		left: 0;
		right: 0;
		min-height: 5rem;
		max-height: 15rem;
		overflow-y: auto;
		background: white;
		top: 110%;
		box-shadow: 1px 2px 15px #d8d8d8;
		border-radius: 0.5rem;
		transition: 0.4s;
		display: none;
		padding: 1rem;
		.option {
			font-size: $text-small;
			color: $grey-color-1;
			line-height: 2rem;
			cursor: pointer;
			transition: 0.4s;
			&:hover {
				color: $primary-color;
			}
		}
	}

	.field__input-wrapper[data-type='dropdown'] {
		@include flexbox(space-between, center);
		position: relative;
		span {
			transition: 0.4s;
		}
		&:focus-within {
			span {
				transform: rotateZ(180deg);
			}

			.options-container {
				display: block;
			}
		}
	}
</style>
