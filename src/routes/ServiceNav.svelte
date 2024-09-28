<script lang="ts">
	import serviceData from '$lib/data/services.json';
	import Icon from '@iconify/svelte';
</script>

<div class="service__nav">
	<section class="service__nav__main">
		{#each serviceData as service}
			<a href={service.link} class="service__nav__link">
				<div class="service__nav__icon">
					<Icon icon={service.icon} />
				</div>
				<div>
					<div>{service.title}</div>
					<div>{service.description}</div>
				</div>
			</a>
		{/each}
	</section>

	<aside class="service__nav__aside">
		<div class="service__nav__custom">Are looking for custom service? <a href="mailto:info@teamcsolutions.com">Contact Us</a></div>
	</aside>
</div>

<style lang="scss">
	@use '../css_lib' as *;
	.service__nav {
		height: 100%;
		width: 100%;
		border-radius: inherit;
		@include flexbox(space-between, flex-start);
	}

	.service__nav__main {
		flex: 0.6;
		padding: 1rem;
	}

	.service__nav__link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #333; // Darker text color for readability
		margin: 1rem 0;
		padding: 0.5rem;
		border-radius: 8px;
		transition: background-color 0.3s ease;
	}

	.service__nav__icon {
		border: none;
		margin-right: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: #f0f0f0; // Background for icons
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.service__nav__link > div:last-child {
		display: flex;
		flex-direction: column;
	}

	.service__nav__link div:first-child {
		font-weight: 500;
		color: #000;
	}

	.service__nav__link div:last-child {
		font-size: $text-small;
		color: #666;
		margin-top: 0.2rem;
	}

	.service__nav__aside {
		flex: 0.35;
		align-self: stretch;
		background: #e1e1e1;
		border-radius: 0 .5rem .5rem 0;
		@include flexbox(center, flex-end);
		padding-bottom: 2rem;
	}

	.service__nav__custom { 
		font-size: $text-small;
		text-align: center;
		background: white;
		width: fit-content;
		margin: 0 auto;
		padding: .7rem 1rem;
		border-radius: .7rem;
		a  {
			text-decoration: none;
			color: $primary-color;
		}
	}
</style>
