<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	// import { cubicOut } from 'svelte/easing';
	// import { fade } from 'svelte/transition';
	import Service from './Service.svelte';
	import imageCloud from '$lib/images/cloud.png';
	import imageRobot from '$lib/images/robot-shield.png';
	import fingerPrint from '$lib/images/finger-print.png';

	import techImage from '$lib/images/tech-comp.jpg';
	import serverImage from '$lib/images/server-comp.jpg';
	import cyberImage from '$lib/images/robot-shield.png';

	let currentDataIndex = 0;
	const data = [
		{
			mainText: 'Cutting-Edge Cloud, Cybersecurity, and AI Solutions.',
			description:
				'Cloud, cybersecurity, and AI solutions for success and secure digital transformation.',
			image: techImage
		},
		{
			mainText: 'Transform Your Business with Scalable Cloud Services.',
			description: 'Innovative cloud solutions for the future of digital transformation.',
			image: serverImage
		},
		{
			mainText: 'Stay Ahead of Cybersecurity Threats with AI-Driven Solutions.',
			description: 'AI-powered solutions to safeguard and empower your business.',
			image: cyberImage
		}
	];

	let interval: ReturnType<typeof setInterval> | null;

	// Function to preload images
	function preloadImages() {
		data.forEach((item) => {
			const img = new Image();
			img.src = item.image;
		});
	}

	onMount(() => {
		// Preload all images when the component mounts
		preloadImages();

		interval = setInterval(() => {
			currentDataIndex = (currentDataIndex + 1) % data.length;
		}, 5000); // Change image and text every 5 seconds
	});

	// Clean up interval when the component is destroyed
	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<svelte:head>
	<title>Team Consulting Solutions | Home</title>
	<meta name="description" content="Team Consulting solutions" />
</svelte:head>

{#each data as bannerData, i (i)}
	{#if i === currentDataIndex}
		<section
			class="home__banner-container"
			style={`background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(173, 216, 230, 0) 70%), url(${bannerData.image})`}
		>
			<div class="home__banner-cta">
				<h1 class="home__banner-cta__text">{bannerData.mainText}</h1>
				<p class="home__banner-cta__desc">{bannerData.description}</p>
				<a class="white-btn" href="/contact">Contact Us</a>
			</div>
		</section>
	{/if}
{/each}

<section class="home__service-list">
	<!-- --- services ---  -->
	<Service
		service={{
			name: 'Cloud Solutions',
			description:
				'Elevate your business with our comprehensive cloud solutions. Designed to seamlessly scale with your growing needs, our services optimize efficiency and streamline operations. From data storage and management to advanced analytics and collaboration tools, we provide the flexible infrastructure to drive innovation and success.',
			image: imageCloud,
			link: ''
		}}
	>
		Scalable, and efficient <span class="home__service__highlighted">Cloud Services</span>
	</Service>

	<Service
		service={{
			name: 'Cyber Security',
			description:
				"Shield your digital assets with our robust cybersecurity solutions. Tailored to address the ever-evolving threat landscape, our comprehensive services safeguard your data and systems from breaches, malware, and other cyberattacks. From advanced threat detection and prevention to incident response and compliance, we provide the expertise and technology to protect your business's critical information.",
			image: fingerPrint,
			link: ''
		}}
		reversed={true}
	>
		<span class="home__service__highlighted">Advanced protection</span> for your assets
	</Service>

	<Service
		service={{
			name: 'Ai & Machine Learning',
			description:
				'Unlock the power of your data with our cutting-edge AI and machine learning solutions. By harnessing the capabilities of advanced algorithms and predictive analytics, we transform raw data into actionable insights that drive innovation and strategic decision-making. From natural language processing and computer vision to predictive modeling and automation, our solutions empower businesses to gain a competitive edge and achieve unprecedented results.',
			image: imageRobot,
			link: ''
		}}
	>
		<span class="home__service__highlighted">Pioneering AI Solutions</span> for a Smarter Tomorrow.
	</Service>
</section>

<style lang="scss">
	@use '../css_lib' as *;
	@use '../css_lib' as *;

	.home__banner-container {
		height: fit-content;
		min-height: 26rem;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transition: background-image 1.5s ease-in-out; // Smooth transition for the background image
	}

	.home__banner-cta {
		@include flexbox(flex-start, flex-start);

		& {
			width: 60%;
			max-width: 80rem;
			padding: 10rem;
			flex-direction: column;
			gap: 2rem;
			z-index: 1;
			@media screen and (max-width: $tab-phone-breakpoint) {
				width: 100%;
				padding: 2rem 1rem;
			}
		}
	}

	.home__banner-cta__text {
		font-size: calc($text-h1 * 1.4);
		color: white;
		transition: opacity 1s ease; // Smooth transition for text opacity
		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h2;
		}
	}

	.home__banner-cta__desc {
		font-size: $text-h4;
		color: white;
		transition: opacity 1s ease; // Smooth transition for description opacity
		@media screen and (max-width: $tab-phone-breakpoint) {
			font-size: $text-h6;
		}
	}

	.home__service-list {
		@include flexbox(flex-start, center);
		flex-direction: column;
		gap: 4rem;
	}

	.home__service__highlighted {
		color: $primary-color;
		font-size: $text-h2;
	}
</style>
