<script lang="ts">
	export let label: string | undefined;
	export let fieldName: string | undefined;
</script>

<div class="field">
	<label for={fieldName} class="field__label">{label}</label>
	<div class="field__input-wrapper">
		<input type="text" name={fieldName} class="field__input" />
	</div>
</div>

<style lang="scss">
	@use '../../css_lib' as *;

	.field {
		width: 100%;
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
</style>
