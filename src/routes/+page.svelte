<script>
</script>

<svelte:head>
	<title>Team Consulting Solutions | Home</title>
	<meta name="description" content="Team Consulting solutions" />
</svelte:head>

<section>
	<div class="home__banner-container">
		<div class="home__banner-cta">
			<h1 class="home__banner-cta__text">Cutting-Edge Cloud, Cybersecurity, and AI Solutions.</h1>
			<p class="home__banner-cta__desc">Cloud, cybersecurity, and AI solutions for success and secure digital transformation.</p>
			<a class="white-btn" href="$top">Contact Us</a>
		</div>
	</div>
</section>

<style lang="scss">
	@import "../css_lib";
	.home__banner-container {
		height: 45rem;
		width: 100%;
		background: rgb(201, 201, 201);
	}

	.home__banner-cta { 
		width: 60%;
		max-width: 80rem;
		padding: 10rem;
		@include flexbox(flex-start, flex-start);
		flex-direction: column;
		gap:2rem;
	}

	.home__banner-cta__text { 
		font-size: calc($text-h1 * 1.4);
		color: white;
	}

	.home__banner-cta__desc { 
		font-size: $text-h4;
		color: white;
	}
</style>
