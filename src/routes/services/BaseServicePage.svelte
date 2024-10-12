<script lang="ts">
	import Icon from '@iconify/svelte';
	import ServiceItem from './ServiceItem.svelte';
	import Banner from '../Banner.svelte';
	import ImageList from '../ImageList.svelte';

	export let bannerConfig: { mainText: string; description: string; image: string };
	export let features: { title: string; description: string; icon: string }[];
	export let benefitsConfig: { title: string };
	export let benefits: { title: string; description: string }[];
</script>

<Banner banner={bannerConfig} />

<div class="banner__outline">
	Do you have a project we can help with?
	<a href="/contact" class="banner__btn"
		>Contact Us <Icon icon="ri:arrow-right-line" inline={true} /></a
	>
</div>

<ImageList title={benefitsConfig.title} items={benefits} displayImage={bannerConfig.image} />

<section class="service">
	<div class="service__feature__title">
		<div>Our Comprehensive Features</div>
		<p>Discover the Power of Our Solutions, Tailored to Your Unique Needs</p>
	</div>

	<div class="service__items">
		{#each features as feature}
			<ServiceItem title={feature.title} description={feature.description} icon={feature.icon} />
		{/each}
	</div>

	<div class="service__button">
		<a href="/contact" class="primary-btn">Contact Us Now</a>
	</div>
</section>

<style lang="scss">
	@use '../../css_lib.scss' as *;

	.service__banner {
		height: 50rem;
		width: 100%;
		background: rgb(145, 173, 197);
		margin-top: -10rem;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.service {
		@include useBlockPadding(4rem);
	}

	.service__items {
		gap: 2rem;
		margin-top: 2rem;
		padding: 1rem;

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
		}
		@include flexbox(space-between, center);
	}

	.service__button {
		margin-top: 2rem;
		text-align: right;
	}

	.service__feature__title {
		margin: 2rem 0;
		text-align: center;
		div {
			font-size: $text-h3;
			font-weight: 500;
			line-height: 2.4rem;
		}
		p {
			color: $grey-color-1;
		}
	}

	.banner__outline {
		background: $primary-color;
		color: white;
		font-size: $text-h3;
		font-weight: 500;
		padding: 4rem 2rem;
		text-align: center;
		position: relative;

		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h6;
			padding: 3rem 1rem;
		}
	}

	.banner__btn {
		position: absolute;
		bottom: -1rem;
		text-decoration: none;
		color: white;
		background: darken($primary-color, 40%);
		font-size: $text-h6;
		padding: 0.5rem 2rem;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 0.2rem;
	}
</style>
