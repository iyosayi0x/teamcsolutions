<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { slide, fade } from 'svelte/transition';
	let navOpen = false;
	const toggleNav = () => {
		navOpen = !navOpen;
	};
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
		<div class="navigation" transition:fade>
			<ul class="navigation__list">
				<li data-active={$page.url.pathname === '/'}><a href="/">Home</a></li>
				<li data-active={$page.url.pathname === '/services'}><a href="/services">Services</a></li>
				<li data-active={$page.url.pathname === '/about'}><a href="/about">About</a></li>
			</ul>

			<div class="contact-button-wrapper">
				<a href="/contact" class="secondary-btn">Contact Us</a>
			</div>
		</div>
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
		top: 120%;
		padding: 1rem 1rem 2rem 1rem;
		width: 16rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Added box-shadow
		transition:
			box-shadow 0.3s ease,
			transform 0.3s ease; // Smooth transitions
		z-index: 10;

		&:hover {
			box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); // Stronger shadow on hover
		}
	}

	.navigation__list {
		list-style: none;
		padding: 0;
		margin: 0;

		& > li {
			margin-bottom: 1rem;
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
</style>
