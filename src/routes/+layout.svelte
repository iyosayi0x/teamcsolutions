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
</svelte:head>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer/>
</div>
