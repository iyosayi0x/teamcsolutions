<script lang="ts">
	import ServiceItem from './ServiceItem.svelte';
	import ServiceTitle from './ServiceTitle.svelte';
</script>

<section class="service">
	<ServiceTitle
		service_title="Machine Learning"
		service_description="Engage our experts to develop and train custom machine learning models that solve complex problems, optimize processes, and drive innovation."
		service_id="ai-ml"
	/>

	<div class="service__items">
		<ServiceItem
			title="Custom Model Development"
			description="Design machine learning models tailored to your business, driving accurate predictions and insightful decision-making."
			icon="carbon:machine-learning"
		/>
		<ServiceItem
			title="Model Training & Tuning"
			description="Fine-tune your machine learning models for enhanced accuracy and performance, ensuring optimal results."
			icon="carbon:chart-line"
			highlighted={true}
		/>
		<ServiceItem
			title="Automation & Integration"
			description="Integrate machine learning solutions into your workflows, automating processes and boosting operational efficiency."
			icon="carbon:automatic"
		/>
	</div>

	<div class="service__button">
		<a href="tel:info@tecmcsolutions.com" class="primary-btn">Get A Quote</a>
	</div>
</section>

<style lang="scss">
	@use '../../css_lib.scss' as *;

	.service {
		@include useBlockPadding(4rem);
	}

	.service__items {
		gap: 2rem;
		margin-top: 2rem;
		padding: 1rem;

		@media screen and (max-width: $tab-phone-breakpoint) {
			flex-direction: column;
		}
		@include flexbox(space-between, center);
	}

	.service__button {
		margin-top: 2rem;
		text-align: right;
	}
</style>
