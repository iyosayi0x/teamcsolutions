<script lang="ts">
	import { slide } from 'svelte/transition';
	let activeIndex: number | null = 0;
	export let displayImage: string;
	export let items: { title: string; description: string }[];
	export let title: string;

	const toggleOrChangeActiveIndex = (index: number) => {
		if (activeIndex === index) {
			activeIndex = null;
		} else {
			activeIndex = index;
		}
	};
</script>

<section class="container">
	<section style="flex:.5">
		<div class="imageList__title">{title}</div>
		<!-- --- services ---  -->
		<div class="imageList__main">
			{#each items as { title, description }, index}
				<article class="imageList">
					<div
						class="imageList-title"
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
							class="imageList-description"
							transition:slide={{ delay: 250, duration: 300, axis: 'y' }}
						>
							{description}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<section class="imageList__image__container" style="flex:.5">
		<img src={displayImage} alt="office place" />
	</section>
</section>

<style lang="scss">
	@use '../css_lib' as *;

	.container {
		margin-top: 8rem;
		@include useBlockPadding(2.5rem);
		@include flexbox(space-between, center);

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
			gap: 2.5rem;
			margin-top: 2rem;
		}
	}

	.imageList {
		padding-left: 2.5rem;
		&-description {
			color: $grey-color-1;
			margin-top: 0.8rem;
			line-height: 1.7rem;
		}

		@media screen and (max-width: $tab-phone-breakpoint) {
			padding-left: 1.5rem;
		}
	}

	.imageList-title {
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

		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h5;
		}
	}

	.imageList__image__container {
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

	.imageList__main {
		margin-top: 3rem;
		& > article:not(:last-child) {
			margin-bottom: 2rem;
		}
	}

	.imageList__title {
		font-size: $text-h2;
		max-width: 50rem;
		font-weight: 500;
		margin-bottom: 3rem;

		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h4;
		}
	}
</style>
