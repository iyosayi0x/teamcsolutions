<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	import logo from '$lib/assets/logo.png';
	import ServiceNav from './ServiceNav.svelte';
</script>

<header class="header">
	<!-- --- logo ---  -->

	<div>
		<a href="/" class="header__logo-link">
			<section class="header__logo-container">
				<img alt="logo" src={logo} class="header__logo" />
				<div class="desktop-only">Team Consulting Solutions</div>
			</section>
		</a>
	</div>

	<!-- --- navigation ---  -->
	<section class="header__navigation">
		<nav>
			<ul class="header__nav-list">
				<li data-active={$page.url.pathname === '/'}><a href="/">Home</a></li>
				<li
					class="header__nav__services-container"
					data-active={$page.url.pathname === '/services'}
				>
					<a href="/services"
						>Services <Icon icon="ri:arrow-drop-down-line" inline={true} style="font-size:20px" />
					</a>
					<div class="header__nav__services">
						<ServiceNav />
					</div>
				</li>
				<li data-active={$page.url.pathname === '/about'}><a href="/about">About</a></li>
			</ul>
		</nav>
	</section>

	<!-- --- contact ---  -->
	<section class="desktop-only">
		<a href="/contact" class="secondary-btn">Contact Us</a>
	</section>
</header>

<style lang="scss">
	@use '../css_lib' as *;
	.header__logo {
		width: 40px;
		@media screen and (max-width: $tab-phone-breakpoint) {
			width: 25px;
		}
	}

	.header {
		@include flexbox(space-between, center);
		@include useBlockPadding(2rem);
		background: white;
		position: relative;

		@media screen and (max-width: $tab-phone-breakpoint) {
			box-shadow: 1px 3px 10px #bfbfbf;
			padding: 1rem 1rem;
		}
	}

	.header__nav-list {
		list-style: none;
		@include flexbox(space-between, center);
		gap: 3rem;

		li > a {
			text-decoration: none;
			color: black;
			transition: 0.4s;
			padding: 0.3rem 0.6rem;
			&:hover {
				color: $primary-color;
				font-weight: 500;
			}
		}

		li[data-active='true'] > a {
			color: $primary-color;
			border-bottom: 2px solid $primary-color;
		}
	}

	.header__logo-container {
		@include flexbox(flex-start, center);
		gap: 1rem;
		color: $primary-color;
		font-weight: 700;
		font-size: $text-h6;
	}

	.header__logo-link {
		text-decoration: none;
	}

	.header__nav__services {
		position: absolute;
		width: calc(100% - calc($page-block-padding * 3));
		min-height: 5rem;
		left: 50%;
		top: 7rem;
		transform: translateX(-50%);
		background: white;
		box-shadow:
			0 4px 15px rgba(0, 0, 0, 0.2),
			0 2px 6px rgba(0, 0, 0, 0.15);
		border-radius: 0.5rem;
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.3s ease,
			visibility 0.3s ease;
		z-index: 1;
	}

	.header__nav__services-container {
		&:hover,
		&:focus-within {
			.header__nav__services {
				opacity: 1; /* Show the element */
				visibility: visible; /* Make the element visible */
			}
		}
	}

	.header__navigation {
		@media screen and (max-width: $tab-phone-breakpoint) {
			position: fixed;
			background: white;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;
			display: none;

			&::before {
				content: '';
				position: fixed;
				background: red;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
				z-index: -1;
				background: rgba(black, 0.5);
			}

			.header__nav-list {
				flex-direction: column;
				align-items: flex-start;
				padding: 1rem;
				z-index: 10;
				background: white;
				min-height: 20rem;
				justify-content: flex-start;
			}
		}
	}
</style>
