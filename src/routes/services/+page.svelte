<script lang="ts">
	import ServiceItem from './ServiceItem.svelte';
	import ServiceTitle from './ServiceTitle.svelte';
</script>

<section class="service">
	<ServiceTitle
		service_title="Cloud Service"
		service_description="Hire us to design and implement scalable cloud infrastructure on AWS, tailored to your specific needs and goals."
		service_id="cloud"
	/>

	<div class="service__items">
		<ServiceItem
			title="Scalability"
			description="Easily scale your cloud infrastructure to meet the demands of your business as it grows and evolves."
			icon="carbon:scale"
		/>
		<ServiceItem
			title="Reliability"
			description="Benefit from robust, high-availability cloud services designed to minimize downtime and ensure seamless operation."
			icon="icon-park-outline:protect"
			highlighted={true}
		/>
		<ServiceItem
			title="Cost Optimization"
			description="Optimize your cloud spend by implementing cost-effective strategies while maintaining performance and security."
			icon="carbon:currency"
		/>
	</div>

	<div class="service__button">
		<a href="tel:info@tecmcsolutions.com" class="primary-btn">Get A Quote</a>
	</div>
</section>

<section class="service service__sec">
	<ServiceTitle
		service_title="Cybersecurity"
		service_description="Partner with us to fortify your digital defenses with comprehensive cybersecurity solutions, including threat detection, incident response, and compliance."
		service_id="cyber-security"
		reverse_colors={true}
	/>

	<div class="service__items">
		<ServiceItem
			title="Threat Detection"
			description="Implement advanced threat detection systems to proactively identify and mitigate risks before they become breaches."
			icon="carbon:warning-alt"
		/>
		<ServiceItem
			title="Incident Response"
			description="Respond to security incidents quickly and effectively, minimizing potential damage and restoring system integrity."
			icon="carbon:flash"
			highlighted={true}
		/>
		<ServiceItem
			title="Compliance"
			description="Ensure your systems meet industry standards and regulatory compliance for data protection and privacy."
			icon="carbon:document-security"
		/>
	</div>

	<div class="service__button">
		<a href="tel:info@tecmcsolutions.com" class="primary-btn">Get A Quote</a>
	</div>
</section>

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
		padding: 4rem $page-block-padding;
	}

	.service__items {
		@include flexbox(space-between, center);
		gap: 2rem;
		margin-top: 2rem;
		padding: 1rem;
	}

	.service__button {
		margin-top: 2rem;
		text-align: right;
	}

	.service__sec {
		background-image: url('$lib/assets/images/robot-shield.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
