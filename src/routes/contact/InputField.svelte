<script lang="ts">
	export let label: string | undefined;
	export let fieldName: string | undefined;
	export let inputField: InputFieldProps = {};
	export let options: { value?: string; name?: string }[] = [];
	export let fieldType: 'default' | 'textarea' | 'phoneNumber' = 'default';
</script>

<div class="field">
	<label for={fieldName} class="field__label">{label}</label>
	<div class="field__input-wrapper" data-type={fieldType}>
		{#if fieldType === 'default'}
			<input type="text" name={fieldName} class="field__input" {...inputField} />
		{:else if fieldType === 'textarea'}
			<textarea {...inputField} class="field__textarea" />
		{:else if (fieldType = 'phoneNumber')}
			<input type="text" />
			<input type="number" {...inputField} />
		{/if}
	</div>
</div>

<style lang="scss">
	@use '../../css_lib' as *;

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

	.field__textarea {
		@extend .field__input;
		height: 10rem;
		resize: none;
	}

	.field__input-wrapper[data-type='phoneNumber'] {
		@include flexbox(flex-start, center);
		background: none;
		gap: 1rem;
		input:nth-child(1) {
			width: 5rem;
			@extend .field__input;
			background: #f6f6f6;
			border-radius: 0.5rem;
		}
		input:nth-child(2) {
			flex: 1;
			@extend .field__input;
			background: #f6f6f6;
			border-radius: 0.5rem;
		}
	}
</style>
