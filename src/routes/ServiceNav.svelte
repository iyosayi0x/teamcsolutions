<script lang="ts">
	import serviceData from '$lib/data/services.json';
</script>

<div class="service__nav">
	<section class="service__nav__main">
		{#each serviceData as service}
			<div class="service__nav__link-wrapper">
				<a href={service.link} class="service__nav__link">
					<div class="service__nav__title">{service.title}</div>
					<div class="service__nav__description">{service.description}</div>
				</a>
			</div>
		{/each}
	</section>
</div>

<style lang="scss">
	@use '../css_lib' as *;

	.service__nav {
		width: 100%;
		height: auto;
		border-radius: 4px;
		@include flexbox(center, flex-start);
		background-color: #f9f9f9; // Light neutral background
	}

	.service__nav__main {
		padding: 1.5rem;
		width: 100%;
		max-width: 1000px; // Limit the width for centered content
		& > div:not(:last-child) {
			margin-bottom: 1.25rem; // Consistent spacing between items
		}
	}

	.service__nav__link-wrapper {
		border-bottom: 1px solid #e0e0e0; // Simple divider between links
		padding-bottom: 0.75rem;
		transition: background-color 0.2s ease; // Subtle hover effect
	}

	.service__nav__link-wrapper:last-child {
		border-bottom: none; // Remove border for the last item
	}

	.service__nav__link {
		text-decoration: none;
		color: #333;
		padding: 0.75rem 0;
		display: block; // Ensure clickable area
	}

	.service__nav__link:hover {
		background-color: #f0f0f0; // Slight change on hover
	}

	.service__nav__title {
		font-size: $text-h5; // Minimal but clear font size
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	.service__nav__description {
		font-size: $text-small;
		font-weight: 400;
		color: #666; // Softer color for the description
		line-height: 1.4;
	}
</style>
