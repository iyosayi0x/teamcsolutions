<script>
	import { services, feats, benefits } from '$lib/data/services';
	import BaseServicePage from '../BaseServicePage.svelte';
</script>

<BaseServicePage
	bannerConfig={services.cloud}
	features={feats.cloud.features}
	benefitsConfig={{ title: benefits.cloud.title }}
	benefits={benefits.cloud.benefits}
/>
