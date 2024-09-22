<script>
	import logo from '$lib/assets/logo.png';
</script>

<header class="header">
	<a href="/" class="header__logo-link">
		<section class="header__logo-container">
			<img alt="logo" src={logo} />
			<div>TC Solutions</div>
		</section>
	</a>


	<section>
		<nav>
			<ul class="header__nav-list">
				<li><a href="/">Home</a></li>
				<li>Services</li>
				<li><a href="/why">Why Us</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</section>

	<section>
		<a href="#top" class="secondary-btn">Contact Us</a>
	</section>
</header>

<style lang="scss">
	@import '../css_lib';

	.header {
		@include flexbox(space-between, center);
		padding: 2.5rem 7.5rem;
		background: white;
	}

	.header__nav-list {
		list-style: none;
		@include flexbox(space-between, center);
		gap: 3rem;
		li,
		li > a {
			text-decoration: none;
			color: black;
			font-weight: 500;
			font-size: $text-h5;
		}
	}

	.header__logo-container {
		@include flexbox(flex-start, center);
		gap: 1rem;
		color: $primary-color;
		font-weight: 700;
		font-size: $text-small;
	}

	.header__logo-link { 
		text-decoration: none;
	}
</style>
