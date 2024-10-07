<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { slide, fade } from 'svelte/transition';
	import serviceData from '$lib/data/services.json';

	// functions
	let navOpen = false;
	const toggleNav = () => {
		navOpen = !navOpen;
	};

	// watch page change and close nav
	page.subscribe((args) => {
		navOpen = false;
	});
</script>

<div class="mobile-only">
	<div
		tabindex="0"
		role="button"
		class="toggle-button"
		on:click={toggleNav}
		on:keypress={toggleNav}
	>
		{#if navOpen}
			<div transition:slide><Icon icon="ic:twotone-close" style="font-size:24px" /></div>
		{:else}
			<div transition:slide><Icon icon="ri:menu-3-fill" style="font-size:24px" /></div>
		{/if}
	</div>

	{#if navOpen}
		<div class="navigation" transition:slide>
			<ul class="navigation__list">
				<!-- --- home default ---  -->
				<li data-active={$page.url.pathname === '/'}><a href="/">Home</a></li>

				<li data-active={$page.url.pathname === '/services'}>
					<a href="/services">Services</a>

					<!-- --- services ---  -->
					<div class="services">
						{#each serviceData as service}
							<div>
								<a href={service.link}>
									<div class="service__title">{service.title}</div>
									<div class="service__description">{service.description}</div>
								</a>
							</div>
						{/each}
					</div>
					<!-- --- end of services ---  -->
				</li>

				<!-- -- about ---  -->
				<li data-active={$page.url.pathname === '/about'}><a href="/about">About</a></li>
			</ul>

			<div class="contact-button-wrapper">
				<a href="/contact" class="secondary-btn">Contact Us</a>
			</div>
		</div>

		<div class="navigation__overlay" transition:fade />
	{/if}
</div>

<style lang="scss">
	@use '../css_lib' as *;

	.toggle-button {
		cursor: pointer;
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background-color: $primary-color;
		color: white;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: darken($primary-color, 10%);
		}
	}

	.contact-button-wrapper {
		border-top: 1px solid $grey-color-1;
		padding-top: 2rem;
	}

	.navigation {
		position: absolute;
		background: white;
		right: 1rem;
		top: 100%;
		left: 0;
		right: 0;
		padding: 1rem 1rem 2rem 1rem;
		transition:
			box-shadow 0.3s ease,
			transform 0.3s ease; // Smooth transitions
		z-index: 5;
		border-top: 2px solid rgba($grey-color-1, 0.4);
	}

	.navigation__overlay {
		position: absolute;
		top: 5rem;
		left: 0;
		right: 0;
		height: 100vh;
		background: rgba(black, 0.4);
		z-index: 3;
	}

	.navigation__list {
		list-style: none;
		padding: 0;
		margin: 0;

		& > li {
			// margin-bottom: 1rem;
			transition: transform 0.2s ease;
		}

		li {
			padding: 0.5rem 0;
			font-size: $text-small;
			color: black;
			transition: color 0.2s ease;

			&:hover {
				color: $primary-color; // Hover effect for links
				transform: translateX(5px); // Slide effect on hover
			}
		}

		li a {
			color: inherit;
			text-decoration: none;
			transition: color 0.2s ease;
		}

		li[data-active='true'] {
			color: $primary-color;
			font-weight: bold;
		}
	}

	.services {
		padding: 0 0 0 2rem;
		margin: 1rem 0 0 0;
		border-left: 2px solid #e3e3e3;
		& > div:not(:last-child) {
			padding-bottom: 1rem;
		}
	}

	.service__title {
		font-size: calc($text-small - 0.1rem);
		color: black;
		line-height: 1.6rem;
		font-weight: 400;
	}

	.service__description {
		font-size: calc($text-small - 0.2rem);
		color: $grey-color-1;
		font-weight: 400;
	}
</style>
