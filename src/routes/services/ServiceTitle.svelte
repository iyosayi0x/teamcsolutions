<script lang="ts">
	export let service_id: string;
	export let service_title: string;
	export let service_description: string;
	export let reverse_colors: boolean = false;
</script>

<div id={service_id} data-colors-reversed={reverse_colors} class="service__title">
	<div class="service__name">{service_title}</div>
	<div class="service__description">{service_description}</div>
</div>

<style lang="scss">
	@use '../../css_lib' as *;

	.service__name {
		font-size: $text-h4;
		font-weight: 500;
	}

	.service__description {
		font-size: $text-small;
		max-width: 40rem;
		margin-top: 0.4rem;
		color: $grey-color-1;
		line-height: 1.7rem;
	}

	.service__title[data-colors-reversed='true'] {
		.service__name {
			color: white;
		}

		.service__description {
			color: #d7d7d7;
		}
	}
</style>
