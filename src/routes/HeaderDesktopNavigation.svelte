<script>
	import ServiceNav from './ServiceNav.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
</script>

<!-- --- navigation ---  -->
<section class="desktop-only">
	<nav>
		<ul class="header__nav-list">
			<li data-active={$page.url.pathname === '/'}><a href="/">Home</a></li>
			<li class="header__nav__services-container" data-active={$page.url.pathname === '/services'}>
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

<style lang="scss">
	@use '../css_lib' as *;

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
</style>
