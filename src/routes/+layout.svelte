<script>
	import '../app.scss';
	import favicon32 from '$lib/assets/images/favicon-32x32.png';
	import favicon16 from '$lib/assets/images/favicon-16x16.png';
	import appleIcon from '$lib/assets/images/apple-touch-icon.png';
	import manifest from '$lib/assets/site.webmanifest';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon32} sizes="32x32" />
	<link rel="icon" href={favicon16} sizes="16x16" />
	<link rel="apple-touch-icon" href={appleIcon} sizes="180x180" />
	<link rel="manifest" href={manifest} />

	<!-- Meta Tags for SEO -->
	<meta
		name="description"
		content="Get in touch with Team Consulting Solutions for expert AI, cybersecurity, and cloud consulting services. Contact us for more information or to request a consultation."
	/>
	<meta
		name="keywords"
		content="Contact, Team Consulting Solutions, AI consulting, Cybersecurity services, Cloud solutions, Technical consulting"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Team Consulting Solutions" />

	<!-- Open Graph Meta Tags for Social Sharing -->
	<meta property="og:title" content="Contact Team Consulting Solutions" />
	<meta
		property="og:description"
		content="Reach out to Team Consulting Solutions for technical solutions in AI, cybersecurity, and cloud services."
	/>
	<meta property="og:type" content="website" />
	<!-- <meta property="og:image" content="https://www.yourwebsite.com/images/contact-us-social.jpg" /> -->
	<meta property="og:url" content="https://teamcsolutions.com/contact" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contact Team Consulting Solutions" />
	<meta
		name="twitter:description"
		content="Get in touch for AI, cybersecurity, and cloud consulting services."
	/>
	<!-- <meta name="twitter:image" content="https://www.yourwebsite.com/images/contact-us-twitter.jpg" /> -->

	<!-- Viewport Meta Tag for Mobile Responsiveness -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
