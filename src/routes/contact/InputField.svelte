<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
	import type { DetailedValue, CountryCode } from 'svelte-tel-input/types';

	export let label: string | undefined;
	export let fieldName: string | undefined;
	export let inputField: InputFieldProps = {};
	export let options: { value: string; name?: string }[] = [];
	export let fieldType: 'default' | 'textarea' | 'phoneNumber' | 'dropdown' = 'default';

	let selectedCountry: CountryCode | null = 'US';
	let value: string | null = '';
	let valid = true;
	let detailedValue: DetailedValue | null = null;

	const onSelectOption = (option: string) => {
		value = option;
		const pbutton = document.querySelector(
			`.placeholder-blur-${inputField.name}`
		) as HTMLDivElement;
		pbutton.focus();

		console.log(pbutton);
	};
</script>

<div class="field">
	<label for={fieldName} class="field__label">{label}</label>
	<div class="field__input-wrapper" data-type={fieldType}>
		<!-- ---- default text field ---  -->
		{#if fieldType === 'default'}
			<input type="text" name={fieldName} class="field__input" {...inputField} required={true} />
			<!-- ---- end of default text field ---  -->

			<!-- --- textarea field ---  -->
		{:else if fieldType === 'textarea'}
			<textarea {...inputField} class="field__textarea" required={true} />
			<!-- --- end of text areat field ---  -->

			<!-- ---- phone number field ---  -->
		{:else if fieldType === 'phoneNumber'}
			<select
				class="country-select {!valid ? 'invalid' : ''}"
				aria-label="Default select example"
				name="Country"
				bind:value={selectedCountry}
				required={true}
			>
				<option value={null} hidden={selectedCountry !== null}>Please select</option>
				{#each normalizedCountries as currentCountry (currentCountry.id)}
					<option
						value={currentCountry.iso2}
						selected={currentCountry.iso2 === selectedCountry}
						aria-selected={currentCountry.iso2 === selectedCountry}
					>
						{currentCountry.iso2} (+{currentCountry.dialCode})
					</option>
				{/each}
			</select>
			<TelInput
				bind:country={selectedCountry}
				bind:value
				bind:valid
				bind:detailedValue
				class="-field__phone"
				required={true}
				name={inputField.name}
			/>

			<!-- --- drop down field ---  -->
		{:else if fieldType === 'dropdown'}
			<input
				{...inputField}
				type="text"
				readonly={true}
				class="field__input"
				placeholder={inputField.placeholder}
				bind:value
				required={true}
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

<div class="placeholder-blur-{inputField.name}" tabindex="0" role="button"></div>

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

	.field__input-wrapper[data-type='phoneNumber'] {
		background: none;
		gap: 1rem;
		@include flexbox(space-between, center);
		select {
			@extend .field__input;
			border-radius: 0.5rem;
			background: #f6f6f6;
			width: 7rem;
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
