<script>
	import logo from '$lib/assets/logo.png';
</script>

<footer class="footer">
	<section class="footer__top">
		<section>
			<div class="footer__logo">
				<img alt="logo" src={logo} width="40" />
				<div class="footer__logo__name">Team Consulting Solutions</div>
			</div>

			<div>
				<p class="footer__cta">
					Elevate Your Business with Cutting-Edge <span class="footer__cta-services"
						>Cloud, Cybersecurity, and AI</span
					> Solutions.
				</p>
			</div>
		</section>

		<div class="footer__sub_links">
			<section>
				<div class="footer__section__title">QUICK LINKS</div>
				<ul class="footer__section__links">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/services">Services</a>
					</li>

					<li>
						<a href="/about">About Us</a>
					</li>
				</ul>
			</section>

			<section>
				<div class="footer__section__title">SERVICES</div>
				<ul class="footer__section__links">
					<li>
						<a href="/services#cyber-security">Cybersecurity</a>
					</li>
					<li>
						<a href="/services#cloud">Cloud Solutions</a>
					</li>

					<li>
						<a href="/services#ai-ml">AI And Machine Learning</a>
					</li>
				</ul>
			</section>

			<section>
				<div class="footer__section__title">COMPANY</div>
				<ul class="footer__section__links">
					<li>
						<a href="/contact">Contact Us</a>
					</li>
					<li>
						<a href="/about#faq">Faq</a>
					</li>
				</ul>
			</section>
		</div>
	</section>

	<section class="footer__bottom">
		<div>
			2024 <div class="dot" />
			&copy; Team Consulting Solutions
		</div>
	</section>
</footer>

<style lang="scss">
	@use '../css_lib' as *;

	.footer {
		border-top: 1px solid rgba($grey-color-1, 0.4);
	}

	.footer__logo {
		@include flexbox(flex-start, center);
		& {
			gap: 1rem;
			margin-bottom: 2rem;

			@media screen and (max-width: $tab-phone-breakpoint) {
				margin-bottom: 1rem;
			}
		}
	}
	.footer__logo__name {
		color: $grey-color-1;
		font-weight: 500;
	}
	.footer__top {
		margin-bottom: 2rem;
		@include useBlockPadding(2.5rem);
		@include flexbox(space-between, flex-start);

		@media screen and (max-width: $tab-phone-breakpoint) {
			display: block;
		}
	}

	.footer__sub_links {
		@include flexbox(space-between, flex-start);
		gap: 4rem;

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
			margin-top: 3rem;
		}
	}

	.footer__cta {
		max-width: 40rem;
		font-weight: 500;
		line-height: 2.1rem;
		color: $grey-color-1;
	}

	.footer__cta-services {
		font-size: $text-h3;
		font-weight: 500;
		color: black;

		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h4;
		}
	}

	.footer__section__title {
		color: black;
		font-size: $text-h6;
		font-weight: 500;
		margin-bottom: 1rem;
	}

	.footer__section__links {
		list-style: none;
		li:not(:last-child) {
			margin-bottom: 1rem;
		}
		li a {
			text-decoration: none;
			color: $grey-color-1;
			font-size: $text-small;
		}
	}

	.footer__bottom {
		@include useBlockPadding(1.5rem);
		border-top: 1px solid rgba($grey-color-1, 0.4);

		& {
			div {
				@include flexbox(flex-start, center);
				gap: 0.4rem;
				color: $grey-color-1;
			}
		}
	}
</style>
