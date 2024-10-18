<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Service from './Service.svelte';
	import imageCloud from '$lib/images/cloud.png';
	import imageRobot from '$lib/images/robot-shield.png';
	import fingerPrint from '$lib/images/finger-print.png';

	import Banner from './Banner.svelte';
	import { services } from '$lib/data/services';

	const data = Object.values(services);
	let currentDataIndex = 0;

	// Function to preload images
	function preloadImages() {
		data.forEach((item) => {
			const img = new Image();
			img.src = item.image;
		});
	}

	// life cycle
	let interval: ReturnType<typeof setInterval> | null;

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
		<Banner
			banner={{
				image: bannerData.image,
				description: bannerData.description,
				mainText: bannerData.mainText
			}}
		/>
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
			name: 'AI & Machine Learning',
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
