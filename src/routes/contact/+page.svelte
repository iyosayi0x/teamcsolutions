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
		<div></div>

		<form>
			<div>
				<InputField />
				<InputField />
			</div>

			<div>
				<InputField />
			</div>
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
	}

	.contact__banner {
		position: relative;
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
		flex: 0.4;
		@include useBlockPadding(2.5rem);
	}
</style>
