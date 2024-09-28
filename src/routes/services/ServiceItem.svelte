<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string;
	export let title: string;
	export let description: string;
	export let highlighted: boolean = false;
</script>

<article data-highlighted={highlighted} class="service__item">
	<div class="service__item__icon-wrapper">
		<Icon {icon} />
	</div>
	<div class="service__item__title">{title}</div>
	<div class="service__item__description">{description}</div>
</article>

<style lang="scss">
	@use '../../css_lib' as *;
	.service__item {
		background: white;
		box-shadow: 2px 2px 10px 1px #0000001a;
		padding: 3rem 1rem 1rem 1rem;
		position: relative;
		align-self: stretch;
		border-radius: 0.5rem;
		color: black;
		transition: 0.4s;

		&:hover {
			transform: scale(1.05);
		}
	}

	.service__item__icon-wrapper {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		position: absolute;
		top: -1rem;
		left: 50%;
		transform: translateX(-50%);
		background: $primary-color;
		color: white;
	}

	.service__item__title {
		font-weight: 500;
		font-size: $text-h5;
	}

	.service__item__description {
		font-size: $text-small;
		color: $grey-color-1;
		margin-top: 1rem;
		line-height: 1.6rem;
	}

	// .service__item[data-highlighted=true]{
	//     background: $primary-color;
	//     color: white;

	//     .service__item__description {
	//         color: white;
	//     }

	//     .service__item__icon-wrapper {
	//         background: white;
	//         color: $primary-color;
	//     }
	// }
</style>
