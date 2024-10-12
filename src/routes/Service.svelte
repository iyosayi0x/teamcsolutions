<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	export let service: IServiceConfig;
	export let reversed = false;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scroller = document.body;

		ScrollTrigger.defaults({
			scroller: scroller,
			pinType: 'transform'
		});
	});
</script>

<div class="service" data-reversed={reversed}>
	<!-- --- service image ---  -->
	<section class="service__image__wrapper">
		{#if service.image}
			<img src={service.image} alt={service.name} class="service__image" />
		{/if}
	</section>

	<section>
		<!-- --- main service ---  -->
		<div>
			<div class="service__name">{service.name}</div>
			<div class="service__tag-line">
				<slot class="service__tag-line__text" />
			</div>
			<p class="service__description">{service.description}</p>
		</div>

		<!-- --- action button ---  -->
		<div class="service__action">
			<a href={service.link} class="primary-btn">Learn More</a>
		</div>
	</section>
</div>

<style lang="scss">
	@use '../css_lib' as *;

	.service {
		@include flexbox(space-between, center);
		@include useBlockPadding(2.5rem);
		& > section {
			flex: 0.5;
		}

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
		}
	}

	.service__image {
		width: 80%;
		height: 100%;
		@media screen and (max-width: $tab-phone-breakpoint) {
			width: 100%;
		}
	}

	.service[data-reversed='true'] {
		flex-direction: row-reverse;

		.service__image__wrapper {
			text-align: right;
		}

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
		}
	}

	.service__name {
		font-size: $text-small;
		color: $grey-color-2;
	}

	.service__description {
		font-size: $text-small;
		line-height: 1.5rem;
		color: $grey-color-1;
	}

	.service__action {
		margin-top: 4rem;
	}

	.service__tag-line {
		margin: 1rem 0;
		font-size: $text-h4;
		font-weight: 500;
	}
</style>
