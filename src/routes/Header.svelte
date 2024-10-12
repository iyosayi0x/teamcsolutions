<script>
	import FullLogo from './FullLogo.svelte';
	import HeaderDesktopNavigation from './HeaderDesktopNavigation.svelte';
	import HeaderMobileNavigation from './HeaderMobileNavigation.svelte';
</script>

<header class="header">
	<!-- --- logo ---  -->
	<FullLogo />

	<!-- --- desktop navigation ---  -->
	<HeaderDesktopNavigation />

	<!-- --- mobile navigation ---  -->
	<HeaderMobileNavigation />
</header>

<style lang="scss">
	@use '../css_lib' as *;

	.header {
		@include flexbox(space-between, center);
		@include useBlockPadding(1.4rem);
		& > div {
			border: 1px solid red;
		}

		& {
			background: white;
			position: relative;
			border-bottom: 2px solid rgba($grey-color-1, 0.1);

			@media screen and (max-width: $tab-phone-breakpoint) {
				box-shadow: 1px 3px 10px #bfbfbf;
				padding: 1rem 1rem;
			}
		}
	}
</style>
