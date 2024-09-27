<script lang="ts">
	export let service: IServiceConfig;
	export let reversed = false;
</script>

<div class="service" data-reversed={reversed}>
	<!-- --- service image ---  -->
	<section>
        {#if service.image}
            <img src={service.image} alt={service.name} class="service__image"/>
        {/if}
    </section>

	<section>
		<!-- --- main service ---  -->
		<div>
			<div class="service__name">{service.name}</div>
			<div class="service__tag-line">
				<slot class="service__tag-line__text" />
			</div>
			<p class="service__description">{service.description}</p>
		</div>

		<!-- --- action button ---  -->
		<div class="service__action">
			<a href={service.link} class="primary-btn">Get A Consultation</a>
		</div>
	</section>
</div>

<style lang="scss">
	@use '../css_lib' as *;

	.service {
		@include flexbox(space-between, center);
		padding: 3rem $page-block-padding;
		& > section {
			flex: 0.5;
		}
	}

    .service__image { 
        width: 80%;
        height: 100%;
    }

	.service[data-reversed='true'] {
		flex-direction: row-reverse;
	}

	.service__name {
		font-size: $text-small;
		color: $grey-color-2;
	}

	.service__description {
		font-size: $text-small;
		line-height: 1.5rem;
		color: $grey-color-1;
	}

	.service__action {
		margin-top: 4rem;
	}

	.service__tag-line {
		margin: 1rem 0;
		font-size: $text-h4;
		font-weight: 500;
	}

</style>
