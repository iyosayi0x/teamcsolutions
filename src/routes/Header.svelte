<script>
	import logo from '$lib/assets/logo.png';
	import HeaderDesktopNavigation from './HeaderDesktopNavigation.svelte';
	import HeaderMobileNavigation from './HeaderMobileNavigation.svelte';
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

	<!-- --- desktop navigation ---  -->
	<HeaderDesktopNavigation />

	<!-- --- mobile navigation ---  -->
	<HeaderMobileNavigation />
</header>

<style lang="scss">
	@use '../css_lib' as *;
	.header__logo {
		width: 40px;
		@media screen and (max-width: $tab-phone-breakpoint) {
			width: 30px;
		}
	}

	.header {
		@include flexbox(space-between, center);
		@include useBlockPadding(2rem);

		& {
			background: white;
			position: relative;

			@media screen and (max-width: $tab-phone-breakpoint) {
				box-shadow: 1px 3px 10px #bfbfbf;
				padding: 1rem 1rem;
			}
		}
	}

	.header__logo-container {
		@include flexbox(flex-start, center);
		& {
			gap: 1rem;
			color: $primary-color;
			font-weight: 700;
			font-size: $text-h6;
		}
	}

	.header__logo-link {
		text-decoration: none;
	}
</style>
