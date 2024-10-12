<script>
	import logo from '$lib/assets/logo.png';
</script>

<a href="/" class="logo">
	<div class="footer__logo">
		<img alt="logo" src={logo} width="40" />
		<div class="footer__logo__name">Team Consulting Solutions</div>
	</div>
</a>

<style lang="scss">
	@use '../css_lib' as *;

	.logo {
		text-decoration: none;
		color: $primary-color;
		height: fit-content;
	}

	.footer__logo {
		@include flexbox(flex-start, center);
		gap: 0.6rem;
	}

	.footer__logo__name {
		color: $primary-color;
		font-weight: 700;
		font-size: $text-h5;

		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h6;
		}
	}
</style>
