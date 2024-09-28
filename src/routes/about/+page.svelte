<script lang="ts">
	import { slide } from 'svelte/transition';
	import officeImage from '$lib/images/office.jpg';
	import office2Image from '$lib/images/office-2.jpg';
	import solutions from '$lib/data/about-solutions.json';
	import faqs from '$lib/data/faq.json';
	import config from '$lib/config';
	import Faq from './Faq.svelte';


	let activeIndex: number | null = 1;
	const toggleOrChangeActiveIndex = (index: number) => {
		if (activeIndex === index) {
			activeIndex = null;
		} else {
			activeIndex = index;
		}
	};
</script>

<svelte:head>
	<title>About Team Consulting solutions</title>
</svelte:head>

<section class="about__cta">
	<h1>Explore Our Cloud and Digital Solutions</h1>
	<p>
		Ready to transform your business? Our cloud and digital solutions offer unparalleled value.
		Experience the difference firsthand.
	</p>
	<a href="mailto:info@{config.contact.email}" class="primary-btn">Get A Consultation</a>
</section>

<section class="about__section">
	<section style="flex:.5">
		<div class="about__title">Empowering Businesses with Strategic Road Maps</div>
		<!-- --- services ---  -->
		<div class="about__services__list">
			{#each solutions as { title, description, index }}
				<article class="about__services__service">
					<div
						class="about__services__service-title"
						tabindex="0"
						role="button"
						on:click={() => toggleOrChangeActiveIndex(index)}
						on:keypress={() => toggleOrChangeActiveIndex(index)}
						data-active={activeIndex === index}
					>
						{title}
					</div>

					{#if activeIndex === index}
						<div
							class="about__services__service-description"
							transition:slide={{ delay: 250, duration: 300, axis: 'y' }}
						>
							{description}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<section class="about__services__image-container" style="flex:.5">
		<img src={officeImage} alt="office place" />
	</section>
</section>

<section class="about__section" data-flex="no">
	<div class="about__title">
		Transforming Your Business with Our Cloud and Cybersecurity Solutions.
	</div>

	<div class="about__section" data-padding="no">
		<section class="about__why__image-container">
			<img src={office2Image} alt="office place vertical" />
		</section>

		<section class="about__why__article">
			<div>
				<div class="about__why__article__title">Your Growth, Our Passion.</div>
				<div class="about__why__article__description">
					Together, we unlock the full potential of your business. As a true partner, <b
						>Team Consulting Solutions</b
					> is committed to driving your success.
				</div>
			</div>

			<div>
				<div class="about__why__article__title">Innovating for a Better Tomorrow.</div>
				<div class="about__why__article__description">
					Partner with <b>Team Consulting Solutions</b> to embrace the future of technology and transform
					your business. Our innovative solutions are designed to propel you forward.
				</div>
			</div>

			<div>
				<div class="about__why__article__title">A Foundation Of Trust.</div>
				<div class="about__why__article__description">
					Built on a foundation of trust, our partnership with <b>Team Consulting Solutions</b> will
					help you achieve your goals. Count on us to deliver.
				</div>
			</div>
			<div>
				<a href="/services" class="primary-btn">View All Our Services</a>
			</div>
		</section>
	</div>
</section>

<section class="about__section about__faq" data-flex="no" id="faq">
	<div class="about__title">Frequently Asked Questions</div>
	{#each faqs as faq}
		<Faq {faq} />
	{/each}
</section>

<section class="about__contact" id="contact">
	<div>Unlock Your Business Potential with Cloud Solutions”</div>
</section>

<style lang="scss">
	@use '../../css_lib' as *;

	.about__cta {
		max-width: 50rem;
		margin: 2rem auto;
		text-align: center;
		@include flexbox(center, center);
		flex-direction: column;
		gap: 2rem;
		h1 {
			font-size: calc($text-h1 + 1rem);
			font-weight: 500 !important;
		}

		p {
			font-size: $text-h4;
		}
	}

	.about__title {
		font-size: xx-large;
		max-width: 50rem;
		font-weight: 500;
		margin-bottom: 3rem;
	}

	.about__section {
		margin-top: 8rem;
		padding: 0 $page-block-padding;
		@include flexbox(space-between, center);
	}

	.about__section[data-flex='no'] {
		display: block;
	}

	.about__section[data-padding='no'] {
		padding: 0 0;
		margin-top: 0;
	}

	.about__services__list {
		margin-top: 3rem;
		& > article:not(:last-child) {
			margin-bottom: 2rem;
		}
	}

	.about__services__service {
		padding-left: 3rem;
		&-description {
			color: $grey-color-1;
			margin-top: 0.8rem;
			line-height: 1.7rem;
		}
	}

	.about__services__service-title {
		font-size: $text-h3;
		font-weight: 400;
		cursor: pointer;
		transition: 0.4s;
		&:hover {
			color: $primary-color;
		}
		&:before {
			content: '+';
			color: $primary-color;
			padding-right: 1rem;
		}

		&[data-active='true'] {
			&:before {
				content: '-';
			}
		}
	}

	.about__services__image-container {
		height: 28rem;
		background: $grey-color-1;
		border-radius: 0.5rem;
		max-width: 40rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: inherit;
		}
	}

	.about__contact {
		background: $primary-color;
		padding: 2.5rem $page-block-padding;
		margin-top: 4rem;
		text-align: center;
		color: white;
	}

	.about__why__image-container {
		height: 50rem;
		background: $grey-color-1;
		flex: 0.46;
		border-radius: 0.5rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: inherit;
		}
	}

	.about__why__article {
		flex: 0.4;
		& > div:not(:last-child) {
			margin-bottom: 4rem;
		}
	}

	.about__why__article__title {
		font-size: $text-h3;
		font-weight: 400;
		margin-bottom: 1rem;
	}

	.about__why__article__description {
		line-height: 2rem;
	}

	.about__faq {
		padding: 2rem $page-block-padding;
	}
</style>
