<script lang="ts">
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';

	let CIRCLE_RADIUS = 200;
	let CIRCLE_ITEM_RADIUS = 35;
	let centerText = ['Cloud Deployment', 'ML and AI', 'Cyber Security'];
	let activeCenterText = 0;

	const iconDataSet = [
		{
			icon: 'simple-icons:cyberdefenders'
		},
		{
			icon: 'material-symbols:cloud'
		},
		{
			icon: 'mdi:robot'
		}
	];

	let angles: number[] = [];

	const updateAngles = () => {
		angles = angles.map((angle) => {
			const newAngle = angle + 0.002;
			return newAngle % (2 * Math.PI);
		});
		requestAnimationFrame(updateAngles);
	};

	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		angles = Array.from({ length: 3 }).map((_, index) => (index / 3) * 2 * Math.PI);
		requestAnimationFrame(updateAngles);
		interval = setInterval(() => {
			activeCenterText = activeCenterText >= centerText.length - 1 ? 0 : activeCenterText + 1;
		}, 2000);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});

	// Calculate positions based on angles
	$: positions = angles.map((angle) => {
		const x = CIRCLE_RADIUS + CIRCLE_RADIUS * Math.cos(angle) - CIRCLE_ITEM_RADIUS;
		const y = CIRCLE_RADIUS + CIRCLE_RADIUS * Math.sin(angle) - CIRCLE_ITEM_RADIUS;
		return { x, y };
	});
</script>

{#if $page.url.pathname != '/contact'}
	<div class="footerContactUs">
		<section class="footerText">
			<small>Ready to start?</small>
			<p>
				We look forward to working with you! Team C Solutions offers tailored cloud, cyber security,
				and AI solutions to help your business thrive in the digital world.
			</p>
			<div>
				<a href="/contact" class="secondary-btn"
					>Contact Us <Icon icon="ri:arrow-right-line" inline={true} /></a
				>
			</div>
		</section>

		<section class="footerDisplay">
			<!-- ---  carddecor ---  -->
			<div class="-footerDisplay-decoration" />

			<!-- --- circles ---  -->
			<div
				class="footerDisplay__circle__main"
				style="width:{CIRCLE_RADIUS * 2}px;height:{CIRCLE_RADIUS * 2}px"
			>
				{#if positions.length > 0}
					{#each iconDataSet as icon, index (index)}
						<div
							class="footerDisplay__item"
							style="left:{positions[index].x}px;top:{positions[index]
								.y}px;width:{CIRCLE_ITEM_RADIUS * 2}px;height:{CIRCLE_ITEM_RADIUS * 2}px"
						>
							<Icon icon={icon.icon} />
						</div>
					{/each}
				{/if}

				<!-- --- center text ---  -->
				{#each centerText as text, index}
					{#if index === activeCenterText}
						<div class="footerDisplay__centerText-container">
							<p transition:blur>{text}</p>
						</div>
					{/if}
				{/each}
			</div>
		</section>
	</div>
{/if}

<style lang="scss">
	@use '../css_lib' as *;

	.footerContactUs {
		@include flexbox(space-between, center);
		padding: 3rem 5rem;
		background: linear-gradient(135deg, darken(#2176ff, 20%), darken(#2176ff, 70%));
		width: 95%;
		margin: 3rem auto;
		border-radius: 1rem;
		position: relative;
		overflow: hidden;

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
			padding: 2.5rem 1rem;
		}
	}

	.footerText {
		flex: 0.6;
		small {
			font-size: $text-small;
			color: $secondary-color;
		}
		p {
			font-size: $text-h3;
			color: white;
			margin: 1rem 0;
			line-height: 2.7rem;
			font-weight: 500;

			@media screen and (max-width: $tab-phone-breakpoint) {
				font-size: $text-h6;
				line-height: 1.6rem;
			}
		}

		div {
			margin-top: 3rem;
		}
	}

	.footerDisplay {
		flex: 0.4;
		position: relative;

		@media screen and (max-width: $tab-phone-breakpoint) {
			display: none;
		}
	}

	.-footerDisplay-decoration {
		width: 50rem;
		height: 50rem;
		border-radius: 50%;
		position: absolute;
		border: 1px solid #c7c7c763;
		right: -10rem;
		top: -10rem;

		@media screen and (max-width: $tab-phone-breakpoint) {
			width: 20rem;
			height: 20rem;
			right: 0;
			top: 0;
		}
	}

	.footerDisplay__circle__main {
		border: 1px solid #bfbfbf;
		border-radius: 50%;
		margin: 0 auto;
		position: relative;
		color: white;
	}

	.footerDisplay__item {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: white;
		position: absolute;
		transform-origin: center;
		animation: rotate 4s linear infinite;
		transition: transform 0.1s linear;
		color: black;
		z-index: 1;
		&::before,
		&::after {
			content: '';
			width: 5rem;
			height: 5rem;
			position: absolute;
			border-radius: 50%;
			z-index: -1;
			background: linear-gradient(
				90deg,
				#003f5b,
				#2b4b7d,
				#5f5195,
				#98509d,
				#cc4c91,
				#f25375,
				#ff6f4e,
				#ff9913
			);
		}

		&::after {
			background: white;
			width: 4.5rem;
			height: 4.5rem;
		}
	}

	.footerDisplay__centerText-container {
		position: relative;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		font-weight: 500;
	}
</style>
