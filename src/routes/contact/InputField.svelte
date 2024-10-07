<script lang="ts">
	import Icon from '@iconify/svelte';

	export let label: string | undefined;
	export let fieldName: string | undefined;
	export let inputField: InputFieldProps = {};
	export let options: { value?: string; name?: string }[] = [];
	export let fieldType: 'default' | 'textarea' | 'phoneNumber' = 'default';
</script>

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
		{:else if (fieldType = 'phoneNumber')}
			<div class="field__phoneNumber__codes">
				<span>
					<Icon icon="ri:arrow-drop-down-line" style="font-size:30px" />
				</span>
				<input type="text" readonly={true} />
			</div>
			<input type="number" {...inputField} />
		{/if}
		<!-- ---- end of phone number field ---  -->
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
</style>
