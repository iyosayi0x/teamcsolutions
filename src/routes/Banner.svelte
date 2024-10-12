<script lang="ts">
	import Icon from '@iconify/svelte';
	export let banner: {
		image: string;
		mainText: string;
		description: string;
	};
</script>

<section class="banner__container">
	<div class="banner__image">
		<img src={banner.image} alt="banner display" />
	</div>
	<div class="banner__cta">
		<h1 class="banner__cta__text">{banner.mainText}</h1>
		<p class="banner__cta__desc">{banner.description}</p>
		<a class="white-btn" href="/contact"
			>Contact Us <Icon icon="ri:arrow-right-line" inline={true} /></a
		>
	</div>
</section>

<style lang="scss">
	@use '../css_lib' as *;
	.banner__container {
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transition: background-image 1.5s ease-in-out; // Smooth transition for the background image
		padding: 10rem;
		height: 40rem;
		position: relative;
		@include flexbox(flex-start, center);

		@media screen and (max-width: $tab-phone-breakpoint) {
			padding: 2rem 1rem;
			height: 30rem;
		}
	}

	.banner__cta {
		@include flexbox(flex-start, flex-start);

		& {
			width: 80%;
			max-width: 100rem;
			flex-direction: column;
			gap: 2rem;
			z-index: 1;
			@media screen and (max-width: $tab-phone-breakpoint) {
				width: 100%;
			}
		}
	}

	.banner__cta__text {
		font-size: calc($text-h1 * 1.4);
		color: white;
		transition: opacity 1s ease; // Smooth transition for text opacity
		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h2;
		}
	}

	.banner__cta__desc {
		font-size: $text-h4;
		color: white;
		transition: opacity 1s ease; // Smooth transition for description opacity
		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h6;
		}
	}

	.banner__image {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&:before {
			content: '';
			background: linear-gradient(to right, #050505, transparent);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
